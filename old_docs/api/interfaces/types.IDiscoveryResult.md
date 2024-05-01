[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IDiscoveryResult

# Interface: IDiscoveryResult

[types](../modules/types.md).IDiscoveryResult

describes parameters for the game set by the user
or discovered automatically.
There are essentially two blocks of fields here:
one is to identify the local installation of the game
the other to override defaults as provided by the
game extension. This is particularly relevant for
games added by the user.

**`export`**

**`interface`** IDiscoveryResult

## Table of contents

### Properties

- [environment](types.IDiscoveryResult.md#environment)
- [executable](types.IDiscoveryResult.md#executable)
- [extensionPath](types.IDiscoveryResult.md#extensionpath)
- [hidden](types.IDiscoveryResult.md#hidden)
- [id](types.IDiscoveryResult.md#id)
- [logo](types.IDiscoveryResult.md#logo)
- [mergeMods](types.IDiscoveryResult.md#mergemods)
- [name](types.IDiscoveryResult.md#name)
- [parameters](types.IDiscoveryResult.md#parameters)
- [path](types.IDiscoveryResult.md#path)
- [pathSetManually](types.IDiscoveryResult.md#pathsetmanually)
- [shell](types.IDiscoveryResult.md#shell)
- [shortName](types.IDiscoveryResult.md#shortname)
- [tools](types.IDiscoveryResult.md#tools)

## Properties

### environment

• `Optional` **environment**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:22

___

### executable

• `Optional` **executable**: `string`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:29

___

### extensionPath

• `Optional` **extensionPath**: `string`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:32

___

### hidden

• `Optional` **hidden**: `boolean`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:24

___

### id

• `Optional` **id**: `string`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:26

___

### logo

• `Optional` **logo**: `string`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:31

___

### mergeMods

• `Optional` **mergeMods**: `boolean`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:33

___

### name

• `Optional` **name**: `string`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:27

___

### parameters

• `Optional` **parameters**: `string`[]

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:30

___

### path

• `Optional` **path**: `string`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:17

___

### pathSetManually

• `Optional` **pathSetManually**: `boolean`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:18

___

### shell

• `Optional` **shell**: `boolean`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:34

___

### shortName

• `Optional` **shortName**: `string`

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:28

___

### tools

• `Optional` **tools**: `Object`

#### Index signature

▪ [id: `string`]: [`IDiscoveredTool`](types.IDiscoveredTool.md)

#### Defined in

../src/extensions/gamemode_management/types/IDiscoveryResult.ts:19
