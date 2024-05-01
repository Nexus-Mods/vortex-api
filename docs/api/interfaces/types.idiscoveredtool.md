[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IDiscoveredTool

# Interface: IDiscoveredTool

[types](../modules/types.md).IDiscoveredTool

## Hierarchy

- `ITool`

  ↳ **`IDiscoveredTool`**

## Table of contents

### Properties

- [custom](types.IDiscoveredTool.md#custom)
- [defaultPrimary](types.IDiscoveredTool.md#defaultprimary)
- [detach](types.IDiscoveredTool.md#detach)
- [environment](types.IDiscoveredTool.md#environment)
- [exclusive](types.IDiscoveredTool.md#exclusive)
- [hidden](types.IDiscoveredTool.md#hidden)
- [id](types.IDiscoveredTool.md#id)
- [logo](types.IDiscoveredTool.md#logo)
- [name](types.IDiscoveredTool.md#name)
- [onStart](types.IDiscoveredTool.md#onstart)
- [parameters](types.IDiscoveredTool.md#parameters)
- [path](types.IDiscoveredTool.md#path)
- [relative](types.IDiscoveredTool.md#relative)
- [requiredFiles](types.IDiscoveredTool.md#requiredfiles)
- [shell](types.IDiscoveredTool.md#shell)
- [shortName](types.IDiscoveredTool.md#shortname)
- [timestamp](types.IDiscoveredTool.md#timestamp)
- [workingDirectory](types.IDiscoveredTool.md#workingdirectory)

### Methods

- [executable](types.IDiscoveredTool.md#executable)
- [queryPath](types.IDiscoveredTool.md#querypath)

## Properties

### custom

• **custom**: `boolean`

#### Defined in

../src/types/IDiscoveredTool.ts:7

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

### hidden

• **hidden**: `boolean`

#### Defined in

../src/types/IDiscoveredTool.ts:6

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

### parameters

• `Optional` **parameters**: `string`[]

list of parameters to pass to the tool

**`memberof`** ITool

#### Inherited from

ITool.parameters

#### Defined in

../src/types/ITool.ts:112

___

### path

• **path**: `string`

#### Defined in

../src/types/IDiscoveredTool.ts:5

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

### timestamp

• `Optional` **timestamp**: `number`

#### Defined in

../src/types/IDiscoveredTool.ts:10

___

### workingDirectory

• `Optional` **workingDirectory**: `string`

#### Defined in

../src/types/IDiscoveredTool.ts:9

## Methods

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
