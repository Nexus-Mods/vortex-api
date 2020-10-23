**[vortex_devel](../README.md)**

> [Globals](../globals.md) / DownloadManager

# Class: DownloadManager

manages downloads

## Hierarchy

* **DownloadManager**

## Index

### Constructors

* [constructor](downloadmanager.md#constructor)

### Properties

* [mBusyWorkers](downloadmanager.md#mbusyworkers)
* [mDownloadPath](downloadmanager.md#mdownloadpath)
* [mFileExistsCB](downloadmanager.md#mfileexistscb)
* [mMaxChunks](downloadmanager.md#mmaxchunks)
* [mMaxWorkers](downloadmanager.md#mmaxworkers)
* [mMinChunkSize](downloadmanager.md#mminchunksize)
* [mNextId](downloadmanager.md#mnextid)
* [mProtocolHandlers](downloadmanager.md#mprotocolhandlers)
* [mQueue](downloadmanager.md#mqueue)
* [mResolveCache](downloadmanager.md#mresolvecache)
* [mSlowWorkers](downloadmanager.md#mslowworkers)
* [mSpeedCalculator](downloadmanager.md#mspeedcalculator)
* [mUserAgent](downloadmanager.md#museragent)

### Methods

* [cancelDownload](downloadmanager.md#canceldownload)
* [enqueue](downloadmanager.md#enqueue)
* [finishChunk](downloadmanager.md#finishchunk)
* [initChunk](downloadmanager.md#initchunk)
* [makeDataCB](downloadmanager.md#makedatacb)
* [makeProgressCB](downloadmanager.md#makeprogresscb)
* [pause](downloadmanager.md#pause)
* [resolveUrl](downloadmanager.md#resolveurl)
* [resolveUrls](downloadmanager.md#resolveurls)
* [resume](downloadmanager.md#resume)
* [sanitizeFilename](downloadmanager.md#sanitizefilename)
* [setDownloadPath](downloadmanager.md#setdownloadpath)
* [setFileExistsCB](downloadmanager.md#setfileexistscb)
* [setMaxConcurrentDownloads](downloadmanager.md#setmaxconcurrentdownloads)
* [startJob](downloadmanager.md#startjob)
* [startWorker](downloadmanager.md#startworker)
* [stop](downloadmanager.md#stop)
* [stopWorker](downloadmanager.md#stopworker)
* [tickQueue](downloadmanager.md#tickqueue)
* [toJob](downloadmanager.md#tojob)
* [toStoredChunk](downloadmanager.md#tostoredchunk)
* [unusedName](downloadmanager.md#unusedname)
* [updateDownload](downloadmanager.md#updatedownload)
* [updateDownloadSize](downloadmanager.md#updatedownloadsize)

## Constructors

### constructor

\+ **new DownloadManager**(`downloadPath`: string, `maxWorkers`: number, `maxChunks`: number, `speedCB`: (speed: number) => void, `userAgent`: string, `protocolHandlers`: [IProtocolHandlers](../interfaces/iprotocolhandlers.md)): [DownloadManager](downloadmanager.md)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:529*

Creates an instance of DownloadManager.

**`memberof`** DownloadManager

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`downloadPath` | string | default path to download to if the enqueue command doesn't                 specify otherwise |
`maxWorkers` | number | maximum number of workers downloading data at once. should be bigger                            than maxChunks |
`maxChunks` | number | maximum number of chunks per file being downloaded at once  |
`speedCB` | (speed: number) => void | - |
`userAgent` | string | - |
`protocolHandlers` | [IProtocolHandlers](../interfaces/iprotocolhandlers.md) | - |

**Returns:** [DownloadManager](downloadmanager.md)

## Properties

### mBusyWorkers

• `Private` **mBusyWorkers**: { [id:number]: [DownloadWorker](downloadworker.md);  }

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:521*

___

### mDownloadPath

• `Private` **mDownloadPath**: string

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:520*

___

### mFileExistsCB

• `Private` **mFileExistsCB**: (fileName: string) => Promise\<boolean>

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:529*

___

### mMaxChunks

• `Private` **mMaxChunks**: number

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:519*

___

### mMaxWorkers

• `Private` **mMaxWorkers**: number

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:518*

___

### mMinChunkSize

• `Private` **mMinChunkSize**: number

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:517*

___

### mNextId

• `Private` **mNextId**: number = 0

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:524*

___

### mProtocolHandlers

• `Private` **mProtocolHandlers**: [IProtocolHandlers](../interfaces/iprotocolhandlers.md)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:527*

___

### mQueue

• `Private` **mQueue**: [IRunningDownload](../interfaces/irunningdownload.md)[] = []

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:523*

___

### mResolveCache

• `Private` **mResolveCache**: { [url:string]: { time: number ; urls: string[]  };  }

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:528*

___

### mSlowWorkers

• `Private` **mSlowWorkers**: { [id:number]: number;  }

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:522*

___

### mSpeedCalculator

• `Private` **mSpeedCalculator**: [SpeedCalculator](speedcalculator.md)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:525*

___

### mUserAgent

• `Private` **mUserAgent**: string

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:526*

## Methods

### cancelDownload

▸ `Private`**cancelDownload**(`download`: [IRunningDownload](../interfaces/irunningdownload.md), `err`: [Error](notsupportederror.md#error)): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:820*

#### Parameters:

Name | Type |
------ | ------ |
`download` | [IRunningDownload](../interfaces/irunningdownload.md) |
`err` | [Error](notsupportederror.md#error) |

**Returns:** void

___

### enqueue

▸ **enqueue**(`id`: string, `urls`: string[], `fileName`: string, `progressCB`: [ProgressCallback](../globals.md#progresscallback), `destinationPath?`: string, `redownload?`: [RedownloadMode](../globals.md#redownloadmode)): Promise\<[IDownloadResult](../interfaces/idownloadresult.md)>

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:577*

enqueues a download

**`memberof`** DownloadManager

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | string | - |
`urls` | string[] | - |
`fileName` | string | - |
`progressCB` | [ProgressCallback](../globals.md#progresscallback) | - |
`destinationPath?` | string | - |
`redownload` | [RedownloadMode](../globals.md#redownloadmode) | "ask" |

**Returns:** Promise\<[IDownloadResult](../interfaces/idownloadresult.md)>

___

### finishChunk

▸ `Private`**finishChunk**(`download`: [IRunningDownload](../interfaces/irunningdownload.md), `job`: [IDownloadJob](../interfaces/idownloadjob.md), `interrupted`: boolean): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:1073*

gets called whenever a chunk runs to the end or is interrupted

#### Parameters:

Name | Type |
------ | ------ |
`download` | [IRunningDownload](../interfaces/irunningdownload.md) |
`job` | [IDownloadJob](../interfaces/idownloadjob.md) |
`interrupted` | boolean |

**Returns:** void

___

### initChunk

▸ `Private`**initChunk**(`download`: [IRunningDownload](../interfaces/irunningdownload.md)): [IDownloadJob](../interfaces/idownloadjob.md)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:796*

#### Parameters:

Name | Type |
------ | ------ |
`download` | [IRunningDownload](../interfaces/irunningdownload.md) |

**Returns:** [IDownloadJob](../interfaces/idownloadjob.md)

___

### makeDataCB

▸ `Private`**makeDataCB**(`download`: [IRunningDownload](../interfaces/irunningdownload.md)): (Anonymous function)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:910*

#### Parameters:

Name | Type |
------ | ------ |
`download` | [IRunningDownload](../interfaces/irunningdownload.md) |

**Returns:** (Anonymous function)

___

### makeProgressCB

▸ `Private`**makeProgressCB**(`job`: [IDownloadJob](../interfaces/idownloadjob.md), `download`: [IRunningDownload](../interfaces/irunningdownload.md)): (Anonymous function)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:867*

#### Parameters:

Name | Type |
------ | ------ |
`job` | [IDownloadJob](../interfaces/idownloadjob.md) |
`download` | [IRunningDownload](../interfaces/irunningdownload.md) |

**Returns:** (Anonymous function)

___

### pause

▸ **pause**(`id`: string): [IChunk](../interfaces/ichunk.md)[]

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:711*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |

**Returns:** [IChunk](../interfaces/ichunk.md)[]

___

### resolveUrl

▸ `Private`**resolveUrl**(`input`: string): Promise\<string[]>

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:755*

#### Parameters:

Name | Type |
------ | ------ |
`input` | string |

**Returns:** Promise\<string[]>

___

### resolveUrls

▸ `Private`**resolveUrls**(`urls`: string[]): function

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:779*

#### Parameters:

Name | Type |
------ | ------ |
`urls` | string[] |

**Returns:** function

___

### resume

▸ **resume**(`id`: string, `filePath`: string, `urls`: string[], `received`: number, `size`: number, `started`: number, `chunks`: [IChunk](../interfaces/ichunk.md)[], `progressCB`: [ProgressCallback](../globals.md#progresscallback)): Promise\<[IDownloadResult](../interfaces/idownloadresult.md)>

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:630*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |
`filePath` | string |
`urls` | string[] |
`received` | number |
`size` | number |
`started` | number |
`chunks` | [IChunk](../interfaces/ichunk.md)[] |
`progressCB` | [ProgressCallback](../globals.md#progresscallback) |

**Returns:** Promise\<[IDownloadResult](../interfaces/idownloadresult.md)>

___

### sanitizeFilename

▸ `Private`**sanitizeFilename**(`input`: string): string

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:1134*

#### Parameters:

Name | Type |
------ | ------ |
`input` | string |

**Returns:** string

___

### setDownloadPath

▸ **setDownloadPath**(`downloadPath`: string): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:559*

#### Parameters:

Name | Type |
------ | ------ |
`downloadPath` | string |

**Returns:** void

___

### setFileExistsCB

▸ **setFileExistsCB**(`cb`: (fileName: string) => Promise\<boolean>): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:555*

#### Parameters:

Name | Type |
------ | ------ |
`cb` | (fileName: string) => Promise\<boolean> |

**Returns:** void

___

### setMaxConcurrentDownloads

▸ **setMaxConcurrentDownloads**(`maxConcurrent`: number): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:563*

#### Parameters:

Name | Type |
------ | ------ |
`maxConcurrent` | number |

**Returns:** void

___

### startJob

▸ `Private`**startJob**(`download`: [IRunningDownload](../interfaces/irunningdownload.md), `job`: [IDownloadJob](../interfaces/idownloadjob.md)): Bluebird\<void>

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:888*

#### Parameters:

Name | Type |
------ | ------ |
`download` | [IRunningDownload](../interfaces/irunningdownload.md) |
`job` | [IDownloadJob](../interfaces/idownloadjob.md) |

**Returns:** Bluebird\<void>

___

### startWorker

▸ `Private`**startWorker**(`download`: [IRunningDownload](../interfaces/irunningdownload.md)): Bluebird\<void>

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:856*

#### Parameters:

Name | Type |
------ | ------ |
`download` | [IRunningDownload](../interfaces/irunningdownload.md) |

**Returns:** Bluebird\<void>

___

### stop

▸ **stop**(`id`: string): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:681*

cancel a download. This stops the download but doesn't remove the file

**`memberof`** DownloadManager

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string |   |

**Returns:** void

___

### stopWorker

▸ `Private`**stopWorker**(`id`: number): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:1128*

#### Parameters:

Name | Type |
------ | ------ |
`id` | number |

**Returns:** void

___

### tickQueue

▸ `Private`**tickQueue**(): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:832*

**Returns:** void

___

### toJob

▸ `Private`**toJob**(`download`: [IRunningDownload](../interfaces/irunningdownload.md), `chunk`: [IChunk](../interfaces/ichunk.md), `first`: boolean): [IDownloadJob](../interfaces/idownloadjob.md)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:1040*

#### Parameters:

Name | Type |
------ | ------ |
`download` | [IRunningDownload](../interfaces/irunningdownload.md) |
`chunk` | [IChunk](../interfaces/ichunk.md) |
`first` | boolean |

**Returns:** [IDownloadJob](../interfaces/idownloadjob.md)

___

### toStoredChunk

▸ `Private`**toStoredChunk**(`job`: [IDownloadJob](../interfaces/idownloadjob.md)): [IChunk](../interfaces/ichunk.md)

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:1031*

#### Parameters:

Name | Type |
------ | ------ |
`job` | [IDownloadJob](../interfaces/idownloadjob.md) |

**Returns:** [IChunk](../interfaces/ichunk.md)

___

### unusedName

▸ `Private`**unusedName**(`destination`: string, `fileName`: string, `redownload`: [RedownloadMode](../globals.md#redownloadmode)): Promise\<string>

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:1149*

finds and reserves a not-yet-used file name.
If the input filename is sample.txt then this function will try
sample.txt, sample.1.txt, sample.2.txt ... until an unused name is found.
That file is created empty in an atomic operation no other call to unusedName
will return the same file name.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | string |
`fileName` | string |
`redownload` | [RedownloadMode](../globals.md#redownloadmode) |

**Returns:** Promise\<string>

___

### updateDownload

▸ `Private`**updateDownload**(`download`: [IRunningDownload](../interfaces/irunningdownload.md), `size`: number, `fileName`: string, `chunkable`: boolean): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:958*

#### Parameters:

Name | Type |
------ | ------ |
`download` | [IRunningDownload](../interfaces/irunningdownload.md) |
`size` | number |
`fileName` | string |
`chunkable` | boolean |

**Returns:** void

___

### updateDownloadSize

▸ `Private`**updateDownloadSize**(`download`: [IRunningDownload](../interfaces/irunningdownload.md), `size`: number): void

*Defined in Work/vortex/src/extensions/download_management/DownloadManager.ts:951*

#### Parameters:

Name | Type |
------ | ------ |
`download` | [IRunningDownload](../interfaces/irunningdownload.md) |
`size` | number |

**Returns:** void
