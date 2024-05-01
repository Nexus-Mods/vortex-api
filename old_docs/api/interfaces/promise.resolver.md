[vortex_devel](../README.md) / [Exports](../modules.md) / [Promise](../modules/Promise.md) / Resolver

# Interface: Resolver<R\>

[Promise](../modules/Promise.md).Resolver

## Type parameters

| Name |
| :------ |
| `R` |

## Table of contents

### Properties

- [promise](Promise.Resolver.md#promise)

### Methods

- [callback](Promise.Resolver.md#callback)
- [reject](Promise.Resolver.md#reject)
- [resolve](Promise.Resolver.md#resolve)

## Properties

### promise

• **promise**: [`Promise`](../classes/Promise.md)<`R`\>

Returns a reference to the controlled promise that can be passed to clients.

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1041

## Methods

### callback

▸ **callback**(`err`, `value`, ...`values`): `void`

Gives you a callback representation of the `PromiseResolver`. Note that this is not a method but a property.
The callback accepts error object in first argument and success values on the 2nd parameter and the rest, I.E. node js conventions.

If the the callback is called with multiple success values, the resolver fulfills its promise with an array of the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |
| `value` | `R` |
| `...values` | `R`[] |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1061

___

### reject

▸ **reject**(`reason`): `void`

Reject the underlying promise with `reason` as the rejection reason.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `any` |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1052

___

### resolve

▸ **resolve**(`value`): `void`

Resolve the underlying promise with `value` as the resolution value. If `value` is a thenable or a promise, the underlying promise will assume its state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `R` |

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1046

▸ **resolve**(): `void`

#### Returns

`void`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1047
