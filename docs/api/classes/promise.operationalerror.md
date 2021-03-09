[vortex_devel](../README.md) / [Exports](../modules.md) / [Promise](../modules/promise.md) / OperationalError

# Class: OperationalError

[Promise](../modules/promise.md).OperationalError

Represents an error is an explicit promise rejection as opposed to a thrown error.
 For example, if an error is errbacked by a callback API promisified through undefined or undefined
 and is not a typed error, it will be converted to a `OperationalError` which has the original error in
 the `.cause` property.

`OperationalError`s are caught in `.error` handlers.

## Hierarchy

* *Error*

  ↳ **OperationalError**

## Table of contents

### Constructors

- [constructor](promise.operationalerror.md#constructor)

### Properties

- [message](promise.operationalerror.md#message)
- [name](promise.operationalerror.md#name)
- [stack](promise.operationalerror.md#stack)
- [prepareStackTrace](promise.operationalerror.md#preparestacktrace)
- [stackTraceLimit](promise.operationalerror.md#stacktracelimit)

### Methods

- [captureStackTrace](promise.operationalerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new OperationalError**(`message?`: *string*): [*OperationalError*](promise.operationalerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message?` | *string* |

**Returns:** [*OperationalError*](promise.operationalerror.md)

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

### stack

• `Optional` **stack**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Optional` `Static` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

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

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:142

## Methods

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: Object, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | Object |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:133
