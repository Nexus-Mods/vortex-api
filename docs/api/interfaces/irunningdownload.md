**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IRunningDownload

# Interface: IRunningDownload

## Hierarchy

* **IRunningDownload**

## Index

### Properties

* [assembler](irunningdownload.md#assembler)
* [chunks](irunningdownload.md#chunks)
* [error](irunningdownload.md#error)
* [failedCB](irunningdownload.md#failedcb)
* [fd](irunningdownload.md#fd)
* [finalName](irunningdownload.md#finalname)
* [finishCB](irunningdownload.md#finishcb)
* [headers](irunningdownload.md#headers)
* [id](irunningdownload.md#id)
* [lastProgressSent](irunningdownload.md#lastprogresssent)
* [origName](irunningdownload.md#origname)
* [progressCB](irunningdownload.md#progresscb)
* [promises](irunningdownload.md#promises)
* [received](irunningdownload.md#received)
* [redownload](irunningdownload.md#redownload)
* [resolvedUrls](irunningdownload.md#resolvedurls)
* [size](irunningdownload.md#size)
* [started](irunningdownload.md#started)
* [tempName](irunningdownload.md#tempname)
* [urls](irunningdownload.md#urls)

## Properties

### assembler

• `Optional` **assembler**: [FileAssembler](../classes/fileassembler.md)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:95*

___

### chunks

•  **chunks**: [IDownloadJob](idownloadjob.md)[]

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:97*

___

### error

•  **error**: boolean

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:84*

___

### failedCB

•  **failedCB**: (err: any) => void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:101*

___

### fd

• `Optional` **fd**: number

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:83*

___

### finalName

• `Optional` **finalName**: Promise\<string>

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:89*

___

### finishCB

•  **finishCB**: (res: [IDownloadResult](idownloadresult.md)) => void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:100*

___

### headers

• `Optional` **headers**: any

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:94*

___

### id

•  **id**: string

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:82*

___

### lastProgressSent

•  **lastProgressSent**: number

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:90*

___

### origName

•  **origName**: string

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:87*

___

### progressCB

• `Optional` **progressCB**: [ProgressCallback](../globals.md#progresscallback)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:99*

___

### promises

•  **promises**: Array\<Promise\<any>>

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:98*

___

### received

•  **received**: number

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:91*

___

### redownload

•  **redownload**: [RedownloadMode](../globals.md#redownloadmode)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:96*

___

### resolvedUrls

•  **resolvedUrls**: () => Promise\<string[]>

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:86*

___

### size

• `Optional` **size**: number

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:93*

___

### started

•  **started**: Date

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:92*

___

### tempName

•  **tempName**: string

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:88*

___

### urls

•  **urls**: string[]

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:85*
