"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExtSame = isExtSame;
/* eslint-disable */
const app_1 = require("../actions/app");
const notifications_1 = require("../actions/notifications");
const notificationSettings_1 = require("../actions/notificationSettings");
const session_1 = require("../actions/session");
const actions_1 = require("../extensions/extension_manager/actions");
const archives_1 = require("./archives");
const constants_1 = require("./constants");
const CustomErrors_1 = require("./CustomErrors");
const errorHandling_1 = require("./errorHandling");
const getVortexPath_1 = __importDefault(require("./getVortexPath"));
const i18n_1 = require("./i18n");
const lazyRequire_1 = __importDefault(require("./lazyRequire"));
const log_1 = require("./log");
const message_1 = require("./message");
const reduxSanity_1 = require("./reduxSanity");
const ReduxWatcher_1 = __importDefault(require("./ReduxWatcher"));
const runElevatedCustomTool_1 = __importDefault(require("./runElevatedCustomTool"));
const selectors_1 = require("./selectors");
const storeHelper_1 = require("./storeHelper");
const StyleManager_1 = __importDefault(require("./StyleManager"));
const util_1 = require("./util");
const bluebird_1 = __importDefault(require("bluebird"));
const child_process_1 = require("child_process");
const electron_1 = require("electron");
const events_1 = require("events");
const fs = __importStar(require("fs-extra"));
const fuzz = __importStar(require("fuzzball"));
const json_socket_1 = __importDefault(require("json-socket"));
const _ = __importStar(require("lodash"));
const modmeta = (0, lazyRequire_1.default)(() => require('modmeta-db'));
const net = __importStar(require("net"));
const path = __importStar(require("path"));
const semver = __importStar(require("semver"));
const shortid_1 = require("shortid");
const string_template_1 = __importDefault(require("string-template"));
const application_1 = require("./application");
const electronRemote_1 = __importStar(require("./electronRemote"));
const constants_2 = require("../constants");
const vortexmt_1 = require("vortexmt");
const fsVortex = __importStar(require("../util/fs"));
const react_hot_toast_1 = require("react-hot-toast");
function isExtSame(installed, remote) {
    if (installed.modId !== undefined) {
        return installed.modId === remote.modId;
    }
    return installed.name === remote.name;
}
const winapi = (0, lazyRequire_1.default)(() => require('vortex-run'));
const ERROR_OUTPUT_CUTOFF = 3;
function selfCL(userDataPath) {
    let execPath = process.execPath;
    // make it work when using the development version
    if (execPath.endsWith('electron.exe')) {
        execPath = path.join((0, getVortexPath_1.default)('package'), 'vortex.bat');
    }
    const args = [];
    /*
    TODO: This is necessary for downloads to multiple instances to work correctly but
      it doesn't work until https://github.com/electron/electron/issues/18397 is fixed

    if (userDataPath !== undefined) {
      args.push('--user-data', userDataPath);
    }
    */
    args.push('-d');
    return [execPath, args];
}
const setSelfAsProtocolClient = (0, electronRemote_1.makeRemoteCallSync)('set-as-default-protocol-client', (electron, contents, protocol, udPath) => {
    const [execPath, args] = selfCL(udPath);
    electron.app.setAsDefaultProtocolClient(protocol, execPath, args);
});
const isSelfProtocolClient = (0, electronRemote_1.makeRemoteCallSync)('is-self-protocol-client', (electron, contents, protocol, udPath) => {
    const [execPath, args] = selfCL(udPath);
    return electron.app.isDefaultProtocolClient(protocol, execPath, args);
});
const removeSelfAsProtocolClient = (0, electronRemote_1.makeRemoteCallSync)('remove-as-default-protocol-client', (electron, contents, protocol, udPath) => {
    const [execPath, args] = selfCL(udPath);
    electron.app.removeAsDefaultProtocolClient(protocol, execPath, args);
});
const showOpenDialog = (0, electronRemote_1.default)('show-open-dialog', (electron, contents, options) => {
    var _a, _b;
    let window = null;
    try {
        window = (_b = (_a = electron.BrowserWindow) === null || _a === void 0 ? void 0 : _a.fromWebContents) === null || _b === void 0 ? void 0 : _b.call(_a, contents);
    }
    catch (err) {
        // nop
    }
    return electron.dialog.showOpenDialog(window, options);
});
const showSaveDialog = (0, electronRemote_1.default)('show-save-dialog', (electron, contents, options) => {
    var _a, _b;
    let window = null;
    try {
        window = (_b = (_a = electron.BrowserWindow) === null || _a === void 0 ? void 0 : _a.fromWebContents) === null || _b === void 0 ? void 0 : _b.call(_a, contents);
    }
    catch (err) {
        // nop
    }
    return electron.dialog.showSaveDialog(window, options);
});
const appExit = (0, electronRemote_1.makeRemoteCallSync)('exit-application', (electron, contents, exitCode) => {
    electron.app.exit(exitCode);
});
const showErrorBox = (0, electronRemote_1.default)('show-error-box', (electron, contents, title, content) => {
    electron.dialog.showErrorBox(title, content);
    return undefined;
});
const showMessageBox = (0, electronRemote_1.default)('show-message-box', (electron, contents, options) => {
    var _a, _b;
    let window = null;
    try {
        window = (_b = (_a = electron.BrowserWindow) === null || _a === void 0 ? void 0 : _a.fromWebContents) === null || _b === void 0 ? void 0 : _b.call(_a, contents);
    }
    catch (err) {
        // nop
    }
    return electron.dialog.showMessageBox(window, options);
});
function applyVariables(arg, variables) {
    return (0, string_template_1.default)(arg, variables);
}
class ExtEventHandler extends events_1.EventEmitter {
    constructor(wrappee, extension) {
        super();
        this.mFuncMap = new Map();
        this.mWrappee = wrappee;
        this.mExtension = extension;
    }
    addListener(event, listener) {
        this.mWrappee.addListener(event, this.makeWrapped(event, listener));
        return this;
    }
    on(event, listener) {
        const stack = (new Error()).stack;
        return this.addListener(event, listener);
    }
    once(event, listener) {
        this.mWrappee.once(event, this.makeOnceWrapped(event, listener));
        return this;
    }
    prependListener(event, listener) {
        this.mWrappee.prependListener(event, this.makeWrapped(event, listener));
        return this;
    }
    prependOnceListener(event, listener) {
        this.mWrappee.prependOnceListener(event, this.makeOnceWrapped(event, listener));
        return this;
    }
    removeListener(event, listener) {
        if (this.mFuncMap.has(event)) {
            const listeners = this.mFuncMap.get(event);
            const idx = listeners.findIndex(iter => iter.orig === listener);
            if (idx !== -1) {
                this.mWrappee.removeListener(event, listeners[idx].wrapped);
                listeners.splice(idx, 1);
            }
        }
        return this;
    }
    off(event, listener) {
        return this.removeListener(event, listener);
    }
    removeAllListeners(event) {
        this.mWrappee.removeAllListeners(event);
        return this;
    }
    setMaxListeners(n) {
        this.mWrappee.setMaxListeners(n);
        return this;
    }
    getMaxListeners() {
        return this.mWrappee.getMaxListeners();
    }
    // tslint:disable-next-line:ban-types
    listeners(event) {
        return this.mWrappee.listeners(event);
    }
    // tslint:disable-next-line:ban-types
    rawListeners(event) {
        return this.mWrappee.rawListeners(event);
    }
    emit(event, ...args) {
        return this.mWrappee.emit(event, ...args);
    }
    eventNames() {
        return this.mWrappee.eventNames();
    }
    listenerCount(type) {
        return this.mWrappee.listenerCount(type);
    }
    funcMap(event) {
        if (!this.mFuncMap.has(event)) {
            this.mFuncMap.set(event, []);
        }
        return this.mFuncMap.get(event);
    }
    makeWrapped(event, listener) {
        const wrapped = (0, util_1.wrapExtCBSync)(listener, convertExtInfo(this.mExtension));
        this.funcMap(event).push({ orig: listener, wrapped });
        return wrapped;
    }
    makeOnceWrapped(event, listener) {
        const wrapped = (0, util_1.wrapExtCBSync)((...args) => {
            listener(...args);
            this.removeListener(event, listener);
        }, convertExtInfo(this.mExtension));
        this.funcMap(event).push({ orig: listener, wrapped });
        return wrapped;
    }
}
function convertExtInfo(ext) {
    var _a, _b, _c, _d;
    if (ext === undefined) {
        return undefined;
    }
    return {
        name: (_b = (_a = ext.info) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : ext.name,
        namespace: ext.namespace,
        path: ext.path,
        dynamic: ext.dynamic,
        official: (_d = (_c = ext.info) === null || _c === void 0 ? void 0 : _c.bundled) !== null && _d !== void 0 ? _d : true,
    };
}
class APIProxyHandler {
    constructor(extension, enable, events) {
        this.mExtension = extension;
        this.mEnabled = enable;
        this.mEvents = new ExtEventHandler(events, this.mExtension);
    }
    enable() {
        this.mEnabled = true;
    }
    get(target, key) {
        if (key === 'extension') {
            return this.mExtension;
        }
        else if (key === 'translate') {
            return target[key];
        }
        else if (key === 'onAsync') {
            return (eventName, listener) => target['onAsync'](eventName, listener, convertExtInfo(this.mExtension));
        }
        else if (key === 'onStateChange') {
            return (statePath, callback) => target[key](statePath, callback, this.mExtension);
        }
        else if (key === 'events') {
            return this.mEvents;
        }
        else if (key === 'laterT') {
            return (input, options) => new i18n_1.TString(input, options, this.mExtension.namespace);
        }
        else if (key === 'NAMESPACE') {
            return this.mExtension.namespace;
        }
        if (!this.mEnabled) {
            throw new Error('extension uses api in init function');
        }
        return target[key];
    }
}
class APIProxyCreator {
    constructor(extension, events) {
        this.mAPIEnabled = false;
        this.mExtension = extension;
        this.mEvents = events;
    }
    enableAPI() {
        this.mAPIEnabled = true;
        if (this.mProxyHandler !== undefined) {
            this.mProxyHandler.enable();
        }
    }
    get(target, key) {
        if (key === 'api') {
            if (this.mProxy === undefined) {
                this.mProxyHandler = new APIProxyHandler(this.mExtension, this.mAPIEnabled, this.mEvents);
                this.mProxy = new Proxy(target[key], this.mProxyHandler);
            }
            return this.mProxy;
        }
        else {
            return target[key];
        }
    }
}
class ContextProxyHandler {
    constructor(context) {
        this.mMayRegister = true;
        this.findExt = (id, allExtensions) => {
            return allExtensions.find(ext => {
                var _a, _b;
                return (((_a = ext.info) === null || _a === void 0 ? void 0 : _a.name) === id)
                    || (((_b = ext.info) === null || _b === void 0 ? void 0 : _b.id) === id)
                    || (ext.name === id);
            });
        };
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
                    if (!that.mMayRegister) {
                        (0, log_1.log)('warn', 'extension tries to use register call outside init function', {
                            extension: this.mCurrentExtension,
                            call: key,
                        });
                        return;
                    }
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
    endRegistration() {
        this.mMayRegister = false;
    }
    /**
     * returns the parameters of calls to the specified function
     */
    getCalls(name) {
        return this.mInitCalls.filter((call) => call.key === name);
    }
    dropCalls(extNames) {
        this.mInitCalls = this.mInitCalls.filter(iter => iter.extension !== extNames);
    }
    invokeAdditions(extensions) {
        this.mApiAdditions.forEach((addition) => {
            this.getCalls(addition.key).forEach(call => {
                const ext = extensions.find(iter => iter.name === call.extension);
                const extInfo = convertExtInfo(ext);
                addition.callback(...call.arguments, call.extensionPath, extInfo);
            });
        });
    }
    /**
     * Retrieve the map of optional extensions
     *  Each optional requireExtension call is added against the id of the extension that requires it.
     */
    getOptionalExtensions(allExtensions) {
        const optionalRequireCalls = this.getCalls('requireExtension').filter(iter => iter.arguments.length > 2 && iter.arguments[2] === true);
        const missingOptionals = optionalRequireCalls.reduce((acc, iter) => {
            const callingExtensionKey = iter.extension;
            const requiredKey = iter.arguments[0];
            const ext = this.findExt(requiredKey, allExtensions);
            if (ext === undefined) {
                const optional = { id: requiredKey, args: iter.arguments, extensionPath: iter.extensionPath };
                acc = Object.assign(Object.assign({}, acc), { [callingExtensionKey]: [].concat(acc[callingExtensionKey] || [], optional) });
            }
            return acc;
        }, {});
        return missingOptionals;
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
            (0, log_1.log)('debug', 'unsupported api call', { extension: call.extension, api: call.key });
            (0, util_1.setdefault)(incompatibleExtensions, call.extension, [])
                .push({ id: 'unsupported-api' });
        });
        const testValid = (extId, requiredId, version, optional) => {
            var _a;
            if (!optional) {
                const req = this.findExt(requiredId, allExtensions);
                if (req === undefined) {
                    (0, util_1.setdefault)(incompatibleExtensions, extId, []).push({ id: 'dependency', args: { dependencyId: requiredId } });
                }
                else if ((version !== undefined) && !semver.satisfies((_a = req.info) === null || _a === void 0 ? void 0 : _a.version, version)) {
                    (0, util_1.setdefault)(incompatibleExtensions, extId, []).push({ id: 'dependency', args: { dependencyId: requiredId, version } });
                }
            }
        };
        this.getCalls('requireExtension').forEach(call => {
            testValid(call.extension, ...call.arguments);
        });
        this.getCalls('requireVersion').forEach(call => {
            if ((process.env.NODE_ENV !== 'development')
                && !semver.satisfies((0, application_1.getApplication)().version, call.arguments[0], { includePrerelease: true })) {
                (0, util_1.setdefault)(incompatibleExtensions, call.extension, []).push({ id: 'unsupported-version' });
            }
        });
        if (Object.keys(incompatibleExtensions).length > 0) {
            (0, log_1.log)('info', 'extensions ignored for using unsupported api', { extensions: Object.keys(incompatibleExtensions).join(', ') });
            this.mInitCalls = this.mInitCalls.filter((call) => incompatibleExtensions[call.extension] === undefined);
        }
        else {
            if (process.type === 'renderer') {
                (0, log_1.log)('debug', 'all extensions compatible');
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
                if (!this.mMayRegister) {
                    (0, log_1.log)('warn', 'extension tries to use register call outside init function', {
                        extension: this.mCurrentExtension,
                        call: key,
                    });
                    return;
                }
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
            registerOverlay: undefined,
            registerSettings: undefined,
            registerAction: undefined,
            registerControlWrapper: undefined,
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
            registerGameStub: undefined,
            registerGameStore: undefined,
            registerGameInfoProvider: undefined,
            registerAttributeExtractor: undefined,
            registerModType: undefined,
            registerActionCheck: undefined,
            registerMerge: undefined,
            registerInterpreter: undefined,
            registerStartHook: undefined,
            registerMigration: undefined,
            registerToolVariables: undefined,
            registerLoadOrderPage: undefined,
            registerLoadOrder: undefined,
            registerGameSpecificCollectionsData: undefined,
            registerHistoryStack: undefined,
            registerAPI: undefined,
            requireVersion: undefined,
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
        this.mRemoteCallbacks = {};
        this.mRemotePromises = {};
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
        electron_1.ipcMain.on('relay-cb', (event, id, ...args) => {
            const cb = this.mRemoteCallbacks[id];
            if (cb !== undefined) {
                const newArgs = args.map(arg => {
                    if (arg.__promise === undefined) {
                        return arg;
                    }
                    else {
                        return new bluebird_1.default((resolve, reject) => {
                            this.mRemotePromises[arg.__promise] = { resolve, reject };
                        });
                    }
                });
                cb(...newArgs);
                delete this.mRemoteCallbacks[id];
            }
        });
        electron_1.ipcMain.on('relay-cb-resolve', (event, id, res) => {
            const prom = this.mRemotePromises[id];
            if (prom !== undefined) {
                prom.resolve(res);
                delete this.mRemotePromises[id];
            }
        });
        electron_1.ipcMain.on('relay-cb-reject', (event, id, err) => {
            const prom = this.mRemotePromises[id];
            if (prom !== undefined) {
                prom.reject(err);
                delete this.mRemotePromises[id];
            }
        });
    }
    emit(eventName, ...args) {
        if (!super.emit(eventName, args)
            && (this.mTarget !== undefined)
            && !this.mTarget.isDestroyed()) {
            // relay all events this process didn't handle itself to the connected
            // process
            if (typeof (args[args.length - 1]) === 'function') {
                const id = (0, shortid_1.generate)();
                this.mRemoteCallbacks[id] = args[args.length - 1];
                const newArgs = [].concat(args.slice(0, args.length - 1), id);
                this.mTarget.send('relay-event-with-cb', eventName, ...newArgs);
            }
            else {
                this.mTarget.send('relay-event', eventName, ...args);
            }
            return true;
        }
        return false;
    }
}
const UNDEFINED = {};
function convertMD5Result(input) {
    return input;
}
/**
 * interface to extensions. This loads extensions and provides the api extensions
 * use
 *
 * @class ExtensionManager
 */
class ExtensionManager {
    static registerUIAPI(name) {
        ExtensionManager.sUIAPIs.add(name);
    }
    static getExtensionPaths() {
        // only the first extension with a specific name is loaded, so
        // load the bundled ones last so a user can replace them
        return [
            { path: path.join((0, getVortexPath_1.default)('userData'), 'plugins'), bundled: false },
            { path: (0, getVortexPath_1.default)('bundledPlugins'), bundled: true },
        ];
    }
    constructor(initStore, eventEmitter) {
        this.mWatches = {};
        this.mProtocolHandlers = {};
        this.mRepositoryLookup = {};
        this.mModDBCache = {};
        this.mLoadFailures = {};
        this.mOptionalExtensions = {};
        this.mLoadingCallbacks = [];
        this.mProgrammaticMetaServers = {};
        this.mForceDBReconnect = false;
        this.mOutdated = [];
        this.mFailedWatchers = new Set();
        // the idea behind this was that we might want to support things like typescript
        // or coffescript directly but that would require us shipping the corresponding compilers
        this.mExtensionFormats = ['index.js'];
        this.watcherError = (err, selector) => {
            const id = selector.join('.');
            if (!this.mFailedWatchers.has(id)) {
                (0, log_1.log)('warn', 'Failed to trigger state listener', {
                    error: err.message,
                    selector: JSON.stringify(selector),
                });
                this.mFailedWatchers.add(id);
            }
        };
        this.getModDB = () => {
            const gameMode = (0, selectors_1.activeGameId)(this.mApi.store.getState());
            const currentKey = (0, storeHelper_1.getSafe)(this.mApi.store.getState(), ['confidential', 'account', 'nexus', 'APIKey'], '');
            let init;
            let onDone;
            if (this.mModDBPromise === undefined) {
                this.mModDBPromise = new bluebird_1.default((resolve, reject) => {
                    onDone = () => {
                        this.mModDBPromise = undefined;
                        resolve();
                    };
                });
                init = bluebird_1.default.resolve();
            }
            else {
                init = this.mModDBPromise;
            }
            return init.then(() => {
                // reset the moddb if necessary so new settings get used
                if ((this.mModDB === undefined)
                    || this.mForceDBReconnect
                    || (gameMode !== this.mModDBGame)
                    || (currentKey !== this.mModDBAPIKey)) {
                    this.mForceDBReconnect = false;
                    if (this.mModDB !== undefined) {
                        return this.mModDB.close()
                            .then(() => this.mModDB = undefined);
                    }
                }
                return bluebird_1.default.resolve();
            })
                .then(() => (this.mModDB !== undefined)
                ? bluebird_1.default.resolve()
                : this.connectMetaDB(gameMode, currentKey)
                    .then(modDB => {
                    this.mModDB = modDB;
                    this.mModDBGame = gameMode;
                    this.mModDBAPIKey = currentKey;
                    (0, log_1.log)('debug', 'initialised');
                }))
                .then(() => this.mModDB)
                .finally(() => {
                if (onDone !== undefined) {
                    onDone();
                }
            });
            // TODO: the fallback to nexus api should somehow be set up in nexus_integration, not here
        };
        this.canBeToast = (notif) => {
            const invalidToastTypes = ['activity', 'warning'];
            if ((notif.displayMS != null && notif.displayMS <= 5000)
                && notif.noToast !== true
                && (notif.actions == null || notif.actions.length === 0)
                && !invalidToastTypes.includes(notif.type)) {
                return true;
            }
            return false;
        };
        this.stateChangeHandler = (watchPath, callback, ext) => {
            if (!(0, util_1.isFunction)(callback)) {
                // TODO we should be throwing an exception here but this didn't fail in the past and I don't
                //   want to break previously ok extensions in a minor update
                // throw new Error('attempt to register invalid change handler');
                (0, log_1.log)('error', 'attempt to register invalid change handler', { stack: (new Error()).stack });
                return;
            }
            const stackErr = new Error();
            // have to initialize to a value that we _know_ is never set by the user.
            let lastValue = UNDEFINED;
            const key = watchPath.join('.');
            // TODO: this code makes using the ReduxWatcher pointless and looking at the
            //   code I would now disagree with the assessment that it may retrigger
            //   without an actual change. otoh I didn't add this for no reason...
            const changeHandler = ({ prevValue, currentValue }) => {
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
                        (0, log_1.log)('error', 'state change handler failed', {
                            message: err.message,
                            stack1: err.stack,
                            stack2: stackErr.stack,
                            key,
                        });
                    }
                });
            };
            if (this.mWatches[key] === undefined) {
                this.mWatches[key] = [];
                this.mReduxWatcher.on(watchPath, changeHandler);
            }
            this.mWatches[key].push((0, util_1.wrapExtCBSync)(callback, convertExtInfo(ext)));
        };
        this.showErrorBox = (message, details) => {
            if (typeof (details) === 'string') {
                showErrorBox(message, details);
            }
            else {
                showErrorBox(message, details.message);
            }
        };
        this.commandLineUserData = () => { var _a; return (_a = this.mApi.getState().session.base.commandLine) === null || _a === void 0 ? void 0 : _a.userData; };
        this.registerProtocol = (protocol, def, callback) => {
            (0, log_1.log)('info', 'register protocol', { protocol });
            const haveToRegister = def && !isSelfProtocolClient(protocol, this.commandLineUserData());
            if (def) {
                setSelfAsProtocolClient(protocol, this.commandLineUserData());
            }
            this.mProtocolHandlers[protocol] = callback;
            return haveToRegister;
        };
        this.registerRepositoryLookup = (repository, preferOverMD5, func) => {
            this.mRepositoryLookup[repository] = { preferOverMD5, func };
        };
        this.registerArchiveHandler = (extension, handler) => {
            this.mArchiveHandlers[extension] = handler;
        };
        this.deregisterProtocol = (protocol) => {
            (0, log_1.log)('info', 'deregister protocol');
            removeSelfAsProtocolClient(protocol, this.commandLineUserData());
        };
        this.lookupModReference = (reference, options) => {
            if (options === undefined) {
                options = {};
            }
            // Spammy debug log
            // log('debug', 'lookup mod reference', { reference });
            let lookup;
            let preMD5 = bluebird_1.default.resolve([]);
            if (reference.repo !== undefined) {
                lookup = this.mRepositoryLookup[reference.repo.repository];
            }
            if ((lookup !== undefined) && lookup.preferOverMD5) {
                preMD5 = lookup.func(reference.repo);
            }
            return preMD5.then((results) => {
                if (options.requireURL === true) {
                    results = results.filter(res => (0, util_1.truthy)(res.value.sourceURI));
                }
                if (results.length !== 0) {
                    return results;
                }
                else {
                    return this.getModDB()
                        .then(modDB => modDB.getByReference(reference))
                        .filter((mod) => {
                        if (options.requireURL === true) {
                            return (0, util_1.truthy)(mod.value.sourceURI);
                        }
                        else {
                            return true;
                        }
                    })
                        .map((mod) => convertMD5Result(mod));
                }
            })
                .then((results) => {
                if (results.length !== 0) {
                    if (reference.logicalFileName !== undefined) {
                        const exactMatch = results.filter(iter => (iter.value.logicalFileName !== undefined)
                            && (iter.value.logicalFileName === reference.logicalFileName));
                        if (exactMatch.length > 0) {
                            return exactMatch;
                        }
                        else {
                            return results.sort((lhs, rhs) => fuzz.ratio(rhs.value.logicalFileName, reference.logicalFileName)
                                - fuzz.ratio(lhs.value.logicalFileName, reference.logicalFileName));
                        }
                    }
                    else {
                        return results;
                    }
                }
                else {
                    if ((lookup !== undefined) && !lookup.preferOverMD5) {
                        return lookup.func(reference.repo);
                    }
                    else {
                        return [];
                    }
                }
            });
        };
        this.lookupModMeta = (detail, ignoreCache) => {
            if ((detail.fileName !== undefined) && (detail.fileSize === 0)) {
                (0, log_1.log)('error', 'trying to calculate hash for an empty file', {
                    name: detail.fileName,
                    trace: (new Error()).stack,
                });
                const err = new CustomErrors_1.ProcessCanceled('trying to calculate hash for an empty file');
                err['fileName'] = detail.fileName;
                return bluebird_1.default.reject(err);
            }
            if ((detail.fileMD5 === undefined) && (detail.filePath === undefined)) {
                return bluebird_1.default.resolve([]);
            }
            let lookupId = this.modLookupId(detail);
            if ((this.mModDBCache[lookupId] !== undefined) && (ignoreCache !== true)) {
                return bluebird_1.default.resolve(this.mModDBCache[lookupId]);
            }
            let fileMD5 = detail.fileMD5;
            let fileSize = detail.fileSize;
            if ((fileMD5 === undefined) && (detail.filePath === undefined)) {
                return bluebird_1.default.resolve([]);
            }
            let promise;
            if (fileMD5 === undefined) {
                promise = this.genMd5Hash(detail.filePath).then((res) => {
                    fileMD5 = res.md5sum;
                    fileSize = res.numBytes;
                    lookupId = this.modLookupId(Object.assign(Object.assign({}, detail), { fileMD5,
                        fileSize }));
                    this.getApi().events.emit('filehash-calculated', detail.filePath, fileMD5, fileSize, detail.gameId);
                })
                    .catch(err => {
                    (0, log_1.log)('info', 'failed to calculate hash', { path: detail.filePath, error: err.message });
                    return bluebird_1.default.resolve();
                });
            }
            else {
                promise = bluebird_1.default.resolve();
            }
            // lookup id may be updated now
            if ((this.mModDBCache[lookupId] !== undefined) && (ignoreCache !== true)) {
                return bluebird_1.default.resolve(this.mModDBCache[lookupId]);
            }
            return promise
                .then(() => this.getModDB())
                .then(modDB => (fileSize !== 0) && (fileMD5 !== undefined)
                ? modDB.lookup(undefined, fileMD5, fileSize, detail.gameId)
                : [])
                .then((result) => {
                const resultSorter = this.makeSorter(detail);
                this.mModDBCache[lookupId] = result.sort(resultSorter);
                return bluebird_1.default.resolve(this.mModDBCache[lookupId]);
            });
        };
        this.saveModMeta = (modInfo) => {
            const lookupId = this.modLookupId({
                fileMD5: modInfo.fileMD5,
                filePath: modInfo.fileName,
                fileSize: modInfo.fileSizeBytes,
                gameId: modInfo.gameId,
            });
            delete this.mModDBCache[lookupId];
            return this.getModDB()
                .then(modDB => {
                return new bluebird_1.default((resolve, reject) => {
                    modDB.insert([modInfo]);
                    resolve();
                });
            });
        };
        this.genMd5Hash = (data, progressFunc) => {
            let lastProgress = 0;
            const progressHash = (progress, total) => {
                progressFunc === null || progressFunc === void 0 ? void 0 : progressFunc(progress, total);
                if (lastProgress !== total) {
                    lastProgress = total;
                }
            };
            return (0, util_1.toPromise)(cb => (0, vortexmt_1.fileMD5)(data, cb, progressHash))
                .then((result) => {
                if (lastProgress === 0) {
                    // Need to get the size from the file or buffer
                    const sizePromise = Buffer.isBuffer(data)
                        ? bluebird_1.default.resolve(data.length)
                        : fsVortex.statAsync(data).then(stats => stats.size).catch(() => 0);
                    return sizePromise.then(numBytes => ({
                        md5sum: result,
                        numBytes
                    }));
                }
                else {
                    return bluebird_1.default.resolve({
                        md5sum: result,
                        numBytes: lastProgress
                    });
                }
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
                return bluebird_1.default.reject(new CustomErrors_1.NotSupportedError());
            }
            return creator(archivePath, options || {})
                .then((handler) => bluebird_1.default.resolve(new archives_1.Archive(handler)));
        };
        this.runExecutable = (executable, args, options) => {
            if (!(0, util_1.truthy)(executable)) {
                return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('Executable not set'));
            }
            const interpreter = this.mInterpreters[path.extname(executable).toLowerCase()];
            if (interpreter !== undefined) {
                try {
                    ({ executable, args, options } = interpreter({ executable, args, options }));
                }
                catch (err) {
                    return bluebird_1.default.reject(err);
                }
            }
            const cwd = options.cwd || path.dirname(executable);
            // process.env is case insensitive (on windows at least?), but the spawn parameter isn't.
            // I think the key is called "Path" on windows but I'm not willing to bet this is consistent
            // across all language variants and versions
            const pathEnvName = Object.keys(process.env).find(key => key.toLowerCase() === 'path');
            const env = Object.assign(Object.assign(Object.assign({}, (0, util_1.filteredEnvironment)()), { [pathEnvName]: process.env['PATH_ORIG'] || process.env['PATH'] }), options.env);
            // TODO: we might want to be much more restrictive in what keys we allow in environment variables,
            //   based on a quick google I could only find rules for Linux which appears to not allow the equal
            //   sign in keys either (which makes sense).
            //   On windows the empty string is the only thing I found that causes a problem though
            delete env[''];
            return this.applyStartHooks({ executable, args, options })
                .then(updatedParameters => {
                ({ executable, args, options } = updatedParameters);
                return bluebird_1.default.resolve();
            })
                .then(() => new bluebird_1.default((resolve, reject) => {
                var _a;
                const runExe = options.shell
                    ? `"${executable}"`
                    : executable;
                const spawnOptions = {
                    cwd,
                    env,
                    detached: options.detach !== undefined ? options.detach : true,
                    shell: (_a = options.shell) !== null && _a !== void 0 ? _a : false,
                };
                try {
                    const runParams = { executable, args, options: Object.assign(Object.assign({}, options), { env }) };
                    const vars = this.mToolParameterCBs.reduce((prev, cb) => {
                        return Object.assign(Object.assign({}, prev), cb(runParams));
                    }, {});
                    args = args.map(arg => applyVariables(arg, vars));
                    const child = (0, child_process_1.spawn)(runExe, options.shell ? args : args.map(arg => arg.replace(/"/g, '')), spawnOptions);
                    if ((0, util_1.truthy)(child['exitCode'])) {
                        // brilliant, apparently there is no way for me to get at the stdout/stderr when running
                        // through a shell if starting the application fails immediately
                        return reject(new Error(`Failed to start (exit code ${child['exitCode']})`));
                    }
                    if (options.onSpawned !== undefined) {
                        options.onSpawned(child.pid);
                    }
                    if (options.detach) {
                        child.unref();
                    }
                    let stdOut;
                    let errOut;
                    child
                        .on('error', err => {
                        reject(err);
                    })
                        .on('close', (code) => {
                        const game = (0, selectors_1.activeGameId)(this.mApi.store.getState());
                        if ((game === 'fallout3') && (code === 0xC0000135)) {
                            // 0xC0000135 means that a dll couldn't be found.
                            // In the context of FO3 it's commonly xlive or other redistribs are
                            //  not installed.
                            return reject(new CustomErrors_1.MissingDependency());
                        }
                        else if (code === 0xE0434352) {
                            // A .net error, unfortunately we can't now if/how the actual exception
                            // text has been reported
                            (0, log_1.log)('warn', '.NET error', { stdOut, errOut });
                            if (game === 'stardewvalley') {
                                // In the case of SDV the interesting information seems to get printed to stdout
                                return reject(new CustomErrors_1.ThirdPartyError(stdOut || errOut));
                            }
                            else if (errOut) {
                                return reject(new CustomErrors_1.ThirdPartyError(errOut));
                            }
                            else {
                                return reject(new CustomErrors_1.ProcessCanceled('.NET error'));
                            }
                        }
                        else if (code === 0xC000026B) {
                            return reject(new CustomErrors_1.ProcessCanceled('Windows shutting down'));
                        }
                        else if (code !== 0) {
                            // TODO: the child process returns an exit code of 53 for SSE and
                            // FO4, and an exit code of 1 for Skyrim. We don't know why but it
                            // doesn't seem to affect anything
                            (0, log_1.log)('warn', 'child process exited with code: ' + code.toString(16), {});
                            if (errOut !== undefined) {
                                (0, log_1.log)('warn', 'child output', errOut.trim());
                            }
                            if (options.expectSuccess) {
                                let lastLine = '<No output>';
                                if (errOut !== undefined) {
                                    const lines = errOut.trim().split('\n');
                                    lastLine = (lines.length > ERROR_OUTPUT_CUTOFF)
                                        ? lines[lines.length - 1]
                                        : lines.join('\n');
                                }
                                // Sanitize the error message to prevent crashpad issues
                                const sanitizedExecutable = executable.replace(/[^\x20-\x7E]/g, '?');
                                const sanitizedLastLine = lastLine.replace(/[^\x20-\x7E]/g, '?').substring(0, 500);
                                const exitCodeHex = code.toString(16);
                                const errorMessage = `Failed to run "${sanitizedExecutable}": "${sanitizedLastLine} (${exitCodeHex})"`;
                                const err = new Error(errorMessage);
                                err.exitCode = code;
                                reject(err);
                                return;
                            }
                        }
                        resolve();
                    });
                    if (child.stderr !== undefined) {
                        child.stderr.on('data', (chunk) => {
                            if (errOut === undefined) {
                                errOut = '';
                            }
                            try {
                                errOut += chunk.toString();
                            }
                            catch (err) {
                                (0, log_1.log)('warn', 'error output from external process couldn\'t be processed', { executable });
                            }
                        });
                    }
                    if (child.stdout !== undefined) {
                        child.stdout.on('data', (chunk) => {
                            if (stdOut === undefined) {
                                stdOut = '';
                            }
                            try {
                                stdOut += chunk.toString();
                            }
                            catch (err) {
                                (0, log_1.log)('warn', 'output from external process couldn\'t be processed', { executable });
                            }
                        });
                    }
                }
                catch (err) {
                    if (err.code === 'EINVAL') {
                        err['attachLogOnReport'] = true;
                        (0, log_1.log)('error', 'Invalid spawn parameters', {
                            runExe,
                            args,
                            options: JSON.stringify(options),
                        });
                    }
                    return reject(err);
                }
            }))
                .catch(CustomErrors_1.ProcessCanceled, () => null)
                .catch({ code: 'EACCES' }, () => this.runElevated(executable, cwd, args, env, options.onSpawned))
                .catch({ code: 'ECANCELED' }, () => bluebird_1.default.reject(new CustomErrors_1.UserCanceled()))
                .catch({ systemCode: 1223 }, () => bluebird_1.default.reject(new CustomErrors_1.UserCanceled()))
                // Is errno still used ? looks like shellEx call returns systemCode instead
                .catch({ errno: 1223 }, () => bluebird_1.default.reject(new CustomErrors_1.UserCanceled()))
                .catch((err) => {
                if (err.message.toLowerCase().indexOf('the operation was canceled by the user') !== -1) {
                    // This is more of a sanity check than anything else as one user report
                    //  contained none of the properties we rely on to detect when a user
                    //  cancels the UAC dialog.
                    //  https://github.com/Nexus-Mods/Vortex/issues/8524
                    return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
                }
                return bluebird_1.default.reject(err);
            });
        };
        this.emitAndAwait = (event, ...args) => {
            let queue = bluebird_1.default.resolve();
            const results = [];
            const enqueue = (prom) => {
                if (prom !== undefined) {
                    queue = queue.then(() => prom
                        .then(res => {
                        if ((res !== undefined) && (res !== null)) {
                            results.push(res);
                        }
                    })
                        .catch(err => {
                        this.mApi.showErrorNotification(`Unhandled error in event "${event}"`, err);
                    }));
                }
            };
            this.mEventEmitter.emit(event, ...args, enqueue);
            return queue.then(() => results);
        };
        this.onAsync = (event, listener, extInfo) => {
            const effectiveListener = (0, util_1.wrapExtCBAsync)(listener, extInfo);
            this.mEventEmitter.on(event, (...args) => {
                const enqueue = args.pop();
                if ((enqueue === undefined) || (typeof (enqueue) !== 'function')) {
                    // no arguments, this is not an emitAndAwait event!
                    this.mApi.showErrorNotification('Invalid event handler', { event });
                    if (enqueue !== undefined) {
                        args.push(enqueue);
                    }
                    // call the listener anyway
                    const prom = effectiveListener(...args);
                    if (prom['catch'] !== undefined) {
                        prom['catch'](err => {
                            this.mApi.showErrorNotification(`Failed to call event ${event}`, err);
                        });
                    }
                }
                else {
                    enqueue(effectiveListener(...args));
                }
            });
        };
        this.withPrePost = (eventName, cb) => {
            return (...args) => {
                return this.emitAndAwait(`will-${eventName}`, ...args)
                    .then(() => cb(...args))
                    .then((res) => this.emitAndAwait(`did-${eventName}`, res, ...args)
                    .then(() => res));
            };
        };
        // tslint:disable-next-line:member-ordering
        this.highlightCSS = (() => {
            let highlightCSS;
            let highlightCSSAlt;
            let highlightAfterCSS;
            let highlightBeforeCSSAlt;
            const initCSS = () => {
                if (highlightCSS !== undefined) {
                    return;
                }
                highlightCSS = highlightAfterCSS = null;
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < document.styleSheets.length; ++i) {
                    if (document.styleSheets[i].ownerNode.id === 'theme') {
                        const rules = Array.from(document.styleSheets[i].rules);
                        rules.forEach((rule) => {
                            if (rule.selectorText === '#highlight-control-dummy') {
                                highlightCSS = rule;
                            }
                            else if (rule.selectorText === '#highlight-control-dummy-alt') {
                                highlightCSSAlt = rule;
                            }
                            else if (rule.selectorText === '#highlight-control-dummy::after') {
                                highlightAfterCSS = rule;
                            }
                            else if (rule.selectorText === '#highlight-control-dummy-alt::before') {
                                highlightBeforeCSSAlt = rule;
                            }
                        });
                    }
                }
            };
            return (selector, text, altStyle) => {
                initCSS();
                let result = '';
                const css = altStyle ? highlightCSSAlt : highlightCSS;
                const afterCSS = highlightAfterCSS;
                const dummySelector = altStyle ? '#highlight-control-dummy-alt' : '#highlight-control-dummy';
                // adding a new css rule matching the selector when we could just as well add
                // the highlight class to the control.
                // The reason it's done this way is because it's less messy (easier to clean up one css
                // rule instead of every control matched by the selector) and it doesn't interfere with
                // react, which might re-generate every control.
                if (highlightCSS === null) {
                    // fallback if template rules weren't found
                    result += `${selector} { border: 1px solid var(--brand-danger) !important }\n`;
                    if (text !== undefined) {
                        result += `${selector}::after { color: var(--brand-danger); content: "${text}" }\n`;
                    }
                }
                else {
                    result += css.cssText.replace(dummySelector, selector);
                    if (altStyle) {
                        result += highlightBeforeCSSAlt.cssText.replace(dummySelector, selector);
                    }
                    if (text !== undefined) {
                        result += afterCSS.cssText
                            .replace('#highlight-control-dummy', selector)
                            .replace('__contentPlaceholder', text);
                    }
                }
                return result;
            };
        })();
        this.highlightControl = (selector, duration, text, altStyle) => {
            const id = (0, shortid_1.generate)();
            const style = document.createElement('style');
            style.id = `highlight_${id}`;
            style.type = 'text/css';
            style.innerHTML = this.highlightCSS(selector, text, altStyle);
            const head = document.getElementsByTagName('head')[0];
            const highlightNode = head.appendChild(style);
            setTimeout(() => {
                head.removeChild(highlightNode);
            }, duration);
        };
        this.addMetaServer = (id, server) => {
            if (server !== undefined) {
                this.mProgrammaticMetaServers[id] = server;
            }
            else {
                delete this.mProgrammaticMetaServers[id];
            }
            this.mForceDBReconnect = true;
        };
        this.mEventEmitter = eventEmitter;
        if (eventEmitter !== undefined) {
            this.mEventEmitter.setMaxListeners(100);
        }
        this.mUIStartedPromise = new bluebird_1.default(resolve => {
            this.mOnUIStarted = resolve;
        });
        this.mInterpreters = {};
        this.mStartHooks = [];
        this.mToolParameterCBs = [];
        this.mApi = {
            showErrorNotification: this.showErrorBox,
            selectFile: this.selectFile,
            saveFile: this.saveFile,
            selectExecutable: this.selectExecutable,
            selectDir: this.selectDir,
            events: this.mEventEmitter,
            translate: (input, options) => this.mTranslator !== undefined
                ? this.mTranslator.t(input, options)
                : (Array.isArray(input) ? input[0].toString() : input.toString()),
            laterT: (input, options) => new i18n_1.TString(input, options, 'common'),
            locale: () => this.mTranslator.language,
            getI18n: () => this.mTranslator,
            getPath: this.getPath,
            onStateChange: (statePath, callback) => undefined,
            registerProtocol: this.registerProtocol,
            registerRepositoryLookup: this.registerRepositoryLookup,
            deregisterProtocol: this.deregisterProtocol,
            lookupModReference: this.lookupModReference,
            lookupModMeta: this.lookupModMeta,
            saveModMeta: this.saveModMeta,
            openArchive: this.openArchive,
            genMd5Hash: this.genMd5Hash,
            clearStylesheet: () => this.mStyleManager.clearCache(),
            setStylesheet: (key, filePath) => this.mStyleManager.setSheet(key, filePath),
            runExecutable: this.runExecutable,
            emitAndAwait: this.emitAndAwait,
            withPrePost: this.withPrePost,
            isOutdated: () => (0, errorHandling_1.isOutdated)(),
            onAsync: this.onAsync,
            highlightControl: this.highlightControl,
            addMetaServer: this.addMetaServer,
            getLoadedExtensions: () => this.extensions,
            awaitUI: () => this.mUIStartedPromise,
            getState: () => undefined,
            ext: {},
            NAMESPACE: 'common',
        };
        if (initStore !== undefined) {
            // apologies for the sync operation but this needs to happen before extensions are loaded
            // and everything in this phase of startup is synchronous anyway
            try {
                const disableExtensions = fs.readdirSync((0, getVortexPath_1.default)('temp'))
                    .filter(name => name.startsWith('__disable_'));
                disableExtensions.forEach(ext => {
                    const extId = ext.substr(10);
                    (0, log_1.log)('info', 'disabling extension that caused a crash before', { extId });
                    initStore.dispatch((0, app_1.setExtensionEnabled)(extId, false));
                    fs.unlinkSync(path.join((0, getVortexPath_1.default)('temp'), ext));
                });
            }
            catch (err) {
                // an ENOENT will happen on the first start where the dir doesn't
                // exist yet. No problem
                if (err.code !== 'ENOENT') {
                    (0, log_1.log)('error', 'failed to read disabled extensions', err.message);
                }
            }
            this.mExtensionState = initStore.getState().app.extensions;
            const extensionsPath = path.join((0, getVortexPath_1.default)('userData'), 'plugins');
            Object.keys(this.mExtensionState)
                .filter(extId => this.mExtensionState[extId].remove)
                .forEach(extId => {
                (0, log_1.log)('info', 'removing', path.join(extensionsPath, extId));
                fs.removeSync(path.join(extensionsPath, extId));
                initStore.dispatch((0, app_1.forgetExtension)(extId));
            });
            electron_1.ipcMain.on('__get_extension_state', event => {
                event.returnValue = this.mExtensionState;
            });
            electron_1.ipcMain.on('__ui_is_ready', () => {
                this.mOnUIStarted();
            });
        }
        else {
            this.mExtensionState = electron_1.ipcRenderer.sendSync('__get_extension_state');
        }
        if (process.type === 'renderer') {
            this.mStyleManager = new StyleManager_1.default(this.mApi);
        }
        this.mExtensions = this.prepareExtensions();
        (0, log_1.log)('info', 'outdated extensions', { numOutdated: this.mOutdated.length });
        if (this.mOutdated.length > 0) {
            this.mOutdated.forEach(ext => {
                var _a;
                (0, log_1.log)('info', 'extension older than bundled version, will be removed', { name: ext });
                // if we get here in the renderer process, initStore is not defined.
                // This should happen in the main process only
                (_a = initStore === null || initStore === void 0 ? void 0 : initStore.dispatch) === null || _a === void 0 ? void 0 : _a.call(initStore, (0, app_1.removeExtension)(ext));
            });
            return;
        }
        this.initExtensions();
    }
    get hasOutdatedExtensions() {
        return this.mOutdated.length > 0;
    }
    setTranslation(translator) {
        this.mTranslator = translator;
    }
    get extensions() {
        return this.mExtensions;
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
        this.mReduxWatcher = new ReduxWatcher_1.default(store, this.watcherError);
        this.mExtensionState = (0, storeHelper_1.getSafe)(store.getState(), ['app', 'extensions'], {});
        this.mApi.sendNotification = (notification) => {
            const noti = Object.assign({}, notification);
            if (noti.id === undefined) {
                noti.id = (0, shortid_1.generate)();
            }
            if (this.canBeToast(noti)) {
                let toastFunc = noti.type === 'error' ? react_hot_toast_1.toast.error : react_hot_toast_1.toast.success;
                const toastOptions = {
                    id: noti.id,
                    duration: noti.displayMS,
                };
                const message = noti.title !== undefined
                    ? `${noti.title}:\n${noti.message}`
                    : noti.message;
                toastFunc(message, toastOptions);
                return noti.id;
            }
            if (notification.type === 'warning') {
                (0, log_1.log)('warn', 'warning notification', { message: notification.message, title: notification.title });
            }
            else if (notification.type === 'error') {
                (0, log_1.log)('warn', 'error notification', { message: notification.message, title: notification.title });
            }
            store.dispatch((0, notifications_1.addNotification)(noti));
            return noti.id;
        };
        // tslint:disable-next-line:only-arrow-functions
        this.mApi.showErrorNotification = function (message, details, options) {
            let extension = this.extension;
            if ((extension === undefined) && ((details === null || details === void 0 ? void 0 : details['extension']) !== undefined)) {
                extension = this.getLoadedExtensions()
                    .find(iter => (iter.name === details['extension']));
            }
            if ((extension !== undefined)
                && (extension.info !== undefined)
                && (extension.info.author !== constants_1.COMPANY_ID)) {
                if (options === undefined) {
                    options = {};
                }
                if (options.allowReport !== false) {
                    options.extensionName = extension.info.name;
                    const remoteExtensions = this.getState().session.extensions.available;
                    options.extensionRemote = remoteExtensions.find(ext => isExtSame(extension.info, ext));
                }
                options.extension = extension;
            }
            (0, message_1.showError)(store.dispatch, message, details, options);
        };
        this.mApi.showDialog = (type, title, content, actions, id) => store.dispatch((0, notifications_1.showDialog)(type, title, content, actions, id));
        this.mApi.closeDialog = (id, actionKey, input) => store.dispatch((0, notifications_1.closeDialog)(id, actionKey, input));
        this.mApi.dismissNotification = (id) => store.dispatch((0, notifications_1.dismissNotification)(id));
        this.mApi.dismissAllNotifications = () => store.dispatch((0, notifications_1.dismissAllNotifications)());
        this.mApi.suppressNotification = (id, suppress) => {
            if (suppress !== false) {
                store.dispatch((0, notifications_1.dismissNotification)(id));
            }
            store.dispatch((0, notificationSettings_1.suppressNotification)(id, suppress !== false));
        };
        this.mApi.store = store;
        this.mApi.getState = () => this.mApi.store.getState();
        this.mApi.onStateChange = this.stateChangeHandler;
        this.mApi.onStateChange(['settings', 'metaserver', 'servers'], () => {
            this.mForceDBReconnect = true;
        });
        if (electron_1.ipcRenderer !== undefined) {
            electron_1.ipcRenderer.on('send-notification', (event, notification) => this.mApi.sendNotification(notification));
            electron_1.ipcRenderer.on('show-error-notification', (event, message, details, options, isError) => {
                let data = JSON.parse(details);
                if (isError) {
                    data = Object.assign(new Error(), data);
                }
                this.mApi.showErrorNotification(message, data, options || undefined);
            });
            store.dispatch((0, actions_1.setOptionalExtensions)(this.mOptionalExtensions));
            store.dispatch((0, session_1.setExtensionLoadFailures)(this.mLoadFailures));
        }
        else {
            this.migrateExtensions();
        }
        this.reportExtLoadErrors();
    }
    reportExtLoadErrors() {
        var _a, _b;
        const nodeLoadErr = Object.values(this.mLoadFailures).flat(1)
            .find(_ => {
            var _a, _b;
            const msg = (_b = (_a = _.args) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : '';
            return msg.includes('The specified module could not be found.') && msg.includes('.node');
        });
        if (nodeLoadErr !== undefined) {
            (_b = (_a = this.mApi.store) === null || _a === void 0 ? void 0 : _a.dispatch) === null || _b === void 0 ? void 0 : _b.call(_a, (0, notifications_1.showDialog)('error', 'Extension failed to load', {
                bbcode: 'An unexpected error occurred while Vortex was loading extension:<br/><br/>{{message}}<br/><br/>'
                    + 'This is often caused by a bad installation of the app, '
                    + 'a security app interfering with Vortex '
                    + 'or a problem with the Microsoft Visual C++ Redistributable installed on your PC. '
                    + 'To solve this issue please try the following:<br/><br/>'
                    + '- Wait a moment and try starting Vortex again<br/>'
                    + '- Reinstall Vortex from the Nexus Mods website<br/>'
                    + '- Install the latest Microsoft Visual C++ Redistributable ([url]{{url}}[/url])<br/>'
                    + '- Disable anti-virus or other security apps that might interfere and install Vortex again<br/><br/>'
                    + 'If the issue persists, please create a thread in our support forum for further assistance.',
                parameters: {
                    message: nodeLoadErr.args.message,
                    url: constants_2.VCREDIST_URL,
                },
            }, [
                {
                    label: 'Ignore',
                    action: () => (0, errorHandling_1.disableErrorReport)(),
                },
                {
                    label: 'Close Vortex',
                    action: () => appExit(),
                },
            ], 'ext-load-native-failed'));
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
            (message, details, options) => {
                try {
                    // make an attempt to serialise error objects in such a way that they can be
                    // reconstructed.
                    const data = (typeof (details) === 'object')
                        ? Object.assign({}, details) : details;
                    if (details instanceof Error) {
                        // details.stack, details.name AND details.message seem to be getters.
                        data.stack = details.stack;
                        data.name = details.name;
                        data.message = details.message;
                        // stack is also optional. If we don't have one, generate one to this function
                        // which is better than nothing because otherwise the code reconstructing the error
                        // will produce a stack that is completely useless
                        if (data.stack === undefined) {
                            data.stack = (new Error()).stack;
                        }
                    }
                    ipc.send('show-error-notification', message, JSON.stringify(data), options, details instanceof Error);
                }
                catch (err) {
                    // this may happen if the ipc has already been destroyed
                    this.showErrorBox(message, details);
                }
            };
        this.mApi.events = this.mEventEmitter = new EventProxy(ipc);
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
            (0, reduxSanity_1.registerSanityCheck)(actionType, check);
        });
        this.apply('registerInterpreter', (extension, apply) => {
            this.mInterpreters[extension.toLowerCase()] = apply;
        });
        this.apply('registerStartHook', (priority, id, hook) => {
            this.mStartHooks.push({ priority, id, hook });
        });
        this.apply('registerToolVariables', (func) => {
            this.mToolParameterCBs.push(func);
        });
        this.mStartHooks.sort((lhs, rhs) => lhs.priority - rhs.priority);
        return reducers;
    }
    /**
     * apply all extensions that were registered by extensions
     *
     * @memberOf ExtensionManager
     */
    applyExtensionsOfExtensions() {
        this.mContextProxyHandler.invokeAdditions(this.mExtensions);
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
    apply(funcName, func, addExtInfo) {
        this.mContextProxyHandler.getCalls(funcName).forEach(call => {
            try {
                if (addExtInfo === true) {
                    const ext = this.mExtensions.find(iter => iter.name === call.extension);
                    const extInfo = _.pick(ext, ['name', 'namespace', 'path']);
                    func(extInfo, ...call.arguments);
                }
                else {
                    func(...call.arguments);
                }
            }
            catch (err) {
                this.mApi.showErrorNotification('Extension failed to initialize. If this isn\'t an official extension, ' +
                    'please report the error to the respective author.', {
                    extension: call.extension,
                    err: err.message,
                    stack: err.stack,
                });
            }
        });
    }
    /**
     * call the "once" function for all extensions. This should really only be called
     * once.
     */
    doOnce() {
        const calls = this.mContextProxyHandler.getCalls(process.type === 'renderer' ? 'once' : 'onceMain');
        const reportError = (err, call, allowReport = true) => {
            (0, log_1.log)('warn', 'failed to call once', { err: err.message, stack: err.stack });
            err['extension'] = call.extension;
            this.mApi.showErrorNotification('Extension failed to initialize. If this isn\'t an official extension, ' +
                'please report the error to the respective author.', err, { allowReport });
        };
        return bluebird_1.default.mapSeries(calls, (call, idx) => {
            (0, log_1.log)('debug', 'once', { extension: call.extension });
            const ext = this.mExtensions.find(iter => iter.name === call.extension);
            this.mContextProxyHandler.setExtension(ext.name, ext.path);
            try {
                this.mLoadingCallbacks.forEach(cb => {
                    cb(call.extension, idx);
                });
                const prom = call.arguments[0]() || bluebird_1.default.resolve();
                const start = Date.now();
                return (0, util_1.timeout)(prom, 60000, {
                    throw: true,
                    queryContinue: () => this.queryLoadTimeout(call.extension),
                })
                    .then(() => {
                    const elapsed = Date.now() - start;
                    if (elapsed > 1000) {
                        (0, log_1.log)('debug', 'slow initialization', { extension: call.extension, elapsed });
                    }
                })
                    .catch(CustomErrors_1.TimeoutError, () => {
                    reportError(new Error('Initialization didn\'t finish in time.'), call, false);
                })
                    .catch(err => {
                    reportError(err, call);
                });
            }
            catch (err) {
                reportError(err, call);
            }
        })
            .then(() => {
            this.mLoadingCallbacks.forEach(cb => {
                cb(undefined, calls.length);
            });
            (0, log_1.log)('debug', 'once done');
        });
    }
    renderStyle() {
        this.mStyleManager.startAutoUpdate();
        return this.mStyleManager.renderNow();
    }
    getProtocolHandler(protocol) {
        return this.mProtocolHandlers[protocol] || null;
    }
    get numOnce() {
        const calls = this.mContextProxyHandler.getCalls(process.type === 'renderer' ? 'once' : 'onceMain');
        return calls.length;
    }
    onLoadingExtension(cb) {
        this.mLoadingCallbacks.push(cb);
    }
    setUIReady() {
        this.mOnUIStarted();
        electron_1.ipcRenderer.send('__ui_is_ready');
    }
    queryLoadTimeout(extension) {
        return bluebird_1.default.resolve(showMessageBox({
            type: 'warning',
            title: 'Extension slow',
            message: `An extension (${extension}) is taking unusually long to load. `
                + 'This is very likely a bug. Do you want to continue to wait for it?',
            noLink: true,
            buttons: ['Cancel', 'Wait'],
        }))
            .then(result => result.response === 1);
    }
    getMetaServerList() {
        const state = this.mApi.store.getState();
        const servers = (0, storeHelper_1.getSafe)(state, ['settings', 'metaserver', 'servers'], {});
        return Object.keys(servers).map(id => servers[id]).slice()
            .concat(Object.values(this.mProgrammaticMetaServers))
            .sort((lhs, rhs) => { var _a, _b; return ((_a = lhs.priority) !== null && _a !== void 0 ? _a : 100) - ((_b = rhs.priority) !== null && _b !== void 0 ? _b : 100); });
    }
    connectMetaDB(gameId, apiKey) {
        const dbPath = path.join((0, getVortexPath_1.default)('userData'), 'metadb');
        return modmeta.ModDB.create(dbPath, gameId, this.getMetaServerList(), log_1.log)
            .catch(err => {
            return this.mApi.showDialog('error', 'Failed to connect meta database', {
                text: 'Please check that there is no other instance of Vortex still running.',
                message: err.message,
            }, [
                { label: 'Quit' },
                { label: 'Retry' },
            ])
                .then(result => {
                if (result.action === 'Quit') {
                    (0, application_1.getApplication)().quit();
                    return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('meta db locked'));
                }
                return this.connectMetaDB(gameId, apiKey);
            });
        });
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
            if (process.type === 'renderer') {
                // log this only once so we don't spam the log file with this
                (0, log_1.log)('info', 'init extension', { name: ext.name, path: ext.path });
            }
            this.mContextProxyHandler.setExtension(ext.name, ext.path);
            try {
                const apiProxy = new APIProxyCreator(ext, this.mEventEmitter);
                const extProxy = new Proxy(contextProxy, apiProxy);
                ext.initFunc()(extProxy);
                apiProxy.enableAPI();
            }
            catch (err) {
                if (!ext.dynamic) {
                    // if one of the static extension fails to initialize we should be
                    // crashing, otherwise we risk data loss if the user restores a backup
                    // and the important reducers aren't loaded
                    throw err;
                }
                // make sure we're not calling any of the register calls if the extension
                // isn't fully initialized
                this.mContextProxyHandler.dropCalls(ext.name);
                this.mLoadFailures[ext.name] = [{ id: 'exception', args: { message: err.message } }];
                (0, log_1.log)('warn', 'couldn\'t initialize extension', { name: ext.name, err: err.message, stack: err.stack });
            }
        });
        this.mContextProxyHandler.endRegistration();
        // need to store them locally for now because the store isn't loaded at this time
        this.mLoadFailures = Object.assign(Object.assign({}, this.mLoadFailures), this.mContextProxyHandler.unloadIncompatible(ExtensionManager.sUIAPIs, this.mExtensions));
        this.mOptionalExtensions = this.mContextProxyHandler.getOptionalExtensions(this.mExtensions);
        // apply api extensions immediately after all extensions are loaded so they
        // become available asap
        this.apply('registerAPI', (key, func, options) => {
            this.mApi.ext[key] = func;
        });
        if (process.type === 'renderer') {
            (0, log_1.log)('info', 'all extensions initialized');
        }
    }
    migrateExtensions() {
        const migrations = {};
        this.mContextProxyHandler.getCalls('registerMigration').forEach(call => {
            (0, util_1.setdefault)(migrations, call.extension, []).push(call.arguments[0]);
        });
        const state = this.mApi.store.getState();
        this.mExtensions
            .filter(ext => ext.dynamic)
            .forEach(ext => {
            try {
                let oldVersion = (0, storeHelper_1.getSafe)(state.app, ['extensions', ext.name, 'version'], '0.0.0');
                if (!semver.valid(oldVersion)) {
                    (0, log_1.log)('error', 'invalid version stored for extension', { extension: ext.name, oldVersion });
                    oldVersion = '0.0.0';
                }
                if (oldVersion !== ext.info.version) {
                    if (migrations[ext.name] === undefined) {
                        this.mApi.store.dispatch((0, app_1.setExtensionVersion)(ext.name, ext.info.version));
                    }
                    else {
                        bluebird_1.default.mapSeries(migrations[ext.name], mig => mig(oldVersion))
                            .then(() => {
                            (0, log_1.log)('info', 'set extension version', { name: ext.name, info: JSON.stringify(ext.info) });
                            this.mApi.store.dispatch((0, app_1.setExtensionVersion)(ext.name, ext.info.version));
                        })
                            .catch(err => {
                            this.mApi.showErrorNotification('Extension failed to migrate', err, {
                                allowReport: ext.info.author === constants_1.COMPANY_ID,
                            });
                        })
                            .then(() => null);
                    }
                }
            }
            catch (err) {
                this.mApi.showErrorNotification('Extension invalid', err, {
                    allowReport: false,
                    message: ext.name,
                });
            }
        });
    }
    getPath(name) {
        return (0, getVortexPath_1.default)(name);
    }
    selectFile(options) {
        const fullOptions = Object.assign(Object.assign({}, _.omit(options, ['create'])), { properties: ['openFile'] });
        if (options.create === true) {
            fullOptions.properties.push('promptToCreate');
        }
        return bluebird_1.default.resolve(showOpenDialog(fullOptions))
            .then(result => (result.filePaths !== undefined) && (result.filePaths.length > 0)
            ? result.filePaths[0]
            : undefined);
    }
    saveFile(options) {
        const fullOptions = Object.assign({}, options);
        //if (options === true) {
        //fullOptions.properties.push('showOverwriteConfirmation');
        //}
        return bluebird_1.default.resolve(showSaveDialog(fullOptions))
            .then(result => (result.filePath !== undefined)
            ? result.filePath
            : undefined);
    }
    selectExecutable(options) {
        // TODO: make the filter list dynamic based on the list of registered interpreters?
        const fullOptions = Object.assign(Object.assign({}, _.omit(options, ['create'])), { properties: ['openFile'], filters: [
                { name: 'All Executables', extensions: ['exe', 'cmd', 'bat', 'jar', 'py'] },
                { name: 'Native', extensions: ['exe', 'cmd', 'bat'] },
                { name: 'Java', extensions: ['jar'] },
                { name: 'Python', extensions: ['py'] },
            ] });
        return bluebird_1.default.resolve(showOpenDialog(fullOptions))
            .then(result => (result.filePaths !== undefined) && (result.filePaths.length > 0)
            ? result.filePaths[0]
            : undefined);
    }
    selectDir(options) {
        const fullOptions = Object.assign(Object.assign({}, _.omit(options, ['create'])), { properties: ['openDirectory'] });
        return bluebird_1.default.resolve(showOpenDialog(fullOptions))
            .then(result => (result.filePaths !== undefined) && (result.filePaths.length > 0)
            ? result.filePaths[0]
            : undefined);
    }
    modLookupId(detail) {
        const san = (input) => path.basename(input, path.extname(input));
        const fileName = (detail.filePath !== undefined)
            ? san(detail.filePath)
            : (detail.fileName !== undefined)
                ? san(detail.fileName)
                : undefined;
        return `${detail.fileMD5}_${fileName}`
            + `_${detail.fileSize}_${detail.gameId}`;
    }
    makeSorter(detail) {
        const fileName = detail.filePath !== undefined ? path.basename(detail.filePath) : undefined;
        const hasAttribute = (attribute, lhs, rhs, preferredValue) => {
            if (lhs[attribute] === rhs[attribute]) {
                return 0;
            }
            if (preferredValue === undefined) {
                // if no preferred value was set, ensure it can never match
                preferredValue = Symbol();
            }
            if (!(0, util_1.truthy)(lhs[attribute]) || rhs[attribute] === preferredValue) {
                return 1;
            }
            else if (!(0, util_1.truthy)(rhs[attribute]) || lhs[attribute] === preferredValue) {
                return -1;
            }
            else {
                return 0;
            }
        };
        const numDetails = (result) => {
            return Object.keys(result.details || {}).length;
        };
        return (lhs, rhs) => {
            const lhsV = lhs.value;
            const rhsV = rhs.value;
            // prefer results where the file name matches, otherwise use the one with
            // more details
            return hasAttribute('fileName', lhsV, rhsV, fileName)
                || hasAttribute('source', lhsV, rhsV, 'nexus')
                || hasAttribute('sourceURI', lhsV, rhsV)
                || hasAttribute('gameId', lhsV, rhsV)
                || hasAttribute('fileVersion', lhsV, rhsV)
                || hasAttribute('logicalFileName', lhsV, rhsV)
                || numDetails(lhsV) - numDetails(rhsV);
        };
    }
    applyStartHooks(input) {
        let updated = input;
        return bluebird_1.default.each(this.mStartHooks, hook => hook.hook(updated)
            .then((newParameters) => {
            updated = newParameters;
        })
            .catch(CustomErrors_1.UserCanceled, err => {
            (0, log_1.log)('debug', 'start canceled by user');
            return bluebird_1.default.reject(err);
        })
            .catch(CustomErrors_1.ProcessCanceled, err => {
            (0, log_1.log)('debug', 'hook canceled start', err.message);
            return bluebird_1.default.reject(err);
        })
            .catch(err => {
            if (err instanceof CustomErrors_1.UserCanceled) {
                (0, log_1.log)('debug', 'start canceled by user');
            }
            else if (err instanceof CustomErrors_1.ProcessCanceled) {
                (0, log_1.log)('debug', 'hook canceled start', err.message);
            }
            else {
                (0, log_1.log)('error', 'hook failed', err);
            }
            return bluebird_1.default.reject(err);
        }))
            .then(() => updated);
    }
    runElevated(executable, cwd, args, env, onSpawned) {
        const ipcPath = (0, shortid_1.generate)();
        let tmpFilePath;
        return new bluebird_1.default((resolve, reject) => {
            this.startIPC(ipcPath, err => {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
            (0, log_1.log)('debug', 'running elevated', { executable, cwd, args });
            winapi.runElevated(ipcPath, runElevatedCustomTool_1.default, {
                toolPath: executable,
                toolCWD: cwd,
                parameters: args,
                environment: env,
            }).then(tmpPath => {
                tmpFilePath = tmpPath;
                if (onSpawned !== undefined) {
                    onSpawned();
                }
            }).catch(err => reject(err));
        })
            .finally(() => {
            if (tmpFilePath !== undefined) {
                try {
                    fs.unlinkSync(tmpFilePath);
                }
                catch (err) {
                    // nop
                }
            }
        });
    }
    startIPC(ipcPath, onFinished) {
        let connected = false;
        const finish = (err) => {
            server.close();
            onFinished(err);
        };
        const server = net.createServer(connRaw => {
            const conn = new json_socket_1.default(connRaw);
            (0, log_1.log)('debug', 'ipc client connected');
            connected = true;
            conn
                .on('message', data => {
                const { message, payload } = data;
                if (message === 'log') {
                    // tslint:disable-next-line:no-shadowed-variable
                    const { level, message, meta } = payload;
                    (0, log_1.log)(level, message, meta);
                }
                else if (message === 'finished') {
                    finish(null);
                }
            })
                .on('error', err => {
                (0, log_1.log)('error', 'elevated code reported error', err);
                finish(err);
            });
        })
            .listen(path.join('\\\\?\\pipe', ipcPath));
    }
    idify(name, pathName) {
        const transform = (input) => input.toLowerCase().replace(/[:']/g, '').replace(/[ _]/g, '-').trim();
        if (name !== undefined) {
            return transform(name);
        }
        else {
            // assuming the path is based on a nexus archive name, there should be a
            // -<modid>- tag after the actual mod name
            return pathName.split(/-\w+-/)[0];
        }
    }
    loadDynamicExtension(extensionPath, alreadyLoaded, bundled) {
        var _a, _b;
        const indexPath = this.mExtensionFormats
            .map(format => path.join(extensionPath, format))
            .find(iter => fs.existsSync(iter));
        if (indexPath !== undefined) {
            let info = { name: '', author: '', description: '', version: '' };
            try {
                info = JSON.parse(fs.readFileSync(path.join(extensionPath, 'info.json'), { encoding: 'utf8' }));
            }
            catch (error) {
                const errMessage = (error.code === 'ENOENT')
                    ? 'extension has no info.json file'
                    : 'failed to parse info.json file';
                (0, log_1.log)('warn', errMessage, { extensionPath, error: error.message });
            }
            const pathName = path.basename(extensionPath);
            const name = info.id || pathName;
            const namespace = (_b = (_a = info.namespace) !== null && _a !== void 0 ? _a : info.id) !== null && _b !== void 0 ? _b : (bundled
                ? pathName
                : this.idify(info.name, pathName));
            const existing = alreadyLoaded.find(reg => reg.name === name);
            if (existing) {
                if (semver.gte(info.version, existing.info.version)) {
                    this.mOutdated.push(path.basename(existing.path));
                }
                return undefined;
            }
            return {
                name,
                namespace,
                initFunc: () => winapi.dynreq(indexPath).default,
                path: extensionPath,
                dynamic: true,
                info: Object.assign(Object.assign({}, info), { bundled }),
            };
        }
        else {
            // this is not necessarily a problem, translation extensions for example
            // have no index.js file
            (0, log_1.log)('debug', 'extension directory contains no index.js file', { extensionPath });
            return undefined;
        }
    }
    loadDynamicExtensions(extension, loadedExtensions, alreadyLoaded) {
        if (!fs.existsSync(extension.path)) {
            (0, log_1.log)('info', 'failed to load dynamic extensions, path doesn\'t exist', extension.path);
            try {
                fs.mkdirSync(extension.path);
            }
            catch (err) {
                (0, log_1.log)('warn', 'extension path missing and can\'t be created', { path: extension.path, error: err.message });
            }
            return [];
        }
        const res = fs.readdirSync(extension.path)
            .filter(name => fs.statSync(path.join(extension.path, name)).isDirectory())
            .reduce((prev, name) => {
            var _a, _b, _c, _d;
            if (!(0, storeHelper_1.getSafe)(this.mExtensionState, [name, 'enabled'], true)) {
                (0, log_1.log)('debug', 'extension disabled', { name });
                return prev;
            }
            try {
                // first, mark this extension as loaded. If this is a user extension and there is an
                // extension with the same name in the bundle we could otherwise end up loading the
                // bundled one if this one fails to load which could be convenient but also massively
                // confusing.
                const before = Date.now();
                const ext = this.loadDynamicExtension(path.join(extension.path, name), alreadyLoaded, extension.bundled);
                if (ext !== undefined) {
                    if (((_b = (_a = this.mExtensionState) === null || _a === void 0 ? void 0 : _a[ext.name]) === null || _b === void 0 ? void 0 : _b.enabled) === false) {
                        (0, log_1.log)('debug', 'extension disabled', { name: ext.name });
                        return prev;
                    }
                    loadedExtensions.add(ext.name);
                    const loadTime = Date.now() - before;
                    (0, log_1.log)('debug', 'loaded extension', { name, loadTime, location: extension.path });
                    if (prev[ext.name] !== undefined) {
                        // loadDynamicExtension already handles the case where the same extension was found
                        // in a different directory, but if the same directory contains multiple copies
                        // of the same extension, we have to deal with that slightly differently
                        (0, log_1.log)('warn', 'multiple copies of the same extension installed', { first: ext.path, second: prev[ext.name].path });
                        if ((ext.info === undefined)
                            || semver.gt((_c = prev[ext.name].info) === null || _c === void 0 ? void 0 : _c.version, (_d = ext.info) === null || _d === void 0 ? void 0 : _d.version)) {
                            // the copy we loaded previously is newer so mark this one for removal and not
                            // load it
                            this.mOutdated.push(path.basename(ext.path));
                        }
                        else {
                            // this copy is actually the newer one so replace the one previously found and
                            // mark that for deletion
                            this.mOutdated.push(path.basename(prev[ext.name].path));
                            prev[ext.name] = ext;
                        }
                    }
                    else {
                        prev[ext.name] = ext;
                    }
                }
            }
            catch (err) {
                (0, log_1.log)('warn', 'failed to load dynamic extension', { name, error: err.message, stack: err.stack });
                this.mLoadFailures[name] = [{ id: 'exception', args: { message: err.message } }];
            }
            return prev;
        }, {});
        return Object.values(res);
    }
    /**
     * retrieves all extensions to the base functionality, both the static
     * and external ones.
     * This loads external extensions from disc synchronously
     *
     * @returns {ExtensionInit[]}
     */
    prepareExtensions() {
        const staticExtensions = [
            'settings_interface',
            'settings_application',
            'about_dialog',
            'diagnostics_files',
            'dashboard',
            'starter_dashlet',
            'firststeps_dashlet',
            'mod_load_order',
            'file_based_loadorder',
            'mod_management',
            'category_management',
            'collections_integration',
            'profile_management',
            'nexus_integration',
            'download_management',
            'gameversion_management',
            'gamemode_management',
            'announcement_dashlet',
            'symlink_activator',
            'symlink_activator_elevate',
            'hardlink_activator',
            'move_activator',
            'null_activator',
            'updater',
            'installer_fomod',
            'installer_nested_fomod',
            'instructions_overlay',
            'settings_metaserver',
            'test_runner',
            'extension_manager',
            'ini_prep',
            'news_dashlet',
            'sticky_mods',
            'browser',
            'recovery',
            'file_preview',
            'tool_variables_base',
            'history_management',
            'analytics',
            'onboarding_dashlet',
            'mod_spotlights_dashlet'
        ];
        require('./extensionRequire').default(() => this.extensions);
        const extensionPaths = ExtensionManager.getExtensionPaths();
        const loadedExtensions = new Set();
        let dynamicallyLoaded = [];
        return staticExtensions
            .filter(ext => (0, storeHelper_1.getSafe)(this.mExtensionState, [ext, 'enabled'], true))
            .map((name) => ({
            name,
            namespace: name,
            path: path.resolve(__dirname, '..', 'extensions', name),
            initFunc: () => require(`../extensions/${name}/index`).default,
            dynamic: false,
        }))
            .concat(...extensionPaths.map(extSpec => {
            const newExtensions = this.loadDynamicExtensions(extSpec, loadedExtensions, dynamicallyLoaded);
            dynamicallyLoaded = dynamicallyLoaded.concat(newExtensions);
            return newExtensions;
        }));
    }
}
ExtensionManager.sUIAPIs = new Set();
exports.default = ExtensionManager;
