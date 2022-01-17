[vortex_devel](../README.md) / [Exports](../modules.md) / Promise

# Namespace: Promise

## Table of contents

### Classes

- [AggregateError](../classes/Promise.AggregateError.md)
- [CancellationError](../classes/Promise.CancellationError.md)
- [Disposer](../classes/Promise.Disposer.md)
- [OperationalError](../classes/Promise.OperationalError.md)
- [TimeoutError](../classes/Promise.TimeoutError.md)

### Interfaces

- [ConcurrencyOption](../interfaces/Promise.ConcurrencyOption.md)
- [CoroutineOptions](../interfaces/Promise.CoroutineOptions.md)
- [FromNodeOptions](../interfaces/Promise.FromNodeOptions.md)
- [Inspection](../interfaces/Promise.Inspection.md)
- [PromisifyAllOptions](../interfaces/Promise.PromisifyAllOptions.md)
- [PromisifyOptions](../interfaces/Promise.PromisifyOptions.md)
- [Resolver](../interfaces/Promise.Resolver.md)
- [SpreadOption](../interfaces/Promise.SpreadOption.md)

### Type aliases

- [ResolvableProps](Promise.md#resolvableprops)
- [Thenable](Promise.md#thenable)

### Functions

- [getNewLibraryCopy](Promise.md#getnewlibrarycopy)
- [noConflict](Promise.md#noconflict)
- [setScheduler](Promise.md#setscheduler)

## Type aliases

### ResolvableProps

Ƭ **ResolvableProps**<`T`\>: `object` & { [K in keyof T]: PromiseLike<T[K]\> \| T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1035

___

### Thenable

Ƭ **Thenable**<`T`\>: `PromiseLike`<`T`\>

**`deprecated`** Use PromiseLike<T> directly.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1033

## Functions

### getNewLibraryCopy

▸ **getNewLibraryCopy**(): typeof [`Promise`](../classes/Promise.md)

Returns a new independent copy of the Bluebird library.

This method should be used before you use any of the methods which would otherwise alter the global Bluebird object - to avoid polluting global state.

#### Returns

typeof [`Promise`](../classes/Promise.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1105

___

### noConflict

▸ **noConflict**(): typeof [`Promise`](../classes/Promise.md)

This is relevant to browser environments with no module loader.

Release control of the Promise namespace to whatever it was before this library was loaded. Returns a reference to the library namespace so you can attach it to something else.

#### Returns

typeof [`Promise`](../classes/Promise.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1112

___

### setScheduler

▸ **setScheduler**(`scheduler`): `void`

Changes how bluebird schedules calls a-synchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | (`callback`: (...`args`: `any`[]) => `void`) => `void` | Should be a function that asynchronously schedules                  the calling of the passed in function |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1120
