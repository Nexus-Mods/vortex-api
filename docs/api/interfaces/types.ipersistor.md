[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IPersistor

# Interface: IPersistor

[types](../modules/types.md).IPersistor

a persistor is used to hook a data file into the store.
This way any data file can be made available through the store and
updated through actions, as long as it can be represented in json

**`export`** 

**`interface`** IPersistor

## Table of contents

### Methods

- [getAllKVs](types.ipersistor.md#getallkvs)
- [getAllKeys](types.ipersistor.md#getallkeys)
- [getItem](types.ipersistor.md#getitem)
- [removeItem](types.ipersistor.md#removeitem)
- [setItem](types.ipersistor.md#setitem)
- [setResetCallback](types.ipersistor.md#setresetcallback)

## Methods

### getAllKVs

▸ `Optional`**getAllKVs**(`prefix?`: *string*): [*Promise*](../classes/promise.md)<{ `key`: [*PersistorKey*](../modules/types.md#persistorkey) ; `value`: *string*  }[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`prefix?` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<{ `key`: [*PersistorKey*](../modules/types.md#persistorkey) ; `value`: *string*  }[]\>

Defined in: src/types/IExtensionContext.ts:214

___

### getAllKeys

▸ **getAllKeys**(): [*Promise*](../classes/promise.md)<[*PersistorKey*](../modules/types.md#persistorkey)[]\>

**Returns:** [*Promise*](../classes/promise.md)<[*PersistorKey*](../modules/types.md#persistorkey)[]\>

Defined in: src/types/IExtensionContext.ts:213

___

### getItem

▸ **getItem**(`key`: [*PersistorKey*](../modules/types.md#persistorkey)): [*Promise*](../classes/promise.md)<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | [*PersistorKey*](../modules/types.md#persistorkey) |

**Returns:** [*Promise*](../classes/promise.md)<string\>

Defined in: src/types/IExtensionContext.ts:210

___

### removeItem

▸ **removeItem**(`key`: [*PersistorKey*](../modules/types.md#persistorkey)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | [*PersistorKey*](../modules/types.md#persistorkey) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IExtensionContext.ts:212

___

### setItem

▸ **setItem**(`key`: [*PersistorKey*](../modules/types.md#persistorkey), `value`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | [*PersistorKey*](../modules/types.md#persistorkey) |
`value` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IExtensionContext.ts:211

___

### setResetCallback

▸ **setResetCallback**(`cb`: () => [*Promise*](../classes/promise.md)<void\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`cb` | () => [*Promise*](../classes/promise.md)<void\> |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:209
