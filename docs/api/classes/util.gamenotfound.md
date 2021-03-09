[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / GameNotFound

# Class: GameNotFound

[util](../modules/util.md).GameNotFound

## Hierarchy

* *Error*

  ↳ **GameNotFound**

## Table of contents

### Constructors

- [constructor](util.gamenotfound.md#constructor)

### Properties

- [mSearch](util.gamenotfound.md#msearch)
- [message](util.gamenotfound.md#message)
- [name](util.gamenotfound.md#name)
- [prepareStackTrace](util.gamenotfound.md#preparestacktrace)
- [stack](util.gamenotfound.md#stack)
- [stackTraceLimit](util.gamenotfound.md#stacktracelimit)

### Accessors

- [search](util.gamenotfound.md#search)

### Methods

- [captureStackTrace](util.gamenotfound.md#capturestacktrace)

## Constructors

### constructor

\+ **new GameNotFound**(`search`: *string*): [*GameNotFound*](util.gamenotfound.md)

#### Parameters:

Name | Type |
:------ | :------ |
`search` | *string* |

**Returns:** [*GameNotFound*](util.gamenotfound.md)

Defined in: src/util/Steam.ts:25

## Properties

### mSearch

• `Private` **mSearch**: *any*

Defined in: src/util/Steam.ts:25

___

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### prepareStackTrace

• `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | Error |
`stackTraces` | CallSite[] |

**Returns:** *any*

Defined in: node_modules/@types/node/globals.d.ts:140

Defined in: node_modules/@types/node/globals.d.ts:140

___

### stack

• `Optional` **stack**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

• **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:142

## Accessors

### search

• get **search**(): *any*

**Returns:** *any*

Defined in: src/util/Steam.ts:33

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: Object, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | Object |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:133
