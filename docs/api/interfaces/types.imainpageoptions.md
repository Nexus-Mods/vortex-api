[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IMainPageOptions

# Interface: IMainPageOptions

[types](../modules/types.md).IMainPageOptions

## Table of contents

### Properties

- [activity](types.IMainPageOptions.md#activity)
- [badge](types.IMainPageOptions.md#badge)
- [group](types.IMainPageOptions.md#group)
- [hotkey](types.IMainPageOptions.md#hotkey)
- [hotkeyRaw](types.IMainPageOptions.md#hotkeyraw)
- [id](types.IMainPageOptions.md#id)
- [priority](types.IMainPageOptions.md#priority)

### Methods

- [onReset](types.IMainPageOptions.md#onreset)
- [props](types.IMainPageOptions.md#props)
- [visible](types.IMainPageOptions.md#visible)

## Properties

### activity

• `Optional` **activity**: [`ReduxProp`](../classes/util.ReduxProp.md)<`boolean`\>

#### Defined in

../src/types/IExtensionContext.ts:127

___

### badge

• `Optional` **badge**: [`ReduxProp`](../classes/util.ReduxProp.md)<`any`\>

#### Defined in

../src/types/IExtensionContext.ts:126

___

### group

• **group**: ``"hidden"`` \| ``"dashboard"`` \| ``"global"`` \| ``"per-game"`` \| ``"support"``

#### Defined in

../src/types/IExtensionContext.ts:123

___

### hotkey

• `Optional` **hotkey**: `string`

A hotkey to be pressed together with Ctrl+Shift to open that page

#### Defined in

../src/types/IExtensionContext.ts:116

___

### hotkeyRaw

• `Optional` **hotkeyRaw**: `string`

A hotkey to be pressed to open that page. In this case the caller has to specify any modifiers
in the format required by electron

#### Defined in

../src/types/IExtensionContext.ts:121

___

### id

• `Optional` **id**: `string`

id for this page. If none is specified the page title is used. Use the id to avoid
name collisions if another extension is already using the same title.

#### Defined in

../src/types/IExtensionContext.ts:112

___

### priority

• `Optional` **priority**: `number`

#### Defined in

../src/types/IExtensionContext.ts:124

## Methods

### onReset

▸ `Optional` **onReset**(): `void`

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:128

___

### props

▸ `Optional` **props**(): `any`

#### Returns

`any`

#### Defined in

../src/types/IExtensionContext.ts:125

___

### visible

▸ `Optional` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

../src/types/IExtensionContext.ts:122
