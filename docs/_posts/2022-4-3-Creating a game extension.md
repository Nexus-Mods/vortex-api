---
layout: article
author: Pickysaurus
created: Wed, 18 May 2022 14:34:54 GMT
updated: Tue, 24 May 2022 09:44:00 GMT
wip: true
title: Creating a game extension
order: 1000
tags:
  - General
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/31
---
This guide will explain how to create a very basic game extension for Vortex, touching on where to start with some of the more advanced features. It requires a basic understanding of Javascript/programming. I also recommend you use an application with syntax highlighting, such as Visual Studio Code or Notepad++ for the coding sections of the guide.

ℹ️ As an alternative, simple game extensions can be created without coding using [this extension](https://www.nexusmods.com/site/mods/155).
Not every game can be supported with just that extension but at least in can provide a robust start.

# Getting set up
To get started, you first need a version of Vortex to work with. I recommend using the current release of Vortex installed at the default location. If you're familiar with Github and other development tools you can also follow the instructions on the Vortex Github to clone the repository and build a development environment. To keep things simple, we'll be using the first option.

You'll also need to gather some information about the game you want to support before starting. This information will help us build our extension.

* Which game store(s) are you able to get this game from?
* Do the game stores have any useful meta-data we can use? (SteamApp ID, Epic store codename, GOG app ID, registry key etc)
* What is the structure of the game directory? Where is the main EXE file?
* Where should mods be installed? Are there multiple different ways to install mods?
* How are mod archives usually structured? How consistent are they?

If you can't answer most of these questions, you may have problems creating a completely functional extension. For our example, we'll be using Bloodstained: Ritual of the Night. Below are example answers to the setup questions.

 

* Which game store(s) are you able to get this game from?
*The game is available on GOG.com and Steam.*

* Do the game stores have any useful meta-data we can use? (SteamApp ID, Epic store codename, GOG app ID, registry key etc)
*Steam App ID: 692850, GOG App ID: 1133514031*

* What is the structure of the game directory? Where is the main EXE file?
*The main game EXE is located at "BloodstainedROTN/Binaries/Win64/BloodstainedRotN-Win64-Shipping.exe" and there is also a launcher located at "BloodstainedRotN.exe".*

* Where should mods be installed? Are there multiple different ways to install mods?
*Most mods for this game are presented as .pak files which are placed in the folder "BloodstainedRotN/Content/Paks/~mods" or "BloodstainedRotN/Content/Paks/~mod". The "~mods" option is the community standard.*

* How are mod archives usually structured? How consistent are they?
*The majority of mods have the .pak files on the root level of the mod archive, however, some mod archives contain variants or are structured in different ways.*

# Creating your extension
A basic game extension consists of 3 files an info file, a game image and a javascript file. First, we will need a folder for our extension. If you're using a regular installation of Vortex, navigate to `AppData\Roaming\Vortex\plugins`. If you're using a Github repository, you can create this folder at `vortex\extensions\games`. For consistency, give your folder the same name as your game with no spaces, prefixed with "game-" e.g. "game-bloodstainedritualofthenight". Now, open this folder and we're ready to get set up.

For the game image, we recommend using an image similar to the game art used by the Nexus Mods website. Just ensure it's the same ratio as the other images inside Vortex (e.g. 640x360). It's also important that you name it "gameart", as this will help us find it later.

> To avoid confusion, please use the same exact image that you are using as the gameart for the mod page on Nexus Mods. Vortex will pull the mod page's primary image to display as game art in the app itself until the extension has been downloaded by the user.
{.is-info}

For the info file, create a new JSON file called "info.json" and fill it with the following information:
```json
{
  "name": "Game: Bloodstained: Ritual of the Night",
  "author": "Pickysaurus",
  "version": "0.0.1",
  "description": "Support for Bloodstained: Ritual of the Night"
}
```

> Note: Using a version less than 1.0.0 will flag this extension as Beta in the Vortex UI.
{.is-info}


Finally, we'll create the main javascript file called "index.js". Inside the file, add the following basic code.
```js
//Import some assets from Vortex we'll need.
const path = require('path');
const { fs, log, util } = require('vortex-api');

function main(context) {
	//This is the main function Vortex will run when detecting the game extension. 
	
	return true;
}

module.exports = {
    default: main,
};
```
With this code in place, your extension will now be recognised by Vortex (a restart will be required) but does not do anything. You can check the "Extensions" tab in advanced mode to see that it is loading without errors.

# Registering your game

Now we have the basic information in place, we need to tell Vortex that we're adding a new game. First, we'll want to add some additional constants to the top of the index.js.

```js
// Nexus Mods domain for the game. e.g. nexusmods.com/bloodstainedritualofthenight
const GAME_ID = 'bloodstainedritualofthenight';

//Steam Application ID, you can get this from https://steamdb.info/apps/
const STEAMAPP_ID = '692850';

//GOG Application ID, you can get this from https://www.gogdb.org/
const GOGAPP_ID = '1133514031';
```
Next, add the following code to your index.js above the "return true" line inside the "main" function and change it according to the instructions below:
```js
context.registerGame({
    id: GAME_ID,
    name: 'Bloodstained: Ritual of the Night',
    mergeMods: true,
    queryPath: findGame,
    supportedTools: [],
    queryModPath: () => 'BloodstainedRotN/Content/Paks/~mods',
    logo: 'gameart.jpg',
    executable: () => 'BloodstainedROTN.exe',
    requiredFiles: [
      'BloodstainedRotN.exe',
      'BloodstainedROTN/Binaries/Win64/BloodstainedRotN-Win64-Shipping.exe',
    ],
    setup: prepareForModding,
    environment: {
      SteamAPPId: STEAMAPP_ID,
    },
    details: {
      steamAppId: STEAMAPP_ID,
      gogAppId: GOGAPP_ID,
    },
  });
```

| Property      | Description |
| ----------- | ----------- |
| id      | This can be filled with the constant we defined in the previous step.       |
| name   | The full title of your game, this will be how it appears inside Vortex.        |
| mergeMods | This defines if mods will be installed to the same folder (merged) or installed to their own folders. |
| queryPath | We want to fill this with the root directory of the game. In this example, we'll be using the "findGame" function (discussed later) to allow us to check for the correct folder. |
| supportedTools | See: Defining tools |
| queryModPath | This is where we tell Vortex how to find the mods folder. |
| logo | Make sure this matches the name of your gameart file. |
| executable | This is where we tell Vortex how to find the main game executable, so we'll be able to launch the game. |
| requiredFiles | Fill this with an array of key files that should be found in the game folder. Vortex will know that it has found the correct folder for the game if all requiredFiles are present. |
| setup | This property is optional but is used if we need to make the game folder ready to accept mods. In this example, we need to create the "~mods" folder using the prepareForModding function. |
| environment | If the game must be run through Steam you should include the SteamAppId property as shown above. This allows the game to be launched directly from the EXE file, rather than through the Steam Client. SteamAppIds must always be strings, entering it as a number will not work as expected. |
| details | We can store the SteamAppId/GOGAppId here in case we need it, you can also add other details which may be used by other extensions. |

# Game Detection
Now we need to create the `findGame()` function mentioned earlier. This will be what Vortex uses to discover the game during a search. You can use different methods (or a combination) to detect the game. The most common instances are SteamApp ID and registry key.

Vortex features a utility function called the `GameStoreHelper` which can easily locate games installed with Steam, GOG, Epic, Origin, UPlay and the Windows Store.

> For more information on how to find the Application IDs for the various game stores, see [Game Detection](/en/vortex/developer/game-detection).
{.is-info}


Find our game with using a game identifier. In this example, we'll be searching for games matching our Steam APP ID and GOG App ID:
```js
function findGame() {
  return util.GameStoreHelper.findByAppId([STEAMAPP_ID, GOGAPP_ID])
      .then(game => game.gamePath);
}
```
We can also try and find our game from the registry:
```js
//Add this to the top of the file
const winapi = require('winapi-bindings');

function findGame() {
    const instPath = winapi.RegGetValue(
      'HKEY_LOCAL_MACHINE',
      'SOFTWARE\\WOW6432Node\\GOG.com\\Games\\' + GOGAPP_ID,
      'PATH');
    if (!instPath) {
      throw new Error('empty registry key');
    }
    return Promise.resolve(instPath.value);
}
```
Using both GameStoreHelper and registry methods together:
```js
//Add this to the top of the file
const winapi = require('winapi-bindings');

function findGame() {
  try {
    const instPath = winapi.RegGetValue(
      'HKEY_LOCAL_MACHINE',
      'SOFTWARE\\WOW6432Node\\GOG.com\\Games\\' + GOGAPP_ID,
      'PATH');
    if (!instPath) {
      throw new Error('empty registry key');
    }
    return Promise.resolve(instPath.value);
  } catch (err) {
    return util.GameStoreHelper.findByAppId([STEAMAPP_ID, GOGAPP_ID])
      .then(game => game.gamePath);
  }
}
```

At this point, you have now created a working game extension. This extension will take the contents of the downloaded mod archive and deploy them into the BloodstainedRotN/Content/Paks/~mods folder. As you might be aware, not every mod is packed in a consistent way. We might want a way of checking the archive structure and altering it slightly to fit the standardised modding pattern. This is where mod installation patterns become important.

# Checking the user's enviroment
Now that Vortex knows how to find the game, it's also possible to add some additional checks before we start managing mods for the game. These checks are run each time the user starts Vortex with the game currently active or switches to your game from a different one. This setup step can be used to check if the required folders exist, any required applications are present or any other checks you feel are required. In our example case, we want to make sure the ~mods folder already exists and create it if not.

```js
function prepareForModding(discovery) {
    return fs.ensureDirWritableAsync(path.join(discovery.path, 'BloodstainedRotN', 'Content', 'Paks', '~mods'));
}
```
The `fs.ensureDirWritableAsync()` call is handy for this. It does exactly what we need. So each time Bloodstained is managed, Vortex will now ensure this folder is present and writable to Vortex. If for some reason this function fails (usually a symptom of a more serious issue with their setup), Vortex will either help the user resolve the issue or the user will not be able to manage the game.

Once this has been added, make sure to go back to your `registerGame` function and change the `setup: undefined`, line to `setup: prepareForModding`, otherwise the code we have just added will never be called.

As an additional (but unrelated) example this is how Subnautica checks first that the Qmods folder exists, then that the QMod Manager application is present and informs the user if it's not.
```js
function prepareForModding(discovery, api) {
  // Path to the main QModManager DLL file.
  const qModPath = path.join(discovery.path, 'BepInEx', 'plugins', 'QModManager', QMM_DLL);
  // Ensure the mods folder exists, then check for QMM.
  return fs.ensureDirWritableAsync(path.join(discovery.path, 'QMods'))
    .then(() => checkForQMM(api, qModPath));
}

function checkForQMM(api, qModPath) {
  return fs.statAsync(qModPath)
    .catch(() => {
      api.sendNotification({
        id: 'qmm-missing',
        type: 'warning',
        title: 'QModManager not installed',
        message: 'QMM is required to mod Subnautica.',
        actions: [
          {
            title: 'Get QMM',
            action: () => util.opn(QMM_MODPAGE).catch(() => undefined),
          },
        ],
      });
    });
}
```
> Note: In the Subnautica Example above, we need the Vortex API as well as the discovery object, so our setup property would be `setup: (discovery) => prepareForModding(discovery, context.api)`, to allow for this.
{.is-info}


# Mod installation patterns
There is no universal standard how mod authors package their mods, although on a game-by-game basis, standards usually emerge as authors try to avoid confusion for their users and thus follow the example of prior mods.

By default Vortex will usually just unpack the mod as is into the mods directory identified by `queryModPath`.

If necessary you can customize this behavior in one of two ways:

## Stop Patterns
If you go this route, Vortex unpacks into the mod directory either directly or it unpacks a subdirectory from the archive. Which subdirectory it picks is determined by patterns (more precisely: "regular expressions", google is your friend) you can set. For Fallout 4 it might be something like this:

```js
context.registerGame({
  ...
  details: {
     ...
    stopPatterns: [
      '(^|/)textures(/|$)',
      '(^|/).*\.es(p|m|l)$'
    ],
  },
});
```

If you don't know regular expressions this is likely hard to read. What this means is roughly:

> The directory containing a directory named "textures" or a file with the extension .esp, .esm or .esl should map to the top-level mod directory.

Now if the mod archive contains
```
Readme.txt
mymod\textures\foobar.dds
mymod\foobar.esp
```

Vortex will extract only `foobar.esp` and `textures\foobar.dds` and place that in the top level mod directory (Fallout 4\data).

## Custom Installer
Go this route if you find javascript easier to understand than regular expressions (no one would blame you) or if you need more control.

In order to have Vortex understand different formats that mods can take, we want to register an installer that will be used to check for the relevant files. In our example, Bloodstained: Ritual of the Night, most mods take the form of a PAK file which must be placed in the ~mods folder. The problem arises when authors pack the mod inside a subfolder when packing the archive, without a mod installer this would be deployed to ~mods/MyFolder rather than ~mods and could not be loaded by the game.

To register an installer, we'll need to add the following line to the main function, after registering the game.
```js
context.registerInstaller('bloodstainedrotn-mod', 25, testSupportedContent, installContent);
```
The variables when registering an installer are as follows:

* `bloodstainedrotn-mod` - This string must be unique and signifies the installer's "name".
* `25` - This is the installer priority. Vortex uses this internally for the order installers are checked.
* `testSupportedContent` - This is the function we'll use to check if the files qualify for this installer.
* `installContent` - If testSupportedContent passes, this is the function that will be performed on the files.

We also want to define what we're looking for, in this case, it's a PAK file extension. Add this to the top of the script, with the other constants.
```js
const MOD_FILE_EXT = ".pak";
```

Next, we want to define the test and install functions for this pattern.
```js
function testSupportedContent(files, gameId) {
  // Make sure we're able to support this mod.
  let supported = (gameId === GAME_ID) &&
    (files.find(file => path.extname(file).toLowerCase() === MOD_FILE_EXT)!== undefined);

  return Promise.resolve({
    supported,
    requiredFiles: [],
  });
}
```
Here, what we are doing is first ensuring the mod is actually being installed for the correct game. A single installer could support a whole range, here we're only focusing on one.
Next we'll check if any of the files in the archive have the PAK file extension. If either of these checks fail the archive will not be installed using this pattern and Vortex may try a different, more generic, installer. When we resolve the promise, we also need to include an empty array for requiredFiles. This is not used in our example.

```js
function installContent(files) {
  // The .pak file is expected to always be positioned in the mods directory we're going to disregard anything placed outside the root.
  const modFile = files.find(file => path.extname(file).toLowerCase() === MOD_FILE_EXT);
  const idx = modFile.indexOf(path.basename(modFile));
  const rootPath = path.dirname(modFile);
  
  // Remove directories and anything that isn't in the rootPath.
  const filtered = files.filter(file => 
    ((file.indexOf(rootPath)&nbsp;!== -1) 
    && (!file.endsWith(path.sep))));

  const instructions = filtered.map(file => {
    return {
      type: 'copy',
      source: file,
      destination: path.join(file.substr(idx)),
    };
  });

  return Promise.resolve({ instructions });
}
```
Now, having passed the test we'll install the files. In this example, we're finding the file with the PAK extension and getting the path. Then we remove anything that isn't on the same level as the PAK file (including extra folders above the PAK). Finally, copy the files into the mod staging folder. This will result in the PAK file being on the top level when opening the mod in a file manager.

It is possible to repeat this section for additional mod installers, especially where a game has different types of mods installed to different locations. [Blade & Sorcery](https://github.com/Nexus-Mods/vortex-games/blob/9517c1b4b517f0b87f47672578ce8c9cf37fb675/game-bladeandsorcery/index.js) is a good example of a game with multiple install paths.

The next question you might be asking is "What if a mod has several variants in the same download?". There is a solution to this, but it does require some cooperation from the mod authors in the community. We discuss Mod Installers in the next section.

# Mod installers
A useful feature for mod authors is the ability to pack different variants of the same mod into a single package. This can be done by creating a [Mod Installer](/en/vortex/developer/mod-installers). Vortex is able to process mod installers natively, just be aware that the resulting files from the mod installer will be installed to the ~mods folder.

# Publishing your extension
Now you're ready to share your extension. Make sure you pack it up including all 3 files. If you are using GitHub, you can submit a Pull Request to request your support be added to the main Vortex build. Alternatively, you can contact our team via Nexus Mods, Discord or GitHub to request we add it to the build.

You may also wish to upload your game extension to Nexus Mods independently of the main Vortex build. This is particularly useful if you plan to continue developing the extension. To do so, [upload it to Nexus Mods](https://www.nexusmods.com/site/mods/add) and be sure to put it in the User Extensions subcategory.

# Advanced options
## Defining tools
As part of a game extension, you can also define tools for the game. These appear on the starter dashlet alongside the option to launch the game. It can be used to add links to alternative launch methods, common tools for the game and more.

To add tools you'll need to define an array containing an object to represent each tool. This example shows some tools used with Fallout: New Vegas.

```js
const moddingTools = [
  {
    id: 'FNVEdit',
    name: 'FNVEdit',
    logo: 'fo3edit.png',
    executable: () => 'FNVEdit.exe',
    requiredFiles: [
      'FNVEdit.exe',
    ],
  },
  {
    id: 'nvse',
    name: 'New Vegas Script Extender',
    shortName: 'NVSE',
    executable: () => 'nvse_loader.exe',
    requiredFiles: [
      'nvse_loader.exe',
    ],
    relative: true,
    exclusive: true,
  },
];
```
The properties for each tool are as follows:

| Property | Description |
|---|---|
| id	| This must be a unique identifier for your tool. |
| name |	The full title of your tool, this will be used inside Vortex. |
| shortName |	If the tool has a particularly long name, you can specify an abbreviation here. Names under 8 characters are recommended. |
| logo |	Optional. The relative path of an icon used for the tool logo (if included) |
| queryPath |	Optional. This is either a string or a promise that will resolve with the path the tool from Steam or the registry.|
| executable |	This is where we tell Vortex how to find the tool game executable by name.|
| requiredFiles |	Fill this with an array of key files that should be found in with the tool. Vortex will know that it has found the correct folder for the tool if all requiredFiles are present. |
| parameters |	Optional. List of parameters required to run the tool. |
| relative |	Optional. If true, Vortex will look inside the game directory for the tool rather than elsewhere on the disc. |
| shell |	Optional. If true, the tool will run inside a shell. |
| exclusive |	Optional. If true, will block any other tools from starting while this one is running. |


# Further reading:
- Before you upload your extension, please review our guideline on packing extensions correctly so Vortex can install it without a hitch: [Packaging Extensions](https://nexus-mods.github.io/vortex-api/2020/09/01/Packaging-extensions.html)
- Games developed using the Unity 3D game engine may require code injection for mods to work. Vortex provides functionality to simplify the download, installation and configuration of the [BepInEx](https://nexus-mods.github.io/vortex-api/2021/02/01/BepInEx-Extension-Usage.html) mod loader on the user's machine.
- If your game extension needs to control the order in which mods get loaded by the game, you can use our [FBLO](https://nexus-mods.github.io/vortex-api/2020/10/05/File-Based-Load-Order-API.html) module

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/31)