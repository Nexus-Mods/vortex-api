[vortex_devel](../README.md) / [Exports](../modules.md) / OptionsFilter

# Class: OptionsFilter

## Implements

- [`ITableFilter`](../interfaces/types.ITableFilter.md)

## Table of contents

### Constructors

- [constructor](OptionsFilter.md#constructor)

### Properties

- [component](OptionsFilter.md#component)
- [mMulti](OptionsFilter.md#mmulti)
- [raw](OptionsFilter.md#raw)
- [EMPTY](OptionsFilter.md#empty)

### Methods

- [isEmpty](OptionsFilter.md#isempty)
- [matches](OptionsFilter.md#matches)

## Constructors

### constructor

• **new OptionsFilter**(`options`, `multi`, `raw?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Options` \| () => `Options` |
| `multi` | `boolean` |
| `raw?` | `boolean` |

#### Defined in

../src/controls/table/OptionsFilter.tsx:81

## Properties

### component

• **component**: `ComponentClass`<`any`, `any`\>

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[component](../interfaces/types.ITableFilter.md#component)

#### Defined in

../src/controls/table/OptionsFilter.tsx:76

___

### mMulti

• `Private` **mMulti**: `boolean`

#### Defined in

../src/controls/table/OptionsFilter.tsx:79

___

### raw

• **raw**: `boolean` = `true`

this controls what value gets passed into the matches function, see the documentation there
for possible values

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[raw](../interfaces/types.ITableFilter.md#raw)

#### Defined in

../src/controls/table/OptionsFilter.tsx:77

___

### EMPTY

▪ `Static` **EMPTY**: `string` = `'__empty'`

#### Defined in

../src/controls/table/OptionsFilter.tsx:75

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

../src/controls/table/OptionsFilter.tsx:124

___

### matches

▸ **matches**(`filter`, `value`): `boolean`

return true if value matches the filter

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |
| `value` | `any` |

#### Returns

`boolean`

#### Implementation of

[ITableFilter](../interfaces/types.ITableFilter.md).[matches](../interfaces/types.ITableFilter.md#matches)

#### Defined in

../src/controls/table/OptionsFilter.tsx:87
