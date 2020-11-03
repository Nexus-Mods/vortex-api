---
layout: article
author: IDCs
created: Tue, 03 Nov 2020 07:11:12 GMT
updated: Tue, 03 Nov 2020 07:11:32 GMT
wip: true
title: Harmony Patcher Executable
tags: General Harmony Patcher
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/14
---
The executable should only be used to inject/remove the mod loader method call into/from a game’s assembly; each stage will deploy/remove all libraries required by the mod loader to function correctly. Optionally, if a Unity3D assembly is detected, the patcher will inject the Vortex In-Game Overlay (VIGO) loader method as well.

Please note that modern Unity3D games (likely version 2018 and above) are currently distributed with a restricted Mono runtime library which disables reflection. The patcher will attempt to identify games with tampered runtime libraries and replace them with untampered versions. Please inform us if/when this functionality fails to replace the library.

Given that the patcher is a standalone executable, it is possible to execute it outside Vortex but please note that the mod loader is not designed to install or manage mods on its own.

### Patcher arguments


<table>
  <tr>
   <td><strong>Argument</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>‘-h’
   </td>
   <td>Displays the help screen.
   </td>
  </tr>
  <tr>
   <td>‘-g’ or ‘extension=’ i.e.
<p>
‘./VortexHarmonyExec.exe -g “../game-untitledgoose”’
   </td>
   <td>(optional) Path to the game extension’s folder. Currently this is used to retrieve game-specific UI asset bundles stored inside the game’s extension folder.
   </td>
  </tr>
  <tr>
   <td>‘-m’ or ‘managed=’ i.e. ./VortexHarmonyExec.exe -m “../path_to_game_assembly”
   </td>
   <td>Used to define the full file path to the game assembly we wish to patch. 
<p>
Alternatively just a folder path can be defined and the patcher will assume we’re attempting to mod a Unity3D game and will try to load “Assembly-CSharp.dll”
   </td>
  </tr>
  <tr>
   <td>‘-i’ or ‘install=’ i.e. ‘-i “../lib/”’
   </td>
   <td>Path to the patcher’s built dependencies - these are copied over to the game’s dataPath.
   </td>
  </tr>
  <tr>
   <td>‘-e’ or ‘entry=’ i.e. ‘-e “NameSpace.ClassName::MethodName”’
   </td>
   <td>The entrypoint for the patch. This defines the function where we wish to insert/inject the patcher function call for the game to use.
   </td>
  </tr>
  <tr>
   <td>‘-r’ i.e. ‘./VortexHarmonyExec.exe  -r’
   </td>
   <td>(optional) Adding the -r argument will inform the patcher that it needs to attempt to remove the Vortex patch. The entrypoint and game assembly still need to be provided.
   </td>
  </tr>
</table>


Any errors which may have occurred during patch injection will be logged inside Vortex’s appdata folder

“C:\Users\{YOUR_USERNAME}\AppData\Roaming\Vortex\harmonypatcher.log”

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/14)