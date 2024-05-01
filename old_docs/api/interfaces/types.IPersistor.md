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

- [getAllKVs](types.IPersistor.md#getallkvs)
- [getAllKeys](types.IPersistor.md#getallkeys)
- [getItem](types.IPersistor.md#getitem)
- [removeItem](types.IPersistor.md#removeitem)
- [setItem](types.IPersistor.md#setitem)
- [setResetCallback](types.IPersistor.md#setresetcallback)

## Methods

### getAllKVs

▸ `Optional` **getAllKVs**(`prefix?`): [`Promise`](../classes/Promise.md)<{ `key`: [`PersistorKey`](../modules/types.md#persistorkey) ; `value`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix?` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<{ `key`: [`PersistorKey`](../modules/types.md#persistorkey) ; `value`: `string`  }[]\>

#### Defined in

../src/types/IExtensionContext.ts:236

___

### getAllKeys

▸ **getAllKeys**(): [`Promise`](../classes/Promise.md)<[`PersistorKey`](../modules/types.md#persistorkey)[]\>

#### Returns

[`Promise`](../classes/Promise.md)<[`PersistorKey`](../modules/types.md#persistorkey)[]\>

#### Defined in

../src/types/IExtensionContext.ts:235

___

### getItem

▸ **getItem**(`key`): [`Promise`](../classes/Promise.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PersistorKey`](../modules/types.md#persistorkey) |

#### Returns

[`Promise`](../classes/Promise.md)<`string`\>

#### Defined in

../src/types/IExtensionContext.ts:232

___

### removeItem

▸ **removeItem**(`key`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PersistorKey`](../modules/types.md#persistorkey) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IExtensionContext.ts:234

___

### setItem

▸ **setItem**(`key`, `value`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PersistorKey`](../modules/types.md#persistorkey) |
| `value` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IExtensionContext.ts:233

___

### setResetCallback

▸ **setResetCallback**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => [`Promise`](../classes/Promise.md)<`void`\> |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:231
