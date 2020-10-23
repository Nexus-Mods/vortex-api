**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IAvailableExtension

# Interface: IAvailableExtension

## Hierarchy

* [IExtensionDownloadInfo](iextensiondownloadinfo.md)

  ↳ **IAvailableExtension**

## Index

### Properties

* [author](iavailableextension.md#author)
* [dependencies](iavailableextension.md#dependencies)
* [description](iavailableextension.md#description)
* [downloads](iavailableextension.md#downloads)
* [endorsements](iavailableextension.md#endorsements)
* [fileId](iavailableextension.md#fileid)
* [gameName](iavailableextension.md#gamename)
* [github](iavailableextension.md#github)
* [githubRawPath](iavailableextension.md#githubrawpath)
* [githubRelease](iavailableextension.md#githubrelease)
* [id](iavailableextension.md#id)
* [image](iavailableextension.md#image)
* [language](iavailableextension.md#language)
* [modId](iavailableextension.md#modid)
* [name](iavailableextension.md#name)
* [tags](iavailableextension.md#tags)
* [timestamp](iavailableextension.md#timestamp)
* [type](iavailableextension.md#type)
* [uploader](iavailableextension.md#uploader)
* [version](iavailableextension.md#version)

## Properties

### author

•  **author**: string

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:50*

___

### dependencies

• `Optional` **dependencies**: { [key:string]: any;  }

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:57*

___

### description

•  **description**: { long: string ; short: string  }

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:41*

#### Type declaration:

Name | Type |
------ | ------ |
`long` | string |
`short` | string |

___

### downloads

•  **downloads**: number

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:53*

___

### endorsements

•  **endorsements**: number

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:54*

___

### fileId

• `Optional` **fileId**: number

*Inherited from [IExtensionDownloadInfo](iextensiondownloadinfo.md).[fileId](iextensiondownloadinfo.md#fileid)*

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:34*

___

### gameName

• `Optional` **gameName**: string

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:48*

___

### github

• `Optional` **github**: string

*Inherited from [IExtensionDownloadInfo](iextensiondownloadinfo.md).[github](iextensiondownloadinfo.md#github)*

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:35*

___

### githubRawPath

• `Optional` **githubRawPath**: string

*Inherited from [IExtensionDownloadInfo](iextensiondownloadinfo.md).[githubRawPath](iextensiondownloadinfo.md#githubrawpath)*

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:36*

___

### githubRelease

• `Optional` **githubRelease**: string

*Inherited from [IExtensionDownloadInfo](iextensiondownloadinfo.md).[githubRelease](iextensiondownloadinfo.md#githubrelease)*

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:37*

___

### id

• `Optional` **id**: string

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:45*

___

### image

•  **image**: string

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:49*

___

### language

• `Optional` **language**: string

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:47*

___

### modId

• `Optional` **modId**: number

*Inherited from [IExtensionDownloadInfo](iextensiondownloadinfo.md).[modId](iextensiondownloadinfo.md#modid)*

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:33*

___

### name

•  **name**: string

*Inherited from [IExtensionDownloadInfo](iextensiondownloadinfo.md).[name](iextensiondownloadinfo.md#name)*

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:32*

___

### tags

•  **tags**: string[]

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:56*

___

### timestamp

•  **timestamp**: number

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:55*

___

### type

• `Optional` **type**: [ExtensionType](../globals.md#extensiontype)

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:46*

___

### uploader

•  **uploader**: string

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:51*

___

### version

•  **version**: string

*Defined in Work/vortex/src/extensions/extension_manager/types.ts:52*
