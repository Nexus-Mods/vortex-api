[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / ILoadOrderDisplayItem

# Interface: ILoadOrderDisplayItem

[types](../modules/types.md).ILoadOrderDisplayItem

describes an item in the load order control.
This isn't just used for "display", the id is what gets stored to internally
save the load order

## Table of contents

### Properties

- [condition](types.iloadorderdisplayitem.md#condition)
- [contextMenuActions](types.iloadorderdisplayitem.md#contextmenuactions)
- [data](types.iloadorderdisplayitem.md#data)
- [external](types.iloadorderdisplayitem.md#external)
- [id](types.iloadorderdisplayitem.md#id)
- [imgUrl](types.iloadorderdisplayitem.md#imgurl)
- [locked](types.iloadorderdisplayitem.md#locked)
- [message](types.iloadorderdisplayitem.md#message)
- [name](types.iloadorderdisplayitem.md#name)
- [official](types.iloadorderdisplayitem.md#official)
- [prefix](types.iloadorderdisplayitem.md#prefix)

## Properties

### condition

• `Optional` **condition**: (`lhs`: [*ILoadOrderDisplayItem*](types.iloadorderdisplayitem.md), `rhs`: [*ILoadOrderDisplayItem*](types.iloadorderdisplayitem.md), `predictedResult`: [*ILoadOrderDisplayItem*](types.iloadorderdisplayitem.md)[]) => IDnDConditionResult

#### Type declaration:

▸ (`lhs`: [*ILoadOrderDisplayItem*](types.iloadorderdisplayitem.md), `rhs`: [*ILoadOrderDisplayItem*](types.iloadorderdisplayitem.md), `predictedResult`: [*ILoadOrderDisplayItem*](types.iloadorderdisplayitem.md)[]): IDnDConditionResult

#### Parameters:

Name | Type |
:------ | :------ |
`lhs` | [*ILoadOrderDisplayItem*](types.iloadorderdisplayitem.md) |
`rhs` | [*ILoadOrderDisplayItem*](types.iloadorderdisplayitem.md) |
`predictedResult` | [*ILoadOrderDisplayItem*](types.iloadorderdisplayitem.md)[] |

**Returns:** IDnDConditionResult

Defined in: src/extensions/mod_load_order/types/types.ts:122

Defined in: src/extensions/mod_load_order/types/types.ts:122

___

### contextMenuActions

• `Optional` **contextMenuActions**: IActionDefinitionEx[]

Defined in: src/extensions/mod_load_order/types/types.ts:116

___

### data

• `Optional` **data**: *string*

Defined in: src/extensions/mod_load_order/types/types.ts:99

___

### external

• `Optional` **external**: *boolean*

Defined in: src/extensions/mod_load_order/types/types.ts:105

___

### id

• **id**: *string*

Defined in: src/extensions/mod_load_order/types/types.ts:86

___

### imgUrl

• **imgUrl**: *string*

Defined in: src/extensions/mod_load_order/types/types.ts:92

___

### locked

• `Optional` **locked**: *boolean*

Defined in: src/extensions/mod_load_order/types/types.ts:102

___

### message

• `Optional` **message**: *string*

Defined in: src/extensions/mod_load_order/types/types.ts:112

___

### name

• **name**: *string*

Defined in: src/extensions/mod_load_order/types/types.ts:89

___

### official

• `Optional` **official**: *boolean*

Defined in: src/extensions/mod_load_order/types/types.ts:108

___

### prefix

• `Optional` **prefix**: *string*

Defined in: src/extensions/mod_load_order/types/types.ts:96
