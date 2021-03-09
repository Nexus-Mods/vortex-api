[vortex_devel](../README.md) / [Exports](../modules.md) / [Promise](../modules/promise.md) / AggregateError

# Class: AggregateError

[Promise](../modules/promise.md).AggregateError

A collection of errors. `AggregateError` is an array-like object, with numeric indices and a `.length` property.
 It supports all generic array methods such as `.forEach` directly.

`AggregateError`s are caught in `.error` handlers, even if the contained errors are not operational.

`Promise.some` and `Promise.any` use `AggregateError` as rejection reason when they fail.

## Hierarchy

* *Error*

  ↳ **AggregateError**

## Implements

* *ArrayLike*<Error\>

## Indexable

▪ [index: *number*]: Error

A collection of errors. `AggregateError` is an array-like object, with numeric indices and a `.length` property.
 It supports all generic array methods such as `.forEach` directly.

`AggregateError`s are caught in `.error` handlers, even if the contained errors are not operational.

`Promise.some` and `Promise.any` use `AggregateError` as rejection reason when they fail.

## Table of contents

### Constructors

- [constructor](promise.aggregateerror.md#constructor)

### Properties

- [length](promise.aggregateerror.md#length)
- [message](promise.aggregateerror.md#message)
- [name](promise.aggregateerror.md#name)
- [prepareStackTrace](promise.aggregateerror.md#preparestacktrace)
- [stack](promise.aggregateerror.md#stack)
- [stackTraceLimit](promise.aggregateerror.md#stacktracelimit)

### Methods

- [captureStackTrace](promise.aggregateerror.md#capturestacktrace)
- [every](promise.aggregateerror.md#every)
- [filter](promise.aggregateerror.md#filter)
- [forEach](promise.aggregateerror.md#foreach)
- [indexOf](promise.aggregateerror.md#indexof)
- [join](promise.aggregateerror.md#join)
- [lastIndexOf](promise.aggregateerror.md#lastindexof)
- [map](promise.aggregateerror.md#map)
- [pop](promise.aggregateerror.md#pop)
- [push](promise.aggregateerror.md#push)
- [reduce](promise.aggregateerror.md#reduce)
- [reduceRight](promise.aggregateerror.md#reduceright)
- [reverse](promise.aggregateerror.md#reverse)
- [shift](promise.aggregateerror.md#shift)
- [slice](promise.aggregateerror.md#slice)
- [some](promise.aggregateerror.md#some)
- [sort](promise.aggregateerror.md#sort)
- [unshift](promise.aggregateerror.md#unshift)

## Constructors

### constructor

\+ **new AggregateError**(`message?`: *string*): [*AggregateError*](promise.aggregateerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message?` | *string* |

**Returns:** [*AggregateError*](promise.aggregateerror.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:978

## Properties

### length

• **length**: *number*

Defined in: node_modules/@types/bluebird/index.d.ts:1006

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

___

### every

▸ **every**(`callback`: (`element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *boolean*, `thisArg?`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *boolean* |
`thisArg?` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/bluebird/index.d.ts:1017

___

### filter

▸ **filter**(`callback`: (`element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *boolean*, `thisArg?`: *any*): [*AggregateError*](promise.aggregateerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *boolean* |
`thisArg?` | *any* |

**Returns:** [*AggregateError*](promise.aggregateerror.md)

Defined in: node_modules/@types/bluebird/index.d.ts:1014

___

### forEach

▸ **forEach**(`callback`: (`element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *void*, `thisArg?`: *any*): *undefined*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *void* |
`thisArg?` | *any* |

**Returns:** *undefined*

Defined in: node_modules/@types/bluebird/index.d.ts:1015

___

### indexOf

▸ **indexOf**(`searchElement`: Error, `fromIndex?`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`searchElement` | Error |
`fromIndex?` | *number* |

**Returns:** *number*

Defined in: node_modules/@types/bluebird/index.d.ts:1019

___

### join

▸ **join**(`separator?`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`separator?` | *string* |

**Returns:** *string*

Defined in: node_modules/@types/bluebird/index.d.ts:1008

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`: Error, `fromIndex?`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`searchElement` | Error |
`fromIndex?` | *number* |

**Returns:** *number*

Defined in: node_modules/@types/bluebird/index.d.ts:1020

___

### map

▸ **map**(`callback`: (`element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *boolean*, `thisArg?`: *any*): [*AggregateError*](promise.aggregateerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *boolean* |
`thisArg?` | *any* |

**Returns:** [*AggregateError*](promise.aggregateerror.md)

Defined in: node_modules/@types/bluebird/index.d.ts:1018

___

### pop

▸ **pop**(): Error

**Returns:** Error

Defined in: node_modules/@types/bluebird/index.d.ts:1009

___

### push

▸ **push**(...`errors`: Error[]): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`...errors` | Error[] |

**Returns:** *number*

Defined in: node_modules/@types/bluebird/index.d.ts:1010

___

### reduce

▸ **reduce**(`callback`: (`accumulator`: *any*, `element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *any*, `initialValue?`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`accumulator`: *any*, `element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *any* |
`initialValue?` | *any* |

**Returns:** *any*

Defined in: node_modules/@types/bluebird/index.d.ts:1021

___

### reduceRight

▸ **reduceRight**(`callback`: (`previousValue`: *any*, `element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *any*, `initialValue?`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`previousValue`: *any*, `element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *any* |
`initialValue?` | *any* |

**Returns:** *any*

Defined in: node_modules/@types/bluebird/index.d.ts:1022

___

### reverse

▸ **reverse**(): [*AggregateError*](promise.aggregateerror.md)

**Returns:** [*AggregateError*](promise.aggregateerror.md)

Defined in: node_modules/@types/bluebird/index.d.ts:1024

___

### shift

▸ **shift**(): Error

**Returns:** Error

Defined in: node_modules/@types/bluebird/index.d.ts:1011

___

### slice

▸ **slice**(`begin?`: *number*, `end?`: *number*): [*AggregateError*](promise.aggregateerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`begin?` | *number* |
`end?` | *number* |

**Returns:** [*AggregateError*](promise.aggregateerror.md)

Defined in: node_modules/@types/bluebird/index.d.ts:1013

___

### some

▸ **some**(`callback`: (`element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *boolean*, `thisArg?`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`element`: Error, `index`: *number*, `array`: [*AggregateError*](promise.aggregateerror.md)) => *boolean* |
`thisArg?` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/bluebird/index.d.ts:1016

___

### sort

▸ **sort**(`compareFunction?`: (`errLeft`: Error, `errRight`: Error) => *number*): [*AggregateError*](promise.aggregateerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`compareFunction?` | (`errLeft`: Error, `errRight`: Error) => *number* |

**Returns:** [*AggregateError*](promise.aggregateerror.md)

Defined in: node_modules/@types/bluebird/index.d.ts:1023

___

### unshift

▸ **unshift**(...`errors`: Error[]): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`...errors` | Error[] |

**Returns:** *number*

Defined in: node_modules/@types/bluebird/index.d.ts:1012
