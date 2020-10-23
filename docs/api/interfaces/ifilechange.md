**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IFileChange

# Interface: IFileChange

details about a file change

## Hierarchy

* **IFileChange**

## Index

### Properties

* [changeType](ifilechange.md#changetype)
* [destTime](ifilechange.md#desttime)
* [filePath](ifilechange.md#filepath)
* [source](ifilechange.md#source)
* [sourceTime](ifilechange.md#sourcetime)

## Properties

### changeType

•  **changeType**: \"refchange\" \| \"valchange\" \| \"deleted\" \| \"srcdeleted\"

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:33*

type of change.
refchange means that the installed file
  now references a different object. This could happen if a
  file was installed/overwritten by a different application
  or the file was changed by an application that didn't edit
  in-place (most applications will write to a temporary file
  and, on success, move the temp file over the original, thus
  creating a new file entry)
valchange means that the content of the file was changed
  in-place (as in: file was opened and then written to)
deleted means that the file was deleted in the destination directory
srcdeleted means that the file was deleted in the source directory

___

### destTime

• `Optional` **destTime**: Date

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:37*

time the deployed file was last changed

___

### filePath

•  **filePath**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:14*

relative path to the changed file

___

### source

•  **source**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:18*

the source mod

___

### sourceTime

• `Optional` **sourceTime**: Date

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:41*

time the staging file was last changed
