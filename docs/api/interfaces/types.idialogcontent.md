[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / IDialogContent

# Interface: IDialogContent

[types](../modules/types.md).IDialogContent

## Table of contents

### Properties

- [bbcode](types.idialogcontent.md#bbcode)
- [checkboxes](types.idialogcontent.md#checkboxes)
- [choices](types.idialogcontent.md#choices)
- [condition](types.idialogcontent.md#condition)
- [htmlFile](types.idialogcontent.md#htmlfile)
- [htmlText](types.idialogcontent.md#htmltext)
- [input](types.idialogcontent.md#input)
- [links](types.idialogcontent.md#links)
- [message](types.idialogcontent.md#message)
- [options](types.idialogcontent.md#options)
- [parameters](types.idialogcontent.md#parameters)
- [text](types.idialogcontent.md#text)

## Properties

### bbcode

• `Optional` **bbcode**: *string*

Defined in: src/types/IDialog.ts:86

___

### checkboxes

• `Optional` **checkboxes**: [*ICheckbox*](actions.icheckbox.md)[]

Defined in: src/types/IDialog.ts:87

___

### choices

• `Optional` **choices**: [*ICheckbox*](actions.icheckbox.md)[]

Defined in: src/types/IDialog.ts:88

___

### condition

• `Optional` **condition**: [*Condition*](../modules/actions.md#condition)

Defined in: src/types/IDialog.ts:103

___

### htmlFile

• `Optional` **htmlFile**: *string*

Defined in: src/types/IDialog.ts:65

___

### htmlText

• `Optional` **htmlText**: *string*

displays a message as html.
NOTE: this will be inserted directy
into the dom so it must never be html from
an external source!

**`memberof`** IDialogContent

Defined in: src/types/IDialog.ts:75

___

### input

• `Optional` **input**: [*IInput*](actions.iinput.md)[]

Defined in: src/types/IDialog.ts:89

___

### links

• `Optional` **links**: [*ILink*](actions.ilink.md)[]

list of clickable entries that don't (necessarily) cause the dialog to close

Defined in: src/types/IDialog.ts:93

___

### message

• `Optional` **message**: *string*

regular text. This will be put into a scrollable, selectable textbox.
Whether the text wraps or not is determined by options.wrap

Defined in: src/types/IDialog.ts:85

___

### options

• `Optional` **options**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`bbcodeContext`? | IBBCodeContext |
`hideMessage`? | *boolean* |
`translated`? | *boolean* |
`wrap`? | *boolean* |

Defined in: src/types/IDialog.ts:95

___

### parameters

• `Optional` **parameters**: *any*

Defined in: src/types/IDialog.ts:94

___

### text

• `Optional` **text**: *string*

regular text. This will be wrapped, not selectable for the user,
not scrollable and not maintain any kind of predefined linebreaks.

Defined in: src/types/IDialog.ts:80
