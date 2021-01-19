**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IArchiveHandler

# Interface: IArchiveHandler

interface for archive handlers, exposing files inside archives to to other extensions

**`export`** 

**`interface`** IArchiveHandler

## Hierarchy

* **IArchiveHandler**

## Index

### Methods

* [addFile](iarchivehandler.md#addfile)
* [create](iarchivehandler.md#create)
* [extractAll](iarchivehandler.md#extractall)
* [extractFile](iarchivehandler.md#extractfile)
* [readDir](iarchivehandler.md#readdir)
* [readFile](iarchivehandler.md#readfile)
* [write](iarchivehandler.md#write)

## Methods

### addFile

▸ `Optional`**addFile**(`filePath`: string, `sourcePath`: string): Promise\<void>

*Defined in Work/vortex/src/types/IExtensionContext.ts:242*

#### Parameters:

Name | Type |
------ | ------ |
`filePath` | string |
`sourcePath` | string |

**Returns:** Promise\<void>

___

### create

▸ `Optional`**create**(`sourcePath`: string): Promise\<void>

*Defined in Work/vortex/src/types/IExtensionContext.ts:243*

#### Parameters:

Name | Type |
------ | ------ |
`sourcePath` | string |

**Returns:** Promise\<void>

___

### extractAll

▸ **extractAll**(`outputPath`: string): Promise\<void>

*Defined in Work/vortex/src/types/IExtensionContext.ts:241*

#### Parameters:

Name | Type |
------ | ------ |
`outputPath` | string |

**Returns:** Promise\<void>

___

### extractFile

▸ `Optional`**extractFile**(`filePath`: string, `outputPath`: string): Promise\<void>

*Defined in Work/vortex/src/types/IExtensionContext.ts:240*

#### Parameters:

Name | Type |
------ | ------ |
`filePath` | string |
`outputPath` | string |

**Returns:** Promise\<void>

___

### readDir

▸ **readDir**(`archPath`: string): Promise\<string[]>

*Defined in Work/vortex/src/types/IExtensionContext.ts:238*

#### Parameters:

Name | Type |
------ | ------ |
`archPath` | string |

**Returns:** Promise\<string[]>

___

### readFile

▸ `Optional`**readFile**(`filePath`: string): ReadableStream

*Defined in Work/vortex/src/types/IExtensionContext.ts:239*

#### Parameters:

Name | Type |
------ | ------ |
`filePath` | string |

**Returns:** ReadableStream

___

### write

▸ `Optional`**write**(): Promise\<void>

*Defined in Work/vortex/src/types/IExtensionContext.ts:244*

**Returns:** Promise\<void>
