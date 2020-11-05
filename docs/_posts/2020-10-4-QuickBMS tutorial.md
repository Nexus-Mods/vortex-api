---
layout: article
author: IDCs
created: Thu, 05 Nov 2020 08:33:06 GMT
updated: Thu, 05 Nov 2020 08:33:06 GMT
wip: true
title: QuickBMS tutorial
order: 1000
tags:
  - Tutorial
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/18
---
Please note: this tutorial uses components which have been introduced in Vortex 1.4.X; previous Vortex versions are using the deprecated event based API [link to api] and therefore it’s highly advisable to update to the latest version before attempting to go through this tutorial.

QuickBMS is an extractor engine created by Luigi Auriemma which can be used to extract, list, create or re-pack files through simple textual instructions. The extractor is capable of decompressing and decrypting files - for more information about this tool please see: url[quickbms introduction link here]

The aim of this document is to present a simple use case where QBMS can be used to identify whether a .ZIP archive contains a specific image file and replace it with a different image (without extracting); this use case is intentionally simplistic and can obviously be done manually, but the same concept can be applied to game specific archives which do not have publicly available tools to extract or create them; additionally, in some cases these archives can be tens of GB in size - it seems a bit silly to manually extract large archives just to replace 1 file - this is where QBMS shines as it’s able to extract and replace specific files from archives without having to extract the entire archive beforehand.

Please note that this tutorial will not cover the BMS scripting language and will assume that the reader is already familiar with it or (as in our case) has downloaded a pre-existing BMS script from the QBMS web page (https://aluigi.altervista.org/quickbms.htm). If interested, please visit [Xentax](https://forum.xentax.com/viewtopic.php?t=17892) for a basic BMS scripting tutorial.

Generally QBMS operations offered by the Vortex API expect a minimum of 3 arguments:

- Absolute path to the BMS script we wish to use in our operation - we downloaded a pre-existing BMS script specific to .ZIP files from the QBMS home page.

- Absolute path to the archive file we wish to manipulate - we created a .ZIP archive containing a readme and an image file (which we aim to replace)

- The operation path which behaves differently depending on the operation we execute:
1. Extract operations use the operation path to specify the destination of extraction
2. ReImport operations use the operation path to ascertain which files to replace (the directory structure must match the archive structure).

- (optional) the QBMS options object will allow you to fine tune your operation [more on that here: link to QBMS options]

Our setup consists of:

- A freshly created Vortex extension placed inside our “%appdata%/Vortex/plugins/qbmsTut” folder (as explained [in this wiki section](https://wiki.nexusmods.com/index.php/Creating_a_game_extension_for_Vortex#Creating_your_extension)) qbmsTut will be our working directory and will hold all our files.

- A zip file we created - “tutorial.zip” which contains a readme and an image file.
%appdata%/Vortex/plugins/qbmsTut/tutorial.zip
	-> image.png
	-> readme.txt

- A folder (%appdata%/Vortex/plugins/qbmsTut/opPath) containing the image file we want to insert into the archive (and nothing else) the image is also named “image.png”; during the re-import/replace process QBMS will pick up the contents of the folder and attempt to replace archive files with any files with matching names inside the folder.

To start with, our code looks like this:
```
const path = require('path');
const { fs, log, util } = require('vortex-api');

//This is the main function Vortex will run when detecting the game extension.
function main(context) {
  // Immediately ensure that Vortex is aware that we need the quickbms extension to load before this extension.
  context.requireExtension('quickbms-support');
	
  return true;
}

module.exports = {
  default: main,
};
```

For the purpose of demo-ing the functionality, rather than creating a full on game extension we’re simply going to add a few buttons which will be displayed in the action bar of any game’s mods page, each button will execute a different qbms operation. We start with a list operation - this can be used to find specific files, or list the entire contents of the archive depending on what we need.

For the demo, we just want to make sure that the file is there - as mentioned above we need to specify the paths to our bms script, operation directory and archive like so:

```
// __dirname in a node script returns the path of the folder where the current JavaScript file resides.
context.api.ext.qbmsList({
     bmsScriptPath: path.join(__dirname, 'zip.bms'),
     archivePath: path.join(__dirname, 'tutorial.zip'),
     operationPath: path.join(__dirname, 'opPath')});
```

The above qbms operation will start the QuickBMS process and will list the entire contents of the archive in the background, but unfortunately we won't be able to see the resulting data because we didn't specify a callback parameter. Vortex's QBMS integration will automatically inform the user of any errors or if the operation had been successful - but if we want our extension to react to the result, we must provide a callback parameter.

```
context.api.ext.qbmsList({
     bmsScriptPath: path.join(__dirname, 'zip.bms'),
     archivePath: path.join(__dirname, 'tutorial.zip'),
     operationPath: path.join(__dirname, 'opPath'),
     callback: (err, data) => {
       // err will be undefined if the operation is successful, otherwise it will contain the error information.
       if (err !== undefined) {
         log('error', 'something went wrong', err);
         return;
       }

       // The operation was successful - we got back an array of objects describing the archive's contents.
       log('info', 'operation successful', JSON.stringify(data, undefined, 2));
     },
});
```

We can obviously look through the data we got back from QBMS for the image file by sifting through the array of objects we got back, but lets fine tune our operation instead to make sure we only get the image.png file. We can do this by using the qbms options parameter to specify wildcards - QBMS will ensure to find only files matching the wildcard pattern - for example `'{}.png'` will match any file with the '.png' extension.

```
context.api.ext.qbmsList({
     bmsScriptPath: path.join(__dirname, 'zip.bms'),
     archivePath: path.join(__dirname, 'tutorial.zip'),
     operationPath: path.join(__dirname, 'opPath'),
     qbmsOptions: {
       // Specify that we're only interested in "image.png", this will ensure we don't
       //  pick up the readme file.
       wildCards: ['image.png'],
     },
     callback: (err, data) => {
       if (err !== undefined) {
         // File was not found
       } else {
         // We found the file
       }
     },
});
```

Ok, so now we can confirm whether the file is actually present inside the archive - great, lets replace it. Instead of qbmsList, we call the qbmsReimport API function - conveniently, that's actually all we have to do as the Reimport will use the same parameters.
```
context.api.ext.qbmsReimport({
     bmsScriptPath: path.join(__dirname, 'zip.bms'),
     archivePath: path.join(__dirname, 'tutorial.zip'),
     operationPath: path.join(__dirname, 'opPath'),
     qbmsOptions: {
       // Specify that we're only interested in "image.png", this will ensure we don't
       //  pick up the readme file.
       wildCards: ['image.png'],
     },
     callback: (err, data) => {
       if (err !== undefined) {
         // We failed to replace the file
       } else {
         // The file was replaced
       }
     },
});
```
Very important note about the Reimport process - lets say you want to replace a 1MB low detail texture with a massively detailed 50MB texture - the API call above would fail as we're trying to fit an elephant in a wardrobe - to be able to fit the new texture in, we have to resize the archive so that the new texture doesn't overwrite other file entries - we do this by providing the allowResize qbms option in the Reimport call (as seen below); the downside to resizing is when we resize a game archive, the game may have trouble reading the new file and fail to load it - this is generally not a problem, but it's worth keeping it in mind.

```
   context.api.ext.qbmsList({
     bmsScriptPath: path.join(__dirname, 'zip.bms'),
     archivePath: path.join(__dirname, 'tutorial.zip'),
     operationPath: path.join(__dirname, 'opPath'),
     qbmsOptions: {
       wildCards: ['image.png'],
       allowResize: true, // <- QBMS will resize the archive when replacing smaller files with bigger ones.
     },
     callback: (err, data) => { ... }
   });
```

Finally to quickly test this inside Vortex you just have to wrap the QBMS API call with a registerAction call - which will add a button to the action bar in the mods page.

```
context.registerAction('mod-icons', 500, 'savegame', {}, 'Test QBMS Reimport', () => {
   context.api.ext.qbmsReimport({
     bmsScriptPath: path.join(__dirname, 'zip.bms'),
     archivePath: path.join(__dirname, 'tutorial.zip'),
     // QBMS will attempt to match files within opPath to files
     //  inside the archive. File size matters! you can't replace
     //  an 8MB file with one that's 50MB as that will write over
     //  other parts of the archive, but you can easily replace with
     //  smaller files.
     //
     // Alternatively you can use the allowResize option to tell QBMS to
     //  resize the file which will allow you to replace a 8MB file with
     //  a 50MB one but the resize will be un-reverse-able, and some games
     //  may refuse to load the file due to this change.
     operationPath: path.join(__dirname, 'opPath'),
     qbmsOptions: {
       wildCards: ['image.png'],
       //allowResize: true, <- uncomment this to allow resize.
     },
     callback: (err) => {
       if (err !== undefined) {
         log('error', 'something went wrong', err);
         return;
       }
       log('info', 'the image has been replaced');
     }
   });
 });
```

![image](https://user-images.githubusercontent.com/8960252/98216590-28a26a00-1f41-11eb-850b-ff71e05815d2.png)


[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/18)