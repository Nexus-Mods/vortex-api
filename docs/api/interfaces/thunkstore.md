**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ThunkStore

# Interface: ThunkStore\<S, A>

## Type parameters

Name | Type | Default |
------ | ------ | ------ |
`S` | - | - |
`A` | Action | AnyAction |

## Hierarchy

* Store\<S>

  ↳ **ThunkStore**

## Index

### Properties

* [dispatch](thunkstore.md#dispatch)

### Methods

* [[Symbol.observable]](thunkstore.md#[symbol.observable])
* [getState](thunkstore.md#getstate)
* [replaceReducer](thunkstore.md#replacereducer)
* [subscribe](thunkstore.md#subscribe)

## Properties

### dispatch

•  **dispatch**: ThunkDispatch\<S, null, Action>

*Overrides void*

*Defined in Work/vortex/src/types/IExtensionContext.ts:49*

## Methods

### [Symbol.observable]

▸ **[Symbol.observable]**(): Observable\<S>

*Inherited from [ThunkStore](thunkstore.md).[[Symbol.observable]](thunkstore.md#[symbol.observable])*

*Defined in Work/vortex/node_modules/redux/index.d.ts:337*

Interoperability point for observable/reactive libraries.

**Returns:** Observable\<S>

A minimal observable of state changes.
For more information, see the observable proposal:
https://github.com/tc39/proposal-observable

___

### getState

▸ **getState**(): S

*Inherited from [ThunkStore](thunkstore.md).[getState](thunkstore.md#getstate)*

*Defined in Work/vortex/node_modules/redux/index.d.ts:292*

Reads the state tree managed by the store.

**Returns:** S

The current state tree of your application.

___

### replaceReducer

▸ **replaceReducer**(`nextReducer`: Reducer\<S, A>): void

*Inherited from [ThunkStore](thunkstore.md).[replaceReducer](thunkstore.md#replacereducer)*

*Defined in Work/vortex/node_modules/redux/index.d.ts:329*

Replaces the reducer currently used by the store to calculate the state.

You might need this if your app implements code splitting and you want to
load some of the reducers dynamically. You might also need this if you
implement a hot reloading mechanism for Redux.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`nextReducer` | Reducer\<S, A> | The reducer for the store to use instead.  |

**Returns:** void

___

### subscribe

▸ **subscribe**(`listener`: () => void): Unsubscribe

*Inherited from [ThunkStore](thunkstore.md).[subscribe](thunkstore.md#subscribe)*

*Defined in Work/vortex/node_modules/redux/index.d.ts:318*

Adds a change listener. It will be called any time an action is
dispatched, and some part of the state tree may potentially have changed.
You may then call `getState()` to read the current state tree inside the
callback.

You may call `dispatch()` from a change listener, with the following
caveats:

1. The subscriptions are snapshotted just before every `dispatch()` call.
If you subscribe or unsubscribe while the listeners are being invoked,
this will not have any effect on the `dispatch()` that is currently in
progress. However, the next `dispatch()` call, whether nested or not,
will use a more recent snapshot of the subscription list.

2. The listener should not expect to see all states changes, as the state
might have been updated multiple times during a nested `dispatch()` before
the listener is called. It is, however, guaranteed that all subscribers
registered before the `dispatch()` started will be called with the latest
state by the time it exits.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`listener` | () => void | A callback to be invoked on every dispatch. |

**Returns:** Unsubscribe

A function to remove this change listener.
