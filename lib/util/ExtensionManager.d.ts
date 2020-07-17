/// <reference types="node" />
import { IExtension } from '../extensions/extension_manager/types';
import { ExtensionInit } from '../types/Extension';
import { IExtensionApi, IExtensionContext, ThunkStore } from '../types/IExtensionContext';
import { IState } from '../types/IState';
import { i18n } from './i18n';
import Promise from 'bluebird';
import { WebContents } from 'electron';
import * as Redux from 'redux';
export interface IRegisteredExtension {
    name: string;
    namespace: string;
    path: string;
    dynamic: boolean;
    initFunc: () => ExtensionInit;
    info?: IExtension;
}
/**
 * interface to extensions. This loads extensions and provides the api extensions
 * use
 *
 * @class ExtensionManager
 */
declare class ExtensionManager {
    static registerUIAPI(name: string): void;
    static getExtensionPaths(): Array<{
        path: string;
        bundled: boolean;
    }>;
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
    private mToolParameterCBs;
    private mLoadingCallbacks;
    private mProgrammaticMetaServers;
    private mForceDBReconnect;
    private mOnUIStarted;
    private mUIStartedPromise;
    private mOutdated;
    private mExtensionFormats;
    constructor(initStore?: Redux.Store<any>, eventEmitter?: NodeJS.EventEmitter);
    setTranslation(translator: i18n): void;
    get extensions(): IRegisteredExtension[];
    /**
     * sets up the extension manager to work with the specified store
     *
     * @template S State interface
     * @param {Redux.Store<S>} store
     *
     * @memberOf ExtensionManager
     */
    setStore<S extends IState>(store: ThunkStore<S>): void;
    /**
     * set up the api for the main process.
     *
     * @param {Redux.Store<S>} store
     * @param {NodeJS.Events} ipc channel to the renderer process, in case a call has to be
     *                            delegated there
     *
     * @memberOf ExtensionManager
     */
    setupApiMain<S>(store: Redux.Store<S>, ipc: WebContents): void;
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
    apply(funcName: keyof IExtensionContext, func: (...args: any[]) => void): void;
    /**
     * call the "once" function for all extensions. This should really only be called
     * once.
     */
    doOnce(): Promise<void>;
    renderStyle(): Promise<void>;
    getProtocolHandler(protocol: string): (url: string, install: boolean) => void;
    get numOnce(): number;
    onLoadingExtension(cb: (name: string, idx: number) => void): void;
    setUIReady(): void;
    private queryLoadTimeout;
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
    private makeSorter;
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
    private idify;
    private loadDynamicExtension;
    private loadDynamicExtensions;
    /**
     * retrieves all extensions to the base functionality, both the static
     * and external ones.
     * This loads external extensions from disc synchronously
     *
     * @returns {ExtensionInit[]}
     */
    private prepareExtensions;
}
export default ExtensionManager;
