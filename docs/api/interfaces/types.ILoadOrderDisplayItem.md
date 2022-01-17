[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / ILoadOrderDisplayItem

# Interface: ILoadOrderDisplayItem

[types](../modules/types.md).ILoadOrderDisplayItem

describes an item in the load order control.
This isn't just used for "display", the id is what gets stored to internally
save the load order

## Table of contents

### Properties

- [contextMenuActions](types.ILoadOrderDisplayItem.md#contextmenuactions)
- [data](types.ILoadOrderDisplayItem.md#data)
- [external](types.ILoadOrderDisplayItem.md#external)
- [id](types.ILoadOrderDisplayItem.md#id)
- [imgUrl](types.ILoadOrderDisplayItem.md#imgurl)
- [locked](types.ILoadOrderDisplayItem.md#locked)
- [message](types.ILoadOrderDisplayItem.md#message)
- [name](types.ILoadOrderDisplayItem.md#name)
- [official](types.ILoadOrderDisplayItem.md#official)
- [prefix](types.ILoadOrderDisplayItem.md#prefix)

### Methods

- [condition](types.ILoadOrderDisplayItem.md#condition)

## Properties

### contextMenuActions

• `Optional` **contextMenuActions**: `IActionDefinitionEx`[]

#### Defined in

../src/extensions/mod_load_order/types/types.ts:117

___

### data

• `Optional` **data**: `string`

#### Defined in

../src/extensions/mod_load_order/types/types.ts:100

___

### external

• `Optional` **external**: `boolean`

#### Defined in

../src/extensions/mod_load_order/types/types.ts:106

___

### id

• **id**: `string`

#### Defined in

../src/extensions/mod_load_order/types/types.ts:87

___

### imgUrl

• **imgUrl**: `string`

#### Defined in

../src/extensions/mod_load_order/types/types.ts:93

___

### locked

• `Optional` **locked**: `boolean`

#### Defined in

../src/extensions/mod_load_order/types/types.ts:103

___

### message

• `Optional` **message**: `string`

#### Defined in

../src/extensions/mod_load_order/types/types.ts:113

___

### name

• **name**: `string`

#### Defined in

../src/extensions/mod_load_order/types/types.ts:90

___

### official

• `Optional` **official**: `boolean`

#### Defined in

../src/extensions/mod_load_order/types/types.ts:109

___

### prefix

• `Optional` **prefix**: `string`

#### Defined in

../src/extensions/mod_load_order/types/types.ts:97

## Methods

### condition

▸ `Optional` **condition**(`lhs`, `rhs`, `predictedResult`): `IDnDConditionResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`ILoadOrderDisplayItem`](types.ILoadOrderDisplayItem.md) |
| `rhs` | [`ILoadOrderDisplayItem`](types.ILoadOrderDisplayItem.md) |
| `predictedResult` | [`ILoadOrderDisplayItem`](types.ILoadOrderDisplayItem.md)[] |

#### Returns

`IDnDConditionResult`

#### Defined in

../src/extensions/mod_load_order/types/types.ts:123
