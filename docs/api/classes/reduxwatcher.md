**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ReduxWatcher

# Class: ReduxWatcher\<T>

this is a rewrite of redux-watcher (https://github.com/imsun/redux-watcher/)
The base idea is the same, it's a way to subscribe to changes on a redux store
with lower overhead and a memory of the previous state.
Compared to redux-watcher this is more forgiving if the monitored part of the state
doesn't actually exist

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* **ReduxWatcher**

## Index

### Constructors

* [constructor](reduxwatcher.md#constructor)

### Properties

* [mLastState](reduxwatcher.md#mlaststate)
* [mWatchList](reduxwatcher.md#mwatchlist)

### Methods

* [off](reduxwatcher.md#off)
* [on](reduxwatcher.md#on)
* [selectorId](reduxwatcher.md#selectorid)

## Constructors

### constructor

\+ **new ReduxWatcher**(`store`: Store\<T>, `onError`: (err: [Error](notsupportederror.md#error), selector: string[]) => void): [ReduxWatcher](reduxwatcher.md)

*Defined in Work/vortex/src/util/ReduxWatcher.ts:33*

#### Parameters:

Name | Type |
------ | ------ |
`store` | Store\<T> |
`onError` | (err: [Error](notsupportederror.md#error), selector: string[]) => void |

**Returns:** [ReduxWatcher](reduxwatcher.md)

## Properties

### mLastState

• `Private` **mLastState**: T

*Defined in Work/vortex/src/util/ReduxWatcher.ts:33*

___

### mWatchList

• `Private` **mWatchList**: { [key:string]: [IWatch](../interfaces/iwatch.md)\<T, any>;  }

*Defined in Work/vortex/src/util/ReduxWatcher.ts:32*

## Methods

### off

▸ **off**\<U>(`selector`: string[], `listener`: [WatchCallback](../globals.md#watchcallback)\<T, U>): void

*Defined in Work/vortex/src/util/ReduxWatcher.ts:75*

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`selector` | string[] |
`listener` | [WatchCallback](../globals.md#watchcallback)\<T, U> |

**Returns:** void

___

### on

▸ **on**\<U>(`selector`: string[], `listener`: [WatchCallback](../globals.md#watchcallback)\<T, U>): void

*Defined in Work/vortex/src/util/ReduxWatcher.ts:66*

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`selector` | string[] |
`listener` | [WatchCallback](../globals.md#watchcallback)\<T, U> |

**Returns:** void

___

### selectorId

▸ `Private`**selectorId**(`selector`: string[]): string

*Defined in Work/vortex/src/util/ReduxWatcher.ts:85*

#### Parameters:

Name | Type |
------ | ------ |
`selector` | string[] |

**Returns:** string
