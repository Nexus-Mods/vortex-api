**[vortex_devel](../README.md)**

> [Globals](../globals.md) / CleanupFailedException

# Class: CleanupFailedException

## Hierarchy

* [Error](notsupportederror.md#error)

  ↳ **CleanupFailedException**

## Index

### Constructors

* [constructor](cleanupfailedexception.md#constructor)

### Properties

* [mErrorObject](cleanupfailedexception.md#merrorobject)
* [message](cleanupfailedexception.md#message)
* [name](cleanupfailedexception.md#name)
* [stack](cleanupfailedexception.md#stack)
* [Error](cleanupfailedexception.md#error)

### Accessors

* [errorObject](cleanupfailedexception.md#errorobject)

## Constructors

### constructor

\+ **new CleanupFailedException**(`error`: [Error](notsupportederror.md#error)): [CleanupFailedException](cleanupfailedexception.md)

*Defined in Work/vortex/src/util/CustomErrors.ts:11*

#### Parameters:

Name | Type |
------ | ------ |
`error` | [Error](notsupportederror.md#error) |

**Returns:** [CleanupFailedException](cleanupfailedexception.md)

## Properties

### mErrorObject

• `Private` **mErrorObject**: [Error](notsupportederror.md#error)

*Defined in Work/vortex/src/util/CustomErrors.ts:11*

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

### errorObject

• get **errorObject**(): [Error](notsupportederror.md#error)

*Defined in Work/vortex/src/util/CustomErrors.ts:18*

**Returns:** [Error](notsupportederror.md#error)
