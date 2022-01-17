[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / ConcurrencyLimiter

# Class: ConcurrencyLimiter

[util](../modules/util.md).ConcurrencyLimiter

helper class to limit concurrency with asynchronous functions.

## Table of contents

### Constructors

- [constructor](util.ConcurrencyLimiter.md#constructor)

### Properties

- [mEndOfQueue](util.ConcurrencyLimiter.md#mendofqueue)
- [mLimit](util.ConcurrencyLimiter.md#mlimit)
- [mNext](util.ConcurrencyLimiter.md#mnext)
- [mRepeatTest](util.ConcurrencyLimiter.md#mrepeattest)

### Methods

- [do](util.ConcurrencyLimiter.md#do)
- [doImpl](util.ConcurrencyLimiter.md#doimpl)
- [enqueue](util.ConcurrencyLimiter.md#enqueue)
- [process](util.ConcurrencyLimiter.md#process)

## Constructors

### constructor

• **new ConcurrencyLimiter**(`limit`, `repeatTest?`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | number of operations enqueued with do() that will happen concurrently |
| `repeatTest?` | (`err`: `Error`) => `boolean` | if set, this function is called when an error happens and it can                   decide if the operation should be retried.                   This is purely a convenience feature but usually if you want to limit                   concurrency it's because you're worried that some resource will run out                   and it's not usually possible to know in advance how many operations                   exactly can happen in parallel so you will usually still want to                   handle errors that indicate the resource running out separately |

#### Defined in

../src/util/ConcurrencyLimiter.ts:25

## Properties

### mEndOfQueue

• `Private` **mEndOfQueue**: `Promise`<`void`\>

#### Defined in

../src/util/ConcurrencyLimiter.ts:11

___

### mLimit

• `Private` **mLimit**: `number`

#### Defined in

../src/util/ConcurrencyLimiter.ts:9

___

### mNext

• `Private` **mNext**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

#### Defined in

../src/util/ConcurrencyLimiter.ts:10

___

### mRepeatTest

• `Private` **mRepeatTest**: (`err`: `Error`) => `boolean`

#### Type declaration

▸ (`err`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

##### Returns

`boolean`

#### Defined in

../src/util/ConcurrencyLimiter.ts:12

## Methods

### do

▸ **do**<`T`\>(`cb`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `PromiseLike`<`T`\> |

#### Returns

`Promise`<`T`\>

#### Defined in

../src/util/ConcurrencyLimiter.ts:31

___

### doImpl

▸ `Private` **doImpl**<`T`\>(`cb`, `tries`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `PromiseLike`<`T`\> |
| `tries` | `number` |

#### Returns

`Promise`<`T`\>

#### Defined in

../src/util/ConcurrencyLimiter.ts:35

___

### enqueue

▸ `Private` **enqueue**<`T`\>(`cb`, `tries`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `PromiseLike`<`T`\> |
| `tries` | `number` |

#### Returns

`Promise`<`T`\>

#### Defined in

../src/util/ConcurrencyLimiter.ts:66

___

### process

▸ `Private` **process**<`T`\>(`cb`, `tries`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `PromiseLike`<`T`\> |
| `tries` | `number` |

#### Returns

`Promise`<`T`\>

#### Defined in

../src/util/ConcurrencyLimiter.ts:42
