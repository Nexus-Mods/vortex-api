[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / CycleError

# Class: CycleError

[util](../modules/util.md).CycleError

## Hierarchy

* *Error*

  ↳ **CycleError**

## Table of contents

### Constructors

- [constructor](util.cycleerror.md#constructor)

### Properties

- [mCycles](util.cycleerror.md#mcycles)
- [message](util.cycleerror.md#message)
- [name](util.cycleerror.md#name)
- [prepareStackTrace](util.cycleerror.md#preparestacktrace)
- [stack](util.cycleerror.md#stack)
- [stackTraceLimit](util.cycleerror.md#stacktracelimit)

### Accessors

- [cycles](util.cycleerror.md#cycles)

### Methods

- [captureStackTrace](util.cycleerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new CycleError**(`cycles`: *string*[][]): [*CycleError*](util.cycleerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`cycles` | *string*[][] |

**Returns:** [*CycleError*](util.cycleerror.md)

Defined in: src/extensions/mod_management/util/sort.ts:15

## Properties

### mCycles

• `Private` **mCycles**: *string*[][]

Defined in: src/extensions/mod_management/util/sort.ts:15

___

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### prepareStackTrace

• `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | Error |
`stackTraces` | CallSite[] |

**Returns:** *any*

Defined in: node_modules/@types/node/globals.d.ts:140

Defined in: node_modules/@types/node/globals.d.ts:140

___

### stack

• `Optional` **stack**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

• **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:142

## Accessors

### cycles

• get **cycles**(): *string*[][]

**Returns:** *string*[][]

Defined in: src/extensions/mod_management/util/sort.ts:21

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: Object, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | Object |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:133
