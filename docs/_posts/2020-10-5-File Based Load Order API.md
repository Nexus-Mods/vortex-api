---
layout: article
author: IDCs
created: Fri, 20 Nov 2020 16:25:39 GMT
updated: Wed, 27 Jan 2021 14:56:06 GMT
wip: true
title: File Based Load Order API
order: 1000
tags:
  - Feature
  - Tutorial
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/20
---
## **Introduction** ##

The concept of load ordering when modding games refers to the organization of a series of game modifications in a specific order for the game to load in sequence; this is particularly useful if for example mod A has functionality that depends on mod B - in order for mod A to function as intended, mod B must be loaded by the game before mod A.

Vortex's file based load ordering API aims to provide game extension developers with a simple way to quickly add a drag-and-drop load ordering page to their extensions, which game modders can use to organize their mod entries as they see fit from inside Vortex (or outside of it when applicable) before launching the game.

As the name of this article suggests, our system involves saving the load order data persistently on disk, which works quite well with (but not exclusive to) games that require a mod list file to be generated (e.g. Witcher 3, Kingdom Come: Deliverance and others). The extension developer has full control of _how_ and _where_ to save, load and validate mod entry data, while Vortex decides _when_ it is necessary to do so.

Please note that this document will not cover how to create a game extension for Vortex and expects the reader to have created it beforehand and is now interested in adding a load order page to it.

For more information about how to create a game extension please visit our wiki
https://wiki.nexusmods.com/index.php/Creating_a_game_extension_for_Vortex

**Registering your game extension**

To use the Load Order API, the game extension needs to forward an object containing all required parameters to the LO component so that it can reach the game extension’s functionality - this is done through the context object in the extension’s exported main function.

e.g.
```
Function main(context) {
  context.registerGame({ ... }); // Parameters minimized for the sake of readability.

  context.registerLoadOrder({ gameId, validate, deserializeLoadOrder, serializeLoadOrder });

  return true;
}
```

**registerLoadOrder Parameters**

The gameId is the domain name as used by the Nexus Mods website (and in the registerGame API call) e.g. nexusmods.com/kenshi
```gameId: string;```

The validation function’s goal is to always ensure that the current load order array contains valid load order entries and that they are ordered correctly and do not breach any rules the extension developer wants to define. The validate function is called _before_ serialization to ensure we do not corrupt the load order file saved on disk and _after_ deserialization to prevent an invalid load order caused by external file tampering. (Manual change, changes through tools, etc)
```validate: function(prevLO, newLO) => Promise<IValidationResult>;```

The extension developer needs to define how to convert/deserialize the mod list file into a correctly ordered array of load order entry objects which are forwarded to the Load Order page for rendering. As mentioned in the validate parameter, any deserialized load order will be passed through the validation logic immediately after deserialization to ensure validity and maintain LO integrity.
```deserializeLoadOrder: function() => Promise<LoadOrder>```

Given a correctly ordered load order array, the serialization function needs to define how and where to persistently save the LO data on disk. The LO API will only call the serialize function if the provided loadOrder array has passed validation. Validation failure 
```serializeLoadOrder: function(loadOrder) => Promise<void>;```

An optional parameter which can be defined if the extension developer requires special usage instructions to be relayed to the user. The instructions will be displayed in the informational panel next to the load order entries inside the load order page. Bbcode is supported to allow the developer to easily format their text.
```usageInstructions: string;```

Another optional parameter which can be used to specify if the load order entries should be rendered with checkboxes to allow users to enable/disable the entries from inside the load order page. Please note that it is the extension developer’s responsibility to serialize and validate this change so that the deserialization functionality is able to identify whether an entry is enabled/disabled.
```toggleableEntries: boolean;```


**The Load Order Entry**

Vortex uses the load order entry object as provided by the deserialization functionality to render the entry to the user. For it to be rendered correctly, each entry must consist of several properties.

A unique identifier for the entry - this is primarily used by Vortex internally, but will be displayed to the user if the ‘name’ property of the entry is an empty string.
```id: string;```

Whether the entry is enabled or disabled - the user is able to modify this property through the Load Order page by toggling its checkbox on/off (only applicable if the game extension developer had set the toggleableEntries parameter to true)
```enabled: boolean;```

The display name for the entry - usually the mod’s name so that the user can identify what this entry relays to.
```name: string;```

Mods that are downloaded and installed through Vortex will have an arbitrary id assigned to them in the application state inside the ```persistent.mods.{gameId}``` branch - any load order entries that belong to a mod installed through Vortex should have this property assigned by the extension developer during deserialization.

The modId property is optional, however - any load order entry that does not include a modId property will be assumed to have been added externally (either manually by the user or through a different tool/mod manager) and will be visually highlighted as an external entry in the load order.
```modId: string;```

An optional property that can be added to specify if the entry is in a locked state - Vortex will display a small lock icon when rendering the entry, but please be aware that Vortex will not enforce the entry’s position in the load order! It is the responsibility of the extension developer to ensure that a locked entry is placed in the correct load order position when serializing/deserializing/validating. Valid values for the locked state are: 
```
// Valid values for the locked state are: ‘true’, ‘false’, ‘always’, ‘never’
locked: LockedState;
```

If required, additional mod data can be passed along with the load order entry using the data property - this property is fully customizable and the extension developer can pass any dataset to the object. (Optional parameter)
```data: T;```

## **Usage** ##

For the purpose of demonstrating how to use the LO API, we’ve taken our pre-existing Kenshi game extension and enhanced it to support load ordering. The game stores its mod list inside a ```../Kenshi/data/mods.cfg``` file which enumerates its mod files in the sequence in which the game needs to load its mods. Please note that Kenshi also provides its players with the ability to enable/disable their mods through its launcher; disabling a mod inside the launcher will remove its entry from the mods.cfg file, but the mod will still be installed - this is important to keep in mind when we deserialize as we want to display all _installed_ mod entries in the load order page, not just the enabled ones.

As described in our introduction, we first need to register our game extension with the Load Order component.

```
/**
 * This tells the load order API which functions to execute when it is necessary to run serialization/deserialization
 * and validation - note that we’re adding the api object to all function calls as that gives them access to Vortex’s
 * application state and other useful functionality.
*/
context.registerLoadOrder({
    gameId: KENSHI_ID,
    validate: (prev, current) => validate(context.api, prev, current),
    deserializeLoadOrder: () => deserialize(context.api),
    serializeLoadOrder: (loadOrder) => serialize(context.api, loadOrder),
    toggleableEntries: true,
  });

```

**Validation**

We recommend to always start by defining the validation function first as it’s easier to define a set of rules and then ensuring that both serialization and deserialization adhere to those rules than writing the other functions with potential flaws and then be forced to re-write them because they fail validation.

In the case of Kenshi it’s easy, as the mod list format is pre-defined by the game which expects entries to consist of the mod filename as seen below:
```
Some mod.mod
Yet another mod.mod
```
So each mod entry in the list is actually a file which should be located inside “../Kenshi/mods/modName/modName.mod” so there are two things we can validate - we need to make sure that any mod list entry has the ‘.mod’ file extension, and make sure that the file is actually located inside Kenshi’s mods folder.

For the sake of keeping this guide shorter, we won’t go into detail about how we run those checks as they’re quite trivial, and each game will have its own validation rules anyway - but what we do want to display is the validate function’s return value.

```
function validate(api, prev, current) {
  // find any entries that do not have the '.mod' file extension. (we decided to use the filename of the mod file as an entry id)
  const invalid = current.filter(entry => path.extname(entry.id) !== '.mod');

  if (invalid.length === 0) {
    // we have no invalid entries; we can just return undefined here and Vortex will
    //  know that the load order has passed validation.
    return Promise.resolve(undefined);
  } else {
    // we found some invalid entries - we need to let the user know which mods have failed validation and why, so he can attempt to fix it.
    const invalidEntries = invalid.map(entry => ({
        id: entry.id,
        reason: 'the mod file does not have the '.mod' file extension',
      });
    return Promise.resolve({ invalid: invalidEntries });
  }
}

```

**Deserialization**

Vortex’s load order component will attempt to deserialize the game’s assigned mod list file as soon as the user opens the load order page. We need to fully structure our load order array from file - the information Kenshi’s load order file stores is quite poor (just filenames), but sufficient for us to work with as long as we can always rely on each .mod file inside the mod list to be unique (in this case we can)

Before jumping the gun and simply parsing the mod list, it may be wise to step back and try to see the bigger picture from a user’s environment perspective.

* The user will probably have mods that he installed through Vortex - we can match the mod file names we find inside the game’s mods.cfg file to whatever files Vortex had deployed - that means we can find the modId property for the load order entry.

* The user could have mods that he installed manually or through another tool/mod manager. These mods could be enabled and present in the mods.cfg file. Or they could be missing from the mods.cfg file but still installed in the mods directory (in Kenshi’s context that just means that a mod is installed but disabled)

Reading the file in this case is not sufficient - we need to make sure we scan the game’s mods directory for all files with the .mod file extension, whether they are present inside the mods.cfg file or not as we want to give the user the ability to enable/disable mods that haven’t been installed through Vortex too.

The use case in Kenshi is more complex than it has to be - we chose to edit the game’s load order file directly which limits the amount of data we can write to the file and makes it harder to deserialize correctly - but this will work just fine for the purpose of this tutorial.

Again, we’re going to omit the main bulk of the deserialization logic but you can always read the source code here https://github.com/Nexus-Mods/vortex-games/blob/file_based_lo/game-kenshi/index.js

```
async function deserialize(api) {
  // We read in the mods.cfg file
  const listData = await fs.readFileAsync(modListPath, { encoding: 'utf8' });
  const modList = listData.split('\n');
  
  // We retrieve the list of mods that have been installed through Vortex from our application state
  const managedMods = util.getSafe(state, ['persistent', 'mods', KENSHI_ID], {});

  // We scan the game’s mods directory for all mod files ending with the ‘.mod’ file extension.
  const deployedModFiles = await getDeployedMods(api);

  // We retrieve the deployment manifest information which will allow us to find the modId for mod files deployed through Vortex.
  const deploymentMap = await readDeploymentManifest(api);

// We iterate through all the mod files we found earlier when we scanned the game’s mods directory
const newLO = deployedModFiles.reduce((accum, file) => {
    // Check if the file name is present inside the mods.cfg file
    const id = path.basename(file);
    const isInModList = modList.includes(id);

    // Check to see if the file has been deployed by Vortex and retrieve its modId so we can add it to our load order entry (if we manage to find it)
    const modId = Object.keys(deploymentMap)
      .find(id => deploymentMap[id].files?.includes(path.basename(file)));

    // Assign the load order entry’s display name - we can use the modName as displayed inside Vortex’s mods page if the game has been deployed through Vortex
    const modName = (modId !== undefined)
      ? managedMods?.[modId]?.attributes?.modName
      : path.basename(modFile, MOD_FILE_EXT);

    // We should now have all the data we need - start populating the array.
    if (isInModList) {
      // The mod is installed and enabled.
      accum.push({
        id,
        enabled: true,
        name: modName,
        modId,
      });
    } else {
      // The mod is installed but has been disabled inside the Kenshi launcher.
      accum.push({
        id,
        enabled: false,
        name: modName,
        modId,
      });
    }
    return accum;
  }, []);

// Send the deserialized load order to the load order page - Vortex will validate the array using the validation function provided by the extension developer and apply it if valid, otherwise it will inform the user that validation failed
return Promise.resolve(newLO);
```

**Please note:** depending on whether your game extension provides functionality to automatically sort the user's mods for him,  you may be tempted to sort the deserialized load order array at this stage and display a "ready-to-go" mod list to the user - this is not what the deserialization functor is designed for and will most definitely cause inconsistency between what the load order page is displaying to the user and what is actually present inside the game's load order file!

For best user experience with automatic sorting algorithms we suggest adding a new button to the Load Order page by adding the below code snippet to your game extension's init function, right after we call the ```registerLoadOrder``` function e.g.:
```
context.registerAction('fb-load-order-icons', 200, 'loot-sort', {}, 'Sort and Save', async () => {
    let currentLO = [];
    try {
      // Always keep the user in mind - he may have manually modified the file
      //  before clicking the sort button, which is why it's a good idea to deserialize
      //  the file here to get the current load order from the file.
      currentLO = await deserializeLoadOrder(context.api);
    } catch (err) {
      context.api.showErrorNotification('Failed to read to LO file', err);

      // No point in continuing if we can't determine the current load order.
      return;
    }

    // This example uses a custom sorting algorithm for Morrowind.
    //  It sorts the master files (ESM's) to the top of the array,
    //  above any regular plugins (ESP's).
    const newLO = [...currentLO].sort(sortMasters);
    const validRes = await validate(context.api, currentLO, newLO);
    if (validRes !== undefined) {
      // The new load order array we sorted is reporting a validation error.
      //  We could attempt to resolve this ourselves here. OR we can simply
      //  tell the user we failed to automatically sort and that he needs to modify the order
      //  manually - if the validation error persists while he is manually modifying
      //  the order, the error box in the information panel will inform him of this fact
      //  so we don't have to worry about.
      context.api.showErrorNotification('Unable to sort automatically',
        'Please sort your load order manually');

      // Do not proceed beyond this point.
      return;
    }
    
    // If we reached this bit of code, the newLO array is valid - lets write it to file
    try {
      await serializeLoadOrder(context.api, newLO);
      context.api.sendNotification({ 
        type: 'success',
        message: 'Load order sorted and saved successfully'
      });
    } catch (err) {
      context.api.showErrorNotification('Failed to write to LO file', err);
    }
  }, () => {
    const state = context.api.getState();
    const activeGameId = selectors.activeGameId(state);
    return (activeGameId === GAME_ID);
  });
```

**Serialization**

Serialization is technically the simplest to implement as this function will only be called if load order validation has passed successfully, and all that is required is to write the load order data to disk.

```
async function serialize(api, loadOrder) {
  const discoveryPath = getDiscoveryPath(api);
  if (discoveryPath === undefined) {
    return Promise.reject(new util.NotFound('Game not found'));
  }

  const modListPath = path.join(discoveryPath, 'data', 'mods.cfg');
  return fs.writeFileAsync(modListPath, loadOrder
    .filter(mod => mod.enabled) // Make sure we only write the enabled mods.
    .map(mod => mod.id).join('\n'), { encoding: 'utf8' });
}

```

Again - please avoid sorting the array before writing it to file, it's guaranteed to cause confusion or perhaps even inconsistencies between what is presented to the user in the Load Order page and what is saved to file.

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/20)