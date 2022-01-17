[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / ITableAttribute

# Interface: ITableAttribute<T\>

[types](../modules/types.md).ITableAttribute

declaration of an attribute of a table

**`export`**

**`interface`** IModAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Properties

- [description](types.ITableAttribute.md#description)
- [edit](types.ITableAttribute.md#edit)
- [filter](types.ITableAttribute.md#filter)
- [help](types.ITableAttribute.md#help)
- [icon](types.ITableAttribute.md#icon)
- [id](types.ITableAttribute.md#id)
- [isDefaultFilter](types.ITableAttribute.md#isdefaultfilter)
- [isDefaultSort](types.ITableAttribute.md#isdefaultsort)
- [isDefaultVisible](types.ITableAttribute.md#isdefaultvisible)
- [isExtensible](types.ITableAttribute.md#isextensible)
- [isGroupable](types.ITableAttribute.md#isgroupable)
- [isSortable](types.ITableAttribute.md#issortable)
- [isToggleable](types.ITableAttribute.md#istoggleable)
- [isVolatile](types.ITableAttribute.md#isvolatile)
- [name](types.ITableAttribute.md#name)
- [noShrink](types.ITableAttribute.md#noshrink)
- [placement](types.ITableAttribute.md#placement)
- [position](types.ITableAttribute.md#position)
- [supportsMultiple](types.ITableAttribute.md#supportsmultiple)

### Methods

- [calc](types.ITableAttribute.md#calc)
- [condition](types.ITableAttribute.md#condition)
- [cssClass](types.ITableAttribute.md#cssclass)
- [customRenderer](types.ITableAttribute.md#customrenderer)
- [externalData](types.ITableAttribute.md#externaldata)
- [groupName](types.ITableAttribute.md#groupname)
- [sortFunc](types.ITableAttribute.md#sortfunc)
- [sortFuncRaw](types.ITableAttribute.md#sortfuncraw)

## Properties

### description

• `Optional` **description**: `string` \| `ITString`

lengthier description of what the attribute represents
(currently unused but please provide one anyway)

#### Defined in

../src/types/ITableAttribute.ts:90

___

### edit

• **edit**: `Object`

describes how editing for this field should work. Only one out of "choices", "validate"
should be used

Please note that this only works if no customRenderer is set. Otherwise that renderer
will have to implement its own editing functionality

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `actions?` | `boolean` | Affects how choices are displayed if you have a choice attribute if true (or undefined) then we display a drop-down box where each item immediately triggers an action. If false, render a selection box |
| `inline?` | `boolean` | allow inline editing of this cell for attribute with "choices".  **`note`** This does not work as described if choices is undefined, boolean attributes for example       become read-only if this attribute is set and strings and dates don't get rendered       properly any more. |
| `max?` | `number` | maximum value, infinity by default |
| `min?` | `number` | minimum value, minus infinity by default |
| `choices?` | (`object`: `T`) => [`IEditChoice`](types.IEditChoice.md)[] | if set, this field is a drop-down selection with the choices returned by this function. Please note: the value returned by calc has to appear in the text-field of one of these   choices |
| `onChangeValue?` | (`objects`: `T` \| `T`[], `newValue`: `any`) => `void` | called when this attribute was changed for an object. The way editing is presented to the user (if you didn't specify a customRenderer) depends on the value type. Potentially "newValue" can be undefined which signals a "toggle" or "cycle to the next value"  If this attribute is undefined, the field is readonly |
| `placeholder?` | () => `string` | if set, this is called to determine the placeholder to be displayed when the input box is empty. Has no effect if this edit config doesn't generate an input box |
| `readOnly?` | (`object`: `any`) => `boolean` | if set, this function determines if the attribute is editable. If "edit" is an empty object, the attribute is readonly. If "edit" is non-empty and "readonly" is undefined, the attribute is editable.  **`note:`** This currently only affects controls in the sidebar, not the ones in the table |
| `validate?` | (`input`: `string`) => [`ValidationState`](../modules/types.md#validationstate) | if set, this field is a text field that validates its input |

#### Defined in

../src/types/ITableAttribute.ts:257

___

### filter

• `Optional` **filter**: [`ITableFilter`](types.ITableFilter.md)

if set, the table can be filtered by this attribute using the specified control

#### Defined in

../src/types/ITableAttribute.ts:136

___

### help

• `Optional` **help**: `string` \| `ITString`

optional help text regarding this field. This will only show up in the details pane, if there
is no custom renderer and only if a name is set (as otherwise the space for the help icon
doesn't exist)

#### Defined in

../src/types/ITableAttribute.ts:106

___

### icon

• `Optional` **icon**: `string`

icon for the attribute. This is currently only used for the toggle button if the column is
toggleable

#### Defined in

../src/types/ITableAttribute.ts:111

___

### id

• **id**: `string`

internal id of the attribute

#### Defined in

../src/types/ITableAttribute.ts:81

___

### isDefaultFilter

• `Optional` **isDefaultFilter**: `boolean`

if set, this attribute will be the one that gets focused when pressing ctrl+f
There can only be one of these and it should be a column that is visible by default.
And of course it has to be filterable
If more than one attribute has this flag the first one will be used.

#### Defined in

../src/types/ITableAttribute.ts:143

___

### isDefaultSort

• `Optional` **isDefaultSort**: `boolean`

if this is true and if the user hasn't changed column sorting yet, this column will be used
for sorting (ascending) as long as it's visible and no previous column had this flag set.

#### Defined in

../src/types/ITableAttribute.ts:153

___

### isDefaultVisible

• `Optional` **isDefaultVisible**: `boolean`

if true (default), the column is visible by default otherwise the user has to activate it
manually first

#### Defined in

../src/types/ITableAttribute.ts:148

___

### isExtensible

• `Optional` **isExtensible**: `boolean`

if true, the rendered control will be extensible with wrappers (see registerControlWrapper),
with a name that is generated from <tableid>-<columnid>

#### Defined in

../src/types/ITableAttribute.ts:173

___

### isGroupable

• `Optional` **isGroupable**: `boolean` \| (`object`: `T`, `t`: `TFunction`) => `string`

if true (or a function), the table can be grouped by this attribute.
if this is a function it will be called with the object to determine the value to use for
grouping, otherwise the output of calc is used. This function must be fast, unlike calc
the result from this is not cached (at this time)

#### Defined in

../src/types/ITableAttribute.ts:126

___

### isSortable

• `Optional` **isSortable**: `boolean`

if true, the table can be sorted by this attribute

#### Defined in

../src/types/ITableAttribute.ts:119

___

### isToggleable

• `Optional` **isToggleable**: `boolean`

if true the attribute can be disabled in the table

#### Defined in

../src/types/ITableAttribute.ts:115

___

### isVolatile

• `Optional` **isVolatile**: `boolean`

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

#### Defined in

../src/types/ITableAttribute.ts:168

___

### name

• `Optional` **name**: `string` \| `ITString`

user readable name for the attribute (appears in the header and potentially in tooltips)

#### Defined in

../src/types/ITableAttribute.ts:85

___

### noShrink

• `Optional` **noShrink**: `boolean`

Never shrink the column while scrolling, it can still grow though

#### Defined in

../src/types/ITableAttribute.ts:177

___

### placement

• **placement**: [`Placement`](../modules/types.md#placement)

specifies whether the attribute appears in the table, the details pane or both.
\note that "isToggleable" and "isSortable" have no effect on attributes that don't appear
in the table

#### Defined in

../src/types/ITableAttribute.ts:190

___

### position

• `Optional` **position**: `number`

If set, determins the order in which attributes are displayed (the order of columns if
placement is 'table' or vertical order in details).
Lower number means further left/further up respectively.
In the futuer users may be able to customize the column order at which point this
should be considered a default.
All attributes where this isn't set will default to 100 and be ordered according to how
attributes appear in code

#### Defined in

../src/types/ITableAttribute.ts:100

___

### supportsMultiple

• `Optional` **supportsMultiple**: `boolean`

does this attribute support displaying and editing multiple values? defaults to false.
If this is false the attribute is not displayed with multiple items selected. If this is true,
customRenderer receives an array of objects to display and onChangeValue receive an array of
rows to set the new value on

**`memberof`** ITableAttribute

#### Defined in

../src/types/ITableAttribute.ts:249

## Methods

### calc

▸ `Optional` **calc**(`object`, `t`): `any`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |
| `t` | `TFunction` |

#### Returns

`any`

#### Defined in

../src/types/ITableAttribute.ts:213

___

### condition

▸ `Optional` **condition**(): `boolean`

if specified, this is called to determine if the attribute is visible at all.
This can be used to hide attributes on game where they aren't supported.
This will only be evaluated when the table is created, when the user switches column visibility
manually or when the list of table columns programmatically changes but you can not use it
to dynamically hide columns _without_ changing any table props.

#### Returns

`boolean`

#### Defined in

../src/types/ITableAttribute.ts:239

___

### cssClass

▸ `Optional` **cssClass**(`object`, `enabled`): `string`

allows the attribute to add a css class to the table row.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |
| `enabled` | `boolean` |

#### Returns

`string`

#### Defined in

../src/types/ITableAttribute.ts:218

___

### customRenderer

▸ `Optional` **customRenderer**(`object`, `detailCell`, `t`, `props`): `Element`

if specified this function is used to render the value in the table instead of the usual cell
renderer. Please note that if you want caching or asynchronous calculation for this cell you'll
have to implement it yourself.
Also note that table cells using customRenderer will do more unnecessary rerenders than a
calc-based field so please use customRenderer only when necessary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` \| `T`[] |
| `detailCell` | `boolean` |
| `t` | `TFunction` |
| `props` | [`ICustomProps`](types.ICustomProps.md) |

#### Returns

`Element`

#### Defined in

../src/types/ITableAttribute.ts:198

___

### externalData

▸ `Optional` **externalData**(`onChanged`): `void`

when using external data (not part of the data passed to the table) in calc or customRenderer,
set this parameter.
This function gets called with a callback that then needs to be called whenever the external
data (any of it) changes to cause a rerender.

#### Parameters

| Name | Type |
| :------ | :------ |
| `onChanged` | () => `void` |

#### Returns

`void`

#### Defined in

../src/types/ITableAttribute.ts:184

___

### groupName

▸ `Optional` **groupName**(`value`): `string`

if set, the group name is going to be translated using this function before being displayed to
the user (this affects only the group headers, not filters)
You probably want to use this if you have a customRenderer on a column that is groupable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

../src/types/ITableAttribute.ts:132

___

### sortFunc

▸ `Optional` **sortFunc**(`lhs`, `rhs`, `locale`): `number`

custom function for sorting by this attribute. The parameters passed in (lhs and rhs) are
the output of calc (cached). Return <0 if lhs is smaller than rhs, >0 if it's bigger and
=0 if they are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | `any` |
| `rhs` | `any` |
| `locale` | `string` |

#### Returns

`number`

#### Defined in

../src/types/ITableAttribute.ts:225

___

### sortFuncRaw

▸ `Optional` **sortFuncRaw**(`lhs`, `rhs`, `locale`): `number`

custom function for sorting by this attribute. The parameters passed in (lhs and rhs) are
the objects to compare. Return <0 if lhs is smaller than rhs, >0 if it's bigger and
=0 if they are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | `T` |
| `rhs` | `T` |
| `locale` | `string` |

#### Returns

`number`

#### Defined in

../src/types/ITableAttribute.ts:231
