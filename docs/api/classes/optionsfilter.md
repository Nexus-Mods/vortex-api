**[vortex_devel](../README.md)**

> [Globals](../globals.md) / OptionsFilter

# Class: OptionsFilter

## Hierarchy

* **OptionsFilter**

## Implements

* [ITableFilter](../interfaces/itablefilter.md)

## Index

### Constructors

* [constructor](optionsfilter.md#constructor)

### Properties

* [component](optionsfilter.md#component)
* [mMulti](optionsfilter.md#mmulti)
* [raw](optionsfilter.md#raw)
* [EMPTY](optionsfilter.md#empty)

### Methods

* [isEmpty](optionsfilter.md#isempty)
* [matches](optionsfilter.md#matches)

## Constructors

### constructor

\+ **new OptionsFilter**(`options`: Array\<{ label: string ; value: any  }>, `multi`: boolean, `raw?`: boolean): [OptionsFilter](optionsfilter.md)

*Defined in Work/vortex/src/controls/table/OptionsFilter.tsx:55*

#### Parameters:

Name | Type |
------ | ------ |
`options` | Array\<{ label: string ; value: any  }> |
`multi` | boolean |
`raw?` | boolean |

**Returns:** [OptionsFilter](optionsfilter.md)

## Properties

### component

•  **component**: ComponentClass\<any>

*Implementation of [ITableFilter](../interfaces/itablefilter.md).[component](../interfaces/itablefilter.md#component)*

*Defined in Work/vortex/src/controls/table/OptionsFilter.tsx:52*

___

### mMulti

• `Private` **mMulti**: boolean

*Defined in Work/vortex/src/controls/table/OptionsFilter.tsx:55*

___

### raw

•  **raw**: boolean = true

*Implementation of [ITableFilter](../interfaces/itablefilter.md).[raw](../interfaces/itablefilter.md#raw)*

*Defined in Work/vortex/src/controls/table/OptionsFilter.tsx:53*

___

### EMPTY

▪ `Static` **EMPTY**: string = "\_\_empty"

*Defined in Work/vortex/src/controls/table/OptionsFilter.tsx:51*

## Methods

### isEmpty

▸ **isEmpty**(`filter`: any): boolean

*Defined in Work/vortex/src/controls/table/OptionsFilter.tsx:100*

#### Parameters:

Name | Type |
------ | ------ |
`filter` | any |

**Returns:** boolean

___

### matches

▸ **matches**(`filter`: any, `value`: any): boolean

*Defined in Work/vortex/src/controls/table/OptionsFilter.tsx:63*

#### Parameters:

Name | Type |
------ | ------ |
`filter` | any |
`value` | any |

**Returns:** boolean
