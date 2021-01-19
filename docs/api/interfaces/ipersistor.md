**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IPersistor

# Interface: IPersistor

a persistor is used to hook a data file into the store.
This way any data file can be made available through the store and
updated through actions, as long as it can be represented in json

**`export`** 

**`interface`** IPersistor

## Hierarchy

* **IPersistor**

## Index

### Methods

* [getAllKVs](ipersistor.md#getallkvs)
* [getAllKeys](ipersistor.md#getallkeys)
* [getItem](ipersistor.md#getitem)
* [removeItem](ipersistor.md#removeitem)
* [setItem](ipersistor.md#setitem)
* [setResetCallback](ipersistor.md#setresetcallback)

## Methods

### getAllKVs

▸ `Optional`**getAllKVs**(`prefix?`: string): Promise\<Array\<{ key: [PersistorKey](../globals.md#persistorkey) ; value: string  }>>

*Defined in Work/vortex/src/types/IExtensionContext.ts:211*

#### Parameters:

Name | Type |
------ | ------ |
`prefix?` | string |

**Returns:** Promise\<Array\<{ key: [PersistorKey](../globals.md#persistorkey) ; value: string  }>>

___

### getAllKeys

▸ **getAllKeys**(): Promise\<[PersistorKey](../globals.md#persistorkey)[]>

*Defined in Work/vortex/src/types/IExtensionContext.ts:210*

**Returns:** Promise\<[PersistorKey](../globals.md#persistorkey)[]>

___

### getItem

▸ **getItem**(`key`: [PersistorKey](../globals.md#persistorkey)): Promise\<string>

*Defined in Work/vortex/src/types/IExtensionContext.ts:207*

#### Parameters:

Name | Type |
------ | ------ |
`key` | [PersistorKey](../globals.md#persistorkey) |

**Returns:** Promise\<string>

___

### removeItem

▸ **removeItem**(`key`: [PersistorKey](../globals.md#persistorkey)): Promise\<void>

*Defined in Work/vortex/src/types/IExtensionContext.ts:209*

#### Parameters:

Name | Type |
------ | ------ |
`key` | [PersistorKey](../globals.md#persistorkey) |

**Returns:** Promise\<void>

___

### setItem

▸ **setItem**(`key`: [PersistorKey](../globals.md#persistorkey), `value`: string): Promise\<void>

*Defined in Work/vortex/src/types/IExtensionContext.ts:208*

#### Parameters:

Name | Type |
------ | ------ |
`key` | [PersistorKey](../globals.md#persistorkey) |
`value` | string |

**Returns:** Promise\<void>

___

### setResetCallback

▸ **setResetCallback**(`cb`: () => Promise\<void>): void

*Defined in Work/vortex/src/types/IExtensionContext.ts:206*

#### Parameters:

Name | Type |
------ | ------ |
`cb` | () => Promise\<void> |

**Returns:** void
