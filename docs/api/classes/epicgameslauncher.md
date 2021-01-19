**[vortex_devel](../README.md)**

> [Globals](../globals.md) / EpicGamesLauncher

# Class: EpicGamesLauncher

Epic Store launcher seems to be holding game information inside
 .item manifest files which are stored inside the launchers Data folder
 "(C:\ProgramData\Epic\EpicGamesLauncher\Data\Manifests" by default

## Hierarchy

* **EpicGamesLauncher**

## Implements

* [IGameStore](../interfaces/igamestore.md)

## Index

### Constructors

* [constructor](epicgameslauncher.md#constructor)

### Properties

* [id](epicgameslauncher.md#id)
* [mCache](epicgameslauncher.md#mcache)
* [mDataPath](epicgameslauncher.md#mdatapath)
* [mLauncherExecPath](epicgameslauncher.md#mlauncherexecpath)

### Methods

* [allGames](epicgameslauncher.md#allgames)
* [executable](epicgameslauncher.md#executable)
* [findByAppId](epicgameslauncher.md#findbyappid)
* [findByName](epicgameslauncher.md#findbyname)
* [getGameStorePath](epicgameslauncher.md#getgamestorepath)
* [getPosixPath](epicgameslauncher.md#getposixpath)
* [isGameInstalled](epicgameslauncher.md#isgameinstalled)
* [launchGame](epicgameslauncher.md#launchgame)
* [launchGameStore](epicgameslauncher.md#launchgamestore)
* [parseManifests](epicgameslauncher.md#parsemanifests)
* [queryPath](epicgameslauncher.md#querypath)
* [reloadGames](epicgameslauncher.md#reloadgames)

## Constructors

### constructor

\+ **new EpicGamesLauncher**(): [EpicGamesLauncher](epicgameslauncher.md)

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:25*

**Returns:** [EpicGamesLauncher](epicgameslauncher.md)

## Properties

### id

•  **id**: string

*Implementation of [IGameStore](../interfaces/igamestore.md).[id](../interfaces/igamestore.md#id)*

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:22*

___

### mCache

• `Private` **mCache**: Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)[]>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:25*

___

### mDataPath

• `Private` **mDataPath**: Promise\<string>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:23*

___

### mLauncherExecPath

• `Private` **mLauncherExecPath**: string

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:24*

## Methods

### allGames

▸ **allGames**(): Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)[]>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:107*

**Returns:** Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)[]>

___

### executable

▸ `Private`**executable**(): \"EpicGamesLauncher.exe\" \| \"EpicGamesLauncher\"

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:141*

**Returns:** \"EpicGamesLauncher.exe\" \| \"EpicGamesLauncher\"

___

### findByAppId

▸ **findByAppId**(`appId`: string \| string[]): Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:80*

#### Parameters:

Name | Type |
------ | ------ |
`appId` | string \| string[] |

**Returns:** Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)>

___

### findByName

▸ **findByName**(`name`: string): Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:98*

Try to find the epic entry object using Epic's internal naming convention.
 e.g. "Flour" === "Untitled Goose Game" lol

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string |   |

**Returns:** Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)>

___

### getGameStorePath

▸ **getGameStorePath**(): Promise\<string>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:121*

**Returns:** Promise\<string>

___

### getPosixPath

▸ **getPosixPath**(`name`: any): Bluebird\<string>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:59*

#### Parameters:

Name | Type |
------ | ------ |
`name` | any |

**Returns:** Bluebird\<string>

___

### isGameInstalled

▸ **isGameInstalled**(`name`: string): Promise\<boolean>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:73*

test if a game is installed through the launcher.
Please keep in mind that epic seems to internally give third-party games animal names. Kinky.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string |   |

**Returns:** Promise\<boolean>

___

### launchGame

▸ **launchGame**(`appInfo`: any, `api?`: [IExtensionApi](../interfaces/iextensionapi.md)): Promise\<void>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:46*

#### Parameters:

Name | Type |
------ | ------ |
`appInfo` | any |
`api?` | [IExtensionApi](../interfaces/iextensionapi.md) |

**Returns:** Promise\<void>

___

### launchGameStore

▸ **launchGameStore**(`api`: [IExtensionApi](../interfaces/iextensionapi.md), `parameters?`: string[]): Promise\<void>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:54*

#### Parameters:

Name | Type |
------ | ------ |
`api` | [IExtensionApi](../interfaces/iextensionapi.md) |
`parameters?` | string[] |

**Returns:** Promise\<void>

___

### parseManifests

▸ `Private`**parseManifests**(): Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)[]>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:149*

**Returns:** Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)[]>

___

### queryPath

▸ **queryPath**(): Bluebird\<string>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:64*

**Returns:** Bluebird\<string>

___

### reloadGames

▸ **reloadGames**(): Promise\<void>

*Defined in Work/vortex/src/util/EpicGamesLauncher.ts:114*

**Returns:** Promise\<void>
