[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IMod

# Interface: IMod

[types](../modules/types.md).IMod

represents a mod in all states (being downloaded, downloaded, installed)

**`interface`** IMod

## Table of contents

### Properties

- [archiveId](types.IMod.md#archiveid)
- [attributes](types.IMod.md#attributes)
- [enabledINITweaks](types.IMod.md#enabledinitweaks)
- [fileOverrides](types.IMod.md#fileoverrides)
- [id](types.IMod.md#id)
- [installationPath](types.IMod.md#installationpath)
- [rules](types.IMod.md#rules)
- [state](types.IMod.md#state)
- [type](types.IMod.md#type)

## Properties

### archiveId

• `Optional` **archiveId**: `string`

#### Defined in

../src/extensions/mod_management/types/IMod.ts:23

___

### attributes

• `Optional` **attributes**: `Object`

#### Index signature

▪ [id: `string`]: `any`

#### Defined in

../src/extensions/mod_management/types/IMod.ts:27

___

### enabledINITweaks

• `Optional` **enabledINITweaks**: `string`[]

#### Defined in

../src/extensions/mod_management/types/IMod.ts:31

___

### fileOverrides

• `Optional` **fileOverrides**: `string`[]

#### Defined in

../src/extensions/mod_management/types/IMod.ts:33

___

### id

• **id**: `string`

#### Defined in

../src/extensions/mod_management/types/IMod.ts:14

___

### installationPath

• **installationPath**: `string`

#### Defined in

../src/extensions/mod_management/types/IMod.ts:25

___

### rules

• `Optional` **rules**: [`IModRule`](types.IModRule.md)[]

#### Defined in

../src/extensions/mod_management/types/IMod.ts:29

___

### state

• **state**: `ModState`

#### Defined in

../src/extensions/mod_management/types/IMod.ts:16

___

### type

• **type**: `string`

#### Defined in

../src/extensions/mod_management/types/IMod.ts:21
