---
layout: article
author: IDCs
created: Tue, 03 Nov 2020 07:13:25 GMT
updated: Tue, 03 Nov 2020 07:13:50 GMT
wip: true
title: Vortex Harmony Mod Loader
order: 9
tags:
  - General
  - Harmony Patcher
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/16
---
Vortex’s mod loader has been developed to be easily extensible and hopefully cover most if not all modding/patching patterns that can be applied to C# written games/projects. Given that several patterns have already been established for older games, the mod loader has a set of defined Mod Types which it uses to identify and apply the correct pattern when injecting the mods into the game. We do expect to have to constantly improve this functionality as new use cases appear.

The mod loader functionality is executed by the game itself at runtime once the previously injected VortexPatcher::Patch() method is called by the game. 

<img src="https://staticdelivery.nexusmods.com/mods/2295/images/63/63-1573043701-729448297.png" height="50%" width="50%">

As seen in the image above, the patcher method has been inserted inside the game’s GameManager::Awake() method. (The RunUnityPatcher() function is part of Vortex’s In-Game UI library which is added to Unity3D games)

Once the game invokes the VortexPatcher.Patch() method, the mod loader, will query the VortexMods directory and start loading the mods which pass the identification/validation stage.

The mod loader uses the mod’s manifest file to retrieve the mod’s entry-point which it will attempt to invoke as defined for the mod’s type; for the entry-point to be invoked correctly, the method **must **be statically declared for obvious reasons. It is the mod author’s responsibility to implement his own Harmony patches and/or use Cecil/Reflection code inside his mod’s assembly to add to/change the game’s functionality.

By default the Vortex Mod Type passes a “VortexMod” object to the mod’s entry point method which can be used to access mod specific data, several utility functions and assign functions to delegates; most importantly, the VortexMod object offers access to logger methods which can be used to log errors and information throughout the mod’s execution. All logging messages are saved inside Vortex’s appdata folder “C:\Users\{YOUR_USERNAME}\AppData\Roaming\Vortex\harmony.log”

please note that mods are currently loaded in alphabetical order, this is something we aim to enhance in the near future so that mod users could organize their load order from inside Vortex.

### Mod Identification/Validation

Different mod managers have defined their own modding pattern for each game they manage. Mod identification/validation refers to the process that the Vortex Mod Loader goes through when trying to identify how it is expected to store and use a mod’s data, and how to correctly invoke the mod’s entry point method. Thankfully the underlying data/modding pattern is nearly identical for all Unity3D games and by extension - nearly identical for all Unity3D specific mod managers; Vortex separates the outstanding functionalities using “Exposed Mod Type Classes”.

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/16)