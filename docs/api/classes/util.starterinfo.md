[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / StarterInfo

# Class: StarterInfo

[util](../modules/util.md).StarterInfo

wrapper for information about a game or tool, combining static and runtime/discovery information
for the purpose of actually starting them in a uniform way.
This implements things like running the game through a launcher (steam/epic/...) if necessary

## Implements

* [*IStarterInfo*](../interfaces/types.istarterinfo.md)

## Table of contents

### Constructors

- [constructor](util.starterinfo.md#constructor)

### Properties

- [commandLine](util.starterinfo.md#commandline)
- [defaultPrimary](util.starterinfo.md#defaultprimary)
- [detach](util.starterinfo.md#detach)
- [details](util.starterinfo.md#details)
- [environment](util.starterinfo.md#environment)
- [exclusive](util.starterinfo.md#exclusive)
- [exePath](util.starterinfo.md#exepath)
- [extensionPath](util.starterinfo.md#extensionpath)
- [gameId](util.starterinfo.md#gameid)
- [iconOutPath](util.starterinfo.md#iconoutpath)
- [id](util.starterinfo.md#id)
- [isGame](util.starterinfo.md#isgame)
- [logoName](util.starterinfo.md#logoname)
- [name](util.starterinfo.md#name)
- [onStart](util.starterinfo.md#onstart)
- [originalEnvironment](util.starterinfo.md#originalenvironment)
- [shell](util.starterinfo.md#shell)
- [timestamp](util.starterinfo.md#timestamp)
- [workingDirectory](util.starterinfo.md#workingdirectory)

### Methods

- [initFromGame](util.starterinfo.md#initfromgame)
- [initFromTool](util.starterinfo.md#initfromtool)
- [gameIcon](util.starterinfo.md#gameicon)
- [gameIconRW](util.starterinfo.md#gameiconrw)
- [getGameIcon](util.starterinfo.md#getgameicon)
- [getIconPath](util.starterinfo.md#geticonpath)
- [run](util.starterinfo.md#run)
- [runDirectly](util.starterinfo.md#rundirectly)
- [runThroughLauncher](util.starterinfo.md#runthroughlauncher)
- [toolIcon](util.starterinfo.md#toolicon)
- [toolIconRW](util.starterinfo.md#tooliconrw)

## Constructors

### constructor

\+ **new StarterInfo**(`game`: [*IGameStored*](../interfaces/types.igamestored.md), `gameDiscovery`: [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md), `tool?`: [*IToolStored*](../interfaces/types.itoolstored.md), `toolDiscovery?`: [*IDiscoveredTool*](../interfaces/types.idiscoveredtool.md)): [*StarterInfo*](util.starterinfo.md)

#### Parameters:

Name | Type |
:------ | :------ |
`game` | [*IGameStored*](../interfaces/types.igamestored.md) |
`gameDiscovery` | [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md) |
`tool?` | [*IToolStored*](../interfaces/types.itoolstored.md) |
`toolDiscovery?` | [*IDiscoveredTool*](../interfaces/types.idiscoveredtool.md) |

**Returns:** [*StarterInfo*](util.starterinfo.md)

Defined in: src/util/StarterInfo.ts:295

## Properties

### commandLine

• **commandLine**: *string*[]

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[commandLine](../interfaces/types.istarterinfo.md#commandline)

Defined in: src/util/StarterInfo.ts:283

___

### defaultPrimary

• **defaultPrimary**: *boolean*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[defaultPrimary](../interfaces/types.istarterinfo.md#defaultprimary)

Defined in: src/util/StarterInfo.ts:292

___

### detach

• **detach**: *boolean*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[detach](../interfaces/types.istarterinfo.md#detach)

Defined in: src/util/StarterInfo.ts:290

___

### details

• **details**: *object*

#### Type declaration:

Defined in: src/util/StarterInfo.ts:288

___

### environment

• **environment**: *object*

#### Type declaration:

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[environment](../interfaces/types.istarterinfo.md#environment)

Defined in: src/util/StarterInfo.ts:285

___

### exclusive

• **exclusive**: *boolean*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[exclusive](../interfaces/types.istarterinfo.md#exclusive)

Defined in: src/util/StarterInfo.ts:289

___

### exePath

• **exePath**: *string*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[exePath](../interfaces/types.istarterinfo.md#exepath)

Defined in: src/util/StarterInfo.ts:282

___

### extensionPath

• **extensionPath**: *string*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[extensionPath](../interfaces/types.istarterinfo.md#extensionpath)

Defined in: src/util/StarterInfo.ts:293

___

### gameId

• **gameId**: *string*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[gameId](../interfaces/types.istarterinfo.md#gameid)

Defined in: src/util/StarterInfo.ts:278

___

### iconOutPath

• **iconOutPath**: *string*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[iconOutPath](../interfaces/types.istarterinfo.md#iconoutpath)

Defined in: src/util/StarterInfo.ts:280

___

### id

• **id**: *string*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[id](../interfaces/types.istarterinfo.md#id)

Defined in: src/util/StarterInfo.ts:277

___

### isGame

• **isGame**: *boolean*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[isGame](../interfaces/types.istarterinfo.md#isgame)

Defined in: src/util/StarterInfo.ts:279

___

### logoName

• **logoName**: *string*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[logoName](../interfaces/types.istarterinfo.md#logoname)

Defined in: src/util/StarterInfo.ts:294

___

### name

• **name**: *string*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[name](../interfaces/types.istarterinfo.md#name)

Defined in: src/util/StarterInfo.ts:281

___

### onStart

• `Optional` **onStart**: *close* \| *hide* \| *hide_recover*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[onStart](../interfaces/types.istarterinfo.md#onstart)

Defined in: src/util/StarterInfo.ts:291

___

### originalEnvironment

• **originalEnvironment**: *object*

#### Type declaration:

Defined in: src/util/StarterInfo.ts:286

___

### shell

• **shell**: *boolean*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[shell](../interfaces/types.istarterinfo.md#shell)

Defined in: src/util/StarterInfo.ts:287

___

### timestamp

• **timestamp**: *number*

Defined in: src/util/StarterInfo.ts:295

___

### workingDirectory

• **workingDirectory**: *string*

Implementation of: [IStarterInfo](../interfaces/types.istarterinfo.md).[workingDirectory](../interfaces/types.istarterinfo.md#workingdirectory)

Defined in: src/util/StarterInfo.ts:284

## Methods

### initFromGame

▸ `Private`**initFromGame**(`game`: [*IGameStored*](../interfaces/types.igamestored.md), `gameDiscovery`: [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`game` | [*IGameStored*](../interfaces/types.igamestored.md) |
`gameDiscovery` | [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md) |

**Returns:** *void*

Defined in: src/util/StarterInfo.ts:318

___

### initFromTool

▸ `Private`**initFromTool**(`gameId`: *string*, `tool`: [*IToolStored*](../interfaces/types.itoolstored.md), `toolDiscovery`: [*IDiscoveredTool*](../interfaces/types.idiscoveredtool.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`gameId` | *string* |
`tool` | [*IToolStored*](../interfaces/types.itoolstored.md) |
`toolDiscovery` | [*IDiscoveredTool*](../interfaces/types.idiscoveredtool.md) |

**Returns:** *void*

Defined in: src/util/StarterInfo.ts:334

___

### gameIcon

▸ `Private` `Static`**gameIcon**(`gameId`: *string*, `extensionPath`: *string*, `logo`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`gameId` | *string* |
`extensionPath` | *string* |
`logo` | *string* |

**Returns:** *string*

Defined in: src/util/StarterInfo.ts:240

___

### gameIconRW

▸ `Private` `Static`**gameIconRW**(`gameId`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`gameId` | *string* |

**Returns:** *string*

Defined in: src/util/StarterInfo.ts:254

___

### getGameIcon

▸ `Static`**getGameIcon**(`game`: [*IGameStored*](../interfaces/types.igamestored.md), `gameDiscovery`: [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`game` | [*IGameStored*](../interfaces/types.igamestored.md) |
`gameDiscovery` | [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md) |

**Returns:** *string*

Defined in: src/util/StarterInfo.ts:68

___

### getIconPath

▸ `Static`**getIconPath**(`info`: [*IStarterInfo*](../interfaces/types.istarterinfo.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`info` | [*IStarterInfo*](../interfaces/types.istarterinfo.md) |

**Returns:** *string*

Defined in: src/util/StarterInfo.ts:132

___

### run

▸ `Static`**run**(`info`: [*IStarterInfo*](../interfaces/types.istarterinfo.md), `api`: [*IExtensionApi*](../interfaces/types.iextensionapi.md), `onShowError`: OnShowErrorFunc): [*Promise*](promise.md)<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`info` | [*IStarterInfo*](../interfaces/types.istarterinfo.md) |
`api` | [*IExtensionApi*](../interfaces/types.iextensionapi.md) |
`onShowError` | OnShowErrorFunc |

**Returns:** [*Promise*](promise.md)<any\>

Defined in: src/util/StarterInfo.ts:78

___

### runDirectly

▸ `Private` `Static`**runDirectly**(`info`: [*IStarterInfo*](../interfaces/types.istarterinfo.md), `api`: [*IExtensionApi*](../interfaces/types.iextensionapi.md), `onShowError`: OnShowErrorFunc, `onSpawned`: () => *void*): [*Promise*](promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`info` | [*IStarterInfo*](../interfaces/types.istarterinfo.md) |
`api` | [*IExtensionApi*](../interfaces/types.iextensionapi.md) |
`onShowError` | OnShowErrorFunc |
`onSpawned` | () => *void* |

**Returns:** [*Promise*](promise.md)<void\>

Defined in: src/util/StarterInfo.ts:146

___

### runThroughLauncher

▸ `Private` `Static`**runThroughLauncher**(`launcher`: *string*, `info`: [*IStarterInfo*](../interfaces/types.istarterinfo.md), `api`: [*IExtensionApi*](../interfaces/types.iextensionapi.md), `addInfo`: *any*): [*Promise*](promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`launcher` | *string* |
`info` | [*IStarterInfo*](../interfaces/types.istarterinfo.md) |
`api` | [*IExtensionApi*](../interfaces/types.iextensionapi.md) |
`addInfo` | *any* |

**Returns:** [*Promise*](promise.md)<void\>

Defined in: src/util/StarterInfo.ts:228

___

### toolIcon

▸ `Private` `Static`**toolIcon**(`gameId`: *string*, `extensionPath`: *string*, `toolId`: *string*, `toolLogo`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`gameId` | *string* |
`extensionPath` | *string* |
`toolId` | *string* |
`toolLogo` | *string* |

**Returns:** *string*

Defined in: src/util/StarterInfo.ts:258

___

### toolIconRW

▸ `Static`**toolIconRW**(`gameId`: *string*, `toolId`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`gameId` | *string* |
`toolId` | *string* |

**Returns:** *string*

Defined in: src/util/StarterInfo.ts:74
