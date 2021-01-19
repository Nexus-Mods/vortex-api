**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IGame

# Interface: IGame

interface for game extensions

**`interface`** IGame

## Hierarchy

* [ITool](itool.md)

  ↳ **IGame**

## Index

### Properties

* [compatible](igame.md#compatible)
* [contributed](igame.md#contributed)
* [defaultPrimary](igame.md#defaultprimary)
* [deploymentGate](igame.md#deploymentgate)
* [detach](igame.md#detach)
* [details](igame.md#details)
* [directoryCleaning](igame.md#directorycleaning)
* [environment](igame.md#environment)
* [exclusive](igame.md#exclusive)
* [executable](igame.md#executable)
* [extensionPath](igame.md#extensionpath)
* [final](igame.md#final)
* [getModPaths](igame.md#getmodpaths)
* [id](igame.md#id)
* [logo](igame.md#logo)
* [mergeArchive](igame.md#mergearchive)
* [mergeMods](igame.md#mergemods)
* [modTypes](igame.md#modtypes)
* [name](igame.md#name)
* [onStart](igame.md#onstart)
* [parameters](igame.md#parameters)
* [queryModPath](igame.md#querymodpath)
* [queryPath](igame.md#querypath)
* [relative](igame.md#relative)
* [requiredFiles](igame.md#requiredfiles)
* [requiresCleanup](igame.md#requirescleanup)
* [requiresLauncher](igame.md#requireslauncher)
* [setup](igame.md#setup)
* [shell](igame.md#shell)
* [shortName](igame.md#shortname)
* [supportedTools](igame.md#supportedtools)
* [version](igame.md#version)

## Properties

### compatible

• `Optional` **compatible**: { [key:string]: boolean;  }

*Defined in Work/vortex/src/types/IGame.ts:148*

declares this game compatible or incompatible with a certain feature. If not specified, a
sensible default will be assumed for each game.
So for example if you know the game won't support symbolic links but Vortex offers it by
default, you can set "{ compatible: { symlinks: false } }" so Vortex won't offer the feature.
You will have to investigate or ask for the possible ids though. Since we will be introducing
new "gates" over time and so may extensions, it's not practical (at least at this time) to
maintain a list.

___

### contributed

• `Optional` **contributed**: string

*Defined in Work/vortex/src/types/IGame.ts:154*

set to name of the contributor that added support for this game. For officialy supported
games this is undefined

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

### deploymentGate

• `Optional` **deploymentGate**: () => Promise\<void>

*Defined in Work/vortex/src/types/IGame.ts:195*

if set this function is always called before automatic deployment and it will be delayed
until the promise resolves.
This can be used if the deployment process is very slow and/or involves user interaction
(e.g. through will-deploy/did-deploy event handlers) to prevent managament becoming impractical
due to automated deployment constantly requiring attention.

Once the promise resolves the mods as enabled at that time will be deployed, so for example
if the user enabled a mod while this promise is pending, that mod will be deployed.

___

### detach

• `Optional` **detach**: boolean

*Inherited from [ITool](itool.md).[detach](itool.md#detach)*

*Defined in Work/vortex/src/types/ITool.ts:141*

if set to true the process tool will be launched detached, that is: not part of Vortex's
process hierarchy

___

### details

• `Optional` **details**: { [key:string]: any;  }

*Defined in Work/vortex/src/types/IGame.ts:137*

additional details about the game that may be used by extensions. Some extensions may work
better/offer more features if certain details are provided but they are all optional.
Extensions should do their best to work without these details, even if it takes more work
(during development and potentially at runtime)

___

### directoryCleaning

• `Optional` **directoryCleaning**: [DirectoryCleaningMode](../globals.md#directorycleaningmode)

*Defined in Work/vortex/src/types/IGame.ts:183*

decides how Vortex decides which empty directories to clean.
With 'tag' (default) we put a dummy file into each directory created by Vortex and only
  those get removed during purge (or after deployment if requiresCleanup is enabled)
With 'all' Vortex will simply clean up all empty directories, whether Vortex created them
  or not. In some (unusual) cases this may break mods

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

### extensionPath

• `Optional` **extensionPath**: string

*Defined in Work/vortex/src/types/IGame.ts:96*

path to the game extension and assets included with it. This is automatically
set on loading the extension and and pre-set value is ignored

**`memberof`** IGame

___

### final

• `Optional` **final**: boolean

*Defined in Work/vortex/src/types/IGame.ts:159*

set to true if support for this game has been fully tested

___

### getModPaths

• `Optional` **getModPaths**: (gamePath: string) => { [typeId:string]: string;  }

*Defined in Work/vortex/src/types/IGame.ts:44*

returns all directories where mods for this game
may be stored as a dictionary of type to (absolute) path.

Do not implement this in your game extension, the function
is added by vortex itself

**`param`** path where the game is installed

**`memberof`** IGame

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

### mergeArchive

• `Optional` **mergeArchive**: (filePath: string) => boolean

*Defined in Work/vortex/src/types/IGame.ts:122*

determines if a file is to be merged with others with the same path, instead of the
highest-priority one being used. This only works if support for repackaging the file type
is available

___

### mergeMods

•  **mergeMods**: boolean \| (mod: [IMod](imod.md)) => string

*Defined in Work/vortex/src/types/IGame.ts:115*

whether to merge mods in the destination directory or put each mod into a separate
dir.
Example: say queryModPath returns 'c:/awesomegame/mods' and you install a mod named
         'crazymod' that contains one file named 'crazytexture.dds'. If mergeMods is
         true then the file will be placed as c:/awesomegame/mods/crazytexture.dds.
         If mergeMods is false then it will be c:/awesomegame/mods/crazymod/crazytexture.dds.

Note: For many games the mods are already packaged in such a way that the mod has an
      additional subdirectory. In games where this is the standard, mergeMods should be true,
      otherwise Vortex would be introducing one more directory level.
Note: This should be considered together with "stop folder" handling: If the installer has
      stop folders set up for a game it will attempt to eliminate "unnecessary" sub
      directories from the mod package.
TODO The name "mergeMods" is horrible since we also talk about "merging" in the context of
     combining individual files (archives) during mod deployment which is independent of this

___

### modTypes

• `Optional` **modTypes**: [IModType](imodtype.md)[]

*Defined in Work/vortex/src/types/IGame.ts:80*

returns the mod type extensions applicable to this game (all
mod types except the default

Do not implement this in your game extension, this is added
by vortex

**`memberof`** IGame

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

### queryModPath

•  **queryModPath**: (gamePath: string) => string

*Defined in Work/vortex/src/types/IGame.ts:31*

determine the default directory where mods for this game
should be stored.

If this returns a relative path then the path is treated as relative
to the game installation directory. Simply return a dot ( () => '.' )
if mods are installed directly into the game directory

**`param`** path where the game is installed

**`memberof`** IGame

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

### requiresCleanup

• `Optional` **requiresCleanup**: boolean

*Defined in Work/vortex/src/types/IGame.ts:174*

if true, empty directories are cleaned up during deployment.
Right now this defaults to false if mergeMods is true, this defaults to true if mergeMods
is false or a function.
The reason being that otherwise we would be leaving empty directories every time a mod gets
disabled or the deployment name changes.
Users can also manually force the cleanup for all games.

___

### requiresLauncher

• `Optional` **requiresLauncher**: (gamePath: string) => Promise\<{ addInfo?: any ; launcher: string  }>

*Defined in Work/vortex/src/types/IGame.ts:68*

Determine whether the game needs to be executed via a launcher, like Steam or EpicGamesLauncher

If this returns a value, Vortex will use appropriate code for that launcher
"launcher" in the returned object is the id of the store to use to launch the game, whether
addInfo is required and what it needs to contain depends on the store.
For steam you can leave addInfo undefined, for the epic game store it has to be a string with
the application id (same id used to discover the game)

For the windows store it has to be an object with this structure:
{
  appId: <application id>,
  parameters: [
    { appExecName: <starter id> },
  ],
}
The starter id can be found by looking at the appxmanifest.xml file found in
the game directory. Look for the Id attribute in the <Application> tag.
If there are multiple <Application> tags, pick the one you actually want Vortex to start.

**`param`** path where the game is installed.

___

### setup

• `Optional` **setup**: (discovery: [IDiscoveryResult](idiscoveryresult.md)) => Promise\<void>

*Defined in Work/vortex/src/types/IGame.ts:129*

Optional setup function. If this game requires some form of setup before it can be modded
(like creating a directory, changing a registry key, ...) do it here. It will be called
every time before the game mode is activated.

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

### supportedTools

• `Optional` **supportedTools**: [ITool](itool.md)[]

*Defined in Work/vortex/src/types/IGame.ts:87*

list of tools that support this game

**`memberof`** IGame

___

### version

• `Optional` **version**: string

*Defined in Work/vortex/src/types/IGame.ts:164*

contains the version of the game extension
