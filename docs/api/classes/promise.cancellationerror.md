[vortex_devel](../README.md) / [Exports](../modules.md) / [Promise](../modules/promise.md) / CancellationError

# Class: CancellationError

[Promise](../modules/promise.md).CancellationError

Signals that an operation has been aborted or cancelled. The default reason used by `.cancel`.

## Hierarchy

* *Error*

  ↳ **CancellationError**

## Table of contents

### Constructors

- [constructor](promise.cancellationerror.md#constructor)

### Properties

- [message](promise.cancellationerror.md#message)
- [name](promise.cancellationerror.md#name)
- [prepareStackTrace](promise.cancellationerror.md#preparestacktrace)
- [stack](promise.cancellationerror.md#stack)
- [stackTraceLimit](promise.cancellationerror.md#stacktracelimit)

### Methods

- [captureStackTrace](promise.cancellationerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new CancellationError**(`message?`: *string*): [*CancellationError*](promise.cancellationerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message?` | *string* |

**Returns:** [*CancellationError*](promise.cancellationerror.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:978

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
