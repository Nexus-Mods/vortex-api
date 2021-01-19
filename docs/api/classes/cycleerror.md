**[vortex_devel](../README.md)**

> [Globals](../globals.md) / CycleError

# Class: CycleError

## Hierarchy

* [Error](notsupportederror.md#error)

  ↳ **CycleError**

## Index

### Constructors

* [constructor](cycleerror.md#constructor)

### Properties

* [mCycles](cycleerror.md#mcycles)
* [message](cycleerror.md#message)
* [name](cycleerror.md#name)
* [stack](cycleerror.md#stack)
* [Error](cycleerror.md#error)

### Accessors

* [cycles](cycleerror.md#cycles)

## Constructors

### constructor

\+ **new CycleError**(`cycles`: string[][]): [CycleError](cycleerror.md)

*Defined in Work/vortex/src/extensions/mod_management/util/sort.ts:15*

#### Parameters:

Name | Type |
------ | ------ |
`cycles` | string[][] |

**Returns:** [CycleError](cycleerror.md)

## Properties

### mCycles

• `Private` **mCycles**: string[][]

*Defined in Work/vortex/src/extensions/mod_management/util/sort.ts:15*

___

### message

•  **message**: string

*Inherited from [NotSupportedError](notsupportederror.md).[message](notsupportederror.md#message)*

*Defined in Users/Tannin/AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:974*

___

### name

•  **name**: string

*Inherited from [NotSupportedError](notsupportederror.md).[name](notsupportederror.md#name)*

*Defined in Users/Tannin/AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:973*

___

### stack

• `Optional` **stack**: string

*Inherited from [NotSupportedError](notsupportederror.md).[stack](notsupportederror.md#stack)*

*Overrides [NotSupportedError](notsupportederror.md).[stack](notsupportederror.md#stack)*

*Defined in Users/Tannin/AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:975*

___

### Error

▪ `Static` **Error**: ErrorConstructor

*Defined in Users/Tannin/AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:984*

## Accessors

### cycles

• get **cycles**(): string[][]

*Defined in Work/vortex/src/extensions/mod_management/util/sort.ts:21*

**Returns:** string[][]
