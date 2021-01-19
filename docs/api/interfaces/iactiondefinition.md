**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IActionDefinition

# Interface: IActionDefinition

interface of an action within one of the icon bars

**`export`** 

**`interface`** IActionDefinition

## Hierarchy

* **IActionDefinition**

  ↳ [IActionDefinitionEx](iactiondefinitionex.md)

  ↳ [ITableRowAction](itablerowaction.md)

## Index

### Properties

* [action](iactiondefinition.md#action)
* [component](iactiondefinition.md#component)
* [condition](iactiondefinition.md#condition)
* [default](iactiondefinition.md#default)
* [icon](iactiondefinition.md#icon)
* [options](iactiondefinition.md#options)
* [position](iactiondefinition.md#position)
* [props](iactiondefinition.md#props)
* [title](iactiondefinition.md#title)

## Properties

### action

• `Optional` **action**: (instanceId: string \| string[]) => void

*Defined in Work/vortex/src/types/IActionDefinition.ts:19*

___

### component

• `Optional` **component**: ComponentClass\<any> \| React.StatelessComponent\<any>

*Defined in Work/vortex/src/types/IActionDefinition.ts:17*

___

### condition

• `Optional` **condition**: (instanceId: string \| string[]) => boolean \| string

*Defined in Work/vortex/src/types/IActionDefinition.ts:26*

___

### default

• `Optional` **default**: boolean

*Defined in Work/vortex/src/types/IActionDefinition.ts:32*

___

### icon

• `Optional` **icon**: string

*Defined in Work/vortex/src/types/IActionDefinition.ts:15*

___

### options

• `Optional` **options**: [IActionOptions](iactionoptions.md)

*Defined in Work/vortex/src/types/IActionDefinition.ts:28*

___

### position

• `Optional` **position**: number

*Defined in Work/vortex/src/types/IActionDefinition.ts:27*

___

### props

• `Optional` **props**: () => any

*Defined in Work/vortex/src/types/IActionDefinition.ts:18*

___

### title

• `Optional` **title**: string

*Defined in Work/vortex/src/types/IActionDefinition.ts:16*
