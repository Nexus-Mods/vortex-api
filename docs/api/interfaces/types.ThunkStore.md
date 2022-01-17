[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / ThunkStore

# Interface: ThunkStore<S\>

[types](../modules/types.md).ThunkStore

## Type parameters

| Name |
| :------ |
| `S` |

## Hierarchy

- `Store`<`S`\>

  ↳ **`ThunkStore`**

## Table of contents

### Properties

- [dispatch](types.ThunkStore.md#dispatch)

### Methods

- [[observable]](types.ThunkStore.md#[observable])
- [getState](types.ThunkStore.md#getstate)
- [replaceReducer](types.ThunkStore.md#replacereducer)
- [subscribe](types.ThunkStore.md#subscribe)

## Properties

### dispatch

• **dispatch**: `ThunkDispatch`<`S`, ``null``, `Action`<`any`\>\>

#### Overrides

Redux.Store.dispatch

#### Defined in

../src/types/IExtensionContext.ts:57

## Methods

### [observable]

▸ **[observable]**(): `Observable`<`S`\>

Interoperability point for observable/reactive libraries.

#### Returns

`Observable`<`S`\>

A minimal observable of state changes.
For more information, see the observable proposal:
https://github.com/tc39/proposal-observable

#### Inherited from

Redux.Store.\_\_@observable@43099

#### Defined in

E:/WorkC/vortex/node_modules/redux/index.d.ts:344

___

### getState

▸ **getState**(): `S`

Reads the state tree managed by the store.

#### Returns

`S`

The current state tree of your application.

#### Inherited from

Redux.Store.getState

#### Defined in

E:/WorkC/vortex/node_modules/redux/index.d.ts:299

___

### replaceReducer

▸ **replaceReducer**(`nextReducer`): `void`

Replaces the reducer currently used by the store to calculate the state.

You might need this if your app implements code splitting and you want to
load some of the reducers dynamically. You might also need this if you
implement a hot reloading mechanism for Redux.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nextReducer` | `Reducer`<`S`, `AnyAction`\> | The reducer for the store to use instead. |

#### Returns

`void`

#### Inherited from

Redux.Store.replaceReducer

#### Defined in

E:/WorkC/vortex/node_modules/redux/index.d.ts:336

___

### subscribe

▸ **subscribe**(`listener`): `Unsubscribe`

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | () => `void` | A callback to be invoked on every dispatch. |

#### Returns

`Unsubscribe`

A function to remove this change listener.

#### Inherited from

Redux.Store.subscribe

#### Defined in

E:/WorkC/vortex/node_modules/redux/index.d.ts:325
