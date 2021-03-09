[vortex_devel](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / WriteStream

# Class: WriteStream

[fs](../modules/fs.md).WriteStream

## Hierarchy

* *Writable*

  ↳ **WriteStream**

## Table of contents

### Constructors

- [constructor](fs.writestream.md#constructor)

### Properties

- [bytesWritten](fs.writestream.md#byteswritten)
- [destroyed](fs.writestream.md#destroyed)
- [path](fs.writestream.md#path)
- [writable](fs.writestream.md#writable)
- [writableEnded](fs.writestream.md#writableended)
- [writableFinished](fs.writestream.md#writablefinished)
- [writableHighWaterMark](fs.writestream.md#writablehighwatermark)
- [writableLength](fs.writestream.md#writablelength)
- [writableObjectMode](fs.writestream.md#writableobjectmode)
- [defaultMaxListeners](fs.writestream.md#defaultmaxlisteners)

### Methods

- [\_destroy](fs.writestream.md#_destroy)
- [\_final](fs.writestream.md#_final)
- [\_write](fs.writestream.md#_write)
- [\_writev](fs.writestream.md#_writev)
- [addListener](fs.writestream.md#addlistener)
- [close](fs.writestream.md#close)
- [cork](fs.writestream.md#cork)
- [destroy](fs.writestream.md#destroy)
- [emit](fs.writestream.md#emit)
- [end](fs.writestream.md#end)
- [eventNames](fs.writestream.md#eventnames)
- [getMaxListeners](fs.writestream.md#getmaxlisteners)
- [listenerCount](fs.writestream.md#listenercount)
- [listeners](fs.writestream.md#listeners)
- [off](fs.writestream.md#off)
- [on](fs.writestream.md#on)
- [once](fs.writestream.md#once)
- [pipe](fs.writestream.md#pipe)
- [prependListener](fs.writestream.md#prependlistener)
- [prependOnceListener](fs.writestream.md#prependoncelistener)
- [rawListeners](fs.writestream.md#rawlisteners)
- [removeAllListeners](fs.writestream.md#removealllisteners)
- [removeListener](fs.writestream.md#removelistener)
- [setDefaultEncoding](fs.writestream.md#setdefaultencoding)
- [setMaxListeners](fs.writestream.md#setmaxlisteners)
- [uncork](fs.writestream.md#uncork)
- [write](fs.writestream.md#write)
- [listenerCount](fs.writestream.md#listenercount)

## Constructors

### constructor

\+ **new WriteStream**(`opts?`: WritableOptions): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`opts?` | WritableOptions |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/stream.d.ts:126

## Properties

### bytesWritten

• **bytesWritten**: *number*

Defined in: node_modules/@types/node/fs.d.ts:166

___

### destroyed

• **destroyed**: *boolean*

Defined in: node_modules/@types/node/stream.d.ts:126

___

### path

• **path**: *string* \| *Buffer*

Defined in: node_modules/@types/node/fs.d.ts:167

___

### writable

• `Readonly` **writable**: *boolean*

Defined in: node_modules/@types/node/stream.d.ts:120

___

### writableEnded

• `Readonly` **writableEnded**: *boolean*

Defined in: node_modules/@types/node/stream.d.ts:121

___

### writableFinished

• `Readonly` **writableFinished**: *boolean*

Defined in: node_modules/@types/node/stream.d.ts:122

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: *number*

Defined in: node_modules/@types/node/stream.d.ts:123

___

### writableLength

• `Readonly` **writableLength**: *number*

Defined in: node_modules/@types/node/stream.d.ts:124

___

### writableObjectMode

• `Readonly` **writableObjectMode**: *boolean*

Defined in: node_modules/@types/node/stream.d.ts:125

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:18

## Methods

### \_destroy

▸ **_destroy**(`error`: Error, `callback`: (`error?`: Error) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`error` | Error |
`callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Defined in: node_modules/@types/node/stream.d.ts:130

___

### \_final

▸ **_final**(`callback`: (`error?`: Error) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Defined in: node_modules/@types/node/stream.d.ts:131

___

### \_write

▸ **_write**(`chunk`: *any*, `encoding`: *string*, `callback`: (`error?`: Error) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`chunk` | *any* |
`encoding` | *string* |
`callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Defined in: node_modules/@types/node/stream.d.ts:128

___

### \_writev

▸ `Optional`**_writev**(`chunks`: { `chunk`: *any* ; `encoding`: *string*  }[], `callback`: (`error?`: Error) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`chunks` | { `chunk`: *any* ; `encoding`: *string*  }[] |
`callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Defined in: node_modules/@types/node/stream.d.ts:129

___

### addListener

▸ **addListener**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*WriteStream*](fs.writestream.md)

events.EventEmitter
  1. open
  2. close

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:174

▸ **addListener**(`event`: *open*, `listener`: (`fd`: *number*) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *open* |
`listener` | (`fd`: *number*) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:175

▸ **addListener**(`event`: *close*, `listener`: () => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |
`listener` | () => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:176

___

### close

▸ **close**(): *void*

**Returns:** *void*

Defined in: node_modules/@types/node/fs.d.ts:165

___

### cork

▸ **cork**(): *void*

**Returns:** *void*

Defined in: node_modules/@types/node/stream.d.ts:138

___

### destroy

▸ **destroy**(`error?`: Error): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`error?` | Error |

**Returns:** *void*

Defined in: node_modules/@types/node/stream.d.ts:140

___

### emit

▸ **emit**(`event`: *close*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |

**Returns:** *boolean*

Defined in: node_modules/@types/node/stream.d.ts:160

▸ **emit**(`event`: *drain*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *drain* |

**Returns:** *boolean*

Defined in: node_modules/@types/node/stream.d.ts:161

▸ **emit**(`event`: *error*, `err`: Error): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *error* |
`err` | Error |

**Returns:** *boolean*

Defined in: node_modules/@types/node/stream.d.ts:162

▸ **emit**(`event`: *finish*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *finish* |

**Returns:** *boolean*

Defined in: node_modules/@types/node/stream.d.ts:163

▸ **emit**(`event`: *pipe*, `src`: *Readable*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *pipe* |
`src` | *Readable* |

**Returns:** *boolean*

Defined in: node_modules/@types/node/stream.d.ts:164

▸ **emit**(`event`: *unpipe*, `src`: *Readable*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *unpipe* |
`src` | *Readable* |

**Returns:** *boolean*

Defined in: node_modules/@types/node/stream.d.ts:165

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/stream.d.ts:166

___

### end

▸ **end**(`cb?`: () => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`cb?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/node/stream.d.ts:135

▸ **end**(`chunk`: *any*, `cb?`: () => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`chunk` | *any* |
`cb?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/node/stream.d.ts:136

▸ **end**(`chunk`: *any*, `encoding`: *string*, `cb?`: () => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`chunk` | *any* |
`encoding` | *string* |
`cb?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/node/stream.d.ts:137

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

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/events.d.ts:26

___

### on

▸ **on**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:178

▸ **on**(`event`: *open*, `listener`: (`fd`: *number*) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *open* |
`listener` | (`fd`: *number*) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:179

▸ **on**(`event`: *close*, `listener`: () => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |
`listener` | () => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:180

___

### once

▸ **once**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:182

▸ **once**(`event`: *open*, `listener`: (`fd`: *number*) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *open* |
`listener` | (`fd`: *number*) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:183

▸ **once**(`event`: *close*, `listener`: () => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |
`listener` | () => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:184

___

### pipe

▸ **pipe**<T\>(`destination`: T, `options?`: { `end?`: *boolean*  }): T

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *WritableStream*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | T |
`options?` | *object* |
`options.end?` | *boolean* |

**Returns:** T

Defined in: node_modules/@types/node/stream.d.ts:5

___

### prependListener

▸ **prependListener**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:186

▸ **prependListener**(`event`: *open*, `listener`: (`fd`: *number*) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *open* |
`listener` | (`fd`: *number*) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:187

▸ **prependListener**(`event`: *close*, `listener`: () => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |
`listener` | () => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:188

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:190

▸ **prependOnceListener**(`event`: *open*, `listener`: (`fd`: *number*) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *open* |
`listener` | (`fd`: *number*) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:191

▸ **prependOnceListener**(`event`: *close*, `listener`: () => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |
`listener` | () => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:192

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

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/events.d.ts:27

___

### removeListener

▸ **removeListener**(`event`: *close*, `listener`: () => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *close* |
`listener` | () => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/stream.d.ts:200

▸ **removeListener**(`event`: *drain*, `listener`: () => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *drain* |
`listener` | () => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/stream.d.ts:201

▸ **removeListener**(`event`: *error*, `listener`: (`err`: Error) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *error* |
`listener` | (`err`: Error) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/stream.d.ts:202

▸ **removeListener**(`event`: *finish*, `listener`: () => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *finish* |
`listener` | () => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/stream.d.ts:203

▸ **removeListener**(`event`: *pipe*, `listener`: (`src`: *Readable*) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *pipe* |
`listener` | (`src`: *Readable*) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/stream.d.ts:204

▸ **removeListener**(`event`: *unpipe*, `listener`: (`src`: *Readable*) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *unpipe* |
`listener` | (`src`: *Readable*) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/stream.d.ts:205

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/stream.d.ts:206

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: *string*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`encoding` | *string* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/stream.d.ts:134

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*WriteStream*](fs.writestream.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*WriteStream*](fs.writestream.md)

Defined in: node_modules/@types/node/events.d.ts:28

___

### uncork

▸ **uncork**(): *void*

**Returns:** *void*

Defined in: node_modules/@types/node/stream.d.ts:139

___

### write

▸ **write**(`chunk`: *any*, `cb?`: (`error`: Error) => *void*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`chunk` | *any* |
`cb?` | (`error`: Error) => *void* |

**Returns:** *boolean*

Defined in: node_modules/@types/node/stream.d.ts:132

▸ **write**(`chunk`: *any*, `encoding`: *string*, `cb?`: (`error`: Error) => *void*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`chunk` | *any* |
`encoding` | *string* |
`cb?` | (`error`: Error) => *void* |

**Returns:** *boolean*

Defined in: node_modules/@types/node/stream.d.ts:133

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:17
