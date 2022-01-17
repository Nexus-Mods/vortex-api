[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IModSourceOptions

# Interface: IModSourceOptions

[types](../modules/types.md).IModSourceOptions

## Table of contents

### Properties

- [icon](types.IModSourceOptions.md#icon)
- [supportsModId](types.IModSourceOptions.md#supportsmodid)

### Methods

- [condition](types.IModSourceOptions.md#condition)

## Properties

### icon

• `Optional` **icon**: `string`

#### Defined in

../src/types/IExtensionContext.ts:103

___

### supportsModId

• `Optional` **supportsModId**: `boolean`

#### Defined in

../src/types/IExtensionContext.ts:104

## Methods

### condition

▸ `Optional` **condition**(): `boolean`

condition for this source to show up. Please make sure this returns quickly, cache if
necessary.

#### Returns

`boolean`

#### Defined in

../src/types/IExtensionContext.ts:102
