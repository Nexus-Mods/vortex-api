[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / ITableFilter

# Interface: ITableFilter

[types](../modules/types.md).ITableFilter

## Implemented by

- [`OptionsFilter`](../classes/OptionsFilter.md)
- [`TableDateTimeFilter`](../classes/TableDateTimeFilter.md)
- [`TableNumericFilter`](../classes/TableNumericFilter.md)
- [`TableTextFilter`](../classes/TableTextFilter.md)

## Table of contents

### Properties

- [component](types.ITableFilter.md#component)
- [dataId](types.ITableFilter.md#dataid)
- [raw](types.ITableFilter.md#raw)

### Methods

- [isEmpty](types.ITableFilter.md#isempty)
- [matches](types.ITableFilter.md#matches)

## Properties

### component

• **component**: `ComponentType`<[`IFilterProps`](types.IFilterProps.md)\>

#### Defined in

../src/types/ITableAttribute.ts:58

___

### dataId

• `Optional` **dataId**: `string`

specifies which property of the object to filter on, meaning that obj[dataId] will be passed
to the "matches" function as the value to filter by.
This can be $ (a single dollar sign) to get the object itself

#### Defined in

../src/types/ITableAttribute.ts:64

___

### raw

• **raw**: `string` \| `boolean`

this controls what value gets passed into the matches function, see the documentation there
for possible values

#### Defined in

../src/types/ITableAttribute.ts:57

## Methods

### isEmpty

▸ `Optional` **isEmpty**(`filter`): `boolean`

return true if the specified filter will not filter out any elements
if not specified the filter will be assumed to be "empty" if it's not truthy

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |

#### Returns

`boolean`

#### Defined in

../src/types/ITableAttribute.ts:52

___

### matches

▸ **matches**(`filter`, `value`, `state`): `boolean`

return true if value matches the filter

**`note`** the raw parameter controls what value actually gets passed into matches. If raw is false,
      value will be the output of the calc function of the ITableAttribute.
      If raw is true, value will be the raw value of the table item where the name matches
      the table attribute. So if the table attribute has id "name" then value would be
      tableitem["name"]. If raw is a string, that is used instead of the table attribute id.
      If ITableAttribute.calc doesn't simply transform an attribute of the item but consults
      a separate data source, you have to set raw to false, there is no way to get correct
      results otherwise.
      If calc returns localized strings for example you will want to use raw, generally it
      is often simpler to deal with raw values (true instead of "Enabled")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `any` | the filter pattern to filter by |
| `value` | `any` | the row value for the specified column |
| `state` | `any` | application state, usually an IState object but may contain additional fields              from extensions |

#### Returns

`boolean`

#### Defined in

../src/types/ITableAttribute.ts:47
