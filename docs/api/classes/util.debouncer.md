[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / Debouncer

# Class: Debouncer

[util](../modules/util.md).Debouncer

management function. Prevents a function from being called too often
and, for function returning a promise, it ensures that it's not run
again (through this Debouncer) before the promise is resolved.

## Table of contents

### Constructors

- [constructor](util.Debouncer.md#constructor)

### Properties

- [mAddCallbacks](util.Debouncer.md#maddcallbacks)
- [mArgs](util.Debouncer.md#margs)
- [mCallbacks](util.Debouncer.md#mcallbacks)
- [mDebounceMS](util.Debouncer.md#mdebouncems)
- [mFunc](util.Debouncer.md#mfunc)
- [mReschedule](util.Debouncer.md#mreschedule)
- [mResetting](util.Debouncer.md#mresetting)
- [mRetrigger](util.Debouncer.md#mretrigger)
- [mRunning](util.Debouncer.md#mrunning)
- [mTimer](util.Debouncer.md#mtimer)
- [mTriggerImmediately](util.Debouncer.md#mtriggerimmediately)

### Methods

- [clear](util.Debouncer.md#clear)
- [invokeCallbacks](util.Debouncer.md#invokecallbacks)
- [reschedule](util.Debouncer.md#reschedule)
- [run](util.Debouncer.md#run)
- [runNow](util.Debouncer.md#runnow)
- [schedule](util.Debouncer.md#schedule)
- [startTimer](util.Debouncer.md#starttimer)
- [wait](util.Debouncer.md#wait)

## Constructors

### constructor

• **new Debouncer**(`func`, `debounceMS`, `reset?`, `triggerImmediately?`)

constructor

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `func` | (...`args`: `any`[]) => `PromiseLike`<`void`\> \| `Error` | `undefined` | the function to call when the timer expired |
| `debounceMS` | `number` | `undefined` | the (minimum) time between two calls |
| `reset?` | `boolean` | `undefined` | if true (the default) the time is reset with every              time schedule gets called. This means if the debouncer              is triggered regularly in less than debounceMS it never              gets run. |
| `triggerImmediately` | `boolean` | `false` | if true, the debouncer will trigger immediately                           when first called and then not be called again                           until the timer expires. Otherwise (the default)                           the initial call is delay. |

#### Defined in

../src/util/Debouncer.ts:40

## Properties

### mAddCallbacks

• `Private` **mAddCallbacks**: `Callback`[] = `[]`

#### Defined in

../src/util/Debouncer.ts:18

___

### mArgs

• `Private` **mArgs**: `any`[] = `[]`

#### Defined in

../src/util/Debouncer.ts:21

___

### mCallbacks

• `Private` **mCallbacks**: `Callback`[] = `[]`

#### Defined in

../src/util/Debouncer.ts:17

___

### mDebounceMS

• `Private` **mDebounceMS**: `number`

#### Defined in

../src/util/Debouncer.ts:13

___

### mFunc

• `Private` **mFunc**: (...`args`: `any`[]) => `PromiseLike`<`void`\> \| `Error`

#### Type declaration

▸ (...`args`): `PromiseLike`<`void`\> \| `Error`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`PromiseLike`<`void`\> \| `Error`

#### Defined in

../src/util/Debouncer.ts:14

___

### mReschedule

• `Private` **mReschedule**: ``"yes"`` \| ``"no"`` \| ``"immediately"`` = `'no'`

#### Defined in

../src/util/Debouncer.ts:20

___

### mResetting

• `Private` **mResetting**: `boolean`

#### Defined in

../src/util/Debouncer.ts:22

___

### mRetrigger

• `Private` **mRetrigger**: `boolean` = `false`

#### Defined in

../src/util/Debouncer.ts:25

___

### mRunning

• `Private` **mRunning**: `boolean` = `false`

#### Defined in

../src/util/Debouncer.ts:19

___

### mTimer

• `Private` **mTimer**: `Timer`

#### Defined in

../src/util/Debouncer.ts:15

___

### mTriggerImmediately

• `Private` **mTriggerImmediately**: `boolean`

#### Defined in

../src/util/Debouncer.ts:23

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

../src/util/Debouncer.ts:140

___

### invokeCallbacks

▸ `Private` **invokeCallbacks**(`localCallbacks`, `err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `localCallbacks` | `Callback`[] |
| `err` | `Error` |

#### Returns

`void`

#### Defined in

../src/util/Debouncer.ts:193

___

### reschedule

▸ `Private` **reschedule**(): `void`

#### Returns

`void`

#### Defined in

../src/util/Debouncer.ts:183

___

### run

▸ `Private` **run**(): `void`

#### Returns

`void`

#### Defined in

../src/util/Debouncer.ts:145

___

### runNow

▸ **runNow**(`callback`, ...`args`): `void`

run the function immediately without waiting for the timer
to run out. (It does cancel the timer though and invokes all
scheduled callbacks)

**`memberof`** Debouncer

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: `Error`) => `void` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

../src/util/Debouncer.ts:95

___

### schedule

▸ **schedule**(`callback?`, ...`args`): `void`

schedule the function and invoke the callback once that is done

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | (`err`: `Error`) => `void` | the callback to invoke upon completion |
| `...args` | `any`[] | the arguments to pass to the function. When the timer expires             and the function actually gets invoked, only the last set of             parameters will be used |

#### Returns

`void`

#### Defined in

../src/util/Debouncer.ts:57

___

### startTimer

▸ `Private` **startTimer**(): `void`

#### Returns

`void`

#### Defined in

../src/util/Debouncer.ts:199

___

### wait

▸ **wait**(`callback`, `immediately?`): `void`

wait for the completion of the current timer without scheduling it.
if the function is not scheduled currently the callback will be
called (as a success) immediately.
This does not reset the timer

**`memberof`** Debouncer

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `callback` | (`err`: `Error`) => `void` | `undefined` |  |
| `immediately` | `boolean` | `false` | if set (default is false) the function gets called                              immediately instead of awaiting the timer |

#### Returns

`void`

#### Defined in

../src/util/Debouncer.ts:125
