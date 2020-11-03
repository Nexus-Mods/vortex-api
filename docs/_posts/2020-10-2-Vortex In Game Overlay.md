---
layout: article
author: IDCs
created: Tue, 03 Nov 2020 07:12:27 GMT
updated: Tue, 03 Nov 2020 07:12:40 GMT
wip: true
title: Vortex In Game Overlay
tags:
  - Harmony Patcher
  - UI
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/15
---
The VIGO module is currently only available for Unity3D games. It provides an in-game UI which users can use to view the currently loaded mods and modify their settings if the mods provide customizable options.

Upon positive identification of a Unity Engine game, the patcher executable will inject the VIGO patch method call above the mod loader’s patch method and subscribe to any relevant events it may emit, thus connecting the mod loader to VIGO and forwarding it the list of loaded exposed mods.

Exposed mods are able to subscribe to several predefined MonoBehaviour hooks such as

Update, FixedUpdate, LateUpdate, and most importantly under the current context, the OnGUI hook which will invoke the selected mod’s subscribed function whenever the Overlay re-renders. This is useful when the mod author wishes to provide the users with the ability to change mod settings/options inside the game, or provide a button which adds 1000XP whenever it’s pressed. It’s important to note that any UI elements inserted inside the OnGUI hook must use Unity’s Immediate Mode GUI ([IMGUI](https://docs.unity3d.com/Manual/GUIScriptingGuide.html))

To bring up the overlay inside the game, simply press down the Ctrl + F12 key combination.

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/15)