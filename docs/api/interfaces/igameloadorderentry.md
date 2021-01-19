**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IGameLoadOrderEntry

# Interface: IGameLoadOrderEntry

## Hierarchy

* **IGameLoadOrderEntry**

## Index

### Properties

* [callback](igameloadorderentry.md#callback)
* [createInfoPanel](igameloadorderentry.md#createinfopanel)
* [displayCheckboxes](igameloadorderentry.md#displaycheckboxes)
* [filter](igameloadorderentry.md#filter)
* [gameArtURL](igameloadorderentry.md#gamearturl)
* [gameId](igameloadorderentry.md#gameid)
* [itemRenderer](igameloadorderentry.md#itemrenderer)
* [preSort](igameloadorderentry.md#presort)

## Properties

### callback

• `Optional` **callback**: (loadOrder: [ILoadOrder](iloadorder.md), updateType?: [UpdateType](../globals.md#updatetype)) => void

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:161*

___

### createInfoPanel

•  **createInfoPanel**: (props: [IInfoPanelProps](iinfopanelprops.md)) => string \| Component

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:147*

___

### displayCheckboxes

• `Optional` **displayCheckboxes**: boolean

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:142*

___

### filter

• `Optional` **filter**: (mods: IMod[]) => IMod[]

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:157*

___

### gameArtURL

•  **gameArtURL**: string

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:136*

___

### gameId

•  **gameId**: string

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:133*

___

### itemRenderer

• `Optional` **itemRenderer**: ComponentClass\<{ className?: string ; item: [ILoadOrderDisplayItem](iloadorderdisplayitem.md) ; onRef: (ref: any) => any  }>

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:165*

___

### preSort

• `Optional` **preSort**: (items: [ILoadOrderDisplayItem](iloadorderdisplayitem.md)[], sortDir: [SortType](../globals.md#sorttype), updateType?: [UpdateType](../globals.md#updatetype)) => Promise\<[ILoadOrderDisplayItem](iloadorderdisplayitem.md)[]>

*Defined in Work/vortex/src/extensions/mod_load_order/types/types.ts:151*
