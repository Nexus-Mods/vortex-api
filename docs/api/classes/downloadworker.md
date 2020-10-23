**[vortex_devel](../README.md)**

> [Globals](../globals.md) / DownloadWorker

# Class: DownloadWorker

a download worker. A worker is started to download one chunk of a file,
they are currently not reused.

## Hierarchy

* **DownloadWorker**

## Index

### Constructors

* [constructor](downloadworker.md#constructor)

### Properties

* [mBuffers](downloadworker.md#mbuffers)
* [mDataHistory](downloadworker.md#mdatahistory)
* [mEnded](downloadworker.md#mended)
* [mFinishCB](downloadworker.md#mfinishcb)
* [mHeadersCB](downloadworker.md#mheaderscb)
* [mJob](downloadworker.md#mjob)
* [mProgressCB](downloadworker.md#mprogresscb)
* [mRedirected](downloadworker.md#mredirected)
* [mRedirectsFollowed](downloadworker.md#mredirectsfollowed)
* [mRequest](downloadworker.md#mrequest)
* [mResponse](downloadworker.md#mresponse)
* [mUserAgent](downloadworker.md#museragent)
* [mWriting](downloadworker.md#mwriting)
* [BUFFER\_SIZE](downloadworker.md#buffer_size)
* [BUFFER\_SIZE\_CAP](downloadworker.md#buffer_size_cap)

### Accessors

* [bufferLength](downloadworker.md#bufferlength)

### Methods

* [abort](downloadworker.md#abort)
* [assignJob](downloadworker.md#assignjob)
* [cancel](downloadworker.md#cancel)
* [handleComplete](downloadworker.md#handlecomplete)
* [handleData](downloadworker.md#handledata)
* [handleError](downloadworker.md#handleerror)
* [handleHTML](downloadworker.md#handlehtml)
* [handleResponse](downloadworker.md#handleresponse)
* [mergeBuffers](downloadworker.md#mergebuffers)
* [pause](downloadworker.md#pause)
* [restart](downloadworker.md#restart)
* [startDownload](downloadworker.md#startdownload)
* [writeBuffer](downloadworker.md#writebuffer)

## Constructors

### constructor

\+ **new DownloadWorker**(`job`: [IDownloadJob](../interfaces/idownloadjob.md), `progressCB`: (bytes: number) => void, `finishCB`: [FinishCallback](../globals.md#finishcallback), `headersCB`: (headers: any) => void, `userAgent`: string): [DownloadWorker](downloadworker.md)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:127*

#### Parameters:

Name | Type |
------ | ------ |
`job` | [IDownloadJob](../interfaces/idownloadjob.md) |
`progressCB` | (bytes: number) => void |
`finishCB` | [FinishCallback](../globals.md#finishcallback) |
`headersCB` | (headers: any) => void |
`userAgent` | string |

**Returns:** [DownloadWorker](downloadworker.md)

## Properties

### mBuffers

• `Private` **mBuffers**: Buffer[] = []

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:121*

___

### mDataHistory

• `Private` **mDataHistory**: Array\<{ size: number ; time: number  }> = []

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:122*

___

### mEnded

• `Private` **mEnded**: boolean = false

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:123*

___

### mFinishCB

• `Private` **mFinishCB**: [FinishCallback](../globals.md#finishcallback)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:118*

___

### mHeadersCB

• `Private` **mHeadersCB**: (headers: any) => void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:119*

___

### mJob

• `Private` **mJob**: [IDownloadJob](../interfaces/idownloadjob.md)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:115*

___

### mProgressCB

• `Private` **mProgressCB**: (bytes: number) => void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:117*

___

### mRedirected

• `Private` **mRedirected**: boolean = false

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:126*

___

### mRedirectsFollowed

• `Private` **mRedirectsFollowed**: number = 0

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:127*

___

### mRequest

• `Private` **mRequest**: ClientRequest

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:116*

___

### mResponse

• `Private` **mResponse**: IncomingMessage

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:124*

___

### mUserAgent

• `Private` **mUserAgent**: string

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:120*

___

### mWriting

• `Private` **mWriting**: boolean = false

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:125*

___

### BUFFER\_SIZE

▪ `Static` `Private` **BUFFER\_SIZE**: number = 256 * 1024

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:113*

___

### BUFFER\_SIZE\_CAP

▪ `Static` `Private` **BUFFER\_SIZE\_CAP**: number = 4 * 1024 * 1024

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:114*

## Accessors

### bufferLength

• `Private`get **bufferLength**(): number

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:439*

**Returns:** number

## Methods

### abort

▸ `Private`**abort**(`paused`: boolean): boolean

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:294*

#### Parameters:

Name | Type |
------ | ------ |
`paused` | boolean |

**Returns:** boolean

___

### assignJob

▸ **assignJob**(`job`: [IDownloadJob](../interfaces/idownloadjob.md), `jobUrl`: string): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:148*

#### Parameters:

Name | Type |
------ | ------ |
`job` | [IDownloadJob](../interfaces/idownloadjob.md) |
`jobUrl` | string |

**Returns:** void

___

### cancel

▸ **cancel**(): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:177*

**Returns:** void

___

### handleComplete

▸ `Private`**handleComplete**(): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:313*

**Returns:** void

___

### handleData

▸ `Private`**handleData**(`data`: Buffer): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:469*

#### Parameters:

Name | Type |
------ | ------ |
`data` | Buffer |

**Returns:** void

___

### handleError

▸ `Private`**handleError**(`err`: any): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:269*

#### Parameters:

Name | Type |
------ | ------ |
`err` | any |

**Returns:** void

___

### handleHTML

▸ `Private`**handleHTML**(`inputUrl`: string): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:306*

#### Parameters:

Name | Type |
------ | ------ |
`inputUrl` | string |

**Returns:** void

___

### handleResponse

▸ `Private`**handleResponse**(`response`: IncomingMessage, `jobUrl`: string): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:334*

#### Parameters:

Name | Type |
------ | ------ |
`response` | IncomingMessage |
`jobUrl` | string |

**Returns:** void

___

### mergeBuffers

▸ `Private`**mergeBuffers**(): Buffer

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:433*

**Returns:** Buffer

___

### pause

▸ **pause**(): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:181*

**Returns:** void

___

### restart

▸ **restart**(): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:189*

**Returns:** void

___

### startDownload

▸ `Private`**startDownload**(`job`: [IDownloadJob](../interfaces/idownloadjob.md), `jobUrl`: string, `cookies`: Cookie[]): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:194*

#### Parameters:

Name | Type |
------ | ------ |
`job` | [IDownloadJob](../interfaces/idownloadjob.md) |
`jobUrl` | string |
`cookies` | Cookie[] |

**Returns:** void

___

### writeBuffer

▸ `Private`**writeBuffer**(): Promise\<void>

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:443*

**Returns:** Promise\<void>
