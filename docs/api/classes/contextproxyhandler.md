**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ContextProxyHandler

# Class: ContextProxyHandler

## Hierarchy

* **ContextProxyHandler**

## Implements

* ProxyHandler\<any>
* ProxyHandler\<any>

## Index

### Constructors

* [constructor](contextproxyhandler.md#constructor)

### Properties

* [mApiAdditions](contextproxyhandler.md#mapiadditions)
* [mContext](contextproxyhandler.md#mcontext)
* [mCurrentExtension](contextproxyhandler.md#mcurrentextension)
* [mCurrentPath](contextproxyhandler.md#mcurrentpath)
* [mDependencies](contextproxyhandler.md#mdependencies)
* [mInitCalls](contextproxyhandler.md#minitcalls)
* [mMayRegister](contextproxyhandler.md#mmayregister)
* [mOptional](contextproxyhandler.md#moptional)

### Accessors

* [dependencies](contextproxyhandler.md#dependencies)
* [staticAPIs](contextproxyhandler.md#staticapis)

### Methods

* [endRegistration](contextproxyhandler.md#endregistration)
* [get](contextproxyhandler.md#get)
* [getCalls](contextproxyhandler.md#getcalls)
* [has](contextproxyhandler.md#has)
* [invokeAdditions](contextproxyhandler.md#invokeadditions)
* [set](contextproxyhandler.md#set)
* [setExtension](contextproxyhandler.md#setextension)
* [unloadIncompatible](contextproxyhandler.md#unloadincompatible)

## Constructors

### constructor

\+ **new ContextProxyHandler**(`context`: any): [ContextProxyHandler](contextproxyhandler.md)

*Defined in Work/vortex/src/util/ExtensionManager.ts:173*

#### Parameters:

Name | Type |
------ | ------ |
`context` | any |

**Returns:** [ContextProxyHandler](contextproxyhandler.md)

## Properties

### mApiAdditions

• `Private` **mApiAdditions**: [IApiAddition](../interfaces/iapiaddition.md)[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:169*

___

### mContext

• `Private` **mContext**: any

*Defined in Work/vortex/src/util/ExtensionManager.ts:167*

___

### mCurrentExtension

• `Private` **mCurrentExtension**: string

*Defined in Work/vortex/src/util/ExtensionManager.ts:170*

___

### mCurrentPath

• `Private` **mCurrentPath**: string

*Defined in Work/vortex/src/util/ExtensionManager.ts:171*

___

### mDependencies

• `Private` **mDependencies**: string[] = []

*Defined in Work/vortex/src/extensions/extension_manager/installExtension.ts:27*

___

### mInitCalls

• `Private` **mInitCalls**: [IInitCall](../interfaces/iinitcall.md)[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:168*

___

### mMayRegister

• `Private` **mMayRegister**: boolean = true

*Defined in Work/vortex/src/util/ExtensionManager.ts:173*

___

### mOptional

• `Private` **mOptional**: {}

*Defined in Work/vortex/src/util/ExtensionManager.ts:172*

## Accessors

### dependencies

• get **dependencies**(): string[]

*Defined in Work/vortex/src/extensions/extension_manager/installExtension.ts:43*

**Returns:** string[]

___

### staticAPIs

• `Private`get **staticAPIs**(): string[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:329*

**Returns:** string[]

## Methods

### endRegistration

▸ **endRegistration**(): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:206*

**Returns:** void

___

### get

▸ **get**(`target`: any, `key`: PropertyKey): any

*Defined in Work/vortex/src/extensions/extension_manager/installExtension.ts:29*

#### Parameters:

Name | Type |
------ | ------ |
`target` | any |
`key` | PropertyKey |

**Returns:** any

___

### getCalls

▸ **getCalls**(`name`: string): [IInitCall](../interfaces/iinitcall.md)[]

*Defined in Work/vortex/src/util/ExtensionManager.ts:213*

returns the parameters of calls to the specified function

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** [IInitCall](../interfaces/iinitcall.md)[]

___

### has

▸ **has**(`target`: any, `key`: PropertyKey): boolean

*Defined in Work/vortex/src/util/ExtensionManager.ts:289*

#### Parameters:

Name | Type |
------ | ------ |
`target` | any |
`key` | PropertyKey |

**Returns:** boolean

___

### invokeAdditions

▸ **invokeAdditions**(`extensions`: [IRegisteredExtension](../interfaces/iregisteredextension.md)[]): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:218*

#### Parameters:

Name | Type |
------ | ------ |
`extensions` | [IRegisteredExtension](../interfaces/iregisteredextension.md)[] |

**Returns:** void

___

### set

▸ **set**(`target`: any, `key`: PropertyKey, `value`: any, `receiver`: any): boolean

*Defined in Work/vortex/src/util/ExtensionManager.ts:321*

#### Parameters:

Name | Type |
------ | ------ |
`target` | any |
`key` | PropertyKey |
`value` | any |
`receiver` | any |

**Returns:** boolean

___

### setExtension

▸ **setExtension**(`extension`: string, `extensionPath`: string): void

*Defined in Work/vortex/src/util/ExtensionManager.ts:284*

change the extension name currently being loaded

#### Parameters:

Name | Type |
------ | ------ |
`extension` | string |
`extensionPath` | string |

**Returns:** void

___

### unloadIncompatible

▸ **unloadIncompatible**(`furtherAPIs`: Set\<string>, `allExtensions`: string[]): object

*Defined in Work/vortex/src/util/ExtensionManager.ts:232*

remove all init calls from incompatible extensions

#### Parameters:

Name | Type |
------ | ------ |
`furtherAPIs` | Set\<string> |
`allExtensions` | string[] |

**Returns:** object
