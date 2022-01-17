[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / ReduxProp

# Class: ReduxProp<T\>

[util](../modules/util.md).ReduxProp

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](util.ReduxProp.md#constructor)

### Properties

- [mApi](util.ReduxProp.md#mapi)
- [mFunc](util.ReduxProp.md#mfunc)
- [mInputs](util.ReduxProp.md#minputs)
- [mSubscribers](util.ReduxProp.md#msubscribers)
- [mUnsubscribe](util.ReduxProp.md#munsubscribe)

### Methods

- [attach](util.ReduxProp.md#attach)
- [calculate](util.ReduxProp.md#calculate)
- [detach](util.ReduxProp.md#detach)
- [subscribe](util.ReduxProp.md#subscribe)
- [unsubscribe](util.ReduxProp.md#unsubscribe)

## Constructors

### constructor

• **new ReduxProp**<`T`\>(`api`, `inputs`, `func`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`IExtensionApi`](../interfaces/types.IExtensionApi.md) |
| `inputs` | `string`[][] |
| `func` | (...`args`: `any`[]) => `T` |

#### Defined in

../src/util/ReduxProp.ts:11

## Properties

### mApi

• `Private` **mApi**: [`IExtensionApi`](../interfaces/types.IExtensionApi.md)

#### Defined in

../src/util/ReduxProp.ts:7

___

### mFunc

• `Private` **mFunc**: (...`args`: `any`[]) => `T`

#### Type declaration

▸ (...`args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T`

#### Defined in

../src/util/ReduxProp.ts:6

___

### mInputs

• `Private` **mInputs**: `string`[][]

#### Defined in

../src/util/ReduxProp.ts:5

___

### mSubscribers

• `Private` **mSubscribers**: `Component`<`any`, `any`, `any`\>[]

#### Defined in

../src/util/ReduxProp.ts:8

___

### mUnsubscribe

• `Private` **mUnsubscribe**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

../src/util/ReduxProp.ts:9

## Methods

### attach

▸ **attach**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `Component`<`any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

../src/util/ReduxProp.ts:18

___

### calculate

▸ **calculate**(): `T`

#### Returns

`T`

#### Defined in

../src/util/ReduxProp.ts:33

___

### detach

▸ **detach**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `Component`<`any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

../src/util/ReduxProp.ts:25

___

### subscribe

▸ `Private` **subscribe**(): `void`

#### Returns

`void`

#### Defined in

../src/util/ReduxProp.ts:42

___

### unsubscribe

▸ `Private` **unsubscribe**(): `void`

#### Returns

`void`

#### Defined in

../src/util/ReduxProp.ts:59
