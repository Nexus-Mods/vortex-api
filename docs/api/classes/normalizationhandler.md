**[vortex_devel](../README.md)**

> [Globals](../globals.md) / NormalizationHandler

# Class: NormalizationHandler\<T>

## Type parameters

Name | Type |
------ | ------ |
`T` | object |

## Hierarchy

* **NormalizationHandler**

## Index

### Constructors

* [constructor](normalizationhandler.md#constructor)

### Properties

* [keymap](normalizationhandler.md#keymap)
* [normalize](normalizationhandler.md#normalize)

### Methods

* [deleteProperty](normalizationhandler.md#deleteproperty)
* [get](normalizationhandler.md#get)
* [has](normalizationhandler.md#has)
* [set](normalizationhandler.md#set)

## Constructors

### constructor

\+ **new NormalizationHandler**(`init`: T, `normalize`: [Normalize](../globals.md#normalize)): [NormalizationHandler](normalizationhandler.md)

*Defined in Work/vortex/src/util/getNormalizeFunc.ts:130*

#### Parameters:

Name | Type |
------ | ------ |
`init` | T |
`normalize` | [Normalize](../globals.md#normalize) |

**Returns:** [NormalizationHandler](normalizationhandler.md)

## Properties

### keymap

• `Private` **keymap**: { [key:string]: string;  }

*Defined in Work/vortex/src/util/getNormalizeFunc.ts:129*

___

### normalize

• `Private` **normalize**: [Normalize](../globals.md#normalize)

*Defined in Work/vortex/src/util/getNormalizeFunc.ts:130*

## Methods

### deleteProperty

▸ **deleteProperty**(`target`: T, `key`: PropertyKey): boolean

*Defined in Work/vortex/src/util/getNormalizeFunc.ts:159*

#### Parameters:

Name | Type |
------ | ------ |
`target` | T |
`key` | PropertyKey |

**Returns:** boolean

___

### get

▸ **get**(`target`: T, `key`: PropertyKey): any

*Defined in Work/vortex/src/util/getNormalizeFunc.ts:141*

#### Parameters:

Name | Type |
------ | ------ |
`target` | T |
`key` | PropertyKey |

**Returns:** any

___

### has

▸ **has**(`target`: T, `key`: PropertyKey): boolean

*Defined in Work/vortex/src/util/getNormalizeFunc.ts:168*

#### Parameters:

Name | Type |
------ | ------ |
`target` | T |
`key` | PropertyKey |

**Returns:** boolean

___

### set

▸ **set**(`target`: T, `key`: PropertyKey, `value`: any): boolean

*Defined in Work/vortex/src/util/getNormalizeFunc.ts:176*

#### Parameters:

Name | Type |
------ | ------ |
`target` | T |
`key` | PropertyKey |
`value` | any |

**Returns:** boolean
