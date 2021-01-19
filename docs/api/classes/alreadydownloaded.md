**[vortex_devel](../README.md)**

> [Globals](../globals.md) / AlreadyDownloaded

# Class: AlreadyDownloaded

## Hierarchy

* [Error](notsupportederror.md#error)

  ↳ **AlreadyDownloaded**

## Index

### Constructors

* [constructor](alreadydownloaded.md#constructor)

### Properties

* [mFileName](alreadydownloaded.md#mfilename)
* [mId](alreadydownloaded.md#mid)
* [message](alreadydownloaded.md#message)
* [name](alreadydownloaded.md#name)
* [stack](alreadydownloaded.md#stack)
* [Error](alreadydownloaded.md#error)

### Accessors

* [downloadId](alreadydownloaded.md#downloadid)
* [fileName](alreadydownloaded.md#filename)

## Constructors

### constructor

\+ **new AlreadyDownloaded**(`fileName`: string): [AlreadyDownloaded](alreadydownloaded.md)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:35*

#### Parameters:

Name | Type |
------ | ------ |
`fileName` | string |

**Returns:** [AlreadyDownloaded](alreadydownloaded.md)

## Properties

### mFileName

• `Private` **mFileName**: string

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:34*

___

### mId

• `Private` **mId**: string

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:35*

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

### downloadId

• get **downloadId**(): string

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:48*

**Returns:** string

• set **downloadId**(`id`: string): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:52*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |

**Returns:** void

___

### fileName

• get **fileName**(): string

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:44*

**Returns:** string
