[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / GameNotFound

# Class: GameNotFound

[util](../modules/util.md).GameNotFound

## Hierarchy

- `Error`

  ↳ **`GameNotFound`**

## Table of contents

### Constructors

- [constructor](util.GameNotFound.md#constructor)

### Properties

- [mSearch](util.GameNotFound.md#msearch)
- [message](util.GameNotFound.md#message)
- [name](util.GameNotFound.md#name)
- [stack](util.GameNotFound.md#stack)
- [prepareStackTrace](util.GameNotFound.md#preparestacktrace)
- [stackTraceLimit](util.GameNotFound.md#stacktracelimit)

### Accessors

- [search](util.GameNotFound.md#search)

### Methods

- [captureStackTrace](util.GameNotFound.md#capturestacktrace)

## Constructors

### constructor

• **new GameNotFound**(`search`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `string` |

#### Overrides

Error.constructor

#### Defined in

../src/util/Steam.ts:24

## Properties

### mSearch

• `Private` **mSearch**: `any`

#### Defined in

../src/util/Steam.ts:23

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

### search

• `get` **search**(): `any`

#### Returns

`any`

#### Defined in

../src/util/Steam.ts:31

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
