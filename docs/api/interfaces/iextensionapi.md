**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IExtensionApi

# Interface: IExtensionApi

interface for convenience functions made available to extensions

**`export`** 

**`interface`** IExtensionApi

## Hierarchy

* **IExtensionApi**

## Index

### Properties

* [NAMESPACE](iextensionapi.md#namespace)
* [addMetaServer](iextensionapi.md#addmetaserver)
* [awaitUI](iextensionapi.md#awaitui)
* [clearStylesheet](iextensionapi.md#clearstylesheet)
* [closeDialog](iextensionapi.md#closedialog)
* [deregisterProtocol](iextensionapi.md#deregisterprotocol)
* [dismissNotification](iextensionapi.md#dismissnotification)
* [emitAndAwait](iextensionapi.md#emitandawait)
* [events](iextensionapi.md#events)
* [ext](iextensionapi.md#ext)
* [extension](iextensionapi.md#extension)
* [getI18n](iextensionapi.md#geti18n)
* [getLoadedExtensions](iextensionapi.md#getloadedextensions)
* [getPath](iextensionapi.md#getpath)
* [getState](iextensionapi.md#getstate)
* [highlightControl](iextensionapi.md#highlightcontrol)
* [isOutdated](iextensionapi.md#isoutdated)
* [laterT](iextensionapi.md#latert)
* [locale](iextensionapi.md#locale)
* [lookupModMeta](iextensionapi.md#lookupmodmeta)
* [lookupModReference](iextensionapi.md#lookupmodreference)
* [onAsync](iextensionapi.md#onasync)
* [onStateChange](iextensionapi.md#onstatechange)
* [openArchive](iextensionapi.md#openarchive)
* [registerProtocol](iextensionapi.md#registerprotocol)
* [runExecutable](iextensionapi.md#runexecutable)
* [saveModMeta](iextensionapi.md#savemodmeta)
* [selectDir](iextensionapi.md#selectdir)
* [selectExecutable](iextensionapi.md#selectexecutable)
* [selectFile](iextensionapi.md#selectfile)
* [sendNotification](iextensionapi.md#sendnotification)
* [setStylesheet](iextensionapi.md#setstylesheet)
* [showDialog](iextensionapi.md#showdialog)
* [showErrorNotification](iextensionapi.md#showerrornotification)
* [store](iextensionapi.md#store)
* [suppressNotification](iextensionapi.md#suppressnotification)
* [translate](iextensionapi.md#translate)

## Properties

### NAMESPACE

•  **NAMESPACE**: string

*Defined in Work/vortex/src/types/IExtensionContext.ts:660*

___

### addMetaServer

•  **addMetaServer**: (id: string, server?: any) => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:540*

add a meta server
Please note that setting a server with the same id again will replace the existing one
with that id and setting it to undefined removes it

___

### awaitUI

•  **awaitUI**: () => Promise\<void>

*Defined in Work/vortex/src/types/IExtensionContext.ts:641*

returns a promise that resolves once the ui has been displayed.
This is useful if you have a callback that may be triggered before the ui is
displayed but may require the UI to be processed.
Specifically events can only be sent once this event has been triggered

___

### clearStylesheet

•  **clearStylesheet**: () => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:570*

clear the stylesheet cache to ensure it gets rebuilt even if the list of files hasn't changed

___

### closeDialog

• `Optional` **closeDialog**: (id: string, actionKey?: string, input?: any) => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:400*

close a dialog

___

### deregisterProtocol

•  **deregisterProtocol**: (protocol: string) => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:526*

deregister an uri protocol currently being handled by us

**`memberof`** IExtensionApi

___

### dismissNotification

• `Optional` **dismissNotification**: (id: string) => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:407*

hides a notification by its id

**`memberof`** IExtensionApi

___

### emitAndAwait

•  **emitAndAwait**: (eventName: string, ...args: any[]) => Promise\<any>

*Defined in Work/vortex/src/types/IExtensionContext.ts:612*

emit an event and allow every receiver to return a Promise. This call will only return
after all these Promises are resolved.

___

### events

•  **events**: EventEmitter

*Defined in Work/vortex/src/types/IExtensionContext.ts:458*

event emitter

**`memberof`** IExtensionApi

___

### ext

•  **ext**: { [key:string]: (...args: any[]) => any;  }

*Defined in Work/vortex/src/types/IExtensionContext.ts:657*

functions made available from extension to extension. Callers have to make
sure they handle gracefully the case where a function doesn't exist

___

### extension

• `Optional` **extension**: string

*Defined in Work/vortex/src/types/IExtensionContext.ts:368*

name of the extension to use this api with

___

### getI18n

•  **getI18n**: () => i18n

*Defined in Work/vortex/src/types/IExtensionContext.ts:480*

get direct access to the i18next object managing localisation.
This is only needed to influence how localisation works in general,
to just translate a text, use "translate"

___

### getLoadedExtensions

•  **getLoadedExtensions**: () => [IRegisteredExtension](iregisteredextension.md)[]

*Defined in Work/vortex/src/types/IExtensionContext.ts:651*

get a list of extensions currently loaded into Vortex

___

### getPath

•  **getPath**: (name: string) => string

*Defined in Work/vortex/src/types/IExtensionContext.ts:497*

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

___

### getState

•  **getState**: \<T>() => T

*Defined in Work/vortex/src/types/IExtensionContext.ts:646*

wrapper for api.store.getState() with the benefit that it automatically assigns a type

___

### highlightControl

•  **highlightControl**: (selector: string, durationMS: number, text?: string) => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:633*

highlight a control for a short time to direct the users attention to it.
The control (or controls) is identified by a css selector.
A text can be added, but no promise that it actually looks good in practice

___

### isOutdated

•  **isOutdated**: () => boolean

*Defined in Work/vortex/src/types/IExtensionContext.ts:626*

returns true if the running version of Vortex is considered outdated. This is mostly used
to determine if feedback should be sent to Nexus Mods.

___

### laterT

•  **laterT**: TFunction

*Defined in Work/vortex/src/types/IExtensionContext.ts:468*

prepare a string to be translated further down the line.

___

### locale

•  **locale**: () => string

*Defined in Work/vortex/src/types/IExtensionContext.ts:473*

active locale

___

### lookupModMeta

•  **lookupModMeta**: (details: [ILookupDetails](ilookupdetails.md), ignoreCache?: boolean) => Promise\<ILookupResult[]>

*Defined in Work/vortex/src/types/IExtensionContext.ts:552*

find meta information about a mod
this will calculate a hash and the file size of the specified file
for the lookup unless those details are already provided.
Please note that it's still possible for the file to get multiple
matches, i.e. if it has been re-uploaded, potentially for a different
game.

**`memberof`** IExtensionApi

___

### lookupModReference

•  **lookupModReference**: (ref: IReference) => Promise\<ILookupResult[]>

*Defined in Work/vortex/src/types/IExtensionContext.ts:533*

find meta information about a mod

**`memberof`** IExtensionApi

___

### onAsync

•  **onAsync**: (eventName: string, listener: (...args: any[]) => PromiseLike\<any>) => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:620*

handle an event emitted with emitAndAwait. The listener can return a promise and the emitter
will only return after all promises from handlers are returned.
Note that listeners should report all errors themselves, it is considered a bug if the listener
returns a rejected promise.

___

### onStateChange

• `Optional` **onStateChange**: (path: string[], callback: [StateChangeCallback](../globals.md#statechangecallback)) => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:508*

register a callback for changes to the state

**`param`** path in the state-tree to watch for changes,
                  i.e. ['settings', 'interface', 'language'] would call the callback
                  for all changes to the interface language

**`memberof`** IExtensionApi

___

### openArchive

•  **openArchive**: (archivePath: string, options?: [IArchiveOptions](iarchiveoptions.md), extension?: string) => Promise\<[Archive](../classes/archive.md)>

*Defined in Work/vortex/src/types/IExtensionContext.ts:564*

opens an archive

___

### registerProtocol

•  **registerProtocol**: [IRegisterProtocol](iregisterprotocol.md)

*Defined in Work/vortex/src/types/IExtensionContext.ts:519*

registers an uri protocol to be handled by this application. If the "def"ault parameter
is set to true, this application will also be inserted as the system wide default handler
for the protocol. Use with caution, as this will overwrite the previous value, which
can't be undone automatically

**`memberof`** IExtensionContext

___

### runExecutable

•  **runExecutable**: (executable: string, args: string[], options: [IRunOptions](irunoptions.md)) => Promise\<void>

*Defined in Work/vortex/src/types/IExtensionContext.ts:606*

run an executable. This is comparable to node.js child_process.spawn but it allows us to add
extensions, like support interpreters and hooks.
It will also automatically ask the user to authorize elevation if the executable requires it
The returned promise is resolved when the started process has run to completion.
IRunOptions.onSpawned can be used to react to react to when the process has been started.

___

### saveModMeta

•  **saveModMeta**: (modInfo: IModInfo) => Promise\<void>

*Defined in Work/vortex/src/types/IExtensionContext.ts:559*

save meta information about a mod

**`memberof`** IExtensionApi

___

### selectDir

•  **selectDir**: (options: [IOpenOptions](iopenoptions.md)) => Promise\<string>

*Defined in Work/vortex/src/types/IExtensionContext.ts:435*

show a system dialog to open a single directory

**`memberof`** IExtensionApi

___

### selectExecutable

•  **selectExecutable**: (options: [IOpenOptions](iopenoptions.md)) => Promise\<string>

*Defined in Work/vortex/src/types/IExtensionContext.ts:428*

show a system dialog to select an executable file

**`memberof`** IExtensionApi

___

### selectFile

•  **selectFile**: (options: [IOpenOptions](iopenoptions.md)) => Promise\<string>

*Defined in Work/vortex/src/types/IExtensionContext.ts:421*

show a system dialog to open a single file

**`memberof`** IExtensionApi

___

### sendNotification

• `Optional` **sendNotification**: (notification: [INotification](inotification.md)) => string

*Defined in Work/vortex/src/types/IExtensionContext.ts:379*

show a notification to the user.
This is not available in the call to registerReducer

**`returns`** the notification id

**`memberof`** IExtensionApi

___

### setStylesheet

•  **setStylesheet**: (key: string, filePath: string) => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:597*

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

___

### showDialog

• `Optional` **showDialog**: (type: [DialogType](../globals.md#dialogtype), title: string, content: [IDialogContent](idialogcontent.md), actions: [DialogActions](../globals.md#dialogactions), id?: string) => Promise\<[IDialogResult](idialogresult.md)>

*Defined in Work/vortex/src/types/IExtensionContext.ts:394*

show a dialog

___

### showErrorNotification

• `Optional` **showErrorNotification**: (message: string, detail: string \| [Error](../classes/notsupportederror.md#error) \| any, options?: [IErrorOptions](ierroroptions.md)) => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:388*

show an error message to the user.
This is a convenience wrapper for sendNotification.
This is not available in the call to registerReducer

**`memberof`** IExtensionApi

___

### store

• `Optional` **store**: [ThunkStore](thunkstore.md)\<any>

*Defined in Work/vortex/src/types/IExtensionContext.ts:450*

the redux store containing all application state & data

Please note: this store object will remain valid for the whole
  application runtime so you can store it, bind it to functions
  and so on. The state object (store.getState()) is immutable and
  will be a different object whenever the state is changed.
  Thus you should *not* store/bind the state directly unless you
  actually want a "snapshot" of the state.

**`memberof`** IExtensionApi

___

### suppressNotification

• `Optional` **suppressNotification**: (id: string, suppress?: boolean) => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:414*

hides a notification and don't show it again
if this is called with the second parameter set to false, it re-enables the notification
instead

___

### translate

•  **translate**: TFunction

*Defined in Work/vortex/src/types/IExtensionContext.ts:463*

translation function
