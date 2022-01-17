[vortex_devel](../README.md) / [Exports](../modules.md) / TableNumericFilter

# Class: TableNumericFilter

## Implements

- [`ITableFilter`](../interfaces/types.ITableFilter.md)

## Table of contents

### Constructors

- [constructor](TableNumericFilter.md#constructor)

### Properties

- [component](TableNumericFilter.md#component)
- [raw](TableNumericFilter.md#raw)

### Methods

- [matches](TableNumericFilter.md#matches)

## Constructors

### constructor

• **new TableNumericFilter**()

## Properties

### component

• **component**: typeof `NumericFilterComponent` = `NumericFilterComponent`

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[component](../interfaces/types.ITableFilter.md#component)

#### Defined in

../src/controls/table/NumericFilter.tsx:87

___

### raw

• **raw**: `boolean` = `false`

this controls what value gets passed into the matches function, see the documentation there
for possible values

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[raw](../interfaces/types.ITableFilter.md#raw)

#### Defined in

../src/controls/table/NumericFilter.tsx:88

## Methods

### matches

▸ **matches**(`filter`, `input`): `boolean`

return true if value matches the filter

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |
| `input` | `number` |

#### Returns

`boolean`

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[matches](../interfaces/types.ITableFilter.md#matches)

#### Defined in

../src/controls/table/NumericFilter.tsx:90
