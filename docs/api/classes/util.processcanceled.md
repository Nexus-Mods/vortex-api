[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / ProcessCanceled

# Class: ProcessCanceled

[util](../modules/util.md).ProcessCanceled

## Hierarchy

* *Error*

  ↳ **ProcessCanceled**

## Table of contents

### Constructors

- [constructor](util.processcanceled.md#constructor)

### Properties

- [message](util.processcanceled.md#message)
- [name](util.processcanceled.md#name)
- [prepareStackTrace](util.processcanceled.md#preparestacktrace)
- [stack](util.processcanceled.md#stack)
- [stackTraceLimit](util.processcanceled.md#stacktracelimit)

### Methods

- [captureStackTrace](util.processcanceled.md#capturestacktrace)

## Constructors

### constructor

\+ **new ProcessCanceled**(`message`: *string*): [*ProcessCanceled*](util.processcanceled.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** [*ProcessCanceled*](util.processcanceled.md)

Defined in: src/util/CustomErrors.ts:46

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
