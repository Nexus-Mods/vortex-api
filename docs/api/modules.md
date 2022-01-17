[vortex_devel](README.md) / Exports

# vortex_devel

## Table of contents

### Namespaces

- [Promise](modules/Promise.md)
- [actions](modules/actions.md)
- [fs](modules/fs.md)
- [selectors](modules/selectors.md)
- [tooltip](modules/tooltip.md)
- [types](modules/types.md)
- [util](modules/util.md)

### Classes

- [ActionContextMenu](classes/ActionContextMenu.md)
- [ComponentEx](classes/ComponentEx.md)
- [DNDContainer](classes/DNDContainer.md)
- [Dashlet](classes/Dashlet.md)
- [Dropdown](classes/Dropdown.md)
- [DropdownButton](classes/DropdownButton.md)
- [EmptyPlaceholder](classes/EmptyPlaceholder.md)
- [FlexLayout](classes/FlexLayout.md)
- [FormCheckboxItem](classes/FormCheckboxItem.md)
- [FormFeedback](classes/FormFeedback.md)
- [FormPathItem](classes/FormPathItem.md)
- [FormTextItem](classes/FormTextItem.md)
- [Icon](classes/Icon.md)
- [MainPage](classes/MainPage.md)
- [Modal](classes/Modal.md)
- [OptionsFilter](classes/OptionsFilter.md)
- [Overlay](classes/Overlay.md)
- [OverlayTrigger](classes/OverlayTrigger.md)
- [PortalMenu](classes/PortalMenu.md)
- [ProgressBar](classes/ProgressBar.md)
- [Promise](classes/Promise.md)
- [PureComponentEx](classes/PureComponentEx.md)
- [SelectUpDown](classes/SelectUpDown.md)
- [TableDateTimeFilter](classes/TableDateTimeFilter.md)
- [TableNumericFilter](classes/TableNumericFilter.md)
- [TableTextFilter](classes/TableTextFilter.md)
- [Toggle](classes/Toggle.md)
- [ToolbarIcon](classes/ToolbarIcon.md)
- [VisibilityProxy](classes/VisibilityProxy.md)
- [Webview](classes/Webview.md)
- [ZoomableImage](classes/ZoomableImage.md)

### Interfaces

- [ITableRowAction](interfaces/ITableRowAction.md)

### Type aliases

- [ChangeDataHandler](modules.md#changedatahandler)

### Properties

- [ActionDropdown](modules.md#actiondropdown)
- [Advanced](modules.md#advanced)
- [Banner](modules.md#banner)
- [ContextMenu](modules.md#contextmenu)
- [Dropzone](modules.md#dropzone)
- [ErrorBoundary](modules.md#errorboundary)
- [FormInput](modules.md#forminput)
- [IconBar](modules.md#iconbar)
- [More](modules.md#more)
- [RadialProgress](modules.md#radialprogress)
- [Steps](modules.md#steps)
- [Table](modules.md#table)
- [TriStateCheckbox](modules.md#tristatecheckbox)
- [Usage](modules.md#usage)

### Variables

- [MainContext](modules.md#maincontext)

### Functions

- [DraggableList](modules.md#draggablelist)
- [Image](modules.md#image)
- [Spinner](modules.md#spinner)
- [Timer](modules.md#timer)
- [log](modules.md#log)
- [makeGetSelection](modules.md#makegetselection)

## Type aliases

### ChangeDataHandler

Ƭ **ChangeDataHandler**: (`rowId`: `string`, `attributeId`: `string`, `newValue`: `any`) => `void`

#### Type declaration

▸ (`rowId`, `attributeId`, `newValue`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `rowId` | `string` |
| `attributeId` | `string` |
| `newValue` | `any` |

##### Returns

`void`

#### Defined in

../src/controls/Table.tsx:35

## Properties

### ActionDropdown

• **ActionDropdown**: `ComponentClass`<`ExportType`, `any`\>

___

### Advanced

• **Advanced**: `ComponentType`<{}\>

___

### Banner

• **Banner**: `ComponentClass`<`any`, `any`\>

___

### ContextMenu

• **ContextMenu**: `ComponentClass`<`IContextMenuProps`, `any`\>

___

### Dropzone

• **Dropzone**: `ComponentClass`<`IBaseProps`, `any`\>

___

### ErrorBoundary

• **ErrorBoundary**: `any`

___

### FormInput

• **FormInput**: `ComponentClass`<`IProps`, `any`\>

___

### IconBar

• **IconBar**: `ComponentClass`<`ExportType`, `any`\>

___

### More

• **More**: `ComponentClass`<`IMoreProps`, `any`\>

___

### RadialProgress

• **RadialProgress**: `ComponentClass`<`IBaseProps`, `any`\>

___

### Steps

• **Steps**: `ISteps`

___

### Table

• **Table**: `ComponentType`<`IBaseProps` & `IExtensibleProps`\>

___

### TriStateCheckbox

• **TriStateCheckbox**: `any`

___

### Usage

• **Usage**: `ComponentClass`<`IUsageProps`, `any`\>

## Variables

### MainContext

• **MainContext**: `Context`<[`IComponentContext`](interfaces/types.IComponentContext.md)\>

#### Defined in

../src/views/MainWindow.tsx:97

## Functions

### DraggableList

▸ **DraggableList**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `IDraggableListProps` |

#### Returns

`Element`

#### Defined in

../src/controls/DraggableList.tsx:148

___

### Image

▸ **Image**(`props`): `JSX.Element`

image component that supports alternative images, using the first that renders
successfully

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `IImageProps` |

#### Returns

`JSX.Element`

#### Defined in

../src/controls/Image.tsx:18

___

### Spinner

▸ **Spinner**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ISpinnerProps` |

#### Returns

`Element`

#### Defined in

../src/controls/Spinner.tsx:10

___

### Timer

▸ **Timer**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ITimerProps` |

#### Returns

`Element`

#### Defined in

../src/controls/Timer.tsx:23

___

### log

▸ **log**(`level`, `message`, `metadata?`): `void`

log a message

**`export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | `LogLevel` | The log level of the message: 'debug', 'info' or 'error' |
| `message` | `string` | The text message. Should contain no variable data |
| `metadata?` | `any` | - |

#### Returns

`void`

#### Defined in

../src/util/log.ts:137

___

### makeGetSelection

▸ **makeGetSelection**(`tableId`): `GetSelection`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableId` | `string` |

#### Returns

`GetSelection`

#### Defined in

../src/controls/Table.tsx:1773
