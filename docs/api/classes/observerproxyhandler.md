**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ObserverProxyHandler

# Class: ObserverProxyHandler\<T>

## Type parameters

Name | Type |
------ | ------ |
`T` | object |

## Hierarchy

* **ObserverProxyHandler**

## Implements

* ProxyHandler\<T>

## Index

### Properties

* [mSubscribers](observerproxyhandler.md#msubscribers)

### Methods

* [attach](observerproxyhandler.md#attach)
* [detach](observerproxyhandler.md#detach)
* [get](observerproxyhandler.md#get)
* [has](observerproxyhandler.md#has)
* [set](observerproxyhandler.md#set)

## Properties

### mSubscribers

• `Private` **mSubscribers**: Array\<Component\<any, any>> = []

*Defined in Work/vortex/src/util/makeReactive.ts:4*

## Methods

### attach

▸ `Private`**attach**(`component`: Component\<any, any>): void

*Defined in Work/vortex/src/util/makeReactive.ts:28*

#### Parameters:

Name | Type |
------ | ------ |
`component` | Component\<any, any> |

**Returns:** void

___

### detach

▸ `Private`**detach**(`component`: Component\<any, any>): void

*Defined in Work/vortex/src/util/makeReactive.ts:32*

#### Parameters:

Name | Type |
------ | ------ |
`component` | Component\<any, any> |

**Returns:** void

___

### get

▸ **get**(`target`: T, `key`: PropertyKey): any

*Defined in Work/vortex/src/util/makeReactive.ts:11*

#### Parameters:

Name | Type |
------ | ------ |
`target` | T |
`key` | PropertyKey |

**Returns:** any

___

### has

▸ **has**(`target`: T, `key`: PropertyKey): boolean

*Defined in Work/vortex/src/util/makeReactive.ts:6*

#### Parameters:

Name | Type |
------ | ------ |
`target` | T |
`key` | PropertyKey |

**Returns:** boolean

___

### set

▸ **set**(`target`: T, `key`: PropertyKey, `value`: any, `receiver`: any): boolean

*Defined in Work/vortex/src/util/makeReactive.ts:20*

#### Parameters:

Name | Type |
------ | ------ |
`target` | T |
`key` | PropertyKey |
`value` | any |
`receiver` | any |

**Returns:** boolean
