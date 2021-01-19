**[vortex_devel](../README.md)**

> [Globals](../globals.md) / SpeedCalculator

# Class: SpeedCalculator

calculates a moving average of the download speed (total and
per counter)

## Hierarchy

* **SpeedCalculator**

## Index

### Constructors

* [constructor](speedcalculator.md#constructor)

### Properties

* [mCounters](speedcalculator.md#mcounters)
* [mHorizon](speedcalculator.md#mhorizon)
* [mMeasureTime](speedcalculator.md#mmeasuretime)
* [mTargetRate](speedcalculator.md#mtargetrate)
* [mTimeSlices](speedcalculator.md#mtimeslices)

### Methods

* [addMeasure](speedcalculator.md#addmeasure)
* [initCounter](speedcalculator.md#initcounter)
* [moveHorizon](speedcalculator.md#movehorizon)
* [now](speedcalculator.md#now)
* [stopCounter](speedcalculator.md#stopcounter)

## Constructors

### constructor

\+ **new SpeedCalculator**(`horizon`: number, `speedCB`: (speed: number) => void): [SpeedCalculator](speedcalculator.md)

*Defined in Work/vortex/src/extensions/download_management/SpeedCalculator.ts:19*

#### Parameters:

Name | Type |
------ | ------ |
`horizon` | number |
`speedCB` | (speed: number) => void |

**Returns:** [SpeedCalculator](speedcalculator.md)

## Properties

### mCounters

• `Private` **mCounters**: { [id:number]: [ISpeedEntry](../interfaces/ispeedentry.md);  }

*Defined in Work/vortex/src/extensions/download_management/SpeedCalculator.ts:15*

___

### mHorizon

• `Private` **mHorizon**: number

*Defined in Work/vortex/src/extensions/download_management/SpeedCalculator.ts:17*

___

### mMeasureTime

• `Private` **mMeasureTime**: number

*Defined in Work/vortex/src/extensions/download_management/SpeedCalculator.ts:18*

___

### mTargetRate

• `Private` **mTargetRate**: number = 0

*Defined in Work/vortex/src/extensions/download_management/SpeedCalculator.ts:19*

___

### mTimeSlices

• `Private` **mTimeSlices**: number[] = []

*Defined in Work/vortex/src/extensions/download_management/SpeedCalculator.ts:16*

## Methods

### addMeasure

▸ **addMeasure**(`id`: number, `count`: number): boolean

*Defined in Work/vortex/src/extensions/download_management/SpeedCalculator.ts:36*

#### Parameters:

Name | Type |
------ | ------ |
`id` | number |
`count` | number |

**Returns:** boolean

___

### initCounter

▸ **initCounter**(`id`: number): void

*Defined in Work/vortex/src/extensions/download_management/SpeedCalculator.ts:32*

#### Parameters:

Name | Type |
------ | ------ |
`id` | number |

**Returns:** void

___

### moveHorizon

▸ `Private`**moveHorizon**(): void

*Defined in Work/vortex/src/extensions/download_management/SpeedCalculator.ts:72*

**Returns:** void

___

### now

▸ `Private`**now**(): number

*Defined in Work/vortex/src/extensions/download_management/SpeedCalculator.ts:85*

**Returns:** number

___

### stopCounter

▸ **stopCounter**(`id`: number): void

*Defined in Work/vortex/src/extensions/download_management/SpeedCalculator.ts:68*

#### Parameters:

Name | Type |
------ | ------ |
`id` | number |

**Returns:** void
