[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IModRule

# Interface: IModRule

[types](../modules/types.md).IModRule

## Hierarchy

- `IRule`

  ↳ **`IModRule`**

## Table of contents

### Properties

- [comment](types.IModRule.md#comment)
- [downloadHint](types.IModRule.md#downloadhint)
- [extra](types.IModRule.md#extra)
- [fileList](types.IModRule.md#filelist)
- [ignored](types.IModRule.md#ignored)
- [installerChoices](types.IModRule.md#installerchoices)
- [reference](types.IModRule.md#reference)
- [type](types.IModRule.md#type)

## Properties

### comment

• `Optional` **comment**: `string`

#### Inherited from

IRule.comment

#### Defined in

E:/WorkC/vortex/node_modules/modmeta-db/lib/types.d.ts:14

___

### downloadHint

• `Optional` **downloadHint**: `IDownloadHint`

#### Defined in

../src/extensions/mod_management/types/IMod.ts:101

___

### extra

• `Optional` **extra**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

../src/extensions/mod_management/types/IMod.ts:106

___

### fileList

• `Optional` **fileList**: `IFileListItem`[]

#### Defined in

../src/extensions/mod_management/types/IMod.ts:98

___

### ignored

• `Optional` **ignored**: `boolean`

#### Defined in

../src/extensions/mod_management/types/IMod.ts:108

___

### installerChoices

• `Optional` **installerChoices**: `any`

#### Defined in

../src/extensions/mod_management/types/IMod.ts:100

___

### reference

• **reference**: [`IModReference`](types.IModReference.md)

#### Overrides

IRule.reference

#### Defined in

../src/extensions/mod_management/types/IMod.ts:97

___

### type

• **type**: `RuleType`

#### Inherited from

IRule.type

#### Defined in

E:/WorkC/vortex/node_modules/modmeta-db/lib/types.d.ts:12
