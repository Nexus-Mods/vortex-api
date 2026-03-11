import PromiseBB from "bluebird";
import type { IAvailableExtension, IExtension, IRegisteredExtension } from "./types/extensions";
import type { IExtensionApi, IExtensionContext, ThunkStore } from "./types/IExtensionContext";
import type { IExtensionState, IState } from "./types/IState";
import type { i18n } from "./util/i18n";
export declare function isExtSame(installed: IExtension, remote: IAvailableExtension): boolean;
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
    private mRepositoryLookup;
    private mArchiveHandlers;
    private mModDB;
    private mModDBPromise;
    private mModDBGame;
    private mModDBAPIKey;
    private mModDBCache;
    private mContextProxyHandler;
    private mExtensionState;
    private mLoadFailures;
    private mOptionalExtensions;
    private mInterpreters;
    private mStartHooks;
    private mToolParameterCBs;
    private mLoadingCallbacks;
    private mProgrammaticMetaServers;
    private mForceDBReconnect;
    private mOnUIStarted;
    private mUIStartedPromise;
    private mOutdated;
    private mFailedWatchers;
    private mExtensionFormats;
    private mPendingDisables;
    private mPendingRemoves;
    private mExtensionPersistors;
    private mPersistorPrevState;
    private mPersistorTimers;
    /**
     * Create ExtensionManager.
     *
     * In the new renderer-only architecture:
     * - Pass extensionState directly (from hydrated app.extensions)
     * - Store will be set later via setStore() after reducer is initialized
     *
     * @param extensionState - Pre-loaded extension state from hydration (renderer-only)
     * @param eventEmitter - Event emitter for extension communication
     */
    constructor(extensionState?: {
        [extId: string]: IExtensionState;
    }, eventEmitter?: NodeJS.EventEmitter);
    get hasOutdatedExtensions(): boolean;
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
    private reportExtLoadErrors;
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
     * Initialize extension-registered persistors.
     * Should be called after the store is set up.
     * This enables extensions to persist custom state hives to external files
     * (e.g., loadOrder -> plugins.txt, userlist -> userlist.yaml)
     */
    initExtensionPersistors<S extends IState>(store: ThunkStore<S>): void;
    /**
     * Hydrate Redux state from a persistor's data.
     * Called when a persistor loads data from its backing store (e.g., plugins.txt).
     */
    private hydrateFromPersistor;
    /**
     * Insert a value at a nested path in an object.
     */
    private insertAtPath;
    /**
     * Deserialize a value from the persistor.
     */
    private deserialize;
    /**
     * Notify extension persistors of state changes.
     * Computes diffs and calls setItem/removeItem on each persistor.
     */
    private notifyExtensionPersistors;
    /**
     * Persist changes for a specific hive by computing diff and calling persistor methods.
     */
    private persistHiveChanges;
    /**
     * runs the extension init function with the specified register-function
     * set
     *
     * @param {string} funcName
     * @param {Function} func
     *
     * @memberOf ExtensionManager
     */
    apply(funcName: keyof IExtensionContext, func: (...args: any[]) => void, addExtInfo?: boolean): void;
    /**
     * call the "once" function for all extensions. This should really only be called
     * once.
     */
    doOnce(): PromiseBB<void>;
    getProtocolHandler(protocol: string): (url: string, install: boolean) => void;
    get numOnce(): number;
    onLoadingExtension(cb: (name: string, idx: number) => void): void;
    setUIReady(): void;
    private watcherError;
    private queryLoadTimeout;
    private getModDB;
    private canBeToast;
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
    private saveFile;
    private selectExecutable;
    private selectDir;
    private commandLineUserData;
    private registerProtocol;
    private registerRepositoryLookup;
    private registerArchiveHandler;
    private deregisterProtocol;
    private lookupModReference;
    private modLookupId;
    private lookupModMeta;
    private makeSorter;
    private saveModMeta;
    private genMd5Hash;
    private openArchive;
    private applyStartHooks;
    private runExecutable;
    private runElevated;
    private emitAndAwait;
    private onAsync;
    private withPrePost;
    private highlightCSS;
    private highlightControl;
    private addMetaServer;
    private startIPC;
    private idify;
    private loadDynamicExtension;
    private static loadExternalExtension;
    /** Finds the default exported extension init function of a module */
    private static getExtensionInitFunc;
    private loadDynamicExtensions;
    /**
     * retrieves all extensions to the base functionality, both the static
     * and external ones.
     * This loads external extensions from disc synchronously
     */
    private prepareExtensions;
}
export default ExtensionManager;
