**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IDiscoveredTool

# Interface: IDiscoveredTool

## Hierarchy

* [ITool](itool.md)

  ↳ **IDiscoveredTool**

## Index

### Properties

* [custom](idiscoveredtool.md#custom)
* [defaultPrimary](idiscoveredtool.md#defaultprimary)
* [detach](idiscoveredtool.md#detach)
* [environment](idiscoveredtool.md#environment)
* [exclusive](idiscoveredtool.md#exclusive)
* [executable](idiscoveredtool.md#executable)
* [hidden](idiscoveredtool.md#hidden)
* [id](idiscoveredtool.md#id)
* [logo](idiscoveredtool.md#logo)
* [name](idiscoveredtool.md#name)
* [onStart](idiscoveredtool.md#onstart)
* [parameters](idiscoveredtool.md#parameters)
* [path](idiscoveredtool.md#path)
* [queryPath](idiscoveredtool.md#querypath)
* [relative](idiscoveredtool.md#relative)
* [requiredFiles](idiscoveredtool.md#requiredfiles)
* [shell](idiscoveredtool.md#shell)
* [shortName](idiscoveredtool.md#shortname)
* [timestamp](idiscoveredtool.md#timestamp)
* [workingDirectory](idiscoveredtool.md#workingdirectory)

## Properties

### custom

•  **custom**: boolean

*Defined in Work/vortex/src/types/IDiscoveredTool.ts:7*

___

### defaultPrimary

• `Optional` **defaultPrimary**: boolean

*Inherited from [ITool](itool.md).[defaultPrimary](itool.md#defaultprimary)*

*Defined in Work/vortex/src/types/ITool.ts:149*

if this tool is installed, use it as the primary tool (unless the user has manually set a
primary of course)
If multiple tools with this flag are installed it's effectively random which one gets picked,
we make no promises on any kind of consistency

___

### detach

• `Optional` **detach**: boolean

*Inherited from [ITool](itool.md).[detach](itool.md#detach)*

*Defined in Work/vortex/src/types/ITool.ts:141*

if set to true the process tool will be launched detached, that is: not part of Vortex's
process hierarchy

___

### environment

• `Optional` **environment**: { [key:string]: string;  }

*Inherited from [ITool](itool.md).[environment](itool.md#environment)*

*Defined in Work/vortex/src/types/ITool.ts:118*

variables to add to the environment when starting this exe. These are in addition to
(and replacing) existing variables that would be passed automatically.

___

### exclusive

• `Optional` **exclusive**: boolean

*Inherited from [ITool](itool.md).[exclusive](itool.md#exclusive)*

*Defined in Work/vortex/src/types/ITool.ts:135*

if true, running this tool will block any other applications be run from vortex until it's
done. Defaults to false

___

### executable

•  **executable**: (discoveredPath?: string) => string

*Inherited from [ITool](itool.md).[executable](itool.md#executable)*

*Defined in Work/vortex/src/types/ITool.ts:80*

return the path of the tool executable relative to the tool base path,
i.e. binaries/UT3.exe or TESV.exe
This is a function so that you can return different things based on
the operating system for example but be aware that it will be evaluated at
application start and only once, so the return value can not depend on things
that change at runtime.

Optional: Game extensions are free to ignore the parameter and they have
  to work if the parameter is undefined.
  executable will be called with the parameter set at the time the game is discovered.
  If there are multiple versions of the game with different executables, it can return
  the correct executable based on the variant installed.
  This is a synchronous function so game extensions will probably want to use something
  like fs.statSync to text for file existance

___

### hidden

•  **hidden**: boolean

*Defined in Work/vortex/src/types/IDiscoveredTool.ts:6*

___

### id

•  **id**: string

*Inherited from [ITool](itool.md).[id](itool.md#id)*

*Defined in Work/vortex/src/types/ITool.ts:19*

internal name of the tool

___

### logo

• `Optional` **logo**: string

*Inherited from [ITool](itool.md).[logo](itool.md#logo)*

*Defined in Work/vortex/src/types/ITool.ts:50*

path to the image that is to be used as the logo for this tool.
Please note: The logo should be easily recognizable and distinguishable from
other tools.
For game logos consider this:
 - it is especially important to consider distinguishability between different
   games of the same series.
 - Preferably the logo should *not* contain the game name because Vortex will display
   the name as text near the logo. This way the name can be localised.
 - Background should be transparent. The logo will be resized preserving aspect
   ratio, the canvas has a 3:4 (portrait) ratio.

___

### name

•  **name**: string

*Inherited from [ITool](itool.md).[name](itool.md#name)*

*Defined in Work/vortex/src/types/ITool.ts:26*

human readable name used in presentation to the user

___

### onStart

• `Optional` **onStart**: \"hide\" \| \"hide\_recover\" \| \"close\"

*Inherited from [ITool](itool.md).[onStart](itool.md#onstart)*

*Defined in Work/vortex/src/types/ITool.ts:155*

what to do with Vortex when starting the tool. Default is to do nothing. 'hide' will minimize
Vortex and 'close' will make Vortex quit as soon as the tool is started.

___

### parameters

• `Optional` **parameters**: string[]

*Inherited from [ITool](itool.md).[parameters](itool.md#parameters)*

*Defined in Work/vortex/src/types/ITool.ts:112*

list of parameters to pass to the tool

**`memberof`** ITool

___

### path

•  **path**: string

*Defined in Work/vortex/src/types/IDiscoveredTool.ts:5*

___

### queryPath

• `Optional` **queryPath**: () => string \| Promise\<string>

*Inherited from [ITool](itool.md).[queryPath](itool.md#querypath)*

*Defined in Work/vortex/src/types/ITool.ts:62*

determine installation path of this tool/game
This function should return quickly and, if it returns a value,
it should definitively be the valid tool/game path. Usually this function
will query the path from the registry or from steam.
This function may return a promise and it should do that if it's doing I/O

This may be left undefined but then the tool/game can only be discovered
by searching the disk which is slow and only happens manually.

___

### relative

• `Optional` **relative**: boolean

*Inherited from [ITool](itool.md).[relative](itool.md#relative)*

*Defined in Work/vortex/src/types/ITool.ts:124*

if true, the tool is expected to be installed relative to the game directory. Otherwise
the tool will be detected anywhere on the disk.

___

### requiredFiles

•  **requiredFiles**: string[]

*Inherited from [ITool](itool.md).[requiredFiles](itool.md#requiredfiles)*

*Defined in Work/vortex/src/types/ITool.ts:104*

list of files that have to exist in the directory of this tool.
This is used by the discovery to identify the tool/game. Vortex will only accept
a directory as the tool directory if all these files exist.
Please make sure the files listed here uniquely identify the tool, something
like 'rpg_rt.exe' would not suffice (rpg_rt.exe is the binary name of a game
engine and appears in many games).

Please specify as few files as possible, the more files specified here the slower
the discovery will be.

Each file can be specified as a relative path (i.e. binaries/UT3.exe), the path
is then assumed to be relative to the base directory of the application. It's important
this is the case so that Vortex can correctly identify the base directory.

You can actually use a directory name for this as well.

Prefer to NOT use executables because those will differ between operating systems
so if the tool/game is multi-platform better use a data file.

___

### shell

• `Optional` **shell**: boolean

*Inherited from [ITool](itool.md).[shell](itool.md#shell)*

*Defined in Work/vortex/src/types/ITool.ts:129*

if true, the tool will be run inside a shell

___

### shortName

• `Optional` **shortName**: string

*Inherited from [ITool](itool.md).[shortName](itool.md#shortname)*

*Defined in Work/vortex/src/types/ITool.ts:34*

short/abbreviated variant of the name, still intended for presentation to the user
this is used when available space is limited. Try to keep it below 8 characters
(there is no fixed limit but layout may break if this is too long)
If none is set, falls back to name

___

### timestamp

• `Optional` **timestamp**: number

*Defined in Work/vortex/src/types/IDiscoveredTool.ts:10*

___

### workingDirectory

• `Optional` **workingDirectory**: string

*Defined in Work/vortex/src/types/IDiscoveredTool.ts:9*
