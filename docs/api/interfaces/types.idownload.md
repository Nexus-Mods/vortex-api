[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IDownload

# Interface: IDownload

[types](../modules/types.md).IDownload

download information

**`export`** 

**`interface`** IDownload

## Table of contents

### Properties

- [chunks](types.idownload.md#chunks)
- [failCause](types.idownload.md#failcause)
- [fileMD5](types.idownload.md#filemd5)
- [fileTime](types.idownload.md#filetime)
- [game](types.idownload.md#game)
- [installed](types.idownload.md#installed)
- [localPath](types.idownload.md#localpath)
- [modInfo](types.idownload.md#modinfo)
- [pausable](types.idownload.md#pausable)
- [received](types.idownload.md#received)
- [size](types.idownload.md#size)
- [startTime](types.idownload.md#starttime)
- [state](types.idownload.md#state)
- [urls](types.idownload.md#urls)
- [verified](types.idownload.md#verified)

## Properties

### chunks

• `Optional` **chunks**: IChunk[]

for paused downloads, this contains the list segments that are still missing

Defined in: src/extensions/download_management/types/IDownload.ts:119

___

### failCause

• `Optional` **failCause**: IDownloadFailCause

if the download failed, this will contain a more detailed description
of the error

**`memberof`** IDownload

Defined in: src/extensions/download_management/types/IDownload.ts:31

___

### fileMD5

• `Optional` **fileMD5**: *string*

hash of the file data

**`memberof`** IDownload

Defined in: src/extensions/download_management/types/IDownload.ts:83

___

### fileTime

• **fileTime**: *number*

MS timestamp the file finished downloading

Defined in: src/extensions/download_management/types/IDownload.ts:93

___

### game

• **game**: *string*[]

id of the game(s) to which this archive is compatible.

**`memberof`** IDownload

Defined in: src/extensions/download_management/types/IDownload.ts:58

___

### installed

• `Optional` **installed**: *object*

id of the (last) mod installed from this archive. Will be undefined
while the archive is not installed. This will not be unset if the
mod is uninstalled, so to determine if the archive is actually installed
one has to look at the dictionary of installed mods

#### Type declaration:

Name | Type |
:------ | :------ |
`gameId` | *string* |
`modId` | *string* |

Defined in: src/extensions/download_management/types/IDownload.ts:75

___

### localPath

• `Optional` **localPath**: *string*

path of the file being downloaded to. This is relative to the base download
directory for the game and since we use a flat directory structure, this is
in practice just the file name

**`memberof`** IDownload

Defined in: src/extensions/download_management/types/IDownload.ts:50

___

### modInfo

• **modInfo**: *object*

info about the mod being downloaded. This will
be associated with the mod entry after its installation

**`memberof`** IDownload

#### Type declaration:

Defined in: src/extensions/download_management/types/IDownload.ts:67

___

### pausable

• `Optional` **pausable**: *boolean*

whether the download server supports resuming downloads

Defined in: src/extensions/download_management/types/IDownload.ts:124

___

### received

• **received**: *number*

number of bytes received so far

**`memberof`** IDownload

Defined in: src/extensions/download_management/types/IDownload.ts:109

___

### size

• **size**: *number*

size in bytes

**`memberof`** IDownload

Defined in: src/extensions/download_management/types/IDownload.ts:101

___

### startTime

• **startTime**: *number*

MS timestamp the download was started

Defined in: src/extensions/download_management/types/IDownload.ts:88

___

### state

• **state**: DownloadState

current state of the download

**`memberof`** IDownload

Defined in: src/extensions/download_management/types/IDownload.ts:22

___

### urls

• **urls**: *string*[]

list of urls we know serve this file. Should be sorted by preference.
If download from the first url isn't possible, the others may be used

**`memberof`** IDownload

Defined in: src/extensions/download_management/types/IDownload.ts:40

___

### verified

• **verified**: *number*

number of bytes hashed during finalizing

Defined in: src/extensions/download_management/types/IDownload.ts:114
