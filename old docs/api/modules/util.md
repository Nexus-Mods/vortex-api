[vortex_devel](../README.md) / [Exports](../modules.md) / util

# Namespace: util

## Table of contents

### Enumerations

- [Campaign](../enums/util.Campaign.md)
- [Section](../enums/util.Section.md)

### Classes

- [Archive](../classes/util.Archive.md)
- [ArgumentInvalid](../classes/util.ArgumentInvalid.md)
- [ConcurrencyLimiter](../classes/util.ConcurrencyLimiter.md)
- [CycleError](../classes/util.CycleError.md)
- [DataInvalid](../classes/util.DataInvalid.md)
- [Debouncer](../classes/util.Debouncer.md)
- [GameNotFound](../classes/util.GameNotFound.md)
- [MissingInterpreter](../classes/util.MissingInterpreter.md)
- [NotFound](../classes/util.NotFound.md)
- [NotSupportedError](../classes/util.NotSupportedError.md)
- [ProcessCanceled](../classes/util.ProcessCanceled.md)
- [ReduxProp](../classes/util.ReduxProp.md)
- [SetupError](../classes/util.SetupError.md)
- [SevenZip](../classes/util.SevenZip.md)
- [StarterInfo](../classes/util.StarterInfo.md)

### Interfaces

- [IErrorRendered](../interfaces/util.IErrorRendered.md)
- [IPrettifiedError](../interfaces/util.IPrettifiedError.md)
- [IRequestOptions](../interfaces/util.IRequestOptions.md)
- [ISteamEntry](../interfaces/util.ISteamEntry.md)

### Type aliases

- [Method](util.md#method)
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
- [batchDispatch](util.md#batchdispatch)
- [bbcodePreProcess](util.md#bbcodepreprocess)
- [bbcodeToHTML](util.md#bbcodetohtml)
- [bbcodeToReact](util.md#bbcodetoreact)
- [bundleAttachment](util.md#bundleattachment)
- [bytesToString](util.md#bytestostring)
- [calcDuration](util.md#calcduration)
- [calculateFolderSize](util.md#calculatefoldersize)
- [changeOrNop](util.md#changeornop)
- [checksum](util.md#checksum)
- [convertGameIdReverse](util.md#convertgameidreverse)
- [copyFileAtomic](util.md#copyfileatomic)
- [copyRecursive](util.md#copyrecursive)
- [currentGame](util.md#currentgame)
- [deBOM](util.md#debom)
- [delay](util.md#delay)
- [deleteOrNop](util.md#deleteornop)
- [deriveInstallName](util.md#deriveinstallname)
- [extend](util.md#extend)
- [extractExeIcon](util.md#extractexeicon)
- [fileMD5](util.md#filemd5)
- [findDownloadByRef](util.md#finddownloadbyref)
- [findModByRef](util.md#findmodbyref)
- [getActivator](util.md#getactivator)
- [getApplication](util.md#getapplication)
- [getCurrentActivator](util.md#getcurrentactivator)
- [getCurrentLanguage](util.md#getcurrentlanguage)
- [getGame](util.md#getgame)
- [getGames](util.md#getgames)
- [getManifest](util.md#getmanifest)
- [getModSource](util.md#getmodsource)
- [getModSources](util.md#getmodsources)
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
- [local](util.md#local)
- [lookupFromDownload](util.md#lookupfromdownload)
- [makeModReference](util.md#makemodreference)
- [makeNormalizingDict](util.md#makenormalizingdict)
- [makeQueue](util.md#makequeue)
- [makeReactive](util.md#makereactive)
- [makeRemoteCall](util.md#makeremotecall)
- [makeUnique](util.md#makeunique)
- [makeUniqueByKey](util.md#makeuniquebykey)
- [merge](util.md#merge)
- [mutateSafe](util.md#mutatesafe)
- [nexusGameId](util.md#nexusgameid)
- [nexusModsURL](util.md#nexusmodsurl)
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
- [removeMods](util.md#removemods)
- [removeValue](util.md#removevalue)
- [removeValueIf](util.md#removevalueif)
- [renderError](util.md#rendererror)
- [renderModName](util.md#rendermodname)
- [renderModReference](util.md#rendermodreference)
- [request](util.md#request)
- [resolveCategoryName](util.md#resolvecategoryname)
- [resolveCategoryPath](util.md#resolvecategorypath)
- [runElevated](util.md#runelevated)
- [runThreaded](util.md#runthreaded)
- [sanitizeCSSId](util.md#sanitizecssid)
- [sanitizeFilename](util.md#sanitizefilename)
- [semverCoerce](util.md#semvercoerce)
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
- [upload](util.md#upload)
- [userFriendlyTime](util.md#userfriendlytime)
- [walk](util.md#walk)
- [withErrorContext](util.md#witherrorcontext)
- [writeFileAtomic](util.md#writefileatomic)

## Type aliases

### Method

Ƭ **Method**: ``"GET"`` \| ``"POST"`` \| ``"PUT"``

#### Defined in

../src/util/network.ts:83

___

### Normalize

Ƭ **Normalize**: (`input`: `string`) => `string`

#### Type declaration

▸ (`input`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

##### Returns

`string`

#### Defined in

../src/util/getNormalizeFunc.ts:7

___

### TextGroup

Ƭ **TextGroup**: ``"mod"``

#### Defined in

../src/util/api.ts:173

## Variables

### GameStoreHelper

• **GameStoreHelper**: `GameStoreHelper`

#### Defined in

../src/util/GameStoreHelper.ts:292

___

### UserCanceled

• **UserCanceled**: `IUserCanceledConstructor`

#### Defined in

../src/util/CustomErrors.ts:91

___

### epicGamesLauncher

• **epicGamesLauncher**: [`IGameStore`](../interfaces/types.IGameStore.md)

#### Defined in

../src/util/EpicGamesLauncher.ts:199

___

### github

• **github**: `GitHub`

___

### steam

• **steam**: [`IGameStore`](../interfaces/types.IGameStore.md)

#### Defined in

../src/util/Steam.ts:314

## Functions

### LazyComponent

▸ **LazyComponent**<`T`\>(`load`): (`props`: `any`) => `Element`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `load` | () => `any` |

#### Returns

`fn`

▸ (`props`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

##### Returns

`Element`

#### Defined in

../src/util/LazyComponent.tsx:4

___

### addUniqueSafe

▸ **addUniqueSafe**<`T`\>(`state`, `path`, `value`): `T`

add an item to an array inside state but don't allow duplicates

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `T` | immutable object to update |
| `path` | (`string` \| `number`)[] | path to the item to update |
| `value` | `any` | the value to add. |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:258

___

### batchDispatch

▸ **batchDispatch**(`store`, `actions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `Dispatch`<`AnyAction`\> \| `Store`<`any`, `AnyAction`\> |
| `actions` | `Action`<`any`\>[] |

#### Returns

`void`

#### Defined in

../src/util/util.ts:724

___

### bbcodePreProcess

▸ **bbcodePreProcess**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

../src/util/bbcode.ts:69

___

### bbcodeToHTML

▸ **bbcodeToHTML**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

../src/util/bbcode.ts:98

___

### bbcodeToReact

▸ **bbcodeToReact**(`input`, `context?`): `React.ReactChild`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `context?` | `any` |

#### Returns

`React.ReactChild`[]

#### Defined in

../src/util/bbcode.ts:75

___

### bundleAttachment

▸ **bundleAttachment**(`options?`): [`Promise`](../classes/Promise.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IErrorOptions`](../interfaces/types.IErrorOptions.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`string`\>

#### Defined in

../src/util/message.ts:207

___

### bytesToString

▸ **bytesToString**(`bytes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`string`

#### Defined in

../src/util/util.ts:206

___

### calcDuration

▸ **calcDuration**(`messageLength`): `number`

calculate a reasonable time to display a message based on the
amount of text.
This is quite crude because the reading speed differs between languages.
Japanese and Chinese for example where a single symbol has much more meaning
than a latin character the reading speed per symbol will be lower.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageLength` | `number` |

#### Returns

`number`

#### Defined in

../src/util/message.ts:49

___

### calculateFolderSize

▸ **calculateFolderSize**(`dirPath`): [`Promise`](../classes/Promise.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`number`\>

#### Defined in

../src/util/calculateFolderSize.ts:5

___

### changeOrNop

▸ **changeOrNop**<`T`\>(`state`, `path`, `value`): `T`

sets a value or do nothing if the path or the key (last element of the path) doesn't exist.
This means changeOrNop only changes a pre-existing object attribute

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `path` | (`string` \| `number`)[] |
| `value` | `any` |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:161

___

### checksum

▸ **checksum**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Buffer` |

#### Returns

`string`

#### Defined in

../src/util/checksum.ts:5

___

### convertGameIdReverse

▸ **convertGameIdReverse**(`knownGames`, `input`): `string`

get our internal game id for a nexus page id

#### Parameters

| Name | Type |
| :------ | :------ |
| `knownGames` | [`IGameStored`](../interfaces/types.IGameStored.md)[] |
| `input` | `string` |

#### Returns

`string`

#### Defined in

../src/extensions/nexus_integration/util/convertGameId.ts:45

___

### copyFileAtomic

▸ **copyFileAtomic**(`srcPath`, `destPath`): [`Promise`](../classes/Promise.md)<`void`\>

copy a file in such a way that it will not replace the target if the copy is
somehow interrupted. The file is first copied to a temporary file in the same
directory as the destination, then deletes the destination and renames the temp
to destination. Since the rename is atomic and the deletion only happens after
a successful write this should minimize the risk of error.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcPath` | `string` |
| `destPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fsAtomic.ts:90

___

### copyRecursive

▸ **copyRecursive**(`source`, `destination`): [`Promise`](../classes/Promise.md)<`void`\>

custom implementation of recursive directory copying.
copy from fs-extra does this already, but that function has no limit on the number
of files it will copy at once making it fairly inefficient, especially on spinning
disks and unpredictable in regards to memory usage.

TODO: This implementation could do with more real world testing and optimization
  (maybe even adapting to whether copying many small files or few large ones and
   the disk type and different OSes)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | source path to copy from |
| `destination` | `string` | destination path to copy to |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/copyRecursive.ts:82

___

### currentGame

▸ **currentGame**(`store`): [`Promise`](../classes/Promise.md)<[`IGameStored`](../interfaces/types.IGameStored.md)\>

return the stored static details about the currently selected game mode
or a fallback with the id '__placeholder'
the return value is a promise because known games are loaded during extension
initialization so there is quite a bit of code where we can't be sure
if this is yet available

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `Store`<`any`, `AnyAction`\> |

#### Returns

[`Promise`](../classes/Promise.md)<[`IGameStored`](../interfaces/types.IGameStored.md)\>

#### Defined in

../src/util/storeHelper.ts:357

___

### deBOM

▸ **deBOM**(`input`): `string`

remove the BOM from the input string. doesn't do anything if there is none.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

../src/util/util.ts:374

___

### delay

▸ **delay**(`timeoutMS`): [`Promise`](../classes/Promise.md)<`void`\>

wait for the specified number of milliseconds before resolving the promise.
Bluebird has this feature as Promise.delay but when using es6 default promises this can be used

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutMS` | `number` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/util.ts:447

___

### deleteOrNop

▸ **deleteOrNop**<`T`\>(`state`, `path`): `T`

delete a value or do nothing if the path doesn't exist

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `path` | (`string` \| `number`)[] |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:190

___

### deriveInstallName

▸ **deriveInstallName**(`archiveName`, `info`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `archiveName` | `string` |
| `info` | `any` |

#### Returns

`string`

#### Defined in

../src/extensions/mod_management/modIdManager.ts:5

___

### extend

▸ **extend**(`registerFunc`, `groupProp?`, `addExtInfo?`): <P\>(`component`: `React.ComponentType`<`P`\>) => `React.ComponentType`<`Omit`<`P`, keyof `IExtendedProps`\> & `IExtensibleProps`\>

extension function. This function creates a wrapper around a component that
binds the extensions of a component to its props

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `registerFunc` | (...`args`: `any`[]) => `void` |
| `groupProp?` | `string` |
| `addExtInfo?` | `boolean` |

#### Returns

`fn`

the wrapper component

▸ <`P`\>(`component`): `React.ComponentType`<`Omit`<`P`, keyof `IExtendedProps`\> & `IExtensibleProps`\>

extension function. This function creates a wrapper around a component that
binds the extensions of a component to its props

**`export`**

##### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `IExtendedProps` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `React.ComponentType`<`P`\> |

##### Returns

`React.ComponentType`<`Omit`<`P`, keyof `IExtendedProps`\> & `IExtensibleProps`\>

the wrapper component

#### Defined in

../src/util/ExtensionProvider.ts:24

___

### extractExeIcon

▸ **extractExeIcon**(`exePath`, `destPath`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exePath` | `string` |
| `destPath` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

../src/util/exeIcon.ts:10

___

### fileMD5

▸ **fileMD5**(`filePath`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

../src/util/checksum.ts:11

___

### findDownloadByRef

▸ **findDownloadByRef**(`reference`, `downloads`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`IReference`](../interfaces/types.IReference.md) |
| `downloads` | `Object` |

#### Returns

`string`

#### Defined in

../src/extensions/mod_management/util/dependencies.ts:247

___

### findModByRef

▸ **findModByRef**(`reference`, `mods`, `source?`): [`IMod`](../interfaces/types.IMod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`IModReference`](../interfaces/types.IModReference.md) |
| `mods` | `Object` |
| `source?` | `Object` |
| `source.gameId` | `string` |
| `source.modId` | `string` |

#### Returns

[`IMod`](../interfaces/types.IMod.md)

#### Defined in

../src/extensions/mod_management/util/dependencies.ts:27

___

### getActivator

▸ **getActivator**(`activatorId`): [`IDeploymentMethod`](../interfaces/types.IDeploymentMethod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `activatorId` | `string` |

#### Returns

[`IDeploymentMethod`](../interfaces/types.IDeploymentMethod.md)

#### Defined in

../src/extensions/mod_management/util/deploymentMethods.ts:99

___

### getApplication

▸ **getApplication**(): `IApplication`

#### Returns

`IApplication`

#### Defined in

../src/util/application.ts:29

___

### getCurrentActivator

▸ **getCurrentActivator**(`state`, `gameId`, `allowDefault`): [`IDeploymentMethod`](../interfaces/types.IDeploymentMethod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`IState`](../interfaces/types.IState.md) |
| `gameId` | `string` |
| `allowDefault` | `boolean` |

#### Returns

[`IDeploymentMethod`](../interfaces/types.IDeploymentMethod.md)

#### Defined in

../src/extensions/mod_management/util/deploymentMethods.ts:57

___

### getCurrentLanguage

▸ **getCurrentLanguage**(): `string`

#### Returns

`string`

#### Defined in

../src/util/i18n.ts:213

___

### getGame

▸ **getGame**(`gameId`): [`IGame`](../interfaces/types.IGame.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |

#### Returns

[`IGame`](../interfaces/types.IGame.md)

#### Defined in

../src/extensions/gamemode_management/util/getGame.ts:118

___

### getGames

▸ **getGames**(): [`IGame`](../interfaces/types.IGame.md)[]

#### Returns

[`IGame`](../interfaces/types.IGame.md)[]

#### Defined in

../src/extensions/gamemode_management/util/getGame.ts:111

___

### getManifest

▸ **getManifest**(`api`, `modType?`, `gameId?`): [`Promise`](../classes/Promise.md)<[`IDeploymentManifest`](../interfaces/types.IDeploymentManifest.md)\>

return a manifest (detailing which files are currently deployed by Vortex)
Please note that the manifest is intended only as kind of a fallback, core functionality
of Vortex is designed to work cleanly even if the manifest is deleted by the user and
the same should be true for any extension using this function: Work on the assumption
that the manifest may be missing or outdated.

**`remarks`**
This call is expensive as it attempts to read the manifest every time. Store the
result or call infrequently to minimise allocations and/or lag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | [`IExtensionApi`](../interfaces/types.IExtensionApi.md) | api |
| `modType?` | `string` | the mod type for which to retrieve the manifest, default mod type if undefined |
| `gameId?` | `string` | the game for which to retrieve the manifest, defaults to the current game. |

#### Returns

[`Promise`](../classes/Promise.md)<[`IDeploymentManifest`](../interfaces/types.IDeploymentManifest.md)\>

#### Defined in

../src/extensions/mod_management/util/activationStore.ts:309

___

### getModSource

▸ **getModSource**(`id`): `IModSource`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`IModSource`

#### Defined in

../src/extensions/mod_management/util/modSource.ts:10

___

### getModSources

▸ **getModSources**(): `IModSource`[]

#### Returns

`IModSource`[]

#### Defined in

../src/extensions/mod_management/util/modSource.ts:6

___

### getModType

▸ **getModType**(`id`): [`IModType`](../interfaces/types.IModType.md)

get information about a mod type
will return undefined if the id does not refer to a known mod type.
Also the default modType (empty string) for a game has no info structure like this
and will thus also return undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | mod type id |

#### Returns

[`IModType`](../interfaces/types.IModType.md)

details about the mod type, if available, undefined otherwise

#### Defined in

../src/extensions/gamemode_management/util/modTypeExtensions.ts:20

___

### getNormalizeFunc

▸ **getNormalizeFunc**(`testPath`, `parameters?`): [`Promise`](../classes/Promise.md)<[`Normalize`](util.md#normalize)\>

determine a function to normalize file names for the
file system in the specified path.
The second parameter can be used to specify how strict the normalization is.
Ideally you want everything but that makes the function slower and this function may
be called a lot. Oftentimes the source of the input path already guarantees some
normalization anyway.

#### Parameters

| Name | Type |
| :------ | :------ |
| `testPath` | `string` |
| `parameters?` | `INormalizeParameters` |

#### Returns

[`Promise`](../classes/Promise.md)<[`Normalize`](util.md#normalize)\>

#### Defined in

../src/util/getNormalizeFunc.ts:95

___

### getReduxLog

▸ **getReduxLog**(): `Promise`<`ILog`[]\>

#### Returns

`Promise`<`ILog`[]\>

#### Defined in

../src/util/reduxLogger.ts:46

___

### getSafe

▸ **getSafe**<`T`\>(`state`, `path`, `fallback`): `T`

return an item from state or the fallback if the path doesn't lead
to an item.

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |
| `path` | (`string` \| `number`)[] |
| `fallback` | `T` |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:29

___

### getSafeCI

▸ **getSafeCI**<`T`\>(`state`, `path`, `fallback`): `T`

case insensitive variant of getSafe

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |
| `path` | (`string` \| `number`)[] |
| `fallback` | `T` |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:49

___

### getText

▸ **getText**(`group`, `textId`, `t`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | ``"mod"`` |
| `textId` | `string` |
| `t` | `TFunction` |

#### Returns

`string`

#### Defined in

../src/util/api.ts:176

___

### getVisibleWindow

▸ **getVisibleWindow**(`win?`): `BrowserWindow` \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `win?` | `BrowserWindow` |

#### Returns

`BrowserWindow` \| ``null``

#### Defined in

../src/util/errorHandling.ts:262

___

### getVortexPath

▸ **getVortexPath**(`id`): `string`

the electron getAppPath function and globals like __dirname
or process.resourcesPath don't do a great job of abstracting away
how the application is being built, e.g. development or not, asar or not,
webpack or not, portable or not.
This function aims to provide paths to application data independent
of any of that.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `AppPath` |

#### Returns

`string`

#### Defined in

../src/util/getVortexPath.ts:134

___

### installIconSet

▸ **installIconSet**(`set`, `setPath`): [`Promise`](../classes/Promise.md)<`Set`<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `set` | `string` |
| `setPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`Set`<`string`\>\>

#### Defined in

../src/controls/Icon.tsx:32

___

### isChildPath

▸ **isChildPath**(`child`, `parent`, `normalize?`): `boolean`

test if a directory is a sub-directory of another one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `string` | path of the presumed sub-directory |
| `parent` | `string` | path of the presumed parent directory |
| `normalize?` | [`Normalize`](util.md#normalize) | - |

#### Returns

`boolean`

#### Defined in

../src/util/util.ts:311

___

### isFilenameValid

▸ **isFilenameValid**(`input`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`boolean`

#### Defined in

../src/util/util.ts:476

___

### isPathValid

▸ **isPathValid**(`input`, `allowRelative?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `string` | `undefined` |
| `allowRelative` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

../src/util/util.ts:519

___

### jsonRequest

▸ **jsonRequest**<`T`\>(`apiURL`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiURL` | `string` |

#### Returns

`Promise`<`T`\>

#### Defined in

../src/util/network.ts:69

___

### lazyRequire

▸ **lazyRequire**<`T`\>(`delayed`, `exportId?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delayed` | () => `T` |
| `exportId?` | `string` |

#### Returns

`T`

#### Defined in

../src/util/lazyRequire.ts:3

___

### local

▸ **local**<`T`\>(`id`, `init`): `T`

create a global variable that is available through an id.
This is basically a hack to get around the fact js can't have
proper singletons.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `init` | `T` |

#### Returns

`T`

#### Defined in

../src/util/local.ts:6

___

### lookupFromDownload

▸ **lookupFromDownload**(`download`): [`IModLookupInfo`](../interfaces/types.IModLookupInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `download` | [`IDownload`](../interfaces/types.IDownload.md) |

#### Returns

[`IModLookupInfo`](../interfaces/types.IModLookupInfo.md)

#### Defined in

../src/extensions/mod_management/util/dependencies.ts:221

___

### makeModReference

▸ **makeModReference**(`mod`): [`IReference`](../interfaces/types.IReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`IMod`](../interfaces/types.IMod.md) |

#### Returns

[`IReference`](../interfaces/types.IReference.md)

#### Defined in

../src/extensions/mod_management/util/modReference.ts:6

___

### makeNormalizingDict

▸ **makeNormalizingDict**<`T`\>(`input`, `normalize`): `T`

creates a proxy for a dictionary that makes all key access normalized with the specified
normalization function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |
| `normalize` | [`Normalize`](util.md#normalize) |

#### Returns

`T`

#### Defined in

../src/util/getNormalizeFunc.ts:189

___

### makeQueue

▸ **makeQueue**<`T`\>(): (`func`: () => [`Promise`](../classes/Promise.md)<`T`\>, `tryOnly`: `boolean`) => [`Promise`](../classes/Promise.md)<`T`\>

create a "queue".
Returns an enqueue function such that that the callback passed to it
will be called only after everything before it in the queue is finished
and with the promise that nothing else in the queue is run in parallel.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`func`, `tryOnly`): [`Promise`](../classes/Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `func` | () => [`Promise`](../classes/Promise.md)<`T`\> |
| `tryOnly` | `boolean` |

##### Returns

[`Promise`](../classes/Promise.md)<`T`\>

#### Defined in

../src/util/util.ts:159

___

### makeReactive

▸ **makeReactive**<`T`\>(`value`): `T`

create a proxy around the specified object that forces any
react component that has this proxy as a prop to update whenever
the object is changed (mutated)

TODO: The implementation isn't particularly efficient (see comment in
  ExtensionGate.tsx), I hope we can fix that someday without changing
  the api

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`T`

#### Defined in

../src/util/makeReactive.ts:53

___

### makeRemoteCall

▸ **makeRemoteCall**<`T`\>(`id`, `cb`): (...`args`: `any`[]) => `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `cb` | (`mainElectron`: typeof `CrossProcessExports`, `window`: `WebContents`, ...`args`: `any`[]) => `Promise`<`T`\> |

#### Returns

`fn`

▸ (...`args`): `Promise`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`Promise`<`T`\>

#### Defined in

../src/util/electronRemote.ts:88

___

### makeUnique

▸ **makeUnique**<`T`\>(`input`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T`[] |

#### Returns

`T`[]

#### Defined in

../src/util/util.ts:625

___

### makeUniqueByKey

▸ **makeUniqueByKey**<`T`\>(`input`, `key`): `T`[]

create a list with only "unique" items, using a key function to determine uniqueness.
in case of collisions the last item with a key is kept

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `T`[] | the input list of items |
| `key` | (`item`: `T`) => `string` | key function |

#### Returns

`T`[]

a list with duplicates removed

#### Defined in

../src/util/util.ts:636

___

### merge

▸ **merge**<`T`\>(`state`, `path`, `value`): `T`

shallow merge a value into the store at the specified location

**`export`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `path` | (`string` \| `number`)[] |
| `value` | `any` |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:315

___

### mutateSafe

▸ **mutateSafe**<`T`\>(`state`, `path`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `path` | (`string` \| `number`)[] |
| `value` | `any` |

#### Returns

`void`

#### Defined in

../src/util/storeHelper.ts:77

___

### nexusGameId

▸ **nexusGameId**(`game`, `fallbackGameId?`): `string`

get the nexus page id for a game
TODO: some games have hard-coded transformations here, should move all of that to game.details

#### Parameters

| Name | Type |
| :------ | :------ |
| `game` | [`IGame`](../interfaces/types.IGame.md) \| [`IGameStored`](../interfaces/types.IGameStored.md) |
| `fallbackGameId?` | `string` |

#### Returns

`string`

#### Defined in

../src/extensions/nexus_integration/util/convertGameId.ts:11

___

### nexusModsURL

▸ **nexusModsURL**(`reqPath`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reqPath` | `string`[] |
| `options?` | `INexusURLOptions` |

#### Returns

`string`

#### Defined in

../src/util/util.ts:817

___

### objDiff

▸ **objDiff**(`lhs`, `rhs`, `skip?`): `any`

return the delta between two objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `any` | the left, "before", object |
| `rhs` | `any` | the right, "after", object |
| `skip?` | `string`[] | - |

#### Returns

`any`

#### Defined in

../src/util/util.ts:103

___

### onceCB

▸ **onceCB**<`T`\>(`func`): `T`

Higher-Order function that ensures that the wrapped callback is only called once (through this wrapper)
When passing a callback to an event it might not be intended to be called more than once but since
any part of the application (including extensions) could be adding event handlers and break the logic
that ensures that - this ensures that errors like that are reported in a useable fashion.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | the function to wrap |

#### Returns

`T`

#### Defined in

../src/util/onceCB.ts:8

___

### opn

▸ **opn**(`target`, `wait?`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `wait?` | `boolean` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/opn.ts:21

___

### pad

▸ **pad**(`value`, `padding`, `width`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `padding` | `string` |
| `width` | `number` |

#### Returns

`string`

#### Defined in

../src/util/util.ts:234

___

### prettifyNodeErrorMessage

▸ **prettifyNodeErrorMessage**(`err`, `options?`, `fileName?`): [`IPrettifiedError`](../interfaces/util.IPrettifiedError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |
| `options?` | [`IErrorOptions`](../interfaces/types.IErrorOptions.md) |
| `fileName?` | `string` |

#### Returns

[`IPrettifiedError`](../interfaces/util.IPrettifiedError.md)

#### Defined in

../src/util/message.ts:382

___

### pushSafe

▸ **pushSafe**<`T`\>(`state`, `path`, `value`): `T`

push an item to an array inside state. This creates all intermediate
nodes and the array itself as necessary

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `T` | immutable object to update |
| `path` | (`string` \| `number`)[] | path to the item to update |
| `value` | `any` | the value to add. |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:246

___

### rawRequest

▸ **rawRequest**(`apiURL`, `options?`): `Promise`<`string` \| `Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiURL` | `string` |
| `options?` | [`IRequestOptions`](../interfaces/util.IRequestOptions.md) |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

../src/util/network.ts:13

___

### readExtensibleDir

▸ **readExtensibleDir**(`extType`, `bundledPath`, `customPath`): [`Promise`](../classes/Promise.md)<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `extType` | `ExtensionType` |
| `bundledPath` | `string` |
| `customPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`any`[]\>

#### Defined in

../src/extensions/extension_manager/util.ts:431

___

### rehydrate

▸ **rehydrate**<`T`\>(`state`, `inbound`, `path`, `replace`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `inbound` | `any` |
| `path` | `string`[] |
| `replace` | `boolean` |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:320

___

### relativeTime

▸ **relativeTime**(`date`, `t`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `t` | `TFunction` |

#### Returns

`string`

#### Defined in

../src/util/relativeTime.ts:29

___

### removeMods

▸ **removeMods**(`api`, `gameId`, `modIds`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`IExtensionApi`](../interfaces/types.IExtensionApi.md) |
| `gameId` | `string` |
| `modIds` | `string`[] |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/mod_management/util/removeMods.ts:18

___

### removeValue

▸ **removeValue**<`T`\>(`state`, `path`, `value`): `T`

remove a value from an array by value

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `path` | (`string` \| `number`)[] |
| `value` | `any` |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:278

___

### removeValueIf

▸ **removeValueIf**<`T`\>(`state`, `path`, `predicate`): `T`

remove all vales for which the predicate applies

**`export`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `path` | (`string` \| `number`)[] |
| `predicate` | (`element`: `any`) => `boolean` |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:299

___

### renderError

▸ **renderError**(`err`, `options?`): [`IErrorRendered`](../interfaces/util.IErrorRendered.md)

render error message for display to the user

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |
| `options?` | [`IErrorOptions`](../interfaces/types.IErrorOptions.md) |

#### Returns

[`IErrorRendered`](../interfaces/util.IErrorRendered.md)

#### Defined in

../src/util/message.ts:653

___

### renderModName

▸ **renderModName**(`mod`, `options?`): `string`

determins the mod name to show to the user based on the mod attributes.
absolutely never use this function for anything other than showing the output
to the user, the output must not be stored or used as an identifier for the mod,
I reserve the right to change the algorithm at any time.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`IMod`](../interfaces/types.IMod.md) |
| `options?` | `INameOptions` |

#### Returns

`string`

#### Defined in

../src/extensions/mod_management/util/modName.ts:38

___

### renderModReference

▸ **renderModReference**(`ref`, `mod?`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`IModReference`](../interfaces/types.IModReference.md) |
| `mod?` | [`IMod`](../interfaces/types.IMod.md) |
| `options?` | `IRenderOptions` |

#### Returns

`string`

#### Defined in

../src/extensions/mod_management/util/modName.ts:49

___

### request

▸ **request**(`method`, `reqURL`, `headers`, `cb`): `ClientRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`Method`](util.md#method) |
| `reqURL` | `string` |
| `headers` | `any` |
| `cb` | (`res`: `IncomingMessage`) => `void` |

#### Returns

`ClientRequest`

#### Defined in

../src/util/network.ts:85

___

### resolveCategoryName

▸ **resolveCategoryName**(`category`, `state`): `string`

retrieve the Category from the Store

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | `string` |
| `state` | [`IState`](../interfaces/types.IState.md) |

#### Returns

`string`

#### Defined in

../src/extensions/category_management/util/retrieveCategoryPath.ts:58

___

### resolveCategoryPath

▸ **resolveCategoryPath**(`category`, `state`): `string`

retrieve the Category from the Store returning the full category path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | `string` |
| `state` | [`IState`](../interfaces/types.IState.md) |

#### Returns

`string`

#### Defined in

../src/extensions/category_management/util/retrieveCategoryPath.ts:36

___

### runElevated

▸ **runElevated**(`ipcPath`, `func`, `args?`): [`Promise`](../classes/Promise.md)<`any`\>

run a function as an elevated process (windows only!).
This is quite a hack because obviously windows doesn't allow us to elevate a
running process so instead we have to store the function code into a file and start a
new node process elevated to execute that script.

IMPORTANT As a consequence the function can not bind any parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ipcPath` | `string` | a unique identifier for a local ipc channel that can be used to                 communicate with the elevated process (as stdin/stdout can not be)                 redirected |
| `func` | (`ipc`: `any`, `req`: `NodeRequire`) => `void` \| [`Promise`](../classes/Promise.md)<`void`\> \| `Promise`<`void`\> | The closure to run in the elevated process. Try to avoid                        'fancy' code. This function receives two parameters, one is an ipc stream,                        connected to the path specified in the first parameter.                        The second function is a require function which you need to use instead of                        the global require. Regular require calls will not work in production                        builds |
| `args?` | `any` | arguments to be passed into the elevated process |

#### Returns

[`Promise`](../classes/Promise.md)<`any`\>

a promise that will be resolved as soon as the process is started
                            (which happens after the user confirmed elevation). It resolves to
                            the path of the tmpFile we had to create. If the caller can figure
                            out when the process is done (using ipc) it should delete it

#### Defined in

E:/WorkC/vortex/node_modules/vortex-run/lib/elevated.d.ts:27

___

### runThreaded

▸ **runThreaded**(`func`, `moduleBase`, ...`args`): [`Promise`](../classes/Promise.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (...`args`: `any`[]) => `any` |
| `moduleBase` | `string` |
| `...args` | `any`[] |

#### Returns

[`Promise`](../classes/Promise.md)<`any`\>

#### Defined in

E:/WorkC/vortex/node_modules/vortex-run/lib/thread.d.ts:2

___

### sanitizeCSSId

▸ **sanitizeCSSId**(`input`): `string`

take any input string and sanitize it into a valid css id

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

../src/util/util.ts:361

___

### sanitizeFilename

▸ **sanitizeFilename**(`input`): `string`

encodes a string so it can safely be used as a filename

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

../src/util/util.ts:501

___

### semverCoerce

▸ **semverCoerce**(`input`): `semver.SemVer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`semver.SemVer`

#### Defined in

../src/util/util.ts:711

___

### setDefaultArray

▸ **setDefaultArray**<`T`\>(`state`, `path`, `fallback`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `path` | (`string` \| `number`)[] |
| `fallback` | `any`[] |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:214

___

### setOrNop

▸ **setOrNop**<`T`\>(`state`, `path`, `value`): `T`

sets a value or do nothing if the path (except for the last element) doesn't exist.
That is: setOrNop does not create the object hierarchy referenced in the path but
it does add a new attribute to the object if necessary.

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `path` | `string`[] |
| `value` | `any` |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:132

___

### setSafe

▸ **setSafe**<`T`\>(`state`, `path`, `value`): `T`

set an item in state, creating all intermediate nodes as necessary

**`export`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `path` | (`string` \| `number`)[] |
| `value` | `any` |

#### Returns

`T`

#### Defined in

../src/util/storeHelper.ts:99

___

### setdefault

▸ **setdefault**<`T`, `K`\>(`obj`, `key`, `def`): `T`[`K`]

like the python setdefault function:
returns the attribute "key" from "obj". If that attribute doesn't exist
on obj, it will be set to the default value and that is returned.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `key` | `K` |
| `def` | `T`[`K`] |

#### Returns

`T`[`K`]

#### Defined in

../src/util/util.ts:51

___

### showActivity

▸ **showActivity**<`S`\>(`dispatch`, `message`, `id?`): `void`

show activity notification

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `ThunkDispatch`<[`IState`](../interfaces/types.IState.md), ``null``, `Action`<`any`\>\> |
| `message` | `string` |
| `id?` | `string` |

#### Returns

`void`

#### Defined in

../src/util/message.ts:78

___

### showError

▸ **showError**(`dispatch`, `title`, `details?`, `options?`): `void`

show an error notification with an optional "more" button that displays further details
in a modal dialog.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `ThunkDispatch`<[`IState`](../interfaces/types.IState.md), ``null``, `Action`<`any`\>\> |
| `title` | `string` |
| `details?` | `any` |
| `options?` | [`IErrorOptions`](../interfaces/types.IErrorOptions.md) |

#### Returns

`void`

#### Defined in

../src/util/message.ts:245

___

### showInfo

▸ **showInfo**<`S`\>(`dispatch`, `message`, `id?`): `void`

show an info notification. Please don't use this for important stuff as the message
has a timer based on message length

**`export`**

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `ThunkDispatch`<[`IState`](../interfaces/types.IState.md), ``null``, `Action`<`any`\>\> |
| `message` | `string` |
| `id?` | `string` |

#### Returns

`void`

#### Defined in

../src/util/message.ts:98

___

### showSuccess

▸ **showSuccess**<`S`\>(`dispatch`, `message`, `id?`): `void`

show a notification that some operation succeeded. This message has a timer based on
the message length

**`export`**

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `ThunkDispatch`<[`IState`](../interfaces/types.IState.md), ``null``, `Action`<`any`\>\> |
| `message` | `string` |
| `id?` | `string` |

#### Returns

`void`

#### Defined in

../src/util/message.ts:63

___

### sortMods

▸ **sortMods**(`gameId`, `mods`, `api`): [`Promise`](../classes/Promise.md)<[`IMod`](../interfaces/types.IMod.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |
| `mods` | [`IMod`](../interfaces/types.IMod.md)[] |
| `api` | [`IExtensionApi`](../interfaces/types.IExtensionApi.md) |

#### Returns

[`Promise`](../classes/Promise.md)<[`IMod`](../interfaces/types.IMod.md)[]\>

#### Defined in

../src/extensions/mod_management/util/sort.ts:39

___

### terminate

▸ **terminate**(`error`, `state`, `allowReport?`, `source?`): `void`

display an error message and quit the application
on confirmation.
Use this whenever the application state is unknown and thus
continuing could lead to data loss

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `IError` |
| `state` | `any` |
| `allowReport?` | `boolean` |
| `source?` | `string` |

#### Returns

`void`

#### Defined in

../src/util/errorHandling.ts:281

___

### testModReference

▸ **testModReference**(`mod`, `reference`, `source?`, `fuzzyVersion?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`IMod`](../interfaces/types.IMod.md) \| [`IModLookupInfo`](../interfaces/types.IModLookupInfo.md) |
| `reference` | [`IModReference`](../interfaces/types.IModReference.md) |
| `source?` | `Object` |
| `source.gameId` | `string` |
| `source.modId` | `string` |
| `fuzzyVersion?` | `boolean` |

#### Returns

`boolean`

#### Defined in

../src/extensions/mod_management/util/testModReference.ts:207

___

### toPromise

▸ **toPromise**<`ResT`\>(`func`): [`Promise`](../classes/Promise.md)<`ResT`\>

#### Type parameters

| Name |
| :------ |
| `ResT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`cb`: `any`) => `void` |

#### Returns

[`Promise`](../classes/Promise.md)<`ResT`\>

#### Defined in

../src/util/util.ts:612

___

### unique

▸ **unique**<`T`, `U`\>(`input`, `keyFunc?`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T`[] |
| `keyFunc?` | (`item`: `T`) => `U` |

#### Returns

`T`[]

#### Defined in

../src/util/util.ts:666

___

### upload

▸ **upload**(`targetUrl`, `dataStream`, `dataSize`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetUrl` | `string` |
| `dataStream` | `Readable` |
| `dataSize` | `number` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

../src/util/network.ts:102

___

### userFriendlyTime

▸ **userFriendlyTime**(`date`, `t`, `locale`): `string`

format the specified date in a user-friendly way, depending on the globally set time mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `t` | `TFunction` |
| `locale` | `string` |

#### Returns

`string`

#### Defined in

../src/util/relativeTime.ts:21

___

### walk

▸ **walk**(`target`, `callback`, `options?`): [`Promise`](../classes/Promise.md)<`void`\>

recursively walk the target directory

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `string` | the directory to search |
| `callback` | (`iterPath`: `string`, `stats`: [`Stats`](../classes/fs.Stats.md)) => [`Promise`](../classes/Promise.md)<`any`\> | called on each file and directory encountered. Receives the path and                       corresponding fs stats as parameter. Should return a promise that will be                       awaited before proceeding to the next directory. If this promise is                       rejected, the walk is interrupted |
| `options?` | `IWalkOptions` | - |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

a promise that is resolved once the search is complete

#### Defined in

../src/util/walk.ts:21

___

### withErrorContext

▸ **withErrorContext**(`id`, `value`, `fun`): [`Promise`](../classes/Promise.md)<`any`\>

execute a function with the specified error context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | identifier of the context to set |
| `value` | `string` | context value |
| `fun` | () => [`Promise`](../classes/Promise.md)<`any`\> | the function to set |

#### Returns

[`Promise`](../classes/Promise.md)<`any`\>

#### Defined in

../src/util/errorHandling.ts:506

___

### writeFileAtomic

▸ **writeFileAtomic**(`filePath`, `input`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `input` | `string` \| `Buffer` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fsAtomic.ts:9
