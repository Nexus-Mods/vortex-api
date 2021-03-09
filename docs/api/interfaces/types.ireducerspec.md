[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IReducerSpec

# Interface: IReducerSpec<T\>

[types](../modules/types.md).IReducerSpec

specification a reducer registration has to follow.
defaults must be an object with the same keys as
reducers

**`export`** 

**`interface`** IReducerSpec

## Type parameters

Name | Default |
:------ | :------ |
`T` | { [key: string]: *any*;  } |

## Table of contents

### Properties

- [defaults](types.ireducerspec.md#defaults)
- [reducers](types.ireducerspec.md#reducers)
- [verifiers](types.ireducerspec.md#verifiers)

## Properties

### defaults

• **defaults**: T

Defined in: src/types/IExtensionContext.ts:728

___

### reducers

• **reducers**: *object*

#### Type declaration:

Defined in: src/types/IExtensionContext.ts:727

___

### verifiers

• `Optional` **verifiers**: *object*

#### Type declaration:

Defined in: src/types/IExtensionContext.ts:729
