[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IActionDefinition

# Interface: IActionDefinition

[types](../modules/types.md).IActionDefinition

interface of an action within one of the icon bars

**`export`** 

**`interface`** IActionDefinition

## Hierarchy

* **IActionDefinition**

  ↳ [*ITableRowAction*](itablerowaction.md)

## Table of contents

### Properties

- [action](types.iactiondefinition.md#action)
- [component](types.iactiondefinition.md#component)
- [condition](types.iactiondefinition.md#condition)
- [default](types.iactiondefinition.md#default)
- [icon](types.iactiondefinition.md#icon)
- [options](types.iactiondefinition.md#options)
- [position](types.iactiondefinition.md#position)
- [props](types.iactiondefinition.md#props)
- [title](types.iactiondefinition.md#title)

## Properties

### action

• `Optional` **action**: (`instanceId`: *string* \| *string*[]) => *void*

#### Type declaration:

▸ (`instanceId`: *string* \| *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`instanceId` | *string* \| *string*[] |

**Returns:** *void*

Defined in: src/types/IActionDefinition.ts:20

Defined in: src/types/IActionDefinition.ts:20

___

### component

• `Optional` **component**: *ComponentType*<any\>

Defined in: src/types/IActionDefinition.ts:18

___

### condition

• `Optional` **condition**: (`instanceId`: *string* \| *string*[]) => *string* \| *boolean*

#### Type declaration:

▸ (`instanceId`: *string* \| *string*[]): *string* \| *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`instanceId` | *string* \| *string*[] |

**Returns:** *string* \| *boolean*

Defined in: src/types/IActionDefinition.ts:27

Defined in: src/types/IActionDefinition.ts:27

___

### default

• `Optional` **default**: *boolean*

Defined in: src/types/IActionDefinition.ts:33

___

### icon

• `Optional` **icon**: *string*

Defined in: src/types/IActionDefinition.ts:16

___

### options

• `Optional` **options**: [*IActionOptions*](types.iactionoptions.md)

Defined in: src/types/IActionDefinition.ts:29

___

### position

• `Optional` **position**: *number*

Defined in: src/types/IActionDefinition.ts:28

___

### props

• `Optional` **props**: () => *any*

#### Type declaration:

▸ (): *any*

**Returns:** *any*

Defined in: src/types/IActionDefinition.ts:19

Defined in: src/types/IActionDefinition.ts:19

___

### title

• `Optional` **title**: *string*

Defined in: src/types/IActionDefinition.ts:17
