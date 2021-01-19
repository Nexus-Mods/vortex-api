**[vortex_devel](../README.md)**

> [Globals](../globals.md) / Progress

# Class: Progress

tracks progress. This has been designed to handle subtasks

## Hierarchy

* **Progress**

## Index

### Constructors

* [constructor](progress.md#constructor)

### Properties

* [mBaseValue](progress.md#mbasevalue)
* [mCallback](progress.md#mcallback)
* [mDepth](progress.md#mdepth)
* [mIdx](progress.md#midx)
* [mLastProgress](progress.md#mlastprogress)
* [mLastProgressTime](progress.md#mlastprogresstime)
* [mMagnitude](progress.md#mmagnitude)
* [mStepCount](progress.md#mstepcount)
* [mStepsCompleted](progress.md#mstepscompleted)

### Methods

* [completed](progress.md#completed)
* [currentProgress](progress.md#currentprogress)
* [derive](progress.md#derive)
* [setStepCount](progress.md#setstepcount)

## Constructors

### constructor

\+ **new Progress**(`baseValue`: number, `magnitude`: number, `callback`: (percent: number, label: string) => void, `depth?`: number): [Progress](progress.md)

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:16*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`baseValue` | number | - |
`magnitude` | number | - |
`callback` | (percent: number, label: string) => void | - |
`depth` | number | 0 |

**Returns:** [Progress](progress.md)

## Properties

### mBaseValue

• `Private` **mBaseValue**: number

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:11*

___

### mCallback

• `Private` **mCallback**: (percent: number, label: string) => void

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:12*

___

### mDepth

• `Private` **mDepth**: number

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:13*

___

### mIdx

• `Private` **mIdx**: number

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:14*

___

### mLastProgress

• `Private` **mLastProgress**: number = 0

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:15*

___

### mLastProgressTime

• `Private` **mLastProgressTime**: number = Date.now()

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:16*

___

### mMagnitude

• `Private` **mMagnitude**: number

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:8*

___

### mStepCount

• `Private` **mStepCount**: number

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:9*

___

### mStepsCompleted

• `Private` **mStepsCompleted**: number

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:10*

## Methods

### completed

▸ **completed**(`label`: string, `steps?`: number): void

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:49*

called whenever one step of the task is finished. label
should be a text giving the user a hint of what's currently going on
but please do not rely on this text being readable, depending on the theme
it may not be as long as the progress is very low

**`memberof`** Progress

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`label` | string | - |   |
`steps` | number | 1 | - |

**Returns:** void

___

### currentProgress

▸ `Private`**currentProgress**(): number

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:74*

**Returns:** number

___

### derive

▸ **derive**(): [Progress](progress.md)

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:66*

create a new progress bar that covers only the width of the current step
within this Progress.

**`memberof`** Progress

**Returns:** [Progress](progress.md)

___

### setStepCount

▸ **setStepCount**(`count`: number): void

*Defined in Work/vortex/src/extensions/gamemode_management/util/Progress.ts:35*

set the number of steps the progress bar has (that is: the number of
times 'completed' will be called before this progress is finished)

**`memberof`** Progress

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`count` | number |   |

**Returns:** void
