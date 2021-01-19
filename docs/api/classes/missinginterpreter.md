**[vortex_devel](../README.md)**

> [Globals](../globals.md) / MissingInterpreter

# Class: MissingInterpreter

## Hierarchy

* [Error](notsupportederror.md#error)

  ↳ **MissingInterpreter**

## Index

### Constructors

* [constructor](missinginterpreter.md#constructor)

### Properties

* [mURL](missinginterpreter.md#murl)
* [message](missinginterpreter.md#message)
* [name](missinginterpreter.md#name)
* [stack](missinginterpreter.md#stack)
* [Error](missinginterpreter.md#error)

### Accessors

* [url](missinginterpreter.md#url)

## Constructors

### constructor

\+ **new MissingInterpreter**(`message`: string, `url?`: string): [MissingInterpreter](missinginterpreter.md)

*Defined in Work/vortex/src/util/CustomErrors.ts:126*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`url?` | string |

**Returns:** [MissingInterpreter](missinginterpreter.md)

## Properties

### mURL

• `Private` **mURL**: string

*Defined in Work/vortex/src/util/CustomErrors.ts:126*

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

### url

• get **url**(): string

*Defined in Work/vortex/src/util/CustomErrors.ts:133*

**Returns:** string
