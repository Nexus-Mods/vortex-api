[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / StarterInfo

# Class: StarterInfo

[util](../modules/util.md).StarterInfo

wrapper for information about a game or tool, combining static and runtime/discovery information
for the purpose of actually starting them in a uniform way.
This implements things like running the game through a launcher (steam/epic/...) if necessary

## Implements

- [`IStarterInfo`](../interfaces/types.IStarterInfo.md)

## Table of contents

### Constructors

- [constructor](util.StarterInfo.md#constructor)

### Properties

- [commandLine](util.StarterInfo.md#commandline)
- [defaultPrimary](util.StarterInfo.md#defaultprimary)
- [detach](util.StarterInfo.md#detach)
- [details](util.StarterInfo.md#details)
- [environment](util.StarterInfo.md#environment)
- [exclusive](util.StarterInfo.md#exclusive)
- [exePath](util.StarterInfo.md#exepath)
- [extensionPath](util.StarterInfo.md#extensionpath)
- [gameId](util.StarterInfo.md#gameid)
- [iconOutPath](util.StarterInfo.md#iconoutpath)
- [id](util.StarterInfo.md#id)
- [isGame](util.StarterInfo.md#isgame)
- [logoName](util.StarterInfo.md#logoname)
- [name](util.StarterInfo.md#name)
- [onStart](util.StarterInfo.md#onstart)
- [originalEnvironment](util.StarterInfo.md#originalenvironment)
- [shell](util.StarterInfo.md#shell)
- [timestamp](util.StarterInfo.md#timestamp)
- [workingDirectory](util.StarterInfo.md#workingdirectory)

### Methods

- [initFromGame](util.StarterInfo.md#initfromgame)
- [initFromTool](util.StarterInfo.md#initfromtool)
- [gameIcon](util.StarterInfo.md#gameicon)
- [gameIconRW](util.StarterInfo.md#gameiconrw)
- [getGameIcon](util.StarterInfo.md#getgameicon)
- [getIconPath](util.StarterInfo.md#geticonpath)
- [run](util.StarterInfo.md#run)
- [runDirectly](util.StarterInfo.md#rundirectly)
- [runThroughLauncher](util.StarterInfo.md#runthroughlauncher)
- [toolIcon](util.StarterInfo.md#toolicon)
- [toolIconRW](util.StarterInfo.md#tooliconrw)

## Constructors

### constructor

• **new StarterInfo**(`game`, `gameDiscovery`, `tool?`, `toolDiscovery?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `game` | [`IGameStored`](../interfaces/types.IGameStored.md) |
| `gameDiscovery` | [`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md) |
| `tool?` | [`IToolStored`](../interfaces/types.IToolStored.md) |
| `toolDiscovery?` | [`IDiscoveredTool`](../interfaces/types.IDiscoveredTool.md) |

#### Defined in

../src/util/StarterInfo.ts:301

## Properties

### commandLine

• **commandLine**: `string`[]

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[commandLine](../interfaces/types.IStarterInfo.md#commandline)

#### Defined in

../src/util/StarterInfo.ts:287

___

### defaultPrimary

• **defaultPrimary**: `boolean`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[defaultPrimary](../interfaces/types.IStarterInfo.md#defaultprimary)

#### Defined in

../src/util/StarterInfo.ts:296

___

### detach

• **detach**: `boolean`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[detach](../interfaces/types.IStarterInfo.md#detach)

#### Defined in

../src/util/StarterInfo.ts:294

___

### details

• **details**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

../src/util/StarterInfo.ts:292

___

### environment

• **environment**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[environment](../interfaces/types.IStarterInfo.md#environment)

#### Defined in

../src/util/StarterInfo.ts:289

___

### exclusive

• **exclusive**: `boolean`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[exclusive](../interfaces/types.IStarterInfo.md#exclusive)

#### Defined in

../src/util/StarterInfo.ts:293

___

### exePath

• **exePath**: `string`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[exePath](../interfaces/types.IStarterInfo.md#exepath)

#### Defined in

../src/util/StarterInfo.ts:286

___

### extensionPath

• **extensionPath**: `string`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[extensionPath](../interfaces/types.IStarterInfo.md#extensionpath)

#### Defined in

../src/util/StarterInfo.ts:297

___

### gameId

• **gameId**: `string`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[gameId](../interfaces/types.IStarterInfo.md#gameid)

#### Defined in

../src/util/StarterInfo.ts:282

___

### iconOutPath

• **iconOutPath**: `string`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[iconOutPath](../interfaces/types.IStarterInfo.md#iconoutpath)

#### Defined in

../src/util/StarterInfo.ts:284

___

### id

• **id**: `string`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[id](../interfaces/types.IStarterInfo.md#id)

#### Defined in

../src/util/StarterInfo.ts:281

___

### isGame

• **isGame**: `boolean`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[isGame](../interfaces/types.IStarterInfo.md#isgame)

#### Defined in

../src/util/StarterInfo.ts:283

___

### logoName

• **logoName**: `string`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[logoName](../interfaces/types.IStarterInfo.md#logoname)

#### Defined in

../src/util/StarterInfo.ts:298

___

### name

• **name**: `string`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[name](../interfaces/types.IStarterInfo.md#name)

#### Defined in

../src/util/StarterInfo.ts:285

___

### onStart

• `Optional` **onStart**: ``"hide"`` \| ``"close"`` \| ``"hide_recover"``

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[onStart](../interfaces/types.IStarterInfo.md#onstart)

#### Defined in

../src/util/StarterInfo.ts:295

___

### originalEnvironment

• **originalEnvironment**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

../src/util/StarterInfo.ts:290

___

### shell

• **shell**: `boolean`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[shell](../interfaces/types.IStarterInfo.md#shell)

#### Defined in

../src/util/StarterInfo.ts:291

___

### timestamp

• **timestamp**: `number`

#### Defined in

../src/util/StarterInfo.ts:299

___

### workingDirectory

• **workingDirectory**: `string`

#### Implementation of

[IStarterInfo](../interfaces/types.IStarterInfo.md).[workingDirectory](../interfaces/types.IStarterInfo.md#workingdirectory)

#### Defined in

../src/util/StarterInfo.ts:288

## Methods

### initFromGame

▸ `Private` **initFromGame**(`game`, `gameDiscovery`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `game` | [`IGameStored`](../interfaces/types.IGameStored.md) |
| `gameDiscovery` | [`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md) |

#### Returns

`void`

#### Defined in

../src/util/StarterInfo.ts:322

___

### initFromTool

▸ `Private` **initFromTool**(`gameId`, `tool`, `toolDiscovery`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |
| `tool` | [`IToolStored`](../interfaces/types.IToolStored.md) |
| `toolDiscovery` | [`IDiscoveredTool`](../interfaces/types.IDiscoveredTool.md) |

#### Returns

`void`

#### Defined in

../src/util/StarterInfo.ts:338

___

### gameIcon

▸ `Static` `Private` **gameIcon**(`gameId`, `extensionPath`, `logo`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |
| `extensionPath` | `string` |
| `logo` | `string` |

#### Returns

`string`

#### Defined in

../src/util/StarterInfo.ts:244

___

### gameIconRW

▸ `Static` `Private` **gameIconRW**(`gameId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |

#### Returns

`string`

#### Defined in

../src/util/StarterInfo.ts:258

___

### getGameIcon

▸ `Static` **getGameIcon**(`game`, `gameDiscovery`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `game` | [`IGameStored`](../interfaces/types.IGameStored.md) |
| `gameDiscovery` | [`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md) |

#### Returns

`string`

#### Defined in

../src/util/StarterInfo.ts:67

___

### getIconPath

▸ `Static` **getIconPath**(`info`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`IStarterInfo`](../interfaces/types.IStarterInfo.md) |

#### Returns

`string`

#### Defined in

../src/util/StarterInfo.ts:131

___

### run

▸ `Static` **run**(`info`, `api`, `onShowError`): [`Promise`](Promise.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`IStarterInfo`](../interfaces/types.IStarterInfo.md) |
| `api` | [`IExtensionApi`](../interfaces/types.IExtensionApi.md) |
| `onShowError` | `OnShowErrorFunc` |

#### Returns

[`Promise`](Promise.md)<`any`\>

#### Defined in

../src/util/StarterInfo.ts:77

___

### runDirectly

▸ `Static` `Private` **runDirectly**(`info`, `api`, `onShowError`, `onSpawned`): [`Promise`](Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`IStarterInfo`](../interfaces/types.IStarterInfo.md) |
| `api` | [`IExtensionApi`](../interfaces/types.IExtensionApi.md) |
| `onShowError` | `OnShowErrorFunc` |
| `onSpawned` | () => `void` |

#### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

../src/util/StarterInfo.ts:145

___

### runThroughLauncher

▸ `Static` `Private` **runThroughLauncher**(`launcher`, `info`, `api`, `addInfo`): [`Promise`](Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `launcher` | `string` |
| `info` | [`IStarterInfo`](../interfaces/types.IStarterInfo.md) |
| `api` | [`IExtensionApi`](../interfaces/types.IExtensionApi.md) |
| `addInfo` | `any` |

#### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

../src/util/StarterInfo.ts:227

___

### toolIcon

▸ `Static` `Private` **toolIcon**(`gameId`, `extensionPath`, `toolId`, `toolLogo`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |
| `extensionPath` | `string` |
| `toolId` | `string` |
| `toolLogo` | `string` |

#### Returns

`string`

#### Defined in

../src/util/StarterInfo.ts:262

___

### toolIconRW

▸ `Static` **toolIconRW**(`gameId`, `toolId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |
| `toolId` | `string` |

#### Returns

`string`

#### Defined in

../src/util/StarterInfo.ts:73
