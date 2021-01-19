**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ITestResult

# Interface: ITestResult

## Hierarchy

* **ITestResult**

## Index

### Properties

* [automaticFix](itestresult.md#automaticfix)
* [description](itestresult.md#description)
* [onRecheck](itestresult.md#onrecheck)
* [severity](itestresult.md#severity)

## Properties

### automaticFix

• `Optional` **automaticFix**: () => Promise\<void>

*Defined in Work/vortex/src/types/ITestResult.ts:14*

___

### description

•  **description**: { context?: any ; localize?: boolean ; long?: string ; replace?: { [key:string]: any;  } ; short: string  }

*Defined in Work/vortex/src/types/ITestResult.ts:6*

#### Type declaration:

Name | Type |
------ | ------ |
`context?` | any |
`localize?` | boolean |
`long?` | string |
`replace?` | { [key:string]: any;  } |
`short` | string |

___

### onRecheck

• `Optional` **onRecheck**: () => Promise\<void>

*Defined in Work/vortex/src/types/ITestResult.ts:15*

___

### severity

•  **severity**: [ProblemSeverity](../globals.md#problemseverity)

*Defined in Work/vortex/src/types/ITestResult.ts:13*
