**[vortex_devel](../README.md)**

> [Globals](../globals.md) / Archive

# Class: Archive

wrapper around an format-specific archive handler

**`export`** 

## Hierarchy

* **Archive**

## Index

### Constructors

* [constructor](archive.md#constructor)

### Properties

* [mHandler](archive.md#mhandler)

### Accessors

* [addFile](archive.md#addfile)
* [create](archive.md#create)
* [extractAll](archive.md#extractall)
* [extractFile](archive.md#extractfile)
* [readDir](archive.md#readdir)
* [readFile](archive.md#readfile)
* [write](archive.md#write)

## Constructors

### constructor

\+ **new Archive**(`handler`: [IArchiveHandler](../interfaces/iarchivehandler.md)): [Archive](archive.md)

*Defined in Work/vortex/src/util/archives.ts:12*

#### Parameters:

Name | Type |
------ | ------ |
`handler` | [IArchiveHandler](../interfaces/iarchivehandler.md) |

**Returns:** [Archive](archive.md)

## Properties

### mHandler

• `Private` **mHandler**: [IArchiveHandler](../interfaces/iarchivehandler.md)

*Defined in Work/vortex/src/util/archives.ts:12*

## Accessors

### addFile

• get **addFile**(): function

*Defined in Work/vortex/src/util/archives.ts:66*

add a single file to the archive

**Returns:** function

___

### create

• get **create**(): function

*Defined in Work/vortex/src/util/archives.ts:57*

create this archive from the files in sourcePath

**Returns:** function

___

### extractAll

• get **extractAll**(): function

*Defined in Work/vortex/src/util/archives.ts:48*

extract the entire archive

**Returns:** function

___

### extractFile

• get **extractFile**(): function

*Defined in Work/vortex/src/util/archives.ts:39*

extract a single file

**Returns:** function

___

### readDir

• get **readDir**(): function

*Defined in Work/vortex/src/util/archives.ts:21*

list files at the specified path

**Returns:** function

___

### readFile

• get **readFile**(): function

*Defined in Work/vortex/src/util/archives.ts:30*

read a file at the specified path via a stream

**Returns:** function

___

### write

• get **write**(): function

*Defined in Work/vortex/src/util/archives.ts:72*

**Returns:** function
