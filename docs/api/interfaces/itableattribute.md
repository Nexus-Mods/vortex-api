**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ITableAttribute

# Interface: ITableAttribute\<T>

declaration of an attribute of a table

**`export`** 

**`interface`** IModAttribute

## Type parameters

Name | Default |
------ | ------ |
`T` | any |

## Hierarchy

* **ITableAttribute**

## Index

### Properties

* [calc](itableattribute.md#calc)
* [condition](itableattribute.md#condition)
* [customRenderer](itableattribute.md#customrenderer)
* [description](itableattribute.md#description)
* [edit](itableattribute.md#edit)
* [externalData](itableattribute.md#externaldata)
* [filter](itableattribute.md#filter)
* [help](itableattribute.md#help)
* [icon](itableattribute.md#icon)
* [id](itableattribute.md#id)
* [isDefaultSort](itableattribute.md#isdefaultsort)
* [isDefaultVisible](itableattribute.md#isdefaultvisible)
* [isGroupable](itableattribute.md#isgroupable)
* [isSortable](itableattribute.md#issortable)
* [isToggleable](itableattribute.md#istoggleable)
* [isVolatile](itableattribute.md#isvolatile)
* [name](itableattribute.md#name)
* [noShrink](itableattribute.md#noshrink)
* [placement](itableattribute.md#placement)
* [position](itableattribute.md#position)
* [sortFunc](itableattribute.md#sortfunc)
* [sortFuncRaw](itableattribute.md#sortfuncraw)
* [supportsMultiple](itableattribute.md#supportsmultiple)

## Properties

### calc

• `Optional` **calc**: (object: T, t: TFunction) => any \| Promise\<any>

*Defined in Work/vortex/src/types/ITableAttribute.ts:165*

determine the display value for this attribute. This is used for display if customRenderer is
not specified. It's also used for sorting the table so unless isSortable is false and a
customRenderer is used you have to provide a calc function.
Please return "appropriate" types, that is: standard types like string, boolean, number, Date
and from those the one that most closely models what the data contains (i.e. if the attribute
is a date return a Date object so that the Table can properly render and sort it according
to the locale)
\note: calc may return a Promise, the table will then update once the value is calculated
\note: The table will only automatically refresh and call "calc" if one of its props changes.
       This means that if you bind a variable to your calc function which is not part of
       the Table props the Table may appear glitchy as it won't update as necessary.

___

### condition

• `Optional` **condition**: () => boolean

*Defined in Work/vortex/src/types/ITableAttribute.ts:185*

if specified, this is called to determine if the attribute is visible at all.
This can be used to hide attributes on game where they aren't supported.
This will only be evaluated when the table is created, when the user switches column visibility
manually or when the list of table columns programmatically changes but you can not use it
to dynamically hide columns _without_ changing any table props.

___

### customRenderer

• `Optional` **customRenderer**: (object: T \| T[], detailCell: boolean, t: TFunction, props: [ICustomProps](icustomprops.md)) => Element

*Defined in Work/vortex/src/types/ITableAttribute.ts:150*

if specified this function is used to render the value in the table instead of the usual cell
renderer. Please note that if you want caching or asynchronous calculation for this cell you'll
have to implement it yourself.
Also note that table cells using customRenderer will do more unnecessary rerenders than a
calc-based field so please use customRenderer only when necessary.

___

### description

• `Optional` **description**: string \| [ITString](itstring.md)

*Defined in Work/vortex/src/types/ITableAttribute.ts:65*

lengthier description of what the attribute represents
(currently unused but please provide one anyway)

___

### edit

•  **edit**: { actions?: boolean ; choices?: () => [IEditChoice](ieditchoice.md)[] ; inline?: boolean ; onChangeValue?: (objects: T \| T[], newValue: any) => void ; placeholder?: () => string ; readOnly?: (object: any) => boolean ; validate?: (input: string) => [ValidationState](../globals.md#validationstate)  }

*Defined in Work/vortex/src/types/ITableAttribute.ts:203*

describes how editing for this field should work. Only one out of "choices", "validate"
should be used

Please note that this only works if no customRenderer is set. Otherwise that renderer
will have to implement its own editing functionality

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`actions?` | boolean | Affects how choices are displayed if you have a choice attribute if true (or undefined) then we display a drop-down box where each item immediately triggers an action. If false, render a selection box |
`choices?` | () => [IEditChoice](ieditchoice.md)[] | if set, this field is a drop-down selection with the choices returned by this function. Please note: the value returned by calc has to appear in the text-field of one of these   choices |
`inline?` | boolean | allow inline editing of this cell |
`onChangeValue?` | (objects: T \| T[], newValue: any) => void | called when this attribute was changed for an object. The way editing is presented to the user (if you didn't specify a customRenderer) depends on the value type. Potentially "newValue" can be undefined which signals a "toggle" or "cycle to the next value"  If this attribute is undefined, the field is readonly  |
`placeholder?` | () => string | if set, this is called to determine the placeholder to be displayed when the input box is empty. Has no effect if this edit config doesn't generate an input box |
`readOnly?` | (object: any) => boolean | if set, this function determines if the attribute is editable. If "edit" is an empty object, the attribute is readonly. If "edit" is non-empty and "readonly" is undefined, the attribute is editable. |
`validate?` | (input: string) => [ValidationState](../globals.md#validationstate) | if set, this field is a text field that validates its input |

___

### externalData

• `Optional` **externalData**: (onChanged: () => void) => void

*Defined in Work/vortex/src/types/ITableAttribute.ts:136*

when using external data (not part of the data passed to the table) in calc or customRenderer,
set this parameter.
This function gets called with a callback that then needs to be called whenever the external
data (any of it) changes to cause a rerender.

___

### filter

• `Optional` **filter**: [ITableFilter](itablefilter.md)

*Defined in Work/vortex/src/types/ITableAttribute.ts:100*

if set, the table can be filtered by this attribute using the specified control

___

### help

• `Optional` **help**: string \| [ITString](itstring.md)

*Defined in Work/vortex/src/types/ITableAttribute.ts:76*

optional help text regarding this field. This will only show up in the details pane, if there
is no custom renderer and only if a name is set (as otherwise the space for the help icon
doesn't exist)

___

### icon

• `Optional` **icon**: string

*Defined in Work/vortex/src/types/ITableAttribute.ts:81*

icon for the attribute. This is currently only used for the toggle button if the column is
toggleable

___

### id

•  **id**: string

*Defined in Work/vortex/src/types/ITableAttribute.ts:56*

internal id of the attribute

___

### isDefaultSort

• `Optional` **isDefaultSort**: boolean

*Defined in Work/vortex/src/types/ITableAttribute.ts:110*

if this is true and if the user hasn't changed column sorting yet, this column will be used
for sorting (ascending) as long as it's visible and no previous column had this flag set.

___

### isDefaultVisible

• `Optional` **isDefaultVisible**: boolean

*Defined in Work/vortex/src/types/ITableAttribute.ts:105*

if true (default), the column is visible by default otherwise the user has to activate it
manually first

___

### isGroupable

• `Optional` **isGroupable**: boolean \| (object: T, t: TFunction) => string

*Defined in Work/vortex/src/types/ITableAttribute.ts:96*

if true (or a function), the table can be grouped by this attribute.
if this is a function it will be called with the object to determine the value to use for
grouping, otherwise the output of calc is used. This function must be fast, unlike calc
the result from this is not cached (at this time)

___

### isSortable

• `Optional` **isSortable**: boolean

*Defined in Work/vortex/src/types/ITableAttribute.ts:89*

if true, the table can be sorted by this attribute

___

### isToggleable

• `Optional` **isToggleable**: boolean

*Defined in Work/vortex/src/types/ITableAttribute.ts:85*

if true the attribute can be disabled in the table

___

### isVolatile

• `Optional` **isVolatile**: boolean

*Defined in Work/vortex/src/types/ITableAttribute.ts:125*

TODO: Obsolete
if true, the calc-function for this attribute is called whenever table data is refreshed,
even if the corresponding row data didn't change.
Otherwise (default) the values for this attribute are only updated when the input data to the
row changes. This means you need this flag, if the value of the attribute may change without
the row data changing.
This is the case for example when your extension generates data in a separate object and then
only uses the row id to look up data from that object.
If you fail to set this flag when the rendered data isn't part of the table data
your attribute won't show up at all
You should make extra sure the calc-function is quick though. If it takes computation, you
may want to use a custom renderer with some manner of caching and debouncing.

___

### name

• `Optional` **name**: string \| [ITString](itstring.md)

*Defined in Work/vortex/src/types/ITableAttribute.ts:60*

user readable name for the attribute (appears in the header and potentially in tooltips)

___

### noShrink

• `Optional` **noShrink**: boolean

*Defined in Work/vortex/src/types/ITableAttribute.ts:129*

Never shrink the column while scrolling, it can still grow though

___

### placement

•  **placement**: [Placement](../globals.md#placement)

*Defined in Work/vortex/src/types/ITableAttribute.ts:142*

specifies whether the attribute appears in the table, the details pane or both.
\note that "isToggleable" and "isSortable" have no effect on attributes that don't appear
in the table

___

### position

• `Optional` **position**: number

*Defined in Work/vortex/src/types/ITableAttribute.ts:70*

position of the attribute within the table (at some point we may allow users to override
this at which point this will be the default)

___

### sortFunc

• `Optional` **sortFunc**: (lhs: any, rhs: any, locale: string) => number

*Defined in Work/vortex/src/types/ITableAttribute.ts:171*

custom function for sorting by this attribute. The parameters passed in (lhs and rhs) are
the output of calc (cached). Return <0 if lhs is smaller than rhs, >0 if it's bigger and
=0 if they are equal.

___

### sortFuncRaw

• `Optional` **sortFuncRaw**: (lhs: T, rhs: T, locale: string) => number

*Defined in Work/vortex/src/types/ITableAttribute.ts:177*

custom function for sorting by this attribute. The parameters passed in (lhs and rhs) are
the objects to compare. Return <0 if lhs is smaller than rhs, >0 if it's bigger and
=0 if they are equal.

___

### supportsMultiple

• `Optional` **supportsMultiple**: boolean

*Defined in Work/vortex/src/types/ITableAttribute.ts:195*

does this attribute support displaying and editing multiple values? defaults to false.
If this is false the attribute is not displayed with multiple items selected. If this is true,
customRenderer receives an array of objects to display and onChangeValue receive an array of
rows to set the new value on

**`memberof`** ITableAttribute
