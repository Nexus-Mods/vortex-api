[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IDeploymentMethod

# Interface: IDeploymentMethod

[types](../modules/types.md).IDeploymentMethod

## Table of contents

### Properties

- [compatible](types.IDeploymentMethod.md#compatible)
- [description](types.IDeploymentMethod.md#description)
- [id](types.IDeploymentMethod.md#id)
- [isFallbackPurgeSafe](types.IDeploymentMethod.md#isfallbackpurgesafe)
- [name](types.IDeploymentMethod.md#name)
- [noRedundancy](types.IDeploymentMethod.md#noredundancy)
- [priority](types.IDeploymentMethod.md#priority)

### Methods

- [activate](types.IDeploymentMethod.md#activate)
- [cancel](types.IDeploymentMethod.md#cancel)
- [deactivate](types.IDeploymentMethod.md#deactivate)
- [detailedDescription](types.IDeploymentMethod.md#detaileddescription)
- [externalChanges](types.IDeploymentMethod.md#externalchanges)
- [finalize](types.IDeploymentMethod.md#finalize)
- [getDeployedPath](types.IDeploymentMethod.md#getdeployedpath)
- [isDeployed](types.IDeploymentMethod.md#isdeployed)
- [isSupported](types.IDeploymentMethod.md#issupported)
- [onSelected](types.IDeploymentMethod.md#onselected)
- [postPurge](types.IDeploymentMethod.md#postpurge)
- [prePurge](types.IDeploymentMethod.md#prepurge)
- [prepare](types.IDeploymentMethod.md#prepare)
- [purge](types.IDeploymentMethod.md#purge)
- [userGate](types.IDeploymentMethod.md#usergate)

## Properties

### compatible

• `Optional` `Readonly` **compatible**: `string`[]

if set, lists ids of other deployment methods that this is compatible to.
Compatible means we can switch between methods without requiring a purge or
a need to warn the user.

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:114

___

### description

• `Readonly` **description**: `string`

Short description of the activator and it's pros/cons

**`memberof`** IDeploymentMethod

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:130

___

### id

• `Readonly` **id**: `string`

id of the activator for lookup in code

**`memberof`** IDeploymentMethod

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:107

___

### isFallbackPurgeSafe

• `Readonly` **isFallbackPurgeSafe**: `boolean`

true if it's "safe" to purge files from this method from another instance,
that is: without knowing where the "original" files are.

**`memberof`** IDeploymentMethod

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:139

___

### name

• `Readonly` **name**: `string`

name of this activator as presented to the user

**`memberof`** IDeploymentMethod

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:122

___

### noRedundancy

• `Optional` `Readonly` **noRedundancy**: `boolean`

if true, no redundancy check is made for this deployment.
For cases where the redundancy check wouldn't work correctly

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:150

___

### priority

• `Readonly` **priority**: `number`

low value means: prefer this method over those with higher value

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:144

## Methods

### activate

▸ **activate**(`sourcePath`, `sourceName`, `deployPath`, `blackList`): [`Promise`](../classes/Promise.md)<`void`\>

activate the specified mod in the specified location

**`memberof`** IDeploymentMethod

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourcePath` | `string` | source where the mod is installed |
| `sourceName` | `string` | name to be stored as the source of files. usually the path of the                            mod subdirectory |
| `deployPath` | `string` | relative path within the data path where mods are installed to |
| `blackList` | `Set`<`string`\> | - |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:244

___

### cancel

▸ `Optional` **cancel**(`gameId`, `dataPath`, `installationPath`): [`Promise`](../classes/Promise.md)<`void`\>

if defined, this gets called instead of finalize if an error occurred since prepare was called.
This allows the deployment method to reset all state without actually doing anything in case
things went wrong.
If this is not defined, nothing gets called. In this case the deployment method can't have any
state set up in prepare that would cause issues if finalize doesn't get called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |
| `dataPath` | `string` |
| `installationPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:230

___

### deactivate

▸ **deactivate**(`sourcePath`, `dataPath`, `sourceName`): [`Promise`](../classes/Promise.md)<`void`\>

deactivate the specified mod, removing all files it has deployed to the destination

**`todo`** sorry about the stupid parameter order, sourceName was added after release so to
  remain backwards compatible we have to append it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourcePath` | `string` | source where the mod is installed |
| `dataPath` | `string` | relative path within the data path where mods are installed to |
| `sourceName` | `string` | name of the source mod |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:256

___

### detailedDescription

▸ **detailedDescription**(`t`): `string`

returns more extensive description/explanation of the activator.

**`memberof`** IDeploymentMethod

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `TFunction` |

#### Returns

`string`

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:158

___

### externalChanges

▸ **externalChanges**(`gameId`, `installPath`, `dataPath`, `activation`): [`Promise`](../classes/Promise.md)<[`IFileChange`](types.IFileChange.md)[]\>

retrieve list of external changes, that is: files that were installed by this
activator but have been changed since then by an external application.

**`memberof`** IDeploymentMethod

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameId` | `string` | - |
| `installPath` | `string` | Vortex path where mods are installed from (source) |
| `dataPath` | `string` | game path where mods are installed to (destination) |
| `activation` | [`IDeployedFile`](types.IDeployedFile.md)[] | - |

#### Returns

[`Promise`](../classes/Promise.md)<[`IFileChange`](types.IFileChange.md)[]\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:298

___

### finalize

▸ **finalize**(`gameId`, `dataPath`, `installationPath`, `progressCB?`): [`Promise`](../classes/Promise.md)<[`IDeployedFile`](types.IDeployedFile.md)[]\>

called after an activate call was made for all active mods,
in case this activator needs to do postprocessing

**`memberof`** IDeploymentMethod

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |
| `dataPath` | `string` |
| `installationPath` | `string` |
| `progressCB?` | (`files`: `number`, `total`: `number`) => `void` |

#### Returns

[`Promise`](../classes/Promise.md)<[`IDeployedFile`](types.IDeployedFile.md)[]\>

a promise of activation results. These results will be used for a "purge"
           in case the activator isn't available for the regular purge op.
           If a purge isn't necessary, i.e. because the links are transient anyway, please
           just return an empty list.
           Please note that this purge will happen with a regular file deletion call,
           if this could lead to data loss do NOT return anything here. In that case you
           should provide another way for the user to clean up the game directory even when
           your activator is not available for some reason.

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:218

___

### getDeployedPath

▸ **getDeployedPath**(`input`): `string`

given a file path (relative to a staging path), return the name under which the
file would be deployed.
This is used in cases where the deployment method may rename files during
deployment for whatever reason.
An example would be move deployment where the file that remains in the staging
folder is just a (differently named) placeholder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:309

___

### isDeployed

▸ **isDeployed**(`installPath`, `dataPath`, `file`): [`Promise`](../classes/Promise.md)<`boolean`\>

test if the specified file is deployed through this methed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `installPath` | `string` | Vortex path where mods are installed from (source) |
| `dataPath` | `string` | game path where mods are installed to (destination) |
| `file` | [`IDeployedFile`](types.IDeployedFile.md) | - |

#### Returns

[`Promise`](../classes/Promise.md)<`boolean`\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:316

___

### isSupported

▸ **isSupported**(`state`, `gameId`, `modTypeId`): [`IUnavailableReason`](types.IUnavailableReason.md)

determine if this activator is supported in the current environment
If the activator is supported, returns undefined. Otherwise a string
that explains why the activator isn't available.

synchronous 'cause lazy.

**`memberof`** IDeploymentMethod

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |
| `gameId` | `string` |
| `modTypeId` | `string` |

#### Returns

[`IUnavailableReason`](types.IUnavailableReason.md)

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:169

___

### onSelected

▸ `Optional` **onSelected**(`api`): [`Promise`](../classes/Promise.md)<`void`\>

called before the deployment method is selected. Primary use is to show usage instructions
the user needs to know before using it

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`IExtensionApi`](types.IExtensionApi.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:183

___

### postPurge

▸ **postPurge**(): [`Promise`](../classes/Promise.md)<`void`\>

called after mods were purged. If multiple mod types wer purged, this is only called
after they are all done.
Like prePurge, this is intended for optimizations

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:288

___

### prePurge

▸ **prePurge**(`installPath`): [`Promise`](../classes/Promise.md)<`void`\>

called before mods are being purged. If multiple mod types are going to be purged,
this is only called once.
This is primarily useful for optimization, to avoid work being done redundantly
for every modtype-purge

#### Parameters

| Name | Type |
| :------ | :------ |
| `installPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:264

___

### prepare

▸ **prepare**(`dataPath`, `clean`, `lastActivation`, `normalize`): [`Promise`](../classes/Promise.md)<`void`\>

called before any calls to activate/deactivate, in case the
activator needs to do pre-processing

**`memberof`** IDeploymentMethod

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dataPath` | `string` | the path where files will be deployed to |
| `clean` | `boolean` | whether the activate commands should be treated                        as deltas (false) to the existing activation or whether                        we're deploying from scratch (true) |
| `lastActivation` | [`IDeployedFile`](types.IDeployedFile.md)[] | previous deployment state to be used as                                         the reference for newly deployed files |
| `normalize` | [`Normalize`](../modules/util.md#normalize) | a path normalization function. This needs to be used                              when comparing strings against the blacklist or when storing                              relative path into the deployment manifest |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:200

___

### purge

▸ **purge**(`installPath`, `dataPath`, `gameId?`, `onProgress?`): [`Promise`](../classes/Promise.md)<`void`\>

deactivate all mods at the destination location

**`memberof`** IDeploymentMethod

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `installPath` | `string` | Vortex path where mods are installed from (source) |
| `dataPath` | `string` | game paths where mods are installed to (destination) |
| `gameId?` | `string` | id for the game to purge |
| `onProgress?` | (`num`: `number`, `total`: `number`) => `void` | progress callback. Doesn't have to be used, won't always be                            supplied Vortex itself does not keep track which files were installed by the activator so if the activator can not discover those automatically it it has to do its own bookkeeping. The LinkingActivator base-class does implement such bookkeeping however. |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:280

___

### userGate

▸ **userGate**(): [`Promise`](../classes/Promise.md)<`void`\>

if mod deployment in some way requires user interaction we should give the user control
over the process, even if he has auto-deploy active

**`memberof`** IDeploymentMethod

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:177
