[vortex_devel](../README.md) / [Exports](../modules.md) / [Promise](../modules/Promise.md) / Inspection

# Interface: Inspection<R\>

[Promise](../modules/Promise.md).Inspection

## Type parameters

| Name |
| :------ |
| `R` |

## Implemented by

- [`Promise`](../classes/Promise.md)

## Table of contents

### Methods

- [isCancelled](Promise.Inspection.md#iscancelled)
- [isFulfilled](Promise.Inspection.md#isfulfilled)
- [isPending](Promise.Inspection.md#ispending)
- [isRejected](Promise.Inspection.md#isrejected)
- [reason](Promise.Inspection.md#reason)
- [value](Promise.Inspection.md#value)

## Methods

### isCancelled

▸ **isCancelled**(): `boolean`

See if the underlying promise was cancelled at the creation time of this inspection object.

#### Returns

`boolean`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1078

___

### isFulfilled

▸ **isFulfilled**(): `boolean`

See if the underlying promise was fulfilled at the creation time of this inspection object.

#### Returns

`boolean`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1068

___

### isPending

▸ **isPending**(): `boolean`

See if the underlying promise was defer at the creation time of this inspection object.

#### Returns

`boolean`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1083

___

### isRejected

▸ **isRejected**(): `boolean`

See if the underlying promise was rejected at the creation time of this inspection object.

#### Returns

`boolean`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1073

___

### reason

▸ **reason**(): `any`

Get the rejection reason for the underlying promise. Throws if the promise wasn't rejected at the creation time of this inspection object.

throws `TypeError`

#### Returns

`any`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1097

___

### value

▸ **value**(): `R`

Get the fulfillment value of the underlying promise. Throws if the promise wasn't fulfilled at the creation time of this inspection object.

throws `TypeError`

#### Returns

`R`

#### Defined in

E:/WorkC/vortex/node_modules/@types/bluebird/index.d.ts:1090
