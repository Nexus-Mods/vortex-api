**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ITableRowAction

# Interface: ITableRowAction

## Hierarchy

* [IActionDefinition](iactiondefinition.md)

  ↳ **ITableRowAction**

## Index

### Properties

* [action](itablerowaction.md#action)
* [component](itablerowaction.md#component)
* [condition](itablerowaction.md#condition)
* [default](itablerowaction.md#default)
* [hotKey](itablerowaction.md#hotkey)
* [icon](itablerowaction.md#icon)
* [multiRowAction](itablerowaction.md#multirowaction)
* [options](itablerowaction.md#options)
* [position](itablerowaction.md#position)
* [props](itablerowaction.md#props)
* [singleRowAction](itablerowaction.md#singlerowaction)
* [title](itablerowaction.md#title)

## Properties

### action

• `Optional` **action**: (instanceId: string \| string[]) => void

*Inherited from [IActionDefinition](iactiondefinition.md).[action](iactiondefinition.md#action)*

*Defined in Work/vortex/src/types/IActionDefinition.ts:19*

___

### component

• `Optional` **component**: ComponentClass\<any> \| React.StatelessComponent\<any>

*Inherited from [IActionDefinition](iactiondefinition.md).[component](iactiondefinition.md#component)*

*Defined in Work/vortex/src/types/IActionDefinition.ts:17*

___

### condition

• `Optional` **condition**: (instanceId: string \| string[]) => boolean \| string

*Inherited from [IActionDefinition](iactiondefinition.md).[condition](iactiondefinition.md#condition)*

*Defined in Work/vortex/src/types/IActionDefinition.ts:26*

___

### default

• `Optional` **default**: boolean

*Inherited from [IActionDefinition](iactiondefinition.md).[default](iactiondefinition.md#default)*

*Defined in Work/vortex/src/types/IActionDefinition.ts:32*

___

### hotKey

• `Optional` **hotKey**: { alt?: boolean ; code: number ; ctrl?: boolean ; shift?: boolean  }

*Defined in Work/vortex/src/controls/Table.tsx:41*

#### Type declaration:

Name | Type |
------ | ------ |
`alt?` | boolean |
`code` | number |
`ctrl?` | boolean |
`shift?` | boolean |

___

### icon

• `Optional` **icon**: string

*Inherited from [IActionDefinition](iactiondefinition.md).[icon](iactiondefinition.md#icon)*

*Defined in Work/vortex/src/types/IActionDefinition.ts:15*

___

### multiRowAction

• `Optional` **multiRowAction**: boolean

*Defined in Work/vortex/src/controls/Table.tsx:40*

___

### options

• `Optional` **options**: [IActionOptions](iactionoptions.md)

*Inherited from [IActionDefinition](iactiondefinition.md).[options](iactiondefinition.md#options)*

*Defined in Work/vortex/src/types/IActionDefinition.ts:28*

___

### position

• `Optional` **position**: number

*Inherited from [IActionDefinition](iactiondefinition.md).[position](iactiondefinition.md#position)*

*Defined in Work/vortex/src/types/IActionDefinition.ts:27*

___

### props

• `Optional` **props**: () => any

*Inherited from [IActionDefinition](iactiondefinition.md).[props](iactiondefinition.md#props)*

*Defined in Work/vortex/src/types/IActionDefinition.ts:18*

___

### singleRowAction

• `Optional` **singleRowAction**: boolean

*Defined in Work/vortex/src/controls/Table.tsx:39*

___

### title

• `Optional` **title**: string

*Inherited from [IActionDefinition](iactiondefinition.md).[title](iactiondefinition.md#title)*

*Defined in Work/vortex/src/types/IActionDefinition.ts:16*
