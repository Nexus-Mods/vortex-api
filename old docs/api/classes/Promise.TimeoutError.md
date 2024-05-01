[vortex_devel](../README.md) / [Exports](../modules.md) / [Promise](../modules/Promise.md) / TimeoutError

# Class: TimeoutError

[Promise](../modules/Promise.md).TimeoutError

Signals that an operation has timed out. Used as a custom cancellation reason in `.timeout`.

## Hierarchy

- `Error`

  ↳ **`TimeoutError`**

## Table of contents

### Constructors

- [constructor](Promise.TimeoutError.md#constructor)

### Properties

- [message](Promise.TimeoutError.md#message)
- [name](Promise.TimeoutError.md#name)
- [stack](Promise.TimeoutError.md#stack)
- [prepareStackTrace](Promise.TimeoutError.md#preparestacktrace)
- [stackTraceLimit](Promise.TimeoutError.md#stacktracelimit)

### Methods

- [captureStackTrace](Promise.TimeoutError.md#capturestacktrace)

## Constructors

### constructor

• **new TimeoutError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

e:/WorkC/vortex/node_modules/typescript/lib/lib.es5.d.ts:1028

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
