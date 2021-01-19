**[vortex_devel](../README.md)**

> [Globals](../globals.md) / GameModeManager

# Class: GameModeManager

discovers game modes

## Hierarchy

* **GameModeManager**

## Index

### Constructors

* [constructor](gamemodemanager.md#constructor)

### Properties

* [mActiveSearch](gamemodemanager.md#mactivesearch)
* [mKnownGameStores](gamemodemanager.md#mknowngamestores)
* [mKnownGames](gamemodemanager.md#mknowngames)
* [mOnGameModeActivated](gamemodemanager.md#mongamemodeactivated)
* [mStore](gamemodemanager.md#mstore)

### Accessors

* [gameStores](gamemodemanager.md#gamestores)
* [games](gamemodemanager.md#games)

### Methods

* [attachToStore](gamemodemanager.md#attachtostore)
* [ensureWritable](gamemodemanager.md#ensurewritable)
* [isSearching](gamemodemanager.md#issearching)
* [onDiscoveredGame](gamemodemanager.md#ondiscoveredgame)
* [onDiscoveredTool](gamemodemanager.md#ondiscoveredtool)
* [onError](gamemodemanager.md#onerror)
* [reloadStoreGames](gamemodemanager.md#reloadstoregames)
* [setGameMode](gamemodemanager.md#setgamemode)
* [setupGameMode](gamemodemanager.md#setupgamemode)
* [startQuickDiscovery](gamemodemanager.md#startquickdiscovery)
* [startSearchDiscovery](gamemodemanager.md#startsearchdiscovery)
* [stopSearchDiscovery](gamemodemanager.md#stopsearchdiscovery)
* [storeGame](gamemodemanager.md#storegame)
* [storeTool](gamemodemanager.md#storetool)

## Constructors

### constructor

\+ **new GameModeManager**(`extensionGames`: [IGame](../interfaces/igame.md)[], `gameStoreExtensions`: [IGameStore](../interfaces/igamestore.md)[], `onGameModeActivated`: (mode: string) => void): [GameModeManager](gamemodemanager.md)

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:46*

#### Parameters:

Name | Type |
------ | ------ |
`extensionGames` | [IGame](../interfaces/igame.md)[] |
`gameStoreExtensions` | [IGameStore](../interfaces/igamestore.md)[] |
`onGameModeActivated` | (mode: string) => void |

**Returns:** [GameModeManager](gamemodemanager.md)

## Properties

### mActiveSearch

• `Private` **mActiveSearch**: Promise\<void>

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:45*

___

### mKnownGameStores

• `Private` **mKnownGameStores**: [IGameStore](../interfaces/igamestore.md)[]

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:44*

___

### mKnownGames

• `Private` **mKnownGames**: [IGame](../interfaces/igame.md)[]

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:43*

___

### mOnGameModeActivated

• `Private` **mOnGameModeActivated**: (mode: string) => void

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:46*

___

### mStore

• `Private` **mStore**: [ThunkStore](../interfaces/thunkstore.md)\<[IState](../interfaces/istate.md)>

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:42*

## Accessors

### gameStores

• get **gameStores**(): [IGameStore](../interfaces/igamestore.md)[]

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:175*

**Returns:** [IGameStore](../interfaces/igamestore.md)[]

___

### games

• get **games**(): [IGame](../interfaces/igame.md)[]

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:171*

**Returns:** [IGame](../interfaces/igame.md)[]

## Methods

### attachToStore

▸ **attachToStore**(`store`: Store\<[IState](../interfaces/istate.md)>): void

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:65*

attach this manager to the specified store

**`memberof`** GameModeManager

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`store` | Store\<[IState](../interfaces/istate.md)> |   |

**Returns:** void

___

### ensureWritable

▸ `Private`**ensureWritable**(`modPath`: string): Promise\<void>

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:264*

#### Parameters:

Name | Type |
------ | ------ |
`modPath` | string |

**Returns:** Promise\<void>

___

### isSearching

▸ **isSearching**(): boolean

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:192*

**Returns:** boolean

___

### onDiscoveredGame

▸ `Private`**onDiscoveredGame**(`gameId`: string, `result`: [IDiscoveryResult](../interfaces/idiscoveryresult.md)): void

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:331*

#### Parameters:

Name | Type |
------ | ------ |
`gameId` | string |
`result` | [IDiscoveryResult](../interfaces/idiscoveryresult.md) |

**Returns:** void

___

### onDiscoveredTool

▸ `Private`**onDiscoveredTool**(`gameId`: string, `result`: [IDiscoveredTool](../interfaces/idiscoveredtool.md)): void

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:320*

#### Parameters:

Name | Type |
------ | ------ |
`gameId` | string |
`result` | [IDiscoveredTool](../interfaces/idiscoveredtool.md) |

**Returns:** void

___

### onError

▸ `Private`**onError**(`title`: string, `message`: string): void

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:335*

#### Parameters:

Name | Type |
------ | ------ |
`title` | string |
`message` | string |

**Returns:** void

___

### reloadStoreGames

▸ `Private`**reloadStoreGames**(): Bluebird\<void>

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:277*

**Returns:** Bluebird\<void>

___

### setGameMode

▸ **setGameMode**(`oldMode`: string, `newMode`: string, `profileId`: any): Promise\<void>

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:83*

update the game mode being managed

**`memberof`** GameModeManager

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`oldMode` | string | - |
`newMode` | string |   |
`profileId` | any | - |

**Returns:** Promise\<void>

___

### setupGameMode

▸ **setupGameMode**(`gameMode`: string): Promise\<void>

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:148*

prepare change to a different game mode

**`memberof`** GameModeManager

#### Parameters:

Name | Type |
------ | ------ |
`gameMode` | string |

**Returns:** Promise\<void>

___

### startQuickDiscovery

▸ **startQuickDiscovery**(): Bluebird\<string[]>

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:185*

starts game discovery, only using the search function from the game
extension

**`memberof`** GameModeManager

**Returns:** Bluebird\<string[]>

___

### startSearchDiscovery

▸ **startSearchDiscovery**(`searchPaths`: string[]): void

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:201*

start game discovery using known files

**`memberof`** GameModeManager

#### Parameters:

Name | Type |
------ | ------ |
`searchPaths` | string[] |

**Returns:** void

___

### stopSearchDiscovery

▸ **stopSearchDiscovery**(): void

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:256*

stop search discovery

**`memberof`** GameModeManager

**Returns:** void

___

### storeGame

▸ `Private`**storeGame**(`game`: [IGame](../interfaces/igame.md)): [IGameStored](../interfaces/igamestored.md)

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:281*

#### Parameters:

Name | Type |
------ | ------ |
`game` | [IGame](../interfaces/igame.md) |

**Returns:** [IGameStored](../interfaces/igamestored.md)

___

### storeTool

▸ `Private`**storeTool**(`tool`: [ITool](../interfaces/itool.md)): [IToolStored](../interfaces/itoolstored.md)

*Defined in Work/vortex/src/extensions/gamemode_management/GameModeManager.ts:302*

#### Parameters:

Name | Type |
------ | ------ |
`tool` | [ITool](../interfaces/itool.md) |

**Returns:** [IToolStored](../interfaces/itoolstored.md)
