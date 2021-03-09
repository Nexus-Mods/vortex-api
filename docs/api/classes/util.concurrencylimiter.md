[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / ConcurrencyLimiter

# Class: ConcurrencyLimiter

[util](../modules/util.md).ConcurrencyLimiter

helper class to limit concurrency with asynchronous functions.

## Table of contents

### Constructors

- [constructor](util.concurrencylimiter.md#constructor)

### Properties

- [mEndOfQueue](util.concurrencylimiter.md#mendofqueue)
- [mLimit](util.concurrencylimiter.md#mlimit)
- [mNext](util.concurrencylimiter.md#mnext)
- [mRepeatTest](util.concurrencylimiter.md#mrepeattest)

### Methods

- [do](util.concurrencylimiter.md#do)
- [doImpl](util.concurrencylimiter.md#doimpl)
- [enqueue](util.concurrencylimiter.md#enqueue)
- [process](util.concurrencylimiter.md#process)

## Constructors

### constructor

\+ **new ConcurrencyLimiter**(`limit`: *number*, `repeatTest?`: (`err`: Error) => *boolean*): [*ConcurrencyLimiter*](util.concurrencylimiter.md)

Constructor

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`limit` | *number* | number of operations enqueued with do() that will happen concurrently   |
`repeatTest?` | (`err`: Error) => *boolean* | if set, this function is called when an error happens and it can                   decide if the operation should be retried.                   This is purely a convenience feature but usually if you want to limit                   concurrency it's because you're worried that some resource will run out                   and it's not usually possible to know in advance how many operations                   exactly can happen in parallel so you will usually still want to                   handle errors that indicate the resource running out separately    |

**Returns:** [*ConcurrencyLimiter*](util.concurrencylimiter.md)

Defined in: src/util/ConcurrencyLimiter.ts:12

## Properties

### mEndOfQueue

• `Private` **mEndOfQueue**: *Promise*<void\>

Defined in: src/util/ConcurrencyLimiter.ts:11

___

### mLimit

• `Private` **mLimit**: *number*

Defined in: src/util/ConcurrencyLimiter.ts:9

___

### mNext

• `Private` **mNext**: () => *any*

#### Type declaration:

▸ (): *any*

**Returns:** *any*

Defined in: src/util/ConcurrencyLimiter.ts:10

Defined in: src/util/ConcurrencyLimiter.ts:10

___

### mRepeatTest

• `Private` **mRepeatTest**: (`err`: Error) => *boolean*

#### Type declaration:

▸ (`err`: Error): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | Error |

**Returns:** *boolean*

Defined in: src/util/ConcurrencyLimiter.ts:12

Defined in: src/util/ConcurrencyLimiter.ts:12

## Methods

### do

▸ **do**<T\>(`cb`: () => *Promise*<T\>): *Promise*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`cb` | () => *Promise*<T\> |

**Returns:** *Promise*<T\>

Defined in: src/util/ConcurrencyLimiter.ts:31

___

### doImpl

▸ `Private`**doImpl**<T\>(`cb`: () => *Promise*<T\>, `tries`: *number*): *Promise*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`cb` | () => *Promise*<T\> |
`tries` | *number* |

**Returns:** *Promise*<T\>

Defined in: src/util/ConcurrencyLimiter.ts:35

___

### enqueue

▸ `Private`**enqueue**<T\>(`cb`: () => *Promise*<T\>, `tries`: *number*): *Promise*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`cb` | () => *Promise*<T\> |
`tries` | *number* |

**Returns:** *Promise*<T\>

Defined in: src/util/ConcurrencyLimiter.ts:66

___

### process

▸ `Private`**process**<T\>(`cb`: () => *Promise*<T\>, `tries`: *number*): *Promise*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`cb` | () => *Promise*<T\> |
`tries` | *number* |

**Returns:** *Promise*<T\>

Defined in: src/util/ConcurrencyLimiter.ts:42
