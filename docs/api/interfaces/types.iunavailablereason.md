[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IUnavailableReason

# Interface: IUnavailableReason

[types](../modules/types.md).IUnavailableReason

Indicates why a deployment method is unavailable an if it can be made to work

## Table of contents

### Properties

- [order](types.IUnavailableReason.md#order)

### Methods

- [description](types.IUnavailableReason.md#description)
- [fixCallback](types.IUnavailableReason.md#fixcallback)
- [solution](types.IUnavailableReason.md#solution)

## Properties

### order

• `Optional` **order**: `number`

When no method is supported, Vortex will offer possible solutions in this order.
It should indicate both how much effort the solution is and also a general preference for
this deployment methods so that the preferred method has a lower order number than others.

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:96

## Methods

### description

▸ **description**(`t`): `string`

description (english) why the deployment method is unavailable

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `TFunction` |

#### Returns

`string`

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:81

___

### fixCallback

▸ `Optional` **fixCallback**(`api`): [`Promise`](../classes/Promise.md)<`void`\>

if the problem can be fixed automatically, this can be set to a function that takes care
of it

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`IExtensionApi`](types.IExtensionApi.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:90

___

### solution

▸ `Optional` **solution**(`t`): `string`

describes the solution to make this

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `TFunction` |

#### Returns

`string`

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:85
