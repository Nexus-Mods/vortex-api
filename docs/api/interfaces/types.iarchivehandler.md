[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IArchiveHandler

# Interface: IArchiveHandler

[types](../modules/types.md).IArchiveHandler

interface for archive handlers, exposing files inside archives to to other extensions

**`export`** 

**`interface`** IArchiveHandler

## Table of contents

### Methods

- [addFile](types.iarchivehandler.md#addfile)
- [create](types.iarchivehandler.md#create)
- [extractAll](types.iarchivehandler.md#extractall)
- [extractFile](types.iarchivehandler.md#extractfile)
- [readDir](types.iarchivehandler.md#readdir)
- [readFile](types.iarchivehandler.md#readfile)
- [write](types.iarchivehandler.md#write)

## Methods

### addFile

▸ `Optional`**addFile**(`filePath`: *string*, `sourcePath`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |
`sourcePath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IExtensionContext.ts:245

___

### create

▸ `Optional`**create**(`sourcePath`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`sourcePath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IExtensionContext.ts:246

___

### extractAll

▸ **extractAll**(`outputPath`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`outputPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IExtensionContext.ts:244

___

### extractFile

▸ `Optional`**extractFile**(`filePath`: *string*, `outputPath`: *string*): [*Promise*](../classes/promise.md)<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |
`outputPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IExtensionContext.ts:243

___

### readDir

▸ **readDir**(`archPath`: *string*): [*Promise*](../classes/promise.md)<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`archPath` | *string* |

**Returns:** [*Promise*](../classes/promise.md)<string[]\>

Defined in: src/types/IExtensionContext.ts:241

___

### readFile

▸ `Optional`**readFile**(`filePath`: *string*): *ReadableStream*

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** *ReadableStream*

Defined in: src/types/IExtensionContext.ts:242

___

### write

▸ `Optional`**write**(): [*Promise*](../classes/promise.md)<void\>

**Returns:** [*Promise*](../classes/promise.md)<void\>

Defined in: src/types/IExtensionContext.ts:247
