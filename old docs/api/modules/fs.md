[vortex_devel](../README.md) / [Exports](../modules.md) / fs

# Namespace: fs

## Table of contents

### Namespaces

- [constants](fs.constants.md)

### Classes

- [Stats](../classes/fs.Stats.md)
- [WriteStream](../classes/fs.WriteStream.md)

### Interfaces

- [FSWatcher](../interfaces/fs.FSWatcher.md)
- [ILinkFileOptions](../interfaces/fs.ILinkFileOptions.md)
- [IRemoveFileOptions](../interfaces/fs.IRemoveFileOptions.md)
- [ITmpOptions](../interfaces/fs.ITmpOptions.md)

### Variables

- [statSync](fs.md#statsync)

### Functions

- [accessSync](fs.md#accesssync)
- [appendFileAsync](fs.md#appendfileasync)
- [appendFileSync](fs.md#appendfilesync)
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
- [setTFunction](fs.md#settfunction)
- [statAsync](fs.md#statasync)
- [statSilentAsync](fs.md#statsilentasync)
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

## Variables

### statSync

• **statSync**: `StatSyncFn`

Synchronous stat(2) - Get file status.

**`param`** A path to a file. If a URL is provided, it must use the `file:` protocol.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:972

## Functions

### accessSync

▸ **accessSync**(`path`, `mode?`): `void`

Synchronously tests a user's permissions for the file or directory specified
by `path`. The `mode` argument is an optional integer that specifies the
accessibility checks to be performed. Check `File access constants` for
possible values of `mode`. It is possible to create a mask consisting of
the bitwise OR of two or more values
(e.g. `fs.constants.W_OK | fs.constants.R_OK`).

If any of the accessibility checks fail, an `Error` will be thrown. Otherwise,
the method will return `undefined`.

```js
import { accessSync, constants } from 'fs';

try {
  accessSync('etc/passwd', constants.R_OK | constants.W_OK);
  console.log('can read/write');
} catch (err) {
  console.error('no access!');
}
```

**`since`** v0.11.15

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `mode?` | `number` |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3383

___

### appendFileAsync

▸ `Const` **appendFileAsync**(`file`, `data`, `options?`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options?` | `WriteFileOptions` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:444

___

### appendFileSync

▸ **appendFileSync**(`path`, `data`, `options?`): `void`

Synchronously append data to a file, creating the file if it does not yet
exist. `data` can be a string or a `Buffer`.

The `mode` option only affects the newly created file. See {@link open} for more details.

```js
import { appendFileSync } from 'fs';

try {
  appendFileSync('message.txt', 'data to append');
  console.log('The "data to append" was appended to file!');
} catch (err) {
  // Handle the error
}
```

If `options` is a string, then it specifies the encoding:

```js
import { appendFileSync } from 'fs';

appendFileSync('message.txt', 'data to append', 'utf8');
```

The `path` may be specified as a numeric file descriptor that has been opened
for appending (using `fs.open()` or `fs.openSync()`). The file descriptor will
not be closed automatically.

```js
import { openSync, closeSync, appendFileSync } from 'fs';

let fd;

try {
  fd = openSync('message.txt', 'a');
  appendFileSync(fd, 'data to append', 'utf8');
} catch (err) {
  // Handle the error
} finally {
  if (fd !== undefined)
    closeSync(fd);
}
```

**`since`** v0.6.7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | filename or file descriptor |
| `data` | `string` \| `Uint8Array` | - |
| `options?` | `WriteFileOptions` | - |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2763

___

### changeFileAttributes

▸ **changeFileAttributes**(`filePath`, `wantedAttributes`, `stat`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `wantedAttributes` | `number` |
| `stat` | [`Stats`](../classes/fs.Stats.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:943

___

### changeFileOwnership

▸ **changeFileOwnership**(`filePath`, `stat`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `stat` | [`Stats`](../classes/fs.Stats.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:913

___

### chmodAsync

▸ `Const` **chmodAsync**(`path`, `mode`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `mode` | `string` \| `number` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:425

___

### closeAsync

▸ `Const` **closeAsync**(`fd`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:426

___

### closeSync

▸ **closeSync**(`fd`): `void`

Closes the file descriptor. Returns `undefined`.

Calling `fs.closeSync()` on any file descriptor (`fd`) that is currently in use
through any other `fs` operation may lead to undefined behavior.

See the POSIX [`close(2)`](http://man7.org/linux/man-pages/man2/close.2.html) documentation for more detail.

**`since`** v0.1.21

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:1978

___

### copyAsync

▸ **copyAsync**(`src`, `dest`, `options?`): [`Promise`](../classes/Promise.md)<`void`\>

copy file
The copy function from fs-extra doesn't (at the time of writing) correctly check that a file
isn't copied onto itself (it fails for links or potentially on case insensitive disks),
so this makes a check based on the ino number.
A bug in older versions of node.js made it necessary this check be optional but that is
resolved now so the check should always be enabled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` | file to copy |
| `dest` | `string` | destination path |
| `options?` | `CopyOptions` & { `noSelfCopy?`: `boolean` ; `showDialogCallback?`: () => `boolean`  } | copy options (see documentation for fs) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:591

___

### createReadStream

▸ **createReadStream**(`path`, `options?`): `ReadStream`

Unlike the 16 kb default `highWaterMark` for a `stream.Readable`, the stream
returned by this method has a default `highWaterMark` of 64 kb.

`options` can include `start` and `end` values to read a range of bytes from
the file instead of the entire file. Both `start` and `end` are inclusive and
start counting at 0, allowed values are in the
\[0, [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)\] range. If `fd` is specified and `start` is
omitted or `undefined`, `fs.createReadStream()` reads sequentially from the
current file position. The `encoding` can be any one of those accepted by `Buffer`.

If `fd` is specified, `ReadStream` will ignore the `path` argument and will use
the specified file descriptor. This means that no `'open'` event will be
emitted. `fd` should be blocking; non-blocking `fd`s should be passed to `net.Socket`.

If `fd` points to a character device that only supports blocking reads
(such as keyboard or sound card), read operations do not finish until data is
available. This can prevent the process from exiting and the stream from
closing naturally.

By default, the stream will emit a `'close'` event after it has been
destroyed.  Set the `emitClose` option to `false` to change this behavior.

By providing the `fs` option, it is possible to override the corresponding `fs`implementations for `open`, `read`, and `close`. When providing the `fs` option,
an override for `read` is required. If no `fd` is provided, an override for`open` is also required. If `autoClose` is `true`, an override for `close` is
also required.

```js
import { createReadStream } from 'fs';

// Create a stream from some character device.
const stream = createReadStream('/dev/input/event0');
setTimeout(() => {
  stream.close(); // This may not close the stream.
  // Artificially marking end-of-stream, as if the underlying resource had
  // indicated end-of-file by itself, allows the stream to close.
  // This does not cancel pending read operations, and if there is such an
  // operation, the process may still not be able to exit successfully
  // until it finishes.
  stream.push(null);
  stream.read(0);
}, 100);
```

If `autoClose` is false, then the file descriptor won't be closed, even if
there's an error. It is the application's responsibility to close it and make
sure there's no file descriptor leak. If `autoClose` is set to true (default
behavior), on `'error'` or `'end'` the file descriptor will be closed
automatically.

`mode` sets the file mode (permission and sticky bits), but only if the
file was created.

An example to read the last 10 bytes of a file which is 100 bytes long:

```js
import { createReadStream } from 'fs';

createReadStream('sample.txt', { start: 90, end: 99 });
```

If `options` is a string, then it specifies the encoding.

**`since`** v0.1.31

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | `BufferEncoding` \| `ReadStreamOptions` |

#### Returns

`ReadStream`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3464

___

### createWriteStream

▸ **createWriteStream**(`path`, `options?`): [`WriteStream`](../classes/fs.WriteStream.md)

`options` may also include a `start` option to allow writing data at some
position past the beginning of the file, allowed values are in the
\[0, [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)\] range. Modifying a file rather than replacing
it may require the `flags` option to be set to `r+` rather than the default `w`.
The `encoding` can be any one of those accepted by `Buffer`.

If `autoClose` is set to true (default behavior) on `'error'` or `'finish'`the file descriptor will be closed automatically. If `autoClose` is false,
then the file descriptor won't be closed, even if there's an error.
It is the application's responsibility to close it and make sure there's no
file descriptor leak.

By default, the stream will emit a `'close'` event after it has been
destroyed.  Set the `emitClose` option to `false` to change this behavior.

By providing the `fs` option it is possible to override the corresponding `fs`implementations for `open`, `write`, `writev` and `close`. Overriding `write()`without `writev()` can reduce
performance as some optimizations (`_writev()`)
will be disabled. When providing the `fs` option, overrides for at least one of`write` and `writev` are required. If no `fd` option is supplied, an override
for `open` is also required. If `autoClose` is `true`, an override for `close`is also required.

Like `fs.ReadStream`, if `fd` is specified, `fs.WriteStream` will ignore the`path` argument and will use the specified file descriptor. This means that no`'open'` event will be
emitted. `fd` should be blocking; non-blocking `fd`s
should be passed to `net.Socket`.

If `options` is a string, then it specifies the encoding.

**`since`** v0.1.31

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | `BufferEncoding` \| `StreamOptions` |

#### Returns

[`WriteStream`](../classes/fs.WriteStream.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3492

___

### ensureDirAsync

▸ **ensureDirAsync**(`dirPath`, `onDirCreatedCB?`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |
| `onDirCreatedCB?` | (`created`: `string`) => [`Promise`](../classes/Promise.md)<`void`\> |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:489

___

### ensureDirSync

▸ **ensureDirSync**(`dirPath`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |

#### Returns

`void`

#### Defined in

../src/util/fs.ts:473

___

### ensureDirWritableAsync

▸ **ensureDirWritableAsync**(`dirPath`, `confirm?`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |
| `confirm?` | () => `PromiseLike`<`void`\> |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:834

___

### ensureFileAsync

▸ **ensureFileAsync**(`filePath`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:481

___

### forcePerm

▸ **forcePerm**<`T`\>(`t`, `op`, `filePath?`, `maxTries?`): [`Promise`](../classes/Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `t` | `TFunction` | `undefined` |
| `op` | () => [`Promise`](../classes/Promise.md)<`T`\> | `undefined` |
| `filePath?` | `string` | `undefined` |
| `maxTries` | `number` | `3` |

#### Returns

[`Promise`](../classes/Promise.md)<`T`\>

#### Defined in

../src/util/fs.ts:1026

___

### fsyncAsync

▸ `Const` **fsyncAsync**(`fd`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:427

___

### genFSWrapperAsync

▸ **genFSWrapperAsync**<`T`\>(`func`): (...`args`: `any`[]) => `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `T` |

#### Returns

`fn`

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

../src/util/fs.ts:412

___

### isDirectoryAsync

▸ **isDirectoryAsync**(`dirPath`): [`Promise`](../classes/Promise.md)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`boolean`\>

#### Defined in

../src/util/fs.ts:468

___

### linkAsync

▸ **linkAsync**(`src`, `dest`, `options?`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `options?` | [`ILinkFileOptions`](../interfaces/fs.ILinkFileOptions.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:623

___

### linkSync

▸ **linkSync**(`existingPath`, `newPath`): `void`

Creates a new link from the `existingPath` to the `newPath`. See the POSIX [`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html) documentation for more detail. Returns `undefined`.

**`since`** v0.1.31

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingPath` | `PathLike` |
| `newPath` | `PathLike` |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:1103

___

### lstatAsync

▸ `Const` **lstatAsync**(`path`): [`Promise`](../classes/Promise.md)<[`Stats`](../classes/fs.Stats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<[`Stats`](../classes/fs.Stats.md)\>

#### Defined in

../src/util/fs.ts:428

___

### makeFileWritableAsync

▸ **makeFileWritableAsync**(`filePath`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:955

___

### mkdirAsync

▸ `Const` **mkdirAsync**(`path`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:429

___

### mkdirsAsync

▸ `Const` **mkdirsAsync**(`path`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:430

___

### moveAsync

▸ `Const` **moveAsync**(`src`, `dest`, `options?`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `options?` | `MoveOptions` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:431

___

### moveRenameAsync

▸ **moveRenameAsync**(`src`, `dest`): [`Promise`](../classes/Promise.md)<`string`\>

move a file. If the destination exists, will generate a new name with an
increasing counter until an unused name is found

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`string`\>

#### Defined in

../src/util/fs.ts:574

___

### openAsync

▸ `Const` **openAsync**(`path`, `flags`, `mode?`): [`Promise`](../classes/Promise.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `flags` | `string` \| `number` |
| `mode?` | `number` |

#### Returns

[`Promise`](../classes/Promise.md)<`number`\>

#### Defined in

../src/util/fs.ts:432

___

### openSync

▸ **openSync**(`path`, `flags`, `mode?`): `number`

Returns an integer representing the file descriptor.

For detailed information, see the documentation of the asynchronous version of
this API: {@link open}.

**`since`** v0.1.21

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `flags` | `OpenMode` |
| `mode?` | `Mode` |

#### Returns

`number`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2019

___

### readAsync

▸ `Const` **readAsync**<`BufferT`\>(...`args`): [`Promise`](../classes/Promise.md)<{ `buffer`: `BufferT` ; `bytesRead`: `number`  }\>

#### Type parameters

| Name |
| :------ |
| `BufferT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`Promise`](../classes/Promise.md)<{ `buffer`: `BufferT` ; `bytesRead`: `number`  }\>

#### Defined in

../src/util/fs.ts:442

___

### readFileAsync

▸ `Const` **readFileAsync**(...`args`): [`Promise`](../classes/Promise.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`Promise`](../classes/Promise.md)<`any`\>

#### Defined in

../src/util/fs.ts:434

___

### readFileSync

▸ **readFileSync**(`path`, `options?`): `Buffer`

Returns the contents of the `path`.

For detailed information, see the documentation of the asynchronous version of
this API: [readFile](../interfaces/types.IArchiveHandler.md#readfile).

If the `encoding` option is specified then this function returns a
string. Otherwise it returns a buffer.

Similar to [readFile](../interfaces/types.IArchiveHandler.md#readfile), when the path is a directory, the behavior of`fs.readFileSync()` is platform-specific.

```js
import { readFileSync } from 'fs';

// macOS, Linux, and Windows
readFileSync('<directory>');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

//  FreeBSD
readFileSync('<directory>'); // => <data>
```

**`since`** v0.1.8

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | filename or file descriptor |
| `options?` | `Object` | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |
| `options.encoding?` | ``null`` | - |
| `options.flag?` | `string` | - |

#### Returns

`Buffer`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2494

▸ **readFileSync**(`path`, `options`): `string`

Synchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `flag?`: `string`  } | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`string`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2508

▸ **readFileSync**(`path`, `options?`): `string` \| `Buffer`

Synchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options?` | `BufferEncoding` \| `ObjectEncodingOptions` & { `flag?`: `string`  } | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`string` \| `Buffer`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2524

___

### readdirAsync

▸ `Const` **readdirAsync**(`path`): [`Promise`](../classes/Promise.md)<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`string`[]\>

#### Defined in

../src/util/fs.ts:433

___

### readdirSync

▸ **readdirSync**(`path`, `options?`): `string`[]

Reads the contents of the directory.

See the POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the filenames returned. If the `encoding` is set to `'buffer'`,
the filenames returned will be passed as `Buffer` objects.

If `options.withFileTypes` is set to `true`, the result will contain `fs.Dirent` objects.

**`since`** v0.1.21

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `withFileTypes?`: ``false``  } | If called with `withFileTypes: true` the result data will be an array of Dirent. |

#### Returns

`string`[]

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:1902

▸ **readdirSync**(`path`, `options`): `Buffer`[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } \| ``"buffer"`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Buffer`[]

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:1917

▸ **readdirSync**(`path`, `options?`): `string`[] \| `Buffer`[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| `ObjectEncodingOptions` & { `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string`[] \| `Buffer`[]

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:1931

▸ **readdirSync**(`path`, `options`): `Dirent`[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | `ObjectEncodingOptions` & { `withFileTypes`: ``true``  } | If called with `withFileTypes: true` the result data will be an array of Dirent. |

#### Returns

`Dirent`[]

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:1945

___

### readlinkAsync

▸ **readlinkAsync**(`linkPath`): [`Promise`](../classes/Promise.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`string`\>

#### Defined in

../src/util/fs.ts:750

___

### removeAsync

▸ **removeAsync**(`remPath`, `options?`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `remPath` | `string` |
| `options?` | [`IRemoveFileOptions`](../interfaces/fs.IRemoveFileOptions.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:721

___

### removeSync

▸ **removeSync**(`dirPath`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |

#### Returns

`void`

#### Defined in

../src/util/fs.ts:642

___

### renameAsync

▸ **renameAsync**(`sourcePath`, `destinationPath`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourcePath` | `string` |
| `destinationPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:679

___

### rmdirAsync

▸ **rmdirAsync**(`dirPath`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:703

___

### setTFunction

▸ **setTFunction**(`tFunc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tFunc` | `TFunction` |

#### Returns

`void`

#### Defined in

../src/util/fs.ts:76

___

### statAsync

▸ `Const` **statAsync**(`path`): [`Promise`](../classes/Promise.md)<[`Stats`](../classes/fs.Stats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<[`Stats`](../classes/fs.Stats.md)\>

#### Defined in

../src/util/fs.ts:435

___

### statSilentAsync

▸ `Const` **statSilentAsync**(`path`): [`Promise`](../classes/Promise.md)<[`Stats`](../classes/fs.Stats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<[`Stats`](../classes/fs.Stats.md)\>

#### Defined in

../src/util/fs.ts:436

___

### symlinkAsync

▸ `Const` **symlinkAsync**(`srcpath`, `dstpath`, `type?`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcpath` | `string` |
| `dstpath` | `string` |
| `type?` | `string` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:437

___

### symlinkSync

▸ **symlinkSync**(`target`, `path`, `type?`): `void`

Returns `undefined`.

For detailed information, see the documentation of the asynchronous version of
this API: {@link symlink}.

**`since`** v0.1.31

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `PathLike` |
| `path` | `PathLike` |
| `type?` | `Type` |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:1160

___

### unlinkAsync

▸ **unlinkAsync**(`filePath`, `options?`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `options?` | [`IRemoveFileOptions`](../interfaces/fs.IRemoveFileOptions.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:646

___

### utimesAsync

▸ `Const` **utimesAsync**(`path`, `atime`, `mtime`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `atime` | `number` |
| `mtime` | `number` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:438

___

### watch

▸ **watch**(`filename`, `options`, `listener?`): [`FSWatcher`](../interfaces/fs.FSWatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a
directory.

The second argument is optional. If `options` is provided as a string, it
specifies the `encoding`. Otherwise `options` should be passed as an object.

The listener callback gets two arguments `(eventType, filename)`. `eventType`is either `'rename'` or `'change'`, and `filename` is the name of the file
which triggered the event.

On most platforms, `'rename'` is emitted whenever a filename appears or
disappears in the directory.

The listener callback is attached to the `'change'` event fired by `fs.FSWatcher`, but it is not the same thing as the `'change'` value of`eventType`.

If a `signal` is passed, aborting the corresponding AbortController will close
the returned `fs.FSWatcher`.

**`since`** v0.5.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `PathLike` | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. |
| `options` | ``"buffer"`` \| `WatchOptions` & { `encoding`: ``"buffer"``  } | - |
| `listener?` | `WatchListener`<`Buffer`\> |  |

#### Returns

[`FSWatcher`](../interfaces/fs.FSWatcher.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2878

▸ **watch**(`filename`, `options?`, `listener?`): [`FSWatcher`](../interfaces/fs.FSWatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `PathLike` | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| `WatchOptions` | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used. |
| `listener?` | `WatchListener`<`string`\> | - |

#### Returns

[`FSWatcher`](../interfaces/fs.FSWatcher.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2895

▸ **watch**(`filename`, `options`, `listener?`): [`FSWatcher`](../interfaces/fs.FSWatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `PathLike` | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. |
| `options` | `string` \| `WatchOptions` | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used. |
| `listener?` | `WatchListener`<`string` \| `Buffer`\> | - |

#### Returns

[`FSWatcher`](../interfaces/fs.FSWatcher.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2904

▸ **watch**(`filename`, `listener?`): [`FSWatcher`](../interfaces/fs.FSWatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `PathLike` | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. |
| `listener?` | `WatchListener`<`string`\> | - |

#### Returns

[`FSWatcher`](../interfaces/fs.FSWatcher.md)

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2909

___

### withTmpDir

▸ `Const` **withTmpDir**(...`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

../src/util/fs.ts:1109

___

### withTmpDirImpl

▸ **withTmpDirImpl**<`T`\>(`cb`): [`Promise`](../classes/Promise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`tmpPath`: `string`) => [`Promise`](../classes/Promise.md)<`T`\> |

#### Returns

[`Promise`](../classes/Promise.md)<`T`\>

#### Defined in

../src/util/fs.ts:1055

___

### withTmpFile

▸ `Const` **withTmpFile**(...`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

../src/util/fs.ts:1110

___

### writeAsync

▸ `Const` **writeAsync**<`BufferT`\>(...`args`): [`Promise`](../classes/Promise.md)<{ `buffer`: `BufferT` ; `bytesWritten`: `number`  }\>

#### Type parameters

| Name |
| :------ |
| `BufferT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`Promise`](../classes/Promise.md)<{ `buffer`: `BufferT` ; `bytesWritten`: `number`  }\>

#### Defined in

../src/util/fs.ts:441

___

### writeFileAsync

▸ `Const` **writeFileAsync**(`file`, `data`, `options?`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options?` | `WriteFileOptions` |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/util/fs.ts:443

___

### writeFileSync

▸ **writeFileSync**(`file`, `data`, `options?`): `void`

Returns `undefined`.

If `data` is a plain object, it must have an own (not inherited) `toString`function property.

The `mode` option only affects the newly created file. See {@link open} for more details.

For detailed information, see the documentation of the asynchronous version of
this API: {@link writeFile}.

**`since`** v0.1.29

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `PathOrFileDescriptor` | filename or file descriptor |
| `data` | `string` \| `ArrayBufferView` | - |
| `options?` | `WriteFileOptions` | - |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2639

___

### writeSync

▸ **writeSync**(`fd`, `buffer`, `offset?`, `length?`, `position?`): `number`

If `buffer` is a plain object, it must have an own (not inherited) `toString`function property.

For detailed information, see the documentation of the asynchronous version of
this API: [write](../classes/fs.WriteStream.md#write).

**`since`** v0.1.21

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `buffer` | `ArrayBufferView` | - |
| `offset?` | `number` | - |
| `length?` | `number` | - |
| `position?` | `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |

#### Returns

`number`

The number of bytes written.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2221

▸ **writeSync**(`fd`, `string`, `position?`, `encoding?`): `number`

Synchronously writes `string` to the file referenced by the supplied file descriptor, returning the number of bytes written.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `string` | `string` | A string to write. |
| `position?` | `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
| `encoding?` | `BufferEncoding` | The expected string encoding. |

#### Returns

`number`

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:2229
