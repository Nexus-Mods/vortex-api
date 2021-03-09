[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IStateVerifier

# Interface: IStateVerifier

[types](../modules/types.md).IStateVerifier

## Table of contents

### Properties

- [deleteBroken](types.istateverifier.md#deletebroken)
- [description](types.istateverifier.md#description)
- [elements](types.istateverifier.md#elements)
- [noEmpty](types.istateverifier.md#noempty)
- [noNull](types.istateverifier.md#nonull)
- [noUndefined](types.istateverifier.md#noundefined)
- [repair](types.istateverifier.md#repair)
- [required](types.istateverifier.md#required)
- [type](types.istateverifier.md#type)

## Properties

### deleteBroken

• `Optional` **deleteBroken**: *boolean* \| *parent*

Defined in: src/types/IExtensionContext.ts:684

___

### description

• **description**: (`input`: *any*) => *string*

#### Type declaration:

▸ (`input`: *any*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *any* |

**Returns:** *string*

Defined in: src/types/IExtensionContext.ts:669

Defined in: src/types/IExtensionContext.ts:669

___

### elements

• `Optional` **elements**: *object*

#### Type declaration:

Defined in: src/types/IExtensionContext.ts:679

___

### noEmpty

• `Optional` **noEmpty**: *boolean*

Defined in: src/types/IExtensionContext.ts:677

___

### noNull

• `Optional` **noNull**: *boolean*

Defined in: src/types/IExtensionContext.ts:675

___

### noUndefined

• `Optional` **noUndefined**: *boolean*

Defined in: src/types/IExtensionContext.ts:673

___

### repair

• `Optional` **repair**: (`input`: *any*, `def`: *any*) => *any*

#### Type declaration:

▸ (`input`: *any*, `def`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *any* |
`def` | *any* |

**Returns:** *any*

Defined in: src/types/IExtensionContext.ts:686

Defined in: src/types/IExtensionContext.ts:686

___

### required

• `Optional` **required**: *boolean*

Defined in: src/types/IExtensionContext.ts:681

___

### type

• `Optional` **type**: *string* \| *number* \| *boolean* \| *object* \| *map* \| *array*

Defined in: src/types/IExtensionContext.ts:671
