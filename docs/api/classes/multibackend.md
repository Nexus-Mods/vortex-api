**[vortex_devel](../README.md)**

> [Globals](../globals.md) / MultiBackend

# Class: MultiBackend

## Hierarchy

* **MultiBackend**

## Index

### Constructors

* [constructor](multibackend.md#constructor)

### Properties

* [mBackendType](multibackend.md#mbackendtype)
* [mCurrentBackend](multibackend.md#mcurrentbackend)
* [mOptions](multibackend.md#moptions)
* [mServices](multibackend.md#mservices)
* [type](multibackend.md#type)

### Methods

* [backendType](multibackend.md#backendtype)
* [init](multibackend.md#init)
* [initBackend](multibackend.md#initbackend)
* [read](multibackend.md#read)

## Constructors

### constructor

\+ **new MultiBackend**(`services`: any, `options`: any): [MultiBackend](multibackend.md)

*Defined in Work/vortex/src/util/i18n.ts:42*

#### Parameters:

Name | Type |
------ | ------ |
`services` | any |
`options` | any |

**Returns:** [MultiBackend](multibackend.md)

## Properties

### mBackendType

• `Private` **mBackendType**: [BackendType](../globals.md#backendtype)

*Defined in Work/vortex/src/util/i18n.ts:42*

___

### mCurrentBackend

• `Private` **mCurrentBackend**: FSBackend

*Defined in Work/vortex/src/util/i18n.ts:41*

___

### mOptions

• `Private` **mOptions**: any

*Defined in Work/vortex/src/util/i18n.ts:39*

___

### mServices

• `Private` **mServices**: any

*Defined in Work/vortex/src/util/i18n.ts:40*

___

### type

▪ `Static` `Private` **type**: string = "backend"

*Defined in Work/vortex/src/util/i18n.ts:38*

## Methods

### backendType

▸ `Private`**backendType**(`language`: string): object

*Defined in Work/vortex/src/util/i18n.ts:83*

#### Parameters:

Name | Type |
------ | ------ |
`language` | string |

**Returns:** object

Name | Type |
------ | ------ |
`backendType` | [BackendType](../globals.md#backendtype) |
`extPath?` | string |

___

### init

▸ **init**(`services`: any, `options`: any): void

*Defined in Work/vortex/src/util/i18n.ts:48*

#### Parameters:

Name | Type |
------ | ------ |
`services` | any |
`options` | any |

**Returns:** void

___

### initBackend

▸ `Private`**initBackend**(`type`: [BackendType](../globals.md#backendtype), `extPath`: string): any

*Defined in Work/vortex/src/util/i18n.ts:61*

#### Parameters:

Name | Type |
------ | ------ |
`type` | [BackendType](../globals.md#backendtype) |
`extPath` | string |

**Returns:** any

___

### read

▸ **read**(`language`: string, `namespace`: string, `callback`: any): void

*Defined in Work/vortex/src/util/i18n.ts:53*

#### Parameters:

Name | Type |
------ | ------ |
`language` | string |
`namespace` | string |
`callback` | any |

**Returns:** void
