[vortex_devel](../README.md) / [Exports](../modules.md) / selectors

# Namespace: selectors

## Table of contents

### Variables

- [activatorForGame](selectors.md#activatorforgame)
- [activeDownloads](selectors.md#activedownloads)
- [currentActivator](selectors.md#currentactivator)
- [currentGame](selectors.md#currentgame)
- [discoveryByGame](selectors.md#discoverybygame)
- [downloadPath](selectors.md#downloadpath)
- [downloadPathForGame](selectors.md#downloadpathforgame)
- [gameById](selectors.md#gamebyid)
- [gameProfiles](selectors.md#gameprofiles)
- [installPath](selectors.md#installpath)
- [installPathForGame](selectors.md#installpathforgame)
- [lastActiveProfileForGame](selectors.md#lastactiveprofileforgame)
- [modPathsForGame](selectors.md#modpathsforgame)
- [needToDeploy](selectors.md#needtodeploy)
- [needToDeployForGame](selectors.md#needtodeployforgame)
- [profileById](selectors.md#profilebyid)

### Functions

- [activeGameId](selectors.md#activegameid)
- [activeProfile](selectors.md#activeprofile)
- [currentGameDiscovery](selectors.md#currentgamediscovery)
- [gameName](selectors.md#gamename)
- [knownGames](selectors.md#knowngames)

## Variables

### activatorForGame

• **activatorForGame**: `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `string`\> & { `dependencies`: [`ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, { [gameId: string]: `string`;  }\>, `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `string`\>] ; `resultFunc`: (`res1`: { [gameId: string]: `string`;  }, `res2`: `string`) => `string` ; `recomputations`: () => `number` ; `resetRecomputations`: () => `number`  } & { `cache`: `ICacheObject` ; `keySelector`: `ParametricKeySelector`<[`IState`](../interfaces/types.IState.md), `string`\> ; `clearCache`: () => `void` ; `getMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `OutputParametricSelector`<`S`, `P`, `R`, `C`, `D`\> ; `removeMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `void`  }

#### Defined in

../src/extensions/mod_management/selectors.ts:43

___

### activeDownloads

• **activeDownloads**: `OutputSelector`<[`IState`](../interfaces/types.IState.md), {}, (`res`: { [dlId: string]: [`IDownload`](../interfaces/types.IDownload.md);  }) => {}\>

#### Defined in

../src/extensions/download_management/selectors.ts:26

___

### currentActivator

• **currentActivator**: `OutputSelector`<`any`, `string`, (`res1`: { [gameId: string]: `string`;  }, `res2`: `string`) => `string`\>

#### Defined in

../src/extensions/mod_management/selectors.ts:38

___

### currentGame

• **currentGame**: `OutputSelector`<`any`, [`IGameStored`](../interfaces/types.IGameStored.md), (`res1`: [`IGameStored`](../interfaces/types.IGameStored.md)[], `res2`: `string`) => [`IGameStored`](../interfaces/types.IGameStored.md)\>

#### Defined in

../src/extensions/gamemode_management/selectors.ts:21

___

### discoveryByGame

• **discoveryByGame**: `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, [`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md)\> & { `dependencies`: [`ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, { [id: string]: [`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md);  }\>, `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `string`\>] ; `resultFunc`: (`res1`: { [id: string]: [`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md);  }, `res2`: `string`) => [`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md) ; `recomputations`: () => `number` ; `resetRecomputations`: () => `number`  } & { `cache`: `ICacheObject` ; `keySelector`: `ParametricKeySelector`<[`IState`](../interfaces/types.IState.md), `string`\> ; `clearCache`: () => `void` ; `getMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `OutputParametricSelector`<`S`, `P`, `R`, `C`, `D`\> ; `removeMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `void`  }

#### Defined in

../src/extensions/gamemode_management/selectors.ts:42

___

### downloadPath

• **downloadPath**: `OutputSelector`<`any`, `string`, `DLPathCB`\>

#### Defined in

../src/extensions/download_management/selectors.ts:14

___

### downloadPathForGame

• **downloadPathForGame**: `OutputParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `string`, `DLPathCB`, `any`\>

#### Defined in

../src/extensions/download_management/selectors.ts:18

___

### gameById

• **gameById**: `ParametricSelector`<`any`, `string`, [`IGameStored`](../interfaces/types.IGameStored.md)\> & { `dependencies`: [`ParametricSelector`<`any`, `string`, [`IGameStored`](../interfaces/types.IGameStored.md)[]\>, `ParametricSelector`<`any`, `string`, `string`\>] ; `resultFunc`: (`res1`: [`IGameStored`](../interfaces/types.IGameStored.md)[], `res2`: `string`) => [`IGameStored`](../interfaces/types.IGameStored.md) ; `recomputations`: () => `number` ; `resetRecomputations`: () => `number`  } & { `cache`: `ICacheObject` ; `keySelector`: `ParametricKeySelector`<`any`, `string`\> ; `clearCache`: () => `void` ; `getMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `OutputParametricSelector`<`S`, `P`, `R`, `C`, `D`\> ; `removeMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `void`  }

#### Defined in

../src/extensions/gamemode_management/selectors.ts:26

___

### gameProfiles

• **gameProfiles**: `OutputSelector`<`any`, [`IProfile`](../interfaces/types.IProfile.md)[], (`res1`: `string`, `res2`: { [id: string]: [`IProfile`](../interfaces/types.IProfile.md);  }) => [`IProfile`](../interfaces/types.IProfile.md)[]\>

#### Defined in

../src/extensions/profile_management/selectors.ts:19

___

### installPath

• **installPath**: `OutputSelector`<`any`, `string`, (`res1`: { [gameId: string]: `string`;  }, `res2`: `string`) => `string`\>

#### Defined in

../src/extensions/mod_management/selectors.ts:19

___

### installPathForGame

• **installPathForGame**: `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `string`\> & { `dependencies`: [`ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `string`\>, `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `string`\>] ; `resultFunc`: (`res1`: `string`, `res2`: `string`) => `string` ; `recomputations`: () => `number` ; `resetRecomputations`: () => `number`  } & { `cache`: `ICacheObject` ; `keySelector`: `ParametricKeySelector`<[`IState`](../interfaces/types.IState.md), `string`\> ; `clearCache`: () => `void` ; `getMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `OutputParametricSelector`<`S`, `P`, `R`, `C`, `D`\> ; `removeMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `void`  }

#### Defined in

../src/extensions/mod_management/selectors.ts:27

___

### lastActiveProfileForGame

• **lastActiveProfileForGame**: `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `string`\> & { `dependencies`: [`ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, { [gameId: string]: `string`;  }\>, `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `string`\>] ; `resultFunc`: (`res1`: { [gameId: string]: `string`;  }, `res2`: `string`) => `string` ; `recomputations`: () => `number` ; `resetRecomputations`: () => `number`  } & { `cache`: `ICacheObject` ; `keySelector`: `ParametricKeySelector`<[`IState`](../interfaces/types.IState.md), `string`\> ; `clearCache`: () => `void` ; `getMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `OutputParametricSelector`<`S`, `P`, `R`, `C`, `D`\> ; `removeMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `void`  }

#### Defined in

../src/extensions/profile_management/selectors.ts:38

___

### modPathsForGame

• **modPathsForGame**: `OutputParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, { [typeId: string]: `string`;  }, (`res1`: { [gameId: string]: [`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md);  }, `res2`: `string`) => { [typeId: string]: `string`;  }\>

#### Defined in

../src/extensions/mod_management/selectors.ts:74

___

### needToDeploy

• **needToDeploy**: `OutputSelector`<`any`, `boolean`, (`res1`: `INeedToDeployMap`, `res2`: `string`) => `boolean`\>

#### Defined in

../src/extensions/mod_management/selectors.ts:57

___

### needToDeployForGame

• **needToDeployForGame**: `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `boolean`\> & { `dependencies`: [`ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `INeedToDeployMap`\>, `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `string`\>] ; `resultFunc`: (`res1`: `INeedToDeployMap`, `res2`: `string`) => `boolean` ; `recomputations`: () => `number` ; `resetRecomputations`: () => `number`  } & { `cache`: `ICacheObject` ; `keySelector`: `ParametricKeySelector`<[`IState`](../interfaces/types.IState.md), `string`\> ; `clearCache`: () => `void` ; `getMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `OutputParametricSelector`<`S`, `P`, `R`, `C`, `D`\> ; `removeMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `void`  }

#### Defined in

../src/extensions/mod_management/selectors.ts:62

___

### profileById

• **profileById**: `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, [`IProfile`](../interfaces/types.IProfile.md)\> & { `dependencies`: [`ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, { [profileId: string]: [`IProfile`](../interfaces/types.IProfile.md);  }\>, `ParametricSelector`<[`IState`](../interfaces/types.IState.md), `string`, `string`\>] ; `resultFunc`: (`res1`: { [profileId: string]: [`IProfile`](../interfaces/types.IProfile.md);  }, `res2`: `string`) => [`IProfile`](../interfaces/types.IProfile.md) ; `recomputations`: () => `number` ; `resetRecomputations`: () => `number`  } & { `cache`: `ICacheObject` ; `keySelector`: `ParametricKeySelector`<[`IState`](../interfaces/types.IState.md), `string`\> ; `clearCache`: () => `void` ; `getMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `OutputParametricSelector`<`S`, `P`, `R`, `C`, `D`\> ; `removeMatchingSelector`: (`state`: `S`, `props`: `P`, ...`args`: `any`[]) => `void`  }

#### Defined in

../src/extensions/profile_management/selectors.ts:32

## Functions

### activeGameId

▸ `Const` **activeGameId**(`state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |

#### Returns

`string`

#### Defined in

../src/extensions/profile_management/selectors.ts:14

___

### activeProfile

▸ `Const` **activeProfile**(`state`): [`IProfile`](../interfaces/types.IProfile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |

#### Returns

[`IProfile`](../interfaces/types.IProfile.md)

#### Defined in

../src/extensions/profile_management/selectors.ts:27

___

### currentGameDiscovery

▸ **currentGameDiscovery**(`state`): [`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md)

return the discovery information about a game

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |

#### Returns

[`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md)

#### Defined in

../src/extensions/gamemode_management/selectors.ts:37

___

### gameName

▸ **gameName**(`state`, `gameId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |
| `gameId` | `string` |

#### Returns

`string`

#### Defined in

../src/extensions/gamemode_management/selectors.ts:48

___

### knownGames

▸ **knownGames**(`state`): [`IGameStored`](../interfaces/types.IGameStored.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |

#### Returns

[`IGameStored`](../interfaces/types.IGameStored.md)[]

#### Defined in

../src/extensions/gamemode_management/selectors.ts:13
