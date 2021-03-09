[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / SetupError

# Class: SetupError

[util](../modules/util.md).SetupError

## Hierarchy

* *Error*

  ↳ **SetupError**

## Table of contents

### Constructors

- [constructor](util.setuperror.md#constructor)

### Properties

- [message](util.setuperror.md#message)
- [name](util.setuperror.md#name)
- [prepareStackTrace](util.setuperror.md#preparestacktrace)
- [stack](util.setuperror.md#stack)
- [stackTraceLimit](util.setuperror.md#stacktracelimit)

### Methods

- [captureStackTrace](util.setuperror.md#capturestacktrace)

## Constructors

### constructor

\+ **new SetupError**(`message`: *string*): [*SetupError*](util.setuperror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** [*SetupError*](util.setuperror.md)

Defined in: src/util/CustomErrors.ts:110

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
