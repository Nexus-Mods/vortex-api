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

• `Const` **activatorForGame**: *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\> & { `dependencies`: [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, { [gameId: string]: *string*;  }\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>] ; `recomputations`: () => *number* ; `resetRecomputations`: () => *number* ; `resultFunc`: (`res1`: { [gameId: string]: *string*;  }, `res2`: *string*) => *string*  } & { `cache`: ICacheObject ; `clearCache`: () => *void* ; `getMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *OutputParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string, (`res1`: { [gameId: string]: *string*;  }, `res2`: *string*) => *string*, [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, { [gameId: string]: *string*;  }\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>]\> ; `keySelector`: *ParametricKeySelector*<[*IState*](../interfaces/types.istate.md), string\> ; `removeMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *void*  }

Defined in: src/extensions/mod_management/selectors.ts:43

___

### activeDownloads

• `Const` **activeDownloads**: *OutputSelector*<[*IState*](../interfaces/types.istate.md), {}, (`res`: { [dlId: string]: [*IDownload*](../interfaces/types.idownload.md);  }) => {}\>

Defined in: src/extensions/download_management/selectors.ts:26

___

### currentActivator

• `Const` **currentActivator**: *OutputSelector*<any, string, (`res1`: { [gameId: string]: *string*;  }, `res2`: *string*) => *string*\>

Defined in: src/extensions/mod_management/selectors.ts:38

___

### currentGame

• `Const` **currentGame**: *OutputSelector*<any, [*IGameStored*](../interfaces/types.igamestored.md), (`res1`: [*IGameStored*](../interfaces/types.igamestored.md)[], `res2`: *string*) => [*IGameStored*](../interfaces/types.igamestored.md)\>

Defined in: src/extensions/gamemode_management/selectors.ts:21

___

### discoveryByGame

• `Const` **discoveryByGame**: *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md)\> & { `dependencies`: [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, { [id: string]: [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md);  }\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>] ; `recomputations`: () => *number* ; `resetRecomputations`: () => *number* ; `resultFunc`: (`res1`: { [id: string]: [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md);  }, `res2`: *string*) => [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md)  } & { `cache`: ICacheObject ; `clearCache`: () => *void* ; `getMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *OutputParametricSelector*<[*IState*](../interfaces/types.istate.md), string, [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md), (`res1`: { [id: string]: [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md);  }, `res2`: *string*) => [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md), [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, { [id: string]: [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md);  }\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>]\> ; `keySelector`: *ParametricKeySelector*<[*IState*](../interfaces/types.istate.md), string\> ; `removeMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *void*  }

Defined in: src/extensions/gamemode_management/selectors.ts:42

___

### downloadPath

• `Const` **downloadPath**: *OutputSelector*<any, string, DLPathCB\>

Defined in: src/extensions/download_management/selectors.ts:14

___

### downloadPathForGame

• `Const` **downloadPathForGame**: *OutputParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string, DLPathCB, any\>

Defined in: src/extensions/download_management/selectors.ts:18

___

### gameById

• `Const` **gameById**: *ParametricSelector*<any, string, [*IGameStored*](../interfaces/types.igamestored.md)\> & { `dependencies`: [*ParametricSelector*<any, string, [*IGameStored*](../interfaces/types.igamestored.md)[]\>, *ParametricSelector*<any, string, string\>] ; `recomputations`: () => *number* ; `resetRecomputations`: () => *number* ; `resultFunc`: (`res1`: [*IGameStored*](../interfaces/types.igamestored.md)[], `res2`: *string*) => [*IGameStored*](../interfaces/types.igamestored.md)  } & { `cache`: ICacheObject ; `clearCache`: () => *void* ; `getMatchingSelector`: (`state`: *any*, `props`: *string*, ...`args`: *any*[]) => *OutputParametricSelector*<any, string, [*IGameStored*](../interfaces/types.igamestored.md), (`res1`: [*IGameStored*](../interfaces/types.igamestored.md)[], `res2`: *string*) => [*IGameStored*](../interfaces/types.igamestored.md), [*ParametricSelector*<any, string, [*IGameStored*](../interfaces/types.igamestored.md)[]\>, *ParametricSelector*<any, string, string\>]\> ; `keySelector`: *ParametricKeySelector*<any, string\> ; `removeMatchingSelector`: (`state`: *any*, `props`: *string*, ...`args`: *any*[]) => *void*  }

Defined in: src/extensions/gamemode_management/selectors.ts:26

___

### gameProfiles

• `Const` **gameProfiles**: *OutputSelector*<any, [*IProfile*](../interfaces/types.iprofile.md)[], (`res1`: *string*, `res2`: { [id: string]: [*IProfile*](../interfaces/types.iprofile.md);  }) => [*IProfile*](../interfaces/types.iprofile.md)[]\>

Defined in: src/extensions/profile_management/selectors.ts:19

___

### installPath

• `Const` **installPath**: *OutputSelector*<any, string, (`res1`: { [gameId: string]: *string*;  }, `res2`: *string*) => *string*\>

Defined in: src/extensions/mod_management/selectors.ts:19

___

### installPathForGame

• `Const` **installPathForGame**: *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\> & { `dependencies`: [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>] ; `recomputations`: () => *number* ; `resetRecomputations`: () => *number* ; `resultFunc`: (`res1`: *string*, `res2`: *string*) => *string*  } & { `cache`: ICacheObject ; `clearCache`: () => *void* ; `getMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *OutputParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string, (`res1`: *string*, `res2`: *string*) => *string*, [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>]\> ; `keySelector`: *ParametricKeySelector*<[*IState*](../interfaces/types.istate.md), string\> ; `removeMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *void*  }

Defined in: src/extensions/mod_management/selectors.ts:27

___

### lastActiveProfileForGame

• `Const` **lastActiveProfileForGame**: *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\> & { `dependencies`: [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, { [gameId: string]: *string*;  }\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>] ; `recomputations`: () => *number* ; `resetRecomputations`: () => *number* ; `resultFunc`: (`res1`: { [gameId: string]: *string*;  }, `res2`: *string*) => *string*  } & { `cache`: ICacheObject ; `clearCache`: () => *void* ; `getMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *OutputParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string, (`res1`: { [gameId: string]: *string*;  }, `res2`: *string*) => *string*, [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, { [gameId: string]: *string*;  }\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>]\> ; `keySelector`: *ParametricKeySelector*<[*IState*](../interfaces/types.istate.md), string\> ; `removeMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *void*  }

Defined in: src/extensions/profile_management/selectors.ts:38

___

### modPathsForGame

• `Const` **modPathsForGame**: *OutputParametricSelector*<[*IState*](../interfaces/types.istate.md), string, { [typeId: string]: *string*;  }, (`res1`: { [gameId: string]: [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md);  }, `res2`: *string*) => { [typeId: string]: *string*;  }\>

Defined in: src/extensions/mod_management/selectors.ts:74

___

### needToDeploy

• `Const` **needToDeploy**: *OutputSelector*<any, boolean, (`res1`: INeedToDeployMap, `res2`: *string*) => *boolean*\>

Defined in: src/extensions/mod_management/selectors.ts:57

___

### needToDeployForGame

• `Const` **needToDeployForGame**: *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, boolean\> & { `dependencies`: [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, INeedToDeployMap\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>] ; `recomputations`: () => *number* ; `resetRecomputations`: () => *number* ; `resultFunc`: (`res1`: INeedToDeployMap, `res2`: *string*) => *boolean*  } & { `cache`: ICacheObject ; `clearCache`: () => *void* ; `getMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *OutputParametricSelector*<[*IState*](../interfaces/types.istate.md), string, boolean, (`res1`: INeedToDeployMap, `res2`: *string*) => *boolean*, [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, INeedToDeployMap\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>]\> ; `keySelector`: *ParametricKeySelector*<[*IState*](../interfaces/types.istate.md), string\> ; `removeMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *void*  }

Defined in: src/extensions/mod_management/selectors.ts:62

___

### profileById

• `Const` **profileById**: *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, [*IProfile*](../interfaces/types.iprofile.md)\> & { `dependencies`: [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, { [profileId: string]: [*IProfile*](../interfaces/types.iprofile.md);  }\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>] ; `recomputations`: () => *number* ; `resetRecomputations`: () => *number* ; `resultFunc`: (`res1`: { [profileId: string]: [*IProfile*](../interfaces/types.iprofile.md);  }, `res2`: *string*) => [*IProfile*](../interfaces/types.iprofile.md)  } & { `cache`: ICacheObject ; `clearCache`: () => *void* ; `getMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *OutputParametricSelector*<[*IState*](../interfaces/types.istate.md), string, [*IProfile*](../interfaces/types.iprofile.md), (`res1`: { [profileId: string]: [*IProfile*](../interfaces/types.iprofile.md);  }, `res2`: *string*) => [*IProfile*](../interfaces/types.iprofile.md), [*ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, { [profileId: string]: [*IProfile*](../interfaces/types.iprofile.md);  }\>, *ParametricSelector*<[*IState*](../interfaces/types.istate.md), string, string\>]\> ; `keySelector`: *ParametricKeySelector*<[*IState*](../interfaces/types.istate.md), string\> ; `removeMatchingSelector`: (`state`: [*IState*](../interfaces/types.istate.md), `props`: *string*, ...`args`: *any*[]) => *void*  }

Defined in: src/extensions/profile_management/selectors.ts:32

## Functions

### activeGameId

▸ `Const`**activeGameId**(`state`: *any*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *any* |

**Returns:** *string*

Defined in: src/extensions/profile_management/selectors.ts:14

___

### activeProfile

▸ `Const`**activeProfile**(`state`: *any*): [*IProfile*](../interfaces/types.iprofile.md)

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *any* |

**Returns:** [*IProfile*](../interfaces/types.iprofile.md)

Defined in: src/extensions/profile_management/selectors.ts:27

___

### currentGameDiscovery

▸ **currentGameDiscovery**(`state`: *any*): [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md)

return the discovery information about a game

**`export`** 

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *any* |

**Returns:** [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md)

Defined in: src/extensions/gamemode_management/selectors.ts:37

___

### gameName

▸ **gameName**(`state`: *any*, `gameId`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *any* |
`gameId` | *string* |

**Returns:** *string*

Defined in: src/extensions/gamemode_management/selectors.ts:48

___

### knownGames

▸ **knownGames**(`state`: *any*): [*IGameStored*](../interfaces/types.igamestored.md)[]

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *any* |

**Returns:** [*IGameStored*](../interfaces/types.igamestored.md)[]

Defined in: src/extensions/gamemode_management/selectors.ts:13
