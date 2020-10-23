**[vortex_devel](../README.md)**

> [Globals](../globals.md) / TextFilter

# Class: TextFilter

## Hierarchy

* **TextFilter**

## Implements

* [ITableFilter](../interfaces/itablefilter.md)

## Index

### Constructors

* [constructor](textfilter.md#constructor)

### Properties

* [component](textfilter.md#component)
* [mCaseInsensitive](textfilter.md#mcaseinsensitive)
* [raw](textfilter.md#raw)

### Methods

* [matches](textfilter.md#matches)

## Constructors

### constructor

\+ **new TextFilter**(`ignoreCase`: boolean): [TextFilter](textfilter.md)

*Defined in Work/vortex/src/controls/table/TextFilter.tsx:32*

#### Parameters:

Name | Type |
------ | ------ |
`ignoreCase` | boolean |

**Returns:** [TextFilter](textfilter.md)

## Properties

### component

•  **component**: [TextFilterComponent](textfiltercomponent.md) = TextFilterComponent

*Implementation of [ITableFilter](../interfaces/itablefilter.md).[component](../interfaces/itablefilter.md#component)*

*Defined in Work/vortex/src/controls/table/TextFilter.tsx:29*

___

### mCaseInsensitive

• `Private` **mCaseInsensitive**: boolean

*Defined in Work/vortex/src/controls/table/TextFilter.tsx:32*

___

### raw

•  **raw**: boolean = false

*Implementation of [ITableFilter](../interfaces/itablefilter.md).[raw](../interfaces/itablefilter.md#raw)*

*Defined in Work/vortex/src/controls/table/TextFilter.tsx:30*

## Methods

### matches

▸ **matches**(`filter`: any, `value`: any): boolean

*Defined in Work/vortex/src/controls/table/TextFilter.tsx:38*

#### Parameters:

Name | Type |
------ | ------ |
`filter` | any |
`value` | any |

**Returns:** boolean
