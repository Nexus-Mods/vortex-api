**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IState

# Interface: IState

interface for the top-level state object
this should precisely mirror the reducer structure

**`export`** 

**`interface`** IState

## Hierarchy

* **IState**

## Index

### Properties

* [app](istate.md#app)
* [confidential](istate.md#confidential)
* [persistent](istate.md#persistent)
* [session](istate.md#session)
* [settings](istate.md#settings)
* [user](istate.md#user)

## Properties

### app

•  **app**: [IApp](iapp.md)

*Defined in Work/vortex/src/types/IState.ts:290*

___

### confidential

•  **confidential**: { account: {}  }

*Defined in Work/vortex/src/types/IState.ts:292*

#### Type declaration:

Name | Type |
------ | ------ |
`account` | {} |

___

### persistent

•  **persistent**: { categories: { [gameId:string]: [ICategoryDictionary](icategorydictionary.md);  } ; deployment: { needToDeploy: { [gameId:string]: boolean;  }  } ; downloads: [IStateDownloads](istatedownloads.md) ; gameMode: [IStateGameMode](istategamemode.md) ; mods: [IModTable](imodtable.md) ; profiles: { [profileId:string]: [IProfile](iprofile.md);  } ; transactions: [IStateTransactions](istatetransactions.md)  }

*Defined in Work/vortex/src/types/IState.ts:308*

#### Type declaration:

Name | Type |
------ | ------ |
`categories` | { [gameId:string]: [ICategoryDictionary](icategorydictionary.md);  } |
`deployment` | { needToDeploy: { [gameId:string]: boolean;  }  } |
`downloads` | [IStateDownloads](istatedownloads.md) |
`gameMode` | [IStateGameMode](istategamemode.md) |
`mods` | [IModTable](imodtable.md) |
`profiles` | { [profileId:string]: [IProfile](iprofile.md);  } |
`transactions` | [IStateTransactions](istatetransactions.md) |

___

### session

•  **session**: { base: [ISession](isession.md) ; browser: [IBrowserState](ibrowserstate.md) ; discovery: [IDiscoveryState](idiscoverystate.md) ; extensions: { available: [IAvailableExtension](iavailableextension.md)[] ; installed: { [extId:string]: [IExtension](iextension.md);  } ; updateTime: number  } ; gameMode: [ISessionGameMode](isessiongamemode.md) ; notifications: [INotificationState](inotificationstate.md)  }

*Defined in Work/vortex/src/types/IState.ts:295*

#### Type declaration:

Name | Type |
------ | ------ |
`base` | [ISession](isession.md) |
`browser` | [IBrowserState](ibrowserstate.md) |
`discovery` | [IDiscoveryState](idiscoverystate.md) |
`extensions` | { available: [IAvailableExtension](iavailableextension.md)[] ; installed: { [extId:string]: [IExtension](iextension.md);  } ; updateTime: number  } |
`gameMode` | [ISessionGameMode](isessiongamemode.md) |
`notifications` | [INotificationState](inotificationstate.md) |

___

### settings

•  **settings**: [ISettings](isettings.md)

*Defined in Work/vortex/src/types/IState.ts:307*

___

### user

•  **user**: [IUser](iuser.md)

*Defined in Work/vortex/src/types/IState.ts:291*
