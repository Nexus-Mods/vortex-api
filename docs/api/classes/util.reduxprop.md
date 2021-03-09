[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / ReduxProp

# Class: ReduxProp<T\>

[util](../modules/util.md).ReduxProp

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Constructors

- [constructor](util.reduxprop.md#constructor)

### Properties

- [mApi](util.reduxprop.md#mapi)
- [mFunc](util.reduxprop.md#mfunc)
- [mInputs](util.reduxprop.md#minputs)
- [mSubscribers](util.reduxprop.md#msubscribers)
- [mUnsubscribe](util.reduxprop.md#munsubscribe)

### Methods

- [attach](util.reduxprop.md#attach)
- [calculate](util.reduxprop.md#calculate)
- [detach](util.reduxprop.md#detach)
- [subscribe](util.reduxprop.md#subscribe)
- [unsubscribe](util.reduxprop.md#unsubscribe)

## Constructors

### constructor

\+ **new ReduxProp**<T\>(`api`: [*IExtensionApi*](../interfaces/types.iextensionapi.md), `inputs`: *string*[][], `func`: (...`args`: *any*[]) => T): [*ReduxProp*](util.reduxprop.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`api` | [*IExtensionApi*](../interfaces/types.iextensionapi.md) |
`inputs` | *string*[][] |
`func` | (...`args`: *any*[]) => T |

**Returns:** [*ReduxProp*](util.reduxprop.md)<T\>

Defined in: src/util/ReduxProp.ts:9

## Properties

### mApi

• `Private` **mApi**: [*IExtensionApi*](../interfaces/types.iextensionapi.md)

Defined in: src/util/ReduxProp.ts:7

___

### mFunc

• `Private` **mFunc**: (...`args`: *any*[]) => T

#### Type declaration:

▸ (...`args`: *any*[]): T

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** T

Defined in: src/util/ReduxProp.ts:6

Defined in: src/util/ReduxProp.ts:6

___

### mInputs

• `Private` **mInputs**: *string*[][]

Defined in: src/util/ReduxProp.ts:5

___

### mSubscribers

• `Private` **mSubscribers**: *Component*<any, any, any\>[]

Defined in: src/util/ReduxProp.ts:8

___

### mUnsubscribe

• `Private` **mUnsubscribe**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: src/util/ReduxProp.ts:9

Defined in: src/util/ReduxProp.ts:9

## Methods

### attach

▸ **attach**(`component`: *Component*<any, any, any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`component` | *Component*<any, any, any\> |

**Returns:** *void*

Defined in: src/util/ReduxProp.ts:18

___

### calculate

▸ **calculate**(): T

**Returns:** T

Defined in: src/util/ReduxProp.ts:33

___

### detach

▸ **detach**(`component`: *Component*<any, any, any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`component` | *Component*<any, any, any\> |

**Returns:** *void*

Defined in: src/util/ReduxProp.ts:25

___

### subscribe

▸ `Private`**subscribe**(): *void*

**Returns:** *void*

Defined in: src/util/ReduxProp.ts:42

___

### unsubscribe

▸ `Private`**unsubscribe**(): *void*

**Returns:** *void*

Defined in: src/util/ReduxProp.ts:59
