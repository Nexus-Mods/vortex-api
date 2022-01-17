[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IExtensionApi

# Interface: IExtensionApi

[types](../modules/types.md).IExtensionApi

interface for convenience functions made available to extensions

**`export`**

**`interface`** IExtensionApi

## Table of contents

### Properties

- [NAMESPACE](types.IExtensionApi.md#namespace)
- [events](types.IExtensionApi.md#events)
- [ext](types.IExtensionApi.md#ext)
- [extension](types.IExtensionApi.md#extension)
- [laterT](types.IExtensionApi.md#latert)
- [registerProtocol](types.IExtensionApi.md#registerprotocol)
- [registerRepositoryLookup](types.IExtensionApi.md#registerrepositorylookup)
- [store](types.IExtensionApi.md#store)
- [translate](types.IExtensionApi.md#translate)

### Methods

- [addMetaServer](types.IExtensionApi.md#addmetaserver)
- [awaitUI](types.IExtensionApi.md#awaitui)
- [clearStylesheet](types.IExtensionApi.md#clearstylesheet)
- [closeDialog](types.IExtensionApi.md#closedialog)
- [deregisterProtocol](types.IExtensionApi.md#deregisterprotocol)
- [dismissNotification](types.IExtensionApi.md#dismissnotification)
- [emitAndAwait](types.IExtensionApi.md#emitandawait)
- [getI18n](types.IExtensionApi.md#geti18n)
- [getLoadedExtensions](types.IExtensionApi.md#getloadedextensions)
- [getPath](types.IExtensionApi.md#getpath)
- [getState](types.IExtensionApi.md#getstate)
- [highlightControl](types.IExtensionApi.md#highlightcontrol)
- [isOutdated](types.IExtensionApi.md#isoutdated)
- [locale](types.IExtensionApi.md#locale)
- [lookupModMeta](types.IExtensionApi.md#lookupmodmeta)
- [lookupModReference](types.IExtensionApi.md#lookupmodreference)
- [onAsync](types.IExtensionApi.md#onasync)
- [onStateChange](types.IExtensionApi.md#onstatechange)
- [openArchive](types.IExtensionApi.md#openarchive)
- [runExecutable](types.IExtensionApi.md#runexecutable)
- [saveModMeta](types.IExtensionApi.md#savemodmeta)
- [selectDir](types.IExtensionApi.md#selectdir)
- [selectExecutable](types.IExtensionApi.md#selectexecutable)
- [selectFile](types.IExtensionApi.md#selectfile)
- [sendNotification](types.IExtensionApi.md#sendnotification)
- [setStylesheet](types.IExtensionApi.md#setstylesheet)
- [showDialog](types.IExtensionApi.md#showdialog)
- [showErrorNotification](types.IExtensionApi.md#showerrornotification)
- [suppressNotification](types.IExtensionApi.md#suppressnotification)
- [withPrePost](types.IExtensionApi.md#withprepost)

## Properties

### NAMESPACE

• **NAMESPACE**: `string`

#### Defined in

../src/types/IExtensionContext.ts:722

___

### events

• **events**: `EventEmitter`

event emitter

**`memberof`** IExtensionApi

#### Defined in

../src/types/IExtensionContext.ts:491

___

### ext

• **ext**: `Object`

functions made available from extension to extension. Callers have to make
sure they handle gracefully the case where a function doesn't exist

#### Index signature

▪ [key: `string`]: (...`args`: `any`[]) => `any`

#### Defined in

../src/types/IExtensionContext.ts:719

___

### extension

• `Optional` **extension**: [`IRegisteredExtension`](types.IRegisteredExtension.md)

name of the extension to use this api with

#### Defined in

../src/types/IExtensionContext.ts:401

___

### laterT

• **laterT**: `TFunction`

prepare a string to be translated further down the line.

#### Defined in

../src/types/IExtensionContext.ts:501

___

### registerProtocol

• **registerProtocol**: [`IRegisterProtocol`](types.IRegisterProtocol.md)

registers an uri protocol to be handled by this application. If the "def"ault parameter
is set to true, this application will also be inserted as the system wide default handler
for the protocol. Use with caution, as this will overwrite the previous value, which
can't be undone automatically

**`memberof`** IExtensionContext

#### Defined in

../src/types/IExtensionContext.ts:552

___

### registerRepositoryLookup

• **registerRepositoryLookup**: [`IRegisterRepositoryLookup`](types.IRegisterRepositoryLookup.md)

registers a lookup mechanism that can be used to look up information about a mod based on ids.
This will either work as a fallback or as a replacement to the md5 based lookup for
applicable mods.
The "repositoryId" should be the same as the "source" used.
It's possible to return multiple results if the input data doesn't definitively identify a
single item but this might be a bit of a mess to figure out later.

#### Defined in

../src/types/IExtensionContext.ts:562

___

### store

• `Optional` **store**: [`ThunkStore`](types.ThunkStore.md)<`any`\>

the redux store containing all application state & data

Please note: this store object will remain valid for the whole
  application runtime so you can store it, bind it to functions
  and so on. The state object (store.getState()) is immutable and
  will be a different object whenever the state is changed.
  Thus you should *not* store/bind the state directly unless you
  actually want a "snapshot" of the state.

**`memberof`** IExtensionApi

#### Defined in

../src/types/IExtensionContext.ts:483

___

### translate

• **translate**: `TFunction`

translation function

#### Defined in

../src/types/IExtensionContext.ts:496

## Methods

### addMetaServer

▸ **addMetaServer**(`id`, `server?`): `void`

add a meta server
Please note that setting a server with the same id again will replace the existing one
with that id and setting it to undefined removes it

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `server?` | `any` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:583

___

### awaitUI

▸ **awaitUI**(): [`Promise`](../classes/Promise.md)<`void`\>

returns a promise that resolves once the ui has been displayed.
This is useful if you have a callback that may be triggered before the ui is
displayed but may require the UI to be processed.
Specifically events can only be sent once this event has been triggered

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IExtensionContext.ts:703

___

### clearStylesheet

▸ **clearStylesheet**(): `void`

clear the stylesheet cache to ensure it gets rebuilt even if the list of files hasn't changed

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:613

___

### closeDialog

▸ `Optional` **closeDialog**(`id`, `actionKey?`, `input?`): `void`

close a dialog

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `actionKey?` | `string` |
| `input?` | `any` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:433

___

### deregisterProtocol

▸ **deregisterProtocol**(`protocol`): `void`

deregister an uri protocol currently being handled by us

**`memberof`** IExtensionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | `string` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:569

___

### dismissNotification

▸ `Optional` **dismissNotification**(`id`): `void`

hides a notification by its id

**`memberof`** IExtensionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:440

___

### emitAndAwait

▸ **emitAndAwait**(`eventName`, ...`args`): [`Promise`](../classes/Promise.md)<`any`\>

emit an event and allow every receiver to return a Promise. This call will only return
after all these Promises are resolved.
If the event handlers return a value, this returns an array of results

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `...args` | `any`[] |

#### Returns

[`Promise`](../classes/Promise.md)<`any`\>

#### Defined in

../src/types/IExtensionContext.ts:656

___

### getI18n

▸ **getI18n**(): `i18n`

get direct access to the i18next object managing localisation.
This is only needed to influence how localisation works in general,
to just translate a text, use "translate"

#### Returns

`i18n`

#### Defined in

../src/types/IExtensionContext.ts:513

___

### getLoadedExtensions

▸ **getLoadedExtensions**(): [`IRegisteredExtension`](types.IRegisteredExtension.md)[]

get a list of extensions currently loaded into Vortex

#### Returns

[`IRegisteredExtension`](types.IRegisteredExtension.md)[]

#### Defined in

../src/types/IExtensionContext.ts:713

___

### getPath

▸ **getPath**(`name`): `string`

retrieve path for a known directory location.

Note: This uses electrons ids for known folder locations.
Please write your extensions to always use the appropriate
folder location returned from this function, especially
'userData' should be used for all settings/state/temporary data
if you don't want to/can't use the store.
If Vortex introduces a way for users to customise storage locations
then getPath will return the customised path so you don't have to
adjust your extension.

**`memberof`** IExtensionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

../src/types/IExtensionContext.ts:530

___

### getState

▸ **getState**<`T`\>(): `T`

wrapper for api.store.getState() with the benefit that it automatically assigns a type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IState`](types.IState.md) = [`IState`](types.IState.md) |

#### Returns

`T`

#### Defined in

../src/types/IExtensionContext.ts:708

___

### highlightControl

▸ **highlightControl**(`selector`, `durationMS`, `text?`, `altStyle?`): `void`

highlight a control for a short time to direct the users attention to it.
The control (or controls) is identified by a css selector.
A text can be added, but no promise that it actually looks good in practice

Usually the css style used to draw the outline contains a bit of hackery to offset the
padding and border width it adds so that the contents doesn't get moved around.
If altStyle is set we use absolute positioning to get the same effect. This requires
us to make the target item "position: relative" though which is more intrusive and can
break the styling of the contents more severely.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `durationMS` | `number` |
| `text?` | `string` |
| `altStyle?` | `boolean` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:695

___

### isOutdated

▸ **isOutdated**(): `boolean`

returns true if the running version of Vortex is considered outdated. This is mostly used
to determine if feedback should be sent to Nexus Mods.

#### Returns

`boolean`

#### Defined in

../src/types/IExtensionContext.ts:681

___

### locale

▸ **locale**(): `string`

active locale

#### Returns

`string`

#### Defined in

../src/types/IExtensionContext.ts:506

___

### lookupModMeta

▸ **lookupModMeta**(`details`, `ignoreCache?`): [`Promise`](../classes/Promise.md)<[`ILookupResult`](types.ILookupResult.md)[]\>

find meta information about a mod
this will calculate a hash and the file size of the specified file
for the lookup unless those details are already provided.
Please note that it's still possible for the file to get multiple
matches, i.e. if it has been re-uploaded, potentially for a different
game.

**`memberof`** IExtensionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | [`ILookupDetails`](types.ILookupDetails.md) |
| `ignoreCache?` | `boolean` |

#### Returns

[`Promise`](../classes/Promise.md)<[`ILookupResult`](types.ILookupResult.md)[]\>

#### Defined in

../src/types/IExtensionContext.ts:595

___

### lookupModReference

▸ **lookupModReference**(`ref`, `options?`): [`Promise`](../classes/Promise.md)<`IModLookupResult`[]\>

find meta information about a mod

**`memberof`** IExtensionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`IModReference`](types.IModReference.md) |
| `options?` | `ILookupOptions` |

#### Returns

[`Promise`](../classes/Promise.md)<`IModLookupResult`[]\>

#### Defined in

../src/types/IExtensionContext.ts:576

___

### onAsync

▸ **onAsync**(`eventName`, `listener`): `void`

handle an event emitted with emitAndAwait. The listener can return a promise and the emitter
will only return after all promises from handlers are returned.
Note that listeners should report all errors themselves, it is considered a bug if the listener
returns a rejected promise.
If errors do need to be reported they have to be part of the resolved valued

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | (...`args`: `any`[]) => `PromiseLike`<`any`\> |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:665

___

### onStateChange

▸ `Optional` **onStateChange**<`T`\>(`path`, `callback`): `void`

register a callback for changes to the state

**`memberof`** IExtensionApi

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string`[] | path in the state-tree to watch for changes,                   i.e. ['settings', 'interface', 'language'] would call the callback                   for all changes to the interface language |
| `callback` | [`StateChangeCallback`](../modules/types.md#statechangecallback)<`T`\> | - |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:541

___

### openArchive

▸ **openArchive**(`archivePath`, `options?`, `extension?`): [`Promise`](../classes/Promise.md)<[`Archive`](../classes/util.Archive.md)\>

opens an archive

#### Parameters

| Name | Type |
| :------ | :------ |
| `archivePath` | `string` |
| `options?` | [`IArchiveOptions`](types.IArchiveOptions.md) |
| `extension?` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<[`Archive`](../classes/util.Archive.md)\>

#### Defined in

../src/types/IExtensionContext.ts:607

___

### runExecutable

▸ **runExecutable**(`executable`, `args`, `options`): [`Promise`](../classes/Promise.md)<`void`\>

run an executable. This is comparable to node.js child_process.spawn but it allows us to add
extensions, like support interpreters and hooks.
It will also automatically ask the user to authorize elevation if the executable requires it
The returned promise is resolved when the started process has run to completion.
IRunOptions.onSpawned can be used to react to when the process has been started.

#### Parameters

| Name | Type |
| :------ | :------ |
| `executable` | `string` |
| `args` | `string`[] |
| `options` | [`IRunOptions`](types.IRunOptions.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IExtensionContext.ts:649

___

### saveModMeta

▸ **saveModMeta**(`modInfo`): [`Promise`](../classes/Promise.md)<`void`\>

save meta information about a mod

**`memberof`** IExtensionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `modInfo` | [`IModInfo`](types.IModInfo.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IExtensionContext.ts:602

___

### selectDir

▸ **selectDir**(`options`): [`Promise`](../classes/Promise.md)<`string`\>

show a system dialog to open a single directory

**`memberof`** IExtensionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IOpenOptions`](types.IOpenOptions.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`string`\>

#### Defined in

../src/types/IExtensionContext.ts:468

___

### selectExecutable

▸ **selectExecutable**(`options`): [`Promise`](../classes/Promise.md)<`string`\>

show a system dialog to select an executable file

**`memberof`** IExtensionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IOpenOptions`](types.IOpenOptions.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`string`\>

#### Defined in

../src/types/IExtensionContext.ts:461

___

### selectFile

▸ **selectFile**(`options`): [`Promise`](../classes/Promise.md)<`string`\>

show a system dialog to open a single file

**`memberof`** IExtensionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IOpenOptions`](types.IOpenOptions.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`string`\>

#### Defined in

../src/types/IExtensionContext.ts:454

___

### sendNotification

▸ `Optional` **sendNotification**(`notification`): `string`

show a notification to the user.
This is not available in the call to registerReducer

**`memberof`** IExtensionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`INotification`](types.INotification.md) |

#### Returns

`string`

the notification id

#### Defined in

../src/types/IExtensionContext.ts:412

___

### setStylesheet

▸ **setStylesheet**(`key`, `filePath`): `void`

insert or replace a sass-stylesheet. It gets integrated into the existing sheets based
on the key:
By default, the sheets "variables", "details" and "style" are intended to customize the
look of the application.
- "variables" is a set of variables representing colors, sizes and
  margins that will be used throughout the application.
- "details" applies these variables to different generic controls (like tabs, lists, ...)
- "style" is where you should customize individual controls with css rules

If your extension sets a sheet that didn't exist before then that sheet will be inserted
before the "style" sheet but after everything else. This allows themes to affect extension
styles.

**`note`** Important: As usual with css, rules you add affect the entire application, without
 severely restricting themes and extensions we can not automatically restrict your stylesheets
 to the controls added by your extension. This means it's your responsibility to make sure
 your stylesheet doesn't modify foreign controls.

**`memberof`** IExtensionContext

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | identify the key to set. If this is an existing sheet, that sheet will be                     replaced |
| `filePath` | `string` | path of the corresponding stylesheet file |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:640

___

### showDialog

▸ `Optional` **showDialog**(`type`, `title`, `content`, `actions`, `id?`): [`Promise`](../classes/Promise.md)<[`IDialogResult`](actions.IDialogResult.md)\>

show a dialog

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`DialogType`](../modules/actions.md#dialogtype) |
| `title` | `string` |
| `content` | [`IDialogContent`](actions.IDialogContent.md) |
| `actions` | [`DialogActions`](../modules/actions.md#dialogactions) |
| `id?` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<[`IDialogResult`](actions.IDialogResult.md)\>

#### Defined in

../src/types/IExtensionContext.ts:427

___

### showErrorNotification

▸ `Optional` **showErrorNotification**(`message`, `detail`, `options?`): `void`

show an error message to the user.
This is a convenience wrapper for sendNotification.
This is not available in the call to registerReducer

**`memberof`** IExtensionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `detail` | `any` |
| `options?` | [`IErrorOptions`](types.IErrorOptions.md) |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:421

___

### suppressNotification

▸ `Optional` **suppressNotification**(`id`, `suppress?`): `void`

hides a notification and don't show it again
if this is called with the second parameter set to false, it re-enables the notification
instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `suppress?` | `boolean` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:447

___

### withPrePost

▸ **withPrePost**<`T`\>(`eventName`, `callback`): (...`args`: `any`[]) => [`Promise`](../classes/Promise.md)<`T`\>

wraps a function such that it will emitAndAwait will-eventName and did-eventName events
before and after invoking the actual callback.
both these events receive the arguments passed to the callback, the did-event also receives
the result of the callback if any (the result is the first argument because the number
of arguments may be variable)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `callback` | (...`args`: `any`[]) => [`Promise`](../classes/Promise.md)<`T`\> |

#### Returns

`fn`

▸ (...`args`): [`Promise`](../classes/Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

[`Promise`](../classes/Promise.md)<`T`\>

#### Defined in

../src/types/IExtensionContext.ts:674
