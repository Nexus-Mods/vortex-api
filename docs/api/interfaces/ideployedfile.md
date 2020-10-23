**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IDeployedFile

# Interface: IDeployedFile

## Hierarchy

* **IDeployedFile**

## Index

### Properties

* [merged](ideployedfile.md#merged)
* [relPath](ideployedfile.md#relpath)
* [source](ideployedfile.md#source)
* [target](ideployedfile.md#target)
* [time](ideployedfile.md#time)

## Properties

### merged

• `Optional` **merged**: string[]

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:59*

if this file was created by merging, this lists all mods which were the basis of
the merge
deployment methods don't have to set this, it will be filled in by the the core
functionality

___

### relPath

•  **relPath**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:48*

the relative path to the file

___

### source

•  **source**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:52*

the source of the file, which should be the name of the mod

___

### target

• `Optional` **target**: string

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:64*

the output directory for the file. This will be empty for games that put all mods
in the same directory (mergeMods is true).

___

### time

•  **time**: number

*Defined in Work/vortex/src/extensions/mod_management/types/IDeploymentMethod.ts:69*

the last-modified time of the file. This can be used to determine if the file
was changed after deployment
