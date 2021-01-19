**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ITableFilter

# Interface: ITableFilter

## Hierarchy

* **ITableFilter**

## Implemented by

* [DateTimeFilter](../classes/datetimefilter.md)
* [NumericFilter](../classes/numericfilter.md)
* [OptionsFilter](../classes/optionsfilter.md)
* [TextFilter](../classes/textfilter.md)

## Index

### Properties

* [component](itablefilter.md#component)
* [dataId](itablefilter.md#dataid)
* [isEmpty](itablefilter.md#isempty)
* [matches](itablefilter.md#matches)
* [raw](itablefilter.md#raw)

## Properties

### component

•  **component**: ComponentClass\<[IFilterProps](ifilterprops.md)>

*Defined in Work/vortex/src/types/ITableAttribute.ts:38*

___

### dataId

• `Optional` **dataId**: string

*Defined in Work/vortex/src/types/ITableAttribute.ts:39*

___

### isEmpty

• `Optional` **isEmpty**: (filter: any) => boolean

*Defined in Work/vortex/src/types/ITableAttribute.ts:36*

return true if the specified filter will not filter out any elements
if not specified the filter will be assumed to be "empty" if it's not truthy

___

### matches

•  **matches**: (filter: any, value: any, state: any) => boolean

*Defined in Work/vortex/src/types/ITableAttribute.ts:31*

return true if value matches the filter

___

### raw

•  **raw**: string \| boolean

*Defined in Work/vortex/src/types/ITableAttribute.ts:37*
