[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IState

# Interface: IState

[types](../modules/types.md).IState

interface for the top-level state object
this should precisely mirror the reducer structure

**`export`**

**`interface`** IState

## Table of contents

### Properties

- [app](types.IState.md#app)
- [confidential](types.IState.md#confidential)
- [persistent](types.IState.md#persistent)
- [session](types.IState.md#session)
- [settings](types.IState.md#settings)
- [user](types.IState.md#user)

## Properties

### app

• **app**: [`IApp`](types.IApp.md)

#### Defined in

../src/types/IState.ts:311

___

### confidential

• **confidential**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `Object` |

#### Defined in

../src/types/IState.ts:313

___

### persistent

• **persistent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `categories` | `Object` |
| `deployment` | `Object` |
| `deployment.needToDeploy` | `Object` |
| `downloads` | [`IStateDownloads`](types.IStateDownloads.md) |
| `gameMode` | [`IStateGameMode`](types.IStateGameMode.md) |
| `history` | `IHistoryPersistent` |
| `mods` | [`IModTable`](types.IModTable.md) |
| `profiles` | `Object` |
| `transactions` | [`IStateTransactions`](types.IStateTransactions.md) |

#### Defined in

../src/types/IState.ts:331

___

### session

• **session**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `base` | [`ISession`](types.ISession.md) |
| `browser` | [`IBrowserState`](types.IBrowserState.md) |
| `discovery` | [`IDiscoveryState`](types.IDiscoveryState.md) |
| `extensions` | `Object` |
| `extensions.available` | [`IAvailableExtension`](types.IAvailableExtension.md)[] |
| `extensions.installed` | `Object` |
| `extensions.updateTime` | `number` |
| `gameMode` | [`ISessionGameMode`](types.ISessionGameMode.md) |
| `history` | `IHistoryState` |
| `notifications` | [`INotificationState`](types.INotificationState.md) |
| `overlays` | [`IOverlaysState`](types.IOverlaysState.md) |

#### Defined in

../src/types/IState.ts:316

___

### settings

• **settings**: [`ISettings`](types.ISettings.md)

#### Defined in

../src/types/IState.ts:330

___

### user

• **user**: [`IUser`](types.IUser.md)

#### Defined in

../src/types/IState.ts:312
