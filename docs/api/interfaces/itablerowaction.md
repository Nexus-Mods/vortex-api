[vortex_devel](../README.md) / [Exports](../modules.md) / ITableRowAction

# Interface: ITableRowAction

## Hierarchy

- [`IActionDefinition`](types.IActionDefinition.md)

  ↳ **`ITableRowAction`**

## Table of contents

### Properties

- [component](ITableRowAction.md#component)
- [data](ITableRowAction.md#data)
- [default](ITableRowAction.md#default)
- [group](ITableRowAction.md#group)
- [hotKey](ITableRowAction.md#hotkey)
- [icon](ITableRowAction.md#icon)
- [multiRowAction](ITableRowAction.md#multirowaction)
- [options](ITableRowAction.md#options)
- [position](ITableRowAction.md#position)
- [singleRowAction](ITableRowAction.md#singlerowaction)
- [subMenus](ITableRowAction.md#submenus)
- [title](ITableRowAction.md#title)

### Methods

- [action](ITableRowAction.md#action)
- [condition](ITableRowAction.md#condition)
- [props](ITableRowAction.md#props)

## Properties

### component

• `Optional` **component**: `ComponentType`<`any`\>

#### Inherited from

[IActionDefinition](types.IActionDefinition.md).[component](types.IActionDefinition.md#component)

#### Defined in

../src/types/IActionDefinition.ts:21

___

### data

• `Optional` **data**: `any`

#### Inherited from

[IActionDefinition](types.IActionDefinition.md).[data](types.IActionDefinition.md#data)

#### Defined in

../src/types/IActionDefinition.ts:20

___

### default

• `Optional` **default**: `boolean`

#### Inherited from

[IActionDefinition](types.IActionDefinition.md).[default](types.IActionDefinition.md#default)

#### Defined in

../src/types/IActionDefinition.ts:44

___

### group

• `Optional` **group**: `string`

#### Inherited from

[IActionDefinition](types.IActionDefinition.md).[group](types.IActionDefinition.md#group)

#### Defined in

../src/types/IActionDefinition.ts:39

___

### hotKey

• `Optional` **hotKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alt?` | `boolean` |
| `code` | `number` |
| `ctrl?` | `boolean` |
| `shift?` | `boolean` |

#### Defined in

../src/controls/Table.tsx:40

___

### icon

• `Optional` **icon**: `string`

#### Inherited from

[IActionDefinition](types.IActionDefinition.md).[icon](types.IActionDefinition.md#icon)

#### Defined in

../src/types/IActionDefinition.ts:18

___

### multiRowAction

• `Optional` **multiRowAction**: `boolean`

#### Defined in

../src/controls/Table.tsx:39

___

### options

• `Optional` **options**: [`IActionOptions`](types.IActionOptions.md)

#### Inherited from

[IActionDefinition](types.IActionDefinition.md).[options](types.IActionDefinition.md#options)

#### Defined in

../src/types/IActionDefinition.ts:40

___

### position

• `Optional` **position**: `number`

#### Inherited from

[IActionDefinition](types.IActionDefinition.md).[position](types.IActionDefinition.md#position)

#### Defined in

../src/types/IActionDefinition.ts:32

___

### singleRowAction

• `Optional` **singleRowAction**: `boolean`

#### Defined in

../src/controls/Table.tsx:38

___

### subMenus

• `Optional` **subMenus**: [`ITableRowAction`](ITableRowAction.md)[]

#### Overrides

[IActionDefinition](types.IActionDefinition.md).[subMenus](types.IActionDefinition.md#submenus)

#### Defined in

../src/controls/Table.tsx:41

___

### title

• `Optional` **title**: `string`

#### Inherited from

[IActionDefinition](types.IActionDefinition.md).[title](types.IActionDefinition.md#title)

#### Defined in

../src/types/IActionDefinition.ts:19

## Methods

### action

▸ `Optional` **action**(`instanceId`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceId` | `string` \| `string`[] |
| `data?` | `any` |

#### Returns

`void`

#### Inherited from

[IActionDefinition](types.IActionDefinition.md).[action](types.IActionDefinition.md#action)

#### Defined in

../src/types/IActionDefinition.ts:23

___

### condition

▸ `Optional` **condition**(`instanceId`, `data?`): `string` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceId` | `string` \| `string`[] |
| `data?` | `any` |

#### Returns

`string` \| `boolean`

#### Inherited from

[IActionDefinition](types.IActionDefinition.md).[condition](types.IActionDefinition.md#condition)

#### Defined in

../src/types/IActionDefinition.ts:31

___

### props

▸ `Optional` **props**(): `any`

#### Returns

`any`

#### Inherited from

[IActionDefinition](types.IActionDefinition.md).[props](types.IActionDefinition.md#props)

#### Defined in

../src/types/IActionDefinition.ts:22
