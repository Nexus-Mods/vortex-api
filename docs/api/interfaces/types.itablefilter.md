[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / ITableFilter

# Interface: ITableFilter

[types](../modules/types.md).ITableFilter

## Implemented by

* [*OptionsFilter*](../classes/optionsfilter.md)
* [*TableDateTimeFilter*](../classes/tabledatetimefilter.md)
* [*TableNumericFilter*](../classes/tablenumericfilter.md)
* [*TableTextFilter*](../classes/tabletextfilter.md)

## Table of contents

### Properties

- [component](types.itablefilter.md#component)
- [dataId](types.itablefilter.md#dataid)
- [isEmpty](types.itablefilter.md#isempty)
- [matches](types.itablefilter.md#matches)
- [raw](types.itablefilter.md#raw)

## Properties

### component

• **component**: *ComponentType*<[*IFilterProps*](types.ifilterprops.md)\>

Defined in: src/types/ITableAttribute.ts:57

___

### dataId

• `Optional` **dataId**: *string*

Defined in: src/types/ITableAttribute.ts:58

___

### isEmpty

• `Optional` **isEmpty**: (`filter`: *any*) => *boolean*

return true if the specified filter will not filter out any elements
if not specified the filter will be assumed to be "empty" if it's not truthy

#### Type declaration:

▸ (`filter`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`filter` | *any* |

**Returns:** *boolean*

Defined in: src/types/ITableAttribute.ts:51

Defined in: src/types/ITableAttribute.ts:51

___

### matches

• **matches**: (`filter`: *any*, `value`: *any*, `state`: *any*) => *boolean*

return true if value matches the filter

**`param`** the filter pattern to filter by

**`param`** the row value for the specified column

**`param`** application state, usually an IState object but may contain additional fields
             from extensions

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

#### Type declaration:

▸ (`filter`: *any*, `value`: *any*, `state`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`filter` | *any* |
`value` | *any* |
`state` | *any* |

**Returns:** *boolean*

Defined in: src/types/ITableAttribute.ts:46

Defined in: src/types/ITableAttribute.ts:46

___

### raw

• **raw**: *string* \| *boolean*

this controls what value gets passed into the matches function, see the documentation there
for possible values

Defined in: src/types/ITableAttribute.ts:56
