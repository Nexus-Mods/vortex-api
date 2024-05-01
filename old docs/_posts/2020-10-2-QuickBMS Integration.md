---
layout: article
author: IDCs
created: Tue, 03 Nov 2020 07:16:38 GMT
updated: Thu, 05 Nov 2020 08:36:57 GMT
wip: true
title: QuickBMS Integration
order: 12
tags:
  - Deprecated
  - Feature
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/17
---
## **Introduction** ##

Please note that the below documentation pertains to Vortex versions up to 1.4.0 (exclusive)

QuickBMS (QBMS) is an extractor engine written by Luigi Auriemma that can be programmed through some simple instructions contained in textual scripts. It is
intended for extracting files and information from the archives of any software and, moreover, games.

The script language used in QuickBMS is an improved version of MexScript (documented here: http://wiki.xentax.com/index.php/BMS).

The tool is open source under the GPL license and works on Windows, Linux and MacOSX - on both little and big endian architectures.

For more information, including over 2000 BMS scripts developed by both Luigi and
other QBMS contributors for multiple games please visit:

https://aluigi.altervista.org/quickbms.htm

https://aluigi.altervista.org/papers/quickbms.txt

The purpose of this module is to provide Vortex game extension developers the ability to view, replace, extract and modify game files which are generally not exposed to direct manipulation due to them being compressed, encrypted or both. It is currently used to mod Resident Evil 2 (2019) and Devil May Cry 5 which require file entries to be invalidated/revalidated in order for the games to load/unload modded files.

## **Implemented Operations** ##
**Extract**

Will extract file entries from the specified game archive into an output folder leaving the game archive untouched.

**ReImport**

Will replace file entries within a game archive with modified entries; this option is generally used alongside the extract operation, e.g. we want to replace a game texture - we extract the texture from the game’s archive into “../OutputFolder” using the Extract operation, we then replace the extracted texture within the output folder with something else, preferably a file which is smaller or equal in size to the original file so we don’t mess up file entry offsets. We can then import the “../OutputFolder” back into the game archive using the ReImport operation. QBMS supports two reimport types “reimport” and “reimport2”. Ultimately both reimport types will replace files within a game’s archive but there are a few significant differences: 

- “reimport” only works for mod files which are smaller or equal in size to the original file entries as the mod files are inserted within the same memory block as the original files. This of course means that the game archive remains unchanged size-wise.
- “reimport2” will append large files (which do not fit inside the original memory block) to the end of the archive. This is useful for high quality texture replacement mods but will change the total size of the game archive, which may throw off the game parser in some cases so it’s not without its own disadvantages.

**Write**

Opens the game archive in write mode, this allows us to write bits/bytes/strings into the game file at the specified offsets depending on what’s needed; the ReImport functionality uses this under the hood.

**List**

Lists decoded information and returns it back to the operation caller.

## **QBMS options** ##
**Overwrite**

Overwrite existing files during extraction.
	
**Verbose Mode**

QBMS will output additional information as it runs its operations.

**Quiet Mode**

The opposite of Verbose; will log less information.

**Create Log**

Saves stdout and stderr output to a quickbms_log.txt file which can be found inside the application data folder, default location:
```
“%APPDATA%/Vortex/quickbms.log”
```

**Keep Temporary Files**

BMS scripts are able to create temporary files which are quite useful for chunk based file systems; it’s very important to set this option to true whenever your BMS script creates a temporary file as QBMS will attempt to query whether to keep or delete the temporary file at the end of script execution, omitting this will result in the QBMS process to hang indefinitely.

**Allow Resize**

Should only be provided when executing the ReImport operation, this option controls the version of reimport used when importing/replacing files within a game archive - when set to true QBMS will use reimport version 2, alternatively it will use version 1 when set to false. 

**Wildcards**

Used to filter/find a set of files. E.g. “{}.png” will tell the QBMS operation we only want to extract/list files which end with the png extension, this is very useful for testing game archive contents (Please note that although you can use “*.png”, QBMS functions more reliably with the “{}” wildcard)

## **Usage** ##
All operations expect the following arguments to be provided in order for QBMS to execute correctly:
- The absolute path to a BMS script containing compression/encryption instructions.
- The absolute path to the game archive we wish to run the operation on.
- An output/input folder depending on which operation is called (absolute path again) the folder is primarily used when extracting or reimporting; but needs to be supplied for Write and List operations as well.
- The operation type we want the extension to execute e.g. (‘extract’ or ‘reimport’ or ‘write’ or ‘list’)
- QBMS options to define the tool’s behaviour as it runs its scripts, please see the implemented options above.
- An error/list callback function which will allow the calling game extension to react to any errors reported by QBMS or retrieve list entries information when successfully executing the list operation.

Before continuing, please make sure to read through our wiki guide on how to create game extensions in Vortex

Please note that this guide in its current state does not touch on MexScript/BMS scripting, and assumes that the reader has a basic grasp of the language, file systems, data structures and compression algorithms. A quick start guide for BMS scripting can be found here.

Create your game extension’s main function as you normally would, but make sure to append context.requireExtension(‘quickbms-support’); to the start of the main function to ensure that the QBMS module is loaded before the game extension and is ready to respond to any API event emissions.
```
function main(context) {
 context.requireExtension('quickbms-support');
 context.registerGame({
   id: GAME_ID, ... });
}
```

Calling/Executing QBMS operations is done by emitting events via the context object. As an example, let’s have a look at a list operation:
```
context.api.events.emit('quickbms-operation', BMS_PATH,
GAME_ARCHIVE_PATH, OUTPUT_PATH, 'list', { wildCards: ['{}.png'] },
(err, data) => {
  If (err !== undefined) {
	// Something went wrong, error handling code goes here.
  } else {
	// No errors, but make sure we actually found file entries.
	Return (data.length > 0)
	  ? // We found files! Do something with the files!
	  : // No files found...
  }
});
```

The list function is useful if/when we wish to confirm whether the files we want to extract or modify are actually present within the game archive we’re using as an input file. For example, RE2 and DMC5 both have multiple archive files, we use the list operation on each archive until we find the archive that contains the files we wish to modify. 

Ok, so we know how to list files, extracting files works exactly the same way with a few minor differences:
```
context.api.events.emit('quickbms-operation', BMS_PATH,
GAME_ARCHIVE_PATH, OUTPUT_PATH, 'extract', { wildCards: ['{}.png'] },
(err) => {
  If (err !== undefined) {
	// Something went wrong, error handling code goes here.
  } else {
	// QBMS has extracted all png files it managed to
	//  detect within the game archive to the OUTPUT_PATH
  }
});
```
Extracting can be used when we wish to store backups of the original files, and/or perhaps when we need to extract a configuration file, and read/modify it within our extension followed by re-inserting it into the archive (if required).

When re-importing/inserting files into a game archive, it is highly recommended to use the same BMS script that was initially used to extract said files to avoid corrupting the archive. QBMS will attempt to identify and inject any files it can find inside the provided INPUT_PATH into the game archive.
```
context.api.events.emit('quickbms-operation', BMS_PATH,
GAME_ARCHIVE_PATH, INPUT_PATH, 'reimport', { allowResize: true },
(err) => {
  If (err !== undefined) {
	// Something went wrong, error handling code goes here.
  } else {
	// QBMS has re-imported any files it managed to detect 
    //  inside the INPUT_PATH directory and has replaced
	//  the original files within the game archive.
  }
});
```
As mentioned during the extract operation, depending on the game, it may be useful to extract configuration files and re-inserting them into the archive with modified values - the ReImport operation allows this. As an example, consider a use case where we need to modify a .txt file inside the game archive whenever a new mod is enabled (load order or whatever), we can use the extract operation to pull the file out, modify the .txt file and then use the ReImport operation to insert the modified file into the game archive, replacing the original. (This is very useful for texture replacements as well)

Please note that there is no point in providing any wildCards in this case as QBMS will not use them when reimporting. If for whatever reason filtration is required, it must be done from inside the BMS script itself.

Finally, note that we’re using the allowResize parameter which must be provided when attempting a ReImport. In this case we set it to true, which means that any mod files that can’t fit inside the memory block of the original file will be appended at the end of the archive.

Writing content relies heavily on the BMS script itself to dictate what to write and where; it’s highly advised to backup any game archives before writing to them. Note that we’re using the keepTemporaryFiles option below, depending on how the temporary files are generated, they will be stored either inside the OUTPUT_PATH or same directory as the game’s archive. It’s very important to include this option whenever the BMS script is writing to temporary files.
```
context.api.events.emit('quickbms-operation', BMS_PATH,
GAME_ARCHIVE_PATH, OUTPUT_PATH, 'write', { keepTemporaryFiles: true },
(err) => {
  If (err !== undefined) {
	// Something went wrong, error handling code goes here.
  } else {
	// QBMS has executed the provided BMS script and has
	//  written the bits/bytes/strings into the game archive.
  }
});
```

This functionality is useful when we need to write bits/bytes/strings directly into the game archive or when we wish to create a brand new file; RE2 and DMC5 use this operation to re-validate file entries inside the game archives. The sky's the limit as QBMS comes equipped with multiple compression algorithms which can be used when writing file entries, but please tread carefully and only use if you know what you’re doing.


[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/17)