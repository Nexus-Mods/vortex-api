---
layout: article
author: IDCs
created: Thu, 11 Aug 2022 07:44:29 GMT
updated: Wed, 17 Aug 2022 07:30:14 GMT
wip: true
title: Setting up your development environment (for Vortex extensions)
order: 1000
tags:
  - Tutorial
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/35
---
Developing Vortex extensions (or developing for Vortex's core application) can at times seem daunting, especially for new developers. This guide intends to walk its reader through all the steps we (Vortex Developers) recommend when first setting up a development environment for Vortex extensions. To develop for Vortex itself, please follow this guide instead: https://github.com/Nexus-Mods/Vortex/blob/master/README.md

### IDE Setup

First of all, you need an IDE - this guide will use VS Code which can be downloaded here: https://code.visualstudio.com/docs/?dv=win
Default installation values are fine, but you may wish to allow VS Code to add the "Open with Code" context menus for convenience.

Since we're going to use JavaScript/TypeScript when writing the extension, it's wise to install a static code analyzer which can highlight problems in your code as you type it - we will be using ESLint. As part of this guide, we will be downloading a "sample extension" from Github which comes with a set of pre-configured coding rules to ensure the extension you produce is functioning as expected. 

Fortunately, VS Code has an ESLint Extension which will highlight any issues in real-time - Open VS Code and go to its extensions browser ("CTRL + SHIFT + X" is the quickest method to do that) and search for Microsoft's ESLint extension and click "Install". 
Feel free to close VS Code while we deal with the other dependencies.

![image](https://user-images.githubusercontent.com/8960252/184081426-74d91af6-820b-4372-9790-826f0eaed841.png)

### NodeJS
The next step is Node which can be downloaded from: https://nodejs.org/en/download/ make sure you choose to automatically download Node's dependencies - this will require roughly 3GB and will open a terminal window - follow its instructions and wait for it to close (it may appear as though it's hanging - it's not, don't close it prematurely).

### Yarn
Although the Node Package Manager (NPM) could be used to manage your extension and run its scripts, we highly recommend using "Yarn" instead as it's much faster and overall more reliable; this can be easily done by typing `npm install --global yarn` in a Powershell/terminal window.

### Git
Finally, we will need "Git", which can be found here: https://git-scm.com/download/win the default options are fine, but we suggest selecting VS Code as the preferred text editor once you're given the choice to change it (it will be set to VIM by default).

### Downloading and configuring the sample extension
At this point, your development environment should be set up to write basic JS/TS extensions for Vortex, Let's download the sample extension. Choose a convenient location (e.g. `C:\Projects\`) and open a Powershell window;
![image](https://user-images.githubusercontent.com/8960252/184082135-54f3c471-3668-4144-b661-887e413918b2.png)

and type `git clone https://github.com/nexus-mods/sample-extension.git` this will create a folder inside of your chosen location called "sample-extension", open this folder with VS Code either through the context menu if you enabled that option when you installed Code, or simply use the terminal to go to that directory and type `code .`

![image](https://user-images.githubusercontent.com/8960252/184082409-978d9595-6d68-4fd3-ba47-472c40a14948.png)

The sample extension has a few dependencies of its own; to install these simply browse to the sample extension's folder, open a terminal window and type `yarn install`.
`C:\Guide\sample-extension> yarn install`

Please note: if `yarn install` fails, you may need to change PowerShell's script execution policy, run powershell as administrator and type `Set-ExecutionPolicy -ExecutionPolicy Unrestricted` - more on that here: https://docs.microsoft.com/en-gb/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2

The package.json file within the extension's directory can be used to change the name, version, author and description of your extension.

| Property | Description | Restrictions |
| ----------- | ----------- |----------- |
| name | The name of your extension | Names must use the kebab-case format - e.g. `red-dead-redemption` |
| version | The version of your Vortex extension | Must follow semantic versioning format e.g. `1.0.5` |
| description | Describe what your Vortex extension does | Should be a short and concise summary e.g. "Adds Red Dead Redemption game support to Vortex" |
| author | Your name/nickname; if more than one authors exist, have them comma separated | N/A |

You can now modify your extension as you see fit - whenever you wish to test your extension, type `yarn lint` to ensure your code doesn't breach any of the pre-configured rules (just in case the VS Code ESLint extension missed something);
if no rules have been breached, type `yarn build` which will prepare a distributable copy of your extension, followed by `yarn copyplugin` which will place your distribute-able package inside the `%appdata%/vortex/plugins` folder.
You can now run Vortex and test your extension.

Once you feel ready to publish your extension, you can do so by opening up a terminal in the directory of your extension and typing `yarn bundle7z`, this will create a distributable-extension.7z file in your extension's directory which you can rename as you see fit and finally upload it to Nexus Mods.

Please see our API reference page for guides on how to create game extensions and general API usage.
https://nexus-mods.github.io/vortex-api/

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/35)