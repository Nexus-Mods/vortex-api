**[vortex_devel](../README.md)**

> [Globals](../globals.md) / APIProxyCreator

# Class: APIProxyCreator

## Hierarchy

* **APIProxyCreator**

## Implements

* ProxyHandler\<any>

## Index

### Constructors

* [constructor](apiproxycreator.md#constructor)

### Properties

* [mAPIEnabled](apiproxycreator.md#mapienabled)
* [mExtension](apiproxycreator.md#mextension)
* [mProxy](apiproxycreator.md#mproxy)
* [mProxyHandler](apiproxycreator.md#mproxyhandler)

### Methods

* [enableAPI](apiproxycreator.md#enableapi)
* [get](apiproxycreator.md#get)

## Constructors

### constructor

\+ **new APIProxyCreator**(`extension`: [IRegisteredExtension](../interfaces/iregisteredextension.md)): [APIProxyCreator](apiproxycreator.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:140*

#### Parameters:

Name | Type |
------ | ------ |
`extension` | [IRegisteredExtension](../interfaces/iregisteredextension.md) |

**Returns:** [APIProxyCreator](apiproxycreator.md)

## Properties

### mAPIEnabled

• `Private` **mAPIEnabled**: boolean = false

*Defined in Work/vortex/src/util/ExtensionManager.ts:140*

___

### mExtension

• `Private` **mExtension**: [IRegisteredExtension](../interfaces/iregisteredextension.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:137*

___

### mProxy

• `Private` **mProxy**: [IExtensionApi](../interfaces/iextensionapi.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:139*

___

### mProxyHandler

• `Private` **mProxyHandler**: [APIProxyHandler](apiproxyhandler.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:138*

## Methods

### enableAPI

▸ **enableAPI**(): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:146*

**Returns:** void

___

### get

▸ **get**(`target`: any, `key`: PropertyKey): any

*Defined in Work/vortex/src/util/ExtensionManager.ts:153*

#### Parameters:

Name | Type |
------ | ------ |
`target` | any |
`key` | PropertyKey |

**Returns:** any
