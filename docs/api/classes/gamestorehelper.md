**[vortex_devel](../README.md)**

> [Globals](../globals.md) / GameStoreHelper

# Class: GameStoreHelper

## Hierarchy

* **GameStoreHelper**

## Index

### Properties

* [mStores](gamestorehelper.md#mstores)

### Methods

* [findByAppId](gamestorehelper.md#findbyappid)
* [findByName](gamestorehelper.md#findbyname)
* [findGameEntry](gamestorehelper.md#findgameentry)
* [getGameStore](gamestorehelper.md#getgamestore)
* [getstores](gamestorehelper.md#getstores)
* [isGameInstalled](gamestorehelper.md#isgameinstalled)
* [isStoreRunning](gamestorehelper.md#isstorerunning)
* [launchGameStore](gamestorehelper.md#launchgamestore)
* [reloadGames](gamestorehelper.md#reloadgames)

## Properties

### mStores

• `Private` **mStores**: [IGameStore](../interfaces/igamestore.md)[]

*Defined in Work/vortex/src/util/GameStoreHelper.ts:19*

## Methods

### findByAppId

▸ **findByAppId**(`appId`: string \| string[], `storeId?`: string): Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)>

*Defined in Work/vortex/src/util/GameStoreHelper.ts:53*

#### Parameters:

Name | Type |
------ | ------ |
`appId` | string \| string[] |
`storeId?` | string |

**Returns:** Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)>

___

### findByName

▸ **findByName**(`name`: string \| string[], `storeId?`: string): Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)>

*Defined in Work/vortex/src/util/GameStoreHelper.ts:49*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string \| string[] |
`storeId?` | string |

**Returns:** Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)>

___

### findGameEntry

▸ `Private`**findGameEntry**(`searchType`: [SearchType](../globals.md#searchtype), `pattern`: string \| string[], `storeId?`: string): Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)>

*Defined in Work/vortex/src/util/GameStoreHelper.ts:166*

Returns a store entry for a specified pattern.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`searchType` | [SearchType](../globals.md#searchtype) | dictates which functor we execute. |
`pattern` | string \| string[] | the pattern we're looking for. |
`storeId?` | string | optional parameter used when trying to query a specific store.  |

**Returns:** Promise\<[IGameStoreEntry](../interfaces/igamestoreentry.md)>

___

### getGameStore

▸ **getGameStore**(`storeId`: string): [IGameStore](../interfaces/igamestore.md)

*Defined in Work/vortex/src/util/GameStoreHelper.ts:22*

#### Parameters:

Name | Type |
------ | ------ |
`storeId` | string |

**Returns:** [IGameStore](../interfaces/igamestore.md)

___

### getstores

▸ `Private`**getstores**(): [IGameStore](../interfaces/igamestore.md)[]

*Defined in Work/vortex/src/util/GameStoreHelper.ts:145*

**Returns:** [IGameStore](../interfaces/igamestore.md)[]

___

### isGameInstalled

▸ **isGameInstalled**(`id`: string, `storeId?`: string): Promise\<string>

*Defined in Work/vortex/src/util/GameStoreHelper.ts:41*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |
`storeId?` | string |

**Returns:** Promise\<string>

___

### isStoreRunning

▸ `Private`**isStoreRunning**(`storeExecPath`: string): boolean

*Defined in Work/vortex/src/util/GameStoreHelper.ts:138*

#### Parameters:

Name | Type |
------ | ------ |
`storeExecPath` | string |

**Returns:** boolean

___

### launchGameStore

▸ **launchGameStore**(`api`: [IExtensionApi](../interfaces/iextensionapi.md), `gameStoreId`: string, `parameters?`: string[], `askConsent?`: boolean): Promise\<void>

*Defined in Work/vortex/src/util/GameStoreHelper.ts:57*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`api` | [IExtensionApi](../interfaces/iextensionapi.md) | - |
`gameStoreId` | string | - |
`parameters?` | string[] | - |
`askConsent` | boolean | false |

**Returns:** Promise\<void>

___

### reloadGames

▸ **reloadGames**(): Promise\<void>

*Defined in Work/vortex/src/util/GameStoreHelper.ts:120*

**Returns:** Promise\<void>
