[vortex_devel](../README.md) / [Exports](../modules.md) / [Promise](../modules/promise.md) / TimeoutError

# Class: TimeoutError

[Promise](../modules/promise.md).TimeoutError

Signals that an operation has timed out. Used as a custom cancellation reason in `.timeout`.

## Hierarchy

* *Error*

  ↳ **TimeoutError**

## Table of contents

### Constructors

- [constructor](promise.timeouterror.md#constructor)

### Properties

- [message](promise.timeouterror.md#message)
- [name](promise.timeouterror.md#name)
- [prepareStackTrace](promise.timeouterror.md#preparestacktrace)
- [stack](promise.timeouterror.md#stack)
- [stackTraceLimit](promise.timeouterror.md#stacktracelimit)

### Methods

- [captureStackTrace](promise.timeouterror.md#capturestacktrace)

## Constructors

### constructor

\+ **new TimeoutError**(`message?`: *string*): [*TimeoutError*](promise.timeouterror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message?` | *string* |

**Returns:** [*TimeoutError*](promise.timeouterror.md)

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
