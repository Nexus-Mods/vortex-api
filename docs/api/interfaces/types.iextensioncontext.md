[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IExtensionContext

# Interface: IExtensionContext

[types](../modules/types.md).IExtensionContext

The extension context is an object passed into all extensions during initialisation.

There are three main parts to this object:
a) api. This is an object that contains various functions and objects to interact with the
   main application. During runtime of the application (that is: after the startup phase)
   this will be the only part of the context object you need.
   Most importantly it gives you access to the application store (maintaining all state)
   and a bunch of "stateful" convenience functions (stuff like displaying notifications/
   dialogs in a way consistent with the remaining application).
b) register functions. These must be called immediately inside the init function and they
   "inject" your extension functionality into the main function. That is: you register ui
   controls, callbacks, ... and the main function will then use that as necessary.
   Please note that a call to a register function has no immediate effect, those calls are
   stored and evaluated once all extensions have been initialised.
   An extension can add new register functions by simply assigning to the context object.
   There is one limitation though: Due to the way those functions are called you can't have
   optional parameters in register functions, the caller always have to provide the exact number
   of arguments to get the function to be called correctly. Vortex will pass additional
   parameters to the function that help identify the extension that called the function.
   These functions are then available to all other extensions, the order in which extensions
   are loaded is irrelevant (and can't be controlled).
   If an extension uses a register function from another extension it becomes implicitly
   dependent on it. If the register function isn't available (because that other extension
   isn't installed) the dependent extension isn't loaded either.
   To avoid this, call context.optional.registerXYZ(). Such a call will be evaluated if possible
   but won't cause an error if it isn't.
   Please note that context is a "Proxy" object that will accept calls to any "registerXYZ"
   function no matter if it's available or not. You can't "introspect" this object reliably,
   it will not show the available register functions.
c) once-callback. This is a callback that will be run after all extensions have been initialized
   and all register functions have been evaluated. This is still *before* a gamemode has been
   activated so you can't access game-specific data immediately inside once.
   It will be called only once at application startup whereas init is called once per process
   (that is: twice in total). It should be used for all your extension setup except for the
   register calls (i.e. installing event handlers, doing startup calculations).
   This is because at the time once is called, the context.api
   object is fully initialised and once is only caused if your extension should really load
   (as in: it's compatible with the current api).

## Table of contents

### Properties

- [api](types.IExtensionContext.md#api)
- [optional](types.IExtensionContext.md#optional)
- [registerAction](types.IExtensionContext.md#registeraction)
- [registerBanner](types.IExtensionContext.md#registerbanner)
- [registerControlWrapper](types.IExtensionContext.md#registercontrolwrapper)
- [registerDashlet](types.IExtensionContext.md#registerdashlet)
- [registerDialog](types.IExtensionContext.md#registerdialog)
- [registerFooter](types.IExtensionContext.md#registerfooter)
- [registerMainPage](types.IExtensionContext.md#registermainpage)
- [registerOverlay](types.IExtensionContext.md#registeroverlay)
- [registerSettings](types.IExtensionContext.md#registersettings)
- [registerToDo](types.IExtensionContext.md#registertodo)

### Methods

- [once](types.IExtensionContext.md#once)
- [onceMain](types.IExtensionContext.md#oncemain)
- [registerAPI](types.IExtensionContext.md#registerapi)
- [registerActionCheck](types.IExtensionContext.md#registeractioncheck)
- [registerArchiveType](types.IExtensionContext.md#registerarchivetype)
- [registerAttributeExtractor](types.IExtensionContext.md#registerattributeextractor)
- [registerDeploymentMethod](types.IExtensionContext.md#registerdeploymentmethod)
- [registerGame](types.IExtensionContext.md#registergame)
- [registerGameInfoProvider](types.IExtensionContext.md#registergameinfoprovider)
- [registerGameSpecificCollectionsData](types.IExtensionContext.md#registergamespecificcollectionsdata)
- [registerGameStore](types.IExtensionContext.md#registergamestore)
- [registerGameStub](types.IExtensionContext.md#registergamestub)
- [registerHistoryStack](types.IExtensionContext.md#registerhistorystack)
- [registerInstaller](types.IExtensionContext.md#registerinstaller)
- [registerInterpreter](types.IExtensionContext.md#registerinterpreter)
- [registerLoadOrder](types.IExtensionContext.md#registerloadorder)
- [registerLoadOrderPage](types.IExtensionContext.md#registerloadorderpage)
- [registerMerge](types.IExtensionContext.md#registermerge)
- [registerMigration](types.IExtensionContext.md#registermigration)
- [registerModSource](types.IExtensionContext.md#registermodsource)
- [registerModType](types.IExtensionContext.md#registermodtype)
- [registerPersistor](types.IExtensionContext.md#registerpersistor)
- [registerPreview](types.IExtensionContext.md#registerpreview)
- [registerProfileFeature](types.IExtensionContext.md#registerprofilefeature)
- [registerProfileFile](types.IExtensionContext.md#registerprofilefile)
- [registerReducer](types.IExtensionContext.md#registerreducer)
- [registerSettingsHive](types.IExtensionContext.md#registersettingshive)
- [registerStartHook](types.IExtensionContext.md#registerstarthook)
- [registerTableAttribute](types.IExtensionContext.md#registertableattribute)
- [registerTest](types.IExtensionContext.md#registertest)
- [registerToolVariables](types.IExtensionContext.md#registertoolvariables)
- [requireExtension](types.IExtensionContext.md#requireextension)
- [requireVersion](types.IExtensionContext.md#requireversion)

## Properties

### api

• **api**: [`IExtensionApi`](types.IExtensionApi.md)

contains various utility functions. It's valid to store this object inside
the extension for later use.

**`memberof`** IExtensionContext

#### Defined in

../src/types/IExtensionContext.ts:1372

___

### optional

• **optional**: `any`

proxy to make optional register calls (if such calls are invalid in the api the extension
will not be unloaded)

#### Defined in

../src/types/IExtensionContext.ts:1378

___

### registerAction

• **registerAction**: [`RegisterAction`](../modules/types.md#registeraction)

register an action (can be a button or a menu item)

**`memberof`** IExtensionContext

#### Defined in

../src/types/IExtensionContext.ts:888

___

### registerBanner

• **registerBanner**: [`RegisterBanner`](../modules/types.md#registerbanner)

registers a banner, which is a control that will show in a fixed location with fixed
size (determined by the group). If there are multiple banners in the same spot,
they will cycle.

#### Defined in

../src/types/IExtensionContext.ts:944

___

### registerControlWrapper

• **registerControlWrapper**: [`RegisterControlWrapper`](../modules/types.md#registercontrolwrapper)

register a wrapper for an existing control. Only controls designed for extension can
be used.

#### Defined in

../src/types/IExtensionContext.ts:894

___

### registerDashlet

• **registerDashlet**: [`RegisterDashlet`](../modules/types.md#registerdashlet)

register a dashlet to be displayed on the welcome screen

#### Defined in

../src/types/IExtensionContext.ts:907

___

### registerDialog

• **registerDialog**: [`RegisterDialog`](../modules/types.md#registerdialog)

register a dialog (or any control that is rendered independent of the main content area
really)
This dialog has to control its own visibility

#### Defined in

../src/types/IExtensionContext.ts:914

___

### registerFooter

• **registerFooter**: [`RegisterFooter`](../modules/types.md#registerfooter)

registers a element to be displayed in the footer

**`memberof`** IExtensionContext

#### Defined in

../src/types/IExtensionContext.ts:928

___

### registerMainPage

• **registerMainPage**: [`RegisterMainPage`](../modules/types.md#registermainpage)

registers a page for the main content area

**`memberof`** IExtensionContext

#### Defined in

../src/types/IExtensionContext.ts:902

___

### registerOverlay

• **registerOverlay**: [`RegisterOverlay`](../modules/types.md#registeroverlay)

registers a component to be rendered very high in the DOM, overlaying the main window.
Similar to registerDialogs, except that Vortex won't control whether the overlay gets rendered.

#### Defined in

../src/types/IExtensionContext.ts:920

___

### registerSettings

• **registerSettings**: [`RegisterSettings`](../modules/types.md#registersettings)

register a settings page

**`memberof`** IExtensionContext

#### Defined in

../src/types/IExtensionContext.ts:854

___

### registerToDo

• **registerToDo**: [`RegisterToDo`](../modules/types.md#registertodo)

register an todo message that will be shown to new users until they
dismiss it. You can provide a condition under which it will appear.
Please don't overuse this as to not intimidate the user. Also keep in mind that the
user can dismiss any todo message without taking action and it will never appear
again.

#### Defined in

../src/types/IExtensionContext.ts:937

## Methods

### once

▸ **once**(`callback`): `void`

called once after the store has been set up and after all extensions have been initialized
This means that if your extension registers its own extension function
(@see registerExtensionFunction) then those registrations happen before once is called.

You shouldn't make assumptions on the order in which extensions are loaded and on them to be
loaded synchronously, so if you have initialization code that requires another extension to
be initialized first, you should check if that happened already in your "once" call and react
to some sort of event that would indicate that other initialization to be finished (usually
a state change)

**`memberof`** IExtensionContext

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` \| [`Promise`](../classes/Promise.md)<`void`\> |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1354

___

### onceMain

▸ **onceMain**(`callback`): `void`

similar to once but this callback will be run (only) on the electron "main" process.
Use this only if you absolutely must (if you don't know what electron main process means, it's
almost certain you don't want this).
While almost all program logic of Vortex runs in the renderer process, some libraries will not
work correctly on that process so you have to run on the main process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1363

___

### registerAPI

▸ **registerAPI**(`name`, `func`, `options`): `void`

add a function to the IExtensionApi object that is made available to all other extensions
in the api.ext object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `func` | (...`args`: `any`[]) => `any` |
| `options` | [`IApiFuncOptions`](types.IApiFuncOptions.md) |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1325

___

### registerActionCheck

▸ **registerActionCheck**(`actionType`, `check`): `void`

register an action sanity check
a sanity check like this is called before any redux-action of the specified type and gets
an opportunity to reject it with an error message.
This is more powerful than checking inside the reducer as you can access the entire state
for the check and it's more robust than checking before dispatching the action, because actions
may be dispatched from many places.
Please don't overdo this for high-frequency actions as that may affect performance. Also
be aware of side effects from stopping an action as all other code is still run.
I.e. if you'd reject the addition of a downloaded file, the file itself is still there.
In extreme cases you could instead throw an exception from the check (which would bubble up
through the dispatch call) which will likely crash Vortex.
That might be preferrable to corrupting state
Further: Most actions are processed twice, once in the UI process where they got triggered and
  in the main process where they get persisted to disk. If you stop an action in the UI
  process it will not get forwarded to the main process, so this check only runs once. If you
  allow it through though, this check is done a second time in the main process and you *need*
  to generate the same result, you can't allow an action in the UI process and then reject it
  in the main process!
  Due to checks being run twice, if you write a log message that also will happen twice. You
  can check "process.type === 'browser') to log only in the main (aka browser) process but
  again: The result of the check *has to has to has to* be the same between all processes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actionType` | `string` | type of the action (like STORE_WINDOW_SIZE) |
| `check` | `SanityCheck` | the check to run for the specified action |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1157

___

### registerArchiveType

▸ **registerArchiveType**(`extension`, `handler`): `void`

register a handler for archive types so the content of such archives is exposed to
the application (especially other extensions)

**`memberof`** IExtensionContext

#### Parameters

| Name | Type |
| :------ | :------ |
| `extension` | `string` |
| `handler` | [`ArchiveHandlerCreator`](../modules/types.md#archivehandlercreator) |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1057

___

### registerAttributeExtractor

▸ **registerAttributeExtractor**(`priority`, `extractor`): `void`

register an extractor that can access all information known about a downloaded archive and
tranfer them into the modInfo data structure so it can be accessed when rendering/managing
the mod

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priority` | `number` | determins the order in which the attributes are combined.                          if two extractors produce the same attribute, the one with the higher                          priority (smaller number) wins. The default attributes retrieved from                          the meta database have priority 100. |
| `extractor` | [`AttributeExtractor`](../modules/types.md#attributeextractor) | the function producing mod attributes |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1108

___

### registerDeploymentMethod

▸ **registerDeploymentMethod**(`method`): `void`

register a mod deployment method

**`memberof`** IExtensionContext

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`IDeploymentMethod`](types.IDeploymentMethod.md) |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:861

___

### registerGame

▸ **registerGame**(`game`): `void`

registers support for a game

#### Parameters

| Name | Type |
| :------ | :------ |
| `game` | [`IGame`](types.IGame.md) |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1064

___

### registerGameInfoProvider

▸ **registerGameInfoProvider**(`id`, `priority`, `expireMS`, `keys`, `query`): `void`

registers a provider for general information about a game

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | unique id identifying the provider |
| `priority` | `number` | if two providers provide the same info (same key) the one with the                          higher priority (smaller number) ends up providing that piece of info |
| `expireMS` | `number` | the time (in milliseconds) before the info "expires". After expiry it                          will be re-requested. You usually want this to be several days, not                          seconds or milliseconds |
| `keys` | `string`[] | the keys this provider will provide. If the query function doesn't                        return a value for one of these keys, a null is stored. If the query                        returns keys that aren't listed here they will still be stored, but                        the query will only be run if a listed key is missing or the expiry time                        runs out |
| `query` | [`GameInfoQuery`](../modules/types.md#gameinfoquery) | the query function |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1094

___

### registerGameSpecificCollectionsData

▸ **registerGameSpecificCollectionsData**(`data`): `void`

Allows extensions to define additional data to add to a collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ICollectionsGameSupportEntry` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1319

___

### registerGameStore

▸ **registerGameStore**(`gameStore`): `void`

registers support for a game store.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameStore` | [`IGameStore`](types.IGameStore.md) |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1077

___

### registerGameStub

▸ **registerGameStub**(`game`, `ext`): `void`

register a game stub. This is to ease the transition for games that used to be bundled with
Vortex and might already be in use but are now maintained by a third party.

#### Parameters

| Name | Type |
| :------ | :------ |
| `game` | [`IGame`](types.IGame.md) |
| `ext` | `IExtensionDownloadInfo` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1070

___

### registerHistoryStack

▸ **registerHistoryStack**(`id`, `options`): `void`

Sets up a stack for a history of events that can be presented to the user

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `options` | [`IHistoryStack`](types.IHistoryStack.md) |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1314

___

### registerInstaller

▸ **registerInstaller**(`id`, `priority`, `testSupported`, `install`): `void`

register an installer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id for the installer. currently only used for logging |
| `priority` | `number` | the priority of the installer. The supported installer with the                          highest priority (smallest number) gets to handle the mod.                          Note: scripted fomods are handled at prio 20 and there is a fallback                          installer that will handle practically any archive at prio 100 so                          you want to place your installer in the range 21-99.                          If your installer has priority > 100 it will probably never be                          considered, if it has priority < 20 it will disable fomod installers                          which only makes sense if you implement a scripted installer system                          as well that is superior to fomod. |
| `testSupported` | [`TestSupported`](../modules/types.md#testsupported) | function called to determine if the handler can deal                                      with a mod |
| `install` | [`InstallFunc`](../modules/types.md#installfunc) | function called to actually install a mod |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:879

___

### registerInterpreter

▸ **registerInterpreter**(`extension`, `apply`): `void`

register an interpreter to be used to run files of the specified type when starting with
IExtensionApi.runExecutable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extension` | `string` | File extension to handle |
| `apply` | (`call`: [`IRunParameters`](types.IRunParameters.md)) => [`IRunParameters`](types.IRunParameters.md) | A filter function that will receive the run parameters as provided by                       the user (with the script as the executable) and should return adjusted                       parameters that will actually invoke the right interpreter.                       If the interpreter is not installed/found, please throw a                       "MissingInterpreter" exception so Vortex can show a nicer error message |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1195

___

### registerLoadOrder

▸ **registerLoadOrder**(`gameInfo`): `void`

Add file based load ordering functionality to the specified game.
 Please use this instead of registerLoadOrderPage

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameInfo` | [`ILoadOrderGameInfo`](types.ILoadOrderGameInfo.md) |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1309

___

### registerLoadOrderPage

▸ **registerLoadOrderPage**(`gameEntry`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameEntry` | `IGameLoadOrderEntry` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1303

___

### registerMerge

▸ **registerMerge**(`test`, `merge`, `modType`): `void`

register a file merge that needs to happen during deployment.
modType is the mod type this applies to, so only mods from this mod type are merged
and the output merge is of that type as well.

This api is - complex - as it tries to cover multiple related use cases. Please
make sure you understand how it works becauses trial&error might drive you mad.

The way this works is that as part of deployment the "in" files get copied to a working
directory. It's ok for these files to be non-existent. It's ok for these files to be from one
of the deployed mods (see below) or a file generated by or shipped with the game itself.
Then the "merge" function is called on each matching file from each mod so you get an
opportunity to incorporate the modded content into the file in the working directory
Finally, the merged file from the working directory is deployed, just like every other file,
based on which mod type you specified.
If the "in" file was from mone of the mods, the merge function will be called with that
file again, so it's your own responsibility to not duplicate the content from that file.
If the "in" file did not exist, you get an empty file as the basis to merge into, that is not
an error.
The "out" path specified by the baseFiles is the relative path of the "temporary" file
in the working directory. Together with the mod type, this will control what the final output
path is.

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`MergeTest`](../modules/types.md#mergetest) |
| `merge` | [`MergeFunc`](../modules/types.md#mergefunc) |
| `modType` | `string` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1182

___

### registerMigration

▸ **registerMigration**(`migrate`): `void`

register a migration step. This migration is always called when the loaded extension has
a different version from the one that was used last.
This way when the new version requires any form of migration (upgrading state for example)
it can be done from there. The version that was previously run is being passed to the migration
function so the extension can determine if the upgrade is actually necessary and if so, which
(if there are multiple).
IMPORTANT: Use the old version only to save time, your migration must not cause break anything
  if this version is inaccurate. E.g. if state was manipulated/damaged, Vortex may send 0.0.0
  for the old version even when the current version was run before.
If the extension was never loaded before, the version "0.0.0" is passed in.
Please note: Vortex will continue running, with the extension loaded, after migrate is called,
  it is not currently possible to delay loading an extension until the migration is complete.
  This means one of these must be true:
    - the extension is functional without the migration, at least so much so that it doesn't
      cause "damage"
    - the extension disables/blocks itself until the migration is done
    - the migration is synchronous so that the migrate function doesn't return until it's done.
Important: Migration happens in the *main process*, not in the renderer process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `migrate` | (`oldVersion`: `string`) => [`Promise`](../classes/Promise.md)<`void`\> | called if the running extension version differs from the old one.                           As soon as the promise returned from this is resolved, the stored                           version number is updated. |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1235

___

### registerModSource

▸ **registerModSource**(`id`, `name`, `onBrowse?`, `options?`): `void`

register a source (usually a website) that the mod was retrieved from and that will
be used as the reference for features like checking for updates and such.
Please note that registering this source has no other effect than adding an option
to the selection of mod sources, the corresponding extension has to implement
actual features
The source can also be used to browse for further mods

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |
| `onBrowse?` | () => `void` |
| `options?` | [`IModSourceOptions`](types.IModSourceOptions.md) |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:954

___

### registerModType

▸ **registerModType**(`id`, `priority`, `isSupported`, `getPath`, `test`, `options?`): `void`

register a mod type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | internal identifier for this mod type. can't be the empty string ''! |
| `priority` | `number` | if there is difficulty differentiating between two mod types, the                          higher priority (smaller number) one wins.                          Otherwise please use 100 so there is room for other extensions                          with lower and higher priority |
| `isSupported` | (`gameId`: `string`) => `boolean` | return true if the mod type is supported for this                                          game |
| `getPath` | (`game`: [`IGame`](types.IGame.md)) => `string` | given the specified game, return the absolute path to                                          where games of this type should be installed. |
| `test` | (`installInstructions`: [`IInstruction`](types.IInstruction.md)[]) => [`Promise`](../classes/Promise.md)<`boolean`\> | given the list of install instructions,                                                  determine if the installed mod is of this type |
| `options?` | [`IModTypeOptions`](types.IModTypeOptions.md) | options controlling the mod type |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1125

___

### registerPersistor

▸ **registerPersistor**(`hive`, `persistor`, `debounce?`): `void`

register a new persistor that will hook a data file into the application store,
meaning any part of the application can access that data like any other data in the application
state and the UI will automatically refresh if it's tied to that data.
This way you can unify the access to foreign data files

**`memberof`** IExtensionContext

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hive` | `string` | the top-level key inside the state that this persistor will add                      it's data to. We can't add persistors inside an existing node (                      technical reasons) but you can implement an aggregator-persistor                      that syncs sub-nodes with different files |
| `persistor` | [`IPersistor`](types.IPersistor.md) | the persistor. Adhere to the interface and it should be fine |
| `debounce?` | `number` | this value (in milliseconds) determins how frequent the file will                          be updated on disk. Higher values reduce load and disk activity                          but more data could be lost in case of an application crash.                          Defaults to 200 ms |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1030

___

### registerPreview

▸ `Optional` **registerPreview**(`priority`, `handler`): `void`

register a handler that can be used to preview or diff files.
A handler can return a promise rejected with a "ProcessCanceled" exception to indicate
it doesn't support the file type, in which case the next handler is tried.
If no handler supports a file type, an error is displayed.

Now at the lowest level a preview handler just has to be able to show a single file
of the file type, in which case it should show the first file from the list passed in
as a parameter, or offer the user a choice. More advanced handlers may show a diff between
the files.
If the "allowPick" option is specified the caller would like the user to be
able to pick one of the files and that choice should then be returned but
this is an optional feature the handler doesn't need to support.

Handlers that support both diffing files and picking choices should have high
priority (0-100), handlers that support diffing but not picking should be
put into the range (100-200), handlers that only support showing a single
file should be in the range (300-infinite).
(Obviously the use case where the handler supports picking files but can only
show a single file doesn't exist because duh.)
This way the most feature rich handler supporting a file type will get picked.

Note: If the viewer supports picking the Promise shall resolve after the
  choice is made and include the selected entry, if it doesn't it can resolve
  as soon as the handler knows whether it supports the file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `priority` | `number` |
| `handler` | (`files`: [`IPreviewFile`](types.IPreviewFile.md)[], `allowPick`: `boolean`) => [`Promise`](../classes/Promise.md)<[`IPreviewFile`](types.IPreviewFile.md)\> |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1281

___

### registerProfileFeature

▸ `Optional` **registerProfileFeature**(`featureId`, `type`, `icon`, `label`, `description`, `supported`): `void`

register a profile feature that can be toggled/configured on the profiles screen.
The configured value can be queried at
state.persistent.profiles.<profile id>.features.<feature id>

#### Parameters

| Name | Type |
| :------ | :------ |
| `featureId` | `string` |
| `type` | `string` |
| `icon` | `string` |
| `label` | `string` |
| `description` | `string` |
| `supported` | () => `boolean` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1252

___

### registerProfileFile

▸ `Optional` **registerProfileFile**(`gameId`, `filePath`): `void`

register a file to be stored with the profile. It will always be synchronised with the current
profile, so when users switch to a different profile, this file will be copied to the
profile they're switching away from, then the corresponding file from the profile they're
switching to is copied to filePath.
Right now this only supports static file paths, no patterns (glob or regular expressions) and
no way to dynamically find the file to synchronize

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |
| `filePath` | `string` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1245

___

### registerReducer

▸ **registerReducer**(`path`, `spec`): `void`

register a reducer to introduce new set-operations on the application
state.
Note: For obvious reasons this is executed before the store is set up so
many api operations are not possible during this call

The first part of the path decides how and if state persisted:
  * window, settings, persistent are always persisted and automatically restored
  * session and all other will not be persisted at all. Although session is not
    treated different than any other path, please use this path  for all
    ephemeral state

Another word on the path: You can introduce additional reducers for any "leaf" of
  the settings tree and you can introduce new "subnodes" in the tree at any depth.
  For technical reasons it is however not possible to introduce subnodes to a leaf
  or vice-versa.
  I.e. settings.interface contains all settings regarding the ui. Your extension
  can register a reducer with path ['settings', 'interface'] and ['settings', 'whatever']
  but not ['settings'] and not ['settings', 'interface', 'somethingelse']

And one more thing about the spec: All things you store inside the store need to be
  serializable. This means: strings, numbers, booleans, arrays, objects are fine but
  functions are not. If you absolutely need to store a callback or something then create
  a "registry" or factory and store just an id that allows you to retrieve or generate
  the function on demand.

**`memberof`** IExtensionContext

**`note`** If you have registerReducer calls you should call them first thing in the init function.
      Usually if your init call fails your extension shouldn't load at all but in case that
      doesn't work, registering any functionality that depends on state that never got loaded
      would load to further bug reports that are a lot harder to investigate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string`[] | The path within the settings store |
| `spec` | [`IReducerSpec`](types.IReducerSpec.md)<{ [key: string]: `any`;  }\> | a IReducerSpec object that contains reducer functions and defaults        for the newly introduced settings |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:995

___

### registerSettingsHive

▸ **registerSettingsHive**(`type`, `hive`): `void`

register a hive in the store to be persisted. A hive is a top-level branch in the state,
like "settings", "state", ...
You must not register a hive that is already being persisted or you get data inconsistency.
Do not use this on a hive that is registered with "registerPersistor". With this function,
Vortex takes care of storing/restoring the data, with registerPersistor you can customize the
file format.

**`memberof`** IExtensionContext

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`PersistingType`](../modules/types.md#persistingtype) | controls where the state is stored and when it is loaded |
| `hive` | `string` | the top-level key inside the state. |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1010

___

### registerStartHook

▸ **registerStartHook**(`priority`, `id`, `hook`): `void`

register a hook to be called before Vortex starts any tool and is allowed to replace parameter
or cancel the start by rejecting with ProcessCanceled or UserCanceled.
This could be used as a more powerful replacement for registerInterpreter.
Interpreters registered with registerInterpreter will be processed before any hooks are applied

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priority` | `number` | Hooks are applied in ascending priority order. Please choose                          priorities with a bit of space between hooks you know about so that                          other extension developers can insert their own hooks between.                          Non-extension hooks will be applied in steps of 100 |
| `id` | `string` | identifier for the hook. This will only be used for logging |
| `hook` | (`call`: [`IRunParameters`](types.IRunParameters.md)) => [`Promise`](../classes/Promise.md)<[`IRunParameters`](types.IRunParameters.md)\> | the hook to be called |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1209

___

### registerTableAttribute

▸ **registerTableAttribute**(`tableId`, `attribute`): `void`

add an attribute to a table. An attribute can appear as a column inside the table or as a
detail field in the side panel.
The tableId identifies, obviously, the table to which the attribute should be added. Please
find the right id in the documentation of the corresponding extension.
Please prefer specifying the attribute as a function returning the ITableAttribute instead of
the attribute directly

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableId` | `string` |
| `attribute` | [`ITableAttribute`](types.ITableAttribute.md)<`any`\> |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1040

___

### registerTest

▸ **registerTest**(`id`, `event`, `check`): `void`

add a check that will automatically be run on the specified event.
Such checks can be used by extensions to check the integrity of their own data, of the
application setup or that of the game and present them to the user in a common way.

**`memberof`** IExtensionContext

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `event` | `string` |
| `check` | [`CheckFunction`](../modules/types.md#checkfunction) |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1049

___

### registerToolVariables

▸ **registerToolVariables**(`callback`): `void`

register a callback that will introduce additional variables that can be used as part of
tool command lines. The callback you provide here gets called every time a tool gets started
from vortex, the returned object gets merged with all other parameter object and then used
when resolving the final command line.
Please use keys that are all upper case and consist only of latin characters and underscores.
While this is not necessary from a technical standpoint it's more consistent and predictable
for users.
Also make sure the keys you return are sufficiently unique to avoid collisions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`ToolParameterCB`](../modules/types.md#toolparametercb) | the function that gets called to generate variables. the argument                 passed to this contains details about the tool being started, usually                 you will probably not need this |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1299

___

### requireExtension

▸ **requireExtension**(`extId`, `version?`): `void`

register a dependency on a different extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extId` | `string` | id of the extension that this one depends on |
| `version?` | `string` | a semver version range that the mod is compatible with |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1339

___

### requireVersion

▸ **requireVersion**(`versionRange`): `void`

specify that a certain range of versions of vortex is required
(see https://www.npmjs.com/package/semver for syntax documentation).
If you call this multiple times, all ranges have to match so that makes little sense

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionRange` | `string` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:1332
