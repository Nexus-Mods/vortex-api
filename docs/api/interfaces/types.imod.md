[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IMod

# Interface: IMod

[types](../modules/types.md).IMod

represents a mod in all states (being downloaded, downloaded, installed)

**`interface`** IMod

## Table of contents

### Properties

- [archiveId](types.imod.md#archiveid)
- [attributes](types.imod.md#attributes)
- [enabledINITweaks](types.imod.md#enabledinitweaks)
- [fileOverrides](types.imod.md#fileoverrides)
- [id](types.imod.md#id)
- [installationPath](types.imod.md#installationpath)
- [rules](types.imod.md#rules)
- [state](types.imod.md#state)
- [type](types.imod.md#type)

## Properties

### archiveId

• `Optional` **archiveId**: *string*

Defined in: src/extensions/mod_management/types/IMod.ts:23

___

### attributes

• `Optional` **attributes**: *object*

#### Type declaration:

Defined in: src/extensions/mod_management/types/IMod.ts:27

___

### enabledINITweaks

• `Optional` **enabledINITweaks**: *string*[]

Defined in: src/extensions/mod_management/types/IMod.ts:31

___

### fileOverrides

• `Optional` **fileOverrides**: *string*[]

Defined in: src/extensions/mod_management/types/IMod.ts:33

___

### id

• **id**: *string*

Defined in: src/extensions/mod_management/types/IMod.ts:14

___

### installationPath

• **installationPath**: *string*

Defined in: src/extensions/mod_management/types/IMod.ts:25

___

### rules

• `Optional` **rules**: IRule[]

Defined in: src/extensions/mod_management/types/IMod.ts:29

___

### state

• **state**: ModState

Defined in: src/extensions/mod_management/types/IMod.ts:16

___

### type

• **type**: *string*

Defined in: src/extensions/mod_management/types/IMod.ts:21
