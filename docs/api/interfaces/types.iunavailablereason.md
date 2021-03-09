[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IUnavailableReason

# Interface: IUnavailableReason

[types](../modules/types.md).IUnavailableReason

Indicates why a deployment method is unavailable an if it can be made to work

## Table of contents

### Properties

- [description](types.iunavailablereason.md#description)
- [fixCallback](types.iunavailablereason.md#fixcallback)
- [order](types.iunavailablereason.md#order)
- [solution](types.iunavailablereason.md#solution)

## Properties

### description

• **description**: (`t`: TFunction) => *string*

description (english) why the deployment method is unavailable

#### Type declaration:

▸ (`t`: TFunction): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`t` | TFunction |

**Returns:** *string*

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:81

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:81

___

### fixCallback

• `Optional` **fixCallback**: (`api`: [*IExtensionApi*](types.iextensionapi.md)) => [*Promise*](../classes/promise.md)<void\>

if the problem can be fixed automatically, this can be set to a function that takes care
of it

#### Type declaration:

▸ (`api`: [*IExtensionApi*](types.iextensionapi.md)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`api` | [*IExtensionApi*](types.iextensionapi.md) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:90

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:90

___

### order

• `Optional` **order**: *number*

When no method is supported, Vortex will offer possible solutions in this order.
It should indicate both how much effort the solution is and also a general preference for
this deployment methods so that the preferred method has a lower order number than others.

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:96

___

### solution

• `Optional` **solution**: (`t`: TFunction) => *string*

describes the solution to make this

#### Type declaration:

▸ (`t`: TFunction): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`t` | TFunction |

**Returns:** *string*

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:85

Defined in: src/extensions/mod_management/types/IDeploymentMethod.ts:85
