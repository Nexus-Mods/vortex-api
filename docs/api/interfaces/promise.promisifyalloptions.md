[vortex_devel](../README.md) / [Exports](../modules.md) / [Promise](../modules/promise.md) / PromisifyAllOptions

# Interface: PromisifyAllOptions<T\>

[Promise](../modules/promise.md).PromisifyAllOptions

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*PromisifyOptions*](promise.promisifyoptions.md)

  ↳ **PromisifyAllOptions**

## Table of contents

### Properties

- [context](promise.promisifyalloptions.md#context)
- [multiArgs](promise.promisifyalloptions.md#multiargs)
- [suffix](promise.promisifyalloptions.md#suffix)

### Methods

- [filter](promise.promisifyalloptions.md#filter)
- [promisifier](promise.promisifyalloptions.md#promisifier)

## Properties

### context

• `Optional` **context**: *any*

Inherited from: [PromisifyOptions](promise.promisifyoptions.md).[context](promise.promisifyoptions.md#context)

Defined in: node_modules/@types/bluebird/index.d.ts:964

___

### multiArgs

• `Optional` **multiArgs**: *boolean*

Inherited from: [PromisifyOptions](promise.promisifyoptions.md).[multiArgs](promise.promisifyoptions.md#multiargs)

Defined in: node_modules/@types/bluebird/index.d.ts:965

___

### suffix

• `Optional` **suffix**: *string*

Defined in: node_modules/@types/bluebird/index.d.ts:968

## Methods

### filter

▸ `Optional`**filter**(`name`: *string*, `func`: (...`args`: *any*[]) => *any*, `target?`: *any*, `passesDefaultFilter?`: *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`func` | (...`args`: *any*[]) => *any* |
`target?` | *any* |
`passesDefaultFilter?` | *boolean* |

**Returns:** *boolean*

Defined in: node_modules/@types/bluebird/index.d.ts:969

___

### promisifier

▸ `Optional`**promisifier**(`originalMethod`: (...`args`: *any*[]) => *any*, `defaultPromisifer`: (...`args`: *any*[]) => (...`args`: *any*[]) => [*Promise*](../classes/promise.md)<any\>): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`originalMethod` | (...`args`: *any*[]) => *any* |
`defaultPromisifer` | (...`args`: *any*[]) => (...`args`: *any*[]) => [*Promise*](../classes/promise.md)<any\> |

**Returns:** () => *PromiseLike*<any\>

Defined in: node_modules/@types/bluebird/index.d.ts:971
