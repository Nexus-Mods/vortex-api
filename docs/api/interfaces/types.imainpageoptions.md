[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IMainPageOptions

# Interface: IMainPageOptions

[types](../modules/types.md).IMainPageOptions

## Table of contents

### Properties

- [activity](types.imainpageoptions.md#activity)
- [badge](types.imainpageoptions.md#badge)
- [group](types.imainpageoptions.md#group)
- [hotkey](types.imainpageoptions.md#hotkey)
- [hotkeyRaw](types.imainpageoptions.md#hotkeyraw)
- [id](types.imainpageoptions.md#id)
- [priority](types.imainpageoptions.md#priority)
- [props](types.imainpageoptions.md#props)
- [visible](types.imainpageoptions.md#visible)

## Properties

### activity

• `Optional` **activity**: [*ReduxProp*](../classes/util.reduxprop.md)<boolean\>

Defined in: src/types/IExtensionContext.ts:119

___

### badge

• `Optional` **badge**: [*ReduxProp*](../classes/util.reduxprop.md)<any\>

Defined in: src/types/IExtensionContext.ts:118

___

### group

• **group**: *dashboard* \| *global* \| *per-game* \| *support* \| *hidden*

Defined in: src/types/IExtensionContext.ts:115

___

### hotkey

• `Optional` **hotkey**: *string*

A hotkey to be pressed together with Ctrl+Shift to open that page

Defined in: src/types/IExtensionContext.ts:108

___

### hotkeyRaw

• `Optional` **hotkeyRaw**: *string*

A hotkey to be pressed to open that page. In this case the caller has to specify any modifiers
in the format required by electron

Defined in: src/types/IExtensionContext.ts:113

___

### id

• `Optional` **id**: *string*

id for this page. If none is specified the page title is used. Use the id to avoid
name collisions if another extension is already using the same title.

Defined in: src/types/IExtensionContext.ts:104

___

### priority

• `Optional` **priority**: *number*

Defined in: src/types/IExtensionContext.ts:116

___

### props

• `Optional` **props**: () => *any*

#### Type declaration:

▸ (): *any*

**Returns:** *any*

Defined in: src/types/IExtensionContext.ts:117

Defined in: src/types/IExtensionContext.ts:117

___

### visible

• `Optional` **visible**: () => *boolean*

#### Type declaration:

▸ (): *boolean*

**Returns:** *boolean*

Defined in: src/types/IExtensionContext.ts:114

Defined in: src/types/IExtensionContext.ts:114
