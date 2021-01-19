**[vortex_devel](../README.md)**

> [Globals](../globals.md) / StarterInfo

# Class: StarterInfo

wrapper for information about a game or tool, combining static and runtime/discovery information
for the purpose of actually starting them in a uniform way.
This implements things like running the game through a launcher (steam/epic/...) if necessary

## Hierarchy

* **StarterInfo**

## Implements

* [IStarterInfo](../interfaces/istarterinfo.md)

## Index

### Constructors

* [constructor](starterinfo.md#constructor)

### Properties

* [commandLine](starterinfo.md#commandline)
* [defaultPrimary](starterinfo.md#defaultprimary)
* [detach](starterinfo.md#detach)
* [details](starterinfo.md#details)
* [environment](starterinfo.md#environment)
* [exclusive](starterinfo.md#exclusive)
* [exePath](starterinfo.md#exepath)
* [extensionPath](starterinfo.md#extensionpath)
* [gameId](starterinfo.md#gameid)
* [iconOutPath](starterinfo.md#iconoutpath)
* [id](starterinfo.md#id)
* [isGame](starterinfo.md#isgame)
* [logoName](starterinfo.md#logoname)
* [name](starterinfo.md#name)
* [onStart](starterinfo.md#onstart)
* [originalEnvironment](starterinfo.md#originalenvironment)
* [shell](starterinfo.md#shell)
* [timestamp](starterinfo.md#timestamp)
* [workingDirectory](starterinfo.md#workingdirectory)

### Methods

* [initFromGame](starterinfo.md#initfromgame)
* [initFromTool](starterinfo.md#initfromtool)
* [gameIcon](starterinfo.md#gameicon)
* [gameIconRW](starterinfo.md#gameiconrw)
* [getGameIcon](starterinfo.md#getgameicon)
* [getIconPath](starterinfo.md#geticonpath)
* [run](starterinfo.md#run)
* [runDirectly](starterinfo.md#rundirectly)
* [runThroughLauncher](starterinfo.md#runthroughlauncher)
* [toolIcon](starterinfo.md#toolicon)
* [toolIconRW](starterinfo.md#tooliconrw)

## Constructors

### constructor

\+ **new StarterInfo**(`game`: [IGameStored](../interfaces/igamestored.md), `gameDiscovery`: [IDiscoveryResult](../interfaces/idiscoveryresult.md), `tool?`: [IToolStored](../interfaces/itoolstored.md), `toolDiscovery?`: [IDiscoveredTool](../interfaces/idiscoveredtool.md)): [StarterInfo](starterinfo.md)

*Defined in Work/vortex/src/util/StarterInfo.ts:295*

#### Parameters:

Name | Type |
------ | ------ |
`game` | [IGameStored](../interfaces/igamestored.md) |
`gameDiscovery` | [IDiscoveryResult](../interfaces/idiscoveryresult.md) |
`tool?` | [IToolStored](../interfaces/itoolstored.md) |
`toolDiscovery?` | [IDiscoveredTool](../interfaces/idiscoveredtool.md) |

**Returns:** [StarterInfo](starterinfo.md)

## Properties

### commandLine

•  **commandLine**: string[]

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[commandLine](../interfaces/istarterinfo.md#commandline)*

*Defined in Work/vortex/src/util/StarterInfo.ts:283*

___

### defaultPrimary

•  **defaultPrimary**: boolean

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[defaultPrimary](../interfaces/istarterinfo.md#defaultprimary)*

*Defined in Work/vortex/src/util/StarterInfo.ts:292*

___

### detach

•  **detach**: boolean

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[detach](../interfaces/istarterinfo.md#detach)*

*Defined in Work/vortex/src/util/StarterInfo.ts:290*

___

### details

•  **details**: { [key:string]: any;  }

*Defined in Work/vortex/src/util/StarterInfo.ts:288*

___

### environment

•  **environment**: { [key:string]: string;  }

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[environment](../interfaces/istarterinfo.md#environment)*

*Defined in Work/vortex/src/util/StarterInfo.ts:285*

___

### exclusive

•  **exclusive**: boolean

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[exclusive](../interfaces/istarterinfo.md#exclusive)*

*Defined in Work/vortex/src/util/StarterInfo.ts:289*

___

### exePath

•  **exePath**: string

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[exePath](../interfaces/istarterinfo.md#exepath)*

*Defined in Work/vortex/src/util/StarterInfo.ts:282*

___

### extensionPath

•  **extensionPath**: string

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[extensionPath](../interfaces/istarterinfo.md#extensionpath)*

*Defined in Work/vortex/src/util/StarterInfo.ts:293*

___

### gameId

•  **gameId**: string

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[gameId](../interfaces/istarterinfo.md#gameid)*

*Defined in Work/vortex/src/util/StarterInfo.ts:278*

___

### iconOutPath

•  **iconOutPath**: string

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[iconOutPath](../interfaces/istarterinfo.md#iconoutpath)*

*Defined in Work/vortex/src/util/StarterInfo.ts:280*

___

### id

•  **id**: string

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[id](../interfaces/istarterinfo.md#id)*

*Defined in Work/vortex/src/util/StarterInfo.ts:277*

___

### isGame

•  **isGame**: boolean

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[isGame](../interfaces/istarterinfo.md#isgame)*

*Defined in Work/vortex/src/util/StarterInfo.ts:279*

___

### logoName

•  **logoName**: string

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[logoName](../interfaces/istarterinfo.md#logoname)*

*Defined in Work/vortex/src/util/StarterInfo.ts:294*

___

### name

•  **name**: string

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[name](../interfaces/istarterinfo.md#name)*

*Defined in Work/vortex/src/util/StarterInfo.ts:281*

___

### onStart

• `Optional` **onStart**: \"hide\" \| \"hide\_recover\" \| \"close\"

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[onStart](../interfaces/istarterinfo.md#onstart)*

*Defined in Work/vortex/src/util/StarterInfo.ts:291*

___

### originalEnvironment

•  **originalEnvironment**: { [key:string]: string;  }

*Defined in Work/vortex/src/util/StarterInfo.ts:286*

___

### shell

•  **shell**: boolean

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[shell](../interfaces/istarterinfo.md#shell)*

*Defined in Work/vortex/src/util/StarterInfo.ts:287*

___

### timestamp

•  **timestamp**: number

*Defined in Work/vortex/src/util/StarterInfo.ts:295*

___

### workingDirectory

•  **workingDirectory**: string

*Implementation of [IStarterInfo](../interfaces/istarterinfo.md).[workingDirectory](../interfaces/istarterinfo.md#workingdirectory)*

*Defined in Work/vortex/src/util/StarterInfo.ts:284*

## Methods

### initFromGame

▸ `Private`**initFromGame**(`game`: [IGameStored](../interfaces/igamestored.md), `gameDiscovery`: [IDiscoveryResult](../interfaces/idiscoveryresult.md)): void

*Defined in Work/vortex/src/util/StarterInfo.ts:318*

#### Parameters:

Name | Type |
------ | ------ |
`game` | [IGameStored](../interfaces/igamestored.md) |
`gameDiscovery` | [IDiscoveryResult](../interfaces/idiscoveryresult.md) |

**Returns:** void

___

### initFromTool

▸ `Private`**initFromTool**(`gameId`: string, `tool`: [IToolStored](../interfaces/itoolstored.md), `toolDiscovery`: [IDiscoveredTool](../interfaces/idiscoveredtool.md)): void

*Defined in Work/vortex/src/util/StarterInfo.ts:334*

#### Parameters:

Name | Type |
------ | ------ |
`gameId` | string |
`tool` | [IToolStored](../interfaces/itoolstored.md) |
`toolDiscovery` | [IDiscoveredTool](../interfaces/idiscoveredtool.md) |

**Returns:** void

___

### gameIcon

▸ `Static` `Private`**gameIcon**(`gameId`: string, `extensionPath`: string, `logo`: string): string

*Defined in Work/vortex/src/util/StarterInfo.ts:240*

#### Parameters:

Name | Type |
------ | ------ |
`gameId` | string |
`extensionPath` | string |
`logo` | string |

**Returns:** string

___

### gameIconRW

▸ `Static` `Private`**gameIconRW**(`gameId`: string): string

*Defined in Work/vortex/src/util/StarterInfo.ts:254*

#### Parameters:

Name | Type |
------ | ------ |
`gameId` | string |

**Returns:** string

___

### getGameIcon

▸ `Static`**getGameIcon**(`game`: [IGameStored](../interfaces/igamestored.md), `gameDiscovery`: [IDiscoveryResult](../interfaces/idiscoveryresult.md)): string

*Defined in Work/vortex/src/util/StarterInfo.ts:68*

#### Parameters:

Name | Type |
------ | ------ |
`game` | [IGameStored](../interfaces/igamestored.md) |
`gameDiscovery` | [IDiscoveryResult](../interfaces/idiscoveryresult.md) |

**Returns:** string

___

### getIconPath

▸ `Static`**getIconPath**(`info`: [IStarterInfo](../interfaces/istarterinfo.md)): string

*Defined in Work/vortex/src/util/StarterInfo.ts:132*

#### Parameters:

Name | Type |
------ | ------ |
`info` | [IStarterInfo](../interfaces/istarterinfo.md) |

**Returns:** string

___

### run

▸ `Static`**run**(`info`: [IStarterInfo](../interfaces/istarterinfo.md), `api`: [IExtensionApi](../interfaces/iextensionapi.md), `onShowError`: [OnShowErrorFunc](../globals.md#onshowerrorfunc)): Bluebird\<any>

*Defined in Work/vortex/src/util/StarterInfo.ts:78*

#### Parameters:

Name | Type |
------ | ------ |
`info` | [IStarterInfo](../interfaces/istarterinfo.md) |
`api` | [IExtensionApi](../interfaces/iextensionapi.md) |
`onShowError` | [OnShowErrorFunc](../globals.md#onshowerrorfunc) |

**Returns:** Bluebird\<any>

___

### runDirectly

▸ `Static` `Private`**runDirectly**(`info`: [IStarterInfo](../interfaces/istarterinfo.md), `api`: [IExtensionApi](../interfaces/iextensionapi.md), `onShowError`: [OnShowErrorFunc](../globals.md#onshowerrorfunc), `onSpawned`: () => void): Promise\<void>

*Defined in Work/vortex/src/util/StarterInfo.ts:146*

#### Parameters:

Name | Type |
------ | ------ |
`info` | [IStarterInfo](../interfaces/istarterinfo.md) |
`api` | [IExtensionApi](../interfaces/iextensionapi.md) |
`onShowError` | [OnShowErrorFunc](../globals.md#onshowerrorfunc) |
`onSpawned` | () => void |

**Returns:** Promise\<void>

___

### runThroughLauncher

▸ `Static` `Private`**runThroughLauncher**(`launcher`: string, `info`: [IStarterInfo](../interfaces/istarterinfo.md), `api`: [IExtensionApi](../interfaces/iextensionapi.md), `addInfo`: any): Promise\<void>

*Defined in Work/vortex/src/util/StarterInfo.ts:228*

#### Parameters:

Name | Type |
------ | ------ |
`launcher` | string |
`info` | [IStarterInfo](../interfaces/istarterinfo.md) |
`api` | [IExtensionApi](../interfaces/iextensionapi.md) |
`addInfo` | any |

**Returns:** Promise\<void>

___

### toolIcon

▸ `Static` `Private`**toolIcon**(`gameId`: string, `extensionPath`: string, `toolId`: string, `toolLogo`: string): string

*Defined in Work/vortex/src/util/StarterInfo.ts:258*

#### Parameters:

Name | Type |
------ | ------ |
`gameId` | string |
`extensionPath` | string |
`toolId` | string |
`toolLogo` | string |

**Returns:** string

___

### toolIconRW

▸ `Static`**toolIconRW**(`gameId`: string, `toolId`: string): string

*Defined in Work/vortex/src/util/StarterInfo.ts:74*

#### Parameters:

Name | Type |
------ | ------ |
`gameId` | string |
`toolId` | string |

**Returns:** string
