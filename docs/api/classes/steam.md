**[vortex_devel](../README.md)**

> [Globals](../globals.md) / Steam

# Class: Steam

base class to interact with local steam installation

## Hierarchy

* **Steam**

## Implements

* [IGameStore](../interfaces/igamestore.md)

## Index

### Constructors

* [constructor](steam.md#constructor)

### Properties

* [id](steam.md#id)
* [mBaseFolder](steam.md#mbasefolder)
* [mCache](steam.md#mcache)
* [GameNotFound](steam.md#gamenotfound)

### Methods

* [allGames](steam.md#allgames)
* [findByAppId](steam.md#findbyappid)
* [findByName](steam.md#findbyname)
* [getExecInfo](steam.md#getexecinfo)
* [getGameStorePath](steam.md#getgamestorepath)
* [getPosixPath](steam.md#getposixpath)
* [isCustomExecObject](steam.md#iscustomexecobject)
* [launchGame](steam.md#launchgame)
* [parseManifests](steam.md#parsemanifests)
* [reloadGames](steam.md#reloadgames)

## Constructors

### constructor

\+ **new Steam**(): [Steam](steam.md)

*Defined in Work/vortex/src/util/Steam.ts:46*

**Returns:** [Steam](steam.md)

## Properties

### id

•  **id**: string

*Implementation of [IGameStore](../interfaces/igamestore.md).[id](../interfaces/igamestore.md#id)*

*Defined in Work/vortex/src/util/Steam.ts:44*

___

### mBaseFolder

• `Private` **mBaseFolder**: Promise\<string>

*Defined in Work/vortex/src/util/Steam.ts:45*

___

### mCache

• `Private` **mCache**: Promise\<[ISteamEntry](../interfaces/isteamentry.md)[]>

*Defined in Work/vortex/src/util/Steam.ts:46*

___

### GameNotFound

▪ `Static` **GameNotFound**: [GameNotFound](gamenotfound.md) = GameNotFound

*Defined in Work/vortex/src/util/Steam.ts:43*

## Methods

### allGames

▸ **allGames**(): Promise\<[ISteamEntry](../interfaces/isteamentry.md)[]>

*Defined in Work/vortex/src/util/Steam.ts:165*

**Returns:** Promise\<[ISteamEntry](../interfaces/isteamentry.md)[]>

___

### findByAppId

▸ **findByAppId**(`appId`: string \| string[]): Promise\<[ISteamEntry](../interfaces/isteamentry.md)>

*Defined in Work/vortex/src/util/Steam.ts:147*

find the first game with the specified appid or one of the specified appids

#### Parameters:

Name | Type |
------ | ------ |
`appId` | string \| string[] |

**Returns:** Promise\<[ISteamEntry](../interfaces/isteamentry.md)>

___

### findByName

▸ **findByName**(`namePattern`: string): Promise\<[ISteamEntry](../interfaces/isteamentry.md)>

*Defined in Work/vortex/src/util/Steam.ts:68*

find the first game that matches the specified name pattern

#### Parameters:

Name | Type |
------ | ------ |
`namePattern` | string |

**Returns:** Promise\<[ISteamEntry](../interfaces/isteamentry.md)>

___

### getExecInfo

▸ **getExecInfo**(`appInfo`: any): Promise\<[IExecInfo](../interfaces/iexecinfo.md)>

*Defined in Work/vortex/src/util/Steam.ts:108*

#### Parameters:

Name | Type |
------ | ------ |
`appInfo` | any |

**Returns:** Promise\<[IExecInfo](../interfaces/iexecinfo.md)>

___

### getGameStorePath

▸ **getGameStorePath**(): Bluebird\<string>

*Defined in Work/vortex/src/util/Steam.ts:172*

**Returns:** Bluebird\<string>

___

### getPosixPath

▸ **getPosixPath**(`appInfo`: any): Bluebird\<string>

*Defined in Work/vortex/src/util/Steam.ts:103*

#### Parameters:

Name | Type |
------ | ------ |
`appInfo` | any |

**Returns:** Bluebird\<string>

___

### isCustomExecObject

▸ `Private`**isCustomExecObject**(`object`: any): object is ICustomExecutionInfo

*Defined in Work/vortex/src/util/Steam.ts:183*

#### Parameters:

Name | Type |
------ | ------ |
`object` | any |

**Returns:** object is ICustomExecutionInfo

___

### launchGame

▸ **launchGame**(`appInfo`: any, `api?`: [IExtensionApi](../interfaces/iextensionapi.md)): Promise\<void>

*Defined in Work/vortex/src/util/Steam.ts:81*

#### Parameters:

Name | Type |
------ | ------ |
`appInfo` | any |
`api?` | [IExtensionApi](../interfaces/iextensionapi.md) |

**Returns:** Promise\<void>

___

### parseManifests

▸ `Private`**parseManifests**(): Promise\<[ISteamEntry](../interfaces/isteamentry.md)[]>

*Defined in Work/vortex/src/util/Steam.ts:190*

**Returns:** Promise\<[ISteamEntry](../interfaces/isteamentry.md)[]>

___

### reloadGames

▸ **reloadGames**(): Promise\<void>

*Defined in Work/vortex/src/util/Steam.ts:176*

**Returns:** Promise\<void>
