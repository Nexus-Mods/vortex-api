**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IDownload

# Interface: IDownload

download information

**`export`** 

**`interface`** IDownload

## Hierarchy

* **IDownload**

## Index

### Properties

* [chunks](idownload.md#chunks)
* [failCause](idownload.md#failcause)
* [fileMD5](idownload.md#filemd5)
* [fileTime](idownload.md#filetime)
* [game](idownload.md#game)
* [installed](idownload.md#installed)
* [localPath](idownload.md#localpath)
* [modInfo](idownload.md#modinfo)
* [received](idownload.md#received)
* [size](idownload.md#size)
* [startTime](idownload.md#starttime)
* [state](idownload.md#state)
* [urls](idownload.md#urls)

## Properties

### chunks

• `Optional` **chunks**: [IChunk](ichunk.md)[]

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:114*

for paused downloads, this contains the list segments that are still missing

___

### failCause

• `Optional` **failCause**: [IDownloadFailCause](idownloadfailcause.md)

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:31*

if the download failed, this will contain a more detailed description
of the error

**`memberof`** IDownload

___

### fileMD5

• `Optional` **fileMD5**: string

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:83*

hash of the file data

**`memberof`** IDownload

___

### fileTime

•  **fileTime**: number

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:93*

MS timestamp the file finished downloading

___

### game

•  **game**: string[]

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:58*

id of the game(s) to which this archive is compatible.

**`memberof`** IDownload

___

### installed

• `Optional` **installed**: { gameId: string ; modId: string  }

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:75*

id of the (last) mod installed from this archive. Will be undefined
while the archive is not installed. This will not be unset if the
mod is uninstalled, so to determine if the archive is actually installed
one has to look at the dictionary of installed mods

#### Type declaration:

Name | Type |
------ | ------ |
`gameId` | string |
`modId` | string |

___

### localPath

• `Optional` **localPath**: string

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:50*

path of the file being downloaded to. This is relative to the base download
directory for the game and since we use a flat directory structure, this is
in practice just the file name

**`memberof`** IDownload

___

### modInfo

•  **modInfo**: { [key:string]: any;  }

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:67*

info about the mod being downloaded. This will
be associated with the mod entry after its installation

**`memberof`** IDownload

___

### received

•  **received**: number

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:109*

number of bytes received so far

**`memberof`** IDownload

___

### size

•  **size**: number

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:101*

size in bytes

**`memberof`** IDownload

___

### startTime

•  **startTime**: number

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:88*

MS timestamp the download was started

___

### state

•  **state**: [DownloadState](../globals.md#downloadstate)

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:22*

current state of the download

**`memberof`** IDownload

___

### urls

•  **urls**: string[]

*Defined in Work/vortex/src/extensions/download_management/types/IDownload.ts:40*

list of urls we know serve this file. Should be sorted by preference.
If download from the first url isn't possible, the others may be used

**`memberof`** IDownload
