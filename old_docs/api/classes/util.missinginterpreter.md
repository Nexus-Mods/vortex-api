[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / MissingInterpreter

# Class: MissingInterpreter

[util](../modules/util.md).MissingInterpreter

## Hierarchy

- `Error`

  ↳ **`MissingInterpreter`**

## Table of contents

### Constructors

- [constructor](util.MissingInterpreter.md#constructor)

### Properties

- [mURL](util.MissingInterpreter.md#murl)
- [message](util.MissingInterpreter.md#message)
- [name](util.MissingInterpreter.md#name)
- [stack](util.MissingInterpreter.md#stack)
- [prepareStackTrace](util.MissingInterpreter.md#preparestacktrace)
- [stackTraceLimit](util.MissingInterpreter.md#stacktracelimit)

### Accessors

- [url](util.MissingInterpreter.md#url)

### Methods

- [captureStackTrace](util.MissingInterpreter.md#capturestacktrace)

## Constructors

### constructor

• **new MissingInterpreter**(`message`, `url?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `url?` | `string` |

#### Overrides

Error.constructor

#### Defined in

../src/util/CustomErrors.ts:163

## Properties

### mURL

• `Private` **mURL**: `string`

#### Defined in

../src/util/CustomErrors.ts:162

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

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Defined in

../src/util/CustomErrors.ts:169

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
