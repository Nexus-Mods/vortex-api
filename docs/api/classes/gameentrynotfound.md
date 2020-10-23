**[vortex_devel](../README.md)**

> [Globals](../globals.md) / GameEntryNotFound

# Class: GameEntryNotFound

## Hierarchy

* [Error](notsupportederror.md#error)

  ↳ **GameEntryNotFound**

## Index

### Constructors

* [constructor](gameentrynotfound.md#constructor)

### Properties

* [mExistingNames](gameentrynotfound.md#mexistingnames)
* [mName](gameentrynotfound.md#mname)
* [mStore](gameentrynotfound.md#mstore)
* [message](gameentrynotfound.md#message)
* [name](gameentrynotfound.md#name)
* [stack](gameentrynotfound.md#stack)
* [Error](gameentrynotfound.md#error)

### Accessors

* [existingGames](gameentrynotfound.md#existinggames)
* [gameName](gameentrynotfound.md#gamename)
* [storeName](gameentrynotfound.md#storename)

## Constructors

### constructor

\+ **new GameEntryNotFound**(`name`: string, `store`: string, `existing?`: string[]): [GameEntryNotFound](gameentrynotfound.md)

*Defined in Work/vortex/src/types/IGameStore.ts:26*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`store` | string |
`existing?` | string[] |

**Returns:** [GameEntryNotFound](gameentrynotfound.md)

## Properties

### mExistingNames

• `Private` **mExistingNames**: string[]

*Defined in Work/vortex/src/types/IGameStore.ts:26*

___

### mName

• `Private` **mName**: string

*Defined in Work/vortex/src/types/IGameStore.ts:24*

___

### mStore

• `Private` **mStore**: string

*Defined in Work/vortex/src/types/IGameStore.ts:25*

___

### message

•  **message**: string

*Inherited from [NotSupportedError](notsupportederror.md).[message](notsupportederror.md#message)*

*Defined in Users/Tannin/AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:974*

___

### name

•  **name**: string

*Inherited from [NotSupportedError](notsupportederror.md).[name](notsupportederror.md#name)*

*Defined in Users/Tannin/AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:973*

___

### stack

• `Optional` **stack**: string

*Inherited from [NotSupportedError](notsupportederror.md).[stack](notsupportederror.md#stack)*

*Overrides [NotSupportedError](notsupportederror.md).[stack](notsupportederror.md#stack)*

*Defined in Users/Tannin/AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:975*

___

### Error

▪ `Static` **Error**: ErrorConstructor

*Defined in Users/Tannin/AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:984*

## Accessors

### existingGames

• get **existingGames**(): string[]

*Defined in Work/vortex/src/types/IGameStore.ts:48*

**Returns:** string[]

___

### gameName

• get **gameName**(): string

*Defined in Work/vortex/src/types/IGameStore.ts:37*

**Returns:** string

___

### storeName

• get **storeName**(): string

*Defined in Work/vortex/src/types/IGameStore.ts:42*

**Returns:** string
