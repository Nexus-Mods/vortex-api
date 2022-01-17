[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IGameStore

# Interface: IGameStore

[types](../modules/types.md).IGameStore

interface for game store launcher extensions

**`interface`** IGameStore

## Table of contents

### Properties

- [id](types.IGameStore.md#id)

### Methods

- [allGames](types.IGameStore.md#allgames)
- [findByAppId](types.IGameStore.md#findbyappid)
- [findByName](types.IGameStore.md#findbyname)
- [getExecInfo](types.IGameStore.md#getexecinfo)
- [getGameStorePath](types.IGameStore.md#getgamestorepath)
- [getPosixPath](types.IGameStore.md#getposixpath)
- [isGameInstalled](types.IGameStore.md#isgameinstalled)
- [isGameStoreInstalled](types.IGameStore.md#isgamestoreinstalled)
- [launchGame](types.IGameStore.md#launchgame)
- [launchGameStore](types.IGameStore.md#launchgamestore)
- [reloadGames](types.IGameStore.md#reloadgames)

## Properties

### id

• **id**: `string`

This launcher's id.

#### Defined in

../src/types/IGameStore.ts:75

## Methods

### allGames

▸ **allGames**(): [`Promise`](../classes/Promise.md)<[`IGameStoreEntry`](types.IGameStoreEntry.md)[]\>

Returns all recognized/installed games which are currently
 installed with this game store/launcher. Please note that
 the game entries should be cached to avoid running a potentially
 resource intensive operation for each game the user attempts to
 manage.

#### Returns

[`Promise`](../classes/Promise.md)<[`IGameStoreEntry`](types.IGameStoreEntry.md)[]\>

#### Defined in

../src/types/IGameStore.ts:84

___

### findByAppId

▸ **findByAppId**(`appId`): [`Promise`](../classes/Promise.md)<[`IGameStoreEntry`](types.IGameStoreEntry.md)\>

Attempt to find a game entry using its game store Id/Ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` \| `string`[] | of the game entry. This is obviously game store specific. |

#### Returns

[`Promise`](../classes/Promise.md)<[`IGameStoreEntry`](types.IGameStoreEntry.md)\>

#### Defined in

../src/types/IGameStore.ts:91

___

### findByName

▸ **findByName**(`appName`): [`Promise`](../classes/Promise.md)<[`IGameStoreEntry`](types.IGameStoreEntry.md)\>

Attempt to find a game store entry using the game's name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appName` | `string` | the game name which the game store uses to identify this game. |

#### Returns

[`Promise`](../classes/Promise.md)<[`IGameStoreEntry`](types.IGameStoreEntry.md)\>

#### Defined in

../src/types/IGameStore.ts:98

___

### getExecInfo

▸ `Optional` **getExecInfo**(`appId`): [`Promise`](../classes/Promise.md)<[`IExecInfo`](types.IExecInfo.md)\>

Game store may support command line arguments when launching the game.
 Function will return the path to the game store's executable and any required
 arguments to launch the game.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `any` | Whatever the game store uses to identify a game. |

#### Returns

[`Promise`](../classes/Promise.md)<[`IExecInfo`](types.IExecInfo.md)\>

#### Defined in

../src/types/IGameStore.ts:155

___

### getGameStorePath

▸ **getGameStorePath**(): [`Promise`](../classes/Promise.md)<`string`\>

Returns the full path to the launcher's executable.
 As of 1.4, this function is no longer optional - gamestores
 such as the Xbox app which do not have a stat-able store path
 should return Promise.resolve(undefined) and define the
 "isGameStoreInstalled" function so that the game store helper
 is able to confirm that the gamestore is installed on the user's PC

#### Returns

[`Promise`](../classes/Promise.md)<`string`\>

#### Defined in

../src/types/IGameStore.ts:108

___

### getPosixPath

▸ `Optional` **getPosixPath**(`name`): [`Promise`](../classes/Promise.md)<`string`\>

Some launchers may support Posix paths when attempting to launch a
 game, if set, the launcher will be expected to generate a valid
 posix path which Vortex can use to start the game.

Please note that Vortex will not be able to tell if the game
 actually launched successfully when using Posix Paths; reason
 why this should only be used as a last resort.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | of the game we want the posix path for. |

#### Returns

[`Promise`](../classes/Promise.md)<`string`\>

#### Defined in

../src/types/IGameStore.ts:146

___

### isGameInstalled

▸ `Optional` **isGameInstalled**(`name`): [`Promise`](../classes/Promise.md)<`boolean`\>

Determine whether the game has been installed by this game store launcher.
 returns true if the game store installed this game, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | of the game we're looking for. |

#### Returns

[`Promise`](../classes/Promise.md)<`boolean`\>

#### Defined in

../src/types/IGameStore.ts:123

___

### isGameStoreInstalled

▸ `Optional` **isGameStoreInstalled**(): [`Promise`](../classes/Promise.md)<`boolean`\>

In most cases the game store helper is fully capable of determining
 whether a gamestore is installed by stat-ing the store's executable.

However, gamestores such as the Xbox store which do not have a stat-able
 executable path MUST provide this function so that the game store helper
 can confirm that the store is installed correctly!

#### Returns

[`Promise`](../classes/Promise.md)<`boolean`\>

#### Defined in

../src/types/IGameStore.ts:133

___

### launchGame

▸ **launchGame**(`appId`, `api?`): [`Promise`](../classes/Promise.md)<`void`\>

Launches the game using this game launcher.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `any` | whatever the game store uses to identify a game. |
| `api?` | [`IExtensionApi`](types.IExtensionApi.md) | gives access to API functions if needed. |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IGameStore.ts:115

___

### launchGameStore

▸ `Optional` **launchGameStore**(`api`, `parameters?`): [`Promise`](../classes/Promise.md)<`void`\>

Generally the game store helper should be able to launch games directly.
 This functor allows game stores to define their own custom start up logic
 if needed. e.g. gamestore-xbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`IExtensionApi`](types.IExtensionApi.md) |
| `parameters?` | `string`[] |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IGameStore.ts:162

___

### reloadGames

▸ `Optional` **reloadGames**(): [`Promise`](../classes/Promise.md)<`void`\>

Allows game stores to provide functionality to reload/refresh their
 game entries. This is potentially a resource intensive operation and
 should not be called unless it is vital to do so.

The game store helper is configured to call this function for all known
 game stores when a discovery scan is initiated.

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IGameStore.ts:172
