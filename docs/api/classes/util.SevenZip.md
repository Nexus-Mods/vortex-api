[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / SevenZip

# Class: SevenZip

[util](../modules/util.md).SevenZip

## Table of contents

### Constructors

- [constructor](util.SevenZip.md#constructor)

### Methods

- [add](util.SevenZip.md#add)
- [delete](util.SevenZip.md#delete)
- [extract](util.SevenZip.md#extract)
- [extractFull](util.SevenZip.md#extractfull)
- [list](util.SevenZip.md#list)
- [test](util.SevenZip.md#test)
- [update](util.SevenZip.md#update)

## Constructors

### constructor

• **new SevenZip**()

## Methods

### add

▸ **add**(`archive`, `files`, `options?`, `progress?`): `Bluebird`<`IResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `archive` | `string` |
| `files` | `string` \| `string`[] |
| `options?` | `ICommandLineSwitches` |
| `progress?` | `IProgressCB` |

#### Returns

`Bluebird`<`IResult`\>

#### Defined in

E:/WorkC/vortex/node_modules/node-7z/lib/index.d.ts:33

___

### delete

▸ **delete**(`archive`, `files`, `options?`): `Bluebird`<`IResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `archive` | `string` |
| `files` | `string` \| `string`[] |
| `options?` | `ICommandLineSwitches` |

#### Returns

`Bluebird`<`IResult`\>

#### Defined in

E:/WorkC/vortex/node_modules/node-7z/lib/index.d.ts:34

___

### extract

▸ **extract**(`archive`, `dest`, `options?`, `progress?`, `passwordCB?`): `Bluebird`<`IResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `archive` | `string` |
| `dest` | `string` |
| `options?` | `ICommandLineSwitches` |
| `progress?` | `IProgressCB` |
| `passwordCB?` | () => `Bluebird`<`string`\> |

#### Returns

`Bluebird`<`IResult`\>

#### Defined in

E:/WorkC/vortex/node_modules/node-7z/lib/index.d.ts:35

___

### extractFull

▸ **extractFull**(`archive`, `dest`, `options?`, `progress?`, `passwordCB?`): `Bluebird`<`IResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `archive` | `string` |
| `dest` | `string` |
| `options?` | `ICommandLineSwitches` |
| `progress?` | `IProgressCB` |
| `passwordCB?` | () => `Bluebird`<`string`\> |

#### Returns

`Bluebird`<`IResult`\>

#### Defined in

E:/WorkC/vortex/node_modules/node-7z/lib/index.d.ts:36

___

### list

▸ **list**(`archive`, `options?`, `progress?`): `Bluebird`<`IFileSpec`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `archive` | `string` |
| `options?` | `ICommandLineSwitches` |
| `progress?` | (`entries`: `IFileEntry`[]) => `void` |

#### Returns

`Bluebird`<`IFileSpec`\>

#### Defined in

E:/WorkC/vortex/node_modules/node-7z/lib/index.d.ts:37

___

### test

▸ **test**(`archive`, `options?`, `progress?`): `Bluebird`<`IResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `archive` | `string` |
| `options?` | `ICommandLineSwitches` |
| `progress?` | `IProgressCB` |

#### Returns

`Bluebird`<`IResult`\>

#### Defined in

E:/WorkC/vortex/node_modules/node-7z/lib/index.d.ts:38

___

### update

▸ **update**(`archive`, `files`, `options?`, `progress?`): `Bluebird`<`IResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `archive` | `string` |
| `files` | `string` \| `string`[] |
| `options?` | `ICommandLineSwitches` |
| `progress?` | `IProgressCB` |

#### Returns

`Bluebird`<`IResult`\>

#### Defined in

E:/WorkC/vortex/node_modules/node-7z/lib/index.d.ts:39
