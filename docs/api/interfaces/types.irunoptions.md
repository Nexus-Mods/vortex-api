[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IRunOptions

# Interface: IRunOptions

[types](../modules/types.md).IRunOptions

options used when starting an external application through runExecutable

## Table of contents

### Properties

- [cwd](types.irunoptions.md#cwd)
- [detach](types.irunoptions.md#detach)
- [env](types.irunoptions.md#env)
- [expectSuccess](types.irunoptions.md#expectsuccess)
- [onSpawned](types.irunoptions.md#onspawned)
- [shell](types.irunoptions.md#shell)
- [suggestDeploy](types.irunoptions.md#suggestdeploy)

## Properties

### cwd

• `Optional` **cwd**: *string*

Defined in: src/types/IExtensionContext.ts:314

___

### detach

• `Optional` **detach**: *boolean*

Defined in: src/types/IExtensionContext.ts:318

___

### env

• `Optional` **env**: *object*

#### Type declaration:

Defined in: src/types/IExtensionContext.ts:315

___

### expectSuccess

• `Optional` **expectSuccess**: *boolean*

Defined in: src/types/IExtensionContext.ts:321

___

### onSpawned

• `Optional` **onSpawned**: (`pid?`: *number*) => *void*

#### Type declaration:

▸ (`pid?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`pid?` | *number* |

**Returns:** *void*

Defined in: src/types/IExtensionContext.ts:325

Defined in: src/types/IExtensionContext.ts:325

___

### shell

• `Optional` **shell**: *boolean*

Defined in: src/types/IExtensionContext.ts:317

___

### suggestDeploy

• `Optional` **suggestDeploy**: *boolean*

Defined in: src/types/IExtensionContext.ts:316
