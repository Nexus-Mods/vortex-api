---
layout: article
author: IDCs
created: Thu, 18 Mar 2021 06:44:22 GMT
updated: Thu, 18 Mar 2021 07:11:32 GMT
wip: true
title: FBLO API Non-File Based Games Tutorial
order: 1000
tags:
  - Tutorial
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/22
---
This document expects the reader to have read through the primary FBLO documentation [here](https://nexus-mods.github.io/vortex-api/2020/10/05/File-Based-Load-Order-API.html) and to be familiar with its serialize/deserialize/validate concepts, as it will not cover these in much detail. Please use this document if you understand how to use the FBLO API but are unsure how to use it to add a load order page to your non-file based mods loading game. The full code used in this tutorial can be found [here](https://github.com/IDCs/game-destroyallhumans).

Please note that this tutorial will be using “TypeScript” which allows developers to describe the structure of an object upfront and provides code validation which helps with avoiding type related bugs. (it also allows me to better explain the structure of the mod entries we’re going to store in the file) TypeScript is basically just JavaScript with extra features - so don’t panic and read this quick introduction to TypeScript for JavaScript developers: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

Although the FBLO API was primarily designed to cater for games that use files to enable, and to sort the order in which mods are loaded into the game; the FBLO API is actually far easier to use with games that do not require a specific file structure when storing the load order.

The game extension developer can store to file whatever data he thinks is required for him to sort and validate the load order, but ultimately the chosen file format and the data stored within it should be easily serializable/deserializable - no point in making your life hard.

For the purpose of demonstrating FBLO API usage for “non-file based” games - we’ve chosen an Unreal Engine 4 game “Destroy All Humans!” which as most UE4 games loads its mods in alphanumerical order from the “../content/paks/~mods/” directory - in the case of conflicting mods, the last mod that gets loaded (or the mod with the highest alphanumeric value) will win the conflict and override any other mods that get loaded prior to it. (conveniently, this pattern is valid for most UE4 games unless the developer intentionally changes it).

Obviously in this particular case, we need to change the folder names of the mods to control the order in which the game loads them - we can do this by adding a prefix to the folder name of each mod entry - should come as no surprise that each mod entry’s data we store in the file should have the prefix included so that we can easily assign it to the folder name on deployment (we will cover how Vortex changes folder names during deployment later on in this document).

Let's start by defining what mod entry structure we want to store in the file - depending on the game and the mod packing patterns that mod authors use, a single mod archive/mod instance could represent a single mod, or it could represent several mods (mod packs) each needing a separate visual representation in the load order page (it can get really complicated) - but for the sake of this tutorial, lets keep it simple - we expect every mod archive to contain a single ‘.pak’ file and therefore every ‘.pak’ file should have a mod entry inside the load order page (each with its own prefix). For the file structure, we will need: 

- an arbitrary id to uniquely identify a mod entry.

- a modId as stored by Vortex in its application state - yes there are 2 different identifiers, the id property is intended to be used for a single mod entry, while the modId acts as a grouping key for multiple arbitrary ids - basically multiple mod entries can be tied to a single mod Id.

- the prefix we want to assign to the mod’s folder name - the type of prefix needs to be alphanumeric - for this use case a simple numeric prefix should be sufficient; but it’s really up to the developer what he wants to append. (We went with an alphabetical prefix ‘AAA - ZZZ’)

- a human readable name to display to the user.

- whether the mod is enabled or not - this is actually not required for our use case (we’re just going to always set it to true), but the FBLO API expects it to be provided nevertheless.

And that’s pretty much all we need. Here is the full object’s “interface” or “object description”

```
export interface ISerializableData {
  // The prefix we want to add to the folder name on deployment.
  prefix: string;
}
 
export interface ILoadOrderEntry {
  // An arbitrary unique Id.
  id: string;
 
  // This property is required by the FBLO API functors.
  //  This game will not be using checkboxes so we're just going to
  //  assign "true" when we build the load order entry instance.
  enabled: boolean;
 
  // Human readable name for the mod - this is what we display to the user
  //  in the load order page.
  name: string;
 
  // The modId as stored by Vortex in its application state. Remember, in
  //  other games, 1 modId could have several mod entries in the load order
  //  page that are tied to it. That's why we have two separate id properties.
  modId?: string;

  // Any additional data we want to store in the load order file.
  //  this is where we’re going to store our prefix.
  data?: ISerializableData;
}
```

Now that we defined the mod’s entry format within the load order file; we need to insert this data into our load order page. Serialization will only occur if Vortex detects a change in its loadOrder state for the active profile. One way to force this to occur is by shifting the “point of truth” from the data that we deserialize from the file, to the actual deserialization function which will be responsible for filtering out invalid mod entries and inserting valid ones.

```
export async function deserialize(context: types.IExtensionContext): Promise<LoadOrder> {
  // genProps is a small utility function which returns often re-used objects
  //  such as the current list of installed Mods, Vortex's application state,
  //  the currently active profile, etc.  
  const props: IProps = genProps(context);
  if (props?.profile?.gameId !== GAME_ID) {
    // Why are we deserializing when the profile is invalid or belongs to
    //  another game ?
    return [];
  }
 
  // The deserialization function should be used to filter and insert wanted data into Vortex's
  //  loadOrder application state, once that's done, Vortex will trigger a serialization event
  //  which will ensure that the data is written to the LO file.
  const currentModsState = util.getSafe(props.profile, ['modState'], {});
 
  // we only want to insert enabled mods.
  const enabledModIds = Object.keys(currentModsState)
            .filter(modId => util.getSafe(currentModsState, [modId, 'enabled'], false));
  const mods: { [modId: string]: types.IMod } = util.getSafe(props.state, ['persistent', 'mods', GAME_ID], {});
  const loFilePath = await ensureLOFile(context);
  const fileData = await fs.readFileAsync(loFilePath, { encoding: 'utf8' });
  try {
    const data: ILoadOrderEntry[] = JSON.parse(fileData);
 
    // User may have disabled/removed a mod - we need to filter out any existing
    //  entries from the data we parsed.
    const filteredData = data.filter(entry => enabledModIds.includes(entry.id));
 
    // Check if the user added any new mods.
    const diff = enabledModIds.filter(id => filteredData.find(loEntry => loEntry.id === id) === undefined);
 
    // Add any newly added mods to the bottom of the loadOrder.
    diff.forEach(missingEntry => {
      filteredData.push({
        id: missingEntry,
        modId: missingEntry,
        enabled: true,
        name: mods[missingEntry] !== undefined
          ? util.renderModName(mods[missingEntry])
          : missingEntry,
      })
    });
 
    // At this point you may have noticed that we're not setting the prefix
    //  for the newly added mod entries - we could certainly do that here,
    //  but that would simply be code duplication as we need to assign prefixes
    //  during serialization anyway (otherwise user drag-drop interactions will
    //  not be saved)
    return filteredData;
  } catch (err) {
    return Promise.reject(err);
  }
}
```
The newly generated loadOrder will be stored persistently inside Vortex’s internal application state - this change will then cause Vortex to trigger the serialization function which will write the newly generated load order to file and also assign the prefixes of each mod entry. (That change will also cause an additional deserialization, ensuring that Vortex’s internal state is also aware of the newly assigned prefix data)

```
export async function serialize(context: types.IExtensionContext,
                                loadOrder: LoadOrder): Promise<void> {
  const props: IProps = genProps(context);
  if (props === undefined) {
    return Promise.reject(new util.ProcessCanceled('invalid props'));
  }
 
  // Make sure the LO file is created and ready to be written to. Yes
  //  I know I’m deleting the file before writing to it again, but I was
  //  too lazy to search for the LO file location - this way I don’t have
  //  to know where it is; the ensure LO file function returns the
  //  the correct location
  const loFilePath = await ensureLOFile(context);
 
  // The array at this point is sorted in the order in which we want the game to load the
  //  mods, which means we can just loop through it and use the index to assign the prefix.
  const prefixedLO = loadOrder.map((loEntry: ILoadOrderEntry, idx: number) => {
    const prefix = makePrefix(idx);
    const data: ISerializableData = {
      prefix,
    };
    return { ...loEntry, data };
  });
 
  // Delete the existing file (if any) and write the prefixed LO to file.
  await fs.removeAsync(loFilePath).catch({ code: 'ENOENT' }, () => Promise.resolve());
  await fs.writeFileAsync(loFilePath, JSON.stringify(prefixedLO), { encoding: 'utf8' });
  return Promise.resolve();
}
```

The validate function is simplest as we don’t want to do any validation:

```
export async function validate(prev: LoadOrder,
                               current: LoadOrder): Promise<any> {
  // Nothing to validate really - the game does not read our load order file
  //  and we don't want to apply any restrictions either, so we just
  //  return.
  return undefined;
}
```

We should now have all the information required for us to control the load order; given that “Destroy All Humans!” requires us to change the folder names to force it to load the mods in the order we set, we will have to change the mod folder names during deployment, fortunately the game registration call has a “mergeMods” functor, which tells Vortex whether to merge mods in the mods destination directory, or put each mod into a separate one. This can actually be used to tell Vortex to change the subdirectory’s name during deployment by returning a string with the wanted folder name.

```
context.registerGame({
    id: GAME_ID,
    name: 'Destroy All Humans!',
    mergeMods: (mod) => toLOPrefix(context, mod), // <- Will append the prefix in front of the mod's id.
    queryPath: toBlue(findGame),
    requiresCleanup: true,
    supportedTools: [],
    queryModPath: () => modsRelPath(),
    logo: 'gameart.jpg',
    executable: () =>  'DH.exe',
    requiredFiles: [
      'DH.exe',
      path.join('DH', 'Binaries', 'Win64', 'DH-Win64-Shipping.exe'),
    ],
    setup: toBlue((discovery) => prepareForModding(context, discovery)),
    environment: {
      SteamAPPId: STEAM_ID,
    },
    details: {
      steamAppId: +STEAM_ID,
    },
  });

function toLOPrefix(context: types.IExtensionContext, mod: types.IMod): string {
  // As mentioned previously in this guide, we chose to use an alphabetical prefix
  //  but we could simply append a numeric prefix instead. The point of this fucntion
  //  is to insert the prefix in front of the mod's folder name.
  const props: IProps = genProps(context);
  if (props === undefined) {
    return 'ZZZZ-' + mod.id;
  }
 
  // Retrieve the load order as stored in Vortex's application state.
  const loadOrder = util.getSafe(props.state, ['persistent', 'loadOrder', props.profile.id], []);
 
  // Find the mod entry in the load order state and insert the prefix in front
  //  of the mod's name/id/whatever
  const loEntry: ILoadOrderEntry = loadOrder.find(loEntry => loEntry.id === mod.id);
  return (loEntry?.data?.prefix !== undefined)
    ? loEntry.data.prefix + '-' + mod.id
    : 'ZZZZ-' + mod.id;
}
```

Vortex should now insert the prefix in ascending order to mod folder names during deployment. e.g. 'AAA-CryptoGreenhead', 'AAB-CryptoRedHead' (AAB's value is higher so crypto's head will be red in-game.)

And that's pretty much it - to summarize, we shifted the "point of truth" to the deserialization function which fully controls what gets inserted into the load order page and file. We add the prefix during serialization instead of deserialization as any drag-and-drop changes made by the user will not be persisted if done through deserialization alone. We _could_ assign the prefix during deserialization too, but any change in loadOrder will call the serialization function as well, so there's no point in duplicating code. Finally, the game registration's "mergeMods" functor allows us to control the folder name of the deployed mods, which we use to insert the prefix thus controlling the order in which the game loads its games (we pull the prefix from Vortex's application state).

UE4 games have a well established pattern we could use to control the load order; other games/game engines will have different patterns that need to be followed, and this tutorial may not be applicable in some cases.

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/22)