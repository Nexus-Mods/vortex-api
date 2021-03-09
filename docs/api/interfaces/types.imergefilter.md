[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IMergeFilter

# Interface: IMergeFilter

[types](../modules/types.md).IMergeFilter

## Table of contents

### Properties

- [baseFiles](types.imergefilter.md#basefiles)
- [filter](types.imergefilter.md#filter)

## Properties

### baseFiles

• **baseFiles**: (`deployedFiles`: [*IDeployedFile*](types.ideployedfile.md)[]) => { `in`: *string* ; `out`: *string*  }[]

#### Type declaration:

▸ (`deployedFiles`: [*IDeployedFile*](types.ideployedfile.md)[]): { `in`: *string* ; `out`: *string*  }[]

#### Parameters:

Name | Type |
:------ | :------ |
`deployedFiles` | [*IDeployedFile*](types.ideployedfile.md)[] |

**Returns:** { `in`: *string* ; `out`: *string*  }[]

Defined in: src/types/IExtensionContext.ts:294

Defined in: src/types/IExtensionContext.ts:294

___

### filter

• **filter**: (`fileName`: *string*) => *boolean*

#### Type declaration:

▸ (`fileName`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`fileName` | *string* |

**Returns:** *boolean*

Defined in: src/types/IExtensionContext.ts:297

Defined in: src/types/IExtensionContext.ts:297
