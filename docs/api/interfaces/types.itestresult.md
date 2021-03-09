[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / ITestResult

# Interface: ITestResult

[types](../modules/types.md).ITestResult

## Table of contents

### Properties

- [automaticFix](types.itestresult.md#automaticfix)
- [description](types.itestresult.md#description)
- [onRecheck](types.itestresult.md#onrecheck)
- [severity](types.itestresult.md#severity)

## Properties

### automaticFix

• `Optional` **automaticFix**: () => [*Promise*](../classes/promise.md)<void\>

#### Type declaration:

▸ (): [*Promise*](../classes/promise.md)<void\>

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/ITestResult.ts:14

Defined in: src/types/ITestResult.ts:14

___

### description

• **description**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`context`? | *any* |
`localize`? | *boolean* |
`long`? | *string* |
`replace`? | *object* |
`short` | *string* |

Defined in: src/types/ITestResult.ts:6

___

### onRecheck

• `Optional` **onRecheck**: () => [*Promise*](../classes/promise.md)<void\>

#### Type declaration:

▸ (): [*Promise*](../classes/promise.md)<void\>

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/ITestResult.ts:15

Defined in: src/types/ITestResult.ts:15

___

### severity

• **severity**: [*ProblemSeverity*](../modules/types.md#problemseverity)

Defined in: src/types/ITestResult.ts:13
