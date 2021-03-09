[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / Archive

# Class: Archive

[util](../modules/util.md).Archive

wrapper around an format-specific archive handler

**`export`** 

## Table of contents

### Constructors

- [constructor](util.archive.md#constructor)

### Properties

- [mHandler](util.archive.md#mhandler)

### Accessors

- [addFile](util.archive.md#addfile)
- [create](util.archive.md#create)
- [extractAll](util.archive.md#extractall)
- [extractFile](util.archive.md#extractfile)
- [readDir](util.archive.md#readdir)
- [readFile](util.archive.md#readfile)
- [write](util.archive.md#write)

## Constructors

### constructor

\+ **new Archive**(`handler`: [*IArchiveHandler*](../interfaces/types.iarchivehandler.md)): [*Archive*](util.archive.md)

#### Parameters:

Name | Type |
:------ | :------ |
`handler` | [*IArchiveHandler*](../interfaces/types.iarchivehandler.md) |

**Returns:** [*Archive*](util.archive.md)

Defined in: src/util/archives.ts:12

## Properties

### mHandler

• `Private` **mHandler**: [*IArchiveHandler*](../interfaces/types.iarchivehandler.md)

Defined in: src/util/archives.ts:12

## Accessors

### addFile

• get **addFile**(): *function*

add a single file to the archive

**Returns:** (`filePath`: *string*, `sourcePath`: *string*) => [*Promise*](promise.md)<void\>

Defined in: src/util/archives.ts:66

___

### create

• get **create**(): *function*

create this archive from the files in sourcePath

**Returns:** (`sourcePath`: *string*) => [*Promise*](promise.md)<void\>

Defined in: src/util/archives.ts:57

___

### extractAll

• get **extractAll**(): *function*

extract the entire archive

**Returns:** (`outputPath`: *string*) => [*Promise*](promise.md)<void\>

Defined in: src/util/archives.ts:48

___

### extractFile

• get **extractFile**(): *function*

extract a single file

**Returns:** (`filePath`: *string*, `outputPath`: *string*) => [*Promise*](promise.md)<void\>

Defined in: src/util/archives.ts:39

___

### readDir

• get **readDir**(): *function*

list files at the specified path

**Returns:** (`archivePath`: *string*) => [*Promise*](promise.md)<string[]\>

Defined in: src/util/archives.ts:21

___

### readFile

• get **readFile**(): *function*

read a file at the specified path via a stream

**Returns:** (`filePath`: *string*) => *ReadableStream*

Defined in: src/util/archives.ts:30

___

### write

• get **write**(): *function*

**Returns:** () => [*Promise*](promise.md)<void\>

Defined in: src/util/archives.ts:72
