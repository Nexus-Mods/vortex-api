[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / VerifierDropParent

# Class: VerifierDropParent

[types](../modules/types.md).VerifierDropParent

The repair function can't fix a value so delete the parent object instead

## Hierarchy

- `Error`

  ↳ **`VerifierDropParent`**

## Table of contents

### Constructors

- [constructor](types.VerifierDropParent.md#constructor)

### Properties

- [message](types.VerifierDropParent.md#message)
- [name](types.VerifierDropParent.md#name)
- [stack](types.VerifierDropParent.md#stack)
- [prepareStackTrace](types.VerifierDropParent.md#preparestacktrace)
- [stackTraceLimit](types.VerifierDropParent.md#stacktracelimit)

### Methods

- [captureStackTrace](types.VerifierDropParent.md#capturestacktrace)

## Constructors

### constructor

• **new VerifierDropParent**()

#### Overrides

Error.constructor

#### Defined in

../src/types/IExtensionContext.ts:761

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

e:/WorkC/vortex/node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

e:/WorkC/vortex/node_modules/typescript/lib/lib.es5.d.ts:1022

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

e:/WorkC/vortex/node_modules/typescript/lib/lib.es5.d.ts:1024

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/globals.d.ts:4
