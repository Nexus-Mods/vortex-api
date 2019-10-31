/// <reference types="node" />
import { ExtensionInit } from '../types/Extension';
import { IExtensionApi, ThunkStore } from '../types/IExtensionContext';
import * as Promise from 'bluebird';
import I18next from 'i18next';
import * as Redux from 'redux';
interface IRegisteredExtension {
    name: string;
    path: string;
    dynamic: boolean;
    initFunc: ExtensionInit;
}
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
    private mContextProxyHandler;
    private mExtensionState;
    private mLoadFailures;
    private mInterpreters;
    private mStartHooks;
    private mLoadingCallbacks;
    private mProgrammaticMetaServers;
    private mForceDBReconnect;
    private mOnUIStarted;
    private mUIStartedPromise;
    constructor(initStore?: Redux.Store<any>, eventEmitter?: NodeJS.EventEmitter);
    setTranslation(translator: I18next.i18n): void;
    readonly extensions: IRegisteredExtension[];
    /**
     * sets up the extension manager to work with the specified store
     *
     * @template S State interface
     * @param {Redux.Store<S>} store
     *
     * @memberOf ExtensionManager
     */
    setStore<S>(store: ThunkStore<S>): void;
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
    readonly numOnce: number;
    onLoadingExtension(cb: (name: string, idx: number) => void): void;
    setUIReady(): void;
    private getModDB;
    private getMetaServerList;
    private connectMetaDB;
    private stateChangeHandler;
    private showErrorBox;
    /**
     * initialize all extensions
     */
    private initExtensions;
    private migrateExtensions;
    private getPath;
    private selectFile;
    private selectExecutable;
    private selectDir;
    private registerProtocol;
    private registerArchiveHandler;
    private deregisterProtocol;
    private lookupModReference;
    private modLookupId;
    private lookupModMeta;
    private saveModMeta;
    private openArchive;
    private applyStartHooks;
    private runExecutable;
    private runElevated;
    private emitAndAwait;
    private onAsync;
    private highlightCSS;
    private highlightControl;
    private addMetaServer;
    private startIPC;
    private loadDynamicExtension;
    private loadDynamicExtensions;
    /**
     * retrieves all extensions to the base functionality, both the static
     * and external ones.
     * This loads external extensions from disc synchronously
     *
     * @returns {ExtensionInit[]}
     */
    private loadExtensions;
}
export default ExtensionManager;
