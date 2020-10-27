**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ILoadOrderDisplayItem

# Interface: ILoadOrderDisplayItem

describes an item in the load order control.
This isn't just used for "display", the id is what gets stored to internally
save the load order

## Hierarchy

* **ILoadOrderDisplayItem**

## Index

### Properties

* [condition](iloadorderdisplayitem.md#condition)
* [contextMenuActions](iloadorderdisplayitem.md#contextmenuactions)
* [data](iloadorderdisplayitem.md#data)
* [external](iloadorderdisplayitem.md#external)
* [id](iloadorderdisplayitem.md#id)
* [imgUrl](iloadorderdisplayitem.md#imgurl)
* [invalid](iloadorderdisplayitem.md#invalid)
* [locked](iloadorderdisplayitem.md#locked)
* [message](iloadorderdisplayitem.md#message)
* [name](iloadorderdisplayitem.md#name)
* [official](iloadorderdisplayitem.md#official)
* [prefix](iloadorderdisplayitem.md#prefix)

## Properties

### condition

• `Optional` **condition**: (lhs: [ILoadOrderDisplayItem](iloadorderdisplayitem.md), rhs: [ILoadOrderDisplayItem](iloadorderdisplayitem.md), predictedResult: [ILoadOrderDisplayItem](iloadorderdisplayitem.md)[]) => [IDnDConditionResult](idndconditionresult.md)

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:126*

___

### contextMenuActions

• `Optional` **contextMenuActions**: [IActionDefinitionEx](iactiondefinitionex.md)[]

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:120*

___

### data

• `Optional` **data**: string

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:99*

___

### external

• `Optional` **external**: boolean

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:105*

___

### id

•  **id**: string

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:86*

___

### imgUrl

•  **imgUrl**: string

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:92*

___

### invalid

• `Optional` **invalid**: boolean

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:112*

___

### locked

• `Optional` **locked**: boolean

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:102*

___

### message

• `Optional` **message**: string

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:116*

___

### name

•  **name**: string

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:89*

___

### official

• `Optional` **official**: boolean

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:108*

___

### prefix

• `Optional` **prefix**: string

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:96*
