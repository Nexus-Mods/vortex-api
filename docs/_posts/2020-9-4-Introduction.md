---
layout: article
author: TanninOne
created: Thu, 22 Oct 2020 13:06:18 GMT
updated: Fri, 23 Oct 2020 11:14:38 GMT
wip: true
title: Introduction
order: 0
tags:
  - General
comments: 0
issue_url: https://github.com/Nexus-Mods/vortex-api/issues/5
---
# Introduction

Extensions are a way for anyone who knows javascript to add features to Vortex. Extensions can add functions at many points throughout the application.

## Example

Any extension consists of at least two files

info.json
``` JSON
{
  "name": "Your sample application",
  "author": "Your name here",
  "version": "0.1.0",
  "description": "Short description of what your extension does",
}
```

This should be fairly self-explanatory, it's a file containing meta information about your extension.
This information is displayed to the user when they look for available or installed extensions.

The version has to follow semantic versioning.
From here on out examples will only contain the javascript code, not this json file, but a complete extension does still need one.

index.js

```JavaScript
function init(context) {
  context.registerAction('global-icons', 100, 'show', {}, 'Greet', () => { alert('Hello World!'); });
}

exports.default = init;
```

This is where it gets interesting. Every extension has to have a file named "index.js" which exports a single function as its default export.

This function is passed a single parameter "context" which we will look at in more detail below.
Context defines a bunch of functions that you can use to interact with the main application (Vortex).
In this case all it does is register an action which will appear as a button (labeled "Greet" and with an eye icon "show") in the top-right menu. When clicked it opens an alert dialog Greeting the user. Nice.

## Installation

To install an extension, simply create a directory with arbitrary name in `C:\Users\<your windowsuser name>\AppData\Roaming\vortex\plugins` and place those two files there.

## The _init_ function

The init function will be called twice _while_ Vortex starts up. This is because the work Vortex does is split up into two system processes and your extensions may affect both.
Usually you do not have to care about this, just don't try to be smart with the init function. The only thing you should be doing is register your functionality with vortex. If you do any processing, it may be done twice. If you try to interact with Vortex (apart from registering stuff) it may not be fully initialized at that time.

## The _context_ object

Reference: https://nexus-mods.github.io/vortex-api/interfaces/iextensioncontext.html

The context object is your window into Vortex and you will be using it a lot.
During the init call however it is a bit magical and you should know about this:
When you call a function on context during the init function that call is deferred until later, it has no immediate effect. It doesn't even fail if the function you call doesn't exist.
Also you can _add_ arbitrary functions to context, which allows other extensions to augment yours (We will have an example in a later tutorial).

Since all calls to context are deferred you don't even have to care about the order in which extensions get loaded, your extension can build on another one and even if yours is loaded first it will still work. Magic.

### optional

However, if you call a function and it turns out that function doesn't exist (i.e. the extension you build on wasn't loaded), your extension is not loaded either, meaning the init function ran but all the calls on context aren't (another reason you shouldn't be doing anything else during init, otherwise your extension might have an effect even when it's not successfully loaded).

You can however use the _context.optional_ object like so
```
context.optional.registerAction(...)
```
Now if it turns out there is no registerAction function that call simply has no effect but everything else you register still works.

### register...

It's not technically required but convention is that functions you can call on context that somehow add to Vortex (e.g. adding ui elements) are called register_Something_, like the "registerAction" function you saw before.
See the reference to get a complete list.

### once

As mentioned before, you should use the init function only to register your functionality with vortex. This way you can add ui elements to vortex, event handlers, callbacks for when data changes and so on.

If you want to do anything else at startup you can use the once function like this:
```
context.once(() => alert('Yay, started successfully'))
```

This function is called once Vortex is fully started and only if your extension becomes active. At this point all state is loaded and loaded extensions have registered their functionality, but there is no promise for the order in which _once_ functions get called.
("once" is called on the renderer process which is where you should be doing almost everything. If you're absolutely certain you need your code to run on the main process, use _onceMain_ instead)

### api

Reference: https://nexus-mods.github.io/vortex-api/interfaces/iextensionapi.html

This object contains functions you can use to get or change data in vortex and to connect with other parts of it (including extensions). You will probably be using this _a lot_ and it's the part of _context_ you care about after the init call. It's safe to pass api around as a function parameter, save a reference, bind it to a function, ...

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/5)