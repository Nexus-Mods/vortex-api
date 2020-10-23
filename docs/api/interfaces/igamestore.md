**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IGameStore

# Interface: IGameStore

interface for game store launcher extensions

**`interface`** IGameStore

## Hierarchy

* **IGameStore**

## Implemented by

* [EpicGamesLauncher](../classes/epicgameslauncher.md)
* [Steam](../classes/steam.md)

## Index

### Properties

* [allGames](igamestore.md#allgames)
* [findByAppId](igamestore.md#findbyappid)
* [findByName](igamestore.md#findbyname)
* [getExecInfo](igamestore.md#getexecinfo)
* [getGameStorePath](igamestore.md#getgamestorepath)
* [getPosixPath](igamestore.md#getposixpath)
* [id](igamestore.md#id)
* [isGameInstalled](igamestore.md#isgameinstalled)
* [launchGame](igamestore.md#launchgame)
* [launchGameStore](igamestore.md#launchgamestore)
* [reloadGames](igamestore.md#reloadgames)

## Properties

### allGames

•  **allGames**: () => Promise\<[IGameStoreEntry](igamestoreentry.md)[]>

*Defined in Work/vortex/src/types/IGameStore.ts:84*

Returns all recognized/installed games which are currently
 installed with this game store/launcher. Please note that
 the game entries should be cached to avoid running a potentially
 resource intensive operation for each game the user attempts to
 manage.

___

### findByAppId

•  **findByAppId**: (appId: string \| string[]) => Promise\<[IGameStoreEntry](igamestoreentry.md)>

*Defined in Work/vortex/src/types/IGameStore.ts:91*

Attempt to find a game entry using its game store Id/Ids.

**`param`** of the game entry. This is obviously game store specific.

___

### findByName

•  **findByName**: (appName: string) => Promise\<[IGameStoreEntry](igamestoreentry.md)>

*Defined in Work/vortex/src/types/IGameStore.ts:98*

Attempt to find a game store entry using the game's name.

**`param`** the game name which the game store uses to identify this game.

___

### getExecInfo

• `Optional` **getExecInfo**: (appId: any) => Promise\<[IExecInfo](iexecinfo.md)>

*Defined in Work/vortex/src/types/IGameStore.ts:128*

Game store may support command line arguments when launching the game.
 Function will return the path to the game store's executable and any required
 arguments to launch the game.

**`param`** Whatever the game store uses to identify a game.

___

### getGameStorePath

• `Optional` **getGameStorePath**: () => Promise\<string>

*Defined in Work/vortex/src/types/IGameStore.ts:140*

Returns the full path to the launcher's executable.

___

### getPosixPath

• `Optional` **getPosixPath**: (name: string) => Promise\<string>

*Defined in Work/vortex/src/types/IGameStore.ts:119*

Some launchers may support Posix paths when attempting to launch a
 game, if set, the launcher will be expected to generate a valid
 posix path which Vortex can use to start the game.

Please note that Vortex will not be able to tell if the game
 actually launched successfully when using Posix Paths; reason
 why this should only be used as a last resort.

**`param`** of the game we want the posix path for.

___

### id

•  **id**: string

*Defined in Work/vortex/src/types/IGameStore.ts:75*

This launcher's id.

___

### isGameInstalled

• `Optional` **isGameInstalled**: (name: string) => Promise\<boolean>

*Defined in Work/vortex/src/types/IGameStore.ts:106*

Determine whether the game has been installed by this game store launcher.
 returns true if the game store installed this game, false otherwise.

**`param`** of the game we're looking for.

___

### launchGame

•  **launchGame**: (appId: any, api?: [IExtensionApi](iextensionapi.md)) => Promise\<void>

*Defined in Work/vortex/src/types/IGameStore.ts:157*

Launches the game using this game launcher.

**`param`** whatever the game store uses to identify a game.

**`param`** gives access to API functions if needed.

___

### launchGameStore

• `Optional` **launchGameStore**: (api: [IExtensionApi](iextensionapi.md), parameters?: string[]) => Promise\<void>

*Defined in Work/vortex/src/types/IGameStore.ts:135*

Generally the game store helper should be able to launch games directly.
 This functor allows game stores to define their own custom start up logic
 if needed. e.g. gamestore-xbox

___

### reloadGames

• `Optional` **reloadGames**: () => Promise\<void>

*Defined in Work/vortex/src/types/IGameStore.ts:150*

Allows game stores to provide functionality to reload/refresh their
 game entries. This is potentially a resource intensive operation and
 should not be called unless it is vital to do so.

The game store helper is configured to call this function for all known
 game stores when a discovery scan is initiated.
