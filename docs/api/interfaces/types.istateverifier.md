[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IStateVerifier

# Interface: IStateVerifier

[types](../modules/types.md).IStateVerifier

## Table of contents

### Properties

- [deleteBroken](types.IStateVerifier.md#deletebroken)
- [elements](types.IStateVerifier.md#elements)
- [noEmpty](types.IStateVerifier.md#noempty)
- [noNull](types.IStateVerifier.md#nonull)
- [noUndefined](types.IStateVerifier.md#noundefined)
- [required](types.IStateVerifier.md#required)
- [type](types.IStateVerifier.md#type)

### Methods

- [description](types.IStateVerifier.md#description)
- [repair](types.IStateVerifier.md#repair)

## Properties

### deleteBroken

• `Optional` **deleteBroken**: `boolean` \| ``"parent"``

#### Defined in

../src/types/IExtensionContext.ts:742

___

### elements

• `Optional` **elements**: `Object`

#### Index signature

▪ [key: `string`]: [`IStateVerifier`](types.IStateVerifier.md)

#### Defined in

../src/types/IExtensionContext.ts:737

___

### noEmpty

• `Optional` **noEmpty**: `boolean`

#### Defined in

../src/types/IExtensionContext.ts:735

___

### noNull

• `Optional` **noNull**: `boolean`

#### Defined in

../src/types/IExtensionContext.ts:733

___

### noUndefined

• `Optional` **noUndefined**: `boolean`

#### Defined in

../src/types/IExtensionContext.ts:731

___

### required

• `Optional` **required**: `boolean`

#### Defined in

../src/types/IExtensionContext.ts:739

___

### type

• `Optional` **type**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"map"`` \| ``"array"``

#### Defined in

../src/types/IExtensionContext.ts:729

## Methods

### description

▸ **description**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

`string`

#### Defined in

../src/types/IExtensionContext.ts:727

___

### repair

▸ `Optional` **repair**(`input`, `def`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `def` | `any` |

#### Returns

`any`

#### Defined in

../src/types/IExtensionContext.ts:744
