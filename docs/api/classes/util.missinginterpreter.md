[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / MissingInterpreter

# Class: MissingInterpreter

[util](../modules/util.md).MissingInterpreter

## Hierarchy

* *Error*

  ↳ **MissingInterpreter**

## Table of contents

### Constructors

- [constructor](util.missinginterpreter.md#constructor)

### Properties

- [mURL](util.missinginterpreter.md#murl)
- [message](util.missinginterpreter.md#message)
- [name](util.missinginterpreter.md#name)
- [prepareStackTrace](util.missinginterpreter.md#preparestacktrace)
- [stack](util.missinginterpreter.md#stack)
- [stackTraceLimit](util.missinginterpreter.md#stacktracelimit)

### Accessors

- [url](util.missinginterpreter.md#url)

### Methods

- [captureStackTrace](util.missinginterpreter.md#capturestacktrace)

## Constructors

### constructor

\+ **new MissingInterpreter**(`message`: *string*, `url?`: *string*): [*MissingInterpreter*](util.missinginterpreter.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`url?` | *string* |

**Returns:** [*MissingInterpreter*](util.missinginterpreter.md)

Defined in: src/util/CustomErrors.ts:150

## Properties

### mURL

• `Private` **mURL**: *string*

Defined in: src/util/CustomErrors.ts:150

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

### url

• get **url**(): *string*

**Returns:** *string*

Defined in: src/util/CustomErrors.ts:157

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
