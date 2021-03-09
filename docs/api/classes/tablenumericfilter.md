[vortex_devel](../README.md) / [Exports](../modules.md) / TableNumericFilter

# Class: TableNumericFilter

## Implements

* [*ITableFilter*](../interfaces/types.itablefilter.md)

## Table of contents

### Constructors

- [constructor](tablenumericfilter.md#constructor)

### Properties

- [component](tablenumericfilter.md#component)
- [raw](tablenumericfilter.md#raw)

### Methods

- [matches](tablenumericfilter.md#matches)

## Constructors

### constructor

\+ **new TableNumericFilter**(): [*TableNumericFilter*](tablenumericfilter.md)

**Returns:** [*TableNumericFilter*](tablenumericfilter.md)

## Properties

### component

• **component**: *typeof* NumericFilterComponent

Implementation of: [ITableFilter](../interfaces/types.itablefilter.md).[component](../interfaces/types.itablefilter.md#component)

Defined in: src/controls/table/NumericFilter.tsx:87

___

### raw

• **raw**: *boolean*= false

this controls what value gets passed into the matches function, see the documentation there
for possible values

Implementation of: [ITableFilter](../interfaces/types.itablefilter.md).[raw](../interfaces/types.itablefilter.md#raw)

Defined in: src/controls/table/NumericFilter.tsx:88

## Methods

### matches

▸ **matches**(`filter`: *any*, `input`: *number*): *boolean*

return true if value matches the filter

#### Parameters:

Name | Type |
:------ | :------ |
`filter` | *any* |
`input` | *number* |

**Returns:** *boolean*

Defined in: src/controls/table/NumericFilter.tsx:90
