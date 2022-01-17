[vortex_devel](../README.md) / [Exports](../modules.md) / [Promise](../modules/Promise.md) / AggregateError

# Class: AggregateError

[Promise](../modules/Promise.md).AggregateError

A collection of errors. `AggregateError` is an array-like object, with numeric indices and a `.length` property.
 It supports all generic array methods such as `.forEach` directly.

`AggregateError`s are caught in `.error` handlers, even if the contained errors are not operational.

`Promise.some` and `Promise.any` use `AggregateError` as rejection reason when they fail.

## Hierarchy

- `Error`

  ↳ **`AggregateError`**

## Implements

- `ArrayLike`<`Error`\>

## Indexable

▪ [index: `number`]: `Error`

## Table of contents

### Constructors

- [constructor](Promise.AggregateError.md#constructor)

### Properties

- [length](Promise.AggregateError.md#length)
- [message](Promise.AggregateError.md#message)
- [name](Promise.AggregateError.md#name)
- [stack](Promise.AggregateError.md#stack)
- [prepareStackTrace](Promise.AggregateError.md#preparestacktrace)
- [stackTraceLimit](Promise.AggregateError.md#stacktracelimit)

### Methods

- [every](Promise.AggregateError.md#every)
- [filter](Promise.AggregateError.md#filter)
- [forEach](Promise.AggregateError.md#foreach)
- [indexOf](Promise.AggregateError.md#indexof)
- [join](Promise.AggregateError.md#join)
- [lastIndexOf](Promise.AggregateError.md#lastindexof)
- [map](Promise.AggregateError.md#map)
- [pop](Promise.AggregateError.md#pop)
- [push](Promise.AggregateError.md#push)
- [reduce](Promise.AggregateError.md#reduce)
- [reduceRight](Promise.AggregateError.md#reduceright)
- [reverse](Promise.AggregateError.md#reverse)
- [shift](Promise.AggregateError.md#shift)
- [slice](Promise.AggregateError.md#slice)
- [some](Promise.AggregateError.md#some)
- [sort](Promise.AggregateError.md#sort)
- [unshift](Promise.AggregateError.md#unshift)
- [captureStackTrace](Promise.AggregateError.md#capturestacktrace)

## Constructors

### constructor

• **new AggregateError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

e:/WorkC/vortex/node_modules/typescript/lib/lib.es5.d.ts:1028

## Properties

### length

• **length**: `number`

#### Implementation of

ArrayLike.length

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1006

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

e:/WorkC/vortex/node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

e:/WorkC/vortex/node_modules/typescript/lib/lib.es5.d.ts:1022

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

e:/WorkC/vortex/node_modules/typescript/lib/lib.es5.d.ts:1024

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/globals.d.ts:13

## Methods

### every

▸ **every**(`callback`, `thisArg?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: `Error`, `index`: `number`, `array`: [`AggregateError`](Promise.AggregateError.md)) => `boolean` |
| `thisArg?` | `any` |

#### Returns

`boolean`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1017

___

### filter

▸ **filter**(`callback`, `thisArg?`): [`AggregateError`](Promise.AggregateError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: `Error`, `index`: `number`, `array`: [`AggregateError`](Promise.AggregateError.md)) => `boolean` |
| `thisArg?` | `any` |

#### Returns

[`AggregateError`](Promise.AggregateError.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1014

___

### forEach

▸ **forEach**(`callback`, `thisArg?`): `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: `Error`, `index`: `number`, `array`: [`AggregateError`](Promise.AggregateError.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`undefined`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1015

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchElement` | `Error` |
| `fromIndex?` | `number` |

#### Returns

`number`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1019

___

### join

▸ **join**(`separator?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `separator?` | `string` |

#### Returns

`string`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1008

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchElement` | `Error` |
| `fromIndex?` | `number` |

#### Returns

`number`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1020

___

### map

▸ **map**(`callback`, `thisArg?`): [`AggregateError`](Promise.AggregateError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: `Error`, `index`: `number`, `array`: [`AggregateError`](Promise.AggregateError.md)) => `boolean` |
| `thisArg?` | `any` |

#### Returns

[`AggregateError`](Promise.AggregateError.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1018

___

### pop

▸ **pop**(): `Error`

#### Returns

`Error`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1009

___

### push

▸ **push**(...`errors`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...errors` | `Error`[] |

#### Returns

`number`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1010

___

### reduce

▸ **reduce**(`callback`, `initialValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`accumulator`: `any`, `element`: `Error`, `index`: `number`, `array`: [`AggregateError`](Promise.AggregateError.md)) => `any` |
| `initialValue?` | `any` |

#### Returns

`any`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1021

___

### reduceRight

▸ **reduceRight**(`callback`, `initialValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`previousValue`: `any`, `element`: `Error`, `index`: `number`, `array`: [`AggregateError`](Promise.AggregateError.md)) => `any` |
| `initialValue?` | `any` |

#### Returns

`any`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1022

___

### reverse

▸ **reverse**(): [`AggregateError`](Promise.AggregateError.md)

#### Returns

[`AggregateError`](Promise.AggregateError.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1024

___

### shift

▸ **shift**(): `Error`

#### Returns

`Error`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1011

___

### slice

▸ **slice**(`begin?`, `end?`): [`AggregateError`](Promise.AggregateError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `begin?` | `number` |
| `end?` | `number` |

#### Returns

[`AggregateError`](Promise.AggregateError.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1013

___

### some

▸ **some**(`callback`, `thisArg?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: `Error`, `index`: `number`, `array`: [`AggregateError`](Promise.AggregateError.md)) => `boolean` |
| `thisArg?` | `any` |

#### Returns

`boolean`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1016

___

### sort

▸ **sort**(`compareFunction?`): [`AggregateError`](Promise.AggregateError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `compareFunction?` | (`errLeft`: `Error`, `errRight`: `Error`) => `number` |

#### Returns

[`AggregateError`](Promise.AggregateError.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1023

___

### unshift

▸ **unshift**(...`errors`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...errors` | `Error`[] |

#### Returns

`number`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1012

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/globals.d.ts:4
