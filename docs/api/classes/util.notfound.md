[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / NotFound

# Class: NotFound

[util](../modules/util.md).NotFound

## Hierarchy

* *Error*

  ↳ **NotFound**

## Table of contents

### Constructors

- [constructor](util.notfound.md#constructor)

### Properties

- [message](util.notfound.md#message)
- [name](util.notfound.md#name)
- [prepareStackTrace](util.notfound.md#preparestacktrace)
- [stack](util.notfound.md#stack)
- [stackTraceLimit](util.notfound.md#stacktracelimit)

### Methods

- [captureStackTrace](util.notfound.md#capturestacktrace)

## Constructors

### constructor

\+ **new NotFound**(`what`: *string*): [*NotFound*](util.notfound.md)

#### Parameters:

Name | Type |
:------ | :------ |
`what` | *string* |

**Returns:** [*NotFound*](util.notfound.md)

Defined in: src/util/CustomErrors.ts:162

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
