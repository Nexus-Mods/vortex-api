---
layout: default
author: TanninOne
created: Fri, 23 Oct 2020 11:18:11 GMT
updated: Fri, 23 Oct 2020 11:18:11 GMT
wip: true
title: Harmony Patcher
tags: Feature
comments: 0
url: https://github.com/Nexus-Mods/vortex-api/issues/9
---
## Introduction

This project aims to enhance Vortex’s modding capabilities by implementing an API/Modding resource which mod authors can use to inject their C# code and assets into game assemblies. This is particularly useful when modding Unity3D games which do not provide their own Mods Loader/Management system.

Implemented in C#, the patcher includes/deploys Andreas Pardeike’s [Harmony](https://github.com/pardeike/Harmony/wiki) library to allow mod authors to write prefix/postfix/transpiler methods to easily modify a game’s functionality. Reflection/Cecil can obviously be used directly if needed. 

All mods must be written in C# and distributed as Dynamic Link Libraries (DLL), accompanied with a **mandatory** manifest.json file, and an optional settings.json (persistent settings state storage)

This project is currently windows-only but could be enhanced in the future to cater for other platforms.

### Requirements

Although the Harmony library is a great tool which simplifies the modding process significantly, an intermediate understanding of software engineering, programming languages such as C#, and (potentially) JavaScript are required:

* Advanced knowledge of C# is a **must**
* At least _some_ knowledge of the game’s engine is extremely helpful when gauging the amount of work required, or whether what you’re trying to achieve is even feasible
* Some JavaScript experience may be required to write/modify a Vortex game extension to use the harmony-patcher module

It’s important we state the extent of the patcher’s capabilities from the start. Patching games with Harmony relies mostly on the game itself and/or the game engine that it has been developed with, as both may have anti-tampering systems which aim to block users/modders from accessing and modifying the compiled code and/or adding/replacing game assets.

In the case of Unity3D games Harmony will allow mod authors to:
* Modify variable values using Harmony’s prefix/postfix patches or even replace entire methods using a transpiler patch ([CIL](https://en.wikipedia.org/wiki/Common_Intermediate_Language) knowledge required)
* Replace/add new assets (3D Models/Textures/Audio/etc) to a given game as long as the mod author packages the assets correctly using Unity’s Asset Bundle serializer/deserializer functionality
* Create new MonoBehaviour derived scripts and attach them to instantiated GameObjects as long as said scripts have been compiled as part of the mod’s assembly and added as components to said GameObjects through one of the mod's patch methods.

### How it works

The project consists of four modules:
* The Vortex module which exposes the patcher functionality to all game extensions.
* The patcher (executable) - responsible for injecting the mod loader into game assemblies.
* The mod loader (DLL assembly) which is responsible for identifying and injecting mod content into the targeted game.
* In-Game UI (currently only applicable to Unity3D games) which can be used to give mod users the ability to change how mods function whilst still inside the game.

Workflow-wise, the extension creator defines the game extension, a game assembly, as well as an appropriate entry point. That entry point should be a class following the [singleton design pattern](https://en.wikipedia.org/wiki/Singleton_pattern) and - preferably - the singleton object should be present throughout the game's life cycle. The game extension should implement both patch injection and removal use cases, either manually for more complex use cases, or automatically using the "harmonypatchermod" mod type which is designed to add/remove the patch upon deployment/purge events. Please note that the automatic patching should only be used in simple use cases where a single assembly needs to be patched [More information on the "harmonypatchermod" mod type](https://github.com/Nexus-Mods/harmony-patcher/wiki/Game-Extension-Usage)

Once the patcher function has been injected inside the game assembly, Vortex can be used to deploy/remove mods as usual, previously, the mods path was hard-coded to generate alongside the patched game assembly; e.g. when patching “Untitled Goose Game” the patch method call is injected inside the “../Untitled_data/managed/Assembly-CSharp.dll” assembly; and therefore the mods folder used to be generated inside “../Untitled_data/managed/VortexMods/”. As of Vortex 1.2.0, the mods path is customizable by the game extension.

The mods are loaded and executed at runtime by the game itself at the entry-point defined by the game extension author. The patch function will query the expected mods path and assemble a list of existing DLL files and map them against any matched manifest files; It’s important to include a manifest file for each mod assembly so that the mod loader can identify the mod’s type. Please ensure to respect the following directory structure pattern when creating mods for Vortex’s harmony patcher: 
The mod needs to have its own folder, e.g. “../VortexMods/ModName/”, inside this folder a DLL and manifest file must be included.
e.g.
```
“../VortexMods/ModName/”
  “../VortexMods/ModName/ModName.dll”
  “../VortexMods/ModName/manifest.json”
  “../VortexMods/ModName/settings.json” (if the mod needs to save state persistently)
```

Example mods:
* https://github.com/IDCs/mod-cheatinggoose
* https://github.com/IDCs/mod-psychedelic-goose

Manifest files will be parsed and any valid mod entries will be invoked/injected at game run-time as soon as the injected patch method is called.

As of Vortex 1.2.0, it is possible to create a "load_order.txt" file which can be used to dictate the order in which the Vortex mod loader executes mod patches. This is useful if a mod is written as an extension of another mod and therefore relies on that mod executing its patch first. Please keep in mind that EVERY mod patch will still be executed! Due to this fact, attempting to override mod X with mod Y may produce unexpected results. [More on the Load Order Page](https://github.com/Nexus-Mods/harmony-patcher/wiki/Load-Order-Page)

A number of Unity3D hooks/delegates are pre-defined for mod authors to subscribe to inside their mod assembly (OnUpdate, OnStart, etc). The mod loader will invoke these when they’re provided.

The Vortex In-Game Overlay (VIGO) is currently a Unity3D exclusive feature and aims to provide users with a convenient way to change mod settings from inside the game. When a Unity3D assembly is identified, the VortexUI library is deployed and its patch method call instruction is injected alongside the regular Vortex patch. The UI can be accessed in-game with the default key combination (CTRL+F12)

### Planned Improvements
* Unity AssetBundle packager tool - will streamline the asset creation process for mod authors.
* ~~Drag and drop mod load ordering functionality~~ (implemented as of Vortex 1.2.0)
* Vortex In-Game Overlay improvements for Unity3D games.
* Improve/Enhance mod type support to include most if not all existing Unity specific modding patterns.

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/9)