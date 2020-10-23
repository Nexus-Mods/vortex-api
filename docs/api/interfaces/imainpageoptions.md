**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IMainPageOptions

# Interface: IMainPageOptions

## Hierarchy

* **IMainPageOptions**

## Index

### Properties

* [activity](imainpageoptions.md#activity)
* [badge](imainpageoptions.md#badge)
* [group](imainpageoptions.md#group)
* [hotkey](imainpageoptions.md#hotkey)
* [hotkeyRaw](imainpageoptions.md#hotkeyraw)
* [id](imainpageoptions.md#id)
* [priority](imainpageoptions.md#priority)
* [props](imainpageoptions.md#props)
* [visible](imainpageoptions.md#visible)

## Properties

### activity

• `Optional` **activity**: [ReduxProp](../classes/reduxprop.md)\<boolean>

*Defined in Work/vortex/src/types/IExtensionContext.ts:116*

___

### badge

• `Optional` **badge**: [ReduxProp](../classes/reduxprop.md)\<any>

*Defined in Work/vortex/src/types/IExtensionContext.ts:115*

___

### group

•  **group**: \"dashboard\" \| \"global\" \| \"per-game\" \| \"support\" \| \"hidden\"

*Defined in Work/vortex/src/types/IExtensionContext.ts:112*

___

### hotkey

• `Optional` **hotkey**: string

*Defined in Work/vortex/src/types/IExtensionContext.ts:105*

A hotkey to be pressed together with Ctrl+Shift to open that page

___

### hotkeyRaw

• `Optional` **hotkeyRaw**: string

*Defined in Work/vortex/src/types/IExtensionContext.ts:110*

A hotkey to be pressed to open that page. In this case the caller has to specify any modifiers
in the format required by electron

___

### id

• `Optional` **id**: string

*Defined in Work/vortex/src/types/IExtensionContext.ts:101*

id for this page. If none is specified the page title is used. Use the id to avoid
name collisions if another extension is already using the same title.

___

### priority

• `Optional` **priority**: number

*Defined in Work/vortex/src/types/IExtensionContext.ts:113*

___

### props

• `Optional` **props**: () => any

*Defined in Work/vortex/src/types/IExtensionContext.ts:114*

___

### visible

• `Optional` **visible**: () => boolean

*Defined in Work/vortex/src/types/IExtensionContext.ts:111*
