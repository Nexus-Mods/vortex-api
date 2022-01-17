[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IDownload

# Interface: IDownload

[types](../modules/types.md).IDownload

download information

**`export`**

**`interface`** IDownload

## Table of contents

### Properties

- [chunks](types.IDownload.md#chunks)
- [failCause](types.IDownload.md#failcause)
- [fileMD5](types.IDownload.md#filemd5)
- [fileTime](types.IDownload.md#filetime)
- [game](types.IDownload.md#game)
- [installed](types.IDownload.md#installed)
- [localPath](types.IDownload.md#localpath)
- [modInfo](types.IDownload.md#modinfo)
- [pausable](types.IDownload.md#pausable)
- [received](types.IDownload.md#received)
- [size](types.IDownload.md#size)
- [startTime](types.IDownload.md#starttime)
- [state](types.IDownload.md#state)
- [urls](types.IDownload.md#urls)
- [verified](types.IDownload.md#verified)

## Properties

### chunks

• `Optional` **chunks**: `IChunk`[]

for paused downloads, this contains the list segments that are still missing

#### Defined in

../src/extensions/download_management/types/IDownload.ts:128

___

### failCause

• `Optional` **failCause**: `IDownloadFailCause`

if the download failed, this will contain a more detailed description
of the error

**`memberof`** IDownload

#### Defined in

../src/extensions/download_management/types/IDownload.ts:40

___

### fileMD5

• `Optional` **fileMD5**: `string`

hash of the file data

**`memberof`** IDownload

#### Defined in

../src/extensions/download_management/types/IDownload.ts:92

___

### fileTime

• **fileTime**: `number`

MS timestamp the file finished downloading

#### Defined in

../src/extensions/download_management/types/IDownload.ts:102

___

### game

• **game**: `string`[]

id of the game(s) to which this archive is compatible.

**`memberof`** IDownload

#### Defined in

../src/extensions/download_management/types/IDownload.ts:67

___

### installed

• `Optional` **installed**: `Object`

id of the (last) mod installed from this archive. Will be undefined
while the archive is not installed. This will not be unset if the
mod is uninstalled, so to determine if the archive is actually installed
one has to look at the dictionary of installed mods

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gameId` | `string` |
| `modId` | `string` |

#### Defined in

../src/extensions/download_management/types/IDownload.ts:84

___

### localPath

• `Optional` **localPath**: `string`

path of the file being downloaded to. This is relative to the base download
directory for the game and since we use a flat directory structure, this is
in practice just the file name

**`memberof`** IDownload

#### Defined in

../src/extensions/download_management/types/IDownload.ts:59

___

### modInfo

• **modInfo**: `Object`

info about the mod being downloaded. This will
be associated with the mod entry after its installation

**`memberof`** IDownload

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

../src/extensions/download_management/types/IDownload.ts:76

___

### pausable

• `Optional` **pausable**: `boolean`

whether the download server supports resuming downloads

#### Defined in

../src/extensions/download_management/types/IDownload.ts:133

___

### received

• **received**: `number`

number of bytes received so far

**`memberof`** IDownload

#### Defined in

../src/extensions/download_management/types/IDownload.ts:118

___

### size

• **size**: `number`

size in bytes

**`memberof`** IDownload

#### Defined in

../src/extensions/download_management/types/IDownload.ts:110

___

### startTime

• **startTime**: `number`

MS timestamp the download was started

#### Defined in

../src/extensions/download_management/types/IDownload.ts:97

___

### state

• **state**: `DownloadState`

current state of the download

**`memberof`** IDownload

#### Defined in

../src/extensions/download_management/types/IDownload.ts:31

___

### urls

• **urls**: `string`[]

list of urls we know serve this file. Should be sorted by preference.
If download from the first url isn't possible, the others may be used

**`memberof`** IDownload

#### Defined in

../src/extensions/download_management/types/IDownload.ts:49

___

### verified

• **verified**: `number`

number of bytes hashed during finalizing

#### Defined in

../src/extensions/download_management/types/IDownload.ts:123
