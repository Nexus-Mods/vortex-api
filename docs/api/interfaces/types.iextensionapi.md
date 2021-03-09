[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IExtensionApi

# Interface: IExtensionApi

[types](../modules/types.md).IExtensionApi

interface for convenience functions made available to extensions

**`export`** 

**`interface`** IExtensionApi

## Table of contents

### Properties

- [NAMESPACE](types.iextensionapi.md#namespace)
- [addMetaServer](types.iextensionapi.md#addmetaserver)
- [awaitUI](types.iextensionapi.md#awaitui)
- [clearStylesheet](types.iextensionapi.md#clearstylesheet)
- [closeDialog](types.iextensionapi.md#closedialog)
- [deregisterProtocol](types.iextensionapi.md#deregisterprotocol)
- [dismissNotification](types.iextensionapi.md#dismissnotification)
- [emitAndAwait](types.iextensionapi.md#emitandawait)
- [events](types.iextensionapi.md#events)
- [ext](types.iextensionapi.md#ext)
- [extension](types.iextensionapi.md#extension)
- [getI18n](types.iextensionapi.md#geti18n)
- [getLoadedExtensions](types.iextensionapi.md#getloadedextensions)
- [getPath](types.iextensionapi.md#getpath)
- [getState](types.iextensionapi.md#getstate)
- [highlightControl](types.iextensionapi.md#highlightcontrol)
- [isOutdated](types.iextensionapi.md#isoutdated)
- [laterT](types.iextensionapi.md#latert)
- [locale](types.iextensionapi.md#locale)
- [lookupModMeta](types.iextensionapi.md#lookupmodmeta)
- [lookupModReference](types.iextensionapi.md#lookupmodreference)
- [onAsync](types.iextensionapi.md#onasync)
- [onStateChange](types.iextensionapi.md#onstatechange)
- [openArchive](types.iextensionapi.md#openarchive)
- [registerProtocol](types.iextensionapi.md#registerprotocol)
- [runExecutable](types.iextensionapi.md#runexecutable)
- [saveModMeta](types.iextensionapi.md#savemodmeta)
- [selectDir](types.iextensionapi.md#selectdir)
- [selectExecutable](types.iextensionapi.md#selectexecutable)
- [selectFile](types.iextensionapi.md#selectfile)
- [sendNotification](types.iextensionapi.md#sendnotification)
- [setStylesheet](types.iextensionapi.md#setstylesheet)
- [showDialog](types.iextensionapi.md#showdialog)
- [showErrorNotification](types.iextensionapi.md#showerrornotification)
- [store](types.iextensionapi.md#store)
- [suppressNotification](types.iextensionapi.md#suppressnotification)
- [translate](types.iextensionapi.md#translate)

## Properties

### NAMESPACE

• **NAMESPACE**: *string*

Defined in: src/types/IExtensionContext.ts:664

___

### addMetaServer

• **addMetaServer**: (`id`: *string*, `server?`: *any*) => *void*

add a meta server
Please note that setting a server with the same id again will replace the existing one
with that id and setting it to undefined removes it

#### Type declaration:

▸ (`id`: *string*, `server?`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`server?` | *any* |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:543

Defined in: src/types/IExtensionContext.ts:543

___

### awaitUI

• **awaitUI**: () => [*Promise*](../classes/promise.md)<void\>

returns a promise that resolves once the ui has been displayed.
This is useful if you have a callback that may be triggered before the ui is
displayed but may require the UI to be processed.
Specifically events can only be sent once this event has been triggered

#### Type declaration:

▸ (): [*Promise*](../classes/promise.md)<void\>

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IExtensionContext.ts:645

Defined in: src/types/IExtensionContext.ts:645

___

### clearStylesheet

• **clearStylesheet**: () => *void*

clear the stylesheet cache to ensure it gets rebuilt even if the list of files hasn't changed

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:573

Defined in: src/types/IExtensionContext.ts:573

___

### closeDialog

• `Optional` **closeDialog**: (`id`: *string*, `actionKey?`: *string*, `input?`: *any*) => *void*

close a dialog

#### Type declaration:

▸ (`id`: *string*, `actionKey?`: *string*, `input?`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`actionKey?` | *string* |
`input?` | *any* |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:403

Defined in: src/types/IExtensionContext.ts:403

___

### deregisterProtocol

• **deregisterProtocol**: (`protocol`: *string*) => *void*

deregister an uri protocol currently being handled by us

**`memberof`** IExtensionApi

#### Type declaration:

▸ (`protocol`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`protocol` | *string* |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:529

Defined in: src/types/IExtensionContext.ts:529

___

### dismissNotification

• `Optional` **dismissNotification**: (`id`: *string*) => *void*

hides a notification by its id

**`memberof`** IExtensionApi

#### Type declaration:

▸ (`id`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:410

Defined in: src/types/IExtensionContext.ts:410

___

### emitAndAwait

• **emitAndAwait**: (`eventName`: *string*, ...`args`: *any*[]) => [*Promise*](../classes/promise.md)<any\>

emit an event and allow every receiver to return a Promise. This call will only return
after all these Promises are resolved.
If the event handlers return a value, this returns an array of results

#### Type declaration:

▸ (`eventName`: *string*, ...`args`: *any*[]): [*Promise*](../classes/promise.md)<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | *string* |
`...args` | *any*[] |

**Returns:** [*Promise*](../classes/promise.md)<any\>

Defined in: src/types/IExtensionContext.ts:616

Defined in: src/types/IExtensionContext.ts:616

___

### events

• **events**: *EventEmitter*

event emitter

**`memberof`** IExtensionApi

Defined in: src/types/IExtensionContext.ts:461

___

### ext

• **ext**: *object*

functions made available from extension to extension. Callers have to make
sure they handle gracefully the case where a function doesn't exist

#### Type declaration:

Defined in: src/types/IExtensionContext.ts:661

___

### extension

• `Optional` **extension**: *string*

name of the extension to use this api with

Defined in: src/types/IExtensionContext.ts:371

___

### getI18n

• **getI18n**: () => i18n

get direct access to the i18next object managing localisation.
This is only needed to influence how localisation works in general,
to just translate a text, use "translate"

#### Type declaration:

▸ (): i18n

**Returns:** i18n

Defined in: src/types/IExtensionContext.ts:483

Defined in: src/types/IExtensionContext.ts:483

___

### getLoadedExtensions

• **getLoadedExtensions**: () => [*IRegisteredExtension*](types.iregisteredextension.md)[]

get a list of extensions currently loaded into Vortex

#### Type declaration:

▸ (): [*IRegisteredExtension*](types.iregisteredextension.md)[]

**Returns:** [*IRegisteredExtension*](types.iregisteredextension.md)[]

Defined in: src/types/IExtensionContext.ts:655

Defined in: src/types/IExtensionContext.ts:655

___

### getPath

• **getPath**: (`name`: *string*) => *string*

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

#### Type declaration:

▸ (`name`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *string*

Defined in: src/types/IExtensionContext.ts:500

Defined in: src/types/IExtensionContext.ts:500

___

### getState

• **getState**: <T\>() => T

wrapper for api.store.getState() with the benefit that it automatically assigns a type

#### Type declaration:

▸ <T\>(): T

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`T` | [*IState*](types.istate.md) | [*IState*](types.istate.md) |

**Returns:** T

Defined in: src/types/IExtensionContext.ts:650

Defined in: src/types/IExtensionContext.ts:650

___

### highlightControl

• **highlightControl**: (`selector`: *string*, `durationMS`: *number*, `text?`: *string*) => *void*

highlight a control for a short time to direct the users attention to it.
The control (or controls) is identified by a css selector.
A text can be added, but no promise that it actually looks good in practice

#### Type declaration:

▸ (`selector`: *string*, `durationMS`: *number*, `text?`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`selector` | *string* |
`durationMS` | *number* |
`text?` | *string* |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:637

Defined in: src/types/IExtensionContext.ts:637

___

### isOutdated

• **isOutdated**: () => *boolean*

returns true if the running version of Vortex is considered outdated. This is mostly used
to determine if feedback should be sent to Nexus Mods.

#### Type declaration:

▸ (): *boolean*

**Returns:** *boolean*

Defined in: src/types/IExtensionContext.ts:630

Defined in: src/types/IExtensionContext.ts:630

___

### laterT

• **laterT**: TFunction

prepare a string to be translated further down the line.

Defined in: src/types/IExtensionContext.ts:471

___

### locale

• **locale**: () => *string*

active locale

#### Type declaration:

▸ (): *string*

**Returns:** *string*

Defined in: src/types/IExtensionContext.ts:476

Defined in: src/types/IExtensionContext.ts:476

___

### lookupModMeta

• **lookupModMeta**: (`details`: [*ILookupDetails*](types.ilookupdetails.md), `ignoreCache?`: *boolean*) => [*Promise*](../classes/promise.md)<[*ILookupResult*](types.ilookupresult.md)[]\>

find meta information about a mod
this will calculate a hash and the file size of the specified file
for the lookup unless those details are already provided.
Please note that it's still possible for the file to get multiple
matches, i.e. if it has been re-uploaded, potentially for a different
game.

**`memberof`** IExtensionApi

#### Type declaration:

▸ (`details`: [*ILookupDetails*](types.ilookupdetails.md), `ignoreCache?`: *boolean*): [*Promise*](../classes/promise.md)<[*ILookupResult*](types.ilookupresult.md)[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`details` | [*ILookupDetails*](types.ilookupdetails.md) |
`ignoreCache?` | *boolean* |

**Returns:** [*Promise*](../classes/promise.md)<[*ILookupResult*](types.ilookupresult.md)[]\>

Defined in: src/types/IExtensionContext.ts:555

Defined in: src/types/IExtensionContext.ts:555

___

### lookupModReference

• **lookupModReference**: (`ref`: [*IReference*](types.ireference.md)) => [*Promise*](../classes/promise.md)<[*ILookupResult*](types.ilookupresult.md)[]\>

find meta information about a mod

**`memberof`** IExtensionApi

#### Type declaration:

▸ (`ref`: [*IReference*](types.ireference.md)): [*Promise*](../classes/promise.md)<[*ILookupResult*](types.ilookupresult.md)[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`ref` | [*IReference*](types.ireference.md) |

**Returns:** [*Promise*](../classes/promise.md)<[*ILookupResult*](types.ilookupresult.md)[]\>

Defined in: src/types/IExtensionContext.ts:536

Defined in: src/types/IExtensionContext.ts:536

___

### onAsync

• **onAsync**: (`eventName`: *string*, `listener`: (...`args`: *any*[]) => *PromiseLike*<any\>) => *void*

handle an event emitted with emitAndAwait. The listener can return a promise and the emitter
will only return after all promises from handlers are returned.
Note that listeners should report all errors themselves, it is considered a bug if the listener
returns a rejected promise.

#### Type declaration:

▸ (`eventName`: *string*, `listener`: (...`args`: *any*[]) => *PromiseLike*<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | *string* |
`listener` | (...`args`: *any*[]) => *PromiseLike*<any\> |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:624

Defined in: src/types/IExtensionContext.ts:624

___

### onStateChange

• `Optional` **onStateChange**: <T\>(`path`: *string*[], `callback`: [*StateChangeCallback*](../modules/types.md#statechangecallback)<T\>) => *void*

register a callback for changes to the state

**`param`** path in the state-tree to watch for changes,
                  i.e. ['settings', 'interface', 'language'] would call the callback
                  for all changes to the interface language

**`memberof`** IExtensionApi

#### Type declaration:

▸ <T\>(`path`: *string*[], `callback`: [*StateChangeCallback*](../modules/types.md#statechangecallback)<T\>): *void*

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string*[] |
`callback` | [*StateChangeCallback*](../modules/types.md#statechangecallback)<T\> |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:511

Defined in: src/types/IExtensionContext.ts:511

___

### openArchive

• **openArchive**: (`archivePath`: *string*, `options?`: [*IArchiveOptions*](types.iarchiveoptions.md), `extension?`: *string*) => [*Promise*](../classes/promise.md)<[*Archive*](../classes/util.archive.md)\>

opens an archive

#### Type declaration:

▸ (`archivePath`: *string*, `options?`: [*IArchiveOptions*](types.iarchiveoptions.md), `extension?`: *string*): [*Promise*](../classes/promise.md)<[*Archive*](../classes/util.archive.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`archivePath` | *string* |
`options?` | [*IArchiveOptions*](types.iarchiveoptions.md) |
`extension?` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<[*Archive*](../classes/util.archive.md)\>

Defined in: src/types/IExtensionContext.ts:567

Defined in: src/types/IExtensionContext.ts:567

___

### registerProtocol

• **registerProtocol**: [*IRegisterProtocol*](types.iregisterprotocol.md)

registers an uri protocol to be handled by this application. If the "def"ault parameter
is set to true, this application will also be inserted as the system wide default handler
for the protocol. Use with caution, as this will overwrite the previous value, which
can't be undone automatically

**`memberof`** IExtensionContext

Defined in: src/types/IExtensionContext.ts:522

___

### runExecutable

• **runExecutable**: (`executable`: *string*, `args`: *string*[], `options`: [*IRunOptions*](types.irunoptions.md)) => [*Promise*](../classes/promise.md)<void\>

run an executable. This is comparable to node.js child_process.spawn but it allows us to add
extensions, like support interpreters and hooks.
It will also automatically ask the user to authorize elevation if the executable requires it
The returned promise is resolved when the started process has run to completion.
IRunOptions.onSpawned can be used to react to when the process has been started.

#### Type declaration:

▸ (`executable`: *string*, `args`: *string*[], `options`: [*IRunOptions*](types.irunoptions.md)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`executable` | *string* |
`args` | *string*[] |
`options` | [*IRunOptions*](types.irunoptions.md) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IExtensionContext.ts:609

Defined in: src/types/IExtensionContext.ts:609

___

### saveModMeta

• **saveModMeta**: (`modInfo`: [*IModInfo*](types.imodinfo.md)) => [*Promise*](../classes/promise.md)<void\>

save meta information about a mod

**`memberof`** IExtensionApi

#### Type declaration:

▸ (`modInfo`: [*IModInfo*](types.imodinfo.md)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`modInfo` | [*IModInfo*](types.imodinfo.md) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IExtensionContext.ts:562

Defined in: src/types/IExtensionContext.ts:562

___

### selectDir

• **selectDir**: (`options`: [*IOpenOptions*](types.iopenoptions.md)) => [*Promise*](../classes/promise.md)<string\>

show a system dialog to open a single directory

**`memberof`** IExtensionApi

#### Type declaration:

▸ (`options`: [*IOpenOptions*](types.iopenoptions.md)): [*Promise*](../classes/promise.md)<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*IOpenOptions*](types.iopenoptions.md) |

**Returns:** [*Promise*](../classes/promise.md)<string\>

Defined in: src/types/IExtensionContext.ts:438

Defined in: src/types/IExtensionContext.ts:438

___

### selectExecutable

• **selectExecutable**: (`options`: [*IOpenOptions*](types.iopenoptions.md)) => [*Promise*](../classes/promise.md)<string\>

show a system dialog to select an executable file

**`memberof`** IExtensionApi

#### Type declaration:

▸ (`options`: [*IOpenOptions*](types.iopenoptions.md)): [*Promise*](../classes/promise.md)<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*IOpenOptions*](types.iopenoptions.md) |

**Returns:** [*Promise*](../classes/promise.md)<string\>

Defined in: src/types/IExtensionContext.ts:431

Defined in: src/types/IExtensionContext.ts:431

___

### selectFile

• **selectFile**: (`options`: [*IOpenOptions*](types.iopenoptions.md)) => [*Promise*](../classes/promise.md)<string\>

show a system dialog to open a single file

**`memberof`** IExtensionApi

#### Type declaration:

▸ (`options`: [*IOpenOptions*](types.iopenoptions.md)): [*Promise*](../classes/promise.md)<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*IOpenOptions*](types.iopenoptions.md) |

**Returns:** [*Promise*](../classes/promise.md)<string\>

Defined in: src/types/IExtensionContext.ts:424

Defined in: src/types/IExtensionContext.ts:424

___

### sendNotification

• `Optional` **sendNotification**: (`notification`: [*INotification*](types.inotification.md)) => *string*

show a notification to the user.
This is not available in the call to registerReducer

**`returns`** the notification id

**`memberof`** IExtensionApi

#### Type declaration:

▸ (`notification`: [*INotification*](types.inotification.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`notification` | [*INotification*](types.inotification.md) |

**Returns:** *string*

Defined in: src/types/IExtensionContext.ts:382

Defined in: src/types/IExtensionContext.ts:382

___

### setStylesheet

• **setStylesheet**: (`key`: *string*, `filePath`: *string*) => *void*

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

**`param`** identify the key to set. If this is an existing sheet, that sheet will be
                    replaced

**`param`** path of the corresponding stylesheet file

**`memberof`** IExtensionContext

#### Type declaration:

▸ (`key`: *string*, `filePath`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`filePath` | *string* |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:600

Defined in: src/types/IExtensionContext.ts:600

___

### showDialog

• `Optional` **showDialog**: (`type`: [*DialogType*](../modules/actions.md#dialogtype), `title`: *string*, `content`: [*IDialogContent*](actions.idialogcontent.md), `actions`: [*DialogActions*](../modules/actions.md#dialogactions), `id?`: *string*) => [*Promise*](../classes/promise.md)<[*IDialogResult*](actions.idialogresult.md)\>

show a dialog

#### Type declaration:

▸ (`type`: [*DialogType*](../modules/actions.md#dialogtype), `title`: *string*, `content`: [*IDialogContent*](actions.idialogcontent.md), `actions`: [*DialogActions*](../modules/actions.md#dialogactions), `id?`: *string*): [*Promise*](../classes/promise.md)<[*IDialogResult*](actions.idialogresult.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`type` | [*DialogType*](../modules/actions.md#dialogtype) |
`title` | *string* |
`content` | [*IDialogContent*](actions.idialogcontent.md) |
`actions` | [*DialogActions*](../modules/actions.md#dialogactions) |
`id?` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<[*IDialogResult*](actions.idialogresult.md)\>

Defined in: src/types/IExtensionContext.ts:397

Defined in: src/types/IExtensionContext.ts:397

___

### showErrorNotification

• `Optional` **showErrorNotification**: (`message`: *string*, `detail`: *any*, `options?`: [*IErrorOptions*](types.ierroroptions.md)) => *void*

show an error message to the user.
This is a convenience wrapper for sendNotification.
This is not available in the call to registerReducer

**`memberof`** IExtensionApi

#### Type declaration:

▸ (`message`: *string*, `detail`: *any*, `options?`: [*IErrorOptions*](types.ierroroptions.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`detail` | *any* |
`options?` | [*IErrorOptions*](types.ierroroptions.md) |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:391

Defined in: src/types/IExtensionContext.ts:391

___

### store

• `Optional` **store**: [*ThunkStore*](types.thunkstore.md)<any\>

the redux store containing all application state & data

Please note: this store object will remain valid for the whole
  application runtime so you can store it, bind it to functions
  and so on. The state object (store.getState()) is immutable and
  will be a different object whenever the state is changed.
  Thus you should *not* store/bind the state directly unless you
  actually want a "snapshot" of the state.

**`memberof`** IExtensionApi

Defined in: src/types/IExtensionContext.ts:453

___

### suppressNotification

• `Optional` **suppressNotification**: (`id`: *string*, `suppress?`: *boolean*) => *void*

hides a notification and don't show it again
if this is called with the second parameter set to false, it re-enables the notification
instead

#### Type declaration:

▸ (`id`: *string*, `suppress?`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`suppress?` | *boolean* |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:417

Defined in: src/types/IExtensionContext.ts:417

___

### translate

• **translate**: TFunction

translation function

Defined in: src/types/IExtensionContext.ts:466
