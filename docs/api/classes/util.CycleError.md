[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / CycleError

# Class: CycleError

[util](../modules/util.md).CycleError

## Hierarchy

- `Error`

  ↳ **`CycleError`**

## Table of contents

### Constructors

- [constructor](util.CycleError.md#constructor)

### Properties

- [mCycles](util.CycleError.md#mcycles)
- [message](util.CycleError.md#message)
- [name](util.CycleError.md#name)
- [stack](util.CycleError.md#stack)
- [prepareStackTrace](util.CycleError.md#preparestacktrace)
- [stackTraceLimit](util.CycleError.md#stacktracelimit)

### Accessors

- [cycles](util.CycleError.md#cycles)

### Methods

- [captureStackTrace](util.CycleError.md#capturestacktrace)

## Constructors

### constructor

• **new CycleError**(`cycles`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cycles` | `string`[][] |

#### Overrides

Error.constructor

#### Defined in

../src/extensions/mod_management/util/sort.ts:20

## Properties

### mCycles

• `Private` **mCycles**: `string`[][]

#### Defined in

../src/extensions/mod_management/util/sort.ts:19

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

### cycles

• `get` **cycles**(): `string`[][]

#### Returns

`string`[][]

#### Defined in

../src/extensions/mod_management/util/sort.ts:25

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
