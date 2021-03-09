[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IModType

# Interface: IModType

[types](../modules/types.md).IModType

## Table of contents

### Properties

- [getPath](types.imodtype.md#getpath)
- [isSupported](types.imodtype.md#issupported)
- [options](types.imodtype.md#options)
- [priority](types.imodtype.md#priority)
- [test](types.imodtype.md#test)
- [typeId](types.imodtype.md#typeid)

## Properties

### getPath

• **getPath**: (`game`: [*IGame*](types.igame.md)) => *string*

#### Type declaration:

▸ (`game`: [*IGame*](types.igame.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`game` | [*IGame*](types.igame.md) |

**Returns:** *string*

Defined in: src/extensions/gamemode_management/types/IModType.ts:10

Defined in: src/extensions/gamemode_management/types/IModType.ts:10

___

### isSupported

• **isSupported**: (`gameId`: *string*) => *boolean*

#### Type declaration:

▸ (`gameId`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`gameId` | *string* |

**Returns:** *boolean*

Defined in: src/extensions/gamemode_management/types/IModType.ts:9

Defined in: src/extensions/gamemode_management/types/IModType.ts:9

___

### options

• **options**: [*IModTypeOptions*](types.imodtypeoptions.md)

Defined in: src/extensions/gamemode_management/types/IModType.ts:12

___

### priority

• **priority**: *number*

Defined in: src/extensions/gamemode_management/types/IModType.ts:8

___

### test

• **test**: (`installInstructions`: [*IInstruction*](types.iinstruction.md)[]) => [*Promise*](../classes/promise.md)<boolean\>

#### Type declaration:

▸ (`installInstructions`: [*IInstruction*](types.iinstruction.md)[]): [*Promise*](../classes/promise.md)<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`installInstructions` | [*IInstruction*](types.iinstruction.md)[] |

**Returns:** [*Promise*](../classes/promise.md)<boolean\>

Defined in: src/extensions/gamemode_management/types/IModType.ts:11

Defined in: src/extensions/gamemode_management/types/IModType.ts:11

___

### typeId

• **typeId**: *string*

Defined in: src/extensions/gamemode_management/types/IModType.ts:7
