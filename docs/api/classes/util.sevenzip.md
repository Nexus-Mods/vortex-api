[vortex_devel](../README.md) / [Exports](../modules.md) / [util](../modules/util.md) / SevenZip

# Class: SevenZip

[util](../modules/util.md).SevenZip

## Table of contents

### Constructors

- [constructor](util.sevenzip.md#constructor)

### Methods

- [add](util.sevenzip.md#add)
- [delete](util.sevenzip.md#delete)
- [extract](util.sevenzip.md#extract)
- [extractFull](util.sevenzip.md#extractfull)
- [list](util.sevenzip.md#list)
- [test](util.sevenzip.md#test)
- [update](util.sevenzip.md#update)

## Constructors

### constructor

\+ **new SevenZip**(): [*SevenZip*](util.sevenzip.md)

**Returns:** [*SevenZip*](util.sevenzip.md)

## Methods

### add

▸ **add**(`archive`: *string*, `files`: *string* \| *string*[], `options?`: ICommandLineSwitches, `progress?`: IProgressCB): *Bluebird*<IResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`archive` | *string* |
`files` | *string* \| *string*[] |
`options?` | ICommandLineSwitches |
`progress?` | IProgressCB |

**Returns:** *Bluebird*<IResult\>

Defined in: node_modules/node-7z/lib/index.d.ts:33

___

### delete

▸ **delete**(`archive`: *string*, `files`: *string* \| *string*[], `options?`: ICommandLineSwitches): *Bluebird*<IResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`archive` | *string* |
`files` | *string* \| *string*[] |
`options?` | ICommandLineSwitches |

**Returns:** *Bluebird*<IResult\>

Defined in: node_modules/node-7z/lib/index.d.ts:34

___

### extract

▸ **extract**(`archive`: *string*, `dest`: *string*, `options?`: ICommandLineSwitches, `progress?`: IProgressCB, `passwordCB?`: () => *Bluebird*<string\>): *Bluebird*<IResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`archive` | *string* |
`dest` | *string* |
`options?` | ICommandLineSwitches |
`progress?` | IProgressCB |
`passwordCB?` | () => *Bluebird*<string\> |

**Returns:** *Bluebird*<IResult\>

Defined in: node_modules/node-7z/lib/index.d.ts:35

___

### extractFull

▸ **extractFull**(`archive`: *string*, `dest`: *string*, `options?`: ICommandLineSwitches, `progress?`: IProgressCB, `passwordCB?`: () => *Bluebird*<string\>): *Bluebird*<IResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`archive` | *string* |
`dest` | *string* |
`options?` | ICommandLineSwitches |
`progress?` | IProgressCB |
`passwordCB?` | () => *Bluebird*<string\> |

**Returns:** *Bluebird*<IResult\>

Defined in: node_modules/node-7z/lib/index.d.ts:36

___

### list

▸ **list**(`archive`: *string*, `options?`: ICommandLineSwitches, `progress?`: (`entries`: IFileEntry[]) => *void*): *Bluebird*<IFileSpec\>

#### Parameters:

Name | Type |
:------ | :------ |
`archive` | *string* |
`options?` | ICommandLineSwitches |
`progress?` | (`entries`: IFileEntry[]) => *void* |

**Returns:** *Bluebird*<IFileSpec\>

Defined in: node_modules/node-7z/lib/index.d.ts:37

___

### test

▸ **test**(`archive`: *string*, `options?`: ICommandLineSwitches, `progress?`: IProgressCB): *Bluebird*<IResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`archive` | *string* |
`options?` | ICommandLineSwitches |
`progress?` | IProgressCB |

**Returns:** *Bluebird*<IResult\>

Defined in: node_modules/node-7z/lib/index.d.ts:38

___

### update

▸ **update**(`archive`: *string*, `files`: *string* \| *string*[], `options?`: ICommandLineSwitches, `progress?`: IProgressCB): *Bluebird*<IResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`archive` | *string* |
`files` | *string* \| *string*[] |
`options?` | ICommandLineSwitches |
`progress?` | IProgressCB |

**Returns:** *Bluebird*<IResult\>

Defined in: node_modules/node-7z/lib/index.d.ts:39
