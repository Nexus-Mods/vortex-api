**[vortex_devel](../README.md)**

> [Globals](../globals.md) / APIProxyHandler

# Class: APIProxyHandler

## Hierarchy

* **APIProxyHandler**

## Implements

* ProxyHandler\<any>

## Index

### Constructors

* [constructor](apiproxyhandler.md#constructor)

### Properties

* [mEnabled](apiproxyhandler.md#menabled)
* [mExtension](apiproxyhandler.md#mextension)

### Methods

* [enable](apiproxyhandler.md#enable)
* [get](apiproxyhandler.md#get)

## Constructors

### constructor

\+ **new APIProxyHandler**(`extension`: [IRegisteredExtension](../interfaces/iregisteredextension.md), `enable`: boolean): [APIProxyHandler](apiproxyhandler.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:108*

#### Parameters:

Name | Type |
------ | ------ |
`extension` | [IRegisteredExtension](../interfaces/iregisteredextension.md) |
`enable` | boolean |

**Returns:** [APIProxyHandler](apiproxyhandler.md)

## Properties

### mEnabled

• `Private` **mEnabled**: boolean

*Defined in Work/vortex/src/util/ExtensionManager.ts:108*

___

### mExtension

• `Private` **mExtension**: [IRegisteredExtension](../interfaces/iregisteredextension.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:107*

## Methods

### enable

▸ **enable**(): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:115*

**Returns:** void

___

### get

▸ **get**(`target`: any, `key`: PropertyKey): any

*Defined in Work/vortex/src/util/ExtensionManager.ts:119*

#### Parameters:

Name | Type |
------ | ------ |
`target` | any |
`key` | PropertyKey |

**Returns:** any
