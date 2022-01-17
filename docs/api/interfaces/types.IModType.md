[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IModType

# Interface: IModType

[types](../modules/types.md).IModType

## Table of contents

### Properties

- [options](types.IModType.md#options)
- [priority](types.IModType.md#priority)
- [typeId](types.IModType.md#typeid)

### Methods

- [getPath](types.IModType.md#getpath)
- [isSupported](types.IModType.md#issupported)
- [test](types.IModType.md#test)

## Properties

### options

• **options**: [`IModTypeOptions`](types.IModTypeOptions.md)

#### Defined in

../src/extensions/gamemode_management/types/IModType.ts:12

___

### priority

• **priority**: `number`

#### Defined in

../src/extensions/gamemode_management/types/IModType.ts:8

___

### typeId

• **typeId**: `string`

#### Defined in

../src/extensions/gamemode_management/types/IModType.ts:7

## Methods

### getPath

▸ **getPath**(`game`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `game` | [`IGame`](types.IGame.md) |

#### Returns

`string`

#### Defined in

../src/extensions/gamemode_management/types/IModType.ts:10

___

### isSupported

▸ **isSupported**(`gameId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |

#### Returns

`boolean`

#### Defined in

../src/extensions/gamemode_management/types/IModType.ts:9

___

### test

▸ **test**(`installInstructions`): [`Promise`](../classes/Promise.md)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `installInstructions` | [`IInstruction`](types.IInstruction.md)[] |

#### Returns

[`Promise`](../classes/Promise.md)<`boolean`\>

#### Defined in

../src/extensions/gamemode_management/types/IModType.ts:11
