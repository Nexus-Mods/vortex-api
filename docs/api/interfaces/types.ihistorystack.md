[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IHistoryStack

# Interface: IHistoryStack

[types](../modules/types.md).IHistoryStack

## Table of contents

### Properties

- [canRevert](types.ihistorystack.md#canrevert)
- [describe](types.ihistorystack.md#describe)
- [describeRevert](types.ihistorystack.md#describerevert)
- [revert](types.ihistorystack.md#revert)
- [size](types.ihistorystack.md#size)

## Properties

### canRevert

• **canRevert**: (`event`: [*IHistoryEvent*](types.ihistoryevent.md)) => [*Revertability*](../modules/types.md#revertability)

determine if the event can be reverted

#### Type declaration:

▸ (`event`: [*IHistoryEvent*](types.ihistoryevent.md)): [*Revertability*](../modules/types.md#revertability)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*IHistoryEvent*](types.ihistoryevent.md) |

**Returns:** [*Revertability*](../modules/types.md#revertability)

Defined in: src/extensions/history_management/types.ts:37

Defined in: src/extensions/history_management/types.ts:37

___

### describe

• **describe**: (`event`: [*IHistoryEvent*](types.ihistoryevent.md)) => *string*

generate a (translated!) description for the entry

#### Type declaration:

▸ (`event`: [*IHistoryEvent*](types.ihistoryevent.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*IHistoryEvent*](types.ihistoryevent.md) |

**Returns:** *string*

Defined in: src/extensions/history_management/types.ts:28

Defined in: src/extensions/history_management/types.ts:28

___

### describeRevert

• **describeRevert**: (`event`: [*IHistoryEvent*](types.ihistoryevent.md)) => *string*

generate a (translated!) description for the revert action.
Please be specific and concise on what exactly this does

#### Type declaration:

▸ (`event`: [*IHistoryEvent*](types.ihistoryevent.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*IHistoryEvent*](types.ihistoryevent.md) |

**Returns:** *string*

Defined in: src/extensions/history_management/types.ts:33

Defined in: src/extensions/history_management/types.ts:33

___

### revert

• **revert**: (`event`: [*IHistoryEvent*](types.ihistoryevent.md)) => *Promise*<void\>

do revert the specified event

#### Type declaration:

▸ (`event`: [*IHistoryEvent*](types.ihistoryevent.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*IHistoryEvent*](types.ihistoryevent.md) |

**Returns:** *Promise*<void\>

Defined in: src/extensions/history_management/types.ts:41

Defined in: src/extensions/history_management/types.ts:41

___

### size

• **size**: *number*

number of items to remember on the stack

Defined in: src/extensions/history_management/types.ts:24
