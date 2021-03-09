[vortex_devel](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / FSWatcher

# Interface: FSWatcher

[fs](../modules/fs.md).FSWatcher

## Hierarchy

* *EventEmitter*

  ↳ **FSWatcher**

## Table of contents

### Methods

- [addListener](fs.fswatcher.md#addlistener)
- [close](fs.fswatcher.md#close)
- [emit](fs.fswatcher.md#emit)
- [eventNames](fs.fswatcher.md#eventnames)
- [getMaxListeners](fs.fswatcher.md#getmaxlisteners)
- [listenerCount](fs.fswatcher.md#listenercount)
- [listeners](fs.fswatcher.md#listeners)
- [off](fs.fswatcher.md#off)
- [on](fs.fswatcher.md#on)
- [once](fs.fswatcher.md#once)
- [prependListener](fs.fswatcher.md#prependlistener)
- [prependOnceListener](fs.fswatcher.md#prependoncelistener)
- [rawListeners](fs.fswatcher.md#rawlisteners)
- [removeAllListeners](fs.fswatcher.md#removealllisteners)
- [removeListener](fs.fswatcher.md#removelistener)
- [setMaxListeners](fs.fswatcher.md#setmaxlisteners)

## Methods

### addListener

▸ **addListener**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*FSWatcher*](fs.fswatcher.md)

events.EventEmitter
  1. change
  2. error

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:107

▸ **addListener**(`event`: *change*, `listener`: (`eventType`: *string*, `filename`: *string* \| *Buffer*) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *change* |
`listener` | (`eventType`: *string*, `filename`: *string* \| *Buffer*) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:108

▸ **addListener**(`event`: *error*, `listener`: (`error`: Error) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *error* |
`listener` | (`error`: Error) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:109

▸ **addListener**(`event`: *close*, `listener`: () => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |
`listener` | () => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:110

___

### close

▸ **close**(): *void*

**Returns:** *void*

Defined in: node_modules/@types/node/fs.d.ts:100

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:32

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:33

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:29

___

### listenerCount

▸ **listenerCount**(`type`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:34

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:30

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/events.d.ts:26

___

### on

▸ **on**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:112

▸ **on**(`event`: *change*, `listener`: (`eventType`: *string*, `filename`: *string* \| *Buffer*) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *change* |
`listener` | (`eventType`: *string*, `filename`: *string* \| *Buffer*) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:113

▸ **on**(`event`: *error*, `listener`: (`error`: Error) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *error* |
`listener` | (`error`: Error) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:114

▸ **on**(`event`: *close*, `listener`: () => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |
`listener` | () => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:115

___

### once

▸ **once**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:117

▸ **once**(`event`: *change*, `listener`: (`eventType`: *string*, `filename`: *string* \| *Buffer*) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *change* |
`listener` | (`eventType`: *string*, `filename`: *string* \| *Buffer*) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:118

▸ **once**(`event`: *error*, `listener`: (`error`: Error) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *error* |
`listener` | (`error`: Error) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:119

▸ **once**(`event`: *close*, `listener`: () => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |
`listener` | () => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:120

___

### prependListener

▸ **prependListener**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:122

▸ **prependListener**(`event`: *change*, `listener`: (`eventType`: *string*, `filename`: *string* \| *Buffer*) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *change* |
`listener` | (`eventType`: *string*, `filename`: *string* \| *Buffer*) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:123

▸ **prependListener**(`event`: *error*, `listener`: (`error`: Error) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *error* |
`listener` | (`error`: Error) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:124

▸ **prependListener**(`event`: *close*, `listener`: () => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |
`listener` | () => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:125

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:127

▸ **prependOnceListener**(`event`: *change*, `listener`: (`eventType`: *string*, `filename`: *string* \| *Buffer*) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *change* |
`listener` | (`eventType`: *string*, `filename`: *string* \| *Buffer*) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:128

▸ **prependOnceListener**(`event`: *error*, `listener`: (`error`: Error) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *error* |
`listener` | (`error`: Error) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:129

▸ **prependOnceListener**(`event`: *close*, `listener`: () => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |
`listener` | () => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:130

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:31

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/events.d.ts:27

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/events.d.ts:25

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*FSWatcher*](fs.fswatcher.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*FSWatcher*](fs.fswatcher.md)

Defined in: node_modules/@types/node/events.d.ts:28
