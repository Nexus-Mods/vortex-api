[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IRunOptions

# Interface: IRunOptions

[types](../modules/types.md).IRunOptions

options used when starting an external application through runExecutable

## Table of contents

### Properties

- [cwd](types.IRunOptions.md#cwd)
- [detach](types.IRunOptions.md#detach)
- [env](types.IRunOptions.md#env)
- [expectSuccess](types.IRunOptions.md#expectsuccess)
- [shell](types.IRunOptions.md#shell)
- [suggestDeploy](types.IRunOptions.md#suggestdeploy)

### Methods

- [onSpawned](types.IRunOptions.md#onspawned)

## Properties

### cwd

• `Optional` **cwd**: `string`

#### Defined in

../src/types/IExtensionContext.ts:344

___

### detach

• `Optional` **detach**: `boolean`

#### Defined in

../src/types/IExtensionContext.ts:348

___

### env

• `Optional` **env**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

../src/types/IExtensionContext.ts:345

___

### expectSuccess

• `Optional` **expectSuccess**: `boolean`

#### Defined in

../src/types/IExtensionContext.ts:351

___

### shell

• `Optional` **shell**: `boolean`

#### Defined in

../src/types/IExtensionContext.ts:347

___

### suggestDeploy

• `Optional` **suggestDeploy**: `boolean`

#### Defined in

../src/types/IExtensionContext.ts:346

## Methods

### onSpawned

▸ `Optional` **onSpawned**(`pid?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pid?` | `number` |

#### Returns

`void`

#### Defined in

../src/types/IExtensionContext.ts:355
