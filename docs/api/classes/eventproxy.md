**[vortex_devel](../README.md)**

> [Globals](../globals.md) / EventProxy

# Class: EventProxy

## Hierarchy

* EventEmitter

  ↳ **EventProxy**

## Index

### Constructors

* [constructor](eventproxy.md#constructor)

### Properties

* [mRemoteCallbacks](eventproxy.md#mremotecallbacks)
* [mRemotePromises](eventproxy.md#mremotepromises)
* [mTarget](eventproxy.md#mtarget)
* [defaultMaxListeners](eventproxy.md#defaultmaxlisteners)

### Methods

* [addListener](eventproxy.md#addlistener)
* [emit](eventproxy.md#emit)
* [eventNames](eventproxy.md#eventnames)
* [getMaxListeners](eventproxy.md#getmaxlisteners)
* [listenerCount](eventproxy.md#listenercount)
* [listeners](eventproxy.md#listeners)
* [off](eventproxy.md#off)
* [on](eventproxy.md#on)
* [once](eventproxy.md#once)
* [prependListener](eventproxy.md#prependlistener)
* [prependOnceListener](eventproxy.md#prependoncelistener)
* [rawListeners](eventproxy.md#rawlisteners)
* [removeAllListeners](eventproxy.md#removealllisteners)
* [removeListener](eventproxy.md#removelistener)
* [setMaxListeners](eventproxy.md#setmaxlisteners)
* [listenerCount](eventproxy.md#listenercount)

## Constructors

### constructor

\+ **new EventProxy**(`target`: WebContents): [EventProxy](eventproxy.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:378*

#### Parameters:

Name | Type |
------ | ------ |
`target` | WebContents |

**Returns:** [EventProxy](eventproxy.md)

## Properties

### mRemoteCallbacks

• `Private` **mRemoteCallbacks**: { [id:string]: (...args: any[]) => void;  }

*Defined in Work/vortex/src/util/ExtensionManager.ts:377*

___

### mRemotePromises

• `Private` **mRemotePromises**: { [id:string]: { reject: (err: any) => void ; resolve: (res: any) => void  };  }

*Defined in Work/vortex/src/util/ExtensionManager.ts:378*

___

### mTarget

• `Private` **mTarget**: WebContents

*Defined in Work/vortex/src/util/ExtensionManager.ts:376*

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: number

*Inherited from [EventProxy](eventproxy.md).[defaultMaxListeners](eventproxy.md#defaultmaxlisteners)*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:18*

## Methods

### addListener

▸ **addListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [EventProxy](eventproxy.md).[addListener](eventproxy.md#addlistener)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:20*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### emit

▸ **emit**(`eventName`: string, ...`args`: any[]): boolean

*Overrides void*

*Defined in Work/vortex/src/util/ExtensionManager.ts:432*

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | string |
`...args` | any[] |

**Returns:** boolean

___

### eventNames

▸ **eventNames**(): Array\<string \| symbol>

*Inherited from [EventProxy](eventproxy.md).[eventNames](eventproxy.md#eventnames)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:33*

**Returns:** Array\<string \| symbol>

___

### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [EventProxy](eventproxy.md).[getMaxListeners](eventproxy.md#getmaxlisteners)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:29*

**Returns:** number

___

### listenerCount

▸ **listenerCount**(`type`: string \| symbol): number

*Inherited from [EventProxy](eventproxy.md).[listenerCount](eventproxy.md#listenercount)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:34*

#### Parameters:

Name | Type |
------ | ------ |
`type` | string \| symbol |

**Returns:** number

___

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

*Inherited from [EventProxy](eventproxy.md).[listeners](eventproxy.md#listeners)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:30*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [EventProxy](eventproxy.md).[off](eventproxy.md#off)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:26*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### on

▸ **on**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [EventProxy](eventproxy.md).[on](eventproxy.md#on)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:21*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### once

▸ **once**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [EventProxy](eventproxy.md).[once](eventproxy.md#once)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:22*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependListener

▸ **prependListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [EventProxy](eventproxy.md).[prependListener](eventproxy.md#prependlistener)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:23*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependOnceListener

▸ **prependOnceListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [EventProxy](eventproxy.md).[prependOnceListener](eventproxy.md#prependoncelistener)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:24*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### rawListeners

▸ **rawListeners**(`event`: string \| symbol): Function[]

*Inherited from [EventProxy](eventproxy.md).[rawListeners](eventproxy.md#rawlisteners)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:31*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

*Inherited from [EventProxy](eventproxy.md).[removeAllListeners](eventproxy.md#removealllisteners)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:27*

#### Parameters:

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** this

___

### removeListener

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [EventProxy](eventproxy.md).[removeListener](eventproxy.md#removelistener)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:25*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

*Inherited from [EventProxy](eventproxy.md).[setMaxListeners](eventproxy.md#setmaxlisteners)*

*Overrides void*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:28*

#### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: EventEmitter, `event`: string \| symbol): number

*Inherited from [EventProxy](eventproxy.md).[listenerCount](eventproxy.md#listenercount)*

*Defined in Work/vortex/node_modules/@types/node/events.d.ts:17*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string \| symbol |

**Returns:** number
