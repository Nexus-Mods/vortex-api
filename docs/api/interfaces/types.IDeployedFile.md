[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IDeployedFile

# Interface: IDeployedFile

[types](../modules/types.md).IDeployedFile

## Table of contents

### Properties

- [merged](types.IDeployedFile.md#merged)
- [relPath](types.IDeployedFile.md#relpath)
- [source](types.IDeployedFile.md#source)
- [target](types.IDeployedFile.md#target)
- [time](types.IDeployedFile.md#time)

## Properties

### merged

• `Optional` **merged**: `string`[]

if this file was created by merging, this lists all mods which were the basis of
the merge
deployment methods don't have to set this, it will be filled in by the the core
functionality

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:59

___

### relPath

• **relPath**: `string`

the relative path to the file

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:48

___

### source

• **source**: `string`

the source of the file, which should be the name of the mod

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:52

___

### target

• `Optional` **target**: `string`

the output directory for the file. This will be empty for games that put all mods
in the same directory (mergeMods is true).

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:64

___

### time

• **time**: `number`

the last-modified time of the file. This can be used to determine if the file
was changed after deployment

#### Defined in

../src/extensions/mod_management/types/IDeploymentMethod.ts:69
