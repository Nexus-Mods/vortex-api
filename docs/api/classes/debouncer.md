**[vortex_devel](../README.md)**

> [Globals](../globals.md) / Debouncer

# Class: Debouncer

management function. Prevents a function from being called too often
and, for function returning a promise, it ensures that it's not run
again (through this Debouncer) before the promise is resolved.

## Hierarchy

* **Debouncer**

## Index

### Constructors

* [constructor](debouncer.md#constructor)

### Properties

* [mAddCallbacks](debouncer.md#maddcallbacks)
* [mArgs](debouncer.md#margs)
* [mCallbacks](debouncer.md#mcallbacks)
* [mDebounceMS](debouncer.md#mdebouncems)
* [mFunc](debouncer.md#mfunc)
* [mReschedule](debouncer.md#mreschedule)
* [mResetting](debouncer.md#mresetting)
* [mRetrigger](debouncer.md#mretrigger)
* [mRunning](debouncer.md#mrunning)
* [mTimer](debouncer.md#mtimer)
* [mTriggerImmediately](debouncer.md#mtriggerimmediately)

### Methods

* [clear](debouncer.md#clear)
* [invokeCallbacks](debouncer.md#invokecallbacks)
* [reschedule](debouncer.md#reschedule)
* [run](debouncer.md#run)
* [runNow](debouncer.md#runnow)
* [schedule](debouncer.md#schedule)
* [startTimer](debouncer.md#starttimer)
* [wait](debouncer.md#wait)

## Constructors

### constructor

\+ **new Debouncer**(`func`: (...args: any[]) => [Error](notsupportederror.md#error) \| Promise\<void>, `debounceMS`: number, `reset?`: boolean, `triggerImmediately?`: boolean): [Debouncer](debouncer.md)

*Defined in Work/vortex/src/util/Debouncer.ts:25*

constructor

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`func` | (...args: any[]) => [Error](notsupportederror.md#error) \| Promise\<void> | - | the function to call when the timer expired |
`debounceMS` | number | - | the (minimum) time between two calls |
`reset?` | boolean | - | if true (the default) the time is reset with every              time schedule gets called. This means if the debouncer              is triggered regularly in less than debounceMS it never              gets run. |
`triggerImmediately` | boolean | false | if true, the debouncer will trigger immediately                           when first called and then not be called again                           until the timer expires. Otherwise (the default)                           the initial call is delay.  |

**Returns:** [Debouncer](debouncer.md)

## Properties

### mAddCallbacks

• `Private` **mAddCallbacks**: [Callback](../globals.md#callback)[] = []

*Defined in Work/vortex/src/util/Debouncer.ts:18*

___

### mArgs

• `Private` **mArgs**: any[] = []

*Defined in Work/vortex/src/util/Debouncer.ts:21*

___

### mCallbacks

• `Private` **mCallbacks**: [Callback](../globals.md#callback)[] = []

*Defined in Work/vortex/src/util/Debouncer.ts:17*

___

### mDebounceMS

• `Private` **mDebounceMS**: number

*Defined in Work/vortex/src/util/Debouncer.ts:13*

___

### mFunc

• `Private` **mFunc**: (...args: any[]) => [Error](notsupportederror.md#error) \| Promise\<void>

*Defined in Work/vortex/src/util/Debouncer.ts:14*

___

### mReschedule

• `Private` **mReschedule**: \"no\" \| \"yes\" \| \"immediately\" = "no"

*Defined in Work/vortex/src/util/Debouncer.ts:20*

___

### mResetting

• `Private` **mResetting**: boolean

*Defined in Work/vortex/src/util/Debouncer.ts:22*

___

### mRetrigger

• `Private` **mRetrigger**: boolean = false

*Defined in Work/vortex/src/util/Debouncer.ts:25*

___

### mRunning

• `Private` **mRunning**: boolean = false

*Defined in Work/vortex/src/util/Debouncer.ts:19*

___

### mTimer

• `Private` **mTimer**: Timer

*Defined in Work/vortex/src/util/Debouncer.ts:15*

___

### mTriggerImmediately

• `Private` **mTriggerImmediately**: boolean

*Defined in Work/vortex/src/util/Debouncer.ts:23*

## Methods

### clear

▸ **clear**(): void

*Defined in Work/vortex/src/util/Debouncer.ts:140*

**Returns:** void

___

### invokeCallbacks

▸ `Private`**invokeCallbacks**(`localCallbacks`: [Callback](../globals.md#callback)[], `err`: [Error](notsupportederror.md#error)): void

*Defined in Work/vortex/src/util/Debouncer.ts:193*

#### Parameters:

Name | Type |
------ | ------ |
`localCallbacks` | [Callback](../globals.md#callback)[] |
`err` | [Error](notsupportederror.md#error) |

**Returns:** void

___

### reschedule

▸ `Private`**reschedule**(): void

*Defined in Work/vortex/src/util/Debouncer.ts:183*

**Returns:** void

___

### run

▸ `Private`**run**(): void

*Defined in Work/vortex/src/util/Debouncer.ts:145*

**Returns:** void

___

### runNow

▸ **runNow**(`callback`: (err: [Error](notsupportederror.md#error)) => void, ...`args`: any[]): void

*Defined in Work/vortex/src/util/Debouncer.ts:95*

run the function immediately without waiting for the timer
to run out. (It does cancel the timer though and invokes all
scheduled callbacks)

**`memberof`** Debouncer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | (err: [Error](notsupportederror.md#error)) => void |  |
`...args` | any[] |   |

**Returns:** void

___

### schedule

▸ **schedule**(`callback?`: (err: [Error](notsupportederror.md#error)) => void, ...`args`: any[]): void

*Defined in Work/vortex/src/util/Debouncer.ts:57*

schedule the function and invoke the callback once that is done

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback?` | (err: [Error](notsupportederror.md#error)) => void | the callback to invoke upon completion |
`...args` | any[] | the arguments to pass to the function. When the timer expires             and the function actually gets invoked, only the last set of             parameters will be used  |

**Returns:** void

___

### startTimer

▸ `Private`**startTimer**(): void

*Defined in Work/vortex/src/util/Debouncer.ts:199*

**Returns:** void

___

### wait

▸ **wait**(`callback`: (err: [Error](notsupportederror.md#error)) => void, `immediately?`: boolean): void

*Defined in Work/vortex/src/util/Debouncer.ts:125*

wait for the completion of the current timer without scheduling it.
if the function is not scheduled currently the callback will be
called (as a success) immediately.
This does not reset the timer

**`memberof`** Debouncer

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (err: [Error](notsupportederror.md#error)) => void | - |  |
`immediately` | boolean | false | if set (default is false) the function gets called                              immediately instead of awaiting the timer  |

**Returns:** void
