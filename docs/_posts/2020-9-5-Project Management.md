---
layout: article
author: TanninOne
created: Fri, 23 Oct 2020 07:08:08 GMT
updated: Mon, 26 Oct 2020 09:16:26 GMT
wip: false
title: Project Management
order: 3
tags:
  - General
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/7
---
# Project Management

So far we have always edited two files, info.json and index.js but the moment you want to use foreign libraries or use a language that transpiles to javascript instead of js itself (e.g. typescript) you will want to set up a project.

The following describes a sample extension that can be found at https://github.com/Nexus-Mods/Vortex/tree/master/samples/sample-extension

## Files

### package.json
```json
{
  "name": "sample-extension",
  "version": "0.0.1",
  "description": "Sample",
  "main": "./out/index.js",
  "repository": "",
  "scripts": {
    "webpack": "node ./node_modules/webpack/bin/webpack --config webpack.config.js --display-error-details --progress --profile --color",
    "build": "npm run webpack && extractInfo"
  },
  "author": "Your name here",
  "license": "GPL-3.0",
  "devDependencies": {
    "ts-loader": "5.3.3",
    "vortex-api": "Nexus-Mods/vortex-api",
    "webpack": "^4.29.6"
  }
}
```

If you've ever developed in Node.js you already know this. package.json contains meta information about a project, most notably scripts that are used to build it and dependencies, that is: foreign libraries required for your project.
If you follow the structure we use for all our extensions  you will always need at least the three packages referenced above:
* vortex-api contains the api your extension communicates with vortex through. You don't actually need it as your extension will always be loaded by vortex and vortex provides its api to extensions directly. Having this module gives you proper syntax highlighting and code completion in IDEs (we use [Visual Studio Code](https://code.visualstudio.com/)) and it will help with testing your extension outside vortex if you like.
* webpack will turn your project - no matter how many files and modules it consists of - into one single .js file so it can be easily distributed
* ts-loader is an extension for webpack allowing you to use typescript as an input.

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "noImplicitAny": false,
    "removeComments": true,
    "preserveConstEnums": true,
    "rootDir": "./src",
    "outDir": "./out",
    "jsx": "react",
    "sourceMap": false
  },
    "exclude": [
      "node_modules"
    ],
  "files": [
    "src/index.ts"
  ]
}
```

tsconfig.json is the configuration for the typescript compiler (also used by ts-loader). There is no need to customize anything unless you know what you're doing.

### webpack.config.js

```typescript
const webpack = require('vortex-api/bin/webpack').default;

module.exports = webpack('sample-extension', __dirname, 4);
```

This is the configuration file for webpack. Usually these configurations are much more complicated but the vortex api includes a function to generate a standardized configuration file.
The only thing you need to customize here is the name of the extension (here: sample-extension).
If you know your way around webpack you can of course write your own configuration but please make sure you define modules that vortex ships with as extern so they don't get loaded twice (best case scenario your extension is unnecessarily large, worst case the module will cause conflicts if the two instances aren't compatible).

### src/index.ts

```typescript
import { remote } from 'electron';
import { types } from 'vortex-api';

function main(context: types.IExtensionContext) {
  context.registerAction('global-icons', 100, 'menu', {}, 'Sample', () => {
    remote.dialog.showMessageBox(remote.getCurrentWindow(), {
      message: 'Hello World',
    });
  });
  return true;
}

export default main;
```

The source of your extension. You can of course use as many files as you like now but the above configuration files assume the entry point to be in index.ts and all source files to be in _src/_

## Usage

Initially run `yarn install` (or `npm install`) once to install dependencies.
Then run `yarn build` (or `npm run build`) to "compile" your project. When everything works you now have an _info.json_ and _index.js_ inside _dist/_.

The contents of info.json gets generated from package.json so check it once and fix package.json (description, version, author, ...) if anything is wrong. index.js contains the code of your extension and all (non-external) dependencies in one large file.

The contents of _dist/_ is all you distribute to users.

## Special Cases

### Native Modules

Sometimes it may be necessary or preferable to implement some functionality in C or C++, especially when it's very performance critical or needs to access low-level system functionality.
In this case our advice is to implement (and test) that functionality in a separate node module, completely independent of your extension, then import it as a dependency to your extension in package.json.

Unfortunately you're not done at that point. Webpack will try and fail to import your native module (the file with the .node extension, which is essentially a dll) into the index.js file, which obviously won't work.
To stop that you need to rewrite your webpack.config.js to something like this:
```
const webpack = require('vortex-api/bin/webpack').default;

const config = webpack('sample-extension', __dirname, 4);
config.externals['native-module'] = 'native-module';
module.exports = config;
```
Adding a module to externals tells webpack to not include it in index.js. Don't forget you now need to include that module with your extension.

Finally you need to change how your native module is compiled when included in your extension. See, when you build your native module as a separate module it was built for node, which is sensible for testing.
But while electron is built upon node and is api compatible, it's not binary compatible. This means your native module has to be build specifically for the (major) electron version used in Vortex, otherwise you will get a cryptic error message.

To solve that you need another file to your extension build environment alongside package.json:

#### .npmrc

```
disturl=https://atom.io/download/electron
target=8.2.0
runtime=electron
arch=x64
target_arch=x64
```

This tells npm/yarn that any native module that is compiled during _yarn install_ should be built for electron v8.2.x (obviously you need to update target if Vortex is built against a newer major electron version).

Usually electron versions are binary compatible between minor releases so all 8.x.x should be able to load the same modules.
Vortex will not update to a different major version of electron with a patch release, so for example all Vortex 1.2.x releases will build on electron 8.x.x.

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/7)