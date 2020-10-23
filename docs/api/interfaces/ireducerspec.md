**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IReducerSpec

# Interface: IReducerSpec

specification a reducer registration has to follow.
defaults must be an object with the same keys as
reducers

**`export`** 

**`interface`** IReducerSpec

## Hierarchy

* **IReducerSpec**

## Index

### Properties

* [defaults](ireducerspec.md#defaults)
* [reducers](ireducerspec.md#reducers)
* [verifiers](ireducerspec.md#verifiers)

## Properties

### defaults

•  **defaults**: { [key:string]: any;  }

*Defined in Work/vortex/src/types/IExtensionContext.ts:715*

___

### reducers

•  **reducers**: { [key:string]: (state: any, payload: any) => any;  }

*Defined in Work/vortex/src/types/IExtensionContext.ts:714*

___

### verifiers

• `Optional` **verifiers**: { [key:string]: [IStateVerifier](istateverifier.md);  }

*Defined in Work/vortex/src/types/IExtensionContext.ts:716*
