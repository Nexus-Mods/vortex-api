**[vortex_devel](../README.md)**

> [Globals](../globals.md) / HTTPError

# Class: HTTPError

## Hierarchy

* [Error](notsupportederror.md#error)

  ↳ **HTTPError**

## Index

### Constructors

* [constructor](httperror.md#constructor)

### Properties

* [mCode](httperror.md#mcode)
* [mMessage](httperror.md#mmessage)
* [mURL](httperror.md#murl)
* [message](httperror.md#message)
* [name](httperror.md#name)
* [stack](httperror.md#stack)
* [Error](httperror.md#error)

### Accessors

* [statusCode](httperror.md#statuscode)
* [statusMessage](httperror.md#statusmessage)
* [url](httperror.md#url)

## Constructors

### constructor

\+ **new HTTPError**(`statusCode`: number, `message`: string, `url`: string): [HTTPError](httperror.md)

*Defined in Work/vortex/src/util/CustomErrors.ts:103*

#### Parameters:

Name | Type |
------ | ------ |
`statusCode` | number |
`message` | string |
`url` | string |

**Returns:** [HTTPError](httperror.md)

## Properties

### mCode

• `Private` **mCode**: number

*Defined in Work/vortex/src/util/CustomErrors.ts:101*

___

### mMessage

• `Private` **mMessage**: string

*Defined in Work/vortex/src/util/CustomErrors.ts:102*

___

### mURL

• `Private` **mURL**: string

*Defined in Work/vortex/src/util/CustomErrors.ts:103*

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

### statusCode

• get **statusCode**(): number

*Defined in Work/vortex/src/util/CustomErrors.ts:112*

**Returns:** number

___

### statusMessage

• get **statusMessage**(): string

*Defined in Work/vortex/src/util/CustomErrors.ts:116*

**Returns:** string

___

### url

• get **url**(): string

*Defined in Work/vortex/src/util/CustomErrors.ts:120*

**Returns:** string
