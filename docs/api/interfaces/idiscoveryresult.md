**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IDiscoveryResult

# Interface: IDiscoveryResult

describes parameters for the game set by the user
or discovered automatically.
There are essentially two blocks of fields here:
one is to identify the local installation of the game
the other to override defaults as provided by the
game extension. This is particularly relevant for
games added by the user.

**`export`** 

**`interface`** IDiscoveryResult

## Hierarchy

* **IDiscoveryResult**

## Index

### Properties

* [environment](idiscoveryresult.md#environment)
* [executable](idiscoveryresult.md#executable)
* [extensionPath](idiscoveryresult.md#extensionpath)
* [hidden](idiscoveryresult.md#hidden)
* [id](idiscoveryresult.md#id)
* [logo](idiscoveryresult.md#logo)
* [mergeMods](idiscoveryresult.md#mergemods)
* [name](idiscoveryresult.md#name)
* [parameters](idiscoveryresult.md#parameters)
* [path](idiscoveryresult.md#path)
* [pathSetManually](idiscoveryresult.md#pathsetmanually)
* [shell](idiscoveryresult.md#shell)
* [shortName](idiscoveryresult.md#shortname)
* [tools](idiscoveryresult.md#tools)

## Properties

### environment

• `Optional` **environment**: { [key:string]: string;  }

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:22*

___

### executable

• `Optional` **executable**: string

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:29*

___

### extensionPath

• `Optional` **extensionPath**: string

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:32*

___

### hidden

• `Optional` **hidden**: boolean

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:24*

___

### id

• `Optional` **id**: string

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:26*

___

### logo

• `Optional` **logo**: string

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:31*

___

### mergeMods

• `Optional` **mergeMods**: boolean

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:33*

___

### name

• `Optional` **name**: string

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:27*

___

### parameters

• `Optional` **parameters**: string[]

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:30*

___

### path

• `Optional` **path**: string

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:17*

___

### pathSetManually

• `Optional` **pathSetManually**: boolean

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:18*

___

### shell

• `Optional` **shell**: boolean

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:34*

___

### shortName

• `Optional` **shortName**: string

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:28*

___

### tools

• `Optional` **tools**: { [id:string]: [IDiscoveredTool](idiscoveredtool.md);  }

*Defined in Work/vortex/src/extensions/gamemode_management/types/IDiscoveryResult.ts:19*
