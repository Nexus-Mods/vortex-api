---
layout: default
title: Asynchronous Code
tags: [object Object] [object Object]
---
# Introduction

One pattern you can't really avoid developing Javascript for Desktop is asynchronous code, Vortex is full of it and by writing an extension you're bound to encounter it as well.

It means that you start a long-running operation and can do other things while that operation is being processed. This allows the UI to remain usable while files are being copied or network requests are being made.

Async is a high-level concept, it doesn't say anything about _how_ the long-running operation is processed in parallel - it could be multi-threading, it could be a worker-process doing the work, but most of the time it's non-blocking I/O operations where the OS takes care of running the operation and signals user code when it's done.

You can even have a synchronous function and just "mark" it as asynchronous so that calling code has to be written accordingly. This way if at any point you decide your function is too slow to be run synchronously you can rewrite it without having to change all callers.

# Implementation

In modern JS there are three ways async code is implemented. They are equivalent in functionality but not in compatibility or ease of use.

## callback

The oldest and probably most intuitive approach:
```JavaScript
function example() {
  fs.readFile('somefile.txt', (err, data) => {
    if (err) {
      console.error('fail', err);
    } else {
      console.log('success', data);
      fs.writeFile('output.txt', data, (err, data) => {
        ...
      });
    });
  console.log('doing other things');
}
```

So in this example, we read a file called _somefile.txt_. Once the file is read, either an error is reported or the file content is printed.
Meanwhile, other code is executed, so "doing other things" will be printed _before_ the file is done reading.

It's important to keep in mind that with asynchronous code, error handling works differently: you _cannot_ use try-catch to handle read errors, instead, you have to look at the err parameter.
Further, you _cannot_ keep "doing other things" from being logged in case the read fails because that happens _before_ the file is done reading. All code that depends on the success and/or content of the read operation has to be put into the callback (like the write operation).

### Disadvantages

And that's also the main reason why this method is unpopular, you often end up with a "waterfall" of callbacks producing very hard to read code (aka callback hell).

However, since this method is the oldest, and most compatible, you will usually see it used in APIs and in combination with wrappers allowing you to use the more modern methods.

## Promises

Promises are objects that wrap the state of an asynchronous operation. This is the primary method you will find used in Vortex.
Their main goal is to avoid the callback "waterfall" and instead have a flat "chain":

``` Javascript
function example() {
  fs.readFile('somefile.txt')
  .then(data => {
    console.log('success', data);
    return fs.writeFile('output.txt', data);
  })
  .catch(err => {
    console.error('read or write failed', err);
  });
  console.log('doing other things');
}
```

Every promise has at least a _then_ and a _catch_ function. _then_ is called on success, _catch_ on error. Both functions can return a new promise that will then be awaited for the next then/catch. This way, promises can be chained together as much as you want. You could return the promise from the function and then attach further operations.

### Disadvantages

The main problem is again error handling: If a promise succeeds (aka "resolves"), the next _then_ is called. If it fails (aka "is rejected"), the next _catch_ is called, but you can't _cancel_ a promise chain.
In the example above we handle fails in read and write with the same catch which will lose the information of which operation failed. If we had a catch immediately after the _fs.readFile_ call we could provide more precise error messages, but then what do we return from that catch? If we return a promise that resolves (`return Promise.resolve(...)`) we jump into the _then_ block and try to write the output file after all. If we return a promise that is rejected (`return Promise.reject(...)`) we jump into the other catch block and would log a write error even though the write didn't happen.
The only option then is to have increasingly complex error handling code further down that takes into account previous catches.

_OR_ you make it a point to have only one catch at the very end to actually handle the error. You can have "catch"es in the middle but all they are allowed to do is add information to the error so you can provide details at the end.
This, however, creates a new problem: Since promises can (and should) be returned from functions so the caller can do things in response to the operation, it's not always easy to determine where the end of the chain is.
Leaving a rejected promise unhandled in Vortex will show a nasty error message to the user and crash the application, even if it was a minor thing - because Vortex can't usually determine just from looking at the error if it was minor.
Therefore it's very important to handle all rejected promises.

## async/await

The most modern and legible syntax is async/await. The main reason this isn't used throughout Vortex is because it only became available halfway through development and also because it may be worse performance-wise.
If you start a new project (an extension) my advice would be to go with this.

``` Javascript
async function exampleRead() {
  let data;
  try {
    data = await fs.readFile('somefile.txt')
  } catch (err) {
    console.error('read failed');
    return;
  }
  console.log('success', data);
  try {
    await fs.writeFile('output.txt', data);
  } catch(err) {
    console.error('write failed', err);
  });
}

function exampleLog() {
  console.log('doing other things');
}

async function example() {
  return Promise.all([exampleRead(), exampleLog()]);
}
```

Look at "exampleRead" first. As you can see the code looks very much as if it was synchronous, the only difference being that the function is marked _async_ and when calling an async function we prefix it with _await_. This makes all code below it execute after the asynchronous function has completed.
Under the hood, everything is turned into a promise chain, but it essentially works like you would expect a synchronous function to work. Error handling is intuitive because, again, the function is processed in the sequence it's written, promise rejections are turned into exceptions you can catch.
And most noteworthy: you can return at any point.

However, since everything in exampleRead now runs in sequence, what's the point of it being asynchronous code? That's where the Promise.all() call comes in. Essentially you now tell javascript which functions to run in parallel. You may be confused about the use of "Promise" but again, async/await is just syntactic sugar built on top of Promises.

This example may be more code, but it's also a lot clearer. We explicitly state which functionality runs in parallel so there is no confusion as to why "doing other things" is printed out of order to the rest of the code.

### Disadvantages

The primary problem with this syntax is simply that it may be too familiar, it may be less obvious that things are run asynchronously.
Also, it may be too easy to forget the "await" which would cause the asynchronous function to be called but not be awaited and - most importantly - you wouldn't be able to catch its errors; meaning (in the context of Vortex) any exception thrown from it will crash the application.
Finally, since the async/await code is translated to promises, stack traces produced by this code can be very hard to read.

# Conclusion

This page is of course just a summary of the syntaxes. If you want further information the internet is full of it.
The take-away is: Vortex uses Promises throughout and occasionally callbacks where "generic" APIs are involved (e.g. events), but extensions are welcome to use async/await internally.

[Discuss this article](https://github.com/Nexus-Mods/vortex-api/issues/8)