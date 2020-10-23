**[vortex_devel](../README.md)**

> [Globals](../globals.md) / FileAssembler

# Class: FileAssembler

assembles a file received in chunks.

## Hierarchy

* **FileAssembler**

## Index

### Constructors

* [constructor](fileassembler.md#constructor)

### Properties

* [mFD](fileassembler.md#mfd)
* [mFileName](fileassembler.md#mfilename)
* [mLastFlushedSize](fileassembler.md#mlastflushedsize)
* [mLastFlushedTime](fileassembler.md#mlastflushedtime)
* [mQueue](fileassembler.md#mqueue)
* [mTotalSize](fileassembler.md#mtotalsize)
* [mWritten](fileassembler.md#mwritten)
* [MIN\_FLUSH\_SIZE](fileassembler.md#min_flush_size)
* [MIN\_FLUSH\_TIME](fileassembler.md#min_flush_time)

### Methods

* [addChunk](fileassembler.md#addchunk)
* [close](fileassembler.md#close)
* [isClosed](fileassembler.md#isclosed)
* [rename](fileassembler.md#rename)
* [setTotalSize](fileassembler.md#settotalsize)
* [writeAsync](fileassembler.md#writeasync)
* [create](fileassembler.md#create)

## Constructors

### constructor

\+ **new FileAssembler**(`fileName`: string, `size`: number, `fd`: number): [FileAssembler](fileassembler.md)

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:49*

#### Parameters:

Name | Type |
------ | ------ |
`fileName` | string |
`size` | number |
`fd` | number |

**Returns:** [FileAssembler](fileassembler.md)

## Properties

### mFD

• `Private` **mFD**: number

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:43*

___

### mFileName

• `Private` **mFileName**: string

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:44*

___

### mLastFlushedSize

• `Private` **mLastFlushedSize**: number = 0

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:49*

___

### mLastFlushedTime

• `Private` **mLastFlushedTime**: number = 0

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:48*

___

### mQueue

• `Private` **mQueue**: (cb: () => Promise\<any>, tryOnly: boolean) => Promise\<any>

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:46*

___

### mTotalSize

• `Private` **mTotalSize**: number

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:45*

___

### mWritten

• `Private` **mWritten**: number = 0

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:47*

___

### MIN\_FLUSH\_SIZE

▪ `Static` `Private` **MIN\_FLUSH\_SIZE**: number = 16 * 1024 * 1024

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:39*

___

### MIN\_FLUSH\_TIME

▪ `Static` `Private` **MIN\_FLUSH\_TIME**: number = 5 * 1000

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:41*

## Methods

### addChunk

▸ **addChunk**(`offset`: number, `data`: Buffer): Promise\<boolean>

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:107*

#### Parameters:

Name | Type |
------ | ------ |
`offset` | number |
`data` | Buffer |

**Returns:** Promise\<boolean>

___

### close

▸ **close**(): Promise\<void>

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:150*

**Returns:** Promise\<void>

___

### isClosed

▸ **isClosed**(): boolean

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:65*

**Returns:** boolean

___

### rename

▸ **rename**(`newName`: string \| Promise\<string>): Bluebird\<any>

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:69*

#### Parameters:

Name | Type |
------ | ------ |
`newName` | string \| Promise\<string> |

**Returns:** Bluebird\<any>

___

### setTotalSize

▸ **setTotalSize**(`size`: number): void

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:58*

#### Parameters:

Name | Type |
------ | ------ |
`size` | number |

**Returns:** void

___

### writeAsync

▸ `Private`**writeAsync**(`data`: Buffer, `offset`: number): Bluebird\<WriteResult>

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:168*

#### Parameters:

Name | Type |
------ | ------ |
`data` | Buffer |
`offset` | number |

**Returns:** Bluebird\<WriteResult>

___

### create

▸ `Static`**create**(`fileName`: string): Promise\<[FileAssembler](fileassembler.md)>

*Defined in Work/vortex/src/extensions/download_management/FileAssembler.ts:20*

#### Parameters:

Name | Type |
------ | ------ |
`fileName` | string |

**Returns:** Promise\<[FileAssembler](fileassembler.md)>
