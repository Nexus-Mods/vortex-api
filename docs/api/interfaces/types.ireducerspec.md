[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IReducerSpec

# Interface: IReducerSpec<T\>

[types](../modules/types.md).IReducerSpec

specification a reducer registration has to follow.
defaults must be an object with the same keys as
reducers

**`export`**

**`interface`** IReducerSpec

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | { [key: string]: `any`;  } |

## Table of contents

### Properties

- [defaults](types.IReducerSpec.md#defaults)
- [reducers](types.IReducerSpec.md#reducers)
- [verifiers](types.IReducerSpec.md#verifiers)

## Properties

### defaults

• **defaults**: `T`

#### Defined in

../src/types/IExtensionContext.ts:786

___

### reducers

• **reducers**: `Object`

#### Index signature

▪ [key: `string`]: (`state`: `T`, `payload`: `any`) => `T`

#### Defined in

../src/types/IExtensionContext.ts:785

___

### verifiers

• `Optional` **verifiers**: `Object`

#### Index signature

▪ [key: `string`]: [`IStateVerifier`](types.IStateVerifier.md)

#### Defined in

../src/types/IExtensionContext.ts:787
