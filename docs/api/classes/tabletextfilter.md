[vortex_devel](../README.md) / [Exports](../modules.md) / TableTextFilter

# Class: TableTextFilter

## Implements

* [*ITableFilter*](../interfaces/types.itablefilter.md)

## Table of contents

### Constructors

- [constructor](tabletextfilter.md#constructor)

### Properties

- [component](tabletextfilter.md#component)
- [mCaseInsensitive](tabletextfilter.md#mcaseinsensitive)
- [raw](tabletextfilter.md#raw)

### Methods

- [matches](tabletextfilter.md#matches)

## Constructors

### constructor

\+ **new TableTextFilter**(`ignoreCase`: *boolean*): [*TableTextFilter*](tabletextfilter.md)

#### Parameters:

Name | Type |
:------ | :------ |
`ignoreCase` | *boolean* |

**Returns:** [*TableTextFilter*](tabletextfilter.md)

Defined in: src/controls/table/TextFilter.tsx:33

## Properties

### component

• **component**: *typeof* TextFilterComponent

Implementation of: [ITableFilter](../interfaces/types.itablefilter.md).[component](../interfaces/types.itablefilter.md#component)

Defined in: src/controls/table/TextFilter.tsx:30

___

### mCaseInsensitive

• `Private` **mCaseInsensitive**: *boolean*

Defined in: src/controls/table/TextFilter.tsx:33

___

### raw

• **raw**: *boolean*= false

this controls what value gets passed into the matches function, see the documentation there
for possible values

Implementation of: [ITableFilter](../interfaces/types.itablefilter.md).[raw](../interfaces/types.itablefilter.md#raw)

Defined in: src/controls/table/TextFilter.tsx:31

## Methods

### matches

▸ **matches**(`filter`: *any*, `value`: *any*): *boolean*

return true if value matches the filter

#### Parameters:

Name | Type |
:------ | :------ |
`filter` | *any* |
`value` | *any* |

**Returns:** *boolean*

Defined in: src/controls/table/TextFilter.tsx:39
