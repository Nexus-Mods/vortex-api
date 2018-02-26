"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../actions/app");
const notifications_1 = require("../actions/notifications");
const session_1 = require("../actions/session");
const archives_1 = require("./archives");
const lazyRequire_1 = require("./lazyRequire");
const log_1 = require("./log");
const message_1 = require("./message");
const reduxSanity_1 = require("./reduxSanity");
const selectors_1 = require("./selectors");
const storeHelper_1 = require("./storeHelper");
const util_1 = require("./util");
const Promise = require("bluebird");
const electron_1 = require("electron");
const events_1 = require("events");
const fs = require("fs");
const modmeta = lazyRequire_1.default('modmeta-db');
const path = require("path");
const ReduxWatcher = require("redux-watcher");
const rimraf = require("rimraf");
const shortid_1 = require("shortid");
let app = electron_1.app;
let dialog = electron_1.dialog;
if (electron_1.remote !== undefined) {
    app = electron_1.remote.app;
    dialog = electron_1.remote.dialog;
}
function asarUnpacked(input) {
    return input.replace('app.asar' + path.sep, 'app.asar.unpacked' + path.sep);
}
class ContextProxyHandler {
    constructor(context) {
        this.mContext = context;
        this.mInitCalls = [];
        this.mApiAdditions = [];
        // TODO: check if this is necessary. Ususally the arrow lambda should
        //   bind this automatically
        // tslint:disable-next-line:no-this-assignment
        const that = this;
        this.mOptional = new Proxy({}, {
            get(target, key) {
                return (...args) => {
                    that.mInitCalls.push({
                        extension: that.mCurrentExtension,
                        extensionPath: that.mCurrentPath,
                        key: key.toString(),
                        arguments: args,
                        optional: true,
                    });
                };
            },
        });
    }
    /**
     * returns the parameters of calls to the specified function
     */
    getCalls(name) {
        return this.mInitCalls.filter((call) => call.key === name);
    }
    invokeAdditions() {
        this.mApiAdditions.forEach((addition) => {
            this.getCalls(addition.key).forEach(call => {
                addition.callback(...call.arguments, call.extensionPath);
            });
        });
    }
    /**
     * remove all init calls from incompatible extensions
     */
    unloadIncompatible(furtherAPIs, allExtensions) {
        const addAPIs = this.mApiAdditions.map((addition) => addition.key);
        const fullAPI = new Set([...furtherAPIs, ...this.staticAPIs, ...addAPIs]);
        const incompatibleExtensions = {};
        this.mInitCalls.filter((call) => !call.optional && !fullAPI.has(call.key))
            .forEach((call) => {
            log_1.log('debug', 'unsupported api call', { extension: call.extension, api: call.key });
            util_1.setdefault(incompatibleExtensions, call.extension, [])
                .push({ id: 'unsupported-api' });
        });
        const testValid = (extId, requiredId) => {
            if (allExtensions.indexOf(requiredId) === -1) {
                util_1.setdefault(incompatibleExtensions, extId, []).push({ id: 'dependency', args: { dependencyId: requiredId } });
            }
        };
        this.getCalls('requireExtension').forEach(call => {
            testValid(call.extension, ...call.arguments);
        });
        if (Object.keys(incompatibleExtensions).length > 0) {
            log_1.log('info', 'extensions ignored for using unsupported api', { extensions: Object.keys(incompatibleExtensions).join(', ') });
            this.mInitCalls = this.mInitCalls.filter((call) => incompatibleExtensions[call.extension] === undefined);
        }
        else {
            if (electron_1.remote !== undefined) {
                log_1.log('debug', 'all extensions compatible');
            }
        }
        return incompatibleExtensions;
    }
    /**
     * change the extension name currently being loaded
     */
    setExtension(extension, extensionPath) {
        this.mCurrentExtension = extension;
        this.mCurrentPath = extensionPath;
    }
    has(target, key) {
        return true;
    }
    get(target, key) {
        if (key in this.mContext) {
            return this.mContext[key];
        }
        else if (key === 'optional') {
            return this.mOptional;
        }
        return (key in this.mContext)
            ? this.mContext[key]
            : (...args) => {
                this.mInitCalls.push({
                    extension: this.mCurrentExtension,
                    extensionPath: this.mCurrentPath,
                    key: key.toString(),
                    arguments: args,
                    optional: false,
                });
            };
    }
    set(target, key, value, receiver) {
        this.mApiAdditions.push({
            key: key.toString(),
            callback: value,
        });
        return true;
    }
    get staticAPIs() {
        // trick so we get a compile time error from tsc if this object doesn't
        // match the interface
        const dummy = {
            registerMainPage: undefined,
            registerDashlet: undefined,
            registerDialog: undefined,
            registerSettings: undefined,
            registerAction: undefined,
            registerBanner: undefined,
            registerDeploymentMethod: undefined,
            registerInstaller: undefined,
            registerFooter: undefined,
            registerToDo: undefined,
            registerModSource: undefined,
            registerReducer: undefined,
            registerPersistor: undefined,
            registerSettingsHive: undefined,
            registerTableAttribute: undefined,
            registerTest: undefined,
            registerArchiveType: undefined,
            registerGame: undefined,
            registerGameInfoProvider: undefined,
            registerAttributeExtractor: undefined,
            registerModType: undefined,
            registerActionCheck: undefined,
            registerMerge: undefined,
            requireExtension: undefined,
            api: undefined,
            once: undefined,
            onceMain: undefined,
            optional: undefined,
        };
        return Object.keys(dummy);
    }
}
class EventProxy extends events_1.EventEmitter {
    constructor(target) {
        super();
        this.mTarget = target;
        // any listener attached to this proxy will be attached to
        // the event handler in the target process as well so those events
        // get relayed to here
        this.on('newListener', (event, listener) => {
            // TODO: workaround: instead of two parameters I get one array with two elements.
            //   this differs from the documentation of newListener so I assume it'a a bug?
            if (Array.isArray(event)) {
                event = event[0];
            }
            this.mTarget.send('register-relay-listener', event);
        });
        // TODO: support removeListener
        electron_1.ipcMain.on('relay-event', (event, eventName, ...args) => {
            if (event.sender === this.mTarget) {
                super.emit(eventName, ...args);
            }
        });
    }
    emit(eventName, ...args) {
        if (!super.emit(eventName, args) && (this.mTarget !== undefined)) {
            // relay all events this process didn't handle itself to the connected
            // process
            this.mTarget.send('relay-event', eventName, ...args);
            return true;
        }
        return false;
    }
}
const UNDEFINED = {};
/**
 * interface to extensions. This loads extensions and provides the api extensions
 * use
 *
 * @class ExtensionManager
 */
class ExtensionManager {
    constructor(initStore, eventEmitter) {
        this.mWatches = {};
        this.mProtocolHandlers = {};
        this.mModDBCache = {};
        this.getModDB = () => {
            const currentGame = selectors_1.activeGameId(this.mApi.store.getState());
            const currentKey = storeHelper_1.getSafe(this.mApi.store.getState(), ['confidential', 'account', 'nexus', 'APIKey'], '');
            let init;
            let onDone;
            if (this.mModDBPromise === undefined) {
                this.mModDBPromise = new Promise((resolve, reject) => {
                    onDone = resolve;
                });
                init = Promise.resolve();
            }
            else {
                init = this.mModDBPromise;
            }
            return init.then(() => {
                // reset the moddb if necessary so new settings get used
                if ((this.mModDB === undefined)
                    || (currentGame !== this.mModDBGame)
                    || (currentKey !== this.mModDBAPIKey)) {
                    if (this.mModDB !== undefined) {
                        return this.mModDB.close()
                            .then(() => this.mModDB = undefined);
                    }
                    else {
                        return Promise.resolve();
                    }
                }
            })
                .then(() => {
                if (this.mModDB === undefined) {
                    this.mModDB = new modmeta.ModDB(path.join(app.getPath('userData'), 'metadb'), currentGame, [
                        {
                            protocol: 'nexus',
                            url: 'https://api.nexusmods.com/v1',
                            apiKey: currentKey,
                            cacheDurationSec: 86400,
                        },
                    ], log_1.log);
                    this.mModDBGame = currentGame;
                    this.mModDBAPIKey = currentKey;
                    log_1.log('debug', 'initialised');
                }
                return Promise.resolve(this.mModDB);
            })
                .finally(() => {
                if (onDone !== undefined) {
                    onDone();
                }
            });
            // TODO: the fallback to nexus api should somehow be set up in nexus_integration, not here
        };
        this.stateChangeHandler = (watchPath, callback) => {
            // have to initialize to a value that we _know_ is never set by the user.
            let lastValue = UNDEFINED;
            const key = watchPath.join('.');
            const changeHandler = ({ cbStore, selector, prevState, currentState, prevValue, currentValue }) => {
                // redux-watch may trigger even if no change occurred so we have to
                // do our own check, otherwise we could end up in an endless loop
                // if the callback causes redux-watch to trigger again without change
                if ((currentValue === lastValue) && (lastValue !== UNDEFINED)) {
                    return;
                }
                lastValue = currentValue;
                this.mWatches[key].forEach(cb => {
                    try {
                        cb(prevValue, currentValue);
                    }
                    catch (err) {
                        log_1.log('error', 'state change handler failed', {
                            message: err.message,
                            stack: err.stack,
                            key,
                        });
                    }
                });
            };
            if (this.mWatches[key] === undefined) {
                this.mWatches[key] = [];
                this.mReduxWatcher.watch(watchPath, changeHandler);
            }
            this.mWatches[key].push(callback);
        };
        this.registerProtocol = (protocol, callback) => {
            log_1.log('info', 'register protocol', { protocol });
            if (process.execPath.endsWith('electron.exe')) {
                // make it work when using the development version
                app.setAsDefaultProtocolClient(protocol, process.execPath, [path.resolve(__dirname, '..', '..'), '-d']);
            }
            else {
                app.setAsDefaultProtocolClient(protocol, process.execPath, ['-d']);
            }
            this.mProtocolHandlers[protocol] = callback;
        };
        this.registerArchiveHandler = (extension, handler) => {
            this.mArchiveHandlers[extension] = handler;
        };
        this.lookupModReference = (reference) => {
            return this.getModDB()
                .then(modDB => modDB.getByKey(reference.fileMD5));
        };
        this.lookupModMeta = (detail) => {
            const lookupId = this.modLookupId(detail);
            if (this.mModDBCache[lookupId] !== undefined) {
                return Promise.resolve(this.mModDBCache[lookupId]);
            }
            let fileMD5 = detail.fileMD5;
            let fileSize = detail.fileSize;
            if ((fileMD5 === undefined) && (detail.filePath === undefined)) {
                return Promise.resolve([]);
            }
            let promise;
            if (fileMD5 === undefined) {
                promise = modmeta.genHash(detail.filePath).then((res) => {
                    fileMD5 = res.md5sum;
                    fileSize = res.numBytes;
                    this.getApi().events.emit('filehash-calculated', detail.filePath, fileMD5, fileSize);
                });
            }
            else {
                promise = Promise.resolve();
            }
            return promise
                .then(() => this.getModDB())
                .then(modDB => modDB.lookup(detail.filePath, fileMD5, fileSize, detail.gameId))
                .then((result) => {
                this.mModDBCache[lookupId] = result;
                return Promise.resolve(result);
            });
        };
        this.saveModMeta = (modInfo) => {
            return this.getModDB()
                .then(modDB => {
                return new Promise((resolve, reject) => {
                    modDB.insert(modInfo);
                    resolve();
                });
            });
        };
        this.openArchive = (archivePath, options, ext) => {
            if (this.mArchiveHandlers === undefined) {
                // lazy loading the archive handlers
                this.mArchiveHandlers = {};
                this.apply('registerArchiveType', this.registerArchiveHandler);
            }
            if (ext === undefined) {
                ext = path.extname(archivePath).substr(1);
            }
            const creator = this.mArchiveHandlers[ext];
            if (creator === undefined) {
                return Promise.reject(new Error('unsupported archive format ' + ext));
            }
            return creator(archivePath, options || {})
                .then((handler) => Promise.resolve(new archives_1.Archive(handler)));
        };
        this.mPid = process.pid;
        this.mEventEmitter = eventEmitter;
        this.mApi = {
            showErrorNotification: (message, details) => {
                if (typeof (details) === 'string') {
                    dialog.showErrorBox(message, details);
                }
                else {
                    dialog.showErrorBox(message, details.message);
                }
            },
            selectFile: this.selectFile,
            selectExecutable: this.selectExecutable,
            selectDir: this.selectDir,
            events: this.mEventEmitter,
            translate: (input, options) => {
                return this.mTranslator !== undefined ? this.mTranslator.t(input, options) : input;
            },
            getPath: this.getPath,
            onStateChange: (statePath, callback) => undefined,
            registerProtocol: this.registerProtocol,
            deregisterProtocol: this.deregisterProtocol,
            lookupModReference: this.lookupModReference,
            lookupModMeta: this.lookupModMeta,
            saveModMeta: this.saveModMeta,
            openArchive: this.openArchive,
            setStylesheet: (key, filePath) => this.mStyleManager.setSheet(key, filePath),
        };
        if (initStore !== undefined) {
            // apologies for the sync operation but this needs to happen before extensions are loaded
            // and everything in this phase of startup is synchronous anyway
            try {
                const disableExtensions = fs.readdirSync(app.getPath('temp'))
                    .filter(name => name.startsWith('__disable_'));
                disableExtensions.forEach(ext => {
                    initStore.dispatch(app_1.setExtensionEnabled(ext.substr(10), false));
                    fs.unlinkSync(path.join(app.getPath('temp'), ext));
                });
            }
            catch (err) {
                // an ENOENT will happen on the first start where the dir doesn't
                // exist yet. No problem
                if (err.code !== 'ENOENT') {
                    log_1.log('error', 'failed to read disabled extensions', err.message);
                }
            }
            this.mExtensionState = initStore.getState().app.extensions;
            const extensionsPath = path.join(app.getPath('userData'), 'plugins');
            const extensionsToRemove = Object.keys(this.mExtensionState)
                .filter(extId => this.mExtensionState[extId].remove)
                .forEach(extId => {
                rimraf.sync(path.join(extensionsPath, extId));
                initStore.dispatch(app_1.forgetExtension(extId));
            });
            electron_1.ipcMain.on('__get_extension_state', event => {
                event.returnValue = this.mExtensionState;
            });
        }
        else {
            this.mExtensionState = electron_1.ipcRenderer.sendSync('__get_extension_state');
        }
        this.mExtensions = this.loadExtensions();
        this.initExtensions();
    }
    static registerUIAPI(name) {
        ExtensionManager.sUIAPIs.add(name);
    }
    static getExtensionPaths() {
        // only the first extension with a specific name is loaded, so
        // load the bundled ones last so a user can replace them
        return [
            path.join(app.getPath('userData'), 'plugins'),
            asarUnpacked(path.resolve(__dirname, '..', 'bundledPlugins')),
        ];
    }
    setTranslation(translator) {
        this.mTranslator = translator;
    }
    /**
     * sets up the extension manager to work with the specified store
     *
     * @template S State interface
     * @param {Redux.Store<S>} store
     *
     * @memberOf ExtensionManager
     */
    setStore(store) {
        this.mReduxWatcher = new ReduxWatcher(store);
        this.mExtensionState = storeHelper_1.getSafe(store.getState(), ['app', 'extensions'], {});
        this.mApi.sendNotification = (notification) => {
            const noti = Object.assign({}, notification);
            if (noti.id === undefined) {
                noti.id = shortid_1.generate();
            }
            store.dispatch(notifications_1.addNotification(noti));
            return noti.id;
        };
        this.mApi.showErrorNotification =
            (message, details, options) => {
                message_1.showError(store.dispatch, message, details, (options !== undefined) && (options.isHTML === true), (options !== undefined) ? options.id : undefined, (options === undefined) || (options.allowReport !== false));
            };
        this.mApi.dismissNotification = (id) => {
            store.dispatch(notifications_1.dismissNotification(id));
        };
        this.mApi.store = store;
        this.mApi.onStateChange = this.stateChangeHandler;
        if (electron_1.ipcRenderer !== undefined) {
            electron_1.ipcRenderer.on('send-notification', (event, notification) => this.mApi.sendNotification(notification));
            electron_1.ipcRenderer.on('show-error-notification', (event, message, details) => this.mApi.showErrorNotification(message, details));
            store.dispatch(session_1.setExtensionLoadFailures(this.mLoadFailures));
        }
    }
    /**
     * set up the api for the main process.
     *
     * @param {Redux.Store<S>} store
     * @param {NodeJS.Events} ipc channel to the renderer process, in case a call has to be
     *                            delegated there
     *
     * @memberOf ExtensionManager
     */
    setupApiMain(store, ipc) {
        this.mApi.showErrorNotification =
            (message, details) => {
                // unfortunately it appears we can't send an error object via ipc
                const errMessage = typeof (details) === 'string'
                    ? details
                    : details.message + '\n' + details.stack;
                ipc.send('show-error-notification', message, errMessage);
            };
        this.mApi.events = new EventProxy(ipc);
    }
    /**
     * gain acces to the extension api
     *
     * @returns
     *
     * @memberOf ExtensionManager
     */
    getApi() {
        return this.mApi;
    }
    /**
     * retrieve list of all reducers registered by extensions
     */
    getReducers() {
        const reducers = [];
        this.apply('registerReducer', (statePath, reducer) => {
            reducers.push({ path: statePath, reducer });
        });
        this.apply('registerActionCheck', (actionType, check) => {
            reduxSanity_1.registerSanityCheck(actionType, check);
        });
        return reducers;
    }
    /**
     * apply all extensions that were registered by extensions
     *
     * @memberOf ExtensionManager
     */
    applyExtensionsOfExtensions() {
        this.mContextProxyHandler.invokeAdditions();
    }
    /**
     * runs the extension init function with the specified register-function
     * set
     *
     * @param {string} funcName
     * @param {Function} func
     *
     * @memberOf ExtensionManager
     */
    apply(funcName, func) {
        this.mContextProxyHandler.getCalls(funcName).forEach(call => {
            func(...call.arguments);
        });
    }
    /**
     * call the "once" function for all extensions. This should really only be called
     * once.
     */
    doOnce() {
        const calls = this.mContextProxyHandler.getCalls(electron_1.remote !== undefined ? 'once' : 'onceMain');
        return Promise.each(calls, call => {
            const prom = call.arguments[0]() || Promise.resolve();
            return prom.catch(err => {
                log_1.log('warn', 'failed to call once', { err: err.message, stack: err.stack });
                this.mApi.showErrorNotification('Extension failed to initialize. If this isn\'t an official extension, ' +
                    'please report the error to the respective author.', {
                    extension: call.extension,
                    err: err.message,
                    stack: err.stack,
                });
            });
        })
            .then(() => undefined);
    }
    renderStyle() {
        return this.mStyleManager.renderNow();
    }
    getProtocolHandler(protocol) {
        return this.mProtocolHandlers[protocol] || null;
    }
    /**
     * initialize all extensions
     */
    initExtensions() {
        const context = {
            api: this.mApi,
        };
        this.mContextProxyHandler = new ContextProxyHandler(context);
        const contextProxy = new Proxy(context, this.mContextProxyHandler);
        this.mExtensions.forEach(ext => {
            if (electron_1.remote !== undefined) {
                // log this only once so we don't spam the log file with this
                log_1.log('info', 'init extension', { name: ext.name });
                const StyleManager = require('./StyleManager').default;
                this.mStyleManager = new StyleManager(this.mApi);
            }
            this.mContextProxyHandler.setExtension(ext.name, ext.path);
            try {
                ext.initFunc(contextProxy);
            }
            catch (err) {
                log_1.log('warn', 'couldn\'t initialize extension', { name: ext.name, err: err.message, stack: err.stack });
            }
        });
        // need to store them locally for now because the store isn't loaded at this time
        this.mLoadFailures = this.mContextProxyHandler.unloadIncompatible(ExtensionManager.sUIAPIs, this.mExtensions.map(ext => ext.name));
        if (electron_1.remote !== undefined) {
            // renderer process
            log_1.log('info', 'all extensions initialized');
        }
    }
    getPath(name) {
        return app.getPath(name);
    }
    selectFile(options) {
        return new Promise((resolve, reject) => {
            const fullOptions = Object.assign({}, options, { properties: ['openFile'] });
            dialog.showOpenDialog(null, fullOptions, (fileNames) => {
                if ((fileNames !== undefined) && (fileNames.length > 0)) {
                    resolve(fileNames[0]);
                }
                else {
                    resolve(undefined);
                }
            });
        });
    }
    selectExecutable(options) {
        return new Promise((resolve, reject) => {
            const fullOptions = Object.assign({}, options, { properties: ['openFile'], filters: [
                    { name: 'All Executables', extensions: ['exe', 'cmd', 'bat', 'jar', 'py'] },
                    { name: 'Native', extensions: ['exe', 'cmd', 'bat'] },
                    { name: 'Java', extensions: ['jar'] },
                    { name: 'Python', extensions: ['py'] },
                ] });
            dialog.showOpenDialog(null, fullOptions, (fileNames) => {
                if ((fileNames !== undefined) && (fileNames.length > 0)) {
                    resolve(fileNames[0]);
                }
                else {
                    resolve(undefined);
                }
            });
        });
    }
    selectDir(options) {
        return new Promise((resolve, reject) => {
            const fullOptions = Object.assign({}, options, { properties: ['openDirectory'] });
            dialog.showOpenDialog(null, fullOptions, (fileNames) => {
                if ((fileNames !== undefined) && (fileNames.length > 0)) {
                    resolve(fileNames[0]);
                }
                else {
                    resolve(undefined);
                }
            });
        });
    }
    deregisterProtocol(protocol) {
        log_1.log('info', 'deregister protocol');
        if (process.execPath.endsWith('electron.exe')) {
            // make it work when using the development version
            app.removeAsDefaultProtocolClient(protocol, process.execPath, [path.resolve(__dirname, '..', '..')]);
        }
        else {
            app.removeAsDefaultProtocolClient(protocol);
        }
    }
    modLookupId(detail) {
        return `${detail.fileMD5}_${detail.filePath}_${detail.fileSize}_${detail.gameId}`;
    }
    loadDynamicExtension(extensionPath) {
        const indexPath = path.join(extensionPath, 'index.js');
        if (fs.existsSync(indexPath)) {
            return {
                name: path.basename(extensionPath),
                initFunc: require(indexPath).default,
                path: extensionPath,
            };
        }
        else {
            return undefined;
        }
    }
    loadDynamicExtensions(extensionsPath, loadedExtensions) {
        if (!fs.existsSync(extensionsPath)) {
            log_1.log('info', 'failed to load dynamic extensions, path doesn\'t exist', extensionsPath);
            fs.mkdirSync(extensionsPath);
            return [];
        }
        const res = fs.readdirSync(extensionsPath)
            .filter(name => !loadedExtensions.has(name))
            .filter(name => storeHelper_1.getSafe(this.mExtensionState, [name, 'enabled'], true))
            .filter(name => fs.statSync(path.join(extensionsPath, name)).isDirectory())
            .map(name => {
            try {
                // first, mark this extension as loaded. If this is a user extension and there is an
                // extension with the same name in the bundle we could otherwise end up loading the
                // bundled one if this one fails to load which could be convenient but also massively
                // confusing.
                loadedExtensions.add(name);
                const before = new Date().getTime();
                const ext = this.loadDynamicExtension(path.join(extensionsPath, name));
                const loadTime = new Date().getTime() - before;
                log_1.log('debug', 'loaded extension', { name, loadTime });
                return ext;
            }
            catch (err) {
                log_1.log('warn', 'failed to load dynamic extension', { name, error: err.message, stack: err.stack });
                return undefined;
            }
        });
        return res.filter((reg) => reg !== undefined);
    }
    /**
     * retrieves all extensions to the base functionality, both the static
     * and external ones.
     * This loads external extensions from disc synchronously
     *
     * @returns {ExtensionInit[]}
     */
    loadExtensions() {
        const staticExtensions = [
            'settings_interface',
            'settings_application',
            'about_dialog',
            'diagnostics_files',
            'dashboard',
            'starter_dashlet',
            'firststeps_dashlet',
            'mod_management',
            'category_management',
            'profile_management',
            'nexus_integration',
            'download_management',
            'gamemode_management',
            'symlink_activator',
            'symlink_activator_elevate',
            'hardlink_activator',
            'updater',
            'installer_fomod',
            'installer_nested_fomod',
            'settings_metaserver',
            'test_runner',
            'extension_manager',
            'ini_prep',
            'news_dashlet',
            'sticky_mods',
            'browser',
        ];
        require('./extensionRequire').default();
        const extensionPaths = ExtensionManager.getExtensionPaths();
        const loadedExtensions = new Set();
        return staticExtensions
            .filter(ext => storeHelper_1.getSafe(this.mExtensionState, [ext, 'enabled'], true))
            .map((name) => ({
            name,
            path: path.join(extensionPaths[0], name),
            initFunc: require(`../extensions/${name}/index`).default,
        }))
            .concat(...extensionPaths.map(ext => this.loadDynamicExtensions(ext, loadedExtensions)));
    }
}
ExtensionManager.sUIAPIs = new Set();
exports.default = ExtensionManager;
