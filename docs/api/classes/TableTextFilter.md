[vortex_devel](../README.md) / [Exports](../modules.md) / TableTextFilter

# Class: TableTextFilter

## Implements

- [`ITableFilter`](../interfaces/types.ITableFilter.md)

## Table of contents

### Constructors

- [constructor](TableTextFilter.md#constructor)

### Properties

- [component](TableTextFilter.md#component)
- [mCaseInsensitive](TableTextFilter.md#mcaseinsensitive)
- [raw](TableTextFilter.md#raw)

### Methods

- [matches](TableTextFilter.md#matches)

## Constructors

### constructor

• **new TableTextFilter**(`ignoreCase`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignoreCase` | `boolean` |

#### Defined in

../src/controls/table/TextFilter.tsx:35

## Properties

### component

• **component**: typeof `TextFilterComponent` = `TextFilterComponent`

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[component](../interfaces/types.ITableFilter.md#component)

#### Defined in

../src/controls/table/TextFilter.tsx:30

___

### mCaseInsensitive

• `Private` **mCaseInsensitive**: `boolean`

#### Defined in

../src/controls/table/TextFilter.tsx:33

___

### raw

• **raw**: `boolean` = `false`

this controls what value gets passed into the matches function, see the documentation there
for possible values

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[raw](../interfaces/types.ITableFilter.md#raw)

#### Defined in

../src/controls/table/TextFilter.tsx:31

## Methods

### matches

▸ **matches**(`filter`, `value`): `boolean`

return true if value matches the filter

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |
| `value` | `any` |

#### Returns

`boolean`

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[matches](../interfaces/types.ITableFilter.md#matches)

#### Defined in

../src/controls/table/TextFilter.tsx:39
