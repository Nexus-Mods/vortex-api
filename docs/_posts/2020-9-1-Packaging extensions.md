---
layout: article
author: TanninOne
created: Mon, 26 Oct 2020 08:31:23 GMT
updated: Mon, 26 Oct 2020 08:55:35 GMT
wip: true
title: Packaging extensions
tags:
  - General
  - Tutorial
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/10
---
# Overview

This article is for those who have created an extension (or a translation or theme) for Vortex and want to upload it for others to enjoy.

The easiest way for users to find and install extensions is through the built-in dialog. For your extension to be listed there a couple of things have to be fulfilled:

- it has to be packaged in the correct way (see below) 
- it has to be uploaded to https://www.nexusmods.com/site
- it has to be added to the correct category 
- it can only have a single file under "main files" (there are exceptions, see under "Advanced: Supporting multiple versions") 
- it must use semantic versioning (3 numbers:&nbsp;major.minor.patch, see https://semver.org/)
- it has to be manually reviewed by us 

This last step means that after uploading your extension it may still take some time before it will be offered within Vortex.

### Translations

Translations need to be packaged such that on the top level you have a directory with the two letter iso code for the language, optionally postfixed with the two letter country code. Directly inside that directory you include the translation files in json format.<br/> You can have additional files like readmes and license files in the base directory but we advice against including additional directories. Vortex will ignore any directory which isn't named like an iso language code and there has to be exactly one of those (two shalt thou not count, neither shalt thou count zero, excepting that thou then proceedeth to one. Three is right out.)

So for german it could&nbsp;look like this:
<pre>/
|--> readme.txt
|--> de
  |--> common.json
</pre>

For swiss german it would be
<pre>/
|--> readme.txt
|--> de-CH
  |--> common.json
</pre>


The code will determine the language name as the user selects it and will also control things like date and number formats and lexical ordering.

Translations need to be added to the Category "Vortex -> Translations"

''Fun fact: The swedish alphabet contains the same umlauts ä and ö also found in the german one but while the german umlauts&nbsp;are&nbsp;sorted&nbsp;as if they were&nbsp;ae, oe and ue, the swedish ä and ö&nbsp;are at the end of the alphabet. Stuff like this makes it impossible to define a universal order&nbsp;for all known letters. Bet you didn't know that. Bet you didn't care to.''

### Themes

Themes should contain a single subdirectory containing your scss files. The name of that directory will be used in the dropdown where users choose the theme.<br/> You can include multiple subdirectories, each of which will appear as a separate theme for the user to pick from.<br/> Here too you're welcome to include further files (readme, license, ...) but any directories is expected to contain a valid theme.

Example:
<pre>/
|--> readme.txt
|--> My Fancy Theme
  |--> variables.scss
  |--> style.scss</pre>

Themes have to be added to the Category "Vortex -> Themes"

### Extensions

Extensions (including game extensions) need to contain at least an index.js and an info.json file. Both need&nbsp;to be placed on the top-level of the archive. If you include further assets or libraries (libraries that aren't baked/webpacked into the index.js) you are free to arrange them into subdirectories of course.

Example:
<pre>/
|--> readme.txt
|--> index.js
|--> info.json
|--> assets
  |--> fancy.jpg
  |--> icon.svg
</pre>

On the topic of the info.json file: Please make sure you specify '''the exact same version number''' during upload that you have set in info.json and that the version is in semantic versioning format.
Also: Please try to avoid changing the name of an extension (inside the info.json file) as much as possible, definitively don't put the version number into the extension name.

Extensions have to be added to the Category "Vortex -> User Extensions"

### Advanced: Supporting multiple versions

Sometimes your extension will use features only introduced after a certain release of Vortex or you have one version of your extension that works with an older release and an update that only works with a newer one.

To support this you can include the text "Requires Vortex <version range>" (important: no spelling mistakes!) in the description text for the file.

 The version range can be a semantic versioning range as described (for example) here: https://devhints.io/semver

Most commonly you'll want to do something like "Requires Vortex >=1.2.0" to signify: "all versions starting with 1.2.0".

If you need to support two different ranges of versions (e.g. you have one version of your extension that works only with 1.1.x and one that works only with 1.2.x and newer) your extension can have two main files, one that says "Requires Vortex ~1.1.0" and the other saying "Requires Vortex >=1.2.0".

![1200px-Extension_version_ranges](https://user-images.githubusercontent.com/8525754/97150102-ed987d80-176d-11eb-9b80-06b8c62226cf.png)

This is the only exception where you can have multiple main files for an extension and it will only work correctly if the version ranges you set are mutually exclusive.<br/> If you have one extension that says "Requires Vortex >= 1.1.0" and one "Requires Vortex >=1.2.0" you're risking that users with Vortex 1.2 will still install the version intended for 1.1. (because >=1.1.0 also includes 1.2.47)


[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/10)