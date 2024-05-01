[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IDialogContent

# Interface: IDialogContent

[types](../modules/types.md).IDialogContent

## Table of contents

### Properties

- [bbcode](types.IDialogContent.md#bbcode)
- [checkboxes](types.IDialogContent.md#checkboxes)
- [choices](types.IDialogContent.md#choices)
- [condition](types.IDialogContent.md#condition)
- [htmlFile](types.IDialogContent.md#htmlfile)
- [htmlText](types.IDialogContent.md#htmltext)
- [input](types.IDialogContent.md#input)
- [links](types.IDialogContent.md#links)
- [md](types.IDialogContent.md#md)
- [message](types.IDialogContent.md#message)
- [options](types.IDialogContent.md#options)
- [parameters](types.IDialogContent.md#parameters)
- [text](types.IDialogContent.md#text)

## Properties

### bbcode

• `Optional` **bbcode**: `string`

#### Defined in

../src/types/IDialog.ts:91

___

### checkboxes

• `Optional` **checkboxes**: [`ICheckbox`](actions.ICheckbox.md)[]

#### Defined in

../src/types/IDialog.ts:93

___

### choices

• `Optional` **choices**: [`ICheckbox`](actions.ICheckbox.md)[]

#### Defined in

../src/types/IDialog.ts:94

___

### condition

• `Optional` **condition**: [`Condition`](../modules/actions.md#condition)

#### Defined in

../src/types/IDialog.ts:110

___

### htmlFile

• `Optional` **htmlFile**: `string`

#### Defined in

../src/types/IDialog.ts:70

___

### htmlText

• `Optional` **htmlText**: `string`

displays a message as html.
NOTE: this will be inserted directy
into the dom so it must never be html from
an external source!

**`memberof`** IDialogContent

#### Defined in

../src/types/IDialog.ts:80

___

### input

• `Optional` **input**: [`IInput`](actions.IInput.md)[]

#### Defined in

../src/types/IDialog.ts:95

___

### links

• `Optional` **links**: [`ILink`](actions.ILink.md)[]

list of clickable entries that don't (necessarily) cause the dialog to close

#### Defined in

../src/types/IDialog.ts:99

___

### md

• `Optional` **md**: `string`

#### Defined in

../src/types/IDialog.ts:92

___

### message

• `Optional` **message**: `string`

regular text. This will be put into a scrollable, selectable textbox.
Whether the text wraps or not is determined by options.wrap

#### Defined in

../src/types/IDialog.ts:90

___

### options

• `Optional` **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bbcodeContext?` | `IBBCodeContext` |
| `hideMessage?` | `boolean` |
| `linksAsButtons?` | `boolean` |
| `translated?` | `boolean` |
| `wrap?` | `boolean` |

#### Defined in

../src/types/IDialog.ts:101

___

### parameters

• `Optional` **parameters**: `any`

#### Defined in

../src/types/IDialog.ts:100

___

### text

• `Optional` **text**: `string`

regular text. This will be wrapped, not selectable for the user,
not scrollable and not maintain any kind of predefined linebreaks.

#### Defined in

../src/types/IDialog.ts:85
