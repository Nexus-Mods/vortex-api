**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IModType

# Interface: IModType

## Hierarchy

* **IModType**

## Index

### Properties

* [getPath](imodtype.md#getpath)
* [isSupported](imodtype.md#issupported)
* [options](imodtype.md#options)
* [priority](imodtype.md#priority)
* [test](imodtype.md#test)
* [typeId](imodtype.md#typeid)

## Properties

### getPath

•  **getPath**: (game: [IGame](igame.md)) => string

*Defined in Work/vortex/src/extensions/gamemode_management/types/IModType.ts:10*

___

### isSupported

•  **isSupported**: (gameId: string) => boolean

*Defined in Work/vortex/src/extensions/gamemode_management/types/IModType.ts:9*

___

### options

•  **options**: [IModTypeOptions](imodtypeoptions.md)

*Defined in Work/vortex/src/extensions/gamemode_management/types/IModType.ts:12*

___

### priority

•  **priority**: number

*Defined in Work/vortex/src/extensions/gamemode_management/types/IModType.ts:8*

___

### test

•  **test**: (installInstructions: [IInstruction](iinstruction.md)[]) => Promise\<boolean>

*Defined in Work/vortex/src/extensions/gamemode_management/types/IModType.ts:11*

___

### typeId

•  **typeId**: string

*Defined in Work/vortex/src/extensions/gamemode_management/types/IModType.ts:7*
