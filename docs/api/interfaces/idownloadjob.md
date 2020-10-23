**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IDownloadJob

# Interface: IDownloadJob

## Hierarchy

* [IChunk](ichunk.md)

  ↳ **IDownloadJob**

## Index

### Properties

* [completionCB](idownloadjob.md#completioncb)
* [confirmedOffset](idownloadjob.md#confirmedoffset)
* [confirmedReceived](idownloadjob.md#confirmedreceived)
* [confirmedSize](idownloadjob.md#confirmedsize)
* [dataCB](idownloadjob.md#datacb)
* [errorCB](idownloadjob.md#errorcb)
* [offset](idownloadjob.md#offset)
* [received](idownloadjob.md#received)
* [responseCB](idownloadjob.md#responsecb)
* [size](idownloadjob.md#size)
* [state](idownloadjob.md#state)
* [url](idownloadjob.md#url)
* [workerId](idownloadjob.md#workerid)

## Properties

### completionCB

• `Optional` **completionCB**: () => void

*Defined in Work/vortex/src/extensions/download_management/types/IDownloadJob.ts:13*

___

### confirmedOffset

•  **confirmedOffset**: number

*Defined in Work/vortex/src/extensions/download_management/types/IDownloadJob.ts:9*

___

### confirmedReceived

•  **confirmedReceived**: number

*Defined in Work/vortex/src/extensions/download_management/types/IDownloadJob.ts:8*

___

### confirmedSize

•  **confirmedSize**: number

*Defined in Work/vortex/src/extensions/download_management/types/IDownloadJob.ts:10*

___

### dataCB

• `Optional` **dataCB**: (offset: number, data: any) => Promise\<boolean>

*Defined in Work/vortex/src/extensions/download_management/types/IDownloadJob.ts:12*

___

### errorCB

• `Optional` **errorCB**: (err: any) => void

*Defined in Work/vortex/src/extensions/download_management/types/IDownloadJob.ts:14*

___

### offset

•  **offset**: number

*Inherited from [IChunk](ichunk.md).[offset](ichunk.md#offset)*

*Defined in Work/vortex/src/extensions/download_management/types/IChunk.ts:6*

___

### received

•  **received**: number

*Inherited from [IChunk](ichunk.md).[received](ichunk.md#received)*

*Defined in Work/vortex/src/extensions/download_management/types/IChunk.ts:5*

___

### responseCB

• `Optional` **responseCB**: (size: number, fileName: string, chunkable: boolean) => void

*Defined in Work/vortex/src/extensions/download_management/types/IDownloadJob.ts:15*

___

### size

•  **size**: number

*Inherited from [IChunk](ichunk.md).[size](ichunk.md#size)*

*Defined in Work/vortex/src/extensions/download_management/types/IChunk.ts:7*

___

### state

•  **state**: \"init\" \| \"running\" \| \"paused\" \| \"finished\"

*Defined in Work/vortex/src/extensions/download_management/types/IDownloadJob.ts:6*

___

### url

•  **url**: () => Promise\<string>

*Inherited from [IChunk](ichunk.md).[url](ichunk.md#url)*

*Defined in Work/vortex/src/extensions/download_management/types/IChunk.ts:4*

___

### workerId

• `Optional` **workerId**: number

*Defined in Work/vortex/src/extensions/download_management/types/IDownloadJob.ts:7*
