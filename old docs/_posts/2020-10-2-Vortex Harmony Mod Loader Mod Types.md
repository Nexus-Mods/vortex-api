---
layout: article
author: IDCs
created: Tue, 03 Nov 2020 07:07:17 GMT
updated: Tue, 03 Nov 2020 07:08:36 GMT
wip: true
title: Vortex Harmony Mod Loader Mod Types
order: 10
tags:
  - Harmony Patcher
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/13
---
Mod types are currently identified (quite naively, but this will change) using the mod’s manifest file; the mod loader parses the manifest and verifies whether it matches the expected object schema/data for each registered mod type. If a manifest is successfully matched to a Mod Type, the mod loader will load and invoke the mod’s entry-point as defined by the Mod Type. Any unmatched mods will not be loaded.

### Supported Mod Types



*   Vortex Mod Type - this is the default Vortex mod type, it exposes the mod’s data, a series of logging functions and GUI/Unity specific helper methods. 
*   UMM Mod Type - Experimental Unity Mod Manager Mod support is available and should be able to support any games developed in Unity 2018 and above (.NET 4.0) Please note that the Mod Loader needs to disassemble and re-assemble any UMM mods prior to being able to load them correctly.
*   QMM Mod Type used for the Subnautica games is still in development/testing.

### Exposed Mod Types

Exposed mod types refer to the objects that are actually exposed to mod assemblies and to Vortex’s Unity UI module. This is done primarily for encapsulation reasons, but also to mimic other mod managers when trying to load mods which are not natively built for Vortex’s mod loader.

Currently we use:



*   VortexMod (Exposed Vortex mod type)
*   ModEntry (Exposed Unity Mod Manager mod type)
*   QMod (Exposed QMOD Manager mod type)

### Mod Settings

It’s important to understand that aside from the patch method calls - which are injected directly into the game’s assembly by the patcher executable - Vortex will not tamper, or persistently change the game’s code in any way, unless a mod is explicitly changing IL instructions when the mod loader invokes the mod’s entry-point. If IL level changes are required, please use [Harmony Transpilers](https://gist.github.com/pardeike/c02e29f9e030e6a016422ca8a89eefc9) instead. 

[Harmony lib](https://github.com/pardeike/Harmony) patches are designed to keep the original method intact and allows for multiple patches to co-exist without conflicting with each other while making mod removal as easy as deleting the mod’s folder. That’s all fine and dandy unless your mod is customizable, in which case you need to be able to save the mod’s state/user’s customized options, so he’s not forced to make the same changes each time he runs the game.

For this purpose, the mod loader provides an option to serialize/deserialize mod settings into json or xml documents using generic pre-defined settings classes. It is the mod author’s responsibility to load/manage/save these settings throughout his mod to ensure that it functions correctly.

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/13)