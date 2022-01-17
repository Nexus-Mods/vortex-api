[vortex_devel](../README.md) / [Exports](../modules.md) / [Promise](../modules/Promise.md) / PromisifyAllOptions

# Interface: PromisifyAllOptions<T\>

[Promise](../modules/Promise.md).PromisifyAllOptions

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`PromisifyOptions`](Promise.PromisifyOptions.md)

  ↳ **`PromisifyAllOptions`**

## Table of contents

### Properties

- [context](Promise.PromisifyAllOptions.md#context)
- [multiArgs](Promise.PromisifyAllOptions.md#multiargs)
- [suffix](Promise.PromisifyAllOptions.md#suffix)

### Methods

- [filter](Promise.PromisifyAllOptions.md#filter)
- [promisifier](Promise.PromisifyAllOptions.md#promisifier)

## Properties

### context

• `Optional` **context**: `any`

#### Inherited from

[PromisifyOptions](Promise.PromisifyOptions.md).[context](Promise.PromisifyOptions.md#context)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:964

___

### multiArgs

• `Optional` **multiArgs**: `boolean`

#### Inherited from

[PromisifyOptions](Promise.PromisifyOptions.md).[multiArgs](Promise.PromisifyOptions.md#multiargs)

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:965

___

### suffix

• `Optional` **suffix**: `string`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:968

## Methods

### filter

▸ `Optional` **filter**(`name`, `func`, `target?`, `passesDefaultFilter?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `func` | (...`args`: `any`[]) => `any` |
| `target?` | `any` |
| `passesDefaultFilter?` | `boolean` |

#### Returns

`boolean`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:969

___

### promisifier

▸ `Optional` **promisifier**(`originalMethod`, `defaultPromisifer`): () => `PromiseLike`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `originalMethod` | (...`args`: `any`[]) => `any` |
| `defaultPromisifer` | (...`args`: `any`[]) => (...`args`: `any`[]) => [`Promise`](../classes/Promise.md)<`any`\> |

#### Returns

`fn`

▸ (): `PromiseLike`<`any`\>

##### Returns

`PromiseLike`<`any`\>

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:971
