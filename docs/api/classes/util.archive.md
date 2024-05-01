[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / Archive

# Class: Archive

[util](../modules/util.md).Archive

wrapper around an format-specific archive handler

**`export`**

## Table of contents

### Constructors

- [constructor](util.Archive.md#constructor)

### Properties

- [mHandler](util.Archive.md#mhandler)

### Accessors

- [addFile](util.Archive.md#addfile)
- [create](util.Archive.md#create)
- [extractAll](util.Archive.md#extractall)
- [extractFile](util.Archive.md#extractfile)
- [readDir](util.Archive.md#readdir)
- [readFile](util.Archive.md#readfile)
- [write](util.Archive.md#write)

## Constructors

### constructor

• **new Archive**(`handler`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`IArchiveHandler`](../interfaces/types.IArchiveHandler.md) |

#### Defined in

../src/util/archives.ts:14

## Properties

### mHandler

• `Private` **mHandler**: [`IArchiveHandler`](../interfaces/types.IArchiveHandler.md)

#### Defined in

../src/util/archives.ts:12

## Accessors

### addFile

• `get` **addFile**(): (`filePath`: `string`, `sourcePath`: `string`) => [`Promise`](Promise.md)<`void`\>

add a single file to the archive

#### Returns

`fn`

▸ (`filePath`, `sourcePath`): [`Promise`](Promise.md)<`void`\>

add a single file to the archive

##### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `sourcePath` | `string` |

##### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

../src/util/archives.ts:66

___

### create

• `get` **create**(): (`sourcePath`: `string`) => [`Promise`](Promise.md)<`void`\>

create this archive from the files in sourcePath

#### Returns

`fn`

▸ (`sourcePath`): [`Promise`](Promise.md)<`void`\>

create this archive from the files in sourcePath

##### Parameters

| Name | Type |
| :------ | :------ |
| `sourcePath` | `string` |

##### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

../src/util/archives.ts:57

___

### extractAll

• `get` **extractAll**(): (`outputPath`: `string`) => [`Promise`](Promise.md)<`void`\>

extract the entire archive

#### Returns

`fn`

▸ (`outputPath`): [`Promise`](Promise.md)<`void`\>

extract the entire archive

##### Parameters

| Name | Type |
| :------ | :------ |
| `outputPath` | `string` |

##### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

../src/util/archives.ts:48

___

### extractFile

• `get` **extractFile**(): (`filePath`: `string`, `outputPath`: `string`) => [`Promise`](Promise.md)<`void`\>

extract a single file

#### Returns

`fn`

▸ (`filePath`, `outputPath`): [`Promise`](Promise.md)<`void`\>

extract a single file

##### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `outputPath` | `string` |

##### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

../src/util/archives.ts:39

___

### readDir

• `get` **readDir**(): (`archivePath`: `string`) => [`Promise`](Promise.md)<`string`[]\>

list files at the specified path

#### Returns

`fn`

▸ (`archivePath`): [`Promise`](Promise.md)<`string`[]\>

list files at the specified path

##### Parameters

| Name | Type |
| :------ | :------ |
| `archivePath` | `string` |

##### Returns

[`Promise`](Promise.md)<`string`[]\>

#### Defined in

../src/util/archives.ts:21

___

### readFile

• `get` **readFile**(): (`filePath`: `string`) => `ReadableStream`

read a file at the specified path via a stream

#### Returns

`fn`

▸ (`filePath`): `ReadableStream`

read a file at the specified path via a stream

##### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

##### Returns

`ReadableStream`

#### Defined in

../src/util/archives.ts:30

___

### write

• `get` **write**(): () => [`Promise`](Promise.md)<`void`\>

#### Returns

`fn`

▸ (): [`Promise`](Promise.md)<`void`\>

##### Returns

[`Promise`](Promise.md)<`void`\>

#### Defined in

../src/util/archives.ts:72
