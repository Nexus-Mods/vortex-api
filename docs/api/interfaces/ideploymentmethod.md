**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IDeploymentMethod

# Interface: IDeploymentMethod

## Hierarchy

* **IDeploymentMethod**

## Index

### Properties

* [activate](ideploymentmethod.md#activate)
* [cancel](ideploymentmethod.md#cancel)
* [deactivate](ideploymentmethod.md#deactivate)
* [description](ideploymentmethod.md#description)
* [detailedDescription](ideploymentmethod.md#detaileddescription)
* [externalChanges](ideploymentmethod.md#externalchanges)
* [finalize](ideploymentmethod.md#finalize)
* [getDeployedPath](ideploymentmethod.md#getdeployedpath)
* [id](ideploymentmethod.md#id)
* [isDeployed](ideploymentmethod.md#isdeployed)
* [isFallbackPurgeSafe](ideploymentmethod.md#isfallbackpurgesafe)
* [isSupported](ideploymentmethod.md#issupported)
* [name](ideploymentmethod.md#name)
* [noRedundancy](ideploymentmethod.md#noredundancy)
* [onSelected](ideploymentmethod.md#onselected)
* [postPurge](ideploymentmethod.md#postpurge)
* [prePurge](ideploymentmethod.md#prepurge)
* [prepare](ideploymentmethod.md#prepare)
* [priority](ideploymentmethod.md#priority)
* [purge](ideploymentmethod.md#purge)
* [userGate](ideploymentmethod.md#usergate)

## Properties

### activate

•  **activate**: (sourcePath: string, sourceName: string, deployPath: string, blackList: Set\<string>) => Promise\<void>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:237*

activate the specified mod in the specified location

**`param`** source where the mod is installed

**`param`** name to be stored as the source of files. usually the path of the
                           mod subdirectory

**`param`** relative path within the data path where mods are installed to

**`param`** list of files to skip

**`memberof`** IDeploymentMethod

___

### cancel

• `Optional` **cancel**: (gameId: string, dataPath: string, installationPath: string) => Promise\<void>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:223*

if defined, this gets called instead of finalize if an error occurred since prepare was called.
This allows the deployment method to reset all state without actually doing anything in case
things went wrong.
If this is not defined, nothing gets called. In this case the deployment method can't have any
state set up in prepare that would cause issues if finalize doesn't get called.

___

### deactivate

•  **deactivate**: (sourcePath: string, dataPath: string, sourceName: string) => Promise\<void>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:249*

deactivate the specified mod, removing all files it has deployed to the destination

**`param`** source where the mod is installed

**`param`** relative path within the data path where mods are installed to

**`param`** name of the source mod

**`todo`** sorry about the stupid parameter order, sourceName was added after release so to
  remain backwards compatible we have to append it

___

### description

• `Readonly` **description**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:123*

Short description of the activator and it's pros/cons

**`memberof`** IDeploymentMethod

___

### detailedDescription

•  **detailedDescription**: (t: TFunction) => string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:151*

returns more extensive description/explanation of the activator.

**`memberof`** IDeploymentMethod

___

### externalChanges

•  **externalChanges**: (gameId: string, installPath: string, dataPath: string, activation: [IDeployedFile](ideployedfile.md)[]) => Promise\<[IFileChange](ifilechange.md)[]>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:287*

retrieve list of external changes, that is: files that were installed by this
activator but have been changed since then by an external application.

**`param`** Vortex path where mods are installed from (source)

**`param`** game path where mods are installed to (destination)

**`memberof`** IDeploymentMethod

___

### finalize

•  **finalize**: (gameId: string, dataPath: string, installationPath: string, progressCB?: (files: number, total: number) => void) => Promise\<[IDeployedFile](ideployedfile.md)[]>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:211*

called after an activate call was made for all active mods,
in case this activator needs to do postprocessing

**`returns`** a promise of activation results. These results will be used for a "purge"
           in case the activator isn't available for the regular purge op.
           If a purge isn't necessary, i.e. because the links are transient anyway, please
           just return an empty list.
           Please note that this purge will happen with a regular file deletion call,
           if this could lead to data loss do NOT return anything here. In that case you
           should provide another way for the user to clean up the game directory even when
           your activator is not available for some reason.

**`memberof`** IDeploymentMethod

___

### getDeployedPath

•  **getDeployedPath**: (input: string) => string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:298*

given a file path (relative to a staging path), return the name under which the
file would be deployed.
This is used in cases where the deployment method may rename files during
deployment for whatever reason.
An example would be move deployment where the file that remains in the staging
folder is just a (differently named) placeholder.

___

### id

• `Readonly` **id**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:107*

id of the activator for lookup in code

**`memberof`** IDeploymentMethod

___

### isDeployed

•  **isDeployed**: (installPath: string, dataPath: string, file: [IDeployedFile](ideployedfile.md)) => Promise\<boolean>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:305*

test if the specified file is deployed through this methed

**`param`** Vortex path where mods are installed from (source)

**`param`** game path where mods are installed to (destination)

___

### isFallbackPurgeSafe

• `Readonly` **isFallbackPurgeSafe**: boolean

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:132*

true if it's "safe" to purge files from this method from another instance,
that is: without knowing where the "original" files are.

**`memberof`** IDeploymentMethod

___

### isSupported

•  **isSupported**: (state: any, gameId: string, modTypeId: string) => [IUnavailableReason](iunavailablereason.md)

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:162*

determine if this activator is supported in the current environment
If the activator is supported, returns undefined. Otherwise a string
that explains why the activator isn't available.

synchronous 'cause lazy.

**`memberof`** IDeploymentMethod

___

### name

• `Readonly` **name**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:115*

name of this activator as presented to the user

**`memberof`** IDeploymentMethod

___

### noRedundancy

• `Optional` `Readonly` **noRedundancy**: boolean

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:143*

if true, no redundancy check is made for this deployment.
For cases where the redundancy check wouldn't work correctly

___

### onSelected

• `Optional` **onSelected**: (api: [IExtensionApi](iextensionapi.md)) => Promise\<void>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:176*

called before the deployment method is selected. Primary use is to show usage instructions
the user needs to know before using it

___

### postPurge

•  **postPurge**: () => Promise\<void>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:277*

called after mods were purged. If multiple mod types wer purged, this is only called
after they are all done.
Like prePurge, this is intended for optimizations

___

### prePurge

•  **prePurge**: (installPath: string) => Promise\<void>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:257*

called before mods are being purged. If multiple mod types are going to be purged,
this is only called once.
This is primarily useful for optimization, to avoid work being done redundantly
for every modtype-purge

___

### prepare

•  **prepare**: (dataPath: string, clean: boolean, lastActivation: [IDeployedFile](ideployedfile.md)[], normalize: [Normalize](../globals.md#normalize)) => Promise\<void>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:193*

called before any calls to activate/deactivate, in case the
activator needs to do pre-processing

**`param`** the path where files will be deployed to

**`param`** whether the activate commands should be treated
                       as deltas (false) to the existing activation or whether
                       we're deploying from scratch (true)

**`param`** previous deployment state to be used as
                                        the reference for newly deployed files

**`param`** a path normalization function. This needs to be used
                             when comparing strings against the blacklist or when storing
                             relative path into the deployment manifest

**`memberof`** IDeploymentMethod

___

### priority

• `Readonly` **priority**: number

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:137*

low value means: prefer this method over those with higher value

___

### purge

•  **purge**: (installPath: string, dataPath: string, gameId?: string) => Promise\<void>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:270*

deactivate all mods at the destination location

**`param`** Vortex path where mods are installed from (source)

**`param`** game paths where mods are installed to (destination)
Vortex itself does not keep track which files were installed by the
activator so if the activator can not discover those automatically it
it has to do its own bookkeeping.
The LinkingActivator base-class does implement such bookkeeping however.

**`memberof`** IDeploymentMethod

___

### userGate

•  **userGate**: () => Promise\<void>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:170*

if mod deployment in some way requires user interaction we should give the user control
over the process, even if he has auto-deploy active

**`memberof`** IDeploymentMethod
