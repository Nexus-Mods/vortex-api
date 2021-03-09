[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IGameStore

# Interface: IGameStore

[types](../modules/types.md).IGameStore

interface for game store launcher extensions

**`interface`** IGameStore

## Table of contents

### Properties

- [allGames](types.igamestore.md#allgames)
- [findByAppId](types.igamestore.md#findbyappid)
- [findByName](types.igamestore.md#findbyname)
- [getExecInfo](types.igamestore.md#getexecinfo)
- [getGameStorePath](types.igamestore.md#getgamestorepath)
- [getPosixPath](types.igamestore.md#getposixpath)
- [id](types.igamestore.md#id)
- [isGameInstalled](types.igamestore.md#isgameinstalled)
- [isGameStoreInstalled](types.igamestore.md#isgamestoreinstalled)
- [launchGame](types.igamestore.md#launchgame)
- [launchGameStore](types.igamestore.md#launchgamestore)
- [reloadGames](types.igamestore.md#reloadgames)

## Properties

### allGames

• **allGames**: () => [*Promise*](../classes/promise.md)<[*IGameStoreEntry*](types.igamestoreentry.md)[]\>

Returns all recognized/installed games which are currently
 installed with this game store/launcher. Please note that
 the game entries should be cached to avoid running a potentially
 resource intensive operation for each game the user attempts to
 manage.

#### Type declaration:

▸ (): [*Promise*](../classes/promise.md)<[*IGameStoreEntry*](types.igamestoreentry.md)[]\>

**Returns:** [*Promise*](../classes/promise.md)<[*IGameStoreEntry*](types.igamestoreentry.md)[]\>

Defined in: src/types/IGameStore.ts:84

Defined in: src/types/IGameStore.ts:84

___

### findByAppId

• **findByAppId**: (`appId`: *string* \| *string*[]) => [*Promise*](../classes/promise.md)<[*IGameStoreEntry*](types.igamestoreentry.md)\>

Attempt to find a game entry using its game store Id/Ids.

**`param`** of the game entry. This is obviously game store specific.

#### Type declaration:

▸ (`appId`: *string* \| *string*[]): [*Promise*](../classes/promise.md)<[*IGameStoreEntry*](types.igamestoreentry.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`appId` | *string* \| *string*[] |

**Returns:** [*Promise*](../classes/promise.md)<[*IGameStoreEntry*](types.igamestoreentry.md)\>

Defined in: src/types/IGameStore.ts:91

Defined in: src/types/IGameStore.ts:91

___

### findByName

• **findByName**: (`appName`: *string*) => [*Promise*](../classes/promise.md)<[*IGameStoreEntry*](types.igamestoreentry.md)\>

Attempt to find a game store entry using the game's name.

**`param`** the game name which the game store uses to identify this game.

#### Type declaration:

▸ (`appName`: *string*): [*Promise*](../classes/promise.md)<[*IGameStoreEntry*](types.igamestoreentry.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`appName` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<[*IGameStoreEntry*](types.igamestoreentry.md)\>

Defined in: src/types/IGameStore.ts:98

Defined in: src/types/IGameStore.ts:98

___

### getExecInfo

• `Optional` **getExecInfo**: (`appId`: *any*) => [*Promise*](../classes/promise.md)<[*IExecInfo*](types.iexecinfo.md)\>

Game store may support command line arguments when launching the game.
 Function will return the path to the game store's executable and any required
 arguments to launch the game.

**`param`** Whatever the game store uses to identify a game.

#### Type declaration:

▸ (`appId`: *any*): [*Promise*](../classes/promise.md)<[*IExecInfo*](types.iexecinfo.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`appId` | *any* |

**Returns:** [*Promise*](../classes/promise.md)<[*IExecInfo*](types.iexecinfo.md)\>

Defined in: src/types/IGameStore.ts:155

Defined in: src/types/IGameStore.ts:155

___

### getGameStorePath

• **getGameStorePath**: () => [*Promise*](../classes/promise.md)<string\>

Returns the full path to the launcher's executable.
 As of 1.4, this function is no longer optional - gamestores
 such as the Xbox app which do not have a stat-able store path
 should return Promise.resolve(undefined) and define the
 "isGameStoreInstalled" function so that the game store helper
 is able to confirm that the gamestore is installed on the user's PC

#### Type declaration:

▸ (): [*Promise*](../classes/promise.md)<string\>

**Returns:** [*Promise*](../classes/promise.md)<string\>

Defined in: src/types/IGameStore.ts:108

Defined in: src/types/IGameStore.ts:108

___

### getPosixPath

• `Optional` **getPosixPath**: (`name`: *string*) => [*Promise*](../classes/promise.md)<string\>

Some launchers may support Posix paths when attempting to launch a
 game, if set, the launcher will be expected to generate a valid
 posix path which Vortex can use to start the game.

Please note that Vortex will not be able to tell if the game
 actually launched successfully when using Posix Paths; reason
 why this should only be used as a last resort.

**`param`** of the game we want the posix path for.

#### Type declaration:

▸ (`name`: *string*): [*Promise*](../classes/promise.md)<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<string\>

Defined in: src/types/IGameStore.ts:146

Defined in: src/types/IGameStore.ts:146

___

### id

• **id**: *string*

This launcher's id.

Defined in: src/types/IGameStore.ts:75

___

### isGameInstalled

• `Optional` **isGameInstalled**: (`name`: *string*) => [*Promise*](../classes/promise.md)<boolean\>

Determine whether the game has been installed by this game store launcher.
 returns true if the game store installed this game, false otherwise.

**`param`** of the game we're looking for.

#### Type declaration:

▸ (`name`: *string*): [*Promise*](../classes/promise.md)<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<boolean\>

Defined in: src/types/IGameStore.ts:123

Defined in: src/types/IGameStore.ts:123

___

### isGameStoreInstalled

• `Optional` **isGameStoreInstalled**: () => [*Promise*](../classes/promise.md)<boolean\>

In most cases the game store helper is fully capable of determining
 whether a gamestore is installed by stat-ing the store's executable.

However, gamestores such as the Xbox store which do not have a stat-able
 executable path MUST provide this function so that the game store helper
 can confirm that the store is installed correctly!

#### Type declaration:

▸ (): [*Promise*](../classes/promise.md)<boolean\>

**Returns:** [*Promise*](../classes/promise.md)<boolean\>

Defined in: src/types/IGameStore.ts:133

Defined in: src/types/IGameStore.ts:133

___

### launchGame

• **launchGame**: (`appId`: *any*, `api?`: [*IExtensionApi*](types.iextensionapi.md)) => [*Promise*](../classes/promise.md)<void\>

Launches the game using this game launcher.

**`param`** whatever the game store uses to identify a game.

**`param`** gives access to API functions if needed.

#### Type declaration:

▸ (`appId`: *any*, `api?`: [*IExtensionApi*](types.iextensionapi.md)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`appId` | *any* |
`api?` | [*IExtensionApi*](types.iextensionapi.md) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IGameStore.ts:115

Defined in: src/types/IGameStore.ts:115

___

### launchGameStore

• `Optional` **launchGameStore**: (`api`: [*IExtensionApi*](types.iextensionapi.md), `parameters?`: *string*[]) => [*Promise*](../classes/promise.md)<void\>

Generally the game store helper should be able to launch games directly.
 This functor allows game stores to define their own custom start up logic
 if needed. e.g. gamestore-xbox

#### Type declaration:

▸ (`api`: [*IExtensionApi*](types.iextensionapi.md), `parameters?`: *string*[]): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`api` | [*IExtensionApi*](types.iextensionapi.md) |
`parameters?` | *string*[] |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IGameStore.ts:162

Defined in: src/types/IGameStore.ts:162

___

### reloadGames

• `Optional` **reloadGames**: () => [*Promise*](../classes/promise.md)<void\>

Allows game stores to provide functionality to reload/refresh their
 game entries. This is potentially a resource intensive operation and
 should not be called unless it is vital to do so.

The game store helper is configured to call this function for all known
 game stores when a discovery scan is initiated.

#### Type declaration:

▸ (): [*Promise*](../classes/promise.md)<void\>

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IGameStore.ts:172

Defined in: src/types/IGameStore.ts:172
