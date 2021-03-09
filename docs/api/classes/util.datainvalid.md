[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / DataInvalid

# Class: DataInvalid

[util](../modules/util.md).DataInvalid

## Hierarchy

* *Error*

  ↳ **DataInvalid**

## Table of contents

### Constructors

- [constructor](util.datainvalid.md#constructor)

### Properties

- [message](util.datainvalid.md#message)
- [name](util.datainvalid.md#name)
- [prepareStackTrace](util.datainvalid.md#preparestacktrace)
- [stack](util.datainvalid.md#stack)
- [stackTraceLimit](util.datainvalid.md#stacktracelimit)

### Methods

- [captureStackTrace](util.datainvalid.md#capturestacktrace)

## Constructors

### constructor

\+ **new DataInvalid**(`message`: *string*): [*DataInvalid*](util.datainvalid.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** [*DataInvalid*](util.datainvalid.md)

Defined in: src/util/CustomErrors.ts:53

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
