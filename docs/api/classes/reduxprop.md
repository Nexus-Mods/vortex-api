**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ReduxProp

# Class: ReduxProp\<T>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* **ReduxProp**

## Index

### Constructors

* [constructor](reduxprop.md#constructor)

### Properties

* [mApi](reduxprop.md#mapi)
* [mFunc](reduxprop.md#mfunc)
* [mInputs](reduxprop.md#minputs)
* [mSubscribers](reduxprop.md#msubscribers)
* [mUnsubscribe](reduxprop.md#munsubscribe)

### Methods

* [attach](reduxprop.md#attach)
* [calculate](reduxprop.md#calculate)
* [detach](reduxprop.md#detach)
* [subscribe](reduxprop.md#subscribe)
* [unsubscribe](reduxprop.md#unsubscribe)

## Constructors

### constructor

\+ **new ReduxProp**(`api`: [IExtensionApi](../interfaces/iextensionapi.md), `inputs`: string[][], `func`: (...args: any[]) => T): [ReduxProp](reduxprop.md)

*Defined in Work/vortex/src/util/ReduxProp.ts:9*

#### Parameters:

Name | Type |
------ | ------ |
`api` | [IExtensionApi](../interfaces/iextensionapi.md) |
`inputs` | string[][] |
`func` | (...args: any[]) => T |

**Returns:** [ReduxProp](reduxprop.md)

## Properties

### mApi

• `Private` **mApi**: [IExtensionApi](../interfaces/iextensionapi.md)

*Defined in Work/vortex/src/util/ReduxProp.ts:7*

___

### mFunc

• `Private` **mFunc**: (...args: any[]) => T

*Defined in Work/vortex/src/util/ReduxProp.ts:6*

___

### mInputs

• `Private` **mInputs**: string[][]

*Defined in Work/vortex/src/util/ReduxProp.ts:5*

___

### mSubscribers

• `Private` **mSubscribers**: Array\<Component\<any, any>>

*Defined in Work/vortex/src/util/ReduxProp.ts:8*

___

### mUnsubscribe

• `Private` **mUnsubscribe**: () => void

*Defined in Work/vortex/src/util/ReduxProp.ts:9*

## Methods

### attach

▸ **attach**(`component`: Component\<any, any>): void

*Defined in Work/vortex/src/util/ReduxProp.ts:18*

#### Parameters:

Name | Type |
------ | ------ |
`component` | Component\<any, any> |

**Returns:** void

___

### calculate

▸ **calculate**(): T

*Defined in Work/vortex/src/util/ReduxProp.ts:33*

**Returns:** T

___

### detach

▸ **detach**(`component`: Component\<any, any>): void

*Defined in Work/vortex/src/util/ReduxProp.ts:25*

#### Parameters:

Name | Type |
------ | ------ |
`component` | Component\<any, any> |

**Returns:** void

___

### subscribe

▸ `Private`**subscribe**(): void

*Defined in Work/vortex/src/util/ReduxProp.ts:42*

**Returns:** void

___

### unsubscribe

▸ `Private`**unsubscribe**(): void

*Defined in Work/vortex/src/util/ReduxProp.ts:59*

**Returns:** void
