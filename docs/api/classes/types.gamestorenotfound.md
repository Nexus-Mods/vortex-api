[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / GameStoreNotFound

# Class: GameStoreNotFound

[types](../modules/types.md).GameStoreNotFound

## Hierarchy

* *Error*

  ↳ **GameStoreNotFound**

## Table of contents

### Constructors

- [constructor](types.gamestorenotfound.md#constructor)

### Properties

- [mName](types.gamestorenotfound.md#mname)
- [message](types.gamestorenotfound.md#message)
- [name](types.gamestorenotfound.md#name)
- [prepareStackTrace](types.gamestorenotfound.md#preparestacktrace)
- [stack](types.gamestorenotfound.md#stack)
- [stackTraceLimit](types.gamestorenotfound.md#stacktracelimit)

### Accessors

- [storeName](types.gamestorenotfound.md#storename)

### Methods

- [captureStackTrace](types.gamestorenotfound.md#capturestacktrace)

## Constructors

### constructor

\+ **new GameStoreNotFound**(`name`: *any*): [*GameStoreNotFound*](types.gamestorenotfound.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *any* |

**Returns:** [*GameStoreNotFound*](types.gamestorenotfound.md)

Defined in: src/types/IGameStore.ts:10

## Properties

### mName

• `Private` **mName**: *string*

Defined in: src/types/IGameStore.ts:10

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

### storeName

• get **storeName**(): *string*

**Returns:** *string*

Defined in: src/types/IGameStore.ts:18

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
