[vortex_devel](README.md) / Exports

# vortex_devel

## Table of contents

### Namespaces

- [Promise](modules/promise.md)
- [actions](modules/actions.md)
- [fs](modules/fs.md)
- [selectors](modules/selectors.md)
- [tooltip](modules/tooltip.md)
- [types](modules/types.md)
- [util](modules/util.md)

### Classes

- [ActionContextMenu](classes/actioncontextmenu.md)
- [ComponentEx](classes/componentex.md)
- [DNDContainer](classes/dndcontainer.md)
- [Dashlet](classes/dashlet.md)
- [Dropdown](classes/dropdown.md)
- [DropdownButton](classes/dropdownbutton.md)
- [EmptyPlaceholder](classes/emptyplaceholder.md)
- [FlexLayout](classes/flexlayout.md)
- [FormCheckboxItem](classes/formcheckboxitem.md)
- [FormFeedback](classes/formfeedback.md)
- [FormPathItem](classes/formpathitem.md)
- [FormTextItem](classes/formtextitem.md)
- [Icon](classes/icon.md)
- [MainPage](classes/mainpage.md)
- [Modal](classes/modal.md)
- [OptionsFilter](classes/optionsfilter.md)
- [Overlay](classes/overlay.md)
- [OverlayTrigger](classes/overlaytrigger.md)
- [Promise](classes/promise.md)
- [PureComponentEx](classes/purecomponentex.md)
- [TableDateTimeFilter](classes/tabledatetimefilter.md)
- [TableNumericFilter](classes/tablenumericfilter.md)
- [TableTextFilter](classes/tabletextfilter.md)
- [Toggle](classes/toggle.md)
- [ToolbarIcon](classes/toolbaricon.md)
- [Webview](classes/webview.md)

### Interfaces

- [ITableRowAction](interfaces/itablerowaction.md)

### Type aliases

- [ChangeDataHandler](modules.md#changedatahandler)

### Properties

- [ActionDropdown](modules.md#actiondropdown)
- [Advanced](modules.md#advanced)
- [Banner](modules.md#banner)
- [ContextMenu](modules.md#contextmenu)
- [Dropzone](modules.md#dropzone)
- [FormInput](modules.md#forminput)
- [IconBar](modules.md#iconbar)
- [More](modules.md#more)
- [Steps](modules.md#steps)
- [Table](modules.md#table)
- [TriStateCheckbox](modules.md#tristatecheckbox)
- [Usage](modules.md#usage)

### Variables

- [MainContext](modules.md#maincontext)

### Functions

- [DraggableList](modules.md#draggablelist)
- [Spinner](modules.md#spinner)
- [log](modules.md#log)
- [makeGetSelection](modules.md#makegetselection)

## Type aliases

### ChangeDataHandler

Ƭ **ChangeDataHandler**: (`rowId`: *string*, `attributeId`: *string*, `newValue`: *any*) => *void*

#### Type declaration:

▸ (`rowId`: *string*, `attributeId`: *string*, `newValue`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`rowId` | *string* |
`attributeId` | *string* |
`newValue` | *any* |

**Returns:** *void*

Defined in: src/controls/Table.tsx:35

## Properties

### ActionDropdown

• **ActionDropdown**: *ComponentClass*<ExportType, any\>

___

### Advanced

• **Advanced**: *ConnectedComponent*<*typeof* Advanced, Pick<*ClassAttributes*<Advanced\> & IConnectedProps & *Partial*<WithTranslation\>, *i18n* \| *tReady* \| *t* \| *ref* \| *key*\>\>

___

### Banner

• **Banner**: *ComponentClass*<any, any\>

___

### ContextMenu

• **ContextMenu**: *ComponentClass*<IContextMenuProps, any\>

___

### Dropzone

• **Dropzone**: *ComponentClass*<IBaseProps, any\>

___

### FormInput

• **FormInput**: *ComponentClass*<IProps, any\>

___

### IconBar

• **IconBar**: *ComponentClass*<ExportType, any\>

___

### More

• **More**: *ComponentClass*<IMoreProps, any\>

___

### Steps

• **Steps**: *ISteps*

___

### Table

• **Table**: *ComponentClass*<IBaseProps & IExtensibleProps, any\>

___

### TriStateCheckbox

• **TriStateCheckbox**: *any*

___

### Usage

• **Usage**: *ComponentClass*<IUsageProps, any\>

## Variables

### MainContext

• `Const` **MainContext**: *Context*<{}\>

Defined in: src/views/MainWindow.tsx:95

## Functions

### DraggableList

▸ **DraggableList**(`props`: IDraggableListProps): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | IDraggableListProps |

**Returns:** *Element*

Defined in: src/controls/DraggableList.tsx:146

___

### Spinner

▸ **Spinner**(`props`: ISpinnerProps): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | ISpinnerProps |

**Returns:** *Element*

Defined in: src/controls/Spinner.tsx:10

___

### log

▸ **log**(`level`: LogLevel, `message`: *string*, `metadata?`: *any*): *void*

log a message

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`level` | LogLevel | The log level of the message: 'debug', 'info' or 'error'   |
`message` | *string* | The text message. Should contain no variable data   |
`metadata?` | *any* | - |

**Returns:** *void*

Defined in: src/util/log.ts:118

___

### makeGetSelection

▸ **makeGetSelection**(`tableId`: *string*): GetSelection

#### Parameters:

Name | Type |
:------ | :------ |
`tableId` | *string* |

**Returns:** GetSelection

Defined in: src/controls/Table.tsx:1663
