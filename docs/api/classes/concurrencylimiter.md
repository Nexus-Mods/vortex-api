**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ConcurrencyLimiter

# Class: ConcurrencyLimiter

helper class to limit concurrency with asynchronous functions.

## Hierarchy

* **ConcurrencyLimiter**

## Index

### Constructors

* [constructor](concurrencylimiter.md#constructor)

### Properties

* [mEndOfQueue](concurrencylimiter.md#mendofqueue)
* [mLimit](concurrencylimiter.md#mlimit)
* [mNext](concurrencylimiter.md#mnext)
* [mRepeatTest](concurrencylimiter.md#mrepeattest)

### Methods

* [do](concurrencylimiter.md#do)
* [doImpl](concurrencylimiter.md#doimpl)
* [enqueue](concurrencylimiter.md#enqueue)
* [process](concurrencylimiter.md#process)

## Constructors

### constructor

\+ **new ConcurrencyLimiter**(`limit`: number, `repeatTest?`: (err: [Error](notsupportederror.md#error)) => boolean): [ConcurrencyLimiter](concurrencylimiter.md)

*Defined in Work/vortex/src/util/ConcurrencyLimiter.ts:12*

Constructor

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`limit` | number | number of operations enqueued with do() that will happen concurrently |
`repeatTest?` | (err: [Error](notsupportederror.md#error)) => boolean | if set, this function is called when an error happens and it can                   decide if the operation should be retried.                   This is purely a convenience feature but usually if you want to limit                   concurrency it's because you're worried that some resource will run out                   and it's not usually possible to know in advance how many operations                   exactly can happen in parallel so you will usually still want to                   handle errors that indicate the resource running out separately  |

**Returns:** [ConcurrencyLimiter](concurrencylimiter.md)

## Properties

### mEndOfQueue

• `Private` **mEndOfQueue**: Promise\<void>

*Defined in Work/vortex/src/util/ConcurrencyLimiter.ts:11*

___

### mLimit

• `Private` **mLimit**: number

*Defined in Work/vortex/src/util/ConcurrencyLimiter.ts:9*

___

### mNext

• `Private` **mNext**: () => any

*Defined in Work/vortex/src/util/ConcurrencyLimiter.ts:10*

___

### mRepeatTest

• `Private` **mRepeatTest**: (err: [Error](notsupportederror.md#error)) => boolean

*Defined in Work/vortex/src/util/ConcurrencyLimiter.ts:12*

## Methods

### do

▸ **do**\<T>(`cb`: () => Promise\<T>): Promise\<T>

*Defined in Work/vortex/src/util/ConcurrencyLimiter.ts:31*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`cb` | () => Promise\<T> |

**Returns:** Promise\<T>

___

### doImpl

▸ `Private`**doImpl**\<T>(`cb`: () => Promise\<T>, `tries`: number): Promise\<T>

*Defined in Work/vortex/src/util/ConcurrencyLimiter.ts:35*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`cb` | () => Promise\<T> |
`tries` | number |

**Returns:** Promise\<T>

___

### enqueue

▸ `Private`**enqueue**\<T>(`cb`: () => Promise\<T>, `tries`: number): Promise\<T>

*Defined in Work/vortex/src/util/ConcurrencyLimiter.ts:66*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`cb` | () => Promise\<T> |
`tries` | number |

**Returns:** Promise\<T>

___

### process

▸ `Private`**process**\<T>(`cb`: () => Promise\<T>, `tries`: number): Promise\<T>

*Defined in Work/vortex/src/util/ConcurrencyLimiter.ts:42*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`cb` | () => Promise\<T> |
`tries` | number |

**Returns:** Promise\<T>
