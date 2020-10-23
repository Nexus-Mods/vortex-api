**[vortex_devel](../README.md)**

> [Globals](../globals.md) / StyleManager

# Class: StyleManager

## Hierarchy

* **StyleManager**

## Index

### Constructors

* [constructor](stylemanager.md#constructor)

### Properties

* [mAutoRefresh](stylemanager.md#mautorefresh)
* [mExpectingResult](stylemanager.md#mexpectingresult)
* [mPartials](stylemanager.md#mpartials)
* [mRenderDebouncer](stylemanager.md#mrenderdebouncer)
* [mSetQueue](stylemanager.md#msetqueue)
* [RENDER\_DELAY](stylemanager.md#render_delay)

### Methods

* [applyCSS](stylemanager.md#applycss)
* [clearCache](stylemanager.md#clearcache)
* [render](stylemanager.md#render)
* [renderNow](stylemanager.md#rendernow)
* [setSheet](stylemanager.md#setsheet)
* [startAutoUpdate](stylemanager.md#startautoupdate)

## Constructors

### constructor

\+ **new StyleManager**(`api`: [IExtensionApi](../interfaces/iextensionapi.md)): [StyleManager](stylemanager.md)

*Defined in Work/vortex/src/util/StyleManager.ts:128*

#### Parameters:

Name | Type |
------ | ------ |
`api` | [IExtensionApi](../interfaces/iextensionapi.md) |

**Returns:** [StyleManager](stylemanager.md)

## Properties

### mAutoRefresh

• `Private` **mAutoRefresh**: boolean = false

*Defined in Work/vortex/src/util/StyleManager.ts:127*

___

### mExpectingResult

• `Private` **mExpectingResult**: { reject: (err: [Error](notsupportederror.md#error)) => void ; resolve: (css: string) => void  }

*Defined in Work/vortex/src/util/StyleManager.ts:126*

#### Type declaration:

Name | Type |
------ | ------ |
`reject` | (err: [Error](notsupportederror.md#error)) => void |
`resolve` | (css: string) => void |

___

### mPartials

• `Private` **mPartials**: Array\<{ file: string ; key: string  }>

*Defined in Work/vortex/src/util/StyleManager.ts:124*

___

### mRenderDebouncer

• `Private` **mRenderDebouncer**: [Debouncer](debouncer.md)

*Defined in Work/vortex/src/util/StyleManager.ts:125*

___

### mSetQueue

• `Private` **mSetQueue**: Promise\<void> = Promise.resolve()

*Defined in Work/vortex/src/util/StyleManager.ts:128*

___

### RENDER\_DELAY

▪ `Static` `Private` **RENDER\_DELAY**: number = 200

*Defined in Work/vortex/src/util/StyleManager.ts:123*

## Methods

### applyCSS

▸ `Private`**applyCSS**(`css`: string): void

*Defined in Work/vortex/src/util/StyleManager.ts:268*

#### Parameters:

Name | Type |
------ | ------ |
`css` | string |

**Returns:** void

___

### clearCache

▸ **clearCache**(): void

*Defined in Work/vortex/src/util/StyleManager.ts:183*

**Returns:** void

___

### render

▸ `Private`**render**(): Promise\<void>

*Defined in Work/vortex/src/util/StyleManager.ts:252*

**Returns:** Promise\<void>

___

### renderNow

▸ **renderNow**(): Promise\<void>

*Defined in Work/vortex/src/util/StyleManager.ts:239*

**Returns:** Promise\<void>

___

### setSheet

▸ **setSheet**(`key`: string, `filePath`: string): void

*Defined in Work/vortex/src/util/StyleManager.ts:209*

insert or replace a sheet.
By default, the sheets "variables", "details" and "style" are intended to customize the
look of the application.
- "variables" is a set of variables representing colors, sizes and
  margins that will be used throughout the application.
- "details" applies these variables to different generic controls (like tabs, lists, ...)
- "style" is where you should customize individual controls with css rules

If your extension sets a sheet that didn't exist before then that sheet will
remain with the style and not be touched by anyone else (unless you have a name collision).

new sheets will be inserted before the "style" sheet but after everything else. This allows
themes to affect extension styles

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | identify the key to set. If this is an existing sheet, that sheet will be                     replaced |
`filePath` | string | path of the corresponding stylesheet file  |

**Returns:** void

___

### startAutoUpdate

▸ **startAutoUpdate**(): void

*Defined in Work/vortex/src/util/StyleManager.ts:179*

**Returns:** void
