**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IMod

# Interface: IMod

represents a mod in all states (being downloaded, downloaded, installed)

**`interface`** IMod

## Hierarchy

* **IMod**

## Index

### Properties

* [archiveId](imod.md#archiveid)
* [attributes](imod.md#attributes)
* [enabledINITweaks](imod.md#enabledinitweaks)
* [fileOverrides](imod.md#fileoverrides)
* [id](imod.md#id)
* [installationPath](imod.md#installationpath)
* [rules](imod.md#rules)
* [state](imod.md#state)
* [type](imod.md#type)

## Properties

### archiveId

• `Optional` **archiveId**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IMod.ts:23*

___

### attributes

• `Optional` **attributes**: { [id:string]: any;  }

*Defined in Work/vortex/src/extensions/mod_management/types/IMod.ts:27*

___

### enabledINITweaks

• `Optional` **enabledINITweaks**: string[]

*Defined in Work/vortex/src/extensions/mod_management/types/IMod.ts:31*

___

### fileOverrides

• `Optional` **fileOverrides**: string[]

*Defined in Work/vortex/src/extensions/mod_management/types/IMod.ts:33*

___

### id

•  **id**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IMod.ts:14*

___

### installationPath

•  **installationPath**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IMod.ts:25*

___

### rules

• `Optional` **rules**: IRule[]

*Defined in Work/vortex/src/extensions/mod_management/types/IMod.ts:29*

___

### state

•  **state**: [ModState](../globals.md#modstate)

*Defined in Work/vortex/src/extensions/mod_management/types/IMod.ts:16*

___

### type

•  **type**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IMod.ts:21*
