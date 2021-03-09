[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / Debouncer

# Class: Debouncer

[util](../modules/util.md).Debouncer

management function. Prevents a function from being called too often
and, for function returning a promise, it ensures that it's not run
again (through this Debouncer) before the promise is resolved.

## Table of contents

### Constructors

- [constructor](util.debouncer.md#constructor)

### Properties

- [mAddCallbacks](util.debouncer.md#maddcallbacks)
- [mArgs](util.debouncer.md#margs)
- [mCallbacks](util.debouncer.md#mcallbacks)
- [mDebounceMS](util.debouncer.md#mdebouncems)
- [mFunc](util.debouncer.md#mfunc)
- [mReschedule](util.debouncer.md#mreschedule)
- [mResetting](util.debouncer.md#mresetting)
- [mRetrigger](util.debouncer.md#mretrigger)
- [mRunning](util.debouncer.md#mrunning)
- [mTimer](util.debouncer.md#mtimer)
- [mTriggerImmediately](util.debouncer.md#mtriggerimmediately)

### Methods

- [clear](util.debouncer.md#clear)
- [invokeCallbacks](util.debouncer.md#invokecallbacks)
- [reschedule](util.debouncer.md#reschedule)
- [run](util.debouncer.md#run)
- [runNow](util.debouncer.md#runnow)
- [schedule](util.debouncer.md#schedule)
- [startTimer](util.debouncer.md#starttimer)
- [wait](util.debouncer.md#wait)

## Constructors

### constructor

\+ **new Debouncer**(`func`: (...`args`: *any*[]) => *PromiseLike*<void\> \| Error, `debounceMS`: *number*, `reset?`: *boolean*, `triggerImmediately?`: *boolean*): [*Debouncer*](util.debouncer.md)

constructor

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`func` | (...`args`: *any*[]) => *PromiseLike*<void\> \| Error | - | the function to call when the timer expired   |
`debounceMS` | *number* | - | the (minimum) time between two calls   |
`reset?` | *boolean* | - | if true (the default) the time is reset with every              time schedule gets called. This means if the debouncer              is triggered regularly in less than debounceMS it never              gets run.   |
`triggerImmediately` | *boolean* | false | if true, the debouncer will trigger immediately                           when first called and then not be called again                           until the timer expires. Otherwise (the default)                           the initial call is delay.    |

**Returns:** [*Debouncer*](util.debouncer.md)

Defined in: src/util/Debouncer.ts:25

## Properties

### mAddCallbacks

• `Private` **mAddCallbacks**: Callback[]

Defined in: src/util/Debouncer.ts:18

___

### mArgs

• `Private` **mArgs**: *any*[]

Defined in: src/util/Debouncer.ts:21

___

### mCallbacks

• `Private` **mCallbacks**: Callback[]

Defined in: src/util/Debouncer.ts:17

___

### mDebounceMS

• `Private` **mDebounceMS**: *number*

Defined in: src/util/Debouncer.ts:13

___

### mFunc

• `Private` **mFunc**: (...`args`: *any*[]) => *PromiseLike*<void\> \| Error

#### Type declaration:

▸ (...`args`: *any*[]): *PromiseLike*<void\> \| Error

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** *PromiseLike*<void\> \| Error

Defined in: src/util/Debouncer.ts:14

Defined in: src/util/Debouncer.ts:14

___

### mReschedule

• `Private` **mReschedule**: *yes* \| *no* \| *immediately*= 'no'

Defined in: src/util/Debouncer.ts:20

___

### mResetting

• `Private` **mResetting**: *boolean*

Defined in: src/util/Debouncer.ts:22

___

### mRetrigger

• `Private` **mRetrigger**: *boolean*= false

Defined in: src/util/Debouncer.ts:25

___

### mRunning

• `Private` **mRunning**: *boolean*= false

Defined in: src/util/Debouncer.ts:19

___

### mTimer

• `Private` **mTimer**: *Timer*

Defined in: src/util/Debouncer.ts:15

___

### mTriggerImmediately

• `Private` **mTriggerImmediately**: *boolean*

Defined in: src/util/Debouncer.ts:23

## Methods

### clear

▸ **clear**(): *void*

**Returns:** *void*

Defined in: src/util/Debouncer.ts:140

___

### invokeCallbacks

▸ `Private`**invokeCallbacks**(`localCallbacks`: Callback[], `err`: Error): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`localCallbacks` | Callback[] |
`err` | Error |

**Returns:** *void*

Defined in: src/util/Debouncer.ts:193

___

### reschedule

▸ `Private`**reschedule**(): *void*

**Returns:** *void*

Defined in: src/util/Debouncer.ts:183

___

### run

▸ `Private`**run**(): *void*

**Returns:** *void*

Defined in: src/util/Debouncer.ts:145

___

### runNow

▸ **runNow**(`callback`: (`err`: Error) => *void*, ...`args`: *any*[]): *void*

run the function immediately without waiting for the timer
to run out. (It does cancel the timer though and invokes all
scheduled callbacks)

**`memberof`** Debouncer

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`err`: Error) => *void* |
`...args` | *any*[] |

**Returns:** *void*

Defined in: src/util/Debouncer.ts:95

___

### schedule

▸ **schedule**(`callback?`: (`err`: Error) => *void*, ...`args`: *any*[]): *void*

schedule the function and invoke the callback once that is done

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callback?` | (`err`: Error) => *void* | the callback to invoke upon completion   |
`...args` | *any*[] | the arguments to pass to the function. When the timer expires             and the function actually gets invoked, only the last set of             parameters will be used    |

**Returns:** *void*

Defined in: src/util/Debouncer.ts:57

___

### startTimer

▸ `Private`**startTimer**(): *void*

**Returns:** *void*

Defined in: src/util/Debouncer.ts:199

___

### wait

▸ **wait**(`callback`: (`err`: Error) => *void*, `immediately?`: *boolean*): *void*

wait for the completion of the current timer without scheduling it.
if the function is not scheduled currently the callback will be
called (as a success) immediately.
This does not reset the timer

**`memberof`** Debouncer

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`callback` | (`err`: Error) => *void* | - |  |
`immediately` | *boolean* | false | if set (default is false) the function gets called                              immediately instead of awaiting the timer    |

**Returns:** *void*

Defined in: src/util/Debouncer.ts:125
