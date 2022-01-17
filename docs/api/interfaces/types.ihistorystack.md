[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IHistoryStack

# Interface: IHistoryStack

[types](../modules/types.md).IHistoryStack

## Table of contents

### Properties

- [size](types.IHistoryStack.md#size)

### Methods

- [canRevert](types.IHistoryStack.md#canrevert)
- [describe](types.IHistoryStack.md#describe)
- [describeRevert](types.IHistoryStack.md#describerevert)
- [revert](types.IHistoryStack.md#revert)

## Properties

### size

• **size**: `number`

number of items to remember on the stack

#### Defined in

../src/extensions/history_management/types.ts:24

## Methods

### canRevert

▸ **canRevert**(`event`): [`Revertability`](../modules/types.md#revertability)

determine if the event can be reverted

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IHistoryEvent`](types.IHistoryEvent.md) |

#### Returns

[`Revertability`](../modules/types.md#revertability)

#### Defined in

../src/extensions/history_management/types.ts:37

___

### describe

▸ **describe**(`event`): `string`

generate a (translated!) description for the entry

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IHistoryEvent`](types.IHistoryEvent.md) |

#### Returns

`string`

#### Defined in

../src/extensions/history_management/types.ts:28

___

### describeRevert

▸ **describeRevert**(`event`): `string`

generate a (translated!) description for the revert action.
Please be specific and concise on what exactly this does

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IHistoryEvent`](types.IHistoryEvent.md) |

#### Returns

`string`

#### Defined in

../src/extensions/history_management/types.ts:33

___

### revert

▸ **revert**(`event`): `Promise`<`void`\>

do revert the specified event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IHistoryEvent`](types.IHistoryEvent.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

../src/extensions/history_management/types.ts:41
