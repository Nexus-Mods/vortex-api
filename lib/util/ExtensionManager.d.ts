/// <reference types="node" />
/// <reference types="i18next" />
/// <reference types="bluebird" />
import { IExtensionApi } from '../types/IExtensionContext';
import * as Promise from 'bluebird';
import * as I18next from 'i18next';
import * as Redux from 'redux';
/**
 * interface to extensions. This loads extensions and provides the api extensions
 * use
 *
 * @class ExtensionManager
 */
declare class ExtensionManager {
    static registerUIAPI(name: string): void;
    static getExtensionPaths(): string[];
    private static sUIAPIs;
    private mExtensions;
    private mApi;
    private mTranslator;
    private mEventEmitter;
    private mStyleManager;
    private mReduxWatcher;
    private mWatches;
    private mProtocolHandlers;
    private mArchiveHandlers;
    private mModDB;
    private mModDBPromise;
    private mModDBGame;
    private mModDBAPIKey;
    private mModDBCache;
    private mPid;
    private mContextProxyHandler;
    private mExtensionState;
    private mLoadFailures;
    constructor(initStore?: Redux.Store<any>, eventEmitter?: NodeJS.EventEmitter);
    setTranslation(translator: I18next.i18n): void;
    /**
     * sets up the extension manager to work with the specified store
     *
     * @template S State interface
     * @param {Redux.Store<S>} store
     *
     * @memberOf ExtensionManager
     */
    setStore<S>(store: Redux.Store<S>): void;
    /**
     * set up the api for the main process.
     *
     * @param {Redux.Store<S>} store
     * @param {NodeJS.Events} ipc channel to the renderer process, in case a call has to be
     *                            delegated there
     *
     * @memberOf ExtensionManager
     */
    setupApiMain<S>(store: Redux.Store<S>, ipc: Electron.WebContents): void;
    /**
     * gain acces to the extension api
     *
     * @returns
     *
     * @memberOf ExtensionManager
     */
    getApi(): IExtensionApi;
    /**
     * retrieve list of all reducers registered by extensions
     */
    getReducers(): any[];
    /**
     * apply all extensions that were registered by extensions
     *
     * @memberOf ExtensionManager
     */
    applyExtensionsOfExtensions(): void;
    /**
     * runs the extension init function with the specified register-function
     * set
     *
     * @param {string} funcName
     * @param {Function} func
     *
     * @memberOf ExtensionManager
     */
    apply(funcName: string, func: (...args: any[]) => void): void;
    /**
     * call the "once" function for all extensions. This should really only be called
     * once.
     */
    doOnce(): Promise<void>;
    renderStyle(): Promise<void>;
    getProtocolHandler(protocol: string): (url: string) => void;
    private getModDB;
    private stateChangeHandler;
    /**
     * initialize all extensions
     */
    private initExtensions();
    private getPath(name);
    private selectFile(options);
    private selectExecutable(options);
    private selectDir(options);
    private registerProtocol;
    private registerArchiveHandler;
    private deregisterProtocol(protocol);
    private lookupModReference;
    private modLookupId(detail);
    private lookupModMeta;
    private saveModMeta;
    private openArchive;
    private loadDynamicExtension(extensionPath);
    private loadDynamicExtensions(extensionsPath);
    /**
     * retrieves all extensions to the base functionality, both the static
     * and external ones.
     * This loads external extensions from disc synchronously
     *
     * @returns {ExtensionInit[]}
     */
    private loadExtensions();
}
export default ExtensionManager;
