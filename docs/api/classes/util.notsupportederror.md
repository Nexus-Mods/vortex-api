[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / NotSupportedError

# Class: NotSupportedError

[util](../modules/util.md).NotSupportedError

## Hierarchy

* *Error*

  ↳ **NotSupportedError**

## Table of contents

### Constructors

- [constructor](util.notsupportederror.md#constructor)

### Properties

- [message](util.notsupportederror.md#message)
- [name](util.notsupportederror.md#name)
- [prepareStackTrace](util.notsupportederror.md#preparestacktrace)
- [stack](util.notsupportederror.md#stack)
- [stackTraceLimit](util.notsupportederror.md#stacktracelimit)

### Methods

- [captureStackTrace](util.notsupportederror.md#capturestacktrace)

## Constructors

### constructor

\+ **new NotSupportedError**(): [*NotSupportedError*](util.notsupportederror.md)

**Returns:** [*NotSupportedError*](util.notsupportederror.md)

Defined in: src/util/CustomErrors.ts:3

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
