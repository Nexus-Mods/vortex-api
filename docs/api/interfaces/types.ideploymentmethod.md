[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IDeploymentMethod

# Interface: IDeploymentMethod

[types](../modules/types.md).IDeploymentMethod

## Table of contents

### Properties

- [activate](types.ideploymentmethod.md#activate)
- [cancel](types.ideploymentmethod.md#cancel)
- [compatible](types.ideploymentmethod.md#compatible)
- [deactivate](types.ideploymentmethod.md#deactivate)
- [description](types.ideploymentmethod.md#description)
- [detailedDescription](types.ideploymentmethod.md#detaileddescription)
- [externalChanges](types.ideploymentmethod.md#externalchanges)
- [finalize](types.ideploymentmethod.md#finalize)
- [getDeployedPath](types.ideploymentmethod.md#getdeployedpath)
- [id](types.ideploymentmethod.md#id)
- [isDeployed](types.ideploymentmethod.md#isdeployed)
- [isFallbackPurgeSafe](types.ideploymentmethod.md#isfallbackpurgesafe)
- [isSupported](types.ideploymentmethod.md#issupported)
- [name](types.ideploymentmethod.md#name)
- [noRedundancy](types.ideploymentmethod.md#noredundancy)
- [onSelected](types.ideploymentmethod.md#onselected)
- [postPurge](types.ideploymentmethod.md#postpurge)
- [prePurge](types.ideploymentmethod.md#prepurge)
- [prepare](types.ideploymentmethod.md#prepare)
- [priority](types.ideploymentmethod.md#priority)
- [purge](types.ideploymentmethod.md#purge)
- [userGate](types.ideploymentmethod.md#usergate)

## Properties

### activate

• **activate**: (`sourcePath`: *string*, `sourceName`: *string*, `deployPath`: *string*, `blackList`: *Set*<string\>) => [*Promise*](../classes/promise.md)<void\>

activate the specified mod in the specified location

**`param`** source where the mod is installed

**`param`** name to be stored as the source of files. usually the path of the
                           mod subdirectory

**`param`** relative path within the data path where mods are installed to

**`param`** list of files to skip

**`memberof`** IDeploymentMethod

#### Type declaration:

▸ (`sourcePath`: *string*, `sourceName`: *string*, `deployPath`: *string*, `blackList`: *Set*<string\>): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`sourcePath` | *string* |
`sourceName` | *string* |
`deployPath` | *string* |
`blackList` | *Set*<string\> |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:244

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:244

___

### cancel

• `Optional` **cancel**: (`gameId`: *string*, `dataPath`: *string*, `installationPath`: *string*) => [*Promise*](../classes/promise.md)<void\>

if defined, this gets called instead of finalize if an error occurred since prepare was called.
This allows the deployment method to reset all state without actually doing anything in case
things went wrong.
If this is not defined, nothing gets called. In this case the deployment method can't have any
state set up in prepare that would cause issues if finalize doesn't get called.

#### Type declaration:

▸ (`gameId`: *string*, `dataPath`: *string*, `installationPath`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`gameId` | *string* |
`dataPath` | *string* |
`installationPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:230

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:230

___

### compatible

• `Optional` `Readonly` **compatible**: *string*[]

if set, lists ids of other deployment methods that this is compatible to.
Compatible means we can switch between methods without requiring a purge or
a need to warn the user.

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:114

___

### deactivate

• **deactivate**: (`sourcePath`: *string*, `dataPath`: *string*, `sourceName`: *string*) => [*Promise*](../classes/promise.md)<void\>

deactivate the specified mod, removing all files it has deployed to the destination

**`param`** source where the mod is installed

**`param`** relative path within the data path where mods are installed to

**`param`** name of the source mod

**`todo`** sorry about the stupid parameter order, sourceName was added after release so to
  remain backwards compatible we have to append it

#### Type declaration:

▸ (`sourcePath`: *string*, `dataPath`: *string*, `sourceName`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`sourcePath` | *string* |
`dataPath` | *string* |
`sourceName` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:256

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:256

___

### description

• `Readonly` **description**: *string*

Short description of the activator and it's pros/cons

**`memberof`** IDeploymentMethod

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:130

___

### detailedDescription

• **detailedDescription**: (`t`: TFunction) => *string*

returns more extensive description/explanation of the activator.

**`memberof`** IDeploymentMethod

#### Type declaration:

▸ (`t`: TFunction): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`t` | TFunction |

**Returns:** *string*

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:158

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:158

___

### externalChanges

• **externalChanges**: (`gameId`: *string*, `installPath`: *string*, `dataPath`: *string*, `activation`: [*IDeployedFile*](types.ideployedfile.md)[]) => [*Promise*](../classes/promise.md)<[*IFileChange*](types.ifilechange.md)[]\>

retrieve list of external changes, that is: files that were installed by this
activator but have been changed since then by an external application.

**`param`** Vortex path where mods are installed from (source)

**`param`** game path where mods are installed to (destination)

**`memberof`** IDeploymentMethod

#### Type declaration:

▸ (`gameId`: *string*, `installPath`: *string*, `dataPath`: *string*, `activation`: [*IDeployedFile*](types.ideployedfile.md)[]): [*Promise*](../classes/promise.md)<[*IFileChange*](types.ifilechange.md)[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`gameId` | *string* |
`installPath` | *string* |
`dataPath` | *string* |
`activation` | [*IDeployedFile*](types.ideployedfile.md)[] |

**Returns:** [*Promise*](../classes/promise.md)<[*IFileChange*](types.ifilechange.md)[]\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:294

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:294

___

### finalize

• **finalize**: (`gameId`: *string*, `dataPath`: *string*, `installationPath`: *string*, `progressCB?`: (`files`: *number*, `total`: *number*) => *void*) => [*Promise*](../classes/promise.md)<[*IDeployedFile*](types.ideployedfile.md)[]\>

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

#### Type declaration:

▸ (`gameId`: *string*, `dataPath`: *string*, `installationPath`: *string*, `progressCB?`: (`files`: *number*, `total`: *number*) => *void*): [*Promise*](../classes/promise.md)<[*IDeployedFile*](types.ideployedfile.md)[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`gameId` | *string* |
`dataPath` | *string* |
`installationPath` | *string* |
`progressCB?` | (`files`: *number*, `total`: *number*) => *void* |

**Returns:** [*Promise*](../classes/promise.md)<[*IDeployedFile*](types.ideployedfile.md)[]\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:218

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:218

___

### getDeployedPath

• **getDeployedPath**: (`input`: *string*) => *string*

given a file path (relative to a staging path), return the name under which the
file would be deployed.
This is used in cases where the deployment method may rename files during
deployment for whatever reason.
An example would be move deployment where the file that remains in the staging
folder is just a (differently named) placeholder.

#### Type declaration:

▸ (`input`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *string* |

**Returns:** *string*

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:305

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:305

___

### id

• `Readonly` **id**: *string*

id of the activator for lookup in code

**`memberof`** IDeploymentMethod

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:107

___

### isDeployed

• **isDeployed**: (`installPath`: *string*, `dataPath`: *string*, `file`: [*IDeployedFile*](types.ideployedfile.md)) => [*Promise*](../classes/promise.md)<boolean\>

test if the specified file is deployed through this methed

**`param`** Vortex path where mods are installed from (source)

**`param`** game path where mods are installed to (destination)

#### Type declaration:

▸ (`installPath`: *string*, `dataPath`: *string*, `file`: [*IDeployedFile*](types.ideployedfile.md)): [*Promise*](../classes/promise.md)<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`installPath` | *string* |
`dataPath` | *string* |
`file` | [*IDeployedFile*](types.ideployedfile.md) |

**Returns:** [*Promise*](../classes/promise.md)<boolean\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:312

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:312

___

### isFallbackPurgeSafe

• `Readonly` **isFallbackPurgeSafe**: *boolean*

true if it's "safe" to purge files from this method from another instance,
that is: without knowing where the "original" files are.

**`memberof`** IDeploymentMethod

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:139

___

### isSupported

• **isSupported**: (`state`: *any*, `gameId`: *string*, `modTypeId`: *string*) => [*IUnavailableReason*](types.iunavailablereason.md)

determine if this activator is supported in the current environment
If the activator is supported, returns undefined. Otherwise a string
that explains why the activator isn't available.

synchronous 'cause lazy.

**`memberof`** IDeploymentMethod

#### Type declaration:

▸ (`state`: *any*, `gameId`: *string*, `modTypeId`: *string*): [*IUnavailableReason*](types.iunavailablereason.md)

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *any* |
`gameId` | *string* |
`modTypeId` | *string* |

**Returns:** [*IUnavailableReason*](types.iunavailablereason.md)

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:169

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:169

___

### name

• `Readonly` **name**: *string*

name of this activator as presented to the user

**`memberof`** IDeploymentMethod

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:122

___

### noRedundancy

• `Optional` `Readonly` **noRedundancy**: *boolean*

if true, no redundancy check is made for this deployment.
For cases where the redundancy check wouldn't work correctly

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:150

___

### onSelected

• `Optional` **onSelected**: (`api`: [*IExtensionApi*](types.iextensionapi.md)) => [*Promise*](../classes/promise.md)<void\>

called before the deployment method is selected. Primary use is to show usage instructions
the user needs to know before using it

#### Type declaration:

▸ (`api`: [*IExtensionApi*](types.iextensionapi.md)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`api` | [*IExtensionApi*](types.iextensionapi.md) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:183

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:183

___

### postPurge

• **postPurge**: () => [*Promise*](../classes/promise.md)<void\>

called after mods were purged. If multiple mod types wer purged, this is only called
after they are all done.
Like prePurge, this is intended for optimizations

#### Type declaration:

▸ (): [*Promise*](../classes/promise.md)<void\>

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:284

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:284

___

### prePurge

• **prePurge**: (`installPath`: *string*) => [*Promise*](../classes/promise.md)<void\>

called before mods are being purged. If multiple mod types are going to be purged,
this is only called once.
This is primarily useful for optimization, to avoid work being done redundantly
for every modtype-purge

#### Type declaration:

▸ (`installPath`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`installPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:264

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:264

___

### prepare

• **prepare**: (`dataPath`: *string*, `clean`: *boolean*, `lastActivation`: [*IDeployedFile*](types.ideployedfile.md)[], `normalize`: [*Normalize*](../modules/util.md#normalize)) => [*Promise*](../classes/promise.md)<void\>

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

#### Type declaration:

▸ (`dataPath`: *string*, `clean`: *boolean*, `lastActivation`: [*IDeployedFile*](types.ideployedfile.md)[], `normalize`: [*Normalize*](../modules/util.md#normalize)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`dataPath` | *string* |
`clean` | *boolean* |
`lastActivation` | [*IDeployedFile*](types.ideployedfile.md)[] |
`normalize` | [*Normalize*](../modules/util.md#normalize) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:200

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:200

___

### priority

• `Readonly` **priority**: *number*

low value means: prefer this method over those with higher value

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:144

___

### purge

• **purge**: (`installPath`: *string*, `dataPath`: *string*, `gameId?`: *string*) => [*Promise*](../classes/promise.md)<void\>

deactivate all mods at the destination location

**`param`** Vortex path where mods are installed from (source)

**`param`** game paths where mods are installed to (destination)
Vortex itself does not keep track which files were installed by the
activator so if the activator can not discover those automatically it
it has to do its own bookkeeping.
The LinkingActivator base-class does implement such bookkeeping however.

**`memberof`** IDeploymentMethod

#### Type declaration:

▸ (`installPath`: *string*, `dataPath`: *string*, `gameId?`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`installPath` | *string* |
`dataPath` | *string* |
`gameId?` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:277

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:277

___

### userGate

• **userGate**: () => [*Promise*](../classes/promise.md)<void\>

if mod deployment in some way requires user interaction we should give the user control
over the process, even if he has auto-deploy active

**`memberof`** IDeploymentMethod

#### Type declaration:

▸ (): [*Promise*](../classes/promise.md)<void\>

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:177

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:177
