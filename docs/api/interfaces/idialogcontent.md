**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IDialogContent

# Interface: IDialogContent

## Hierarchy

* **IDialogContent**

## Index

### Properties

* [bbcode](idialogcontent.md#bbcode)
* [checkboxes](idialogcontent.md#checkboxes)
* [choices](idialogcontent.md#choices)
* [condition](idialogcontent.md#condition)
* [htmlFile](idialogcontent.md#htmlfile)
* [htmlText](idialogcontent.md#htmltext)
* [input](idialogcontent.md#input)
* [links](idialogcontent.md#links)
* [message](idialogcontent.md#message)
* [options](idialogcontent.md#options)
* [parameters](idialogcontent.md#parameters)
* [text](idialogcontent.md#text)

## Properties

### bbcode

• `Optional` **bbcode**: string

*Defined in Work/vortex/src/types/IDialog.ts:86*

___

### checkboxes

• `Optional` **checkboxes**: [ICheckbox](icheckbox.md)[]

*Defined in Work/vortex/src/types/IDialog.ts:87*

___

### choices

• `Optional` **choices**: [ICheckbox](icheckbox.md)[]

*Defined in Work/vortex/src/types/IDialog.ts:88*

___

### condition

• `Optional` **condition**: [Condition](../globals.md#condition)

*Defined in Work/vortex/src/types/IDialog.ts:103*

___

### htmlFile

• `Optional` **htmlFile**: string

*Defined in Work/vortex/src/types/IDialog.ts:65*

___

### htmlText

• `Optional` **htmlText**: string

*Defined in Work/vortex/src/types/IDialog.ts:75*

displays a message as html.
NOTE: this will be inserted directy
into the dom so it must never be html from
an external source!

**`memberof`** IDialogContent

___

### input

• `Optional` **input**: [IInput](iinput.md)[]

*Defined in Work/vortex/src/types/IDialog.ts:89*

___

### links

• `Optional` **links**: [ILink](ilink.md)[]

*Defined in Work/vortex/src/types/IDialog.ts:93*

list of clickable entries that don't (necessarily) cause the dialog to close

___

### message

• `Optional` **message**: string

*Defined in Work/vortex/src/types/IDialog.ts:85*

regular text. This will be put into a scrollable, selectable textbox.
Whether the text wraps or not is determined by options.wrap

___

### options

• `Optional` **options**: { bbcodeContext?: [IBBCodeContext](ibbcodecontext.md) ; hideMessage?: boolean ; translated?: boolean ; wrap?: boolean  }

*Defined in Work/vortex/src/types/IDialog.ts:95*

#### Type declaration:

Name | Type |
------ | ------ |
`bbcodeContext?` | [IBBCodeContext](ibbcodecontext.md) |
`hideMessage?` | boolean |
`translated?` | boolean |
`wrap?` | boolean |

___

### parameters

• `Optional` **parameters**: any

*Defined in Work/vortex/src/types/IDialog.ts:94*

___

### text

• `Optional` **text**: string

*Defined in Work/vortex/src/types/IDialog.ts:80*

regular text. This will be wrapped, not selectable for the user,
not scrollable and not maintain any kind of predefined linebreaks.
