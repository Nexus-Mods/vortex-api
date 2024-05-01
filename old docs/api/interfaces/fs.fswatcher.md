[vortex_devel](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / FSWatcher

# Interface: FSWatcher

[fs](../modules/fs.md).FSWatcher

## Hierarchy

- `EventEmitter`

  ↳ **`FSWatcher`**

## Table of contents

### Methods

- [addListener](fs.FSWatcher.md#addlistener)
- [close](fs.FSWatcher.md#close)
- [emit](fs.FSWatcher.md#emit)
- [eventNames](fs.FSWatcher.md#eventnames)
- [getMaxListeners](fs.FSWatcher.md#getmaxlisteners)
- [listenerCount](fs.FSWatcher.md#listenercount)
- [listeners](fs.FSWatcher.md#listeners)
- [off](fs.FSWatcher.md#off)
- [on](fs.FSWatcher.md#on)
- [once](fs.FSWatcher.md#once)
- [prependListener](fs.FSWatcher.md#prependlistener)
- [prependOnceListener](fs.FSWatcher.md#prependoncelistener)
- [rawListeners](fs.FSWatcher.md#rawlisteners)
- [removeAllListeners](fs.FSWatcher.md#removealllisteners)
- [removeListener](fs.FSWatcher.md#removelistener)
- [setMaxListeners](fs.FSWatcher.md#setmaxlisteners)

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

events.EventEmitter
  1. change
  2. error

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.addListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:297

▸ **addListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `listener` | (`eventType`: `string`, `filename`: `string` \| `Buffer`) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.addListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:298

▸ **addListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.addListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:299

▸ **addListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.addListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:300

___

### close

▸ **close**(): `void`

Stop watching for changes on the given `fs.FSWatcher`. Once stopped, the `fs.FSWatcher` object is no longer usable.

**`since`** v0.5.8

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:291

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/events.d.ts:555

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/events.d.ts:614

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](../classes/fs.WriteStream.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/events.d.ts:471

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/events.d.ts:561

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/events.d.ts:484

___

### off

▸ **off**(`eventName`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Inherited from

EventEmitter.off

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/events.d.ts:444

___

### on

▸ **on**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.on

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:301

▸ **on**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `listener` | (`eventType`: `string`, `filename`: `string` \| `Buffer`) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.on

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:302

▸ **on**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.on

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:303

▸ **on**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.on

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:304

___

### once

▸ **once**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.once

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:305

▸ **once**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `listener` | (`eventType`: `string`, `filename`: `string` \| `Buffer`) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.once

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:306

▸ **once**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.once

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:307

▸ **once**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.once

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:308

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.prependListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:309

▸ **prependListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `listener` | (`eventType`: `string`, `filename`: `string` \| `Buffer`) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.prependListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:310

▸ **prependListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.prependListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:311

▸ **prependListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.prependListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:312

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.prependOnceListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:313

▸ **prependOnceListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `listener` | (`eventType`: `string`, `filename`: `string` \| `Buffer`) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.prependOnceListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:314

▸ **prependOnceListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.prependOnceListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:315

▸ **prependOnceListener**(`event`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Overrides

EventEmitter.prependOnceListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:316

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.rawListeners

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/events.d.ts:514

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`FSWatcher`](fs.FSWatcher.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/events.d.ts:455

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`FSWatcher`](fs.FSWatcher.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/events.d.ts:439

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`FSWatcher`](fs.FSWatcher.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`FSWatcher`](fs.FSWatcher.md)

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/events.d.ts:465
