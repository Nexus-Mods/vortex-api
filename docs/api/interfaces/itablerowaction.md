[vortex_devel](../README.md) / [Exports](../modules.md) / ITableRowAction

# Interface: ITableRowAction

## Hierarchy

* [*IActionDefinition*](types.iactiondefinition.md)

  ↳ **ITableRowAction**

## Table of contents

### Properties

- [action](itablerowaction.md#action)
- [component](itablerowaction.md#component)
- [condition](itablerowaction.md#condition)
- [default](itablerowaction.md#default)
- [hotKey](itablerowaction.md#hotkey)
- [icon](itablerowaction.md#icon)
- [multiRowAction](itablerowaction.md#multirowaction)
- [options](itablerowaction.md#options)
- [position](itablerowaction.md#position)
- [props](itablerowaction.md#props)
- [singleRowAction](itablerowaction.md#singlerowaction)
- [title](itablerowaction.md#title)

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

Inherited from: [IActionDefinition](types.iactiondefinition.md).[action](types.iactiondefinition.md#action)

Defined in: src/types/IActionDefinition.ts:20

___

### component

• `Optional` **component**: *ComponentType*<any\>

Inherited from: [IActionDefinition](types.iactiondefinition.md).[component](types.iactiondefinition.md#component)

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

Inherited from: [IActionDefinition](types.iactiondefinition.md).[condition](types.iactiondefinition.md#condition)

Defined in: src/types/IActionDefinition.ts:27

___

### default

• `Optional` **default**: *boolean*

Inherited from: [IActionDefinition](types.iactiondefinition.md).[default](types.iactiondefinition.md#default)

Defined in: src/types/IActionDefinition.ts:33

___

### hotKey

• `Optional` **hotKey**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`alt`? | *boolean* |
`code` | *number* |
`ctrl`? | *boolean* |
`shift`? | *boolean* |

Defined in: src/controls/Table.tsx:40

___

### icon

• `Optional` **icon**: *string*

Inherited from: [IActionDefinition](types.iactiondefinition.md).[icon](types.iactiondefinition.md#icon)

Defined in: src/types/IActionDefinition.ts:16

___

### multiRowAction

• `Optional` **multiRowAction**: *boolean*

Defined in: src/controls/Table.tsx:39

___

### options

• `Optional` **options**: [*IActionOptions*](types.iactionoptions.md)

Inherited from: [IActionDefinition](types.iactiondefinition.md).[options](types.iactiondefinition.md#options)

Defined in: src/types/IActionDefinition.ts:29

___

### position

• `Optional` **position**: *number*

Inherited from: [IActionDefinition](types.iactiondefinition.md).[position](types.iactiondefinition.md#position)

Defined in: src/types/IActionDefinition.ts:28

___

### props

• `Optional` **props**: () => *any*

#### Type declaration:

▸ (): *any*

**Returns:** *any*

Defined in: src/types/IActionDefinition.ts:19

Inherited from: [IActionDefinition](types.iactiondefinition.md).[props](types.iactiondefinition.md#props)

Defined in: src/types/IActionDefinition.ts:19

___

### singleRowAction

• `Optional` **singleRowAction**: *boolean*

Defined in: src/controls/Table.tsx:38

___

### title

• `Optional` **title**: *string*

Inherited from: [IActionDefinition](types.iactiondefinition.md).[title](types.iactiondefinition.md#title)

Defined in: src/types/IActionDefinition.ts:17
