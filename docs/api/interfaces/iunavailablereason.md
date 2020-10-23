**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IUnavailableReason

# Interface: IUnavailableReason

Indicates why a deployment method is unavailable an if it can be made to work

## Hierarchy

* **IUnavailableReason**

## Index

### Properties

* [description](iunavailablereason.md#description)
* [fixCallback](iunavailablereason.md#fixcallback)
* [order](iunavailablereason.md#order)
* [solution](iunavailablereason.md#solution)

## Properties

### description

•  **description**: (t: TFunction) => string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:81*

description (english) why the deployment method is unavailable

___

### fixCallback

• `Optional` **fixCallback**: (api: [IExtensionApi](iextensionapi.md)) => Promise\<void>

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:90*

if the problem can be fixed automatically, this can be set to a function that takes care
of it

___

### order

• `Optional` **order**: number

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:96*

When no method is supported, Vortex will offer possible solutions in this order.
It should indicate both how much effort the solution is and also a general preference for
this deployment methods so that the preferred method has a lower order number than others.

___

### solution

• `Optional` **solution**: (t: TFunction) => string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:85*

describes the solution to make this
