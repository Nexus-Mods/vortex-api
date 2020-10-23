**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IActionDefinitionEx

# Interface: IActionDefinitionEx

## Hierarchy

* [IActionDefinition](iactiondefinition.md)

  ↳ **IActionDefinitionEx**

## Index

### Properties

* [action](iactiondefinitionex.md#action)
* [component](iactiondefinitionex.md#component)
* [condition](iactiondefinitionex.md#condition)
* [default](iactiondefinitionex.md#default)
* [icon](iactiondefinitionex.md#icon)
* [options](iactiondefinitionex.md#options)
* [position](iactiondefinitionex.md#position)
* [props](iactiondefinitionex.md#props)
* [show](iactiondefinitionex.md#show)
* [title](iactiondefinitionex.md#title)

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

### icon

• `Optional` **icon**: string

*Inherited from [IActionDefinition](iactiondefinition.md).[icon](iactiondefinition.md#icon)*

*Defined in Work/vortex/src/types/IActionDefinition.ts:15*

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

### show

•  **show**: boolean \| string

*Defined in Work/vortex/src/controls/ActionControl.tsx:33*

___

### title

• `Optional` **title**: string

*Inherited from [IActionDefinition](iactiondefinition.md).[title](iactiondefinition.md#title)*

*Defined in Work/vortex/src/types/IActionDefinition.ts:16*
