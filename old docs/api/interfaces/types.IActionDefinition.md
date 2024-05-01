[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IActionDefinition

# Interface: IActionDefinition

[types](../modules/types.md).IActionDefinition

interface of an action within one of the icon bars

**`export`**

**`interface`** IActionDefinition

## Hierarchy

- **`IActionDefinition`**

  ↳ [`ITableRowAction`](ITableRowAction.md)

## Table of contents

### Properties

- [component](types.IActionDefinition.md#component)
- [data](types.IActionDefinition.md#data)
- [default](types.IActionDefinition.md#default)
- [group](types.IActionDefinition.md#group)
- [icon](types.IActionDefinition.md#icon)
- [options](types.IActionDefinition.md#options)
- [position](types.IActionDefinition.md#position)
- [subMenus](types.IActionDefinition.md#submenus)
- [title](types.IActionDefinition.md#title)

### Methods

- [action](types.IActionDefinition.md#action)
- [condition](types.IActionDefinition.md#condition)
- [props](types.IActionDefinition.md#props)

## Properties

### component

• `Optional` **component**: `ComponentType`<`any`\>

#### Defined in

../src/types/IActionDefinition.ts:21

___

### data

• `Optional` **data**: `any`

#### Defined in

../src/types/IActionDefinition.ts:20

___

### default

• `Optional` **default**: `boolean`

#### Defined in

../src/types/IActionDefinition.ts:44

___

### group

• `Optional` **group**: `string`

#### Defined in

../src/types/IActionDefinition.ts:39

___

### icon

• `Optional` **icon**: `string`

#### Defined in

../src/types/IActionDefinition.ts:18

___

### options

• `Optional` **options**: [`IActionOptions`](types.IActionOptions.md)

#### Defined in

../src/types/IActionDefinition.ts:40

___

### position

• `Optional` **position**: `number`

#### Defined in

../src/types/IActionDefinition.ts:32

___

### subMenus

• `Optional` **subMenus**: [`ActionFunc`](../modules/types.md#actionfunc) \| [`IActionDefinition`](types.IActionDefinition.md)[]

#### Defined in

../src/types/IActionDefinition.ts:24

___

### title

• `Optional` **title**: `string`

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

#### Defined in

../src/types/IActionDefinition.ts:31

___

### props

▸ `Optional` **props**(): `any`

#### Returns

`any`

#### Defined in

../src/types/IActionDefinition.ts:22
