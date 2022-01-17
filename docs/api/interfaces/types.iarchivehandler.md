[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IArchiveHandler

# Interface: IArchiveHandler

[types](../modules/types.md).IArchiveHandler

interface for archive handlers, exposing files inside archives to to other extensions

**`export`**

**`interface`** IArchiveHandler

## Table of contents

### Methods

- [addFile](types.IArchiveHandler.md#addfile)
- [create](types.IArchiveHandler.md#create)
- [extractAll](types.IArchiveHandler.md#extractall)
- [extractFile](types.IArchiveHandler.md#extractfile)
- [readDir](types.IArchiveHandler.md#readdir)
- [readFile](types.IArchiveHandler.md#readfile)
- [write](types.IArchiveHandler.md#write)

## Methods

### addFile

▸ `Optional` **addFile**(`filePath`, `sourcePath`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `sourcePath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IExtensionContext.ts:267

___

### create

▸ `Optional` **create**(`sourcePath`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourcePath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IExtensionContext.ts:268

___

### extractAll

▸ **extractAll**(`outputPath`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IExtensionContext.ts:266

___

### extractFile

▸ `Optional` **extractFile**(`filePath`, `outputPath`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `outputPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IExtensionContext.ts:265

___

### readDir

▸ **readDir**(`archPath`): [`Promise`](../classes/Promise.md)<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `archPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`string`[]\>

#### Defined in

../src/types/IExtensionContext.ts:263

___

### readFile

▸ `Optional` **readFile**(`filePath`): `ReadableStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`ReadableStream`

#### Defined in

../src/types/IExtensionContext.ts:264

___

### write

▸ `Optional` **write**(): [`Promise`](../classes/Promise.md)<`void`\>

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IExtensionContext.ts:269
