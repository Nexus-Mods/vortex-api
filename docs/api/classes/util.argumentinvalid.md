[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / ArgumentInvalid

# Class: ArgumentInvalid

[util](../modules/util.md).ArgumentInvalid

## Hierarchy

* *Error*

  ↳ **ArgumentInvalid**

## Table of contents

### Constructors

- [constructor](util.argumentinvalid.md#constructor)

### Properties

- [message](util.argumentinvalid.md#message)
- [name](util.argumentinvalid.md#name)
- [prepareStackTrace](util.argumentinvalid.md#preparestacktrace)
- [stack](util.argumentinvalid.md#stack)
- [stackTraceLimit](util.argumentinvalid.md#stacktracelimit)

### Methods

- [captureStackTrace](util.argumentinvalid.md#capturestacktrace)

## Constructors

### constructor

\+ **new ArgumentInvalid**(`argument`: *string*): [*ArgumentInvalid*](util.argumentinvalid.md)

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | *string* |

**Returns:** [*ArgumentInvalid*](util.argumentinvalid.md)

Defined in: src/util/CustomErrors.ts:60

## Properties

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
