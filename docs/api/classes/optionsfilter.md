[vortex_devel](../README.md) / [Exports](../modules.md) / OptionsFilter

# Class: OptionsFilter

## Implements

* [*ITableFilter*](../interfaces/types.itablefilter.md)

## Table of contents

### Constructors

- [constructor](optionsfilter.md#constructor)

### Properties

- [component](optionsfilter.md#component)
- [mMulti](optionsfilter.md#mmulti)
- [raw](optionsfilter.md#raw)
- [EMPTY](optionsfilter.md#empty)

### Methods

- [isEmpty](optionsfilter.md#isempty)
- [matches](optionsfilter.md#matches)

## Constructors

### constructor

\+ **new OptionsFilter**(`options`: Options \| () => Options, `multi`: *boolean*, `raw?`: *boolean*): [*OptionsFilter*](optionsfilter.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | Options \| () => Options |
`multi` | *boolean* |
`raw?` | *boolean* |

**Returns:** [*OptionsFilter*](optionsfilter.md)

Defined in: src/controls/table/OptionsFilter.tsx:66

## Properties

### component

• **component**: *ComponentClass*<any, any\>

Implementation of: [ITableFilter](../interfaces/types.itablefilter.md).[component](../interfaces/types.itablefilter.md#component)

Defined in: src/controls/table/OptionsFilter.tsx:63

___

### mMulti

• `Private` **mMulti**: *boolean*

Defined in: src/controls/table/OptionsFilter.tsx:66

___

### raw

• **raw**: *boolean*= true

this controls what value gets passed into the matches function, see the documentation there
for possible values

Implementation of: [ITableFilter](../interfaces/types.itablefilter.md).[raw](../interfaces/types.itablefilter.md#raw)

Defined in: src/controls/table/OptionsFilter.tsx:64

___

### EMPTY

▪ `Static` **EMPTY**: *string*= '\_\_empty'

Defined in: src/controls/table/OptionsFilter.tsx:62

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

Defined in: src/controls/table/OptionsFilter.tsx:111

___

### matches

▸ **matches**(`filter`: *any*, `value`: *any*): *boolean*

return true if value matches the filter

#### Parameters:

Name | Type |
:------ | :------ |
`filter` | *any* |
`value` | *any* |

**Returns:** *boolean*

Defined in: src/controls/table/OptionsFilter.tsx:74
