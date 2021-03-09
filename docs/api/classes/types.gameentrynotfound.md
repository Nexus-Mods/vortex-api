[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / GameEntryNotFound

# Class: GameEntryNotFound

[types](../modules/types.md).GameEntryNotFound

## Hierarchy

* *Error*

  ↳ **GameEntryNotFound**

## Table of contents

### Constructors

- [constructor](types.gameentrynotfound.md#constructor)

### Properties

- [mExistingNames](types.gameentrynotfound.md#mexistingnames)
- [mName](types.gameentrynotfound.md#mname)
- [mStore](types.gameentrynotfound.md#mstore)
- [message](types.gameentrynotfound.md#message)
- [name](types.gameentrynotfound.md#name)
- [prepareStackTrace](types.gameentrynotfound.md#preparestacktrace)
- [stack](types.gameentrynotfound.md#stack)
- [stackTraceLimit](types.gameentrynotfound.md#stacktracelimit)

### Accessors

- [existingGames](types.gameentrynotfound.md#existinggames)
- [gameName](types.gameentrynotfound.md#gamename)
- [storeName](types.gameentrynotfound.md#storename)

### Methods

- [captureStackTrace](types.gameentrynotfound.md#capturestacktrace)

## Constructors

### constructor

\+ **new GameEntryNotFound**(`name`: *string*, `store`: *string*, `existing?`: *string*[]): [*GameEntryNotFound*](types.gameentrynotfound.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`store` | *string* |
`existing?` | *string*[] |

**Returns:** [*GameEntryNotFound*](types.gameentrynotfound.md)

Defined in: src/types/IGameStore.ts:26

## Properties

### mExistingNames

• `Private` **mExistingNames**: *string*[]

Defined in: src/types/IGameStore.ts:26

___

### mName

• `Private` **mName**: *string*

Defined in: src/types/IGameStore.ts:24

___

### mStore

• `Private` **mStore**: *string*

Defined in: src/types/IGameStore.ts:25

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

### existingGames

• get **existingGames**(): *string*[]

**Returns:** *string*[]

Defined in: src/types/IGameStore.ts:48

___

### gameName

• get **gameName**(): *string*

**Returns:** *string*

Defined in: src/types/IGameStore.ts:37

___

### storeName

• get **storeName**(): *string*

**Returns:** *string*

Defined in: src/types/IGameStore.ts:42

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
