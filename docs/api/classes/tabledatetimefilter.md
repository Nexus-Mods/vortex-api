[vortex_devel](../README.md) / [Exports](../modules.md) / TableDateTimeFilter

# Class: TableDateTimeFilter

## Implements

* [*ITableFilter*](../interfaces/types.itablefilter.md)

## Table of contents

### Constructors

- [constructor](tabledatetimefilter.md#constructor)

### Properties

- [component](tabledatetimefilter.md#component)
- [raw](tabledatetimefilter.md#raw)

### Methods

- [isEmpty](tabledatetimefilter.md#isempty)
- [matches](tabledatetimefilter.md#matches)

## Constructors

### constructor

\+ **new TableDateTimeFilter**(): [*TableDateTimeFilter*](tabledatetimefilter.md)

**Returns:** [*TableDateTimeFilter*](tabledatetimefilter.md)

## Properties

### component

• **component**: *typeof* DateTimeFilterComponent

Implementation of: [ITableFilter](../interfaces/types.itablefilter.md).[component](../interfaces/types.itablefilter.md#component)

Defined in: src/controls/table/DateTimeFilter.tsx:103

___

### raw

• **raw**: *boolean*= false

this controls what value gets passed into the matches function, see the documentation there
for possible values

Implementation of: [ITableFilter](../interfaces/types.itablefilter.md).[raw](../interfaces/types.itablefilter.md#raw)

Defined in: src/controls/table/DateTimeFilter.tsx:104

## Methods

### isEmpty

▸ **isEmpty**(`filter`: *any*): *boolean*

return true if the specified filter will not filter out any elements
if not specified the filter will be assumed to be "empty" if it's not truthy

#### Parameters:

Name | Type |
:------ | :------ |
`filter` | *any* |

**Returns:** *boolean*

Defined in: src/controls/table/DateTimeFilter.tsx:124

___

### matches

▸ **matches**(`filter`: *any*, `input`: *any*): *boolean*

return true if value matches the filter

#### Parameters:

Name | Type |
:------ | :------ |
`filter` | *any* |
`input` | *any* |

**Returns:** *boolean*

Defined in: src/controls/table/DateTimeFilter.tsx:106
