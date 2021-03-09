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

- [environment](types.idiscoveryresult.md#environment)
- [executable](types.idiscoveryresult.md#executable)
- [extensionPath](types.idiscoveryresult.md#extensionpath)
- [hidden](types.idiscoveryresult.md#hidden)
- [id](types.idiscoveryresult.md#id)
- [logo](types.idiscoveryresult.md#logo)
- [mergeMods](types.idiscoveryresult.md#mergemods)
- [name](types.idiscoveryresult.md#name)
- [parameters](types.idiscoveryresult.md#parameters)
- [path](types.idiscoveryresult.md#path)
- [pathSetManually](types.idiscoveryresult.md#pathsetmanually)
- [shell](types.idiscoveryresult.md#shell)
- [shortName](types.idiscoveryresult.md#shortname)
- [tools](types.idiscoveryresult.md#tools)

## Properties

### environment

• `Optional` **environment**: *object*

#### Type declaration:

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:22

___

### executable

• `Optional` **executable**: *string*

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:29

___

### extensionPath

• `Optional` **extensionPath**: *string*

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:32

___

### hidden

• `Optional` **hidden**: *boolean*

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:24

___

### id

• `Optional` **id**: *string*

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:26

___

### logo

• `Optional` **logo**: *string*

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:31

___

### mergeMods

• `Optional` **mergeMods**: *boolean*

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:33

___

### name

• `Optional` **name**: *string*

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:27

___

### parameters

• `Optional` **parameters**: *string*[]

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:30

___

### path

• `Optional` **path**: *string*

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:17

___

### pathSetManually

• `Optional` **pathSetManually**: *boolean*

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:18

___

### shell

• `Optional` **shell**: *boolean*

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:34

___

### shortName

• `Optional` **shortName**: *string*

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:28

___

### tools

• `Optional` **tools**: *object*

#### Type declaration:

Defined in: src/extensions/gamemode_management/types/IDiscoveryResult.ts:19
