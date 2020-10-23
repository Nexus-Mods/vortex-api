**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ExtensionManager

# Class: ExtensionManager

interface to extensions. This loads extensions and provides the api extensions
use

## Hierarchy

* **ExtensionManager**

## Index

### Constructors

* [constructor](extensionmanager.md#constructor)

### Properties

* [highlightCSS](extensionmanager.md#highlightcss)
* [mApi](extensionmanager.md#mapi)
* [mArchiveHandlers](extensionmanager.md#marchivehandlers)
* [mContextProxyHandler](extensionmanager.md#mcontextproxyhandler)
* [mEventEmitter](extensionmanager.md#meventemitter)
* [mExtensionFormats](extensionmanager.md#mextensionformats)
* [mExtensionState](extensionmanager.md#mextensionstate)
* [mExtensions](extensionmanager.md#mextensions)
* [mFailedWatchers](extensionmanager.md#mfailedwatchers)
* [mForceDBReconnect](extensionmanager.md#mforcedbreconnect)
* [mInterpreters](extensionmanager.md#minterpreters)
* [mLoadFailures](extensionmanager.md#mloadfailures)
* [mLoadingCallbacks](extensionmanager.md#mloadingcallbacks)
* [mModDB](extensionmanager.md#mmoddb)
* [mModDBAPIKey](extensionmanager.md#mmoddbapikey)
* [mModDBCache](extensionmanager.md#mmoddbcache)
* [mModDBGame](extensionmanager.md#mmoddbgame)
* [mModDBPromise](extensionmanager.md#mmoddbpromise)
* [mOnUIStarted](extensionmanager.md#monuistarted)
* [mOutdated](extensionmanager.md#moutdated)
* [mProgrammaticMetaServers](extensionmanager.md#mprogrammaticmetaservers)
* [mProtocolHandlers](extensionmanager.md#mprotocolhandlers)
* [mReduxWatcher](extensionmanager.md#mreduxwatcher)
* [mStartHooks](extensionmanager.md#mstarthooks)
* [mStyleManager](extensionmanager.md#mstylemanager)
* [mToolParameterCBs](extensionmanager.md#mtoolparametercbs)
* [mTranslator](extensionmanager.md#mtranslator)
* [mUIStartedPromise](extensionmanager.md#muistartedpromise)
* [mWatches](extensionmanager.md#mwatches)
* [sUIAPIs](extensionmanager.md#suiapis)

### Accessors

* [extensions](extensionmanager.md#extensions)
* [numOnce](extensionmanager.md#numonce)

### Methods

* [addMetaServer](extensionmanager.md#addmetaserver)
* [apply](extensionmanager.md#apply)
* [applyExtensionsOfExtensions](extensionmanager.md#applyextensionsofextensions)
* [applyStartHooks](extensionmanager.md#applystarthooks)
* [connectMetaDB](extensionmanager.md#connectmetadb)
* [deregisterProtocol](extensionmanager.md#deregisterprotocol)
* [doOnce](extensionmanager.md#doonce)
* [emitAndAwait](extensionmanager.md#emitandawait)
* [getApi](extensionmanager.md#getapi)
* [getMetaServerList](extensionmanager.md#getmetaserverlist)
* [getModDB](extensionmanager.md#getmoddb)
* [getPath](extensionmanager.md#getpath)
* [getProtocolHandler](extensionmanager.md#getprotocolhandler)
* [getReducers](extensionmanager.md#getreducers)
* [highlightControl](extensionmanager.md#highlightcontrol)
* [idify](extensionmanager.md#idify)
* [initExtensions](extensionmanager.md#initextensions)
* [loadDynamicExtension](extensionmanager.md#loaddynamicextension)
* [loadDynamicExtensions](extensionmanager.md#loaddynamicextensions)
* [lookupModMeta](extensionmanager.md#lookupmodmeta)
* [lookupModReference](extensionmanager.md#lookupmodreference)
* [makeSorter](extensionmanager.md#makesorter)
* [migrateExtensions](extensionmanager.md#migrateextensions)
* [modLookupId](extensionmanager.md#modlookupid)
* [onAsync](extensionmanager.md#onasync)
* [onLoadingExtension](extensionmanager.md#onloadingextension)
* [openArchive](extensionmanager.md#openarchive)
* [prepareExtensions](extensionmanager.md#prepareextensions)
* [queryLoadTimeout](extensionmanager.md#queryloadtimeout)
* [registerArchiveHandler](extensionmanager.md#registerarchivehandler)
* [registerProtocol](extensionmanager.md#registerprotocol)
* [renderStyle](extensionmanager.md#renderstyle)
* [runElevated](extensionmanager.md#runelevated)
* [runExecutable](extensionmanager.md#runexecutable)
* [saveModMeta](extensionmanager.md#savemodmeta)
* [selectDir](extensionmanager.md#selectdir)
* [selectExecutable](extensionmanager.md#selectexecutable)
* [selectFile](extensionmanager.md#selectfile)
* [setStore](extensionmanager.md#setstore)
* [setTranslation](extensionmanager.md#settranslation)
* [setUIReady](extensionmanager.md#setuiready)
* [setupApiMain](extensionmanager.md#setupapimain)
* [showErrorBox](extensionmanager.md#showerrorbox)
* [startIPC](extensionmanager.md#startipc)
* [stateChangeHandler](extensionmanager.md#statechangehandler)
* [watcherError](extensionmanager.md#watchererror)
* [getExtensionPaths](extensionmanager.md#getextensionpaths)
* [registerUIAPI](extensionmanager.md#registeruiapi)

## Constructors

### constructor

\+ **new ExtensionManager**(`initStore?`: Store\<any>, `eventEmitter?`: EventEmitter): [ExtensionManager](extensionmanager.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:511*

#### Parameters:

Name | Type |
------ | ------ |
`initStore?` | Store\<any> |
`eventEmitter?` | EventEmitter |

**Returns:** [ExtensionManager](extensionmanager.md)

## Properties

### highlightCSS

• `Private` **highlightCSS**: (Anonymous function) = (() => { let highlightCSS: CSSStyleRule; let highlightAfterCSS: CSSStyleRule; const initCSS = () => { if (highlightCSS !== undefined) { return; } highlightCSS = highlightAfterCSS = null; // tslint:disable-next-line:prefer-for-of for (let i = 0; i \< document.styleSheets.length; ++i) { if ((document.styleSheets[i].ownerNode as any).id === 'theme') { const rules = Array.from((document.styleSheets[i] as any).rules); rules.forEach((rule: CSSStyleRule) => { if (rule.selectorText === '#highlight-control-dummy') { highlightCSS = rule; } else if (rule.selectorText === '#highlight-control-dummy::after') { highlightAfterCSS = rule; } }); } } }; return (selector: string, text?: string) => { initCSS(); let result = ''; // adding a new css rule matching the selector when we could just as well add // the highlight class to the control. // The reason it's done this way is because it's less messy (easier to clean up one css // rule instead of every control matched by the selector) and it doesn't interfere with // react, which might re-generate every control. if (highlightCSS === null) { // fallback if template rules weren't found result += \`${selector} { border: 1px solid var(--brand-danger) !important }\n\`; if (text !== undefined) { result += \`${selector}::after { color: var(--brand-danger); content: "${text}" }\n\`; } } else { result += highlightCSS.cssText.replace('#highlight-control-dummy', selector); if (text !== undefined) { result += highlightAfterCSS.cssText .replace('#highlight-control-dummy', selector) .replace('\_\_contentPlaceholder', text); } } return result; }; })()

*Defined in Work/vortex/src/util/ExtensionManager.ts:1658*

___

### mApi

• `Private` **mApi**: [IExtensionApi](../interfaces/iextensionapi.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:483*

___

### mArchiveHandlers

• `Private` **mArchiveHandlers**: { [extension:string]: [ArchiveHandlerCreator](../globals.md#archivehandlercreator);  }

*Defined in Work/vortex/src/util/ExtensionManager.ts:490*

___

### mContextProxyHandler

• `Private` **mContextProxyHandler**: [ContextProxyHandler](contextproxyhandler.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:496*

___

### mEventEmitter

• `Private` **mEventEmitter**: EventEmitter

*Defined in Work/vortex/src/util/ExtensionManager.ts:485*

___

### mExtensionFormats

• `Private` **mExtensionFormats**: string[] = ['index.js']

*Defined in Work/vortex/src/util/ExtensionManager.ts:511*

___

### mExtensionState

• `Private` **mExtensionState**: { [extId:string]: [IExtensionState](../interfaces/iextensionstate.md);  }

*Defined in Work/vortex/src/util/ExtensionManager.ts:497*

___

### mExtensions

• `Private` **mExtensions**: [IRegisteredExtension](../interfaces/iregisteredextension.md)[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:482*

___

### mFailedWatchers

• `Private` **mFailedWatchers**: Set\<string> = new Set()

*Defined in Work/vortex/src/util/ExtensionManager.ts:508*

___

### mForceDBReconnect

• `Private` **mForceDBReconnect**: boolean = false

*Defined in Work/vortex/src/util/ExtensionManager.ts:504*

___

### mInterpreters

• `Private` **mInterpreters**: { [ext:string]: (input: [IRunParameters](../interfaces/irunparameters.md)) => [IRunParameters](../interfaces/irunparameters.md);  }

*Defined in Work/vortex/src/util/ExtensionManager.ts:499*

___

### mLoadFailures

• `Private` **mLoadFailures**: { [extId:string]: [IExtensionLoadFailure](../interfaces/iextensionloadfailure.md)[];  }

*Defined in Work/vortex/src/util/ExtensionManager.ts:498*

___

### mLoadingCallbacks

• `Private` **mLoadingCallbacks**: Array\<(name: string, idx: number) => void> = []

*Defined in Work/vortex/src/util/ExtensionManager.ts:502*

___

### mModDB

• `Private` **mModDB**: ModDB

*Defined in Work/vortex/src/util/ExtensionManager.ts:491*

___

### mModDBAPIKey

• `Private` **mModDBAPIKey**: string

*Defined in Work/vortex/src/util/ExtensionManager.ts:494*

___

### mModDBCache

• `Private` **mModDBCache**: { [id:string]: ILookupResult[];  }

*Defined in Work/vortex/src/util/ExtensionManager.ts:495*

___

### mModDBGame

• `Private` **mModDBGame**: string

*Defined in Work/vortex/src/util/ExtensionManager.ts:493*

___

### mModDBPromise

• `Private` **mModDBPromise**: Promise\<void>

*Defined in Work/vortex/src/util/ExtensionManager.ts:492*

___

### mOnUIStarted

• `Private` **mOnUIStarted**: () => void

*Defined in Work/vortex/src/util/ExtensionManager.ts:505*

___

### mOutdated

• `Private` **mOutdated**: string[] = []

*Defined in Work/vortex/src/util/ExtensionManager.ts:507*

___

### mProgrammaticMetaServers

• `Private` **mProgrammaticMetaServers**: { [id:string]: any;  }

*Defined in Work/vortex/src/util/ExtensionManager.ts:503*

___

### mProtocolHandlers

• `Private` **mProtocolHandlers**: { [protocol:string]: (url: string, install: boolean) => void;  }

*Defined in Work/vortex/src/util/ExtensionManager.ts:489*

___

### mReduxWatcher

• `Private` **mReduxWatcher**: [ReduxWatcher](reduxwatcher.md)\<[IState](../interfaces/istate.md)>

*Defined in Work/vortex/src/util/ExtensionManager.ts:487*

___

### mStartHooks

• `Private` **mStartHooks**: [IStartHook](../interfaces/istarthook.md)[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:500*

___

### mStyleManager

• `Private` **mStyleManager**: [StyleManager](stylemanager.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:486*

___

### mToolParameterCBs

• `Private` **mToolParameterCBs**: [ToolParameterCB](../globals.md#toolparametercb)[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:501*

___

### mTranslator

• `Private` **mTranslator**: i18n

*Defined in Work/vortex/src/util/ExtensionManager.ts:484*

___

### mUIStartedPromise

• `Private` **mUIStartedPromise**: Promise\<void>

*Defined in Work/vortex/src/util/ExtensionManager.ts:506*

___

### mWatches

• `Private` **mWatches**: [IWatcherRegistry](../interfaces/iwatcherregistry.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:488*

___

### sUIAPIs

▪ `Static` `Private` **sUIAPIs**: Set\<string> = new Set\<string>()

*Defined in Work/vortex/src/util/ExtensionManager.ts:480*

## Accessors

### extensions

• get **extensions**(): [IRegisteredExtension](../interfaces/iregisteredextension.md)[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:621*

**Returns:** [IRegisteredExtension](../interfaces/iregisteredextension.md)[]

___

### numOnce

• get **numOnce**(): number

*Defined in Work/vortex/src/util/ExtensionManager.ts:896*

**Returns:** number

## Methods

### addMetaServer

▸ `Private`**addMetaServer**(`id`: string, `server`: any): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:1726*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |
`server` | any |

**Returns:** void

___

### apply

▸ **apply**(`funcName`: keyof [IExtensionContext](../interfaces/iextensioncontext.md), `func`: (...args: any[]) => void, `addExtInfo?`: boolean): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:806*

runs the extension init function with the specified register-function
set

**`memberof`** ExtensionManager

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`funcName` | keyof [IExtensionContext](../interfaces/iextensioncontext.md) |  |
`func` | (...args: any[]) => void |   |
`addExtInfo?` | boolean | - |

**Returns:** void

___

### applyExtensionsOfExtensions

▸ **applyExtensionsOfExtensions**(): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:793*

apply all extensions that were registered by extensions

**`memberof`** ExtensionManager

**Returns:** void

___

### applyStartHooks

▸ `Private`**applyStartHooks**(`input`: [IRunParameters](../interfaces/irunparameters.md)): Promise\<[IRunParameters](../interfaces/irunparameters.md)>

*Defined in Work/vortex/src/util/ExtensionManager.ts:1394*

#### Parameters:

Name | Type |
------ | ------ |
`input` | [IRunParameters](../interfaces/irunparameters.md) |

**Returns:** Promise\<[IRunParameters](../interfaces/irunparameters.md)>

___

### connectMetaDB

▸ `Private`**connectMetaDB**(`gameId`: string, `apiKey`: string): Promise\<ModDB>

*Defined in Work/vortex/src/util/ExtensionManager.ts:996*

#### Parameters:

Name | Type |
------ | ------ |
`gameId` | string |
`apiKey` | string |

**Returns:** Promise\<ModDB>

___

### deregisterProtocol

▸ `Private`**deregisterProtocol**(`protocol`: string): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:1243*

#### Parameters:

Name | Type |
------ | ------ |
`protocol` | string |

**Returns:** void

___

### doOnce

▸ **doOnce**(): Promise\<void>

*Defined in Work/vortex/src/util/ExtensionManager.ts:835*

call the "once" function for all extensions. This should really only be called
once.

**Returns:** Promise\<void>

___

### emitAndAwait

▸ `Private`**emitAndAwait**(`event`: string, ...`args`: any[]): Promise\<any>

*Defined in Work/vortex/src/util/ExtensionManager.ts:1613*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`...args` | any[] |

**Returns:** Promise\<any>

___

### getApi

▸ **getApi**(): [IExtensionApi](../interfaces/iextensionapi.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:756*

gain acces to the extension api

**`memberof`** ExtensionManager

**Returns:** [IExtensionApi](../interfaces/iextensionapi.md)

___

### getMetaServerList

▸ `Private`**getMetaServerList**(): IServer[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:986*

**Returns:** IServer[]

___

### getModDB

▸ `Private`**getModDB**(): Promise\<ModDB>

*Defined in Work/vortex/src/util/ExtensionManager.ts:933*

**Returns:** Promise\<ModDB>

___

### getPath

▸ `Private`**getPath**(`name`: string): string

*Defined in Work/vortex/src/util/ExtensionManager.ts:1173*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** string

___

### getProtocolHandler

▸ **getProtocolHandler**(`protocol`: string): function

*Defined in Work/vortex/src/util/ExtensionManager.ts:892*

#### Parameters:

Name | Type |
------ | ------ |
`protocol` | string |

**Returns:** function

___

### getReducers

▸ **getReducers**(): any[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:763*

retrieve list of all reducers registered by extensions

**Returns:** any[]

___

### highlightControl

▸ `Private`**highlightControl**(`selector`: string, `duration`: number, `text?`: string): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:1712*

#### Parameters:

Name | Type |
------ | ------ |
`selector` | string |
`duration` | number |
`text?` | string |

**Returns:** void

___

### idify

▸ `Private`**idify**(`name`: string, `pathName`: string): string

*Defined in Work/vortex/src/util/ExtensionManager.ts:1768*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`pathName` | string |

**Returns:** string

___

### initExtensions

▸ `Private`**initExtensions**(): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:1069*

initialize all extensions

**Returns:** void

___

### loadDynamicExtension

▸ `Private`**loadDynamicExtension**(`extensionPath`: string, `alreadyLoaded`: [IRegisteredExtension](../interfaces/iregisteredextension.md)[], `bundled`: boolean): [IRegisteredExtension](../interfaces/iregisteredextension.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:1780*

#### Parameters:

Name | Type |
------ | ------ |
`extensionPath` | string |
`alreadyLoaded` | [IRegisteredExtension](../interfaces/iregisteredextension.md)[] |
`bundled` | boolean |

**Returns:** [IRegisteredExtension](../interfaces/iregisteredextension.md)

___

### loadDynamicExtensions

▸ `Private`**loadDynamicExtensions**(`extension`: { bundled: boolean ; path: string  }, `loadedExtensions`: Set\<string>, `alreadyLoaded`: [IRegisteredExtension](../interfaces/iregisteredextension.md)[]): [IRegisteredExtension](../interfaces/iregisteredextension.md)[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:1834*

#### Parameters:

Name | Type |
------ | ------ |
`extension` | { bundled: boolean ; path: string  } |
`loadedExtensions` | Set\<string> |
`alreadyLoaded` | [IRegisteredExtension](../interfaces/iregisteredextension.md)[] |

**Returns:** [IRegisteredExtension](../interfaces/iregisteredextension.md)[]

___

### lookupModMeta

▸ `Private`**lookupModMeta**(`detail`: [ILookupDetails](../interfaces/ilookupdetails.md), `ignoreCache?`: boolean): Promise\<ILookupResult[]>

*Defined in Work/vortex/src/util/ExtensionManager.ts:1267*

#### Parameters:

Name | Type |
------ | ------ |
`detail` | [ILookupDetails](../interfaces/ilookupdetails.md) |
`ignoreCache?` | boolean |

**Returns:** Promise\<ILookupResult[]>

___

### lookupModReference

▸ `Private`**lookupModReference**(`reference`: IReference): Promise\<ILookupResult[]>

*Defined in Work/vortex/src/util/ExtensionManager.ts:1254*

#### Parameters:

Name | Type |
------ | ------ |
`reference` | IReference |

**Returns:** Promise\<ILookupResult[]>

___

### makeSorter

▸ `Private`**makeSorter**(`detail`: [ILookupDetails](../interfaces/ilookupdetails.md)): function

*Defined in Work/vortex/src/util/ExtensionManager.ts:1312*

#### Parameters:

Name | Type |
------ | ------ |
`detail` | [ILookupDetails](../interfaces/ilookupdetails.md) |

**Returns:** function

___

### migrateExtensions

▸ `Private`**migrateExtensions**(): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:1126*

**Returns:** void

___

### modLookupId

▸ `Private`**modLookupId**(`detail`: [ILookupDetails](../interfaces/ilookupdetails.md)): string

*Defined in Work/vortex/src/util/ExtensionManager.ts:1259*

#### Parameters:

Name | Type |
------ | ------ |
`detail` | [ILookupDetails](../interfaces/ilookupdetails.md) |

**Returns:** string

___

### onAsync

▸ `Private`**onAsync**(`event`: string, `listener`: (...args: any[]) => PromiseLike\<any>): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:1635*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string |
`listener` | (...args: any[]) => PromiseLike\<any> |

**Returns:** void

___

### onLoadingExtension

▸ **onLoadingExtension**(`cb`: (name: string, idx: number) => void): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:901*

#### Parameters:

Name | Type |
------ | ------ |
`cb` | (name: string, idx: number) => void |

**Returns:** void

___

### openArchive

▸ `Private`**openArchive**(`archivePath`: string, `options?`: [IArchiveOptions](../interfaces/iarchiveoptions.md), `ext?`: string): Promise\<[Archive](archive.md)>

*Defined in Work/vortex/src/util/ExtensionManager.ts:1375*

#### Parameters:

Name | Type |
------ | ------ |
`archivePath` | string |
`options?` | [IArchiveOptions](../interfaces/iarchiveoptions.md) |
`ext?` | string |

**Returns:** Promise\<[Archive](archive.md)>

___

### prepareExtensions

▸ `Private`**prepareExtensions**(): [IRegisteredExtension](../interfaces/iregisteredextension.md)[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:1906*

retrieves all extensions to the base functionality, both the static
and external ones.
This loads external extensions from disc synchronously

**Returns:** [IRegisteredExtension](../interfaces/iregisteredextension.md)[]

___

### queryLoadTimeout

▸ `Private`**queryLoadTimeout**(`extension`: string): Promise\<boolean>

*Defined in Work/vortex/src/util/ExtensionManager.ts:921*

#### Parameters:

Name | Type |
------ | ------ |
`extension` | string |

**Returns:** Promise\<boolean>

___

### registerArchiveHandler

▸ `Private`**registerArchiveHandler**(`extension`: string, `handler`: [ArchiveHandlerCreator](../globals.md#archivehandlercreator)): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:1239*

#### Parameters:

Name | Type |
------ | ------ |
`extension` | string |
`handler` | [ArchiveHandlerCreator](../globals.md#archivehandlercreator) |

**Returns:** void

___

### registerProtocol

▸ `Private`**registerProtocol**(`protocol`: string, `def`: boolean, `callback`: (url: string, install: boolean) => void): boolean

*Defined in Work/vortex/src/util/ExtensionManager.ts:1223*

#### Parameters:

Name | Type |
------ | ------ |
`protocol` | string |
`def` | boolean |
`callback` | (url: string, install: boolean) => void |

**Returns:** boolean

___

### renderStyle

▸ **renderStyle**(): Bluebird\<void>

*Defined in Work/vortex/src/util/ExtensionManager.ts:887*

**Returns:** Bluebird\<void>

___

### runElevated

▸ `Private`**runElevated**(`executable`: string, `cwd`: string, `args`: string[], `env`: { [key:string]: string;  }, `onSpawned`: (pid?: number) => void): Bluebird\<unknown>

*Defined in Work/vortex/src/util/ExtensionManager.ts:1574*

#### Parameters:

Name | Type |
------ | ------ |
`executable` | string |
`cwd` | string |
`args` | string[] |
`env` | { [key:string]: string;  } |
`onSpawned` | (pid?: number) => void |

**Returns:** Bluebird\<unknown>

___

### runExecutable

▸ `Private`**runExecutable**(`executable`: string, `args`: string[], `options`: [IRunOptions](../interfaces/irunoptions.md)): Promise\<void>

*Defined in Work/vortex/src/util/ExtensionManager.ts:1421*

#### Parameters:

Name | Type |
------ | ------ |
`executable` | string |
`args` | string[] |
`options` | [IRunOptions](../interfaces/irunoptions.md) |

**Returns:** Promise\<void>

___

### saveModMeta

▸ `Private`**saveModMeta**(`modInfo`: IModInfo): Promise\<void>

*Defined in Work/vortex/src/util/ExtensionManager.ts:1358*

#### Parameters:

Name | Type |
------ | ------ |
`modInfo` | IModInfo |

**Returns:** Promise\<void>

___

### selectDir

▸ `Private`**selectDir**(`options`: [IOpenOptions](../interfaces/iopenoptions.md)): Bluebird\<string>

*Defined in Work/vortex/src/util/ExtensionManager.ts:1211*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [IOpenOptions](../interfaces/iopenoptions.md) |

**Returns:** Bluebird\<string>

___

### selectExecutable

▸ `Private`**selectExecutable**(`options`: [IOpenOptions](../interfaces/iopenoptions.md)): Bluebird\<string>

*Defined in Work/vortex/src/util/ExtensionManager.ts:1192*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [IOpenOptions](../interfaces/iopenoptions.md) |

**Returns:** Bluebird\<string>

___

### selectFile

▸ `Private`**selectFile**(`options`: [IOpenOptions](../interfaces/iopenoptions.md)): Promise\<string>

*Defined in Work/vortex/src/util/ExtensionManager.ts:1177*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [IOpenOptions](../interfaces/iopenoptions.md) |

**Returns:** Promise\<string>

___

### setStore

▸ **setStore**\<S>(`store`: [ThunkStore](../interfaces/thunkstore.md)\<S>): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:633*

sets up the extension manager to work with the specified store

**`memberof`** ExtensionManager

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`S` | [IState](../interfaces/istate.md) | State interface |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`store` | [ThunkStore](../interfaces/thunkstore.md)\<S> |   |

**Returns:** void

___

### setTranslation

▸ **setTranslation**(`translator`: i18n): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:617*

#### Parameters:

Name | Type |
------ | ------ |
`translator` | i18n |

**Returns:** void

___

### setUIReady

▸ **setUIReady**(): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:905*

**Returns:** void

___

### setupApiMain

▸ **setupApiMain**\<S>(`store`: Store\<S>, `ipc`: WebContents): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:718*

set up the api for the main process.

**`memberof`** ExtensionManager

#### Type parameters:

Name |
------ |
`S` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`store` | Store\<S> |  |
`ipc` | WebContents | channel to the renderer process, in case a call has to be                            delegated there  |

**Returns:** void

___

### showErrorBox

▸ `Private`**showErrorBox**(`message`: string, `details`: string \| [Error](notsupportederror.md#error) \| any): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:1058*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`details` | string \| [Error](notsupportederror.md#error) \| any |

**Returns:** void

___

### startIPC

▸ `Private`**startIPC**(`ipcPath`: string, `onFinished`: (err: [Error](notsupportederror.md#error)) => void): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:1735*

#### Parameters:

Name | Type |
------ | ------ |
`ipcPath` | string |
`onFinished` | (err: [Error](notsupportederror.md#error)) => void |

**Returns:** void

___

### stateChangeHandler

▸ `Private`**stateChangeHandler**(`watchPath`: string[], `callback`: [StateChangeCallback](../globals.md#statechangecallback)): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:1019*

#### Parameters:

Name | Type |
------ | ------ |
`watchPath` | string[] |
`callback` | [StateChangeCallback](../globals.md#statechangecallback) |

**Returns:** void

___

### watcherError

▸ `Private`**watcherError**(`err`: [Error](notsupportederror.md#error), `selector`: string[]): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:910*

#### Parameters:

Name | Type |
------ | ------ |
`err` | [Error](notsupportederror.md#error) |
`selector` | string[] |

**Returns:** void

___

### getExtensionPaths

▸ `Static`**getExtensionPaths**(): Array\<{ bundled: boolean ; path: string  }>

*Defined in Work/vortex/src/util/ExtensionManager.ts:471*

**Returns:** Array\<{ bundled: boolean ; path: string  }>

___

### registerUIAPI

▸ `Static`**registerUIAPI**(`name`: string): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:467*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** void
