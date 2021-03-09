[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / VerifierDropParent

# Class: VerifierDropParent

[types](../modules/types.md).VerifierDropParent

The repair function can't fix a value so delete the parent object instead

## Hierarchy

* *Error*

  ↳ **VerifierDropParent**

## Table of contents

### Constructors

- [constructor](types.verifierdropparent.md#constructor)

### Properties

- [message](types.verifierdropparent.md#message)
- [name](types.verifierdropparent.md#name)
- [prepareStackTrace](types.verifierdropparent.md#preparestacktrace)
- [stack](types.verifierdropparent.md#stack)
- [stackTraceLimit](types.verifierdropparent.md#stacktracelimit)

### Methods

- [captureStackTrace](types.verifierdropparent.md#capturestacktrace)

## Constructors

### constructor

\+ **new VerifierDropParent**(): [*VerifierDropParent*](types.verifierdropparent.md)

**Returns:** [*VerifierDropParent*](types.verifierdropparent.md)

Defined in: src/types/IExtensionContext.ts:702

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
