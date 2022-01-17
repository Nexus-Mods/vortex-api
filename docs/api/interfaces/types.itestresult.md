[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / ITestResult

# Interface: ITestResult

[types](../modules/types.md).ITestResult

## Table of contents

### Properties

- [description](types.ITestResult.md#description)
- [severity](types.ITestResult.md#severity)

### Methods

- [automaticFix](types.ITestResult.md#automaticfix)
- [onRecheck](types.ITestResult.md#onrecheck)

## Properties

### description

• **description**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `localize?` | `boolean` |
| `long?` | `string` |
| `replace?` | `Object` |
| `short` | `string` |

#### Defined in

../src/types/ITestResult.ts:6

___

### severity

• **severity**: [`ProblemSeverity`](../modules/types.md#problemseverity)

#### Defined in

../src/types/ITestResult.ts:13

## Methods

### automaticFix

▸ `Optional` **automaticFix**(): [`Promise`](../classes/Promise.md)<`void`\>

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/ITestResult.ts:14

___

### onRecheck

▸ `Optional` **onRecheck**(): [`Promise`](../classes/Promise.md)<`void`\>

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/ITestResult.ts:15
