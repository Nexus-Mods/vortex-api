[vortex_devel](../README.md) / [Exports](../modules.md) / fs

# Namespace: fs

## Table of contents

### Namespaces

- [constants](fs.constants.md)

### Classes

- [Stats](../classes/fs.stats.md)
- [WriteStream](../classes/fs.writestream.md)

### Interfaces

- [FSWatcher](../interfaces/fs.fswatcher.md)
- [ILinkFileOptions](../interfaces/fs.ilinkfileoptions.md)
- [IRemoveFileOptions](../interfaces/fs.iremovefileoptions.md)
- [ITmpOptions](../interfaces/fs.itmpoptions.md)

### Functions

- [accessSync](fs.md#accesssync)
- [changeFileAttributes](fs.md#changefileattributes)
- [changeFileOwnership](fs.md#changefileownership)
- [chmodAsync](fs.md#chmodasync)
- [closeAsync](fs.md#closeasync)
- [closeSync](fs.md#closesync)
- [copyAsync](fs.md#copyasync)
- [createReadStream](fs.md#createreadstream)
- [createWriteStream](fs.md#createwritestream)
- [ensureDirAsync](fs.md#ensuredirasync)
- [ensureDirSync](fs.md#ensuredirsync)
- [ensureDirWritableAsync](fs.md#ensuredirwritableasync)
- [ensureFileAsync](fs.md#ensurefileasync)
- [forcePerm](fs.md#forceperm)
- [fsyncAsync](fs.md#fsyncasync)
- [genFSWrapperAsync](fs.md#genfswrapperasync)
- [isDirectoryAsync](fs.md#isdirectoryasync)
- [linkAsync](fs.md#linkasync)
- [linkSync](fs.md#linksync)
- [lstatAsync](fs.md#lstatasync)
- [makeFileWritableAsync](fs.md#makefilewritableasync)
- [mkdirAsync](fs.md#mkdirasync)
- [mkdirsAsync](fs.md#mkdirsasync)
- [moveAsync](fs.md#moveasync)
- [moveRenameAsync](fs.md#moverenameasync)
- [openAsync](fs.md#openasync)
- [openSync](fs.md#opensync)
- [readAsync](fs.md#readasync)
- [readFileAsync](fs.md#readfileasync)
- [readFileSync](fs.md#readfilesync)
- [readdirAsync](fs.md#readdirasync)
- [readdirSync](fs.md#readdirsync)
- [readlinkAsync](fs.md#readlinkasync)
- [removeAsync](fs.md#removeasync)
- [removeSync](fs.md#removesync)
- [renameAsync](fs.md#renameasync)
- [rmdirAsync](fs.md#rmdirasync)
- [statAsync](fs.md#statasync)
- [statSilentAsync](fs.md#statsilentasync)
- [statSync](fs.md#statsync)
- [symlinkAsync](fs.md#symlinkasync)
- [symlinkSync](fs.md#symlinksync)
- [unlinkAsync](fs.md#unlinkasync)
- [utimesAsync](fs.md#utimesasync)
- [watch](fs.md#watch)
- [withTmpDir](fs.md#withtmpdir)
- [withTmpDirImpl](fs.md#withtmpdirimpl)
- [withTmpFile](fs.md#withtmpfile)
- [writeAsync](fs.md#writeasync)
- [writeFileAsync](fs.md#writefileasync)
- [writeFileSync](fs.md#writefilesync)
- [writeSync](fs.md#writesync)

## Functions

### accessSync

▸ **accessSync**(`path`: PathLike, `mode?`: *number*): *void*

Synchronously tests a user's permissions for the file specified by path.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.    |
`mode?` | *number* | - |

**Returns:** *void*

Defined in: node_modules/@types/node/fs.d.ts:1794

___

### changeFileAttributes

▸ **changeFileAttributes**(`filePath`: *string*, `wantedAttributes`: *number*, `stat`: [*Stats*](../classes/fs.stats.md)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |
`wantedAttributes` | *number* |
`stat` | [*Stats*](../classes/fs.stats.md) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:997

___

### changeFileOwnership

▸ **changeFileOwnership**(`filePath`: *string*, `stat`: [*Stats*](../classes/fs.stats.md)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |
`stat` | [*Stats*](../classes/fs.stats.md) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:967

___

### chmodAsync

▸ `Const`**chmodAsync**(`path`: *string*, `mode`: *string* \| *number*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`mode` | *string* \| *number* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:481

___

### closeAsync

▸ `Const`**closeAsync**(`fd`: *number*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`fd` | *number* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:482

___

### closeSync

▸ **closeSync**(`fd`: *number*): *void*

Synchronous close(2) - close a file descriptor.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`fd` | *number* | A file descriptor.    |

**Returns:** *void*

Defined in: node_modules/@types/node/fs.d.ts:1025

___

### copyAsync

▸ **copyAsync**(`src`: *string*, `dest`: *string*, `options?`: fs.CopyOptions & { `noSelfCopy?`: *boolean* ; `showDialogCallback?`: () => *boolean*  }): [*Promise*](../classes/promise.md)<void\>

copy file
The copy function from fs-extra doesn't (at the time of writing) correctly check that a file
isn't copied onto itself (it fails for links or potentially on case insensitive disks),
so this makes a check based on the ino number.
A bug in older versions of node.js made it necessary this check be optional but that is
resolved now so the check should always be enabled.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`src` | *string* | file to copy   |
`dest` | *string* | destination path   |
`options?` | fs.CopyOptions & { `noSelfCopy?`: *boolean* ; `showDialogCallback?`: () => *boolean*  } | copy options (see documentation for fs)    |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:645

___

### createReadStream

▸ **createReadStream**(`path`: PathLike, `options?`: *string* \| { `autoClose?`: *boolean* ; `emitClose?`: *boolean* ; `encoding?`: *string* ; `end?`: *number* ; `fd?`: *number* ; `flags?`: *string* ; `highWaterMark?`: *number* ; `mode?`: *number* ; `start?`: *number*  }): ReadStream

Returns a new `ReadStream` object.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.    |
`options?` | *string* \| { `autoClose?`: *boolean* ; `emitClose?`: *boolean* ; `encoding?`: *string* ; `end?`: *number* ; `fd?`: *number* ; `flags?`: *string* ; `highWaterMark?`: *number* ; `mode?`: *number* ; `start?`: *number*  } | - |

**Returns:** ReadStream

Defined in: node_modules/@types/node/fs.d.ts:1801

___

### createWriteStream

▸ **createWriteStream**(`path`: PathLike, `options?`: *string* \| { `autoClose?`: *boolean* ; `emitClose?`: *boolean* ; `encoding?`: *string* ; `fd?`: *number* ; `flags?`: *string* ; `highWaterMark?`: *number* ; `mode?`: *number* ; `start?`: *number*  }): [*WriteStream*](../classes/fs.writestream.md)

Returns a new `WriteStream` object.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.    |
`options?` | *string* \| { `autoClose?`: *boolean* ; `emitClose?`: *boolean* ; `encoding?`: *string* ; `fd?`: *number* ; `flags?`: *string* ; `highWaterMark?`: *number* ; `mode?`: *number* ; `start?`: *number*  } | - |

**Returns:** [*WriteStream*](../classes/fs.writestream.md)

Defined in: node_modules/@types/node/fs.d.ts:1821

___

### ensureDirAsync

▸ **ensureDirAsync**(`dirPath`: *string*, `onDirCreatedCB?`: (`created`: *string*) => [*Promise*](../classes/promise.md)<void\>): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`dirPath` | *string* |
`onDirCreatedCB?` | (`created`: *string*) => [*Promise*](../classes/promise.md)<void\> |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:543

___

### ensureDirSync

▸ **ensureDirSync**(`dirPath`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dirPath` | *string* |

**Returns:** *void*

Defined in: src/util/fs.ts:527

___

### ensureDirWritableAsync

▸ **ensureDirWritableAsync**(`dirPath`: *string*, `confirm?`: () => [*Promise*](../classes/promise.md)<void\>): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`dirPath` | *string* |
`confirm?` | () => [*Promise*](../classes/promise.md)<void\> |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:888

___

### ensureFileAsync

▸ **ensureFileAsync**(`filePath`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:535

___

### forcePerm

▸ **forcePerm**<T\>(`t`: [*TFunction*](types.md#tfunction), `op`: () => [*Promise*](../classes/promise.md)<T\>, `filePath?`: *string*, `maxTries?`: *number*): [*Promise*](../classes/promise.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`t` | [*TFunction*](types.md#tfunction) | - |
`op` | () => [*Promise*](../classes/promise.md)<T\> | - |
`filePath?` | *string* | - |
`maxTries` | *number* | 3 |

**Returns:** [*Promise*](../classes/promise.md)<T\>

Defined in: src/util/fs.ts:1080

___

### fsyncAsync

▸ `Const`**fsyncAsync**(`fd`: *number*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`fd` | *number* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:483

___

### genFSWrapperAsync

▸ **genFSWrapperAsync**<T\>(`func`: T): *function*

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | (...`args`: *any*[]) => *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`func` | T |

**Returns:** (...`args`: *any*[]) => *any*

Defined in: src/util/fs.ts:468

___

### isDirectoryAsync

▸ **isDirectoryAsync**(`dirPath`: *string*): [*Promise*](../classes/promise.md)<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`dirPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<boolean\>

Defined in: src/util/fs.ts:522

___

### linkAsync

▸ **linkAsync**(`src`: *string*, `dest`: *string*, `options?`: [*ILinkFileOptions*](../interfaces/fs.ilinkfileoptions.md)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`src` | *string* |
`dest` | *string* |
`options?` | [*ILinkFileOptions*](../interfaces/fs.ilinkfileoptions.md) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:677

___

### linkSync

▸ **linkSync**(`existingPath`: PathLike, `newPath`: PathLike): *void*

Synchronous link(2) - Create a new link (also known as a hard link) to an existing file.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`existingPath` | PathLike | A path to a file. If a URL is provided, it must use the `file:` protocol.   |
`newPath` | PathLike | A path to a file. If a URL is provided, it must use the `file:` protocol.    |

**Returns:** *void*

Defined in: node_modules/@types/node/fs.d.ts:506

___

### lstatAsync

▸ `Const`**lstatAsync**(`path`: *string*): [*Promise*](../classes/promise.md)<[*Stats*](../classes/fs.stats.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<[*Stats*](../classes/fs.stats.md)\>

Defined in: src/util/fs.ts:484

___

### makeFileWritableAsync

▸ **makeFileWritableAsync**(`filePath`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:1009

___

### mkdirAsync

▸ `Const`**mkdirAsync**(`path`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:485

___

### mkdirsAsync

▸ `Const`**mkdirsAsync**(`path`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:486

___

### moveAsync

▸ `Const`**moveAsync**(`src`: *string*, `dest`: *string*, `options?`: MoveOptions): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`src` | *string* |
`dest` | *string* |
`options?` | MoveOptions |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:487

___

### moveRenameAsync

▸ **moveRenameAsync**(`src`: *string*, `dest`: *string*): [*Promise*](../classes/promise.md)<string\>

move a file. If the destination exists, will generate a new name with an
increasing counter until an unused name is found

#### Parameters:

Name | Type |
:------ | :------ |
`src` | *string* |
`dest` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<string\>

Defined in: src/util/fs.ts:628

___

### openAsync

▸ `Const`**openAsync**(`path`: *string*, `flags`: *string* \| *number*, `mode?`: *number*): [*Promise*](../classes/promise.md)<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`flags` | *string* \| *number* |
`mode?` | *number* |

**Returns:** [*Promise*](../classes/promise.md)<number\>

Defined in: src/util/fs.ts:488

___

### openSync

▸ **openSync**(`path`: PathLike, `flags`: *string* \| *number*, `mode?`: *string* \| *number* \| *null*): *number*

Synchronous open(2) - open and possibly create a file, returning a file descriptor..

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike | A path to a file. If a URL is provided, it must use the `file:` protocol.   |
`flags` | *string* \| *number* | - |
`mode?` | *string* \| *number* \| *null* | A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.    |

**Returns:** *number*

Defined in: node_modules/@types/node/fs.d.ts:1055

___

### readAsync

▸ `Const`**readAsync**<BufferT\>(...`args`: *any*[]): [*Promise*](../classes/promise.md)<{ `buffer`: BufferT ; `bytesRead`: *number*  }\>

#### Type parameters:

Name |
:------ |
`BufferT` |

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** [*Promise*](../classes/promise.md)<{ `buffer`: BufferT ; `bytesRead`: *number*  }\>

Defined in: src/util/fs.ts:498

___

### readFileAsync

▸ `Const`**readFileAsync**(...`args`: *any*[]): [*Promise*](../classes/promise.md)<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** [*Promise*](../classes/promise.md)<any\>

Defined in: src/util/fs.ts:490

___

### readFileSync

▸ **readFileSync**(`path`: PathLike \| *number*, `options?`: { `encoding?`: *null* ; `flag?`: *string*  } \| *null*): Buffer

Synchronously reads the entire contents of a file.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike \| *number* | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically.   |
`options?` | { `encoding?`: *null* ; `flag?`: *string*  } \| *null* | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`.    |

**Returns:** Buffer

Defined in: node_modules/@types/node/fs.d.ts:1379

▸ **readFileSync**(`path`: PathLike \| *number*, `options`: { `encoding`: *string* ; `flag?`: *string*  } \| *string*): *string*

Synchronously reads the entire contents of a file.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike \| *number* | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically.   |
`options` | { `encoding`: *string* ; `flag?`: *string*  } \| *string* | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`.    |

**Returns:** *string*

Defined in: node_modules/@types/node/fs.d.ts:1389

▸ **readFileSync**(`path`: PathLike \| *number*, `options?`: { `encoding?`: *string* \| *null* ; `flag?`: *string*  } \| *string* \| *null*): *string* \| Buffer

Synchronously reads the entire contents of a file.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike \| *number* | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically.   |
`options?` | { `encoding?`: *string* \| *null* ; `flag?`: *string*  } \| *string* \| *null* | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`.    |

**Returns:** *string* \| Buffer

Defined in: node_modules/@types/node/fs.d.ts:1399

___

### readdirAsync

▸ `Const`**readdirAsync**(`path`: *string*): [*Promise*](../classes/promise.md)<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<string[]\>

Defined in: src/util/fs.ts:489

___

### readdirSync

▸ **readdirSync**(`path`: PathLike, `options?`: { `encoding`: BufferEncoding \| *null* ; `withFileTypes?`: *false*  } \| BufferEncoding \| *null*): *string*[]

Synchronous readdir(3) - read a directory.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike | A path to a file. If a URL is provided, it must use the `file:` protocol.   |
`options?` | { `encoding`: BufferEncoding \| *null* ; `withFileTypes?`: *false*  } \| BufferEncoding \| *null* | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.    |

**Returns:** *string*[]

Defined in: node_modules/@types/node/fs.d.ts:983

▸ **readdirSync**(`path`: PathLike, `options`: { `encoding`: *buffer* ; `withFileTypes?`: *false*  } \| *buffer*): Buffer[]

Synchronous readdir(3) - read a directory.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike | A path to a file. If a URL is provided, it must use the `file:` protocol.   |
`options` | { `encoding`: *buffer* ; `withFileTypes?`: *false*  } \| *buffer* | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.    |

**Returns:** Buffer[]

Defined in: node_modules/@types/node/fs.d.ts:990

▸ **readdirSync**(`path`: PathLike, `options?`: { `encoding?`: *string* \| *null* ; `withFileTypes?`: *false*  } \| *string* \| *null*): *string*[] \| Buffer[]

Synchronous readdir(3) - read a directory.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike | A path to a file. If a URL is provided, it must use the `file:` protocol.   |
`options?` | { `encoding?`: *string* \| *null* ; `withFileTypes?`: *false*  } \| *string* \| *null* | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.    |

**Returns:** *string*[] \| Buffer[]

Defined in: node_modules/@types/node/fs.d.ts:997

▸ **readdirSync**(`path`: PathLike, `options`: { `encoding?`: *string* \| *null* ; `withFileTypes`: *true*  }): Dirent[]

Synchronous readdir(3) - read a directory.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike | A path to a file. If a URL is provided, it must use the `file:` protocol.   |
`options` | *object* | If called with `withFileTypes: true` the result data will be an array of Dirent.    |
`options.encoding?` | *string* \| *null* | - |
`options.withFileTypes` | *true* | - |

**Returns:** Dirent[]

Defined in: node_modules/@types/node/fs.d.ts:1004

___

### readlinkAsync

▸ **readlinkAsync**(`linkPath`: *string*): [*Promise*](../classes/promise.md)<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`linkPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<string\>

Defined in: src/util/fs.ts:804

___

### removeAsync

▸ **removeAsync**(`remPath`: *string*, `options?`: [*IRemoveFileOptions*](../interfaces/fs.iremovefileoptions.md)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`remPath` | *string* |
`options?` | [*IRemoveFileOptions*](../interfaces/fs.iremovefileoptions.md) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:775

___

### removeSync

▸ **removeSync**(`dirPath`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dirPath` | *string* |

**Returns:** *void*

Defined in: src/util/fs.ts:696

___

### renameAsync

▸ **renameAsync**(`sourcePath`: *string*, `destinationPath`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`sourcePath` | *string* |
`destinationPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:733

___

### rmdirAsync

▸ **rmdirAsync**(`dirPath`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`dirPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:757

___

### statAsync

▸ `Const`**statAsync**(`path`: *string*): [*Promise*](../classes/promise.md)<[*Stats*](../classes/fs.stats.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<[*Stats*](../classes/fs.stats.md)\>

Defined in: src/util/fs.ts:491

___

### statSilentAsync

▸ `Const`**statSilentAsync**(`path`: *string*): [*Promise*](../classes/promise.md)<[*Stats*](../classes/fs.stats.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<[*Stats*](../classes/fs.stats.md)\>

Defined in: src/util/fs.ts:492

___

### statSync

▸ **statSync**(`path`: PathLike): [*Stats*](../classes/fs.stats.md)

Synchronous stat(2) - Get file status.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike | A path to a file. If a URL is provided, it must use the `file:` protocol.    |

**Returns:** [*Stats*](../classes/fs.stats.md)

Defined in: node_modules/@types/node/fs.d.ts:440

▸ **statSync**(`path`: PathLike, `options`: BigIntOptions): BigIntStats

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options` | BigIntOptions |

**Returns:** BigIntStats

Defined in: node_modules/@types/node/ts3.2/fs.d.ts:31

▸ **statSync**(`path`: PathLike, `options`: StatOptions): [*Stats*](../classes/fs.stats.md) \| BigIntStats

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options` | StatOptions |

**Returns:** [*Stats*](../classes/fs.stats.md) \| BigIntStats

Defined in: node_modules/@types/node/ts3.2/fs.d.ts:32

___

### symlinkAsync

▸ `Const`**symlinkAsync**(`srcpath`: *string*, `dstpath`: *string*, `type?`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`srcpath` | *string* |
`dstpath` | *string* |
`type?` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:493

___

### symlinkSync

▸ **symlinkSync**(`target`: PathLike, `path`: PathLike, `type?`: symlink.Type \| *null*): *void*

Synchronous symlink(2) - Create a new symbolic link to an existing file.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`target` | PathLike | A path to an existing file. If a URL is provided, it must use the `file:` protocol.   |
`path` | PathLike | A path to the new symlink. If a URL is provided, it must use the `file:` protocol.   |
`type?` | symlink.Type \| *null* | May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms). When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.    |

**Returns:** *void*

Defined in: node_modules/@types/node/fs.d.ts:545

___

### unlinkAsync

▸ **unlinkAsync**(`filePath`: *string*, `options?`: [*IRemoveFileOptions*](../interfaces/fs.iremovefileoptions.md)): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |
`options?` | [*IRemoveFileOptions*](../interfaces/fs.iremovefileoptions.md) |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:700

___

### utimesAsync

▸ `Const`**utimesAsync**(`path`: *string*, `atime`: *number*, `mtime`: *number*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`atime` | *number* |
`mtime` | *number* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:494

___

### watch

▸ **watch**(`filename`: PathLike, `options`: { `encoding?`: BufferEncoding \| *null* ; `persistent?`: *boolean* ; `recursive?`: *boolean*  } \| BufferEncoding \| *undefined* \| *null*, `listener?`: (`event`: *string*, `filename`: *string*) => *void*): [*FSWatcher*](../interfaces/fs.fswatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`filename` | PathLike | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.   |
`options` | { `encoding?`: BufferEncoding \| *null* ; `persistent?`: *boolean* ; `recursive?`: *boolean*  } \| BufferEncoding \| *undefined* \| *null* | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used.    |
`listener?` | (`event`: *string*, `filename`: *string*) => *void* | - |

**Returns:** [*FSWatcher*](../interfaces/fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:1539

▸ **watch**(`filename`: PathLike, `options`: { `encoding`: *buffer* ; `persistent?`: *boolean* ; `recursive?`: *boolean*  } \| *buffer*, `listener?`: (`event`: *string*, `filename`: Buffer) => *void*): [*FSWatcher*](../interfaces/fs.fswatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`filename` | PathLike | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.   |
`options` | { `encoding`: *buffer* ; `persistent?`: *boolean* ; `recursive?`: *boolean*  } \| *buffer* | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used.    |
`listener?` | (`event`: *string*, `filename`: Buffer) => *void* | - |

**Returns:** [*FSWatcher*](../interfaces/fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:1554

▸ **watch**(`filename`: PathLike, `options`: { `encoding?`: *string* \| *null* ; `persistent?`: *boolean* ; `recursive?`: *boolean*  } \| *string* \| *null*, `listener?`: (`event`: *string*, `filename`: *string* \| Buffer) => *void*): [*FSWatcher*](../interfaces/fs.fswatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`filename` | PathLike | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.   |
`options` | { `encoding?`: *string* \| *null* ; `persistent?`: *boolean* ; `recursive?`: *boolean*  } \| *string* \| *null* | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used.    |
`listener?` | (`event`: *string*, `filename`: *string* \| Buffer) => *void* | - |

**Returns:** [*FSWatcher*](../interfaces/fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:1565

▸ **watch**(`filename`: PathLike, `listener?`: (`event`: *string*, `filename`: *string*) => *any*): [*FSWatcher*](../interfaces/fs.fswatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`filename` | PathLike | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.    |
`listener?` | (`event`: *string*, `filename`: *string*) => *any* | - |

**Returns:** [*FSWatcher*](../interfaces/fs.fswatcher.md)

Defined in: node_modules/@types/node/fs.d.ts:1576

___

### withTmpDir

▸ `Const`**withTmpDir**(...`args`: *any*[]): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** *any*

Defined in: src/util/fs.ts:1163

___

### withTmpDirImpl

▸ **withTmpDirImpl**<T\>(`cb`: (`tmpPath`: *string*) => [*Promise*](../classes/promise.md)<T\>): [*Promise*](../classes/promise.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`cb` | (`tmpPath`: *string*) => [*Promise*](../classes/promise.md)<T\> |

**Returns:** [*Promise*](../classes/promise.md)<T\>

Defined in: src/util/fs.ts:1109

___

### withTmpFile

▸ `Const`**withTmpFile**(...`args`: *any*[]): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** *any*

Defined in: src/util/fs.ts:1164

___

### writeAsync

▸ `Const`**writeAsync**<BufferT\>(...`args`: *any*[]): [*Promise*](../classes/promise.md)<{ `buffer`: BufferT ; `bytesWritten`: *number*  }\>

#### Type parameters:

Name |
:------ |
`BufferT` |

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** [*Promise*](../classes/promise.md)<{ `buffer`: BufferT ; `bytesWritten`: *number*  }\>

Defined in: src/util/fs.ts:497

___

### writeFileAsync

▸ `Const`**writeFileAsync**(`file`: *string*, `data`: *any*, `options?`: WriteFileOptions): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`file` | *string* |
`data` | *any* |
`options?` | WriteFileOptions |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/util/fs.ts:499

___

### writeFileSync

▸ **writeFileSync**(`path`: PathLike \| *number*, `data`: *any*, `options?`: WriteFileOptions): *void*

Synchronously writes data to a file, replacing the file if it already exists.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | PathLike \| *number* | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically.   |
`data` | *any* | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.   |
`options?` | WriteFileOptions | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'w'` is used.    |

**Returns:** *void*

Defined in: node_modules/@types/node/fs.d.ts:1455

___

### writeSync

▸ **writeSync**(`fd`: *number*, `buffer`: NodeJS.ArrayBufferView, `offset?`: *number* \| *null*, `length?`: *number* \| *null*, `position?`: *number* \| *null*): *number*

Synchronously writes `buffer` to the file referenced by the supplied file descriptor, returning the number of bytes written.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`fd` | *number* | A file descriptor.   |
`buffer` | NodeJS.ArrayBufferView | - |
`offset?` | *number* \| *null* | The part of the buffer to be written. If not supplied, defaults to `0`.   |
`length?` | *number* \| *null* | The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.   |
`position?` | *number* \| *null* | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.    |

**Returns:** *number*

Defined in: node_modules/@types/node/fs.d.ts:1244

▸ **writeSync**(`fd`: *number*, `string`: *any*, `position?`: *number* \| *null*, `encoding?`: *string* \| *null*): *number*

Synchronously writes `string` to the file referenced by the supplied file descriptor, returning the number of bytes written.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`fd` | *number* | A file descriptor.   |
`string` | *any* | A string to write. If something other than a string is supplied it will be coerced to a string.   |
`position?` | *number* \| *null* | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.   |
`encoding?` | *string* \| *null* | The expected string encoding.    |

**Returns:** *number*

Defined in: node_modules/@types/node/fs.d.ts:1253
