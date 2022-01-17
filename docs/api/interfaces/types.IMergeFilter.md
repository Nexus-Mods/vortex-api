[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IMergeFilter

# Interface: IMergeFilter

[types](../modules/types.md).IMergeFilter

## Table of contents

### Methods

- [baseFiles](types.IMergeFilter.md#basefiles)
- [filter](types.IMergeFilter.md#filter)

## Methods

### baseFiles

▸ **baseFiles**(`deployedFiles`): { `in`: `string` ; `out`: `string`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `deployedFiles` | [`IDeployedFile`](types.IDeployedFile.md)[] |

#### Returns

{ `in`: `string` ; `out`: `string`  }[]

#### Defined in

../src/types/IExtensionContext.ts:324

___

### filter

▸ **filter**(`fileName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |

#### Returns

`boolean`

#### Defined in

../src/types/IExtensionContext.ts:327
