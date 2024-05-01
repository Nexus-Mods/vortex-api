---
layout: article
author: IDCs
created: Tue, 03 Nov 2020 07:05:32 GMT
updated: Tue, 03 Nov 2020 07:05:32 GMT
wip: true
title: Game Extension Creation with Harmony
order: 8
tags:
  - Tutorial
  - Harmony Patcher
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/12
---
Vortex extensions can import/require the “harmony-patcher” module as you do with any other JS module. The module currently exports several functions:
* “runPatcher” which is used to start up the patcher executable and patch the targeted game assembly

* “addLoadOrderPage” Which as the name suggests, will add a "Load Order" for the user to organize his mods

* “raiseConsentDialog” a pre-defined, dialog which can be used to inform users that their game needs to be patched, and give them a chance to cancel the patching mechanism. (Should not be used with the "harmonypatchmod" modtype, more on that below)

The image below shows how to add the runPatcher function to your game extension. Please note we’re also defining a set of constants which we expect to use with the patcher, in this case we’re modding the “Untitled Goose Game”.

<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1573043804-1943318508.png" height="35%" width="35%">

### runPatcher(...)
The runPatcher function expects up to 8 arguments:

<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1583412415-934360096.png" height="30%" width="30%">

*   The extension’s folder (extensionPath: string)
*   Path to the game assembly’s file (dataPath: string)
*   The entry point; the patcher function call will be injected right at the start of the provided method. (Must respect the ‘Namespace.Classname::Method’ format) (entryPoint: string)
*   Boolean which tells the patcher executable whether we want to remove or inject the patch functions (remove: boolean)
    
**All below arguments are optional and only available when using Vortex 1.2.0 and above**

*   (Optional) The mods path; when omitted the mods folder will be generated alongside the game's assembly "VortexMods" by default. Alternatively game extensions can define a custom mods path as long as it is within the game's root folder e.g. "../UntitledGoose/Mods". (modsPath: string)
*   (Optional) Vortex's extension context object - used to raise error notifications within Vortex's UI. These will be logged inside vortex.log when the API object is omitted. (context: IExtensionContext)
*   (Optional) Vortex's In-Game Overlay component (VIGO) will deploy by default unless the game extension opts out (injectVIGO: boolean)
*   (Optional) (VIGO/Unity3D specific) - Some game assemblies we wish to patch might be located in a different directory from the UnityEngine libraries. In this case if we wish to build VIGO, the final argument allows us to tell the patcher where the UnityEngine libraries are located (This is primarily used by the harmonypatchermod mod type) (unityEngineDir: string)

<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1573043886-1866336679.png" height="50%" width="50%">

In the case of “Untitled Goose Game” (UGG) we call the runPatcher function during our extension’s setup step which will attempt to patch the game assembly every time UGG game mode is activated inside Vortex; this is fine as the patcher will identify whether the game has already been patched and will not re-inject if the patch is present.

Choosing an entry-point for your game extension may be tricky and will differ between games but here are a few guidelines:

Most game developers usually follow the [singleton design pattern](https://en.wikipedia.org/wiki/Singleton_pattern) for things like Game Managers, Audio Managers, Animation Managers or even UI Managers; the primary aim is to find a class/object which is instantiated once at the beginning of the game, and hopefully persists throughout the game’s life cycle; that being said, avoid choosing methods which are invoked more than once - the patch call should only execute **once**. 

If the game is created using the Unity3D game engine, there’s a very good chance that the singletons are MonoBehaviour derived which means that the “Awake” and “Start” functions are perfect to inject the patch into.

### addLoadOrderPage(...)
<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1583412664-1122812249.png" height="30%" width="30%">

If mod load ordering is required, the patcher module can register and create a load order page where game extension users can organize their mods. To use this simply import the function from the harmony-patcher module and call it immediately after registering the game extension.

<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1583415929-647487518.png" height="50%" width="50%">

<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1583415937-733511058.png" height="60%" width="60%">

The function expects up to 7 arguments:
* The extension context object which is passed to the game extension upon initialization (context: IExtensionContext)
* The Nexus Mods game id. (gameId: string)
* Information that the user may consider important, this will be displayed in a different panel next to the mods. (loadOrderInfo: string)
* The path to the game's default gameart/logo.
* (optional) The preSort functor allows game extensions to intervene right before the load order table applies its sort functionality and displays the mods to the user. It can be used to add/modify/remove mod display entries from the table, this is helpful if for example a certain mod entry must always be locked to a certain table position due to a game specific reason.
* (optional) The filter functor allows the game extension to filter out unwanted mod entries entirely - for example we do not want to include mod entries of a certain mod type (harmonypatchermod mod type is ignored by default)
* (optional) The callback functor is called whenever a change has been made to the load order itself - it allows game extensions to react to the change immediately. This is useful when the game extension needs to run game specific logic such as writing the new load order to a file. Please note: Currently the load_order.txt file (used by the Vortex mod loader) will be written to automatically upon any load order change - there is no need to do this yourself.

<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1583417372-511528472.png" height="60%" width="60%">

The "Load order" tab will appear in the navigation panel alongside "Mods" as seen in the screenshot above. Clicking the tab will open the page.

### raiseConsentDialog(...)
<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1583754321-1974382526.png" height="30%" width="30%">

This function can be used to inform the user that his game assemblies require patching and ask him to give consent prior to allowing the patcher to execute. It expects two arguments:
* The extension context object which should be passed from the game extension.
* The Nexus Mods game id/domain name.
* (Optional) default text for the dialog is provided by default - but if needed, the extension writer is able to provide custom text instead.

The usage example below will ensure that the consent dialog appears before we even create the modding directory. Responding negatively to the consent dialog will not allow the user to proceed, and will deactivate the game extension.

<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1583751362-610778614.png" height="60%" width="60%">

<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1583753817-1507423310.png" height="60%" width="60%">

The reversal text depends on patch method.

### Automated patch application and removal (Vortex 1.2.0 and above)
A new patching mechanism has been added for Vortex 1.2.0 and above which will provide a simpler patching methodology. To use this method, a "harmonyPatchDetails" object needs to be defined when registering the game extension, providing the dataPath (path to game assembly), entry point, mods path and finally specifying whether VIGO is required. 

<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1583421927-479183548.png" height="30%" width="30%">

When using this method, the patch functions will be added/removed upon every deploy/purge event. Additionally, This will create a new "Vortex Harmony Mod" which will contain a patched copy of the original game assembly, alongside any other assemblies which are required by the patch inside Vortex's staging folder. This ensures that the user has full control of the patch's status as he is able to enable/disable this as he does with any mod.

<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1583420214-608758356.png" height="60%" width="60%">

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/12)