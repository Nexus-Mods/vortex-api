[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / GameStoreNotFound

# Class: GameStoreNotFound

[types](../modules/types.md).GameStoreNotFound

## Hierarchy

- `Error`

  ↳ **`GameStoreNotFound`**

## Table of contents

### Constructors

- [constructor](types.GameStoreNotFound.md#constructor)

### Properties

- [mName](types.GameStoreNotFound.md#mname)
- [message](types.GameStoreNotFound.md#message)
- [name](types.GameStoreNotFound.md#name)
- [stack](types.GameStoreNotFound.md#stack)
- [prepareStackTrace](types.GameStoreNotFound.md#preparestacktrace)
- [stackTraceLimit](types.GameStoreNotFound.md#stacktracelimit)

### Accessors

- [storeName](types.GameStoreNotFound.md#storename)

### Methods

- [captureStackTrace](types.GameStoreNotFound.md#capturestacktrace)

## Constructors

### constructor

• **new GameStoreNotFound**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Overrides

Error.constructor

#### Defined in

../src/types/IGameStore.ts:11

## Properties

### mName

• `Private` **mName**: `string`

#### Defined in

../src/types/IGameStore.ts:10

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

### storeName

• `get` **storeName**(): `string`

#### Returns

`string`

#### Defined in

../src/types/IGameStore.ts:18

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
