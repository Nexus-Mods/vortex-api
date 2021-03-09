[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IState

# Interface: IState

[types](../modules/types.md).IState

interface for the top-level state object
this should precisely mirror the reducer structure

**`export`** 

**`interface`** IState

## Table of contents

### Properties

- [app](types.istate.md#app)
- [confidential](types.istate.md#confidential)
- [persistent](types.istate.md#persistent)
- [session](types.istate.md#session)
- [settings](types.istate.md#settings)
- [user](types.istate.md#user)

## Properties

### app

• **app**: [*IApp*](types.iapp.md)

Defined in: src/types/IState.ts:296

___

### confidential

• **confidential**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`account` | *object* |

Defined in: src/types/IState.ts:298

___

### persistent

• **persistent**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`categories` | *object* |
`deployment` | *object* |
`deployment.needToDeploy` | *object* |
`downloads` | [*IStateDownloads*](types.istatedownloads.md) |
`gameMode` | [*IStateGameMode*](types.istategamemode.md) |
`history` | IHistoryPersistent |
`mods` | [*IModTable*](types.imodtable.md) |
`profiles` | *object* |
`transactions` | [*IStateTransactions*](types.istatetransactions.md) |

Defined in: src/types/IState.ts:315

___

### session

• **session**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`base` | [*ISession*](types.isession.md) |
`browser` | [*IBrowserState*](types.ibrowserstate.md) |
`discovery` | [*IDiscoveryState*](types.idiscoverystate.md) |
`extensions` | *object* |
`extensions.available` | [*IAvailableExtension*](types.iavailableextension.md)[] |
`extensions.installed` | *object* |
`extensions.updateTime` | *number* |
`gameMode` | [*ISessionGameMode*](types.isessiongamemode.md) |
`history` | IHistoryState |
`notifications` | [*INotificationState*](types.inotificationstate.md) |

Defined in: src/types/IState.ts:301

___

### settings

• **settings**: [*ISettings*](types.isettings.md)

Defined in: src/types/IState.ts:314

___

### user

• **user**: [*IUser*](types.iuser.md)

Defined in: src/types/IState.ts:297
