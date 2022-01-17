[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / GameEntryNotFound

# Class: GameEntryNotFound

[types](../modules/types.md).GameEntryNotFound

## Hierarchy

- `Error`

  ↳ **`GameEntryNotFound`**

## Table of contents

### Constructors

- [constructor](types.GameEntryNotFound.md#constructor)

### Properties

- [mExistingNames](types.GameEntryNotFound.md#mexistingnames)
- [mName](types.GameEntryNotFound.md#mname)
- [mStore](types.GameEntryNotFound.md#mstore)
- [message](types.GameEntryNotFound.md#message)
- [name](types.GameEntryNotFound.md#name)
- [stack](types.GameEntryNotFound.md#stack)
- [prepareStackTrace](types.GameEntryNotFound.md#preparestacktrace)
- [stackTraceLimit](types.GameEntryNotFound.md#stacktracelimit)

### Accessors

- [existingGames](types.GameEntryNotFound.md#existinggames)
- [gameName](types.GameEntryNotFound.md#gamename)
- [storeName](types.GameEntryNotFound.md#storename)

### Methods

- [captureStackTrace](types.GameEntryNotFound.md#capturestacktrace)

## Constructors

### constructor

• **new GameEntryNotFound**(`name`, `store`, `existing?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `store` | `string` |
| `existing?` | `string`[] |

#### Overrides

Error.constructor

#### Defined in

../src/types/IGameStore.ts:27

## Properties

### mExistingNames

• `Private` **mExistingNames**: `string`[]

#### Defined in

../src/types/IGameStore.ts:26

___

### mName

• `Private` **mName**: `string`

#### Defined in

../src/types/IGameStore.ts:24

___

### mStore

• `Private` **mStore**: `string`

#### Defined in

../src/types/IGameStore.ts:25

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

### existingGames

• `get` **existingGames**(): `string`[]

#### Returns

`string`[]

#### Defined in

../src/types/IGameStore.ts:48

___

### gameName

• `get` **gameName**(): `string`

#### Returns

`string`

#### Defined in

../src/types/IGameStore.ts:37

___

### storeName

• `get` **storeName**(): `string`

#### Returns

`string`

#### Defined in

../src/types/IGameStore.ts:42

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
