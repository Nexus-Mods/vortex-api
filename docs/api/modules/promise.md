[vortex_devel](../README.md) / [Exports](../modules.md) / Promise

# Namespace: Promise

## Table of contents

### Classes

- [AggregateError](../classes/promise.aggregateerror.md)
- [CancellationError](../classes/promise.cancellationerror.md)
- [Disposer](../classes/promise.disposer.md)
- [OperationalError](../classes/promise.operationalerror.md)
- [TimeoutError](../classes/promise.timeouterror.md)

### Interfaces

- [ConcurrencyOption](../interfaces/promise.concurrencyoption.md)
- [CoroutineOptions](../interfaces/promise.coroutineoptions.md)
- [FromNodeOptions](../interfaces/promise.fromnodeoptions.md)
- [Inspection](../interfaces/promise.inspection.md)
- [PromisifyAllOptions](../interfaces/promise.promisifyalloptions.md)
- [PromisifyOptions](../interfaces/promise.promisifyoptions.md)
- [Resolver](../interfaces/promise.resolver.md)
- [SpreadOption](../interfaces/promise.spreadoption.md)

### Type aliases

- [ResolvableProps](promise.md#resolvableprops)
- [Thenable](promise.md#thenable)

### Functions

- [getNewLibraryCopy](promise.md#getnewlibrarycopy)
- [noConflict](promise.md#noconflict)
- [setScheduler](promise.md#setscheduler)

## Type aliases

### ResolvableProps

Ƭ **ResolvableProps**<T\>: *object* & { [K in keyof T]: PromiseLike<T[K]\> \| T[K]}

#### Type parameters:

Name |
:------ |
`T` |

Defined in: node_modules/@types/bluebird/index.d.ts:1035

___

### Thenable

Ƭ **Thenable**<T\>: *PromiseLike*<T\>

**`deprecated`** Use PromiseLike<T> directly.

#### Type parameters:

Name |
:------ |
`T` |

Defined in: node_modules/@types/bluebird/index.d.ts:1033

## Functions

### getNewLibraryCopy

▸ **getNewLibraryCopy**(): *typeof* [*Promise*](../classes/promise.md)

Returns a new independent copy of the Bluebird library.

This method should be used before you use any of the methods which would otherwise alter the global Bluebird object - to avoid polluting global state.

**Returns:** *typeof* [*Promise*](../classes/promise.md)

Defined in: node_modules/@types/bluebird/index.d.ts:1105

___

### noConflict

▸ **noConflict**(): *typeof* [*Promise*](../classes/promise.md)

This is relevant to browser environments with no module loader.

Release control of the Promise namespace to whatever it was before this library was loaded. Returns a reference to the library namespace so you can attach it to something else.

**Returns:** *typeof* [*Promise*](../classes/promise.md)

Defined in: node_modules/@types/bluebird/index.d.ts:1112

___

### setScheduler

▸ **setScheduler**(`scheduler`: (`callback`: (...`args`: *any*[]) => *void*) => *void*): *void*

Changes how bluebird schedules calls a-synchronously.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`scheduler` | (`callback`: (...`args`: *any*[]) => *void*) => *void* | Should be a function that asynchronously schedules                  the calling of the passed in function    |

**Returns:** *void*

Defined in: node_modules/@types/bluebird/index.d.ts:1120
