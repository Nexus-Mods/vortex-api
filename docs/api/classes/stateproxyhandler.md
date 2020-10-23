**[vortex_devel](../README.md)**

> [Globals](../globals.md) / StateProxyHandler

# Class: StateProxyHandler\<T>

## Type parameters

Name | Type |
------ | ------ |
`T` | object |

## Hierarchy

* **StateProxyHandler**

## Implements

* ProxyHandler\<T>

## Index

### Constructors

* [constructor](stateproxyhandler.md#constructor)

### Properties

* [mBaseObject](stateproxyhandler.md#mbaseobject)
* [mComponent](stateproxyhandler.md#mcomponent)
* [mDelayed](stateproxyhandler.md#mdelayed)
* [mDelayedTimer](stateproxyhandler.md#mdelayedtimer)
* [mParent](stateproxyhandler.md#mparent)
* [mPath](stateproxyhandler.md#mpath)
* [mSubProxies](stateproxyhandler.md#msubproxies)

### Methods

* [baseObject](stateproxyhandler.md#baseobject)
* [deleteProperty](stateproxyhandler.md#deleteproperty)
* [derive](stateproxyhandler.md#derive)
* [get](stateproxyhandler.md#get)
* [has](stateproxyhandler.md#has)
* [set](stateproxyhandler.md#set)
* [setBaseObject](stateproxyhandler.md#setbaseobject)

## Constructors

### constructor

\+ **new StateProxyHandler**(`component`: [ComponentEx](componentex.md)\<any, T> \| [PureComponentEx](purecomponentex.md)\<any, T>, `baseObject`: T, `parent`: [StateProxyHandler](stateproxyhandler.md)\<T>, `objPath`: string[], `delayed`: boolean): [StateProxyHandler](stateproxyhandler.md)

*Defined in Work/vortex/src/util/ComponentEx.ts:31*

#### Parameters:

Name | Type |
------ | ------ |
`component` | [ComponentEx](componentex.md)\<any, T> \| [PureComponentEx](purecomponentex.md)\<any, T> |
`baseObject` | T |
`parent` | [StateProxyHandler](stateproxyhandler.md)\<T> |
`objPath` | string[] |
`delayed` | boolean |

**Returns:** [StateProxyHandler](stateproxyhandler.md)

## Properties

### mBaseObject

• `Private` **mBaseObject**: T

*Defined in Work/vortex/src/util/ComponentEx.ts:24*

___

### mComponent

• `Private` **mComponent**: [ComponentEx](componentex.md)\<any, T> \| [PureComponentEx](purecomponentex.md)\<any, T>

*Defined in Work/vortex/src/util/ComponentEx.ts:22*

___

### mDelayed

• `Private` **mDelayed**: boolean

*Defined in Work/vortex/src/util/ComponentEx.ts:30*

___

### mDelayedTimer

• `Private` **mDelayedTimer**: Immediate

*Defined in Work/vortex/src/util/ComponentEx.ts:31*

___

### mParent

• `Private` **mParent**: [StateProxyHandler](stateproxyhandler.md)\<T>

*Defined in Work/vortex/src/util/ComponentEx.ts:25*

___

### mPath

• `Private` **mPath**: string[]

*Defined in Work/vortex/src/util/ComponentEx.ts:23*

___

### mSubProxies

• `Private` **mSubProxies**: { [key:string]: { obj: any ; proxy: any  };  }

*Defined in Work/vortex/src/util/ComponentEx.ts:26*

## Methods

### baseObject

▸ `Private`**baseObject**(): T

*Defined in Work/vortex/src/util/ComponentEx.ts:67*

**Returns:** T

___

### deleteProperty

▸ **deleteProperty**(`target`: T, `key`: PropertyKey): boolean

*Defined in Work/vortex/src/util/ComponentEx.ts:52*

#### Parameters:

Name | Type |
------ | ------ |
`target` | T |
`key` | PropertyKey |

**Returns:** boolean

___

### derive

▸ `Private`**derive**(`obj`: T, `key`: PropertyKey): any

*Defined in Work/vortex/src/util/ComponentEx.ts:94*

#### Parameters:

Name | Type |
------ | ------ |
`obj` | T |
`key` | PropertyKey |

**Returns:** any

___

### get

▸ **get**(`target`: T, `key`: PropertyKey): any

*Defined in Work/vortex/src/util/ComponentEx.ts:48*

#### Parameters:

Name | Type |
------ | ------ |
`target` | T |
`key` | PropertyKey |

**Returns:** any

___

### has

▸ **has**(`target`: T, `key`: PropertyKey): boolean

*Defined in Work/vortex/src/util/ComponentEx.ts:44*

#### Parameters:

Name | Type |
------ | ------ |
`target` | T |
`key` | PropertyKey |

**Returns:** boolean

___

### set

▸ **set**(`target`: T, `key`: PropertyKey, `value`: any, `receiver`: any): boolean

*Defined in Work/vortex/src/util/ComponentEx.ts:60*

#### Parameters:

Name | Type |
------ | ------ |
`target` | T |
`key` | PropertyKey |
`value` | any |
`receiver` | any |

**Returns:** boolean

___

### setBaseObject

▸ `Private`**setBaseObject**(`newObj`: T): void

*Defined in Work/vortex/src/util/ComponentEx.ts:75*

#### Parameters:

Name | Type |
------ | ------ |
`newObj` | T |

**Returns:** void
