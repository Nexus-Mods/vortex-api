[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IGame

# Interface: IGame

[types](../modules/types.md).IGame

interface for game extensions

**`interface`** IGame

## Hierarchy

- `ITool`

  ↳ **`IGame`**

## Table of contents

### Properties

- [compatible](types.IGame.md#compatible)
- [contributed](types.IGame.md#contributed)
- [defaultPrimary](types.IGame.md#defaultprimary)
- [detach](types.IGame.md#detach)
- [details](types.IGame.md#details)
- [directoryCleaning](types.IGame.md#directorycleaning)
- [environment](types.IGame.md#environment)
- [exclusive](types.IGame.md#exclusive)
- [extensionPath](types.IGame.md#extensionpath)
- [final](types.IGame.md#final)
- [id](types.IGame.md#id)
- [logo](types.IGame.md#logo)
- [mergeMods](types.IGame.md#mergemods)
- [modTypes](types.IGame.md#modtypes)
- [name](types.IGame.md#name)
- [onStart](types.IGame.md#onstart)
- [overrides](types.IGame.md#overrides)
- [parameters](types.IGame.md#parameters)
- [relative](types.IGame.md#relative)
- [requiredFiles](types.IGame.md#requiredfiles)
- [requiresCleanup](types.IGame.md#requirescleanup)
- [shell](types.IGame.md#shell)
- [shortName](types.IGame.md#shortname)
- [supportedTools](types.IGame.md#supportedtools)
- [version](types.IGame.md#version)

### Methods

- [deploymentGate](types.IGame.md#deploymentgate)
- [executable](types.IGame.md#executable)
- [getGameVersion](types.IGame.md#getgameversion)
- [getInstalledVersion](types.IGame.md#getinstalledversion)
- [getModPaths](types.IGame.md#getmodpaths)
- [mergeArchive](types.IGame.md#mergearchive)
- [queryModPath](types.IGame.md#querymodpath)
- [queryPath](types.IGame.md#querypath)
- [requiresLauncher](types.IGame.md#requireslauncher)
- [setup](types.IGame.md#setup)

## Properties

### compatible

• `Optional` **compatible**: `Object`

declares this game compatible or incompatible with a certain feature. If not specified, a
sensible default will be assumed for each game.
So for example if you know the game won't support symbolic links but Vortex offers it by
default, you can set "{ compatible: { symlinks: false } }" so Vortex won't offer the feature.
You will have to investigate or ask for the possible ids though. Since we will be introducing
new "gates" over time and so may extensions, it's not practical (at least at this time) to
maintain a list.

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

../src/types/IGame.ts:170

___

### contributed

• `Optional` **contributed**: `string`

set to name of the contributor that added support for this game. For officialy supported
games this is undefined

#### Defined in

../src/types/IGame.ts:176

___

### defaultPrimary

• `Optional` **defaultPrimary**: `boolean`

if this tool is installed, use it as the primary tool (unless the user has manually set a
primary of course)
If multiple tools with this flag are installed it's effectively random which one gets picked,
we make no promises on any kind of consistency

#### Inherited from

ITool.defaultPrimary

#### Defined in

../src/types/ITool.ts:149

___

### detach

• `Optional` **detach**: `boolean`

if set to true the process tool will be launched detached, that is: not part of Vortex's
process hierarchy

#### Inherited from

ITool.detach

#### Defined in

../src/types/ITool.ts:141

___

### details

• `Optional` **details**: `Object`

additional details about the game that may be used by extensions. Some extensions may work
better/offer more features if certain details are provided but they are all optional.
Extensions should do their best to work without these details, even if it takes more work
(during development and potentially at runtime)

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

../src/types/IGame.ts:159

___

### directoryCleaning

• `Optional` **directoryCleaning**: [`DirectoryCleaningMode`](../modules/types.md#directorycleaningmode)

decides how Vortex decides which empty directories to clean.
With 'tag' (default) we put a dummy file into each directory created by Vortex and only
  those get removed during purge (or after deployment if requiresCleanup is enabled)
With 'all' Vortex will simply clean up all empty directories, whether Vortex created them
  or not. In some (unusual) cases this may break mods

#### Defined in

../src/types/IGame.ts:205

___

### environment

• `Optional` **environment**: `Object`

variables to add to the environment when starting this exe. These are in addition to
(and replacing) existing variables that would be passed automatically.

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

ITool.environment

#### Defined in

../src/types/ITool.ts:118

___

### exclusive

• `Optional` **exclusive**: `boolean`

if true, running this tool will block any other applications be run from vortex until it's
done. Defaults to false

#### Inherited from

ITool.exclusive

#### Defined in

../src/types/ITool.ts:135

___

### extensionPath

• `Optional` **extensionPath**: `string`

path to the game extension and assets included with it. This is automatically
set on loading the extension and and pre-set value is ignored

**`memberof`** IGame

#### Defined in

../src/types/IGame.ts:118

___

### final

• `Optional` **final**: `boolean`

set to true if support for this game has been fully tested

#### Defined in

../src/types/IGame.ts:181

___

### id

• **id**: `string`

internal name of the tool

#### Inherited from

ITool.id

#### Defined in

../src/types/ITool.ts:19

___

### logo

• `Optional` **logo**: `string`

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

#### Inherited from

ITool.logo

#### Defined in

../src/types/ITool.ts:50

___

### mergeMods

• **mergeMods**: `boolean` \| (`mod`: [`IMod`](types.IMod.md)) => `string`

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

#### Defined in

../src/types/IGame.ts:137

___

### modTypes

• `Optional` **modTypes**: [`IModType`](types.IModType.md)[]

returns the mod type extensions applicable to this game (all
mod types except the default

Do not implement this in your game extension, this is added
by vortex

**`memberof`** IGame

#### Defined in

../src/types/IGame.ts:102

___

### name

• **name**: `string`

human readable name used in presentation to the user

#### Inherited from

ITool.name

#### Defined in

../src/types/ITool.ts:26

___

### onStart

• `Optional` **onStart**: ``"hide"`` \| ``"close"`` \| ``"hide_recover"``

what to do with Vortex when starting the tool. Default is to do nothing. 'hide' will minimize
Vortex and 'close' will make Vortex quit as soon as the tool is started.

#### Inherited from

ITool.onStart

#### Defined in

../src/types/ITool.ts:155

___

### overrides

• `Optional` **overrides**: `string`[]

list of game ids. If one of the games listed here is discovered in the same location as this
extension they get disabled.
This allows third-party extensions or total conversions to take precedence over the original
they're replacing

#### Defined in

../src/types/IGame.ts:213

___

### parameters

• `Optional` **parameters**: `string`[]

list of parameters to pass to the tool

**`memberof`** ITool

#### Inherited from

ITool.parameters

#### Defined in

../src/types/ITool.ts:112

___

### relative

• `Optional` **relative**: `boolean`

if true, the tool is expected to be installed relative to the game directory. Otherwise
the tool will be detected anywhere on the disk.

#### Inherited from

ITool.relative

#### Defined in

../src/types/ITool.ts:124

___

### requiredFiles

• **requiredFiles**: `string`[]

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

#### Inherited from

ITool.requiredFiles

#### Defined in

../src/types/ITool.ts:104

___

### requiresCleanup

• `Optional` **requiresCleanup**: `boolean`

if true, empty directories are cleaned up during deployment.
Right now this defaults to false if mergeMods is true, this defaults to true if mergeMods
is false or a function.
The reason being that otherwise we would be leaving empty directories every time a mod gets
disabled or the deployment name changes.
Users can also manually force the cleanup for all games.

#### Defined in

../src/types/IGame.ts:196

___

### shell

• `Optional` **shell**: `boolean`

if true, the tool will be run inside a shell

#### Inherited from

ITool.shell

#### Defined in

../src/types/ITool.ts:129

___

### shortName

• `Optional` **shortName**: `string`

short/abbreviated variant of the name, still intended for presentation to the user
this is used when available space is limited. Try to keep it below 8 characters
(there is no fixed limit but layout may break if this is too long)
If none is set, falls back to name

#### Inherited from

ITool.shortName

#### Defined in

../src/types/ITool.ts:34

___

### supportedTools

• `Optional` **supportedTools**: `ITool`[]

list of tools that support this game

**`memberof`** IGame

#### Defined in

../src/types/IGame.ts:109

___

### version

• `Optional` **version**: `string`

contains the version of the game extension

#### Defined in

../src/types/IGame.ts:186

## Methods

### deploymentGate

▸ `Optional` **deploymentGate**(): [`Promise`](../classes/Promise.md)<`void`\>

if set this function is always called before automatic deployment and it will be delayed
until the promise resolves.
This can be used if the deployment process is very slow and/or involves user interaction
(e.g. through will-deploy/did-deploy event handlers) to prevent managament becoming impractical
due to automated deployment constantly requiring attention.

Once the promise resolves the mods as enabled at that time will be deployed, so for example
if the user enabled a mod while this promise is pending, that mod will be deployed.

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IGame.ts:225

___

### executable

▸ **executable**(`discoveredPath?`): `string`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `discoveredPath?` | `string` |

#### Returns

`string`

#### Inherited from

ITool.executable

#### Defined in

../src/types/ITool.ts:80

___

### getGameVersion

▸ `Optional` **getGameVersion**(`gamePath`, `exePath`): [`Promise`](../classes/Promise.md)<`string`\>

intended to be used by game extensions to provide custom functionality
 to resolve a game's version when the game executable's version attribute
 is incorrect, which is often the case with games that are still in early
 access - an example of this is Blade and Sorcery which uses a different
 versioning system internally.

**`memberof`** IGame

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gamePath` | `string` | path where the game is installed |
| `exePath` | `string` | relative (to gamePath) path to the discovered exe |

#### Returns

[`Promise`](../classes/Promise.md)<`string`\>

the game's version

#### Defined in

../src/types/IGame.ts:59

___

### getInstalledVersion

▸ `Optional` **getInstalledVersion**(`discovery`): [`Promise`](../classes/Promise.md)<`string`\>

use this to determine the version of this game installed on the system

Do not implement this in your game extension, the function is added by vortex itself

#### Parameters

| Name | Type |
| :------ | :------ |
| `discovery` | [`IDiscoveryResult`](types.IDiscoveryResult.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`string`\>

#### Defined in

../src/types/IGame.ts:66

___

### getModPaths

▸ `Optional` **getModPaths**(`gamePath`): `Object`

returns all directories where mods for this game
may be stored as a dictionary of type to (absolute) path.

Do not implement this in your game extension, the function
is added by vortex itself

**`memberof`** IGame

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gamePath` | `string` | path where the game is installed |

#### Returns

`Object`

#### Defined in

../src/types/IGame.ts:43

___

### mergeArchive

▸ `Optional` **mergeArchive**(`filePath`): `boolean`

determines if a file is to be merged with others with the same path, instead of the
highest-priority one being used. This only works if support for repackaging the file type
is available

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`boolean`

#### Defined in

../src/types/IGame.ts:144

___

### queryModPath

▸ **queryModPath**(`gamePath`): `string`

determine the default directory where mods for this game
should be stored.

If this returns a relative path then the path is treated as relative
to the game installation directory. Simply return a dot ( () => '.' )
if mods are installed directly into the game directory

**`memberof`** IGame

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gamePath` | `string` | path where the game is installed |

#### Returns

`string`

#### Defined in

../src/types/IGame.ts:30

___

### queryPath

▸ `Optional` **queryPath**(): `string` \| [`Promise`](../classes/Promise.md)<`string`\>

determine installation path of this tool/game
This function should return quickly and, if it returns a value,
it should definitively be the valid tool/game path. Usually this function
will query the path from the registry or from steam.
This function may return a promise and it should do that if it's doing I/O

This may be left undefined but then the tool/game can only be discovered
by searching the disk which is slow and only happens manually.

#### Returns

`string` \| [`Promise`](../classes/Promise.md)<`string`\>

#### Inherited from

ITool.queryPath

#### Defined in

../src/types/ITool.ts:62

___

### requiresLauncher

▸ `Optional` **requiresLauncher**(`gamePath`): [`Promise`](../classes/Promise.md)<{ `addInfo?`: `any` ; `launcher`: `string`  }\>

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gamePath` | `string` | path where the game is installed. |

#### Returns

[`Promise`](../classes/Promise.md)<{ `addInfo?`: `any` ; `launcher`: `string`  }\>

#### Defined in

../src/types/IGame.ts:90

___

### setup

▸ `Optional` **setup**(`discovery`): [`Promise`](../classes/Promise.md)<`void`\>

Optional setup function. If this game requires some form of setup before it can be modded
(like creating a directory, changing a registry key, ...) do it here. It will be called
every time before the game mode is activated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `discovery` | [`IDiscoveryResult`](types.IDiscoveryResult.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/types/IGame.ts:151
