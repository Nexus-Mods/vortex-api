[vortex_devel](../README.md) / [Exports](../modules.md) / Promise

# Class: Promise<R\>

## Type parameters

Name |
:------ |
`R` |

## Implements

* *PromiseLike*<R\>
* [*Inspection*](../interfaces/promise.inspection.md)<R\>

## Table of contents

### Constructors

- [constructor](promise.md#constructor)

### Properties

- [caught](promise.md#caught)
- [Promise](promise.md#promise)
- [version](promise.md#version)

### Methods

- [all](promise.md#all)
- [any](promise.md#any)
- [asCallback](promise.md#ascallback)
- [bind](promise.md#bind)
- [call](promise.md#call)
- [cancel](promise.md#cancel)
- [catch](promise.md#catch)
- [catchReturn](promise.md#catchreturn)
- [catchThrow](promise.md#catchthrow)
- [delay](promise.md#delay)
- [disposer](promise.md#disposer)
- [done](promise.md#done)
- [each](promise.md#each)
- [error](promise.md#error)
- [filter](promise.md#filter)
- [finally](promise.md#finally)
- [get](promise.md#get)
- [isCancelled](promise.md#iscancelled)
- [isFulfilled](promise.md#isfulfilled)
- [isPending](promise.md#ispending)
- [isRejected](promise.md#isrejected)
- [isResolved](promise.md#isresolved)
- [lastly](promise.md#lastly)
- [map](promise.md#map)
- [mapSeries](promise.md#mapseries)
- [nodeify](promise.md#nodeify)
- [props](promise.md#props)
- [race](promise.md#race)
- [reason](promise.md#reason)
- [reduce](promise.md#reduce)
- [reflect](promise.md#reflect)
- [return](promise.md#return)
- [some](promise.md#some)
- [spread](promise.md#spread)
- [suppressUnhandledRejections](promise.md#suppressunhandledrejections)
- [tap](promise.md#tap)
- [tapCatch](promise.md#tapcatch)
- [then](promise.md#then)
- [thenReturn](promise.md#thenreturn)
- [thenThrow](promise.md#thenthrow)
- [throw](promise.md#throw)
- [timeout](promise.md#timeout)
- [toJSON](promise.md#tojson)
- [toString](promise.md#tostring)
- [value](promise.md#value)
- [all](promise.md#all)
- [any](promise.md#any)
- [attempt](promise.md#attempt)
- [bind](promise.md#bind)
- [cast](promise.md#cast)
- [config](promise.md#config)
- [coroutine](promise.md#coroutine)
- [defer](promise.md#defer)
- [delay](promise.md#delay)
- [each](promise.md#each)
- [filter](promise.md#filter)
- [fromCallback](promise.md#fromcallback)
- [fromNode](promise.md#fromnode)
- [is](promise.md#is)
- [join](promise.md#join)
- [longStackTraces](promise.md#longstacktraces)
- [map](promise.md#map)
- [mapSeries](promise.md#mapseries)
- [method](promise.md#method)
- [onPossiblyUnhandledRejection](promise.md#onpossiblyunhandledrejection)
- [promisify](promise.md#promisify)
- [promisifyAll](promise.md#promisifyall)
- [props](promise.md#props)
- [race](promise.md#race)
- [reduce](promise.md#reduce)
- [reject](promise.md#reject)
- [resolve](promise.md#resolve)
- [some](promise.md#some)
- [try](promise.md#try)
- [using](promise.md#using)

## Constructors

### constructor

\+ **new Promise**<R\>(`callback`: (`resolve`: (`thenableOrResult?`: R \| *PromiseLike*<R\>) => *void*, `reject`: (`error?`: *any*) => *void*, `onCancel?`: (`callback`: () => *void*) => *void*) => *void*): [*Promise*](promise.md)<R\>

Create a new promise. The passed in function will receive functions `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
If promise cancellation is enabled, passed in function will receive one more function argument `onCancel` that allows to register an optional cancellation callback.

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`resolve`: (`thenableOrResult?`: R \| *PromiseLike*<R\>) => *void*, `reject`: (`error?`: *any*) => *void*, `onCancel?`: (`callback`: () => *void*) => *void*) => *void* |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:40

## Properties

### caught

• **caught**: (`onReject`: (`error`: *any*) => R \| *PromiseLike*<R\>) => [*Promise*](promise.md)<R\><U\>(`onReject`: (`error`: *any*) => U \| *PromiseLike*<U\>) => [*Promise*](promise.md)<R \| U\><E1, E2, E3, E4, E5\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `filter5`: *CatchFilter*<E5\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4 \| E5) => R \| *PromiseLike*<R\>) => [*Promise*](promise.md)<R\><U, E1, E2, E3, E4, E5\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `filter5`: *CatchFilter*<E5\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4 \| E5) => U \| *PromiseLike*<U\>) => [*Promise*](promise.md)<R \| U\><E1, E2, E3, E4\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4) => R \| *PromiseLike*<R\>) => [*Promise*](promise.md)<R\><U, E1, E2, E3, E4\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4) => U \| *PromiseLike*<U\>) => [*Promise*](promise.md)<R \| U\><E1, E2, E3\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `onReject`: (`error`: E1 \| E2 \| E3) => R \| *PromiseLike*<R\>) => [*Promise*](promise.md)<R\><U, E1, E2, E3\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `onReject`: (`error`: E1 \| E2 \| E3) => U \| *PromiseLike*<U\>) => [*Promise*](promise.md)<R \| U\><E1, E2\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `onReject`: (`error`: E1 \| E2) => R \| *PromiseLike*<R\>) => [*Promise*](promise.md)<R\><U, E1, E2\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `onReject`: (`error`: E1 \| E2) => U \| *PromiseLike*<U\>) => [*Promise*](promise.md)<R \| U\><E1\>(`filter1`: *CatchFilter*<E1\>, `onReject`: (`error`: E1) => R \| *PromiseLike*<R\>) => [*Promise*](promise.md)<R\><U, E1\>(`filter1`: *CatchFilter*<E1\>, `onReject`: (`error`: E1) => U \| *PromiseLike*<U\>) => [*Promise*](promise.md)<R \| U\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

#### Type declaration:

▸ (`onReject`: (`error`: *any*) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

#### Parameters:

Name | Type |
:------ | :------ |
`onReject` | (`error`: *any*) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:66

▸ <U\>(`onReject`: (`error`: *any*) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`onReject` | (`error`: *any*) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:67

▸ <E1, E2, E3, E4, E5\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `filter5`: *CatchFilter*<E5\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4 \| E5) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

This extends `.catch` to work more like catch-clauses in languages like Java or C#.

Instead of manually checking `instanceof` or `.name === "SomeError"`,
you may specify a number of error constructors which are eligible for this catch handler.
The catch handler that is first met that has eligible constructors specified, is the one that will be called.

This method also supports predicate-based filters.
If you pass a predicate function instead of an error constructor, the predicate will receive the error as an argument.
The return result of the predicate will be used determine whether the error handler should be called.

Alias `.caught();` for compatibility with earlier ECMAScript version.

#### Type parameters:

Name |
:------ |
`E1` |
`E2` |
`E3` |
`E4` |
`E5` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`filter4` | *CatchFilter*<E4\> |
`filter5` | *CatchFilter*<E5\> |
`onReject` | (`error`: E1 \| E2 \| E3 \| E4 \| E5) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:82

▸ <U, E1, E2, E3, E4, E5\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `filter5`: *CatchFilter*<E5\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4 \| E5) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |
`E3` |
`E4` |
`E5` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`filter4` | *CatchFilter*<E4\> |
`filter5` | *CatchFilter*<E5\> |
`onReject` | (`error`: E1 \| E2 \| E3 \| E4 \| E5) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:90

▸ <E1, E2, E3, E4\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`E1` |
`E2` |
`E3` |
`E4` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`filter4` | *CatchFilter*<E4\> |
`onReject` | (`error`: E1 \| E2 \| E3 \| E4) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:99

▸ <U, E1, E2, E3, E4\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |
`E3` |
`E4` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`filter4` | *CatchFilter*<E4\> |
`onReject` | (`error`: E1 \| E2 \| E3 \| E4) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:107

▸ <E1, E2, E3\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `onReject`: (`error`: E1 \| E2 \| E3) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`E1` |
`E2` |
`E3` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`onReject` | (`error`: E1 \| E2 \| E3) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:115

▸ <U, E1, E2, E3\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `onReject`: (`error`: E1 \| E2 \| E3) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |
`E3` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`onReject` | (`error`: E1 \| E2 \| E3) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:121

▸ <E1, E2\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `onReject`: (`error`: E1 \| E2) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`E1` |
`E2` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`onReject` | (`error`: E1 \| E2) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:128

▸ <U, E1, E2\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `onReject`: (`error`: E1 \| E2) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`onReject` | (`error`: E1 \| E2) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:133

▸ <E1\>(`filter1`: *CatchFilter*<E1\>, `onReject`: (`error`: E1) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`E1` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`onReject` | (`error`: E1) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:139

▸ <U, E1\>(`filter1`: *CatchFilter*<E1\>, `onReject`: (`error`: E1) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`onReject` | (`error`: E1) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:143

Defined in: node_modules/@types/bluebird/index.d.ts:155

___

### Promise

▪ `Static` **Promise**: *typeof* [*Promise*](promise.md)

Create a new promise. The passed in function will receive functions `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
If promise cancellation is enabled, passed in function will receive one more function argument `onCancel` that allows to register an optional cancellation callback.

Defined in: node_modules/@types/bluebird/index.d.ts:945

___

### version

▪ `Static` **version**: *string*

The version number of the library

Defined in: node_modules/@types/bluebird/index.d.ts:950

## Methods

### all

▸ **all**<U\>(): [*Promise*](promise.md)<U[]\>

Same as calling `Promise.all(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters:

Name |
:------ |
`U` |

**Returns:** [*Promise*](promise.md)<U[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:463

___

### any

▸ **any**<U\>(): [*Promise*](promise.md)<U\>

Same as calling `Promise.any(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters:

Name |
:------ |
`U` |

**Returns:** [*Promise*](promise.md)<U\>

Defined in: node_modules/@types/bluebird/index.d.ts:475

___

### asCallback

▸ **asCallback**(`callback`: (`err`: *any*, `value?`: R) => *void*, `options?`: [*SpreadOption*](../interfaces/promise.spreadoption.md)): [*Promise*](promise.md)<R\>

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`err`: *any*, `value?`: R) => *void* |
`options?` | [*SpreadOption*](../interfaces/promise.spreadoption.md) |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:250

▸ **asCallback**(...`sink`: *any*[]): [*Promise*](promise.md)<R\>

#### Parameters:

Name | Type |
:------ | :------ |
`...sink` | *any*[] |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:251

___

### bind

▸ **bind**(`thisArg`: *any*): [*Promise*](promise.md)<R\>

Create a promise that follows this promise, but is bound to the given `thisArg` value. A bound promise will call its handlers with the bound value set to `this`.

Additionally promises derived from a bound promise will also be bound promises with the same `thisArg` binding as the original promise.

#### Parameters:

Name | Type |
:------ | :------ |
`thisArg` | *any* |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:178

___

### call

▸ **call**(`propertyName`: keyof R, ...`args`: *any*[]): [*Promise*](promise.md)<any\>

This is a convenience method for doing:

<code>
promise.then(function(obj){
    return obj[propertyName].call(obj, arg...);
});
</code>

#### Parameters:

Name | Type |
:------ | :------ |
`propertyName` | keyof R |
`...args` | *any*[] |

**Returns:** [*Promise*](promise.md)<any\>

Defined in: node_modules/@types/bluebird/index.d.ts:308

___

### cancel

▸ **cancel**(): *void*

Cancel this `promise`. Will not do anything if this promise is already settled or if the cancellation feature has not been enabled

**Returns:** *void*

Defined in: node_modules/@types/bluebird/index.d.ts:520

___

### catch

▸ **catch**(`onReject`: (`error`: *any*) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

#### Parameters:

Name | Type |
:------ | :------ |
`onReject` | (`error`: *any*) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:66

▸ **catch**<U\>(`onReject`: (`error`: *any*) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`onReject` | (`error`: *any*) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:67

▸ **catch**<E1, E2, E3, E4, E5\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `filter5`: *CatchFilter*<E5\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4 \| E5) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

This extends `.catch` to work more like catch-clauses in languages like Java or C#.

Instead of manually checking `instanceof` or `.name === "SomeError"`,
you may specify a number of error constructors which are eligible for this catch handler.
The catch handler that is first met that has eligible constructors specified, is the one that will be called.

This method also supports predicate-based filters.
If you pass a predicate function instead of an error constructor, the predicate will receive the error as an argument.
The return result of the predicate will be used determine whether the error handler should be called.

Alias `.caught();` for compatibility with earlier ECMAScript version.

#### Type parameters:

Name |
:------ |
`E1` |
`E2` |
`E3` |
`E4` |
`E5` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`filter4` | *CatchFilter*<E4\> |
`filter5` | *CatchFilter*<E5\> |
`onReject` | (`error`: E1 \| E2 \| E3 \| E4 \| E5) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:82

▸ **catch**<U, E1, E2, E3, E4, E5\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `filter5`: *CatchFilter*<E5\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4 \| E5) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |
`E3` |
`E4` |
`E5` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`filter4` | *CatchFilter*<E4\> |
`filter5` | *CatchFilter*<E5\> |
`onReject` | (`error`: E1 \| E2 \| E3 \| E4 \| E5) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:90

▸ **catch**<E1, E2, E3, E4\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`E1` |
`E2` |
`E3` |
`E4` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`filter4` | *CatchFilter*<E4\> |
`onReject` | (`error`: E1 \| E2 \| E3 \| E4) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:99

▸ **catch**<U, E1, E2, E3, E4\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |
`E3` |
`E4` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`filter4` | *CatchFilter*<E4\> |
`onReject` | (`error`: E1 \| E2 \| E3 \| E4) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:107

▸ **catch**<E1, E2, E3\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `onReject`: (`error`: E1 \| E2 \| E3) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`E1` |
`E2` |
`E3` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`onReject` | (`error`: E1 \| E2 \| E3) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:115

▸ **catch**<U, E1, E2, E3\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `onReject`: (`error`: E1 \| E2 \| E3) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |
`E3` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`onReject` | (`error`: E1 \| E2 \| E3) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:121

▸ **catch**<E1, E2\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `onReject`: (`error`: E1 \| E2) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`E1` |
`E2` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`onReject` | (`error`: E1 \| E2) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:128

▸ **catch**<U, E1, E2\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `onReject`: (`error`: E1 \| E2) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`onReject` | (`error`: E1 \| E2) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:133

▸ **catch**<E1\>(`filter1`: *CatchFilter*<E1\>, `onReject`: (`error`: E1) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`E1` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`onReject` | (`error`: E1) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:139

▸ **catch**<U, E1\>(`filter1`: *CatchFilter*<E1\>, `onReject`: (`error`: E1) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`onReject` | (`error`: E1) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:143

___

### catchReturn

▸ **catchReturn**<U\>(`value`: U): [*Promise*](promise.md)<R \| U\>

Convenience method for:

<code>
.catch(function() {
   return value;
});
</code>

in the case where `value` doesn't change its value. That means `value` is bound at the time of calling `.catchReturn()`

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`value` | U |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:365

▸ **catchReturn**<U\>(`filter1`: *CatchFilter*<Error\>, `filter2`: *CatchFilter*<Error\>, `filter3`: *CatchFilter*<Error\>, `filter4`: *CatchFilter*<Error\>, `filter5`: *CatchFilter*<Error\>, `value`: U): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<Error\> |
`filter2` | *CatchFilter*<Error\> |
`filter3` | *CatchFilter*<Error\> |
`filter4` | *CatchFilter*<Error\> |
`filter5` | *CatchFilter*<Error\> |
`value` | U |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:368

▸ **catchReturn**<U\>(`filter1`: *CatchFilter*<Error\>, `filter2`: *CatchFilter*<Error\>, `filter3`: *CatchFilter*<Error\>, `filter4`: *CatchFilter*<Error\>, `value`: U): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<Error\> |
`filter2` | *CatchFilter*<Error\> |
`filter3` | *CatchFilter*<Error\> |
`filter4` | *CatchFilter*<Error\> |
`value` | U |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:376

▸ **catchReturn**<U\>(`filter1`: *CatchFilter*<Error\>, `filter2`: *CatchFilter*<Error\>, `filter3`: *CatchFilter*<Error\>, `value`: U): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<Error\> |
`filter2` | *CatchFilter*<Error\> |
`filter3` | *CatchFilter*<Error\> |
`value` | U |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:383

▸ **catchReturn**<U\>(`filter1`: *CatchFilter*<Error\>, `filter2`: *CatchFilter*<Error\>, `value`: U): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<Error\> |
`filter2` | *CatchFilter*<Error\> |
`value` | U |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:389

▸ **catchReturn**<U\>(`filter1`: *CatchFilter*<Error\>, `value`: U): [*Promise*](promise.md)<R \| U\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<Error\> |
`value` | U |

**Returns:** [*Promise*](promise.md)<R \| U\>

Defined in: node_modules/@types/bluebird/index.d.ts:394

___

### catchThrow

▸ **catchThrow**(`reason`: Error): [*Promise*](promise.md)<R\>

Convenience method for:

<code>
.catch(function() {
   throw reason;
});
</code>
Same limitations apply as with `.catchReturn()`.

#### Parameters:

Name | Type |
:------ | :------ |
`reason` | Error |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:409

▸ **catchThrow**(`filter1`: *CatchFilter*<Error\>, `filter2`: *CatchFilter*<Error\>, `filter3`: *CatchFilter*<Error\>, `filter4`: *CatchFilter*<Error\>, `filter5`: *CatchFilter*<Error\>, `reason`: Error): [*Promise*](promise.md)<R\>

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<Error\> |
`filter2` | *CatchFilter*<Error\> |
`filter3` | *CatchFilter*<Error\> |
`filter4` | *CatchFilter*<Error\> |
`filter5` | *CatchFilter*<Error\> |
`reason` | Error |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:412

▸ **catchThrow**(`filter1`: *CatchFilter*<Error\>, `filter2`: *CatchFilter*<Error\>, `filter3`: *CatchFilter*<Error\>, `filter4`: *CatchFilter*<Error\>, `reason`: Error): [*Promise*](promise.md)<R\>

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<Error\> |
`filter2` | *CatchFilter*<Error\> |
`filter3` | *CatchFilter*<Error\> |
`filter4` | *CatchFilter*<Error\> |
`reason` | Error |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:420

▸ **catchThrow**(`filter1`: *CatchFilter*<Error\>, `filter2`: *CatchFilter*<Error\>, `filter3`: *CatchFilter*<Error\>, `reason`: Error): [*Promise*](promise.md)<R\>

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<Error\> |
`filter2` | *CatchFilter*<Error\> |
`filter3` | *CatchFilter*<Error\> |
`reason` | Error |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:427

▸ **catchThrow**(`filter1`: *CatchFilter*<Error\>, `filter2`: *CatchFilter*<Error\>, `reason`: Error): [*Promise*](promise.md)<R\>

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<Error\> |
`filter2` | *CatchFilter*<Error\> |
`reason` | Error |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:433

▸ **catchThrow**(`filter1`: *CatchFilter*<Error\>, `reason`: Error): [*Promise*](promise.md)<R\>

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<Error\> |
`reason` | Error |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:438

___

### delay

▸ **delay**(`ms`: *number*): [*Promise*](promise.md)<R\>

Same as calling `Promise.delay(ms, this)`.

#### Parameters:

Name | Type |
:------ | :------ |
`ms` | *number* |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:229

___

### disposer

▸ **disposer**(`disposeFn`: (`arg`: R, `promise`: [*Promise*](promise.md)<R\>) => *void* \| *PromiseLike*<void\>): [*Disposer*](promise.disposer.md)<R\>

A meta method used to specify the disposer method that cleans up a resource when using `Promise.using`.

Returns a Disposer object which encapsulates both the resource as well as the method to clean it up.
 The user can pass this object to `Promise.using` to get access to the resource when it becomes available,
 as well as to ensure its automatically cleaned up.

The second argument passed to a disposer is the result promise of the using block, which you can
 inspect synchronously.

#### Parameters:

Name | Type |
:------ | :------ |
`disposeFn` | (`arg`: R, `promise`: [*Promise*](promise.md)<R\>) => *void* \| *PromiseLike*<void\> |

**Returns:** [*Disposer*](promise.disposer.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:899

___

### done

▸ **done**<U\>(`onFulfilled?`: (`value`: R) => U \| *PromiseLike*<U\>, `onRejected?`: (`error`: *any*) => U \| *PromiseLike*<U\>): *void*

Like `.then()`, but any unhandled rejection that ends up here will be thrown as an error.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`onFulfilled?` | (`value`: R) => U \| *PromiseLike*<U\> |
`onRejected?` | (`error`: *any*) => U \| *PromiseLike*<U\> |

**Returns:** *void*

Defined in: node_modules/@types/bluebird/index.d.ts:183

___

### each

▸ **each**<R, U\>(`iterator`: (`item`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R[]\>

Same as calling ``Bluebird.each(thisPromise, iterator)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters:

Name |
:------ |
`R` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`iterator` | (`item`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:510

___

### error

▸ **error**<U\>(`onReject`: (`reason`: *any*) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<U\>

Like `.catch` but instead of catching all types of exceptions, it only catches those that don't originate from thrown errors but rather from explicit rejections.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`onReject` | (`reason`: *any*) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<U\>

Defined in: node_modules/@types/bluebird/index.d.ts:160

___

### filter

▸ **filter**<U\>(`filterer`: (`item`: U, `index`: *number*, `arrayLength`: *number*) => *boolean* \| *PromiseLike*<boolean\>, `options?`: [*ConcurrencyOption*](../interfaces/promise.concurrencyoption.md)): [*Promise*](promise.md)<U[]\>

Same as calling ``Promise.filter(thisPromise, filterer)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`filterer` | (`item`: U, `index`: *number*, `arrayLength`: *number*) => *boolean* \| *PromiseLike*<boolean\> |
`options?` | [*ConcurrencyOption*](../interfaces/promise.concurrencyoption.md) |

**Returns:** [*Promise*](promise.md)<U[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:505

___

### finally

▸ **finally**<U\>(`handler`: () => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R\>

Pass a handler that will be called regardless of this promise's fate. Returns a new promise chained from this promise.

There are special semantics for `.finally()` in that the final value cannot be modified from the handler.

Alias `.lastly();` for compatibility with earlier ECMAScript version.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`handler` | () => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:169

___

### get

▸ **get**<U\>(`key`: U): [*Promise*](promise.md)<R[U]\>

This is a convenience method for doing:

<code>
promise.then(function(obj){
    return obj[propertyName];
});
</code>

#### Type parameters:

Name | Type |
:------ | :------ |
`U` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`key` | U |

**Returns:** [*Promise*](promise.md)<R[U]\>

Defined in: node_modules/@types/bluebird/index.d.ts:319

___

### isCancelled

▸ **isCancelled**(): *boolean*

See if this `promise` has been cancelled.

**Returns:** *boolean*

Implementation of: [Inspection](../interfaces/promise.inspection.md)

Defined in: node_modules/@types/bluebird/index.d.ts:271

___

### isFulfilled

▸ **isFulfilled**(): *boolean*

See if this `promise` has been fulfilled.

**Returns:** *boolean*

Implementation of: [Inspection](../interfaces/promise.inspection.md)

Defined in: node_modules/@types/bluebird/index.d.ts:256

___

### isPending

▸ **isPending**(): *boolean*

See if this `promise` is still defer.

**Returns:** *boolean*

Implementation of: [Inspection](../interfaces/promise.inspection.md)

Defined in: node_modules/@types/bluebird/index.d.ts:266

___

### isRejected

▸ **isRejected**(): *boolean*

See if this `promise` has been rejected.

**Returns:** *boolean*

Implementation of: [Inspection](../interfaces/promise.inspection.md)

Defined in: node_modules/@types/bluebird/index.d.ts:261

___

### isResolved

▸ **isResolved**(): *boolean*

See if this `promise` is resolved -> either fulfilled or rejected.

**Returns:** *boolean*

Defined in: node_modules/@types/bluebird/index.d.ts:276

___

### lastly

▸ **lastly**<U\>(`handler`: () => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`handler` | () => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:171

___

### map

▸ **map**<Q, U\>(`mapper`: (`item`: Q, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\>, `options?`: [*ConcurrencyOption*](../interfaces/promise.concurrencyoption.md)): [*Promise*](promise.md)<U[]\>

Same as calling `Bluebird.map(thisPromise, mapper)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters:

Name |
:------ |
`Q` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`mapper` | (`item`: Q, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\> |
`options?` | [*ConcurrencyOption*](../interfaces/promise.concurrencyoption.md) |

**Returns:** [*Promise*](promise.md)<U[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:493

___

### mapSeries

▸ **mapSeries**<R, U\>(`iterator`: (`item`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<U[]\>

Same as calling ``Bluebird.mapSeries(thisPromise, iterator)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters:

Name |
:------ |
`R` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`iterator` | (`item`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<U[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:515

___

### nodeify

▸ **nodeify**(`callback`: (`err`: *any*, `value?`: R) => *void*, `options?`: [*SpreadOption*](../interfaces/promise.spreadoption.md)): [*Promise*](promise.md)<R\>

Register a node-style callback on this promise.

When this promise is is either fulfilled or rejected,
the node callback will be called back with the node.js convention where error reason is the first argument and success value is the second argument.
The error argument will be `null` in case of success.
If the `callback` argument is not a function, this method does not do anything.

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`err`: *any*, `value?`: R) => *void* |
`options?` | [*SpreadOption*](../interfaces/promise.spreadoption.md) |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:248

▸ **nodeify**(...`sink`: *any*[]): [*Promise*](promise.md)<R\>

#### Parameters:

Name | Type |
:------ | :------ |
`...sink` | *any*[] |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:249

___

### props

▸ **props**<K, V\>(): [*Promise*](promise.md)<Map<K, V\>\>

Same as calling `Promise.props(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters:

Name |
:------ |
`K` |
`V` |

**Returns:** [*Promise*](promise.md)<Map<K, V\>\>

Defined in: node_modules/@types/bluebird/index.d.ts:468

▸ **props**<T\>(): [*Promise*](promise.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

**Returns:** [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:469

___

### race

▸ **race**<U\>(): [*Promise*](promise.md)<U\>

Same as calling `Promise.race(thisPromise, count)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters:

Name |
:------ |
`U` |

**Returns:** [*Promise*](promise.md)<U\>

Defined in: node_modules/@types/bluebird/index.d.ts:487

___

### reason

▸ **reason**(): *any*

Get the rejection reason for the underlying promise. Throws if the promise isn't rejected yet.

throws `TypeError`

**Returns:** *any*

Implementation of: [Inspection](../interfaces/promise.inspection.md)

Defined in: node_modules/@types/bluebird/index.d.ts:290

___

### reduce

▸ **reduce**<Q, U\>(`reducer`: (`memo`: U, `item`: Q, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\>, `initialValue?`: U): [*Promise*](promise.md)<U\>

Same as calling `Promise.reduce(thisPromise, Function reducer, initialValue)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters:

Name |
:------ |
`Q` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`reducer` | (`memo`: U, `item`: Q, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\> |
`initialValue?` | U |

**Returns:** [*Promise*](promise.md)<U\>

Defined in: node_modules/@types/bluebird/index.d.ts:499

___

### reflect

▸ **reflect**(): [*Promise*](promise.md)<[*Inspection*](../interfaces/promise.inspection.md)<R\>\>

Synchronously inspect the state of this `promise`. The `PromiseInspection` will represent the state of
the promise as snapshotted at the time of calling `.reflect()`.

**Returns:** [*Promise*](promise.md)<[*Inspection*](../interfaces/promise.inspection.md)<R\>\>

Defined in: node_modules/@types/bluebird/index.d.ts:296

▸ **reflect**(): [*Promise*](promise.md)<[*Inspection*](../interfaces/promise.inspection.md)<any\>\>

**Returns:** [*Promise*](promise.md)<[*Inspection*](../interfaces/promise.inspection.md)<any\>\>

Defined in: node_modules/@types/bluebird/index.d.ts:297

___

### return

▸ **return**(): [*Promise*](promise.md)<void\>

Convenience method for:

<code>
.then(function() {
   return value;
});
</code>

in the case where `value` doesn't change its value. That means `value` is bound at the time of calling `.return()`

Alias `.thenReturn();` for compatibility with earlier ECMAScript version.

**Returns:** [*Promise*](promise.md)<void\>

Defined in: node_modules/@types/bluebird/index.d.ts:334

▸ **return**<U\>(`value`: U): [*Promise*](promise.md)<U\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`value` | U |

**Returns:** [*Promise*](promise.md)<U\>

Defined in: node_modules/@types/bluebird/index.d.ts:335

___

### some

▸ **some**<U\>(`count`: *number*): [*Promise*](promise.md)<U[]\>

Same as calling `Promise.some(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`count` | *number* |

**Returns:** [*Promise*](promise.md)<U[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:481

___

### spread

▸ **spread**<U, W\>(`fulfilledHandler`: (...`values`: W[]) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<U\>

Like calling `.then`, but the fulfillment value or rejection reason is assumed to be an array, which is flattened to the formal parameters of the handlers.

#### Type parameters:

Name |
:------ |
`U` |
`W` |

#### Parameters:

Name | Type |
:------ | :------ |
`fulfilledHandler` | (...`values`: W[]) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<U\>

Defined in: node_modules/@types/bluebird/index.d.ts:456

▸ **spread**<U\>(`fulfilledHandler`: (...`args`: *any*[]) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<U\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`fulfilledHandler` | (...`args`: *any*[]) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<U\>

Defined in: node_modules/@types/bluebird/index.d.ts:457

___

### suppressUnhandledRejections

▸ **suppressUnhandledRejections**(): *void*

Basically sugar for doing: somePromise.catch(function(){});

Which is needed in case error handlers are attached asynchronously to the promise later, which would otherwise result in premature unhandled rejection reporting.

**Returns:** *void*

Defined in: node_modules/@types/bluebird/index.d.ts:527

___

### tap

▸ **tap**<U\>(`onFulFill`: (`value`: R) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R\>

Like `.finally()`, but not called for rejections.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`onFulFill` | (`value`: R) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:188

___

### tapCatch

▸ **tapCatch**<U\>(`onReject`: (`error?`: *any*) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R\>

Like `.catch()` but rethrows the error

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`onReject` | (`error?`: *any*) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:193

▸ **tapCatch**<U, E1, E2, E3, E4, E5\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `filter5`: *CatchFilter*<E5\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4 \| E5) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |
`E3` |
`E4` |
`E5` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`filter4` | *CatchFilter*<E4\> |
`filter5` | *CatchFilter*<E5\> |
`onReject` | (`error`: E1 \| E2 \| E3 \| E4 \| E5) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:195

▸ **tapCatch**<U, E1, E2, E3, E4\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `filter4`: *CatchFilter*<E4\>, `onReject`: (`error`: E1 \| E2 \| E3 \| E4) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |
`E3` |
`E4` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`filter4` | *CatchFilter*<E4\> |
`onReject` | (`error`: E1 \| E2 \| E3 \| E4) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:203

▸ **tapCatch**<U, E1, E2, E3\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `filter3`: *CatchFilter*<E3\>, `onReject`: (`error`: E1 \| E2 \| E3) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |
`E3` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`filter3` | *CatchFilter*<E3\> |
`onReject` | (`error`: E1 \| E2 \| E3) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:210

▸ **tapCatch**<U, E1, E2\>(`filter1`: *CatchFilter*<E1\>, `filter2`: *CatchFilter*<E2\>, `onReject`: (`error`: E1 \| E2) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |
`E2` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`filter2` | *CatchFilter*<E2\> |
`onReject` | (`error`: E1 \| E2) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:216

▸ **tapCatch**<U, E1\>(`filter1`: *CatchFilter*<E1\>, `onReject`: (`error`: E1) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`U` |
`E1` |

#### Parameters:

Name | Type |
:------ | :------ |
`filter1` | *CatchFilter*<E1\> |
`onReject` | (`error`: E1) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:221

___

### then

▸ **then**<U\>(`onFulfill?`: (`value`: R) => U \| *PromiseLike*<U\>, `onReject?`: (`error`: *any*) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<U\>

Promises/A+ `.then()`. Returns a new promise chained from this promise.

The new promise will be rejected or resolved depending on the passed `fulfilledHandler`, `rejectedHandler` and the state of this promise.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`onFulfill?` | (`value`: R) => U \| *PromiseLike*<U\> |
`onReject?` | (`error`: *any*) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<U\>

Defined in: node_modules/@types/bluebird/index.d.ts:53

▸ **then**<TResult1, TResult2\>(`onfulfilled?`: (`value`: R) => TResult1 \| *PromiseLike*<TResult1\>, `onrejected?`: (`reason`: *any*) => TResult2 \| *PromiseLike*<TResult2\>): [*Promise*](promise.md)<TResult1 \| TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult1` | R |
`TResult2` | *never* |

#### Parameters:

Name | Type |
:------ | :------ |
`onfulfilled?` | (`value`: R) => TResult1 \| *PromiseLike*<TResult1\> |
`onrejected?` | (`reason`: *any*) => TResult2 \| *PromiseLike*<TResult2\> |

**Returns:** [*Promise*](promise.md)<TResult1 \| TResult2\>

Defined in: node_modules/@types/bluebird/index.d.ts:54

___

### thenReturn

▸ **thenReturn**(): [*Promise*](promise.md)<void\>

**Returns:** [*Promise*](promise.md)<void\>

Defined in: node_modules/@types/bluebird/index.d.ts:336

▸ **thenReturn**<U\>(`value`: U): [*Promise*](promise.md)<U\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`value` | U |

**Returns:** [*Promise*](promise.md)<U\>

Defined in: node_modules/@types/bluebird/index.d.ts:337

___

### thenThrow

▸ **thenThrow**(`reason`: Error): [*Promise*](promise.md)<never\>

#### Parameters:

Name | Type |
:------ | :------ |
`reason` | Error |

**Returns:** [*Promise*](promise.md)<never\>

Defined in: node_modules/@types/bluebird/index.d.ts:352

___

### throw

▸ **throw**(`reason`: Error): [*Promise*](promise.md)<never\>

Convenience method for:

<code>
.then(function() {
   throw reason;
});
</code>
Same limitations apply as with `.return()`.

Alias `.thenThrow();` for compatibility with earlier ECMAScript version.

#### Parameters:

Name | Type |
:------ | :------ |
`reason` | Error |

**Returns:** [*Promise*](promise.md)<never\>

Defined in: node_modules/@types/bluebird/index.d.ts:351

___

### timeout

▸ **timeout**(`ms`: *number*, `message?`: *string* \| Error): [*Promise*](promise.md)<R\>

Returns a promise that will be fulfilled with this promise's fulfillment value or rejection reason.
 However, if this promise is not fulfilled or rejected within ms milliseconds, the returned promise
 is rejected with a TimeoutError or the error as the reason.

You may specify a custom error message with the `message` parameter.

#### Parameters:

Name | Type |
:------ | :------ |
`ms` | *number* |
`message?` | *string* \| Error |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:238

___

### toJSON

▸ **toJSON**(): *object*

This is implicitly called by `JSON.stringify` when serializing the object. Returns a serialized representation of the `Promise`.

**Returns:** *object*

Defined in: node_modules/@types/bluebird/index.d.ts:451

___

### toString

▸ **toString**(): *string*

Convert to String.

**Returns:** *string*

Defined in: node_modules/@types/bluebird/index.d.ts:446

___

### value

▸ **value**(): R

Get the fulfillment value of the underlying promise. Throws if the promise isn't fulfilled yet.

throws `TypeError`

**Returns:** R

Implementation of: [Inspection](../interfaces/promise.inspection.md)

Defined in: node_modules/@types/bluebird/index.d.ts:283

___

### all

▸ `Static`**all**<T1, T2, T3, T4, T5\>(`values`: [T1 \| *PromiseLike*<T1\>, T2 \| *PromiseLike*<T2\>, T3 \| *PromiseLike*<T3\>, T4 \| *PromiseLike*<T4\>, T5 \| *PromiseLike*<T5\>]): [*Promise*](promise.md)<[T1, T2, T3, T4, T5]\>

Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled when all the items in the array are fulfilled.
The promise's fulfillment value is an array with fulfillment values at respective positions to the original array.
If any promise in the array rejects, the returned promise is rejected with the rejection reason.

#### Type parameters:

Name |
:------ |
`T1` |
`T2` |
`T3` |
`T4` |
`T5` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | [T1 \| *PromiseLike*<T1\>, T2 \| *PromiseLike*<T2\>, T3 \| *PromiseLike*<T3\>, T4 \| *PromiseLike*<T4\>, T5 \| *PromiseLike*<T5\>] |

**Returns:** [*Promise*](promise.md)<[T1, T2, T3, T4, T5]\>

Defined in: node_modules/@types/bluebird/index.d.ts:727

▸ `Static`**all**<T1, T2, T3, T4\>(`values`: [T1 \| *PromiseLike*<T1\>, T2 \| *PromiseLike*<T2\>, T3 \| *PromiseLike*<T3\>, T4 \| *PromiseLike*<T4\>]): [*Promise*](promise.md)<[T1, T2, T3, T4]\>

#### Type parameters:

Name |
:------ |
`T1` |
`T2` |
`T3` |
`T4` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | [T1 \| *PromiseLike*<T1\>, T2 \| *PromiseLike*<T2\>, T3 \| *PromiseLike*<T3\>, T4 \| *PromiseLike*<T4\>] |

**Returns:** [*Promise*](promise.md)<[T1, T2, T3, T4]\>

Defined in: node_modules/@types/bluebird/index.d.ts:728

▸ `Static`**all**<T1, T2, T3\>(`values`: [T1 \| *PromiseLike*<T1\>, T2 \| *PromiseLike*<T2\>, T3 \| *PromiseLike*<T3\>]): [*Promise*](promise.md)<[T1, T2, T3]\>

#### Type parameters:

Name |
:------ |
`T1` |
`T2` |
`T3` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | [T1 \| *PromiseLike*<T1\>, T2 \| *PromiseLike*<T2\>, T3 \| *PromiseLike*<T3\>] |

**Returns:** [*Promise*](promise.md)<[T1, T2, T3]\>

Defined in: node_modules/@types/bluebird/index.d.ts:729

▸ `Static`**all**<T1, T2\>(`values`: [T1 \| *PromiseLike*<T1\>, T2 \| *PromiseLike*<T2\>]): [*Promise*](promise.md)<[T1, T2]\>

#### Type parameters:

Name |
:------ |
`T1` |
`T2` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | [T1 \| *PromiseLike*<T1\>, T2 \| *PromiseLike*<T2\>] |

**Returns:** [*Promise*](promise.md)<[T1, T2]\>

Defined in: node_modules/@types/bluebird/index.d.ts:730

▸ `Static`**all**<T1\>(`values`: [T1 \| *PromiseLike*<T1\>]): [*Promise*](promise.md)<[T1]\>

#### Type parameters:

Name |
:------ |
`T1` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | [T1 \| *PromiseLike*<T1\>] |

**Returns:** [*Promise*](promise.md)<[T1]\>

Defined in: node_modules/@types/bluebird/index.d.ts:731

▸ `Static`**all**<R\>(`values`: *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\>): [*Promise*](promise.md)<R[]\>

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\> |

**Returns:** [*Promise*](promise.md)<R[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:733

___

### any

▸ `Static`**any**<R\>(`values`: *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\>): [*Promise*](promise.md)<R\>

Like `Promise.some()`, with 1 as `count`. However, if the promise fulfills, the fulfillment value is not an array of 1 but the value directly.

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:756

___

### attempt

▸ `Static`**attempt**<R\>(`fn`: () => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | () => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:538

___

### bind

▸ `Static`**bind**(`thisArg`: *any*): [*Promise*](promise.md)<void\>

Sugar for `Promise.resolve(undefined).bind(thisArg);`. See `.bind()`.

#### Parameters:

Name | Type |
:------ | :------ |
`thisArg` | *any* |

**Returns:** [*Promise*](promise.md)<void\>

Defined in: node_modules/@types/bluebird/index.d.ts:579

___

### cast

▸ `Static`**cast**<R\>(`value`: R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

Cast the given `value` to a trusted promise.

If `value` is already a trusted `Promise`, it is returned as is. If `value` is not a thenable, a fulfilled is: Promise returned with `value` as its fulfillment value.
If `value` is a thenable (Promise-like object, like those returned by jQuery's `$.ajax`), returns a trusted that: Promise assimilates the state of the thenable.

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`value` | R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:574

___

### config

▸ `Static`**config**(`options`: { `cancellation?`: *boolean* ; `longStackTraces?`: *boolean* ; `monitoring?`: *boolean* ; `warnings?`: *boolean* \| { `wForgottenReturn`: *boolean*  }  }): *void*

Configure long stack traces, warnings, monitoring and cancellation.
Note that even though false is the default here, a development environment might be detected which automatically
 enables long stack traces and warnings.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | *object* | - |
`options.cancellation?` | *boolean* | Enable cancellation   |
`options.longStackTraces?` | *boolean* | Enable long stack traces   |
`options.monitoring?` | *boolean* | Enable monitoring   |
`options.warnings?` | *boolean* \| { `wForgottenReturn`: *boolean*  } | Enable warnings   |

**Returns:** *void*

Defined in: node_modules/@types/bluebird/index.d.ts:927

___

### coroutine

▸ `Static`**coroutine**<T\>(`generatorFunction`: () => *IterableIterator*<any\>, `options?`: [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md)): *function*

Returns a function that can use `yield` to run asynchronous code synchronously.

This feature requires the support of generators which are drafted in the next version of the language.
Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`generatorFunction` | () => *IterableIterator*<any\> |
`options?` | [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md) |

**Returns:** () => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:666

▸ `Static`**coroutine**<T, A1\>(`generatorFunction`: (`a1`: A1) => *IterableIterator*<any\>, `options?`: [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |

#### Parameters:

Name | Type |
:------ | :------ |
`generatorFunction` | (`a1`: A1) => *IterableIterator*<any\> |
`options?` | [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md) |

**Returns:** (`a1`: A1) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:670

▸ `Static`**coroutine**<T, A1, A2\>(`generatorFunction`: (`a1`: A1, `a2`: A2) => *IterableIterator*<any\>, `options?`: [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |
`A2` |

#### Parameters:

Name | Type |
:------ | :------ |
`generatorFunction` | (`a1`: A1, `a2`: A2) => *IterableIterator*<any\> |
`options?` | [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md) |

**Returns:** (`a1`: A1, `a2`: A2) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:674

▸ `Static`**coroutine**<T, A1, A2, A3\>(`generatorFunction`: (`a1`: A1, `a2`: A2, `a3`: A3) => *IterableIterator*<any\>, `options?`: [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |
`A2` |
`A3` |

#### Parameters:

Name | Type |
:------ | :------ |
`generatorFunction` | (`a1`: A1, `a2`: A2, `a3`: A3) => *IterableIterator*<any\> |
`options?` | [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md) |

**Returns:** (`a1`: A1, `a2`: A2, `a3`: A3) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:678

▸ `Static`**coroutine**<T, A1, A2, A3, A4\>(`generatorFunction`: (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4) => *IterableIterator*<any\>, `options?`: [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |
`A2` |
`A3` |
`A4` |

#### Parameters:

Name | Type |
:------ | :------ |
`generatorFunction` | (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4) => *IterableIterator*<any\> |
`options?` | [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md) |

**Returns:** (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:682

▸ `Static`**coroutine**<T, A1, A2, A3, A4, A5\>(`generatorFunction`: (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5) => *IterableIterator*<any\>, `options?`: [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |
`A2` |
`A3` |
`A4` |
`A5` |

#### Parameters:

Name | Type |
:------ | :------ |
`generatorFunction` | (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5) => *IterableIterator*<any\> |
`options?` | [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md) |

**Returns:** (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:686

▸ `Static`**coroutine**<T, A1, A2, A3, A4, A5, A6\>(`generatorFunction`: (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5, `a6`: A6) => *IterableIterator*<any\>, `options?`: [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |
`A2` |
`A3` |
`A4` |
`A5` |
`A6` |

#### Parameters:

Name | Type |
:------ | :------ |
`generatorFunction` | (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5, `a6`: A6) => *IterableIterator*<any\> |
`options?` | [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md) |

**Returns:** (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5, `a6`: A6) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:690

▸ `Static`**coroutine**<T, A1, A2, A3, A4, A5, A6, A7\>(`generatorFunction`: (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5, `a6`: A6, `a7`: A7) => *IterableIterator*<any\>, `options?`: [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |
`A2` |
`A3` |
`A4` |
`A5` |
`A6` |
`A7` |

#### Parameters:

Name | Type |
:------ | :------ |
`generatorFunction` | (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5, `a6`: A6, `a7`: A7) => *IterableIterator*<any\> |
`options?` | [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md) |

**Returns:** (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5, `a6`: A6, `a7`: A7) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:694

▸ `Static`**coroutine**<T, A1, A2, A3, A4, A5, A6, A7, A8\>(`generatorFunction`: (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5, `a6`: A6, `a7`: A7, `a8`: A8) => *IterableIterator*<any\>, `options?`: [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |
`A2` |
`A3` |
`A4` |
`A5` |
`A6` |
`A7` |
`A8` |

#### Parameters:

Name | Type |
:------ | :------ |
`generatorFunction` | (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5, `a6`: A6, `a7`: A7, `a8`: A8) => *IterableIterator*<any\> |
`options?` | [*CoroutineOptions*](../interfaces/promise.coroutineoptions.md) |

**Returns:** (`a1`: A1, `a2`: A2, `a3`: A3, `a4`: A4, `a5`: A5, `a6`: A6, `a7`: A7, `a8`: A8) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:698

___

### defer

▸ `Static`**defer**<R\>(): [*Resolver*](../interfaces/promise.resolver.md)<R\>

Create a promise with undecided fate and return a `PromiseResolver` to control it. See resolution?: Promise(#promise-resolution).

#### Type parameters:

Name |
:------ |
`R` |

**Returns:** [*Resolver*](../interfaces/promise.resolver.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:566

___

### delay

▸ `Static`**delay**<R\>(`ms`: *number*, `value`: R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

Returns a promise that will be resolved with value (or undefined) after given ms milliseconds.
If value is a promise, the delay will start counting down when it is fulfilled and the returned
 promise will be fulfilled with the fulfillment value of the value promise.

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`ms` | *number* |
`value` | R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:599

▸ `Static`**delay**(`ms`: *number*): [*Promise*](promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`ms` | *number* |

**Returns:** [*Promise*](promise.md)<void\>

Defined in: node_modules/@types/bluebird/index.d.ts:600

___

### each

▸ `Static`**each**<R, U\>(`values`: *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\>, `iterator`: (`item`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<R[]\>

Iterate over an array, or a promise of an array, which contains promises (or a mix of promises and values) with the given iterator function with the signature (item, index, value) where item is the resolved value of a respective promise in the input array.
Iteration happens serially. If any promise in the input array is rejected the returned promise is rejected as well.

Resolves to the original array unmodified, this method is meant to be used for side effects.
If the iterator function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.

#### Type parameters:

Name |
:------ |
`R` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\> |
`iterator` | (`item`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<R[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:870

___

### filter

▸ `Static`**filter**<R\>(`values`: *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\>, `filterer`: (`item`: R, `index`: *number*, `arrayLength`: *number*) => *boolean* \| *PromiseLike*<boolean\>, `option?`: [*ConcurrencyOption*](../interfaces/promise.concurrencyoption.md)): [*Promise*](promise.md)<R[]\>

Filter an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `filterer` function with the signature `(item, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array.
If any promise in the input array is rejected the returned promise is rejected as well.

The return values from the filtered functions are coerced to booleans, with the exception of promises and thenables which are awaited for their eventual result.

*The original array is not modified.

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\> |
`filterer` | (`item`: R, `index`: *number*, `arrayLength`: *number*) => *boolean* \| *PromiseLike*<boolean\> |
`option?` | [*ConcurrencyOption*](../interfaces/promise.concurrencyoption.md) |

**Returns:** [*Promise*](promise.md)<R[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:857

___

### fromCallback

▸ `Static`**fromCallback**(`resolver`: (`callback`: (`err`: *any*, `result?`: *any*) => *void*) => *void*, `options?`: [*FromNodeOptions*](../interfaces/promise.fromnodeoptions.md)): [*Promise*](promise.md)<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`resolver` | (`callback`: (`err`: *any*, `result?`: *any*) => *void*) => *void* |
`options?` | [*FromNodeOptions*](../interfaces/promise.fromnodeoptions.md) |

**Returns:** [*Promise*](promise.md)<any\>

Defined in: node_modules/@types/bluebird/index.d.ts:655

▸ `Static`**fromCallback**<T\>(`resolver`: (`callback`: (`err`: *any*, `result?`: T) => *void*) => *void*, `options?`: [*FromNodeOptions*](../interfaces/promise.fromnodeoptions.md)): [*Promise*](promise.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`resolver` | (`callback`: (`err`: *any*, `result?`: T) => *void*) => *void* |
`options?` | [*FromNodeOptions*](../interfaces/promise.fromnodeoptions.md) |

**Returns:** [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:656

___

### fromNode

▸ `Static`**fromNode**(`resolver`: (`callback`: (`err`: *any*, `result?`: *any*) => *void*) => *void*, `options?`: [*FromNodeOptions*](../interfaces/promise.fromnodeoptions.md)): [*Promise*](promise.md)<any\>

Returns a promise that is resolved by a node style callback function.

#### Parameters:

Name | Type |
:------ | :------ |
`resolver` | (`callback`: (`err`: *any*, `result?`: *any*) => *void*) => *void* |
`options?` | [*FromNodeOptions*](../interfaces/promise.fromnodeoptions.md) |

**Returns:** [*Promise*](promise.md)<any\>

Defined in: node_modules/@types/bluebird/index.d.ts:653

▸ `Static`**fromNode**<T\>(`resolver`: (`callback`: (`err`: *any*, `result?`: T) => *void*) => *void*, `options?`: [*FromNodeOptions*](../interfaces/promise.fromnodeoptions.md)): [*Promise*](promise.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`resolver` | (`callback`: (`err`: *any*, `result?`: T) => *void*) => *void* |
`options?` | [*FromNodeOptions*](../interfaces/promise.fromnodeoptions.md) |

**Returns:** [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:654

___

### is

▸ `Static`**is**(`value`: *any*): *boolean*

See if `value` is a trusted Promise.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/bluebird/index.d.ts:584

___

### join

▸ `Static`**join**<R, A1\>(`arg1`: A1 \| *PromiseLike*<A1\>, `handler`: (`arg1`: A1) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

Promise.join(
  Promise<any>|any values...,
  function handler
) -> Promise
For coordinating multiple concurrent discrete promises.

Note: In 1.x and 0.x Promise.join used to be a Promise.all that took the values in as arguments instead in an array.
This behavior has been deprecated but is still supported partially - when the last argument is an immediate function value the new semantics will apply

#### Type parameters:

Name |
:------ |
`R` |
`A1` |

#### Parameters:

Name | Type |
:------ | :------ |
`arg1` | A1 \| *PromiseLike*<A1\> |
`handler` | (`arg1`: A1) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:785

▸ `Static`**join**<R, A1, A2\>(`arg1`: A1 \| *PromiseLike*<A1\>, `arg2`: A2 \| *PromiseLike*<A2\>, `handler`: (`arg1`: A1, `arg2`: A2) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`R` |
`A1` |
`A2` |

#### Parameters:

Name | Type |
:------ | :------ |
`arg1` | A1 \| *PromiseLike*<A1\> |
`arg2` | A2 \| *PromiseLike*<A2\> |
`handler` | (`arg1`: A1, `arg2`: A2) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:789

▸ `Static`**join**<R, A1, A2, A3\>(`arg1`: A1 \| *PromiseLike*<A1\>, `arg2`: A2 \| *PromiseLike*<A2\>, `arg3`: A3 \| *PromiseLike*<A3\>, `handler`: (`arg1`: A1, `arg2`: A2, `arg3`: A3) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`R` |
`A1` |
`A2` |
`A3` |

#### Parameters:

Name | Type |
:------ | :------ |
`arg1` | A1 \| *PromiseLike*<A1\> |
`arg2` | A2 \| *PromiseLike*<A2\> |
`arg3` | A3 \| *PromiseLike*<A3\> |
`handler` | (`arg1`: A1, `arg2`: A2, `arg3`: A3) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:794

▸ `Static`**join**<R, A1, A2, A3, A4\>(`arg1`: A1 \| *PromiseLike*<A1\>, `arg2`: A2 \| *PromiseLike*<A2\>, `arg3`: A3 \| *PromiseLike*<A3\>, `arg4`: A4 \| *PromiseLike*<A4\>, `handler`: (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`R` |
`A1` |
`A2` |
`A3` |
`A4` |

#### Parameters:

Name | Type |
:------ | :------ |
`arg1` | A1 \| *PromiseLike*<A1\> |
`arg2` | A2 \| *PromiseLike*<A2\> |
`arg3` | A3 \| *PromiseLike*<A3\> |
`arg4` | A4 \| *PromiseLike*<A4\> |
`handler` | (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:800

▸ `Static`**join**<R, A1, A2, A3, A4, A5\>(`arg1`: A1 \| *PromiseLike*<A1\>, `arg2`: A2 \| *PromiseLike*<A2\>, `arg3`: A3 \| *PromiseLike*<A3\>, `arg4`: A4 \| *PromiseLike*<A4\>, `arg5`: A5 \| *PromiseLike*<A5\>, `handler`: (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5) => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`R` |
`A1` |
`A2` |
`A3` |
`A4` |
`A5` |

#### Parameters:

Name | Type |
:------ | :------ |
`arg1` | A1 \| *PromiseLike*<A1\> |
`arg2` | A2 \| *PromiseLike*<A2\> |
`arg3` | A3 \| *PromiseLike*<A3\> |
`arg4` | A4 \| *PromiseLike*<A4\> |
`arg5` | A5 \| *PromiseLike*<A5\> |
`handler` | (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5) => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:807

▸ `Static`**join**<R\>(...`values`: (R \| *PromiseLike*<R\>)[]): [*Promise*](promise.md)<R[]\>

**`deprecated`** use .all instead

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`...values` | (R \| *PromiseLike*<R\>)[] |

**Returns:** [*Promise*](promise.md)<R[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:818

___

### longStackTraces

▸ `Static`**longStackTraces**(): *void*

Call this right after the library is loaded to enabled long stack traces.

Long stack traces cannot be disabled after being enabled, and cannot be enabled after promises have already been created.
Long stack traces imply a substantial performance penalty, around 4-5x for throughput and 0.5x for latency.

**Returns:** *void*

Defined in: node_modules/@types/bluebird/index.d.ts:592

___

### map

▸ `Static`**map**<R, U\>(`values`: *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\>, `mapper`: (`item`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\>, `options?`: [*ConcurrencyOption*](../interfaces/promise.concurrencyoption.md)): [*Promise*](promise.md)<U[]\>

Map an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `mapper` function with the signature `(item, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array.
If any promise in the input array is rejected the returned promise is rejected as well.

If the `mapper` function returns promises or thenables, the returned promise will wait for all the mapped results to be resolved as well.

*The original array is not modified.*

#### Type parameters:

Name |
:------ |
`R` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\> |
`mapper` | (`item`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\> |
`options?` | [*ConcurrencyOption*](../interfaces/promise.concurrencyoption.md) |

**Returns:** [*Promise*](promise.md)<U[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:828

___

### mapSeries

▸ `Static`**mapSeries**<R, U\>(`values`: *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\>, `iterator`: (`item`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\>): [*Promise*](promise.md)<U[]\>

Given an Iterable(arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix of promises and values), iterate over all the values in the Iterable into an array and iterate over the array serially, in-order.

Returns a promise for an array that contains the values returned by the iterator function in their respective positions.
The iterator won't be called for an item until its previous item, and the promise returned by the iterator for that item are fulfilled.
This results in a mapSeries kind of utility but it can also be used simply as a side effect iterator similar to Array#forEach.

If any promise in the input array is rejected or any promise returned by the iterator function is rejected, the result will be rejected as well.

#### Type parameters:

Name |
:------ |
`R` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\> |
`iterator` | (`item`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\> |

**Returns:** [*Promise*](promise.md)<U[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:884

___

### method

▸ `Static`**method**<R, A1\>(`fn`: (`arg1`: A1) => R \| *PromiseLike*<R\>): *function*

Returns a new function that wraps the given function `fn`.
The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
This method is convenient when a function can sometimes return synchronously or throw synchronously.

#### Type parameters:

Name |
:------ |
`R` |
`A1` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`arg1`: A1) => R \| *PromiseLike*<R\> |

**Returns:** (`arg1`: A1) => [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:545

▸ `Static`**method**<R, A1, A2\>(`fn`: (`arg1`: A1, `arg2`: A2) => R \| *PromiseLike*<R\>): *function*

#### Type parameters:

Name |
:------ |
`R` |
`A1` |
`A2` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`arg1`: A1, `arg2`: A2) => R \| *PromiseLike*<R\> |

**Returns:** (`arg1`: A1, `arg2`: A2) => [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:546

▸ `Static`**method**<R, A1, A2, A3\>(`fn`: (`arg1`: A1, `arg2`: A2, `arg3`: A3) => R \| *PromiseLike*<R\>): *function*

#### Type parameters:

Name |
:------ |
`R` |
`A1` |
`A2` |
`A3` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`arg1`: A1, `arg2`: A2, `arg3`: A3) => R \| *PromiseLike*<R\> |

**Returns:** (`arg1`: A1, `arg2`: A2, `arg3`: A3) => [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:547

▸ `Static`**method**<R, A1, A2, A3, A4\>(`fn`: (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4) => R \| *PromiseLike*<R\>): *function*

#### Type parameters:

Name |
:------ |
`R` |
`A1` |
`A2` |
`A3` |
`A4` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4) => R \| *PromiseLike*<R\> |

**Returns:** (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4) => [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:548

▸ `Static`**method**<R, A1, A2, A3, A4, A5\>(`fn`: (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5) => R \| *PromiseLike*<R\>): *function*

#### Type parameters:

Name |
:------ |
`R` |
`A1` |
`A2` |
`A3` |
`A4` |
`A5` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5) => R \| *PromiseLike*<R\> |

**Returns:** (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5) => [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:549

▸ `Static`**method**<R\>(`fn`: (...`args`: *any*[]) => R \| *PromiseLike*<R\>): *function*

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (...`args`: *any*[]) => R \| *PromiseLike*<R\> |

**Returns:** (...`args`: *any*[]) => [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:550

___

### onPossiblyUnhandledRejection

▸ `Static`**onPossiblyUnhandledRejection**(`handler`: (`reason`: *any*) => *any*): *void*

Add `handler` as the handler to call when there is a possibly unhandled rejection. The default handler logs the error stack to stderr or `console.error` in browsers.

Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.

#### Parameters:

Name | Type |
:------ | :------ |
`handler` | (`reason`: *any*) => *any* |

**Returns:** *void*

Defined in: node_modules/@types/bluebird/index.d.ts:708

▸ `Static`**onPossiblyUnhandledRejection**(`handler?`: (`error`: Error, `promise`: [*Promise*](promise.md)<any\>) => *void*): *void*

Add handler as the handler to call when there is a possibly unhandled rejection.
The default handler logs the error stack to stderr or console.error in browsers.

Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.

Note: this hook is specific to the bluebird instance its called on, application developers should use global rejection events.

#### Parameters:

Name | Type |
:------ | :------ |
`handler?` | (`error`: Error, `promise`: [*Promise*](promise.md)<any\>) => *void* |

**Returns:** *void*

Defined in: node_modules/@types/bluebird/index.d.ts:718

___

### promisify

▸ `Static`**promisify**<T\>(`func`: (`callback`: (`err`: *any*, `result?`: T) => *void*) => *void*, `options?`: [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md)): *function*

Returns a function that will wrap the given `nodeFunction`.

Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function.
The node function should conform to node.js convention of accepting a callback as last argument and
calling that callback with error as the first argument and success value on the second argument.

If the `nodeFunction` calls its callback with multiple success values, the fulfillment value will be an array of them.

If you pass a `receiver`, the `nodeFunction` will be called as a method on the `receiver`.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`func` | (`callback`: (`err`: *any*, `result?`: T) => *void*) => *void* |
`options?` | [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md) |

**Returns:** () => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:613

▸ `Static`**promisify**<T, A1\>(`func`: (`arg1`: A1, `callback`: (`err`: *any*, `result?`: T) => *void*) => *void*, `options?`: [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |

#### Parameters:

Name | Type |
:------ | :------ |
`func` | (`arg1`: A1, `callback`: (`err`: *any*, `result?`: T) => *void*) => *void* |
`options?` | [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md) |

**Returns:** (`arg1`: A1) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:617

▸ `Static`**promisify**<T, A1, A2\>(`func`: (`arg1`: A1, `arg2`: A2, `callback`: (`err`: *any*, `result?`: T) => *void*) => *void*, `options?`: [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |
`A2` |

#### Parameters:

Name | Type |
:------ | :------ |
`func` | (`arg1`: A1, `arg2`: A2, `callback`: (`err`: *any*, `result?`: T) => *void*) => *void* |
`options?` | [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md) |

**Returns:** (`arg1`: A1, `arg2`: A2) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:621

▸ `Static`**promisify**<T, A1, A2, A3\>(`func`: (`arg1`: A1, `arg2`: A2, `arg3`: A3, `callback`: (`err`: *any*, `result?`: T) => *void*) => *void*, `options?`: [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |
`A2` |
`A3` |

#### Parameters:

Name | Type |
:------ | :------ |
`func` | (`arg1`: A1, `arg2`: A2, `arg3`: A3, `callback`: (`err`: *any*, `result?`: T) => *void*) => *void* |
`options?` | [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md) |

**Returns:** (`arg1`: A1, `arg2`: A2, `arg3`: A3) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:625

▸ `Static`**promisify**<T, A1, A2, A3, A4\>(`func`: (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `callback`: (`err`: *any*, `result?`: T) => *void*) => *void*, `options?`: [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |
`A2` |
`A3` |
`A4` |

#### Parameters:

Name | Type |
:------ | :------ |
`func` | (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `callback`: (`err`: *any*, `result?`: T) => *void*) => *void* |
`options?` | [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md) |

**Returns:** (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:629

▸ `Static`**promisify**<T, A1, A2, A3, A4, A5\>(`func`: (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5, `callback`: (`err`: *any*, `result?`: T) => *void*) => *void*, `options?`: [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |
`A1` |
`A2` |
`A3` |
`A4` |
`A5` |

#### Parameters:

Name | Type |
:------ | :------ |
`func` | (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5, `callback`: (`err`: *any*, `result?`: T) => *void*) => *void* |
`options?` | [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md) |

**Returns:** (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5) => [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:633

▸ `Static`**promisify**(`nodeFunction`: (...`args`: *any*[]) => *void*, `options?`: [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md)): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`nodeFunction` | (...`args`: *any*[]) => *void* |
`options?` | [*PromisifyOptions*](../interfaces/promise.promisifyoptions.md) |

**Returns:** (...`args`: *any*[]) => [*Promise*](promise.md)<any\>

Defined in: node_modules/@types/bluebird/index.d.ts:637

___

### promisifyAll

▸ `Static`**promisifyAll**<T\>(`target`: T, `options?`: [*PromisifyAllOptions*](../interfaces/promise.promisifyalloptions.md)<T\>): T

Promisifies the entire object by going through the object's properties and creating an async equivalent of each function on the object and its prototype chain.

The promisified method name will be the original method name postfixed with `Async`. Returns the input object.

Note that the original methods on the object are not overwritten but new methods are created with the `Async`-postfix. For example,
if you `promisifyAll()` the node.js `fs` object use `fs.statAsync()` to call the promisified `stat` method.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *object* |

#### Parameters:

Name | Type |
:------ | :------ |
`target` | T |
`options?` | [*PromisifyAllOptions*](../interfaces/promise.promisifyalloptions.md)<T\> |

**Returns:** T

Defined in: node_modules/@types/bluebird/index.d.ts:648

___

### props

▸ `Static`**props**<K, V\>(`map`: *Map*<K, V \| PromiseLike<V\>\> \| *PromiseLike*<Map<K, V \| PromiseLike<V\>\>\>): [*Promise*](promise.md)<Map<K, V\>\>

Like ``Promise.all`` but for object properties instead of array items. Returns a promise that is fulfilled when all the properties of the object are fulfilled.

The promise's fulfillment value is an object with fulfillment values at respective keys to the original object.
If any promise in the object rejects, the returned promise is rejected with the rejection reason.

If `object` is a trusted `Promise`, then it will be treated as a promise for object rather than for its properties.
All other objects are treated for their properties as is returned by `Object.keys` - the object's own enumerable properties.

*The original object is not modified.*

#### Type parameters:

Name |
:------ |
`K` |
`V` |

#### Parameters:

Name | Type |
:------ | :------ |
`map` | *Map*<K, V \| PromiseLike<V\>\> \| *PromiseLike*<Map<K, V \| PromiseLike<V\>\>\> |

**Returns:** [*Promise*](promise.md)<Map<K, V\>\>

Defined in: node_modules/@types/bluebird/index.d.ts:747

▸ `Static`**props**<T\>(`object`: *PromiseLike*<[*ResolvableProps*](../modules/promise.md#resolvableprops)<T\>\>): [*Promise*](promise.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`object` | *PromiseLike*<[*ResolvableProps*](../modules/promise.md#resolvableprops)<T\>\> |

**Returns:** [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:749

▸ `Static`**props**<T\>(`object`: [*ResolvableProps*](../modules/promise.md#resolvableprops)<T\>): [*Promise*](promise.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`object` | [*ResolvableProps*](../modules/promise.md#resolvableprops)<T\> |

**Returns:** [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:751

___

### race

▸ `Static`**race**<R\>(`values`: *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\>): [*Promise*](promise.md)<R\>

Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled or rejected as soon as a promise in the array is fulfilled or rejected with the respective rejection reason or fulfillment value.

**Note** If you pass empty array or a sparse array with no values, or a promise/thenable for such, it will be forever pending.

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:763

___

### reduce

▸ `Static`**reduce**<R, U\>(`values`: *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\>, `reducer`: (`total`: U, `current`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\>, `initialValue?`: U): [*Promise*](promise.md)<U\>

Reduce an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `reducer` function with the signature `(total, current, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array.
If any promise in the input array is rejected the returned promise is rejected as well.

If the reducer function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.

*The original array is not modified. If no `initialValue` is given and the array doesn't contain at least 2 items, the callback will not be called and `undefined` is returned.
If `initialValue` is given and the array doesn't have at least 1 item, `initialValue` is returned.*

#### Type parameters:

Name |
:------ |
`R` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\> |
`reducer` | (`total`: U, `current`: R, `index`: *number*, `arrayLength`: *number*) => U \| *PromiseLike*<U\> |
`initialValue?` | U |

**Returns:** [*Promise*](promise.md)<U\>

Defined in: node_modules/@types/bluebird/index.d.ts:843

___

### reject

▸ `Static`**reject**(`reason`: *any*): [*Promise*](promise.md)<never\>

Create a promise that is rejected with the given `reason`.

#### Parameters:

Name | Type |
:------ | :------ |
`reason` | *any* |

**Returns:** [*Promise*](promise.md)<never\>

Defined in: node_modules/@types/bluebird/index.d.ts:561

___

### resolve

▸ `Static`**resolve**(): [*Promise*](promise.md)<void\>

Create a promise that is resolved with the given `value`. If `value` is a thenable or promise, the returned promise will assume its state.

**Returns:** [*Promise*](promise.md)<void\>

Defined in: node_modules/@types/bluebird/index.d.ts:555

▸ `Static`**resolve**<R\>(`value`: R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`value` | R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:556

___

### some

▸ `Static`**some**<R\>(`values`: *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\>, `count`: *number*): [*Promise*](promise.md)<R[]\>

Initiate a competitive race between multiple promises or values (values will become immediately fulfilled promises).
When `count` amount of promises have been fulfilled, the returned promise is fulfilled with an array that contains the fulfillment values of the winners in order of resolution.

If too many promises are rejected so that the promise can never become fulfilled, it will be immediately rejected with an array of rejection reasons in the order they were thrown in.

*The original array is not modified.*

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *Iterable*<R \| PromiseLike<R\>\> \| *PromiseLike*<Iterable<R \| PromiseLike<R\>\>\> |
`count` | *number* |

**Returns:** [*Promise*](promise.md)<R[]\>

Defined in: node_modules/@types/bluebird/index.d.ts:773

___

### try

▸ `Static`**try**<R\>(`fn`: () => R \| *PromiseLike*<R\>): [*Promise*](promise.md)<R\>

Start the chain of promises with `Promise.try`. Any synchronous exceptions will be turned into rejections on the returned promise.

Note about second argument: if it's specifically a true array, its values become respective arguments for the function call.
Otherwise it is passed as is as the first argument for the function call.

Alias for `attempt();` for compatibility with earlier ECMAScript version.

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | () => R \| *PromiseLike*<R\> |

**Returns:** [*Promise*](promise.md)<R\>

Defined in: node_modules/@types/bluebird/index.d.ts:537

___

### using

▸ `Static`**using**<R, T\>(`disposer`: [*Disposer*](promise.disposer.md)<R\>, `executor`: (`transaction`: R) => *PromiseLike*<T\>): [*Promise*](promise.md)<T\>

In conjunction with `.disposer`, using will make sure that no matter what, the specified disposer
 will be called when the promise returned by the callback passed to using has settled. The disposer is
 necessary because there is no standard interface in node for disposing resources.

#### Type parameters:

Name |
:------ |
`R` |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`disposer` | [*Disposer*](promise.disposer.md)<R\> |
`executor` | (`transaction`: R) => *PromiseLike*<T\> |

**Returns:** [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:906

▸ `Static`**using**<R1, R2, T\>(`disposer`: [*Disposer*](promise.disposer.md)<R1\>, `disposer2`: [*Disposer*](promise.disposer.md)<R2\>, `executor`: (`transaction1`: R1, `transaction2`: R2) => *PromiseLike*<T\>): [*Promise*](promise.md)<T\>

#### Type parameters:

Name |
:------ |
`R1` |
`R2` |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`disposer` | [*Disposer*](promise.disposer.md)<R1\> |
`disposer2` | [*Disposer*](promise.disposer.md)<R2\> |
`executor` | (`transaction1`: R1, `transaction2`: R2) => *PromiseLike*<T\> |

**Returns:** [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:910

▸ `Static`**using**<R1, R2, R3, T\>(`disposer`: [*Disposer*](promise.disposer.md)<R1\>, `disposer2`: [*Disposer*](promise.disposer.md)<R2\>, `disposer3`: [*Disposer*](promise.disposer.md)<R3\>, `executor`: (`transaction1`: R1, `transaction2`: R2, `transaction3`: R3) => *PromiseLike*<T\>): [*Promise*](promise.md)<T\>

#### Type parameters:

Name |
:------ |
`R1` |
`R2` |
`R3` |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`disposer` | [*Disposer*](promise.disposer.md)<R1\> |
`disposer2` | [*Disposer*](promise.disposer.md)<R2\> |
`disposer3` | [*Disposer*](promise.disposer.md)<R3\> |
`executor` | (`transaction1`: R1, `transaction2`: R2, `transaction3`: R3) => *PromiseLike*<T\> |

**Returns:** [*Promise*](promise.md)<T\>

Defined in: node_modules/@types/bluebird/index.d.ts:915
