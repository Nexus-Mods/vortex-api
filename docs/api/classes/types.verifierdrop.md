[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / VerifierDrop

# Class: VerifierDrop

[types](../modules/types.md).VerifierDrop

The repair function can't fix a value so delete it instead

## Hierarchy

* *Error*

  ↳ **VerifierDrop**

## Table of contents

### Constructors

- [constructor](types.verifierdrop.md#constructor)

### Properties

- [message](types.verifierdrop.md#message)
- [name](types.verifierdrop.md#name)
- [prepareStackTrace](types.verifierdrop.md#preparestacktrace)
- [stack](types.verifierdrop.md#stack)
- [stackTraceLimit](types.verifierdrop.md#stacktracelimit)

### Methods

- [captureStackTrace](types.verifierdrop.md#capturestacktrace)

## Constructors

### constructor

\+ **new VerifierDrop**(): [*VerifierDrop*](types.verifierdrop.md)

**Returns:** [*VerifierDrop*](types.verifierdrop.md)

Defined in: src/types/IExtensionContext.ts:692

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
