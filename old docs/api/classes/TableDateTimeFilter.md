[vortex_devel](../README.md) / [Exports](../modules.md) / TableDateTimeFilter

# Class: TableDateTimeFilter

## Implements

- [`ITableFilter`](../interfaces/types.ITableFilter.md)

## Table of contents

### Constructors

- [constructor](TableDateTimeFilter.md#constructor)

### Properties

- [component](TableDateTimeFilter.md#component)
- [raw](TableDateTimeFilter.md#raw)

### Methods

- [isEmpty](TableDateTimeFilter.md#isempty)
- [matches](TableDateTimeFilter.md#matches)

## Constructors

### constructor

• **new TableDateTimeFilter**()

## Properties

### component

• **component**: typeof `DateTimeFilterComponent` = `DateTimeFilterComponent`

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[component](../interfaces/types.ITableFilter.md#component)

#### Defined in

../src/controls/table/DateTimeFilter.tsx:110

___

### raw

• **raw**: `boolean` = `false`

this controls what value gets passed into the matches function, see the documentation there
for possible values

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[raw](../interfaces/types.ITableFilter.md#raw)

#### Defined in

../src/controls/table/DateTimeFilter.tsx:111

## Methods

### isEmpty

▸ **isEmpty**(`filter`): `boolean`

return true if the specified filter will not filter out any elements
if not specified the filter will be assumed to be "empty" if it's not truthy

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |

#### Returns

`boolean`

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[isEmpty](../interfaces/types.ITableFilter.md#isempty)

#### Defined in

../src/controls/table/DateTimeFilter.tsx:131

___

### matches

▸ **matches**(`filter`, `input`): `boolean`

return true if value matches the filter

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |
| `input` | `any` |

#### Returns

`boolean`

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[matches](../interfaces/types.ITableFilter.md#matches)

#### Defined in

../src/controls/table/DateTimeFilter.tsx:113
