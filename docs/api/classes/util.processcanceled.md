[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / ProcessCanceled

# Class: ProcessCanceled

[util](../modules/util.md).ProcessCanceled

## Hierarchy

- `Error`

  ↳ **`ProcessCanceled`**

## Table of contents

### Constructors

- [constructor](util.ProcessCanceled.md#constructor)

### Properties

- [mExtraInfo](util.ProcessCanceled.md#mextrainfo)
- [message](util.ProcessCanceled.md#message)
- [name](util.ProcessCanceled.md#name)
- [stack](util.ProcessCanceled.md#stack)
- [prepareStackTrace](util.ProcessCanceled.md#preparestacktrace)
- [stackTraceLimit](util.ProcessCanceled.md#stacktracelimit)

### Accessors

- [extraInfo](util.ProcessCanceled.md#extrainfo)

### Methods

- [captureStackTrace](util.ProcessCanceled.md#capturestacktrace)

## Constructors

### constructor

• **new ProcessCanceled**(`message`, `extraInfo?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `extraInfo?` | `any` |

#### Overrides

Error.constructor

#### Defined in

../src/util/CustomErrors.ts:48

## Properties

### mExtraInfo

• `Private` **mExtraInfo**: `any`

#### Defined in

../src/util/CustomErrors.ts:47

___

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

## Accessors

### extraInfo

• `get` **extraInfo**(): `any`

#### Returns

`any`

#### Defined in

../src/util/CustomErrors.ts:54

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
