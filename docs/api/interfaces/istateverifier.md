**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IStateVerifier

# Interface: IStateVerifier

## Hierarchy

* **IStateVerifier**

## Index

### Properties

* [deleteBroken](istateverifier.md#deletebroken)
* [description](istateverifier.md#description)
* [elements](istateverifier.md#elements)
* [noEmpty](istateverifier.md#noempty)
* [noNull](istateverifier.md#nonull)
* [noUndefined](istateverifier.md#noundefined)
* [repair](istateverifier.md#repair)
* [required](istateverifier.md#required)
* [type](istateverifier.md#type)

## Properties

### deleteBroken

• `Optional` **deleteBroken**: boolean \| \"parent\"

*Defined in Work/vortex/src/types/IExtensionContext.ts:680*

___

### description

•  **description**: (input: any) => string

*Defined in Work/vortex/src/types/IExtensionContext.ts:665*

___

### elements

• `Optional` **elements**: { [key:string]: [IStateVerifier](istateverifier.md);  }

*Defined in Work/vortex/src/types/IExtensionContext.ts:675*

___

### noEmpty

• `Optional` **noEmpty**: boolean

*Defined in Work/vortex/src/types/IExtensionContext.ts:673*

___

### noNull

• `Optional` **noNull**: boolean

*Defined in Work/vortex/src/types/IExtensionContext.ts:671*

___

### noUndefined

• `Optional` **noUndefined**: boolean

*Defined in Work/vortex/src/types/IExtensionContext.ts:669*

___

### repair

• `Optional` **repair**: (input: any, def: any) => any

*Defined in Work/vortex/src/types/IExtensionContext.ts:682*

___

### required

• `Optional` **required**: boolean

*Defined in Work/vortex/src/types/IExtensionContext.ts:677*

___

### type

• `Optional` **type**: \"map\" \| \"string\" \| \"boolean\" \| \"number\" \| \"object\" \| \"array\"

*Defined in Work/vortex/src/types/IExtensionContext.ts:667*
