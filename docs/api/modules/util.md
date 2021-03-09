[vortex_devel](../README.md) / [Exports](../modules.md) / util

# Namespace: util

## Table of contents

### Classes

- [Archive](../classes/util.archive.md)
- [ArgumentInvalid](../classes/util.argumentinvalid.md)
- [ConcurrencyLimiter](../classes/util.concurrencylimiter.md)
- [CycleError](../classes/util.cycleerror.md)
- [DataInvalid](../classes/util.datainvalid.md)
- [Debouncer](../classes/util.debouncer.md)
- [GameNotFound](../classes/util.gamenotfound.md)
- [MissingInterpreter](../classes/util.missinginterpreter.md)
- [NotFound](../classes/util.notfound.md)
- [NotSupportedError](../classes/util.notsupportederror.md)
- [ProcessCanceled](../classes/util.processcanceled.md)
- [ReduxProp](../classes/util.reduxprop.md)
- [SetupError](../classes/util.setuperror.md)
- [SevenZip](../classes/util.sevenzip.md)
- [StarterInfo](../classes/util.starterinfo.md)

### Interfaces

- [IPrettifiedError](../interfaces/util.iprettifiederror.md)
- [IRequestOptions](../interfaces/util.irequestoptions.md)
- [ISteamEntry](../interfaces/util.isteamentry.md)

### Type aliases

- [Normalize](util.md#normalize)
- [TextGroup](util.md#textgroup)

### Variables

- [GameStoreHelper](util.md#gamestorehelper)
- [UserCanceled](util.md#usercanceled)
- [epicGamesLauncher](util.md#epicgameslauncher)
- [github](util.md#github)
- [steam](util.md#steam)

### Functions

- [LazyComponent](util.md#lazycomponent)
- [addUniqueSafe](util.md#adduniquesafe)
- [bbcodeToHTML](util.md#bbcodetohtml)
- [bbcodeToReact](util.md#bbcodetoreact)
- [bundleAttachment](util.md#bundleattachment)
- [bytesToString](util.md#bytestostring)
- [calcDuration](util.md#calcduration)
- [changeOrNop](util.md#changeornop)
- [copyFileAtomic](util.md#copyfileatomic)
- [copyRecursive](util.md#copyrecursive)
- [currentGame](util.md#currentgame)
- [deBOM](util.md#debom)
- [delay](util.md#delay)
- [deleteOrNop](util.md#deleteornop)
- [deriveInstallName](util.md#deriveinstallname)
- [extend](util.md#extend)
- [fileMD5](util.md#filemd5)
- [getActivator](util.md#getactivator)
- [getCurrentActivator](util.md#getcurrentactivator)
- [getCurrentLanguage](util.md#getcurrentlanguage)
- [getGame](util.md#getgame)
- [getGames](util.md#getgames)
- [getManifest](util.md#getmanifest)
- [getModType](util.md#getmodtype)
- [getNormalizeFunc](util.md#getnormalizefunc)
- [getReduxLog](util.md#getreduxlog)
- [getSafe](util.md#getsafe)
- [getSafeCI](util.md#getsafeci)
- [getText](util.md#gettext)
- [getVisibleWindow](util.md#getvisiblewindow)
- [getVortexPath](util.md#getvortexpath)
- [installIconSet](util.md#installiconset)
- [isChildPath](util.md#ischildpath)
- [isFilenameValid](util.md#isfilenamevalid)
- [isPathValid](util.md#ispathvalid)
- [jsonRequest](util.md#jsonrequest)
- [lazyRequire](util.md#lazyrequire)
- [makeNormalizingDict](util.md#makenormalizingdict)
- [makeQueue](util.md#makequeue)
- [makeReactive](util.md#makereactive)
- [merge](util.md#merge)
- [mutateSafe](util.md#mutatesafe)
- [objDiff](util.md#objdiff)
- [onceCB](util.md#oncecb)
- [opn](util.md#opn)
- [pad](util.md#pad)
- [prettifyNodeErrorMessage](util.md#prettifynodeerrormessage)
- [pushSafe](util.md#pushsafe)
- [rawRequest](util.md#rawrequest)
- [readExtensibleDir](util.md#readextensibledir)
- [rehydrate](util.md#rehydrate)
- [relativeTime](util.md#relativetime)
- [removeValue](util.md#removevalue)
- [removeValueIf](util.md#removevalueif)
- [renderError](util.md#rendererror)
- [renderModName](util.md#rendermodname)
- [resolveCategoryName](util.md#resolvecategoryname)
- [resolveCategoryPath](util.md#resolvecategorypath)
- [runElevated](util.md#runelevated)
- [runThreaded](util.md#runthreaded)
- [sanitizeCSSId](util.md#sanitizecssid)
- [setDefaultArray](util.md#setdefaultarray)
- [setOrNop](util.md#setornop)
- [setSafe](util.md#setsafe)
- [setdefault](util.md#setdefault)
- [showActivity](util.md#showactivity)
- [showError](util.md#showerror)
- [showInfo](util.md#showinfo)
- [showSuccess](util.md#showsuccess)
- [sortMods](util.md#sortmods)
- [terminate](util.md#terminate)
- [testModReference](util.md#testmodreference)
- [toPromise](util.md#topromise)
- [unique](util.md#unique)
- [userFriendlyTime](util.md#userfriendlytime)
- [walk](util.md#walk)
- [withErrorContext](util.md#witherrorcontext)
- [writeFileAtomic](util.md#writefileatomic)

## Type aliases

### Normalize

Ƭ **Normalize**: (`input`: *string*) => *string*

#### Type declaration:

▸ (`input`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *string* |

**Returns:** *string*

Defined in: src/util/getNormalizeFunc.ts:7

___

### TextGroup

Ƭ **TextGroup**: *mod*

Defined in: src/util/api.ts:135

## Variables

### GameStoreHelper

• `Const` **GameStoreHelper**: GameStoreHelper

Defined in: src/util/GameStoreHelper.ts:292

___

### UserCanceled

• `Const` **UserCanceled**: IUserCanceledConstructor

Defined in: src/util/CustomErrors.ts:80

___

### epicGamesLauncher

• `Const` **epicGamesLauncher**: [*IGameStore*](../interfaces/types.igamestore.md)

Defined in: src/util/EpicGamesLauncher.ts:199

___

### github

• **github**: *GitHub*

___

### steam

• `Const` **steam**: [*IGameStore*](../interfaces/types.igamestore.md)

Defined in: src/util/Steam.ts:312

## Functions

### LazyComponent

▸ **LazyComponent**<T\>(`load`: () => *any*): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`load` | () => *any* |

**Returns:** (`props`: *any*) => *Element*

Defined in: src/util/LazyComponent.tsx:2

___

### addUniqueSafe

▸ **addUniqueSafe**<T\>(`state`: T, `path`: (*string* \| *number*)[], `value`: *any*): T

add an item to an array inside state but don't allow duplicates

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`state` | T | immutable object to update   |
`path` | (*string* \| *number*)[] | path to the item to update   |
`value` | *any* | the value to add.    |

**Returns:** T

Defined in: src/util/storeHelper.ts:251

___

### bbcodeToHTML

▸ **bbcodeToHTML**(`input`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *string* |

**Returns:** *string*

Defined in: src/util/bbcode.ts:98

___

### bbcodeToReact

▸ **bbcodeToReact**(`input`: *string*, `context?`: *any*): React.ReactChild[]

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *string* |
`context?` | *any* |

**Returns:** React.ReactChild[]

Defined in: src/util/bbcode.ts:75

___

### bundleAttachment

▸ **bundleAttachment**(`options?`: [*IErrorOptions*](../interfaces/types.ierroroptions.md)): [*Promise*](../classes/promise.md)<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | [*IErrorOptions*](../interfaces/types.ierroroptions.md) |

**Returns:** [*Promise*](../classes/promise.md)<string\>

Defined in: src/util/message.ts:204

___

### bytesToString

▸ **bytesToString**(`bytes`: *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`bytes` | *number* |

**Returns:** *string*

Defined in: src/util/util.ts:184

___

### calcDuration

▸ **calcDuration**(`messageLength`: *number*): *number*

calculate a reasonable time to display a message based on the
amount of text.
This is quite crude because the reading speed differs between languages.
Japanese and Chinese for example where a single symbol has much more meaning
than a latin character the reading speed per symbol will be lower.

**`export`** 

#### Parameters:

Name | Type |
:------ | :------ |
`messageLength` | *number* |

**Returns:** *number*

Defined in: src/util/message.ts:46

___

### changeOrNop

▸ **changeOrNop**<T\>(`state`: T, `path`: (*string* \| *number*)[], `value`: *any*): T

sets a value or do nothing if the path or the key (last element of the path) doesn't exist.
This means changeOrNop only changes a pre-existing object attribute

**`export`** 

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`path` | (*string* \| *number*)[] |
`value` | *any* |

**Returns:** T

Defined in: src/util/storeHelper.ts:156

___

### copyFileAtomic

▸ **copyFileAtomic**(`srcPath`: *string*, `destPath`: *string*): [*Promise*](../classes/promise.md)<void\>

copy a file in such a way that it will not replace the target if the copy is
somehow interrupted. The file is first copied to a temporary file in the same
directory as the destination, then deletes the destination and renames the temp
to destination. Since the rename is atomic and the deletion only happens after
a successful write this should minimize the risk of error.

**`export`** 

#### Parameters:

Name | Type |
:------ | :------ |
`srcPath` | *string* |
`destPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fsAtomic.ts:110

___

### copyRecursive

▸ **copyRecursive**(`source`: *string*, `destination`: *string*): [*Promise*](../classes/promise.md)<void\>

custom implementation of recursive directory copying.
copy from fs-extra does this already, but that function has no limit on the number
of files it will copy at once making it fairly inefficient, especially on spinning
disks and unpredictable in regards to memory usage.

TODO: This implementation could do with more real world testing and optimization
  (maybe even adapting to whether copying many small files or few large ones and
   the disk type and different OSes)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`source` | *string* | source path to copy from   |
`destination` | *string* | destination path to copy to    |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/copyRecursive.ts:82

___

### currentGame

▸ **currentGame**(`store`: *Redux.Store*<any\>): [*Promise*](../classes/promise.md)<[*IGameStored*](../interfaces/types.igamestored.md)\>

return the stored static details about the currently selected game mode
or a fallback with the id '__placeholder'
the return value is a promise because known games are loaded during extension
initialization so there is quite a bit of code where we can't be sure
if this is yet available

**`export`** 

#### Parameters:

Name | Type |
:------ | :------ |
`store` | *Redux.Store*<any\> |

**Returns:** [*Promise*](../classes/promise.md)<[*IGameStored*](../interfaces/types.igamestored.md)\>

Defined in: src/util/storeHelper.ts:350

___

### deBOM

▸ **deBOM**(`input`: *string*): *string*

remove the BOM from the input string. doesn't do anything if there is none.

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *string* |

**Returns:** *string*

Defined in: src/util/util.ts:344

___

### delay

▸ **delay**(`timeoutMS`: *number*): [*Promise*](../classes/promise.md)<void\>

wait for the specified number of milliseconds before resolving the promise.
Bluebird has this feature as Promise.delay but when using es6 default promises this can be used

#### Parameters:

Name | Type |
:------ | :------ |
`timeoutMS` | *number* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/util.ts:417

___

### deleteOrNop

▸ **deleteOrNop**<T\>(`state`: T, `path`: (*string* \| *number*)[]): T

delete a value or do nothing if the path doesn't exist

**`export`** 

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`path` | (*string* \| *number*)[] |

**Returns:** T

Defined in: src/util/storeHelper.ts:185

___

### deriveInstallName

▸ **deriveInstallName**(`archiveName`: *string*, `info`: *any*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`archiveName` | *string* |
`info` | *any* |

**Returns:** *string*

Defined in: src/extensions/mod_management/modIdManager.ts:5

___

### extend

▸ **extend**(`registerFunc`: (...`args`: *any*) => *void*, `groupProp?`: *string*, `addExtInfo?`: *boolean*): *function*

extension function. This function creates a wrapper around a component that
binds the extensions of a component to its props

**`export`** 

#### Parameters:

Name | Type |
:------ | :------ |
`registerFunc` | (...`args`: *any*) => *void* |
`groupProp?` | *string* |
`addExtInfo?` | *boolean* |

**Returns:** <P\>(`component`: *React.ComponentType*<P\>) => *React.ComponentType*<*Omit*<P, keyof IExtendedProps\> & IExtensibleProps\>

the wrapper component

Defined in: src/util/ExtensionProvider.ts:24

___

### fileMD5

▸ **fileMD5**(`filePath`: *string*): [*Promise*](../classes/promise.md)<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<string\>

Defined in: src/util/fsAtomic.ts:14

___

### getActivator

▸ **getActivator**(`activatorId`: *string*): [*IDeploymentMethod*](../interfaces/types.ideploymentmethod.md)

#### Parameters:

Name | Type |
:------ | :------ |
`activatorId` | *string* |

**Returns:** [*IDeploymentMethod*](../interfaces/types.ideploymentmethod.md)

Defined in: src/extensions/mod_management/util/deploymentMethods.ts:99

___

### getCurrentActivator

▸ **getCurrentActivator**(`state`: [*IState*](../interfaces/types.istate.md), `gameId`: *string*, `allowDefault`: *boolean*): [*IDeploymentMethod*](../interfaces/types.ideploymentmethod.md)

#### Parameters:

Name | Type |
:------ | :------ |
`state` | [*IState*](../interfaces/types.istate.md) |
`gameId` | *string* |
`allowDefault` | *boolean* |

**Returns:** [*IDeploymentMethod*](../interfaces/types.ideploymentmethod.md)

Defined in: src/extensions/mod_management/util/deploymentMethods.ts:57

___

### getCurrentLanguage

▸ **getCurrentLanguage**(): *string*

**Returns:** *string*

Defined in: src/util/i18n.ts:216

___

### getGame

▸ **getGame**(`gameId`: *string*): [*IGame*](../interfaces/types.igame.md)

#### Parameters:

Name | Type |
:------ | :------ |
`gameId` | *string* |

**Returns:** [*IGame*](../interfaces/types.igame.md)

Defined in: src/extensions/gamemode_management/util/getGame.ts:66

___

### getGames

▸ **getGames**(): [*IGame*](../interfaces/types.igame.md)[]

**Returns:** [*IGame*](../interfaces/types.igame.md)[]

Defined in: src/extensions/gamemode_management/util/getGame.ts:59

___

### getManifest

▸ **getManifest**(`api`: [*IExtensionApi*](../interfaces/types.iextensionapi.md), `modType?`: *string*, `gameId?`: *string*): [*Promise*](../classes/promise.md)<[*IDeploymentManifest*](../interfaces/types.ideploymentmanifest.md)\>

return a manifest (detailing which files are currently deployed by Vortex)
Please note that the manifest is intended only as kind of a fallback, core functionality
of Vortex is designed to work cleanly even if the manifest is deleted by the user and
the same should be true for any extension using this function: Work on the assumption
that the manifest may be missing or outdated.

**`remarks`** 
This call is expensive as it attempts to read the manifest every time. Store the
result or call infrequently to minimise allocations and/or lag.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`api` | [*IExtensionApi*](../interfaces/types.iextensionapi.md) | api   |
`modType?` | *string* | the mod type for which to retrieve the manifest, default mod type if undefined   |
`gameId?` | *string* | the game for which to retrieve the manifest, defaults to the current game.    |

**Returns:** [*Promise*](../classes/promise.md)<[*IDeploymentManifest*](../interfaces/types.ideploymentmanifest.md)\>

Defined in: src/extensions/mod_management/util/activationStore.ts:309

___

### getModType

▸ **getModType**(`id`: *string*): [*IModType*](../interfaces/types.imodtype.md)

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** [*IModType*](../interfaces/types.imodtype.md)

Defined in: src/extensions/gamemode_management/util/modTypeExtensions.ts:12

___

### getNormalizeFunc

▸ **getNormalizeFunc**(`testPath`: *string*, `parameters?`: INormalizeParameters): [*Promise*](../classes/promise.md)<[*Normalize*](util.md#normalize)\>

determine a function to normalize file names for the
file system in the specified path.
The second parameter can be used to specify how strict the normalization is.
Ideally you want everything but that makes the function slower and this function may
be called a lot. Oftentimes the source of the input path already guarantees some
normalization anyway.

#### Parameters:

Name | Type |
:------ | :------ |
`testPath` | *string* |
`parameters?` | INormalizeParameters |

**Returns:** [*Promise*](../classes/promise.md)<[*Normalize*](util.md#normalize)\>

Defined in: src/util/getNormalizeFunc.ts:95

___

### getReduxLog

▸ **getReduxLog**(): *Promise*<ILog[]\>

**Returns:** *Promise*<ILog[]\>

Defined in: src/util/reduxLogger.ts:46

___

### getSafe

▸ **getSafe**<T\>(`state`: *any*, `path`: (*string* \| *number*)[], `fallback`: T): T

return an item from state or the fallback if the path doesn't lead
to an item.

**`export`** 

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *any* |
`path` | (*string* \| *number*)[] |
`fallback` | T |

**Returns:** T

Defined in: src/util/storeHelper.ts:29

___

### getSafeCI

▸ **getSafeCI**<T\>(`state`: *any*, `path`: (*string* \| *number*)[], `fallback`: T): T

case insensitive variant of getSafe

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *any* |
`path` | (*string* \| *number*)[] |
`fallback` | T |

**Returns:** T

Defined in: src/util/storeHelper.ts:44

___

### getText

▸ **getText**(`group`: [*TextGroup*](util.md#textgroup), `textId`: *string*, `t`: [*TFunction*](types.md#tfunction)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`group` | [*TextGroup*](util.md#textgroup) |
`textId` | *string* |
`t` | [*TFunction*](types.md#tfunction) |

**Returns:** *string*

Defined in: src/util/api.ts:138

___

### getVisibleWindow

▸ **getVisibleWindow**(`win?`: BrowserWindow): BrowserWindow \| *null*

#### Parameters:

Name | Type |
:------ | :------ |
`win?` | BrowserWindow |

**Returns:** BrowserWindow \| *null*

Defined in: src/util/errorHandling.ts:250

___

### getVortexPath

▸ **getVortexPath**(`id`: AppPath): *string*

the electron getAppPath function and globals like __dirname
or process.resourcesPath don't do a great job of abstracting away
how the application is being built, e.g. development or not, asar or not,
webpack or not, portable or not.
This function aims to provide paths to application data independent
of any of that.

#### Parameters:

Name | Type |
:------ | :------ |
`id` | AppPath |

**Returns:** *string*

Defined in: src/util/getVortexPath.ts:98

___

### installIconSet

▸ **installIconSet**(`set`: *string*, `setPath`: *string*): [*Promise*](../classes/promise.md)<Set<string\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`set` | *string* |
`setPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<Set<string\>\>

Defined in: src/controls/Icon.tsx:32

___

### isChildPath

▸ **isChildPath**(`child`: *string*, `parent`: *string*, `normalize?`: [*Normalize*](util.md#normalize)): *boolean*

test if a directory is a sub-directory of another one

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`child` | *string* | path of the presumed sub-directory   |
`parent` | *string* | path of the presumed parent directory    |
`normalize?` | [*Normalize*](util.md#normalize) | - |

**Returns:** *boolean*

Defined in: src/util/util.ts:289

___

### isFilenameValid

▸ **isFilenameValid**(`input`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *string* |

**Returns:** *boolean*

Defined in: src/util/util.ts:446

___

### isPathValid

▸ **isPathValid**(`input`: *string*, `allowRelative?`: *boolean*): *boolean*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`input` | *string* | - |
`allowRelative` | *boolean* | false |

**Returns:** *boolean*

Defined in: src/util/util.ts:470

___

### jsonRequest

▸ **jsonRequest**<T\>(`apiURL`: *string*): *Promise*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`apiURL` | *string* |

**Returns:** *Promise*<T\>

Defined in: src/util/network.ts:67

___

### lazyRequire

▸ **lazyRequire**<T\>(`delayed`: () => T, `exportId?`: *string*): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`delayed` | () => T |
`exportId?` | *string* |

**Returns:** T

Defined in: src/util/lazyRequire.ts:1

___

### makeNormalizingDict

▸ **makeNormalizingDict**<T\>(`input`: T, `normalize`: [*Normalize*](util.md#normalize)): T

creates a proxy for a dictionary that makes all key access normalized with the specified
normalization function

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *object* |

#### Parameters:

Name | Type |
:------ | :------ |
`input` | T |
`normalize` | [*Normalize*](util.md#normalize) |

**Returns:** T

Defined in: src/util/getNormalizeFunc.ts:189

___

### makeQueue

▸ **makeQueue**<T\>(): *function*

create a "queue".
Returns an enqueue function such that that the callback passed to it
will be called only after everything before it in the queue is finished
and with the promise that nothing else in the queue is run in parallel.

#### Type parameters:

Name |
:------ |
`T` |

**Returns:** (`func`: () => [*Promise*](../classes/promise.md)<T\>, `tryOnly`: *boolean*) => [*Promise*](../classes/promise.md)<T\>

Defined in: src/util/util.ts:145

___

### makeReactive

▸ **makeReactive**<T\>(`value`: T): T

create a proxy around the specified object that forces any
react component that has this proxy as a prop to update whenever
the object is changed (mutated)

TODO: The implementation isn't particularly efficient (see comment in
  ExtensionGate.tsx), I hope we can fix that someday without changing
  the api

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *object* |

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T |

**Returns:** T

Defined in: src/util/makeReactive.ts:53

___

### merge

▸ **merge**<T\>(`state`: T, `path`: (*string* \| *number*)[], `value`: *any*): T

shallow merge a value into the store at the specified location

**`export`** 

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *object* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`path` | (*string* \| *number*)[] |
`value` | *any* |

**Returns:** T

Defined in: src/util/storeHelper.ts:308

___

### mutateSafe

▸ **mutateSafe**<T\>(`state`: T, `path`: (*string* \| *number*)[], `value`: *any*): *void*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`path` | (*string* \| *number*)[] |
`value` | *any* |

**Returns:** *void*

Defined in: src/util/storeHelper.ts:72

___

### objDiff

▸ **objDiff**(`lhs`: *any*, `rhs`: *any*, `skip?`: *string*[]): *any*

return the delta between two objects

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`lhs` | *any* | the left, "before", object   |
`rhs` | *any* | the right, "after", object    |
`skip?` | *string*[] | - |

**Returns:** *any*

Defined in: src/util/util.ts:96

___

### onceCB

▸ **onceCB**<T\>(`func`: T): T

Higher-Order function that ensures that the wrapped callback is only called once (through this wrapper)
When passing a callback to an event it might not be intended to be called more than once but since
any part of the application (including extensions) could be adding event handlers and break the logic
that ensures that - this ensures that errors like that are reported in a useable fashion.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | Function |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`func` | T | the function to wrap    |

**Returns:** T

Defined in: src/util/onceCB.ts:8

___

### opn

▸ **opn**(`target`: *string*, `wait?`: *boolean*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *string* |
`wait?` | *boolean* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/opn.ts:21

___

### pad

▸ **pad**(`value`: *number*, `padding`: *string*, `width`: *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *number* |
`padding` | *string* |
`width` | *number* |

**Returns:** *string*

Defined in: src/util/util.ts:212

___

### prettifyNodeErrorMessage

▸ **prettifyNodeErrorMessage**(`err`: *any*, `options?`: [*IErrorOptions*](../interfaces/types.ierroroptions.md)): [*IPrettifiedError*](../interfaces/util.iprettifiederror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`err` | *any* |
`options?` | [*IErrorOptions*](../interfaces/types.ierroroptions.md) |

**Returns:** [*IPrettifiedError*](../interfaces/util.iprettifiederror.md)

Defined in: src/util/message.ts:348

___

### pushSafe

▸ **pushSafe**<T\>(`state`: T, `path`: (*string* \| *number*)[], `value`: *any*): T

push an item to an array inside state. This creates all intermediate
nodes and the array itself as necessary

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`state` | T | immutable object to update   |
`path` | (*string* \| *number*)[] | path to the item to update   |
`value` | *any* | the value to add.    |

**Returns:** T

Defined in: src/util/storeHelper.ts:239

___

### rawRequest

▸ **rawRequest**(`apiURL`: *string*, `options?`: [*IRequestOptions*](../interfaces/util.irequestoptions.md)): *Promise*<string \| Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`apiURL` | *string* |
`options?` | [*IRequestOptions*](../interfaces/util.irequestoptions.md) |

**Returns:** *Promise*<string \| Buffer\>

Defined in: src/util/network.ts:11

___

### readExtensibleDir

▸ **readExtensibleDir**(`extType`: ExtensionType, `bundledPath`: *string*, `customPath`: *string*): [*Promise*](../classes/promise.md)<any[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`extType` | ExtensionType |
`bundledPath` | *string* |
`customPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<any[]\>

Defined in: src/extensions/extension_manager/util.ts:432

___

### rehydrate

▸ **rehydrate**<T\>(`state`: T, `inbound`: *any*, `path`: *string*[], `replace`: *boolean*): T

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *object* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`inbound` | *any* |
`path` | *string*[] |
`replace` | *boolean* |

**Returns:** T

Defined in: src/util/storeHelper.ts:313

___

### relativeTime

▸ **relativeTime**(`date`: Date, `t`: [*TFunction*](types.md#tfunction)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date |
`t` | [*TFunction*](types.md#tfunction) |

**Returns:** *string*

Defined in: src/util/relativeTime.ts:29

___

### removeValue

▸ **removeValue**<T\>(`state`: T, `path`: (*string* \| *number*)[], `value`: *any*): T

remove a value from an array by value

**`export`** 

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`path` | (*string* \| *number*)[] |
`value` | *any* |

**Returns:** T

Defined in: src/util/storeHelper.ts:271

___

### removeValueIf

▸ **removeValueIf**<T\>(`state`: T, `path`: (*string* \| *number*)[], `predicate`: (`element`: *any*) => *boolean*): T

remove all vales for which the predicate applies

**`export`** 

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *object* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`path` | (*string* \| *number*)[] |
`predicate` | (`element`: *any*) => *boolean* |

**Returns:** T

Defined in: src/util/storeHelper.ts:292

___

### renderError

▸ **renderError**(`err`: *string* \| Error \| *any*, `options?`: [*IErrorOptions*](../interfaces/types.ierroroptions.md)): IErrorRendered

render error message for display to the user

#### Parameters:

Name | Type |
:------ | :------ |
`err` | *string* \| Error \| *any* |
`options?` | [*IErrorOptions*](../interfaces/types.ierroroptions.md) |

**Returns:** IErrorRendered

Defined in: src/util/message.ts:610

___

### renderModName

▸ **renderModName**(`mod`: [*IMod*](../interfaces/types.imod.md), `options?`: INameOptions): *string*

determins the mod name to show to the user based on the mod attributes.
absolutely never use this function for anything other than showing the output
to the user, the output must not be stored or used as an identifier for the mod,
I reserve the right to change the algorithm at any time.

#### Parameters:

Name | Type |
:------ | :------ |
`mod` | [*IMod*](../interfaces/types.imod.md) |
`options?` | INameOptions |

**Returns:** *string*

Defined in: src/extensions/mod_management/util/modName.ts:38

___

### resolveCategoryName

▸ **resolveCategoryName**(`category`: *string*, `state`: [*IState*](../interfaces/types.istate.md)): *string*

retrieve the Category from the Store

#### Parameters:

Name | Type |
:------ | :------ |
`category` | *string* |
`state` | [*IState*](../interfaces/types.istate.md) |

**Returns:** *string*

Defined in: src/extensions/category_management/util/retrieveCategoryPath.ts:58

___

### resolveCategoryPath

▸ **resolveCategoryPath**(`category`: *string*, `state`: [*IState*](../interfaces/types.istate.md)): *string*

retrieve the Category from the Store returning the full category path.

#### Parameters:

Name | Type |
:------ | :------ |
`category` | *string* |
`state` | [*IState*](../interfaces/types.istate.md) |

**Returns:** *string*

Defined in: src/extensions/category_management/util/retrieveCategoryPath.ts:36

___

### runElevated

▸ **runElevated**(`ipcPath`: *string*, `func`: (`ipc`: *any*, `req`: NodeRequire) => *void* \| *Promise*<void\> \| [*Promise*](../classes/promise.md)<void\>, `args?`: *any*): [*Promise*](../classes/promise.md)<any\>

run a function as an elevated process (windows only!).
This is quite a hack because obviously windows doesn't allow us to elevate a
running process so instead we have to store the function code into a file and start a
new node process elevated to execute that script.

IMPORTANT As a consequence the function can not bind any parameters

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ipcPath` | *string* | a unique identifier for a local ipc channel that can be used to                 communicate with the elevated process (as stdin/stdout can not be)                 redirected   |
`func` | (`ipc`: *any*, `req`: NodeRequire) => *void* \| *Promise*<void\> \| [*Promise*](../classes/promise.md)<void\> | The closure to run in the elevated process. Try to avoid                        'fancy' code. This function receives two parameters, one is an ipc stream,                        connected to the path specified in the first parameter.                        The second function is a require function which you need to use instead of                        the global require. Regular require calls will not work in production                        builds   |
`args?` | *any* | arguments to be passed into the elevated process   |

**Returns:** [*Promise*](../classes/promise.md)<any\>

a promise that will be resolved as soon as the process is started
                            (which happens after the user confirmed elevation). It resolves to
                            the path of the tmpFile we had to create. If the caller can figure
                            out when the process is done (using ipc) it should delete it

Defined in: node_modules/vortex-run/lib/elevated.d.ts:27

___

### runThreaded

▸ **runThreaded**(`func`: (...`args`: *any*[]) => *any*, `moduleBase`: *string*, ...`args`: *any*[]): [*Promise*](../classes/promise.md)<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`func` | (...`args`: *any*[]) => *any* |
`moduleBase` | *string* |
`...args` | *any*[] |

**Returns:** [*Promise*](../classes/promise.md)<any\>

Defined in: node_modules/vortex-run/lib/thread.d.ts:2

___

### sanitizeCSSId

▸ **sanitizeCSSId**(`input`: *string*): *string*

take any input string and sanitize it into a valid css id

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *string* |

**Returns:** *string*

Defined in: src/util/util.ts:337

___

### setDefaultArray

▸ **setDefaultArray**<T\>(`state`: T, `path`: (*string* \| *number*)[], `fallback`: *any*[]): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`path` | (*string* \| *number*)[] |
`fallback` | *any*[] |

**Returns:** T

Defined in: src/util/storeHelper.ts:209

___

### setOrNop

▸ **setOrNop**<T\>(`state`: T, `path`: *string*[], `value`: *any*): T

sets a value or do nothing if the path (except for the last element) doesn't exist.
That is: setOrNop does not create the object hierarchy referenced in the path but
it does add a new attribute to the object if necessary.

**`export`** 

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`path` | *string*[] |
`value` | *any* |

**Returns:** T

Defined in: src/util/storeHelper.ts:127

___

### setSafe

▸ **setSafe**<T\>(`state`: T, `path`: (*string* \| *number*)[], `value`: *any*): T

set an item in state, creating all intermediate nodes as necessary

**`export`** 

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *object* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`path` | (*string* \| *number*)[] |
`value` | *any* |

**Returns:** T

Defined in: src/util/storeHelper.ts:94

___

### setdefault

▸ **setdefault**<T, K\>(`obj`: T, `key`: K, `def`: T[K]): T[K]

like the python setdefault function:
returns the attribute "key" from "obj". If that attribute doesn't exist
on obj, it will be set to the default value and that is returned.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | - |
`K` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | T |
`key` | K |
`def` | T[K] |

**Returns:** T[K]

Defined in: src/util/util.ts:44

___

### showActivity

▸ **showActivity**<S\>(`dispatch`: *ThunkDispatch*<[*IState*](../interfaces/types.istate.md), *null*, Redux.Action\>, `message`: *string*, `id?`: *string*): *void*

show activity notification

#### Type parameters:

Name |
:------ |
`S` |

#### Parameters:

Name | Type |
:------ | :------ |
`dispatch` | *ThunkDispatch*<[*IState*](../interfaces/types.istate.md), *null*, Redux.Action\> |
`message` | *string* |
`id?` | *string* |

**Returns:** *void*

Defined in: src/util/message.ts:75

___

### showError

▸ **showError**(`dispatch`: *ThunkDispatch*<[*IState*](../interfaces/types.istate.md), *null*, Redux.Action\>, `title`: *string*, `details?`: *string* \| Error \| *any*, `options?`: [*IErrorOptions*](../interfaces/types.ierroroptions.md)): *void*

show an error notification with an optional "more" button that displays further details
in a modal dialog.

**`export`** 

#### Parameters:

Name | Type |
:------ | :------ |
`dispatch` | *ThunkDispatch*<[*IState*](../interfaces/types.istate.md), *null*, Redux.Action\> |
`title` | *string* |
`details?` | *string* \| Error \| *any* |
`options?` | [*IErrorOptions*](../interfaces/types.ierroroptions.md) |

**Returns:** *void*

Defined in: src/util/message.ts:226

___

### showInfo

▸ **showInfo**<S\>(`dispatch`: *ThunkDispatch*<[*IState*](../interfaces/types.istate.md), *null*, Redux.Action\>, `message`: *string*, `id?`: *string*): *void*

show an info notification. Please don't use this for important stuff as the message
has a timer based on message length

**`export`** 

#### Type parameters:

Name |
:------ |
`S` |

#### Parameters:

Name | Type |
:------ | :------ |
`dispatch` | *ThunkDispatch*<[*IState*](../interfaces/types.istate.md), *null*, Redux.Action\> |
`message` | *string* |
`id?` | *string* |

**Returns:** *void*

Defined in: src/util/message.ts:95

___

### showSuccess

▸ **showSuccess**<S\>(`dispatch`: *ThunkDispatch*<[*IState*](../interfaces/types.istate.md), *null*, Redux.Action\>, `message`: *string*, `id?`: *string*): *void*

show a notification that some operation succeeded. This message has a timer based on
the message length

**`export`** 

#### Type parameters:

Name |
:------ |
`S` |

#### Parameters:

Name | Type |
:------ | :------ |
`dispatch` | *ThunkDispatch*<[*IState*](../interfaces/types.istate.md), *null*, Redux.Action\> |
`message` | *string* |
`id?` | *string* |

**Returns:** *void*

Defined in: src/util/message.ts:60

___

### sortMods

▸ **sortMods**(`gameId`: *string*, `mods`: [*IMod*](../interfaces/types.imod.md)[], `api`: [*IExtensionApi*](../interfaces/types.iextensionapi.md)): [*Promise*](../classes/promise.md)<[*IMod*](../interfaces/types.imod.md)[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`gameId` | *string* |
`mods` | [*IMod*](../interfaces/types.imod.md)[] |
`api` | [*IExtensionApi*](../interfaces/types.iextensionapi.md) |

**Returns:** [*Promise*](../classes/promise.md)<[*IMod*](../interfaces/types.imod.md)[]\>

Defined in: src/extensions/mod_management/util/sort.ts:33

___

### terminate

▸ **terminate**(`error`: IError, `state`: *any*, `allowReport?`: *boolean*, `source?`: *string*): *void*

display an error message and quit the application
on confirmation.
Use this whenever the application state is unknown and thus
continuing could lead to data loss

**`export`** 

#### Parameters:

Name | Type |
:------ | :------ |
`error` | IError |
`state` | *any* |
`allowReport?` | *boolean* |
`source?` | *string* |

**Returns:** *void*

Defined in: src/util/errorHandling.ts:269

___

### testModReference

▸ **testModReference**(`mod`: [*IMod*](../interfaces/types.imod.md) \| IModLookupInfo, `reference`: [*IModReference*](../interfaces/types.imodreference.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`mod` | [*IMod*](../interfaces/types.imod.md) \| IModLookupInfo |
`reference` | [*IModReference*](../interfaces/types.imodreference.md) |

**Returns:** *boolean*

Defined in: src/extensions/mod_management/util/testModReference.ts:73

___

### toPromise

▸ **toPromise**<ResT\>(`func`: (`cb`: *any*) => *void*): [*Promise*](../classes/promise.md)<ResT\>

#### Type parameters:

Name |
:------ |
`ResT` |

#### Parameters:

Name | Type |
:------ | :------ |
`func` | (`cb`: *any*) => *void* |

**Returns:** [*Promise*](../classes/promise.md)<ResT\>

Defined in: src/util/util.ts:563

___

### unique

▸ **unique**<T, U\>(`input`: T[], `keyFunc?`: (`item`: T) => U): T[]

#### Type parameters:

Name |
:------ |
`T` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`input` | T[] |
`keyFunc?` | (`item`: T) => U |

**Returns:** T[]

Defined in: src/util/util.ts:576

___

### userFriendlyTime

▸ **userFriendlyTime**(`date`: Date, `t`: [*TFunction*](types.md#tfunction), `locale`: *string*): *string*

format the specified date in a user-friendly way, depending on the globally set time mode

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date |
`t` | [*TFunction*](types.md#tfunction) |
`locale` | *string* |

**Returns:** *string*

Defined in: src/util/relativeTime.ts:21

___

### walk

▸ **walk**(`target`: *string*, `callback`: (`iterPath`: *string*, `stats`: [*Stats*](../classes/fs.stats.md)) => [*Promise*](../classes/promise.md)<any\>, `options?`: IWalkOptions): [*Promise*](../classes/promise.md)<void\>

recursively walk the target directory

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`target` | *string* | the directory to search   |
`callback` | (`iterPath`: *string*, `stats`: [*Stats*](../classes/fs.stats.md)) => [*Promise*](../classes/promise.md)<any\> | called on each file and directory encountered. Receives the path and                       corresponding fs stats as parameter. Should return a promise that will be                       awaited before proceeding to the next directory. If this promise is                       rejected, the walk is interrupted   |
`options?` | IWalkOptions | - |

**Returns:** [*Promise*](../classes/promise.md)<void\>

a promise that is resolved once the search is complete

Defined in: src/util/walk.ts:21

___

### withErrorContext

▸ **withErrorContext**(`id`: *string*, `value`: *string*, `fun`: () => [*Promise*](../classes/promise.md)<any\>): [*Promise*](../classes/promise.md)<any\>

execute a function with the specified error context

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* | identifier of the context to set   |
`value` | *string* | context value   |
`fun` | () => [*Promise*](../classes/promise.md)<any\> | the function to set    |

**Returns:** [*Promise*](../classes/promise.md)<any\>

Defined in: src/util/errorHandling.ts:489

___

### writeFileAtomic

▸ **writeFileAtomic**(`filePath`: *string*, `input`: *string* \| Buffer): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |
`input` | *string* \| Buffer |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fsAtomic.ts:29
