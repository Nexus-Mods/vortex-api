[vortex_devel](../README.md) / [Exports](../modules.md) / Promise

# Class: Promise<R\>

## Type parameters

| Name |
| :------ |
| `R` |

## Implements

- `PromiseLike`<`R`\>
- [`Inspection`](../interfaces/Promise.Inspection.md)<`R`\>

## Table of contents

### Constructors

- [constructor](Promise.md#constructor)

### Properties

- [caught](Promise.md#caught)
- [Promise](Promise.md#promise)
- [version](Promise.md#version)

### Methods

- [all](Promise.md#all)
- [any](Promise.md#any)
- [asCallback](Promise.md#ascallback)
- [bind](Promise.md#bind)
- [call](Promise.md#call)
- [cancel](Promise.md#cancel)
- [catch](Promise.md#catch)
- [catchReturn](Promise.md#catchreturn)
- [catchThrow](Promise.md#catchthrow)
- [delay](Promise.md#delay)
- [disposer](Promise.md#disposer)
- [done](Promise.md#done)
- [each](Promise.md#each)
- [error](Promise.md#error)
- [filter](Promise.md#filter)
- [finally](Promise.md#finally)
- [get](Promise.md#get)
- [isCancelled](Promise.md#iscancelled)
- [isFulfilled](Promise.md#isfulfilled)
- [isPending](Promise.md#ispending)
- [isRejected](Promise.md#isrejected)
- [isResolved](Promise.md#isresolved)
- [lastly](Promise.md#lastly)
- [map](Promise.md#map)
- [mapSeries](Promise.md#mapseries)
- [nodeify](Promise.md#nodeify)
- [props](Promise.md#props)
- [race](Promise.md#race)
- [reason](Promise.md#reason)
- [reduce](Promise.md#reduce)
- [reflect](Promise.md#reflect)
- [return](Promise.md#return)
- [some](Promise.md#some)
- [spread](Promise.md#spread)
- [suppressUnhandledRejections](Promise.md#suppressunhandledrejections)
- [tap](Promise.md#tap)
- [tapCatch](Promise.md#tapcatch)
- [then](Promise.md#then)
- [thenReturn](Promise.md#thenreturn)
- [thenThrow](Promise.md#thenthrow)
- [throw](Promise.md#throw)
- [timeout](Promise.md#timeout)
- [toJSON](Promise.md#tojson)
- [toString](Promise.md#tostring)
- [value](Promise.md#value)
- [all](Promise.md#all)
- [any](Promise.md#any)
- [attempt](Promise.md#attempt)
- [bind](Promise.md#bind)
- [cast](Promise.md#cast)
- [config](Promise.md#config)
- [coroutine](Promise.md#coroutine)
- [defer](Promise.md#defer)
- [delay](Promise.md#delay)
- [each](Promise.md#each)
- [filter](Promise.md#filter)
- [fromCallback](Promise.md#fromcallback)
- [fromNode](Promise.md#fromnode)
- [is](Promise.md#is)
- [join](Promise.md#join)
- [longStackTraces](Promise.md#longstacktraces)
- [map](Promise.md#map)
- [mapSeries](Promise.md#mapseries)
- [method](Promise.md#method)
- [onPossiblyUnhandledRejection](Promise.md#onpossiblyunhandledrejection)
- [promisify](Promise.md#promisify)
- [promisifyAll](Promise.md#promisifyall)
- [props](Promise.md#props)
- [race](Promise.md#race)
- [reduce](Promise.md#reduce)
- [reject](Promise.md#reject)
- [resolve](Promise.md#resolve)
- [some](Promise.md#some)
- [try](Promise.md#try)
- [using](Promise.md#using)

## Constructors

### constructor

• **new Promise**<`R`\>(`callback`)

Create a new promise. The passed in function will receive functions `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
If promise cancellation is enabled, passed in function will receive one more function argument `onCancel` that allows to register an optional cancellation callback.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`resolve`: (`thenableOrResult?`: `R` \| `PromiseLike`<`R`\>) => `void`, `reject`: (`error?`: `any`) => `void`, `onCancel?`: (`callback`: () => `void`) => `void`) => `void` |

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:45

## Properties

### caught

• **caught**: (`onReject`: (`error`: `any`) => `R` \| `PromiseLike`<`R`\>) => [`Promise`](Promise.md)<`R`\><U\>(`onReject`: (`error`: `any`) => `U` \| `PromiseLike`<`U`\>) => [`Promise`](Promise.md)<`R` \| `U`\><E1, E2, E3, E4, E5\>(`filter1`: `CatchFilter`<`E1`\>, `filter2`: `CatchFilter`<`E2`\>, `filter3`: `CatchFilter`<`E3`\>, `filter4`: `CatchFilter`<`E4`\>, `filter5`: `CatchFilter`<`E5`\>, `onReject`: (`error`: `E1` \| `E2` \| `E3` \| `E4` \| `E5`) => `R` \| `PromiseLike`<`R`\>) => [`Promise`](Promise.md)<`R`\><U, E1, E2, E3, E4, E5\>(`filter1`: `CatchFilter`<`E1`\>, `filter2`: `CatchFilter`<`E2`\>, `filter3`: `CatchFilter`<`E3`\>, `filter4`: `CatchFilter`<`E4`\>, `filter5`: `CatchFilter`<`E5`\>, `onReject`: (`error`: `E1` \| `E2` \| `E3` \| `E4` \| `E5`) => `U` \| `PromiseLike`<`U`\>) => [`Promise`](Promise.md)<`R` \| `U`\><E1, E2, E3, E4\>(`filter1`: `CatchFilter`<`E1`\>, `filter2`: `CatchFilter`<`E2`\>, `filter3`: `CatchFilter`<`E3`\>, `filter4`: `CatchFilter`<`E4`\>, `onReject`: (`error`: `E1` \| `E2` \| `E3` \| `E4`) => `R` \| `PromiseLike`<`R`\>) => [`Promise`](Promise.md)<`R`\><U, E1, E2, E3, E4\>(`filter1`: `CatchFilter`<`E1`\>, `filter2`: `CatchFilter`<`E2`\>, `filter3`: `CatchFilter`<`E3`\>, `filter4`: `CatchFilter`<`E4`\>, `onReject`: (`error`: `E1` \| `E2` \| `E3` \| `E4`) => `U` \| `PromiseLike`<`U`\>) => [`Promise`](Promise.md)<`R` \| `U`\><E1, E2, E3\>(`filter1`: `CatchFilter`<`E1`\>, `filter2`: `CatchFilter`<`E2`\>, `filter3`: `CatchFilter`<`E3`\>, `onReject`: (`error`: `E1` \| `E2` \| `E3`) => `R` \| `PromiseLike`<`R`\>) => [`Promise`](Promise.md)<`R`\><U, E1, E2, E3\>(`filter1`: `CatchFilter`<`E1`\>, `filter2`: `CatchFilter`<`E2`\>, `filter3`: `CatchFilter`<`E3`\>, `onReject`: (`error`: `E1` \| `E2` \| `E3`) => `U` \| `PromiseLike`<`U`\>) => [`Promise`](Promise.md)<`R` \| `U`\><E1, E2\>(`filter1`: `CatchFilter`<`E1`\>, `filter2`: `CatchFilter`<`E2`\>, `onReject`: (`error`: `E1` \| `E2`) => `R` \| `PromiseLike`<`R`\>) => [`Promise`](Promise.md)<`R`\><U, E1, E2\>(`filter1`: `CatchFilter`<`E1`\>, `filter2`: `CatchFilter`<`E2`\>, `onReject`: (`error`: `E1` \| `E2`) => `U` \| `PromiseLike`<`U`\>) => [`Promise`](Promise.md)<`R` \| `U`\><E1\>(`filter1`: `CatchFilter`<`E1`\>, `onReject`: (`error`: `E1`) => `R` \| `PromiseLike`<`R`\>) => [`Promise`](Promise.md)<`R`\><U, E1\>(`filter1`: `CatchFilter`<`E1`\>, `onReject`: (`error`: `E1`) => `U` \| `PromiseLike`<`U`\>) => [`Promise`](Promise.md)<`R` \| `U`\>

#### Type declaration

▸ (`onReject`): [`Promise`](Promise.md)<`R`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Parameters

| Name | Type |
| :------ | :------ |
| `onReject` | (`error`: `any`) => `R` \| `PromiseLike`<`R`\> |

##### Returns

[`Promise`](Promise.md)<`R`\>

▸ <`U`\>(`onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `onReject` | (`error`: `any`) => `U` \| `PromiseLike`<`U`\> |

##### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

▸ <`E1`, `E2`, `E3`, `E4`, `E5`\>(`filter1`, `filter2`, `filter3`, `filter4`, `filter5`, `onReject`): [`Promise`](Promise.md)<`R`\>

This extends `.catch` to work more like catch-clauses in languages like Java or C#.

Instead of manually checking `instanceof` or `.name === "SomeError"`,
you may specify a number of error constructors which are eligible for this catch handler.
The catch handler that is first met that has eligible constructors specified, is the one that will be called.

This method also supports predicate-based filters.
If you pass a predicate function instead of an error constructor, the predicate will receive the error as an argument.
The return result of the predicate will be used determine whether the error handler should be called.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Type parameters

| Name |
| :------ |
| `E1` |
| `E2` |
| `E3` |
| `E4` |
| `E5` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `filter4` | `CatchFilter`<`E4`\> |
| `filter5` | `CatchFilter`<`E5`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3` \| `E4` \| `E5`) => `R` \| `PromiseLike`<`R`\> |

##### Returns

[`Promise`](Promise.md)<`R`\>

▸ <`U`, `E1`, `E2`, `E3`, `E4`, `E5`\>(`filter1`, `filter2`, `filter3`, `filter4`, `filter5`, `onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |
| `E3` |
| `E4` |
| `E5` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `filter4` | `CatchFilter`<`E4`\> |
| `filter5` | `CatchFilter`<`E5`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3` \| `E4` \| `E5`) => `U` \| `PromiseLike`<`U`\> |

##### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

▸ <`E1`, `E2`, `E3`, `E4`\>(`filter1`, `filter2`, `filter3`, `filter4`, `onReject`): [`Promise`](Promise.md)<`R`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Type parameters

| Name |
| :------ |
| `E1` |
| `E2` |
| `E3` |
| `E4` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `filter4` | `CatchFilter`<`E4`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3` \| `E4`) => `R` \| `PromiseLike`<`R`\> |

##### Returns

[`Promise`](Promise.md)<`R`\>

▸ <`U`, `E1`, `E2`, `E3`, `E4`\>(`filter1`, `filter2`, `filter3`, `filter4`, `onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |
| `E3` |
| `E4` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `filter4` | `CatchFilter`<`E4`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3` \| `E4`) => `U` \| `PromiseLike`<`U`\> |

##### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

▸ <`E1`, `E2`, `E3`\>(`filter1`, `filter2`, `filter3`, `onReject`): [`Promise`](Promise.md)<`R`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Type parameters

| Name |
| :------ |
| `E1` |
| `E2` |
| `E3` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3`) => `R` \| `PromiseLike`<`R`\> |

##### Returns

[`Promise`](Promise.md)<`R`\>

▸ <`U`, `E1`, `E2`, `E3`\>(`filter1`, `filter2`, `filter3`, `onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |
| `E3` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3`) => `U` \| `PromiseLike`<`U`\> |

##### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

▸ <`E1`, `E2`\>(`filter1`, `filter2`, `onReject`): [`Promise`](Promise.md)<`R`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Type parameters

| Name |
| :------ |
| `E1` |
| `E2` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `onReject` | (`error`: `E1` \| `E2`) => `R` \| `PromiseLike`<`R`\> |

##### Returns

[`Promise`](Promise.md)<`R`\>

▸ <`U`, `E1`, `E2`\>(`filter1`, `filter2`, `onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `onReject` | (`error`: `E1` \| `E2`) => `U` \| `PromiseLike`<`U`\> |

##### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

▸ <`E1`\>(`filter1`, `onReject`): [`Promise`](Promise.md)<`R`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Type parameters

| Name |
| :------ |
| `E1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `onReject` | (`error`: `E1`) => `R` \| `PromiseLike`<`R`\> |

##### Returns

[`Promise`](Promise.md)<`R`\>

▸ <`U`, `E1`\>(`filter1`, `onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

##### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `onReject` | (`error`: `E1`) => `U` \| `PromiseLike`<`U`\> |

##### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:155

___

### Promise

▪ `Static` **Promise**: typeof [`Promise`](Promise.md)

Create a new promise. The passed in function will receive functions `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
If promise cancellation is enabled, passed in function will receive one more function argument `onCancel` that allows to register an optional cancellation callback.

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:945

___

### version

▪ `Static` **version**: `string`

The version number of the library

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:950

## Methods

### all

▸ **all**<`U`\>(): [`Promise`](Promise.md)<`U`[]\>

Same as calling `Promise.all(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Returns

[`Promise`](Promise.md)<`U`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:463

___

### any

▸ **any**<`U`\>(): [`Promise`](Promise.md)<`U`\>

Same as calling `Promise.any(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Returns

[`Promise`](Promise.md)<`U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:475

___

### asCallback

▸ **asCallback**(`callback`, `options?`): [`Promise`](Promise.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: `any`, `value?`: `R`) => `void` |
| `options?` | [`SpreadOption`](../interfaces/Promise.SpreadOption.md) |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:250

▸ **asCallback**(...`sink`): [`Promise`](Promise.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sink` | `any`[] |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:251

___

### bind

▸ **bind**(`thisArg`): [`Promise`](Promise.md)<`R`\>

Create a promise that follows this promise, but is bound to the given `thisArg` value. A bound promise will call its handlers with the bound value set to `this`.

Additionally promises derived from a bound promise will also be bound promises with the same `thisArg` binding as the original promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `thisArg` | `any` |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:178

___

### call

▸ **call**(`propertyName`, ...`args`): [`Promise`](Promise.md)<`any`\>

This is a convenience method for doing:

<code>
promise.then(function(obj){
    return obj[propertyName].call(obj, arg...);
});
</code>

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | keyof `R` |
| `...args` | `any`[] |

#### Returns

[`Promise`](Promise.md)<`any`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:308

___

### cancel

▸ **cancel**(): `void`

Cancel this `promise`. Will not do anything if this promise is already settled or if the cancellation feature has not been enabled

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:520

___

### catch

▸ **catch**(`onReject`): [`Promise`](Promise.md)<`R`\>

This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.

Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.

Alias `.caught();` for compatibility with earlier ECMAScript version.

#### Parameters

| Name | Type |
| :------ | :------ |
| `onReject` | (`error`: `any`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:66

▸ **catch**<`U`\>(`onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onReject` | (`error`: `any`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:67

▸ **catch**<`E1`, `E2`, `E3`, `E4`, `E5`\>(`filter1`, `filter2`, `filter3`, `filter4`, `filter5`, `onReject`): [`Promise`](Promise.md)<`R`\>

This extends `.catch` to work more like catch-clauses in languages like Java or C#.

Instead of manually checking `instanceof` or `.name === "SomeError"`,
you may specify a number of error constructors which are eligible for this catch handler.
The catch handler that is first met that has eligible constructors specified, is the one that will be called.

This method also supports predicate-based filters.
If you pass a predicate function instead of an error constructor, the predicate will receive the error as an argument.
The return result of the predicate will be used determine whether the error handler should be called.

Alias `.caught();` for compatibility with earlier ECMAScript version.

#### Type parameters

| Name |
| :------ |
| `E1` |
| `E2` |
| `E3` |
| `E4` |
| `E5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `filter4` | `CatchFilter`<`E4`\> |
| `filter5` | `CatchFilter`<`E5`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3` \| `E4` \| `E5`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:82

▸ **catch**<`U`, `E1`, `E2`, `E3`, `E4`, `E5`\>(`filter1`, `filter2`, `filter3`, `filter4`, `filter5`, `onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |
| `E3` |
| `E4` |
| `E5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `filter4` | `CatchFilter`<`E4`\> |
| `filter5` | `CatchFilter`<`E5`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3` \| `E4` \| `E5`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:90

▸ **catch**<`E1`, `E2`, `E3`, `E4`\>(`filter1`, `filter2`, `filter3`, `filter4`, `onReject`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `E1` |
| `E2` |
| `E3` |
| `E4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `filter4` | `CatchFilter`<`E4`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3` \| `E4`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:99

▸ **catch**<`U`, `E1`, `E2`, `E3`, `E4`\>(`filter1`, `filter2`, `filter3`, `filter4`, `onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |
| `E3` |
| `E4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `filter4` | `CatchFilter`<`E4`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3` \| `E4`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:107

▸ **catch**<`E1`, `E2`, `E3`\>(`filter1`, `filter2`, `filter3`, `onReject`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `E1` |
| `E2` |
| `E3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:115

▸ **catch**<`U`, `E1`, `E2`, `E3`\>(`filter1`, `filter2`, `filter3`, `onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |
| `E3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:121

▸ **catch**<`E1`, `E2`\>(`filter1`, `filter2`, `onReject`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `E1` |
| `E2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `onReject` | (`error`: `E1` \| `E2`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:128

▸ **catch**<`U`, `E1`, `E2`\>(`filter1`, `filter2`, `onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `onReject` | (`error`: `E1` \| `E2`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:133

▸ **catch**<`E1`\>(`filter1`, `onReject`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `E1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `onReject` | (`error`: `E1`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:139

▸ **catch**<`U`, `E1`\>(`filter1`, `onReject`): [`Promise`](Promise.md)<`R` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `onReject` | (`error`: `E1`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:143

___

### catchReturn

▸ **catchReturn**<`U`\>(`value`): [`Promise`](Promise.md)<`R` \| `U`\>

Convenience method for:

<code>
.catch(function() {
   return value;
});
</code>

in the case where `value` doesn't change its value. That means `value` is bound at the time of calling `.catchReturn()`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `U` |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:365

▸ **catchReturn**<`U`\>(`filter1`, `filter2`, `filter3`, `filter4`, `filter5`, `value`): [`Promise`](Promise.md)<`R` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`Error`\> |
| `filter2` | `CatchFilter`<`Error`\> |
| `filter3` | `CatchFilter`<`Error`\> |
| `filter4` | `CatchFilter`<`Error`\> |
| `filter5` | `CatchFilter`<`Error`\> |
| `value` | `U` |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:368

▸ **catchReturn**<`U`\>(`filter1`, `filter2`, `filter3`, `filter4`, `value`): [`Promise`](Promise.md)<`R` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`Error`\> |
| `filter2` | `CatchFilter`<`Error`\> |
| `filter3` | `CatchFilter`<`Error`\> |
| `filter4` | `CatchFilter`<`Error`\> |
| `value` | `U` |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:376

▸ **catchReturn**<`U`\>(`filter1`, `filter2`, `filter3`, `value`): [`Promise`](Promise.md)<`R` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`Error`\> |
| `filter2` | `CatchFilter`<`Error`\> |
| `filter3` | `CatchFilter`<`Error`\> |
| `value` | `U` |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:383

▸ **catchReturn**<`U`\>(`filter1`, `filter2`, `value`): [`Promise`](Promise.md)<`R` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`Error`\> |
| `filter2` | `CatchFilter`<`Error`\> |
| `value` | `U` |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:389

▸ **catchReturn**<`U`\>(`filter1`, `value`): [`Promise`](Promise.md)<`R` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`Error`\> |
| `value` | `U` |

#### Returns

[`Promise`](Promise.md)<`R` \| `U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:394

___

### catchThrow

▸ **catchThrow**(`reason`): [`Promise`](Promise.md)<`R`\>

Convenience method for:

<code>
.catch(function() {
   throw reason;
});
</code>
Same limitations apply as with `.catchReturn()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `Error` |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:409

▸ **catchThrow**(`filter1`, `filter2`, `filter3`, `filter4`, `filter5`, `reason`): [`Promise`](Promise.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`Error`\> |
| `filter2` | `CatchFilter`<`Error`\> |
| `filter3` | `CatchFilter`<`Error`\> |
| `filter4` | `CatchFilter`<`Error`\> |
| `filter5` | `CatchFilter`<`Error`\> |
| `reason` | `Error` |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:412

▸ **catchThrow**(`filter1`, `filter2`, `filter3`, `filter4`, `reason`): [`Promise`](Promise.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`Error`\> |
| `filter2` | `CatchFilter`<`Error`\> |
| `filter3` | `CatchFilter`<`Error`\> |
| `filter4` | `CatchFilter`<`Error`\> |
| `reason` | `Error` |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:420

▸ **catchThrow**(`filter1`, `filter2`, `filter3`, `reason`): [`Promise`](Promise.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`Error`\> |
| `filter2` | `CatchFilter`<`Error`\> |
| `filter3` | `CatchFilter`<`Error`\> |
| `reason` | `Error` |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:427

▸ **catchThrow**(`filter1`, `filter2`, `reason`): [`Promise`](Promise.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`Error`\> |
| `filter2` | `CatchFilter`<`Error`\> |
| `reason` | `Error` |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:433

▸ **catchThrow**(`filter1`, `reason`): [`Promise`](Promise.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`Error`\> |
| `reason` | `Error` |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:438

___

### delay

▸ **delay**(`ms`): [`Promise`](Promise.md)<`R`\>

Same as calling `Promise.delay(ms, this)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:229

___

### disposer

▸ **disposer**(`disposeFn`): [`Disposer`](Promise.Disposer.md)<`R`\>

A meta method used to specify the disposer method that cleans up a resource when using `Promise.using`.

Returns a Disposer object which encapsulates both the resource as well as the method to clean it up.
 The user can pass this object to `Promise.using` to get access to the resource when it becomes available,
 as well as to ensure its automatically cleaned up.

The second argument passed to a disposer is the result promise of the using block, which you can
 inspect synchronously.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposeFn` | (`arg`: `R`, `promise`: [`Promise`](Promise.md)<`R`\>) => `void` \| `PromiseLike`<`void`\> |

#### Returns

[`Disposer`](Promise.Disposer.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:899

___

### done

▸ **done**<`U`\>(`onFulfilled?`, `onRejected?`): `void`

Like `.then()`, but any unhandled rejection that ends up here will be thrown as an error.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onFulfilled?` | (`value`: `R`) => `U` \| `PromiseLike`<`U`\> |
| `onRejected?` | (`error`: `any`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:183

___

### each

▸ **each**<`R`, `U`\>(`iterator`): [`Promise`](Promise.md)<`R`[]\>

Same as calling ``Bluebird.each(thisPromise, iterator)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters

| Name |
| :------ |
| `R` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterator` | (`item`: `R`, `index`: `number`, `arrayLength`: `number`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:510

___

### error

▸ **error**<`U`\>(`onReject`): [`Promise`](Promise.md)<`U`\>

Like `.catch` but instead of catching all types of exceptions, it only catches those that don't originate from thrown errors but rather from explicit rejections.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onReject` | (`reason`: `any`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:160

___

### filter

▸ **filter**<`U`\>(`filterer`, `options?`): [`Promise`](Promise.md)<`U`[]\>

Same as calling ``Promise.filter(thisPromise, filterer)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterer` | (`item`: `U`, `index`: `number`, `arrayLength`: `number`) => `boolean` \| `PromiseLike`<`boolean`\> |
| `options?` | [`ConcurrencyOption`](../interfaces/Promise.ConcurrencyOption.md) |

#### Returns

[`Promise`](Promise.md)<`U`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:505

___

### finally

▸ **finally**<`U`\>(`handler`): [`Promise`](Promise.md)<`R`\>

Pass a handler that will be called regardless of this promise's fate. Returns a new promise chained from this promise.

There are special semantics for `.finally()` in that the final value cannot be modified from the handler.

Alias `.lastly();` for compatibility with earlier ECMAScript version.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | () => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:169

___

### get

▸ **get**<`U`\>(`key`): [`Promise`](Promise.md)<`R`[`U`]\>

This is a convenience method for doing:

<code>
promise.then(function(obj){
    return obj[propertyName];
});
</code>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `U` |

#### Returns

[`Promise`](Promise.md)<`R`[`U`]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:319

___

### isCancelled

▸ **isCancelled**(): `boolean`

See if this `promise` has been cancelled.

#### Returns

`boolean`

#### Implementation of

[Inspection](../interfaces/Promise.Inspection.md).[isCancelled](../interfaces/Promise.Inspection.md#iscancelled)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:271

___

### isFulfilled

▸ **isFulfilled**(): `boolean`

See if this `promise` has been fulfilled.

#### Returns

`boolean`

#### Implementation of

[Inspection](../interfaces/Promise.Inspection.md).[isFulfilled](../interfaces/Promise.Inspection.md#isfulfilled)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:256

___

### isPending

▸ **isPending**(): `boolean`

See if this `promise` is still defer.

#### Returns

`boolean`

#### Implementation of

[Inspection](../interfaces/Promise.Inspection.md).[isPending](../interfaces/Promise.Inspection.md#ispending)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:266

___

### isRejected

▸ **isRejected**(): `boolean`

See if this `promise` has been rejected.

#### Returns

`boolean`

#### Implementation of

[Inspection](../interfaces/Promise.Inspection.md).[isRejected](../interfaces/Promise.Inspection.md#isrejected)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:261

___

### isResolved

▸ **isResolved**(): `boolean`

See if this `promise` is resolved -> either fulfilled or rejected.

#### Returns

`boolean`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:276

___

### lastly

▸ **lastly**<`U`\>(`handler`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | () => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:171

___

### map

▸ **map**<`Q`, `U`\>(`mapper`, `options?`): [`Promise`](Promise.md)<`U`[]\>

Same as calling `Bluebird.map(thisPromise, mapper)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters

| Name |
| :------ |
| `Q` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | (`item`: `Q`, `index`: `number`, `arrayLength`: `number`) => `U` \| `PromiseLike`<`U`\> |
| `options?` | [`ConcurrencyOption`](../interfaces/Promise.ConcurrencyOption.md) |

#### Returns

[`Promise`](Promise.md)<`U`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:493

___

### mapSeries

▸ **mapSeries**<`R`, `U`\>(`iterator`): [`Promise`](Promise.md)<`U`[]\>

Same as calling ``Bluebird.mapSeries(thisPromise, iterator)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters

| Name |
| :------ |
| `R` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterator` | (`item`: `R`, `index`: `number`, `arrayLength`: `number`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`U`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:515

___

### nodeify

▸ **nodeify**(`callback`, `options?`): [`Promise`](Promise.md)<`R`\>

Register a node-style callback on this promise.

When this promise is is either fulfilled or rejected,
the node callback will be called back with the node.js convention where error reason is the first argument and success value is the second argument.
The error argument will be `null` in case of success.
If the `callback` argument is not a function, this method does not do anything.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: `any`, `value?`: `R`) => `void` |
| `options?` | [`SpreadOption`](../interfaces/Promise.SpreadOption.md) |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:248

▸ **nodeify**(...`sink`): [`Promise`](Promise.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sink` | `any`[] |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:249

___

### props

▸ **props**<`K`, `V`\>(): [`Promise`](Promise.md)<`Map`<`K`, `V`\>\>

Same as calling `Promise.props(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Returns

[`Promise`](Promise.md)<`Map`<`K`, `V`\>\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:468

▸ **props**<`T`\>(): [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:469

___

### race

▸ **race**<`U`\>(): [`Promise`](Promise.md)<`U`\>

Same as calling `Promise.race(thisPromise, count)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Returns

[`Promise`](Promise.md)<`U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:487

___

### reason

▸ **reason**(): `any`

Get the rejection reason for the underlying promise. Throws if the promise isn't rejected yet.

throws `TypeError`

#### Returns

`any`

#### Implementation of

[Inspection](../interfaces/Promise.Inspection.md).[reason](../interfaces/Promise.Inspection.md#reason)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:290

___

### reduce

▸ **reduce**<`Q`, `U`\>(`reducer`, `initialValue?`): [`Promise`](Promise.md)<`U`\>

Same as calling `Promise.reduce(thisPromise, Function reducer, initialValue)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters

| Name |
| :------ |
| `Q` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | (`memo`: `U`, `item`: `Q`, `index`: `number`, `arrayLength`: `number`) => `U` \| `PromiseLike`<`U`\> |
| `initialValue?` | `U` |

#### Returns

[`Promise`](Promise.md)<`U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:499

___

### reflect

▸ **reflect**(): [`Promise`](Promise.md)<[`Inspection`](../interfaces/Promise.Inspection.md)<`R`\>\>

Synchronously inspect the state of this `promise`. The `PromiseInspection` will represent the state of
the promise as snapshotted at the time of calling `.reflect()`.

#### Returns

[`Promise`](Promise.md)<[`Inspection`](../interfaces/Promise.Inspection.md)<`R`\>\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:296

▸ **reflect**(): [`Promise`](Promise.md)<[`Inspection`](../interfaces/Promise.Inspection.md)<`any`\>\>

#### Returns

[`Promise`](Promise.md)<[`Inspection`](../interfaces/Promise.Inspection.md)<`any`\>\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:297

___

### return

▸ **return**(): [`Promise`](Promise.md)<`void`\>

Convenience method for:

<code>
.then(function() {
   return value;
});
</code>

in the case where `value` doesn't change its value. That means `value` is bound at the time of calling `.return()`

Alias `.thenReturn();` for compatibility with earlier ECMAScript version.

#### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:334

▸ **return**<`U`\>(`value`): [`Promise`](Promise.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `U` |

#### Returns

[`Promise`](Promise.md)<`U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:335

___

### some

▸ **some**<`U`\>(`count`): [`Promise`](Promise.md)<`U`[]\>

Same as calling `Promise.some(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`Promise`](Promise.md)<`U`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:481

___

### spread

▸ **spread**<`U`, `W`\>(`fulfilledHandler`): [`Promise`](Promise.md)<`U`\>

Like calling `.then`, but the fulfillment value or rejection reason is assumed to be an array, which is flattened to the formal parameters of the handlers.

#### Type parameters

| Name |
| :------ |
| `U` |
| `W` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fulfilledHandler` | (...`values`: `W`[]) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:456

▸ **spread**<`U`\>(`fulfilledHandler`): [`Promise`](Promise.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fulfilledHandler` | (...`args`: `any`[]) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:457

___

### suppressUnhandledRejections

▸ **suppressUnhandledRejections**(): `void`

Basically sugar for doing: somePromise.catch(function(){});

Which is needed in case error handlers are attached asynchronously to the promise later, which would otherwise result in premature unhandled rejection reporting.

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:527

___

### tap

▸ **tap**<`U`\>(`onFulFill`): [`Promise`](Promise.md)<`R`\>

Like `.finally()`, but not called for rejections.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onFulFill` | (`value`: `R`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:188

___

### tapCatch

▸ **tapCatch**<`U`\>(`onReject`): [`Promise`](Promise.md)<`R`\>

Like `.catch()` but rethrows the error

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onReject` | (`error?`: `any`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:193

▸ **tapCatch**<`U`, `E1`, `E2`, `E3`, `E4`, `E5`\>(`filter1`, `filter2`, `filter3`, `filter4`, `filter5`, `onReject`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |
| `E3` |
| `E4` |
| `E5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `filter4` | `CatchFilter`<`E4`\> |
| `filter5` | `CatchFilter`<`E5`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3` \| `E4` \| `E5`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:195

▸ **tapCatch**<`U`, `E1`, `E2`, `E3`, `E4`\>(`filter1`, `filter2`, `filter3`, `filter4`, `onReject`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |
| `E3` |
| `E4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `filter4` | `CatchFilter`<`E4`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3` \| `E4`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:203

▸ **tapCatch**<`U`, `E1`, `E2`, `E3`\>(`filter1`, `filter2`, `filter3`, `onReject`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |
| `E3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `filter3` | `CatchFilter`<`E3`\> |
| `onReject` | (`error`: `E1` \| `E2` \| `E3`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:210

▸ **tapCatch**<`U`, `E1`, `E2`\>(`filter1`, `filter2`, `onReject`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |
| `E2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `filter2` | `CatchFilter`<`E2`\> |
| `onReject` | (`error`: `E1` \| `E2`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:216

▸ **tapCatch**<`U`, `E1`\>(`filter1`, `onReject`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `U` |
| `E1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter1` | `CatchFilter`<`E1`\> |
| `onReject` | (`error`: `E1`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:221

___

### then

▸ **then**<`U`\>(`onFulfill?`, `onReject?`): [`Promise`](Promise.md)<`U`\>

Promises/A+ `.then()`. Returns a new promise chained from this promise.

The new promise will be rejected or resolved depending on the passed `fulfilledHandler`, `rejectedHandler` and the state of this promise.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onFulfill?` | (`value`: `R`) => `U` \| `PromiseLike`<`U`\> |
| `onReject?` | (`error`: `any`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`U`\>

#### Implementation of

PromiseLike.then

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:53

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): [`Promise`](Promise.md)<`TResult1` \| `TResult2`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `R` |
| `TResult2` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onfulfilled?` | (`value`: `R`) => `TResult1` \| `PromiseLike`<`TResult1`\> |
| `onrejected?` | (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> |

#### Returns

[`Promise`](Promise.md)<`TResult1` \| `TResult2`\>

#### Implementation of

PromiseLike.then

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:54

___

### thenReturn

▸ **thenReturn**(): [`Promise`](Promise.md)<`void`\>

#### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:336

▸ **thenReturn**<`U`\>(`value`): [`Promise`](Promise.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `U` |

#### Returns

[`Promise`](Promise.md)<`U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:337

___

### thenThrow

▸ **thenThrow**(`reason`): [`Promise`](Promise.md)<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `Error` |

#### Returns

[`Promise`](Promise.md)<`never`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:352

___

### throw

▸ **throw**(`reason`): [`Promise`](Promise.md)<`never`\>

Convenience method for:

<code>
.then(function() {
   throw reason;
});
</code>
Same limitations apply as with `.return()`.

Alias `.thenThrow();` for compatibility with earlier ECMAScript version.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `Error` |

#### Returns

[`Promise`](Promise.md)<`never`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:351

___

### timeout

▸ **timeout**(`ms`, `message?`): [`Promise`](Promise.md)<`R`\>

Returns a promise that will be fulfilled with this promise's fulfillment value or rejection reason.
 However, if this promise is not fulfilled or rejected within ms milliseconds, the returned promise
 is rejected with a TimeoutError or the error as the reason.

You may specify a custom error message with the `message` parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |
| `message?` | `string` \| `Error` |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:238

___

### toJSON

▸ **toJSON**(): `object`

This is implicitly called by `JSON.stringify` when serializing the object. Returns a serialized representation of the `Promise`.

#### Returns

`object`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:451

___

### toString

▸ **toString**(): `string`

Convert to String.

#### Returns

`string`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:446

___

### value

▸ **value**(): `R`

Get the fulfillment value of the underlying promise. Throws if the promise isn't fulfilled yet.

throws `TypeError`

#### Returns

`R`

#### Implementation of

[Inspection](../interfaces/Promise.Inspection.md).[value](../interfaces/Promise.Inspection.md#value)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:283

___

### all

▸ `Static` **all**<`T1`, `T2`, `T3`, `T4`, `T5`\>(`values`): [`Promise`](Promise.md)<[`T1`, `T2`, `T3`, `T4`, `T5`]\>

Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled when all the items in the array are fulfilled.
The promise's fulfillment value is an array with fulfillment values at respective positions to the original array.
If any promise in the array rejects, the returned promise is rejected with the rejection reason.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`T1` \| `PromiseLike`<`T1`\>, `T2` \| `PromiseLike`<`T2`\>, `T3` \| `PromiseLike`<`T3`\>, `T4` \| `PromiseLike`<`T4`\>, `T5` \| `PromiseLike`<`T5`\>] |

#### Returns

[`Promise`](Promise.md)<[`T1`, `T2`, `T3`, `T4`, `T5`]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:727

▸ `Static` **all**<`T1`, `T2`, `T3`, `T4`\>(`values`): [`Promise`](Promise.md)<[`T1`, `T2`, `T3`, `T4`]\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`T1` \| `PromiseLike`<`T1`\>, `T2` \| `PromiseLike`<`T2`\>, `T3` \| `PromiseLike`<`T3`\>, `T4` \| `PromiseLike`<`T4`\>] |

#### Returns

[`Promise`](Promise.md)<[`T1`, `T2`, `T3`, `T4`]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:728

▸ `Static` **all**<`T1`, `T2`, `T3`\>(`values`): [`Promise`](Promise.md)<[`T1`, `T2`, `T3`]\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`T1` \| `PromiseLike`<`T1`\>, `T2` \| `PromiseLike`<`T2`\>, `T3` \| `PromiseLike`<`T3`\>] |

#### Returns

[`Promise`](Promise.md)<[`T1`, `T2`, `T3`]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:729

▸ `Static` **all**<`T1`, `T2`\>(`values`): [`Promise`](Promise.md)<[`T1`, `T2`]\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`T1` \| `PromiseLike`<`T1`\>, `T2` \| `PromiseLike`<`T2`\>] |

#### Returns

[`Promise`](Promise.md)<[`T1`, `T2`]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:730

▸ `Static` **all**<`T1`\>(`values`): [`Promise`](Promise.md)<[`T1`]\>

#### Type parameters

| Name |
| :------ |
| `T1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`T1` \| `PromiseLike`<`T1`\>] |

#### Returns

[`Promise`](Promise.md)<[`T1`]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:731

▸ `Static` **all**<`R`\>(`values`): [`Promise`](Promise.md)<`R`[]\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Iterable`<`R` \| `PromiseLike`<`R`\>\> \| `PromiseLike`<`Iterable`<`R` \| `PromiseLike`<`R`\>\>\> |

#### Returns

[`Promise`](Promise.md)<`R`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:733

___

### any

▸ `Static` **any**<`R`\>(`values`): [`Promise`](Promise.md)<`R`\>

Like `Promise.some()`, with 1 as `count`. However, if the promise fulfills, the fulfillment value is not an array of 1 but the value directly.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Iterable`<`R` \| `PromiseLike`<`R`\>\> \| `PromiseLike`<`Iterable`<`R` \| `PromiseLike`<`R`\>\>\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:756

___

### attempt

▸ `Static` **attempt**<`R`\>(`fn`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:538

___

### bind

▸ `Static` **bind**(`thisArg`): [`Promise`](Promise.md)<`void`\>

Sugar for `Promise.resolve(undefined).bind(thisArg);`. See `.bind()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `thisArg` | `any` |

#### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:579

___

### cast

▸ `Static` **cast**<`R`\>(`value`): [`Promise`](Promise.md)<`R`\>

Cast the given `value` to a trusted promise.

If `value` is already a trusted `Promise`, it is returned as is. If `value` is not a thenable, a fulfilled is: Promise returned with `value` as its fulfillment value.
If `value` is a thenable (Promise-like object, like those returned by jQuery's `$.ajax`), returns a trusted that: Promise assimilates the state of the thenable.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:574

___

### config

▸ `Static` **config**(`options`): `void`

Configure long stack traces, warnings, monitoring and cancellation.
Note that even though false is the default here, a development environment might be detected which automatically
 enables long stack traces and warnings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.cancellation?` | `boolean` | Enable cancellation |
| `options.longStackTraces?` | `boolean` | Enable long stack traces |
| `options.monitoring?` | `boolean` | Enable monitoring |
| `options.warnings?` | `boolean` \| { `wForgottenReturn`: `boolean`  } | Enable warnings |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:927

___

### coroutine

▸ `Static` **coroutine**<`T`\>(`generatorFunction`, `options?`): () => [`Promise`](Promise.md)<`T`\>

Returns a function that can use `yield` to run asynchronous code synchronously.

This feature requires the support of generators which are drafted in the next version of the language.
Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generatorFunction` | () => `IterableIterator`<`any`\> |
| `options?` | [`CoroutineOptions`](../interfaces/Promise.CoroutineOptions.md) |

#### Returns

`fn`

▸ (): [`Promise`](Promise.md)<`T`\>

Returns a function that can use `yield` to run asynchronous code synchronously.

This feature requires the support of generators which are drafted in the next version of the language.
Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:666

▸ `Static` **coroutine**<`T`, `A1`\>(`generatorFunction`, `options?`): (`a1`: `A1`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generatorFunction` | (`a1`: `A1`) => `IterableIterator`<`any`\> |
| `options?` | [`CoroutineOptions`](../interfaces/Promise.CoroutineOptions.md) |

#### Returns

`fn`

▸ (`a1`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `A1` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:670

▸ `Static` **coroutine**<`T`, `A1`, `A2`\>(`generatorFunction`, `options?`): (`a1`: `A1`, `a2`: `A2`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |
| `A2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generatorFunction` | (`a1`: `A1`, `a2`: `A2`) => `IterableIterator`<`any`\> |
| `options?` | [`CoroutineOptions`](../interfaces/Promise.CoroutineOptions.md) |

#### Returns

`fn`

▸ (`a1`, `a2`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `A1` |
| `a2` | `A2` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:674

▸ `Static` **coroutine**<`T`, `A1`, `A2`, `A3`\>(`generatorFunction`, `options?`): (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |
| `A2` |
| `A3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generatorFunction` | (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`) => `IterableIterator`<`any`\> |
| `options?` | [`CoroutineOptions`](../interfaces/Promise.CoroutineOptions.md) |

#### Returns

`fn`

▸ (`a1`, `a2`, `a3`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `A1` |
| `a2` | `A2` |
| `a3` | `A3` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:678

▸ `Static` **coroutine**<`T`, `A1`, `A2`, `A3`, `A4`\>(`generatorFunction`, `options?`): (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`, `a4`: `A4`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |
| `A2` |
| `A3` |
| `A4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generatorFunction` | (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`, `a4`: `A4`) => `IterableIterator`<`any`\> |
| `options?` | [`CoroutineOptions`](../interfaces/Promise.CoroutineOptions.md) |

#### Returns

`fn`

▸ (`a1`, `a2`, `a3`, `a4`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `A1` |
| `a2` | `A2` |
| `a3` | `A3` |
| `a4` | `A4` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:682

▸ `Static` **coroutine**<`T`, `A1`, `A2`, `A3`, `A4`, `A5`\>(`generatorFunction`, `options?`): (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`, `a4`: `A4`, `a5`: `A5`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |
| `A2` |
| `A3` |
| `A4` |
| `A5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generatorFunction` | (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`, `a4`: `A4`, `a5`: `A5`) => `IterableIterator`<`any`\> |
| `options?` | [`CoroutineOptions`](../interfaces/Promise.CoroutineOptions.md) |

#### Returns

`fn`

▸ (`a1`, `a2`, `a3`, `a4`, `a5`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `A1` |
| `a2` | `A2` |
| `a3` | `A3` |
| `a4` | `A4` |
| `a5` | `A5` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:686

▸ `Static` **coroutine**<`T`, `A1`, `A2`, `A3`, `A4`, `A5`, `A6`\>(`generatorFunction`, `options?`): (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`, `a4`: `A4`, `a5`: `A5`, `a6`: `A6`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |
| `A2` |
| `A3` |
| `A4` |
| `A5` |
| `A6` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generatorFunction` | (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`, `a4`: `A4`, `a5`: `A5`, `a6`: `A6`) => `IterableIterator`<`any`\> |
| `options?` | [`CoroutineOptions`](../interfaces/Promise.CoroutineOptions.md) |

#### Returns

`fn`

▸ (`a1`, `a2`, `a3`, `a4`, `a5`, `a6`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `A1` |
| `a2` | `A2` |
| `a3` | `A3` |
| `a4` | `A4` |
| `a5` | `A5` |
| `a6` | `A6` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:690

▸ `Static` **coroutine**<`T`, `A1`, `A2`, `A3`, `A4`, `A5`, `A6`, `A7`\>(`generatorFunction`, `options?`): (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`, `a4`: `A4`, `a5`: `A5`, `a6`: `A6`, `a7`: `A7`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |
| `A2` |
| `A3` |
| `A4` |
| `A5` |
| `A6` |
| `A7` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generatorFunction` | (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`, `a4`: `A4`, `a5`: `A5`, `a6`: `A6`, `a7`: `A7`) => `IterableIterator`<`any`\> |
| `options?` | [`CoroutineOptions`](../interfaces/Promise.CoroutineOptions.md) |

#### Returns

`fn`

▸ (`a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `A1` |
| `a2` | `A2` |
| `a3` | `A3` |
| `a4` | `A4` |
| `a5` | `A5` |
| `a6` | `A6` |
| `a7` | `A7` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:694

▸ `Static` **coroutine**<`T`, `A1`, `A2`, `A3`, `A4`, `A5`, `A6`, `A7`, `A8`\>(`generatorFunction`, `options?`): (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`, `a4`: `A4`, `a5`: `A5`, `a6`: `A6`, `a7`: `A7`, `a8`: `A8`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |
| `A2` |
| `A3` |
| `A4` |
| `A5` |
| `A6` |
| `A7` |
| `A8` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generatorFunction` | (`a1`: `A1`, `a2`: `A2`, `a3`: `A3`, `a4`: `A4`, `a5`: `A5`, `a6`: `A6`, `a7`: `A7`, `a8`: `A8`) => `IterableIterator`<`any`\> |
| `options?` | [`CoroutineOptions`](../interfaces/Promise.CoroutineOptions.md) |

#### Returns

`fn`

▸ (`a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `A1` |
| `a2` | `A2` |
| `a3` | `A3` |
| `a4` | `A4` |
| `a5` | `A5` |
| `a6` | `A6` |
| `a7` | `A7` |
| `a8` | `A8` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:698

___

### defer

▸ `Static` **defer**<`R`\>(): [`Resolver`](../interfaces/Promise.Resolver.md)<`R`\>

Create a promise with undecided fate and return a `PromiseResolver` to control it. See resolution?: Promise(#promise-resolution).

#### Type parameters

| Name |
| :------ |
| `R` |

#### Returns

[`Resolver`](../interfaces/Promise.Resolver.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:566

___

### delay

▸ `Static` **delay**<`R`\>(`ms`, `value`): [`Promise`](Promise.md)<`R`\>

Returns a promise that will be resolved with value (or undefined) after given ms milliseconds.
If value is a promise, the delay will start counting down when it is fulfilled and the returned
 promise will be fulfilled with the fulfillment value of the value promise.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |
| `value` | `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:599

▸ `Static` **delay**(`ms`): [`Promise`](Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:600

___

### each

▸ `Static` **each**<`R`, `U`\>(`values`, `iterator`): [`Promise`](Promise.md)<`R`[]\>

Iterate over an array, or a promise of an array, which contains promises (or a mix of promises and values) with the given iterator function with the signature (item, index, value) where item is the resolved value of a respective promise in the input array.
Iteration happens serially. If any promise in the input array is rejected the returned promise is rejected as well.

Resolves to the original array unmodified, this method is meant to be used for side effects.
If the iterator function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.

#### Type parameters

| Name |
| :------ |
| `R` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Iterable`<`R` \| `PromiseLike`<`R`\>\> \| `PromiseLike`<`Iterable`<`R` \| `PromiseLike`<`R`\>\>\> |
| `iterator` | (`item`: `R`, `index`: `number`, `arrayLength`: `number`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`R`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:870

___

### filter

▸ `Static` **filter**<`R`\>(`values`, `filterer`, `option?`): [`Promise`](Promise.md)<`R`[]\>

Filter an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `filterer` function with the signature `(item, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array.
If any promise in the input array is rejected the returned promise is rejected as well.

The return values from the filtered functions are coerced to booleans, with the exception of promises and thenables which are awaited for their eventual result.

*The original array is not modified.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Iterable`<`R` \| `PromiseLike`<`R`\>\> \| `PromiseLike`<`Iterable`<`R` \| `PromiseLike`<`R`\>\>\> |
| `filterer` | (`item`: `R`, `index`: `number`, `arrayLength`: `number`) => `boolean` \| `PromiseLike`<`boolean`\> |
| `option?` | [`ConcurrencyOption`](../interfaces/Promise.ConcurrencyOption.md) |

#### Returns

[`Promise`](Promise.md)<`R`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:857

___

### fromCallback

▸ `Static` **fromCallback**(`resolver`, `options?`): [`Promise`](Promise.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolver` | (`callback`: (`err`: `any`, `result?`: `any`) => `void`) => `void` |
| `options?` | [`FromNodeOptions`](../interfaces/Promise.FromNodeOptions.md) |

#### Returns

[`Promise`](Promise.md)<`any`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:655

▸ `Static` **fromCallback**<`T`\>(`resolver`, `options?`): [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolver` | (`callback`: (`err`: `any`, `result?`: `T`) => `void`) => `void` |
| `options?` | [`FromNodeOptions`](../interfaces/Promise.FromNodeOptions.md) |

#### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:656

___

### fromNode

▸ `Static` **fromNode**(`resolver`, `options?`): [`Promise`](Promise.md)<`any`\>

Returns a promise that is resolved by a node style callback function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolver` | (`callback`: (`err`: `any`, `result?`: `any`) => `void`) => `void` |
| `options?` | [`FromNodeOptions`](../interfaces/Promise.FromNodeOptions.md) |

#### Returns

[`Promise`](Promise.md)<`any`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:653

▸ `Static` **fromNode**<`T`\>(`resolver`, `options?`): [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolver` | (`callback`: (`err`: `any`, `result?`: `T`) => `void`) => `void` |
| `options?` | [`FromNodeOptions`](../interfaces/Promise.FromNodeOptions.md) |

#### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:654

___

### is

▸ `Static` **is**(`value`): `boolean`

See if `value` is a trusted Promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:584

___

### join

▸ `Static` **join**<`R`, `A1`\>(`arg1`, `handler`): [`Promise`](Promise.md)<`R`\>

Promise.join(
  Promise<any>|any values...,
  function handler
) -> Promise
For coordinating multiple concurrent discrete promises.

Note: In 1.x and 0.x Promise.join used to be a Promise.all that took the values in as arguments instead in an array.
This behavior has been deprecated but is still supported partially - when the last argument is an immediate function value the new semantics will apply

**`deprecated`** use .all instead

#### Type parameters

| Name |
| :------ |
| `R` |
| `A1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` \| `PromiseLike`<`A1`\> |
| `handler` | (`arg1`: `A1`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:785

▸ `Static` **join**<`R`, `A1`, `A2`\>(`arg1`, `arg2`, `handler`): [`Promise`](Promise.md)<`R`\>

**`deprecated`** use .all instead

#### Type parameters

| Name |
| :------ |
| `R` |
| `A1` |
| `A2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` \| `PromiseLike`<`A1`\> |
| `arg2` | `A2` \| `PromiseLike`<`A2`\> |
| `handler` | (`arg1`: `A1`, `arg2`: `A2`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:789

▸ `Static` **join**<`R`, `A1`, `A2`, `A3`\>(`arg1`, `arg2`, `arg3`, `handler`): [`Promise`](Promise.md)<`R`\>

**`deprecated`** use .all instead

#### Type parameters

| Name |
| :------ |
| `R` |
| `A1` |
| `A2` |
| `A3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` \| `PromiseLike`<`A1`\> |
| `arg2` | `A2` \| `PromiseLike`<`A2`\> |
| `arg3` | `A3` \| `PromiseLike`<`A3`\> |
| `handler` | (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:794

▸ `Static` **join**<`R`, `A1`, `A2`, `A3`, `A4`\>(`arg1`, `arg2`, `arg3`, `arg4`, `handler`): [`Promise`](Promise.md)<`R`\>

**`deprecated`** use .all instead

#### Type parameters

| Name |
| :------ |
| `R` |
| `A1` |
| `A2` |
| `A3` |
| `A4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` \| `PromiseLike`<`A1`\> |
| `arg2` | `A2` \| `PromiseLike`<`A2`\> |
| `arg3` | `A3` \| `PromiseLike`<`A3`\> |
| `arg4` | `A4` \| `PromiseLike`<`A4`\> |
| `handler` | (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`, `arg4`: `A4`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:800

▸ `Static` **join**<`R`, `A1`, `A2`, `A3`, `A4`, `A5`\>(`arg1`, `arg2`, `arg3`, `arg4`, `arg5`, `handler`): [`Promise`](Promise.md)<`R`\>

**`deprecated`** use .all instead

#### Type parameters

| Name |
| :------ |
| `R` |
| `A1` |
| `A2` |
| `A3` |
| `A4` |
| `A5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` \| `PromiseLike`<`A1`\> |
| `arg2` | `A2` \| `PromiseLike`<`A2`\> |
| `arg3` | `A3` \| `PromiseLike`<`A3`\> |
| `arg4` | `A4` \| `PromiseLike`<`A4`\> |
| `arg5` | `A5` \| `PromiseLike`<`A5`\> |
| `handler` | (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`, `arg4`: `A4`, `arg5`: `A5`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:807

▸ `Static` **join**<`R`\>(...`values`): [`Promise`](Promise.md)<`R`[]\>

**`deprecated`** use .all instead

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | (`R` \| `PromiseLike`<`R`\>)[] |

#### Returns

[`Promise`](Promise.md)<`R`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:818

___

### longStackTraces

▸ `Static` **longStackTraces**(): `void`

Call this right after the library is loaded to enabled long stack traces.

Long stack traces cannot be disabled after being enabled, and cannot be enabled after promises have already been created.
Long stack traces imply a substantial performance penalty, around 4-5x for throughput and 0.5x for latency.

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:592

___

### map

▸ `Static` **map**<`R`, `U`\>(`values`, `mapper`, `options?`): [`Promise`](Promise.md)<`U`[]\>

Map an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `mapper` function with the signature `(item, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array.
If any promise in the input array is rejected the returned promise is rejected as well.

If the `mapper` function returns promises or thenables, the returned promise will wait for all the mapped results to be resolved as well.

*The original array is not modified.*

#### Type parameters

| Name |
| :------ |
| `R` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Iterable`<`R` \| `PromiseLike`<`R`\>\> \| `PromiseLike`<`Iterable`<`R` \| `PromiseLike`<`R`\>\>\> |
| `mapper` | (`item`: `R`, `index`: `number`, `arrayLength`: `number`) => `U` \| `PromiseLike`<`U`\> |
| `options?` | [`ConcurrencyOption`](../interfaces/Promise.ConcurrencyOption.md) |

#### Returns

[`Promise`](Promise.md)<`U`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:828

___

### mapSeries

▸ `Static` **mapSeries**<`R`, `U`\>(`values`, `iterator`): [`Promise`](Promise.md)<`U`[]\>

Given an Iterable(arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix of promises and values), iterate over all the values in the Iterable into an array and iterate over the array serially, in-order.

Returns a promise for an array that contains the values returned by the iterator function in their respective positions.
The iterator won't be called for an item until its previous item, and the promise returned by the iterator for that item are fulfilled.
This results in a mapSeries kind of utility but it can also be used simply as a side effect iterator similar to Array#forEach.

If any promise in the input array is rejected or any promise returned by the iterator function is rejected, the result will be rejected as well.

#### Type parameters

| Name |
| :------ |
| `R` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Iterable`<`R` \| `PromiseLike`<`R`\>\> \| `PromiseLike`<`Iterable`<`R` \| `PromiseLike`<`R`\>\>\> |
| `iterator` | (`item`: `R`, `index`: `number`, `arrayLength`: `number`) => `U` \| `PromiseLike`<`U`\> |

#### Returns

[`Promise`](Promise.md)<`U`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:884

___

### method

▸ `Static` **method**<`R`, `A1`\>(`fn`): (`arg1`: `A1`) => [`Promise`](Promise.md)<`R`\>

Returns a new function that wraps the given function `fn`.
The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
This method is convenient when a function can sometimes return synchronously or throw synchronously.

#### Type parameters

| Name |
| :------ |
| `R` |
| `A1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `A1`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

`fn`

▸ (`arg1`): [`Promise`](Promise.md)<`R`\>

Returns a new function that wraps the given function `fn`.
The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
This method is convenient when a function can sometimes return synchronously or throw synchronously.

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` |

##### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:545

▸ `Static` **method**<`R`, `A1`, `A2`\>(`fn`): (`arg1`: `A1`, `arg2`: `A2`) => [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |
| `A1` |
| `A2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `A1`, `arg2`: `A2`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`): [`Promise`](Promise.md)<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` |
| `arg2` | `A2` |

##### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:546

▸ `Static` **method**<`R`, `A1`, `A2`, `A3`\>(`fn`): (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`) => [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |
| `A1` |
| `A2` |
| `A3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`): [`Promise`](Promise.md)<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` |
| `arg2` | `A2` |
| `arg3` | `A3` |

##### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:547

▸ `Static` **method**<`R`, `A1`, `A2`, `A3`, `A4`\>(`fn`): (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`, `arg4`: `A4`) => [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |
| `A1` |
| `A2` |
| `A3` |
| `A4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`, `arg4`: `A4`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`): [`Promise`](Promise.md)<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` |
| `arg2` | `A2` |
| `arg3` | `A3` |
| `arg4` | `A4` |

##### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:548

▸ `Static` **method**<`R`, `A1`, `A2`, `A3`, `A4`, `A5`\>(`fn`): (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`, `arg4`: `A4`, `arg5`: `A5`) => [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |
| `A1` |
| `A2` |
| `A3` |
| `A4` |
| `A5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`, `arg4`: `A4`, `arg5`: `A5`) => `R` \| `PromiseLike`<`R`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`): [`Promise`](Promise.md)<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` |
| `arg2` | `A2` |
| `arg3` | `A3` |
| `arg4` | `A4` |
| `arg5` | `A5` |

##### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:549

▸ `Static` **method**<`R`\>(`fn`): (...`args`: `any`[]) => [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`[]) => `R` \| `PromiseLike`<`R`\> |

#### Returns

`fn`

▸ (...`args`): [`Promise`](Promise.md)<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:550

___

### onPossiblyUnhandledRejection

▸ `Static` **onPossiblyUnhandledRejection**(`handler`): `void`

Add `handler` as the handler to call when there is a possibly unhandled rejection. The default handler logs the error stack to stderr or `console.error` in browsers.

Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`reason`: `any`) => `any` |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:708

▸ `Static` **onPossiblyUnhandledRejection**(`handler?`): `void`

Add handler as the handler to call when there is a possibly unhandled rejection.
The default handler logs the error stack to stderr or console.error in browsers.

Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.

Note: this hook is specific to the bluebird instance its called on, application developers should use global rejection events.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler?` | (`error`: `Error`, `promise`: [`Promise`](Promise.md)<`any`\>) => `void` |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:718

___

### promisify

▸ `Static` **promisify**<`T`\>(`func`, `options?`): () => [`Promise`](Promise.md)<`T`\>

Returns a function that will wrap the given `nodeFunction`.

Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function.
The node function should conform to node.js convention of accepting a callback as last argument and
calling that callback with error as the first argument and success value on the second argument.

If the `nodeFunction` calls its callback with multiple success values, the fulfillment value will be an array of them.

If you pass a `receiver`, the `nodeFunction` will be called as a method on the `receiver`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`callback`: (`err`: `any`, `result?`: `T`) => `void`) => `void` |
| `options?` | [`PromisifyOptions`](../interfaces/Promise.PromisifyOptions.md) |

#### Returns

`fn`

▸ (): [`Promise`](Promise.md)<`T`\>

Returns a function that will wrap the given `nodeFunction`.

Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function.
The node function should conform to node.js convention of accepting a callback as last argument and
calling that callback with error as the first argument and success value on the second argument.

If the `nodeFunction` calls its callback with multiple success values, the fulfillment value will be an array of them.

If you pass a `receiver`, the `nodeFunction` will be called as a method on the `receiver`.

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:613

▸ `Static` **promisify**<`T`, `A1`\>(`func`, `options?`): (`arg1`: `A1`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`arg1`: `A1`, `callback`: (`err`: `any`, `result?`: `T`) => `void`) => `void` |
| `options?` | [`PromisifyOptions`](../interfaces/Promise.PromisifyOptions.md) |

#### Returns

`fn`

▸ (`arg1`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:617

▸ `Static` **promisify**<`T`, `A1`, `A2`\>(`func`, `options?`): (`arg1`: `A1`, `arg2`: `A2`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |
| `A2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`arg1`: `A1`, `arg2`: `A2`, `callback`: (`err`: `any`, `result?`: `T`) => `void`) => `void` |
| `options?` | [`PromisifyOptions`](../interfaces/Promise.PromisifyOptions.md) |

#### Returns

`fn`

▸ (`arg1`, `arg2`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` |
| `arg2` | `A2` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:621

▸ `Static` **promisify**<`T`, `A1`, `A2`, `A3`\>(`func`, `options?`): (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |
| `A2` |
| `A3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`, `callback`: (`err`: `any`, `result?`: `T`) => `void`) => `void` |
| `options?` | [`PromisifyOptions`](../interfaces/Promise.PromisifyOptions.md) |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` |
| `arg2` | `A2` |
| `arg3` | `A3` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:625

▸ `Static` **promisify**<`T`, `A1`, `A2`, `A3`, `A4`\>(`func`, `options?`): (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`, `arg4`: `A4`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |
| `A2` |
| `A3` |
| `A4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`, `arg4`: `A4`, `callback`: (`err`: `any`, `result?`: `T`) => `void`) => `void` |
| `options?` | [`PromisifyOptions`](../interfaces/Promise.PromisifyOptions.md) |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` |
| `arg2` | `A2` |
| `arg3` | `A3` |
| `arg4` | `A4` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:629

▸ `Static` **promisify**<`T`, `A1`, `A2`, `A3`, `A4`, `A5`\>(`func`, `options?`): (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`, `arg4`: `A4`, `arg5`: `A5`) => [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A1` |
| `A2` |
| `A3` |
| `A4` |
| `A5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`arg1`: `A1`, `arg2`: `A2`, `arg3`: `A3`, `arg4`: `A4`, `arg5`: `A5`, `callback`: (`err`: `any`, `result?`: `T`) => `void`) => `void` |
| `options?` | [`PromisifyOptions`](../interfaces/Promise.PromisifyOptions.md) |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`): [`Promise`](Promise.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `A1` |
| `arg2` | `A2` |
| `arg3` | `A3` |
| `arg4` | `A4` |
| `arg5` | `A5` |

##### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:633

▸ `Static` **promisify**(`nodeFunction`, `options?`): (...`args`: `any`[]) => [`Promise`](Promise.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeFunction` | (...`args`: `any`[]) => `void` |
| `options?` | [`PromisifyOptions`](../interfaces/Promise.PromisifyOptions.md) |

#### Returns

`fn`

▸ (...`args`): [`Promise`](Promise.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

[`Promise`](Promise.md)<`any`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:637

___

### promisifyAll

▸ `Static` **promisifyAll**<`T`\>(`target`, `options?`): `T`

Promisifies the entire object by going through the object's properties and creating an async equivalent of each function on the object and its prototype chain.

The promisified method name will be the original method name postfixed with `Async`. Returns the input object.

Note that the original methods on the object are not overwritten but new methods are created with the `Async`-postfix. For example,
if you `promisifyAll()` the node.js `fs` object use `fs.statAsync()` to call the promisified `stat` method.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `options?` | [`PromisifyAllOptions`](../interfaces/Promise.PromisifyAllOptions.md)<`T`\> |

#### Returns

`T`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:648

___

### props

▸ `Static` **props**<`K`, `V`\>(`map`): [`Promise`](Promise.md)<`Map`<`K`, `V`\>\>

Like ``Promise.all`` but for object properties instead of array items. Returns a promise that is fulfilled when all the properties of the object are fulfilled.

The promise's fulfillment value is an object with fulfillment values at respective keys to the original object.
If any promise in the object rejects, the returned promise is rejected with the rejection reason.

If `object` is a trusted `Promise`, then it will be treated as a promise for object rather than for its properties.
All other objects are treated for their properties as is returned by `Object.keys` - the object's own enumerable properties.

*The original object is not modified.*

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map`<`K`, `V` \| `PromiseLike`<`V`\>\> \| `PromiseLike`<`Map`<`K`, `V` \| `PromiseLike`<`V`\>\>\> |

#### Returns

[`Promise`](Promise.md)<`Map`<`K`, `V`\>\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:747

▸ `Static` **props**<`T`\>(`object`): [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `PromiseLike`<[`ResolvableProps`](../modules/Promise.md#resolvableprops)<`T`\>\> |

#### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:749

▸ `Static` **props**<`T`\>(`object`): [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`ResolvableProps`](../modules/Promise.md#resolvableprops)<`T`\> |

#### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:751

___

### race

▸ `Static` **race**<`R`\>(`values`): [`Promise`](Promise.md)<`R`\>

Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled or rejected as soon as a promise in the array is fulfilled or rejected with the respective rejection reason or fulfillment value.

**Note** If you pass empty array or a sparse array with no values, or a promise/thenable for such, it will be forever pending.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Iterable`<`R` \| `PromiseLike`<`R`\>\> \| `PromiseLike`<`Iterable`<`R` \| `PromiseLike`<`R`\>\>\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:763

___

### reduce

▸ `Static` **reduce**<`R`, `U`\>(`values`, `reducer`, `initialValue?`): [`Promise`](Promise.md)<`U`\>

Reduce an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `reducer` function with the signature `(total, current, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array.
If any promise in the input array is rejected the returned promise is rejected as well.

If the reducer function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.

*The original array is not modified. If no `initialValue` is given and the array doesn't contain at least 2 items, the callback will not be called and `undefined` is returned.
If `initialValue` is given and the array doesn't have at least 1 item, `initialValue` is returned.*

#### Type parameters

| Name |
| :------ |
| `R` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Iterable`<`R` \| `PromiseLike`<`R`\>\> \| `PromiseLike`<`Iterable`<`R` \| `PromiseLike`<`R`\>\>\> |
| `reducer` | (`total`: `U`, `current`: `R`, `index`: `number`, `arrayLength`: `number`) => `U` \| `PromiseLike`<`U`\> |
| `initialValue?` | `U` |

#### Returns

[`Promise`](Promise.md)<`U`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:843

___

### reject

▸ `Static` **reject**(`reason`): [`Promise`](Promise.md)<`never`\>

Create a promise that is rejected with the given `reason`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `any` |

#### Returns

[`Promise`](Promise.md)<`never`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:561

___

### resolve

▸ `Static` **resolve**(): [`Promise`](Promise.md)<`void`\>

Create a promise that is resolved with the given `value`. If `value` is a thenable or promise, the returned promise will assume its state.

#### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:555

▸ `Static` **resolve**<`R`\>(`value`): [`Promise`](Promise.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:556

___

### some

▸ `Static` **some**<`R`\>(`values`, `count`): [`Promise`](Promise.md)<`R`[]\>

Initiate a competitive race between multiple promises or values (values will become immediately fulfilled promises).
When `count` amount of promises have been fulfilled, the returned promise is fulfilled with an array that contains the fulfillment values of the winners in order of resolution.

If too many promises are rejected so that the promise can never become fulfilled, it will be immediately rejected with an array of rejection reasons in the order they were thrown in.

*The original array is not modified.*

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Iterable`<`R` \| `PromiseLike`<`R`\>\> \| `PromiseLike`<`Iterable`<`R` \| `PromiseLike`<`R`\>\>\> |
| `count` | `number` |

#### Returns

[`Promise`](Promise.md)<`R`[]\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:773

___

### try

▸ `Static` **try**<`R`\>(`fn`): [`Promise`](Promise.md)<`R`\>

Start the chain of promises with `Promise.try`. Any synchronous exceptions will be turned into rejections on the returned promise.

Note about second argument: if it's specifically a true array, its values become respective arguments for the function call.
Otherwise it is passed as is as the first argument for the function call.

Alias for `attempt();` for compatibility with earlier ECMAScript version.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `R` \| `PromiseLike`<`R`\> |

#### Returns

[`Promise`](Promise.md)<`R`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:537

___

### using

▸ `Static` **using**<`R`, `T`\>(`disposer`, `executor`): [`Promise`](Promise.md)<`T`\>

In conjunction with `.disposer`, using will make sure that no matter what, the specified disposer
 will be called when the promise returned by the callback passed to using has settled. The disposer is
 necessary because there is no standard interface in node for disposing resources.

#### Type parameters

| Name |
| :------ |
| `R` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposer` | [`Disposer`](Promise.Disposer.md)<`R`\> |
| `executor` | (`transaction`: `R`) => `PromiseLike`<`T`\> |

#### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:906

▸ `Static` **using**<`R1`, `R2`, `T`\>(`disposer`, `disposer2`, `executor`): [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `R1` |
| `R2` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposer` | [`Disposer`](Promise.Disposer.md)<`R1`\> |
| `disposer2` | [`Disposer`](Promise.Disposer.md)<`R2`\> |
| `executor` | (`transaction1`: `R1`, `transaction2`: `R2`) => `PromiseLike`<`T`\> |

#### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:910

▸ `Static` **using**<`R1`, `R2`, `R3`, `T`\>(`disposer`, `disposer2`, `disposer3`, `executor`): [`Promise`](Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `R1` |
| `R2` |
| `R3` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposer` | [`Disposer`](Promise.Disposer.md)<`R1`\> |
| `disposer2` | [`Disposer`](Promise.Disposer.md)<`R2`\> |
| `disposer3` | [`Disposer`](Promise.Disposer.md)<`R3`\> |
| `executor` | (`transaction1`: `R1`, `transaction2`: `R2`, `transaction3`: `R3`) => `PromiseLike`<`T`\> |

#### Returns

[`Promise`](Promise.md)<`T`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:915
