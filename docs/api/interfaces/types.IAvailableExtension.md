[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IAvailableExtension

# Interface: IAvailableExtension

[types](../modules/types.md).IAvailableExtension

## Hierarchy

- `IExtensionDownloadInfo`

  ↳ **`IAvailableExtension`**

## Table of contents

### Properties

- [author](types.IAvailableExtension.md#author)
- [dependencies](types.IAvailableExtension.md#dependencies)
- [description](types.IAvailableExtension.md#description)
- [downloads](types.IAvailableExtension.md#downloads)
- [endorsements](types.IAvailableExtension.md#endorsements)
- [fileId](types.IAvailableExtension.md#fileid)
- [gameName](types.IAvailableExtension.md#gamename)
- [github](types.IAvailableExtension.md#github)
- [githubRawPath](types.IAvailableExtension.md#githubrawpath)
- [githubRelease](types.IAvailableExtension.md#githubrelease)
- [id](types.IAvailableExtension.md#id)
- [image](types.IAvailableExtension.md#image)
- [language](types.IAvailableExtension.md#language)
- [modId](types.IAvailableExtension.md#modid)
- [name](types.IAvailableExtension.md#name)
- [tags](types.IAvailableExtension.md#tags)
- [timestamp](types.IAvailableExtension.md#timestamp)
- [type](types.IAvailableExtension.md#type)
- [uploader](types.IAvailableExtension.md#uploader)
- [version](types.IAvailableExtension.md#version)

## Properties

### author

• **author**: `string`

#### Defined in

../src/extensions/extension_manager/types.ts:50

___

### dependencies

• `Optional` **dependencies**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

../src/extensions/extension_manager/types.ts:57

___

### description

• **description**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `long` | `string` |
| `short` | `string` |

#### Defined in

../src/extensions/extension_manager/types.ts:41

___

### downloads

• **downloads**: `number`

#### Defined in

../src/extensions/extension_manager/types.ts:53

___

### endorsements

• **endorsements**: `number`

#### Defined in

../src/extensions/extension_manager/types.ts:54

___

### fileId

• `Optional` **fileId**: `number`

#### Inherited from

IExtensionDownloadInfo.fileId

#### Defined in

../src/extensions/extension_manager/types.ts:34

___

### gameName

• `Optional` **gameName**: `string`

#### Defined in

../src/extensions/extension_manager/types.ts:48

___

### github

• `Optional` **github**: `string`

#### Inherited from

IExtensionDownloadInfo.github

#### Defined in

../src/extensions/extension_manager/types.ts:35

___

### githubRawPath

• `Optional` **githubRawPath**: `string`

#### Inherited from

IExtensionDownloadInfo.githubRawPath

#### Defined in

../src/extensions/extension_manager/types.ts:36

___

### githubRelease

• `Optional` **githubRelease**: `string`

#### Inherited from

IExtensionDownloadInfo.githubRelease

#### Defined in

../src/extensions/extension_manager/types.ts:37

___

### id

• `Optional` **id**: `string`

#### Defined in

../src/extensions/extension_manager/types.ts:45

___

### image

• **image**: `string`

#### Defined in

../src/extensions/extension_manager/types.ts:49

___

### language

• `Optional` **language**: `string`

#### Defined in

../src/extensions/extension_manager/types.ts:47

___

### modId

• `Optional` **modId**: `number`

#### Inherited from

IExtensionDownloadInfo.modId

#### Defined in

../src/extensions/extension_manager/types.ts:33

___

### name

• **name**: `string`

#### Inherited from

IExtensionDownloadInfo.name

#### Defined in

../src/extensions/extension_manager/types.ts:32

___

### tags

• **tags**: `string`[]

#### Defined in

../src/extensions/extension_manager/types.ts:56

___

### timestamp

• **timestamp**: `number`

#### Defined in

../src/extensions/extension_manager/types.ts:55

___

### type

• `Optional` **type**: `ExtensionType`

#### Defined in

../src/extensions/extension_manager/types.ts:46

___

### uploader

• **uploader**: `string`

#### Defined in

../src/extensions/extension_manager/types.ts:51

___

### version

• **version**: `string`

#### Defined in

../src/extensions/extension_manager/types.ts:52
