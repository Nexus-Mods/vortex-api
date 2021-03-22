---
layout: article
author: IDCs
created: Mon, 22 Mar 2021 13:21:42 GMT
updated: Mon, 22 Mar 2021 14:39:43 GMT
wip: true
title: BepInEx Extension Usage
order: 1000
tags:
  - Tutorial
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/23
---
## The Vortex Bepis Injector Extensible (BepInEx) Extension API Usage

### Introduction

The BepInEx library is a modding framework for .NET, Unity Mono, IL2CPP games; It has been gaining increased popularity in recent years due to its relative ease of use and extended library of tools made available to mod authors - games like Valheim, Risk of Rain II, Streets of Rogue, Subnautica and many others require it for most of their mods to function.

This document expects the game extension developer to understand Vortex’s basic concepts such as modTypes and custom installers, and to have read the Creating a game extension for Vortex tutorial on our wiki - [Creating a game extension for Vortex](https://wiki.nexusmods.com/index.php/Creating_a_game_extension_for_Vortex)
As this guide will not explain how to add automatic game discovery, or how to register the game using the context object.

Vortex’s BepInEx extension was developed to provide game extension developers with a quick and easy method to ensure their users have the latest version of the BepInEx package of choice, automatically downloaded and installed (configurable) with the appropriate Unity Doorstop configuration whenever the user activates the game extension or deploys his mods - thus reducing risks of user error.

The extension comes with several modTypes pre-defined to allow automatic identification of the appropriate destination for the installed mods, dlls are by default installed into the “../BepInEx/plugins/” directory, while mods with a structure similar to BepInEx’s root directory get deployed directly into “../BepInEx/”. The user is able to change the pre-assigned modTypes using the mod panel which pops up from the right whenever he double clicks a mod inside the mods page/table, thus being able to switch from the plugins directory to the patchers directory using a few mouse clicks.

### Usage
Adding BepInEx support to your game extension is done within the game extension’s init()/main() function and is quite simple, you need to to inform Vortex that your game extension requires the BepInEx extension to be loaded before your extension - this is done by adding the following right at the top of your init/main function:

```
function main(context) {
  // Inform Vortex that your game extension requires the BepInEx extension.
  context.requireExtension('modtype-bepinex');
```

Finally you need to register your game with the BepInEx extension - given that this is an initialization call, it should be done somewhere where the code gets called only once; valid locations are within the context.once block inside your game extension’s init function or in the game registration’s setup functor (where you usually create mod folders and any other modding environment setup functionality) an example of using the once block:

```
function main(context) {
  // Inform Vortex that your game extension requires the BepInEx extension.
  context.requireExtension('modtype-bepinex');
 
  // The register game function was truncated for readability
  context.registerGame({ … });
 
  context.once(() => {
    // The context.once higher-Order function ensures that we only call items
    //  within this code block ONCE which makes it a perfect block to initialize
    //  functionality; which is why we've added the BepInEx registration function
    //  here - but theoretically you could do this during the game extension's
    //  setup functor too.
    if (context.api.ext.bepinexAddGame !== undefined) {
      context.api.ext.bepinexAddGame({ gameId: GAME_ID, autoDownloadBepInEx: true });
    }
  })
}
```

Registering your game extension with the BepInEx extension (with the above specified arguments) will ensure that Vortex automatically downloads and installs the latest BepInEx package we have on the Nexus Mods website (if it’s missing) whenever the user switches to your game extension AND whenever he deploys his mods, which should ensure that the package is still installed even if the user randomly decides he wants to remove it.

By default the extension will download the latest 64 bit stable release we (Vortex devs) defined (5.4.8.0 at the time of writing) from https://www.nexusmods.com/site/mods/115 - the target package can be changed as long as the wanted package is hosted on our website (more on that further down).

Please note that although the package will be downloaded and installed to Vortex’s staging folder by default - it is up to the user if he wishes to use your package and he will have to manually enable the “Bepis Injector Extensible” mod entry inside the mods page in order for it to be deployed to the game’s mods directory. We may extend the BepInEx extension to force enable it as well in the future.

As mentioned previously the BepInEx registration function can be used to customize how the BepInEx extension works, it can be used to override the default BepInEx package the developer wishes to apply to the user’s environment, even configure the Unity Doorstop if required. The registration function requires an IBepInExGameConfig object to be provided, which must have the following properties:

* gameId - a string which represents the game’s Id/domain name as seen when browsing the website, https://www.nexusmods.com/skyrimspecialedition/mods/19181 for SSE it’s “skyrimspecialedition”
* autoDownloadBepInEx - a boolean defining whether the BepInEx extension should automatically download and install the default/custom download package. This should be set to true at all times unless for whatever reason the extension developer wants the user to download and install the pack manually from the BepInEx’s GitHub releases page.

Optional Properties:
* installRelPath: string - should be used in cases where the game’s executable is not located at the game’s root directory; so for example if a Game is installed in “C:/GameRootFolder” but the executable is located in “C:/GameRootFolder/bin/x86/Game.exe”, the installRelPath property should be set to ‘bin/x86’ for the BepInEx package to be deployed correctly.
* doorstopConfig: DoorstopConfig - this is yet another object which will be described further down this document, but in essence this object will control how the Unity Doorstop utility is configured (dllOverrides, targetAssembly, whether it’s enabled at all, etc)
* customPackDownloader: - the extension developer can use this asynchronous functor to define a custom download package from the Nexus Mods website, or write his own custom downloader within the game extension and tell the BepInEx extension the location of the downloaded package archive which Vortex will install for the user.
* validateBepInExConfiguration - this async functor is designed to be used to validate the user’s BepInEx installation/configuration - the validator will execute whenever the user activates the game extension AND every time the user deploys his mods which can be used to inform the user of environment related issues before they start their game. More advanced features include the ability to apply an “automatic fix” to the user’s environment as defined by the game extension.

The Unity Doorstop configuration object which can be provided as an optional property to the registration function can optionally re-configure the doorstopper’s ini file as defined by the game extension developer and can automatically rename the “winhttp.dll” to “version.dll” for Unity 3 games. Mandatory properties are:
* doorstopType - the doorstop type will decide how the doorstopper hook assembly is called when it is deployed (if at all), the different types are: 
     1. “default” - will deploy the hook as “winhttp.dll”
     2. "none” - will not deploy the hook at all - you will have to provide your own hook for the game.
     3. “unity3” - will deploy the hook as “version.dll” - should only be used with older Unity 3 games if the default hook doesn’t appear to work properly.

Optional properties:
* targetAssembly - a string that represents a relative/absolute path to the target assembly. By default this will be set to BepInEx’s preloader assembly.
* ignoreDisableSwitch - a boolean which dictates whether the doorstopper should ignore the DOORSTOP_DISABLE environment variable.
* redirectOutputLog - a boolean which dictates whether the game’s Unity generated log should be redirected to the game’s directory which makes debugging errors easier.
* dllOverrideRelPath - some games opt to distribute their assemblies in an optimized state which will generally remove functionality which will limit a game’s moddability. This issue can be bypassed by downloading/creating a package of unoptimized assemblies containing all the stripped functionality for mod authors to use. The dll override path property allows the game extension developer to define where the doorstopper should be looking for the unstripped assemblies.
* validateDoorStopConfig - similar to the BepInEx configuration validation - the game extension developer can define a test to ensure that the user’s environment is set up correctly whenever he deploys his mods or activates the game extension.
Usage example:

```
if (context.api.ext.bepinexAddGame !== undefined) {
      context.api.ext.bepinexAddGame({
        gameId: GAME_ID,
        autoDownloadBepInEx: true,
        // The doorstopper will be deployed as "winhttp.dll" and will ignore the
        //  DOORSTOP_DISABLE environment variable
        doorstopConfig: {
          doorstopType: 'default',
          ignoreDisableSwitch: true,
        }
      })
    }
```

## Downloading a custom package from Nexus

Let's say that the latest stable version of the BepInEx package that we approved (5.4.8.0) has a bug which is causing mods to fail to load in the game, but we know that an older version (5.0.1.0) works just fine. The game extension can override the downloaded package by providing the customPackDownloader functor, which can either be used to define a custom downloader within the game extension, passing back the file path to the downloaded BepInEx package archive; or far more easier if the package is hosted on the Nexus Mods website: to provide the package mod’s information so that Vortex can download and install it automatically for the user.

Given the scenario we described previously, we know that both 5.4.8.0 and 5.0.1.0 are hosted on the same mod page https://www.nexusmods.com/site/mods/115?tab=files for the downloader to pick up the correct file and install it, we need to browse to the package’s mod page and retrieve the following information:
* domainId: in this case the mod page is hosted under the “site” domain name, you can deduce this by looking at the first segment of the mod’s URL that follows the “www.nexusmods.com” website name. So in our case it’s just “site”.
* modId: this can also be extracted from the mod’s url, it’s a numeric value that follows the “mods” segment - in this case it’s “115”
* fileId: this one is a bit more complicated to deduce - you need to hover your mouse pointer over any of the download buttons so that your browser displays the target link at the bottom of the viewable content as seen in the snippet below. What we’re looking for is the id=”some_numeric_value” segment, in this particular case it’s “486”
![image](https://user-images.githubusercontent.com/8960252/111995689-1ea88e80-8b11-11eb-943e-5355d1d882a9.png)

We should now have everything we need to define a custom pack download - usage example:
```
if (context.api.ext.bepinexAddGame !== undefined) {
      context.api.ext.bepinexAddGame({
        gameId: 'moonlighter',
        autoDownloadBepInEx: true,
        customPackDownloader: () => {
          return {
            // The game extension's domain Id/gameId as defined when registering
            //  the extension - in this case lets say it's moonlighter
            gameId: 'moonlighter',
            // We extracted this from the pack's mod page
            domainId: 'site',
            // Same as the domain Id, extracted from the URL
            modId: '115',
            // We extracted this one by hovering over the download buttons on the site
            fileId: '486',
            // What we want to call the archive of the downloaded pack.
            archiveName: 'BepInEx_x64_5.0.1.0.zip',
            // Whether we want this to be installed automatically - should always be true
            allowAutoInstall: true,
          }
        }
      })
    }
```


[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/23)