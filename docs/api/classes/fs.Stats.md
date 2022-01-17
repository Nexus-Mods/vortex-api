[vortex_devel](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / Stats

# Class: Stats

[fs](../modules/fs.md).Stats

A `fs.Stats` object provides information about a file.

Objects returned from {@link stat}, {@link lstat} and {@link fstat} and
their synchronous counterparts are of this type.
If `bigint` in the `options` passed to those methods is true, the numeric values
will be `bigint` instead of `number`, and the object will contain additional
nanosecond-precision properties suffixed with `Ns`.

```console
Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

`bigint` version:

```console
BigIntStats {
  dev: 2114n,
  ino: 48064969n,
  mode: 33188n,
  nlink: 1n,
  uid: 85n,
  gid: 100n,
  rdev: 0n,
  size: 527n,
  blksize: 4096n,
  blocks: 8n,
  atimeMs: 1318289051000n,
  mtimeMs: 1318289051000n,
  ctimeMs: 1318289051000n,
  birthtimeMs: 1318289051000n,
  atimeNs: 1318289051000000000n,
  mtimeNs: 1318289051000000000n,
  ctimeNs: 1318289051000000000n,
  birthtimeNs: 1318289051000000000n,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

**`since`** v0.1.21

## Hierarchy

- `StatsBase`<`number`\>

  ↳ **`Stats`**

## Table of contents

### Constructors

- [constructor](fs.Stats.md#constructor)

### Properties

- [atime](fs.Stats.md#atime)
- [atimeMs](fs.Stats.md#atimems)
- [birthtime](fs.Stats.md#birthtime)
- [birthtimeMs](fs.Stats.md#birthtimems)
- [blksize](fs.Stats.md#blksize)
- [blocks](fs.Stats.md#blocks)
- [ctime](fs.Stats.md#ctime)
- [ctimeMs](fs.Stats.md#ctimems)
- [dev](fs.Stats.md#dev)
- [gid](fs.Stats.md#gid)
- [ino](fs.Stats.md#ino)
- [mode](fs.Stats.md#mode)
- [mtime](fs.Stats.md#mtime)
- [mtimeMs](fs.Stats.md#mtimems)
- [nlink](fs.Stats.md#nlink)
- [rdev](fs.Stats.md#rdev)
- [size](fs.Stats.md#size)
- [uid](fs.Stats.md#uid)

### Methods

- [isBlockDevice](fs.Stats.md#isblockdevice)
- [isCharacterDevice](fs.Stats.md#ischaracterdevice)
- [isDirectory](fs.Stats.md#isdirectory)
- [isFIFO](fs.Stats.md#isfifo)
- [isFile](fs.Stats.md#isfile)
- [isSocket](fs.Stats.md#issocket)
- [isSymbolicLink](fs.Stats.md#issymboliclink)

## Constructors

### constructor

• **new Stats**()

#### Inherited from

StatsBase<number\>.constructor

## Properties

### atime

• **atime**: `Date`

#### Inherited from

StatsBase.atime

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:67

___

### atimeMs

• **atimeMs**: `number`

#### Inherited from

StatsBase.atimeMs

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:63

___

### birthtime

• **birthtime**: `Date`

#### Inherited from

StatsBase.birthtime

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:70

___

### birthtimeMs

• **birthtimeMs**: `number`

#### Inherited from

StatsBase.birthtimeMs

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:66

___

### blksize

• **blksize**: `number`

#### Inherited from

StatsBase.blksize

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:61

___

### blocks

• **blocks**: `number`

#### Inherited from

StatsBase.blocks

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:62

___

### ctime

• **ctime**: `Date`

#### Inherited from

StatsBase.ctime

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:69

___

### ctimeMs

• **ctimeMs**: `number`

#### Inherited from

StatsBase.ctimeMs

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:65

___

### dev

• **dev**: `number`

#### Inherited from

StatsBase.dev

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:53

___

### gid

• **gid**: `number`

#### Inherited from

StatsBase.gid

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:58

___

### ino

• **ino**: `number`

#### Inherited from

StatsBase.ino

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:54

___

### mode

• **mode**: `number`

#### Inherited from

StatsBase.mode

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:55

___

### mtime

• **mtime**: `Date`

#### Inherited from

StatsBase.mtime

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:68

___

### mtimeMs

• **mtimeMs**: `number`

#### Inherited from

StatsBase.mtimeMs

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:64

___

### nlink

• **nlink**: `number`

#### Inherited from

StatsBase.nlink

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:56

___

### rdev

• **rdev**: `number`

#### Inherited from

StatsBase.rdev

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:59

___

### size

• **size**: `number`

#### Inherited from

StatsBase.size

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:60

___

### uid

• **uid**: `number`

#### Inherited from

StatsBase.uid

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:57

## Methods

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StatsBase.isBlockDevice

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:48

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StatsBase.isCharacterDevice

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:49

___

### isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StatsBase.isDirectory

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:47

___

### isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StatsBase.isFIFO

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:51

___

### isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StatsBase.isFile

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:46

___

### isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StatsBase.isSocket

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:52

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StatsBase.isSymbolicLink

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:50
