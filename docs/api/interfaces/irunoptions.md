**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IRunOptions

# Interface: IRunOptions

options used when starting an external application through runExecutable

## Hierarchy

* **IRunOptions**

## Index

### Properties

* [cwd](irunoptions.md#cwd)
* [detach](irunoptions.md#detach)
* [env](irunoptions.md#env)
* [expectSuccess](irunoptions.md#expectsuccess)
* [onSpawned](irunoptions.md#onspawned)
* [shell](irunoptions.md#shell)
* [suggestDeploy](irunoptions.md#suggestdeploy)

## Properties

### cwd

• `Optional` **cwd**: string

*Defined in Work/vortex/src/types/IExtensionContext.ts:311*

___

### detach

• `Optional` **detach**: boolean

*Defined in Work/vortex/src/types/IExtensionContext.ts:315*

___

### env

• `Optional` **env**: { [key:string]: string;  }

*Defined in Work/vortex/src/types/IExtensionContext.ts:312*

___

### expectSuccess

• `Optional` **expectSuccess**: boolean

*Defined in Work/vortex/src/types/IExtensionContext.ts:318*

___

### onSpawned

• `Optional` **onSpawned**: (pid?: number) => void

*Defined in Work/vortex/src/types/IExtensionContext.ts:322*

___

### shell

• `Optional` **shell**: boolean

*Defined in Work/vortex/src/types/IExtensionContext.ts:314*

___

### suggestDeploy

• `Optional` **suggestDeploy**: boolean

*Defined in Work/vortex/src/types/IExtensionContext.ts:313*
