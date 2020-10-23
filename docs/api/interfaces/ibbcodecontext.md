**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IBBCodeContext

# Interface: IBBCodeContext

options that can be passed into the bbcode parser to configure how bbcode
tags are being translated.

## Hierarchy

* **IBBCodeContext**

## Index

### Properties

* [allowLocal](ibbcodecontext.md#allowlocal)
* [callbacks](ibbcodecontext.md#callbacks)

## Properties

### allowLocal

• `Optional` **allowLocal**: boolean

*Defined in Work/vortex/src/util/bbcode.ts:34*

if enabled, [link] or [url] tags may link to local files, which then get opened
with opn.
This should only be set for bbcode hard coded into Vortex, not bbcode taken from a
website or anything for security reasons

___

### callbacks

• `Optional` **callbacks**: { [name:string]: (...args: any[]) => void;  }

*Defined in Work/vortex/src/util/bbcode.ts:27*

callbacks that can be triggered through the [link] or [url] tags
callback functions registered here can be triggered with
[url=cb://<callback name>/<arg1>/<arg2>/...] (arguments are optional of course)
