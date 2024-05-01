[vortex_devel](../README.md) / [Exports](../modules.md) / [Promise](../modules/Promise.md) / OperationalError

# Class: OperationalError

[Promise](../modules/Promise.md).OperationalError

Represents an error is an explicit promise rejection as opposed to a thrown error.
 For example, if an error is errbacked by a callback API promisified through undefined or undefined
 and is not a typed error, it will be converted to a `OperationalError` which has the original error in
 the `.cause` property.

`OperationalError`s are caught in `.error` handlers.

## Hierarchy

- `Error`

  ↳ **`OperationalError`**

## Table of contents

### Constructors

- [constructor](Promise.OperationalError.md#constructor)

### Properties

- [message](Promise.OperationalError.md#message)
- [name](Promise.OperationalError.md#name)
- [stack](Promise.OperationalError.md#stack)
- [prepareStackTrace](Promise.OperationalError.md#preparestacktrace)
- [stackTraceLimit](Promise.OperationalError.md#stacktracelimit)

### Methods

- [captureStackTrace](Promise.OperationalError.md#capturestacktrace)

## Constructors

### constructor

• **new OperationalError**(`message?`)

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
