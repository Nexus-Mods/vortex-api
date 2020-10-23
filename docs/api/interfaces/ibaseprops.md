**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IBaseProps

# Interface: IBaseProps

## Hierarchy

* **IBaseProps**

## Index

### Properties

* [accept](ibaseprops.md#accept)
* [actions](ibaseprops.md#actions)
* [active](ibaseprops.md#active)
* [api](ibaseprops.md#api)
* [buttonType](ibaseprops.md#buttontype)
* [className](ibaseprops.md#classname)
* [clickAnywhere](ibaseprops.md#clickanywhere)
* [clickText](ibaseprops.md#clicktext)
* [clickable](ibaseprops.md#clickable)
* [collapse](ibaseprops.md#collapse)
* [container](ibaseprops.md#container)
* [cycleTime](ibaseprops.md#cycletime)
* [data](ibaseprops.md#data)
* [dataId](ibaseprops.md#dataid)
* [defaultSort](ibaseprops.md#defaultsort)
* [detailsTitle](ibaseprops.md#detailstitle)
* [dialogDefault](ibaseprops.md#dialogdefault)
* [dialogHint](ibaseprops.md#dialoghint)
* [domRef](ibaseprops.md#domref)
* [dragOverlay](ibaseprops.md#dragoverlay)
* [drop](ibaseprops.md#drop)
* [dropText](ibaseprops.md#droptext)
* [filter](ibaseprops.md#filter)
* [getBounds](ibaseprops.md#getbounds)
* [group](ibaseprops.md#group)
* [groupByIcon](ibaseprops.md#groupbyicon)
* [hasActions](ibaseprops.md#hasactions)
* [hide](ibaseprops.md#hide)
* [icon](ibaseprops.md#icon)
* [id](ibaseprops.md#id)
* [instanceId](ibaseprops.md#instanceid)
* [labelLeft](ibaseprops.md#labelleft)
* [labelRight](ibaseprops.md#labelright)
* [max](ibaseprops.md#max)
* [min](ibaseprops.md#min)
* [multiSelect](ibaseprops.md#multiselect)
* [now](ibaseprops.md#now)
* [onHideDialog](ibaseprops.md#onhidedialog)
* [orientation](ibaseprops.md#orientation)
* [page](ibaseprops.md#page)
* [pullRight](ibaseprops.md#pullright)
* [secondary](ibaseprops.md#secondary)
* [shouldUpdatePosition](ibaseprops.md#shouldupdateposition)
* [showAll](ibaseprops.md#showall)
* [showDetails](ibaseprops.md#showdetails)
* [showHeader](ibaseprops.md#showheader)
* [showPercentage](ibaseprops.md#showpercentage)
* [showTimeLeft](ibaseprops.md#showtimeleft)
* [slim](ibaseprops.md#slim)
* [split](ibaseprops.md#split)
* [style](ibaseprops.md#style)
* [t](ibaseprops.md#t)
* [tableId](ibaseprops.md#tableid)
* [tooltipPlacement](ibaseprops.md#tooltipplacement)
* [triggerRef](ibaseprops.md#triggerref)
* [visibleDialog](ibaseprops.md#visibledialog)

## Properties

### accept

•  **accept**: [DropType](../globals.md#droptype)[]

*Defined in Work/vortex/src/controls/Dropzone.tsx:22*

___

### actions

•  **actions**: [ITableRowAction](itablerowaction.md)[]

*Defined in Work/vortex/src/controls/Table.tsx:50*

___

### active

•  **active**: boolean

*Defined in Work/vortex/src/views/MainPageContainer.tsx:17*

___

### api

•  **api**: [IExtensionApi](iextensionapi.md)

*Defined in Work/vortex/src/views/MainWindow.tsx:55*

___

### buttonType

• `Optional` **buttonType**: [ButtonType](../globals.md#buttontype)

*Defined in Work/vortex/src/controls/IconBar.tsx:26*

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:23*

___

### className

• `Optional` **className**: string

*Defined in Work/vortex/src/controls/IconBar.tsx:22*

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:20*

*Defined in Work/vortex/src/views/MainPage.tsx:10*

*Defined in Work/vortex/src/controls/ProgressBar.tsx:5*

*Defined in Work/vortex/src/views/MainWindow.tsx:54*

___

### clickAnywhere

• `Optional` **clickAnywhere**: boolean

*Defined in Work/vortex/src/controls/IconBar.tsx:33*

___

### clickText

• `Optional` **clickText**: string

*Defined in Work/vortex/src/controls/Dropzone.tsx:24*

___

### clickable

• `Optional` **clickable**: boolean

*Defined in Work/vortex/src/controls/Dropzone.tsx:26*

___

### collapse

• `Optional` **collapse**: boolean \| \"force\"

*Defined in Work/vortex/src/controls/IconBar.tsx:28*

___

### container

• `Optional` **container**: Element

*Defined in Work/vortex/src/controls/Dropdown.tsx:7*

*Defined in Work/vortex/src/controls/DropdownButton.tsx:8*

___

### cycleTime

• `Optional` **cycleTime**: number

*Defined in Work/vortex/src/controls/Banner.tsx:18*

___

### data

•  **data**: { [rowId:string]: any;  }

*Defined in Work/vortex/src/controls/Table.tsx:46*

___

### dataId

• `Optional` **dataId**: number

*Defined in Work/vortex/src/controls/Table.tsx:49*

___

### defaultSort

• `Optional` **defaultSort**: string

*Defined in Work/vortex/src/controls/Table.tsx:53*

___

### detailsTitle

• `Optional` **detailsTitle**: string

*Defined in Work/vortex/src/controls/Table.tsx:51*

___

### dialogDefault

• `Optional` **dialogDefault**: string

*Defined in Work/vortex/src/controls/Dropzone.tsx:28*

___

### dialogHint

• `Optional` **dialogHint**: string

*Defined in Work/vortex/src/controls/Dropzone.tsx:27*

___

### domRef

• `Optional` **domRef**: (ref: HTMLElement) => void

*Defined in Work/vortex/src/views/MainPage.tsx:11*

___

### dragOverlay

• `Optional` **dragOverlay**: Element

*Defined in Work/vortex/src/controls/Dropzone.tsx:30*

___

### drop

•  **drop**: (type: [DropType](../globals.md#droptype), paths: string[]) => void

*Defined in Work/vortex/src/controls/Dropzone.tsx:21*

___

### dropText

• `Optional` **dropText**: string

*Defined in Work/vortex/src/controls/Dropzone.tsx:23*

___

### filter

• `Optional` **filter**: (action: [IActionDefinition](iactiondefinition.md)) => boolean

*Defined in Work/vortex/src/controls/IconBar.tsx:30*

___

### getBounds

•  **getBounds**: () => ClientRect

*Defined in Work/vortex/src/controls/Overlay.tsx:8*

*Defined in Work/vortex/src/controls/OverlayTrigger.tsx:8*

___

### group

• `Optional` **group**: string

*Defined in Work/vortex/src/controls/IconBar.tsx:23*

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:21*

*Defined in Work/vortex/src/controls/Banner.tsx:17*

___

### groupByIcon

• `Optional` **groupByIcon**: boolean

*Defined in Work/vortex/src/controls/IconBar.tsx:29*

___

### hasActions

• `Optional` **hasActions**: boolean

*Defined in Work/vortex/src/controls/Table.tsx:56*

___

### hide

•  **hide**: boolean

*Defined in Work/vortex/src/views/NotificationButton.tsx:15*

___

### icon

• `Optional` **icon**: string

*Defined in Work/vortex/src/controls/IconBar.tsx:31*

*Defined in Work/vortex/src/controls/Dropzone.tsx:25*

___

### id

• `Optional` **id**: string

*Defined in Work/vortex/src/views/MainPage.tsx:9*

*Defined in Work/vortex/src/views/NotificationButton.tsx:14*

___

### instanceId

• `Optional` **instanceId**: string \| string[]

*Defined in Work/vortex/src/controls/IconBar.tsx:24*

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:22*

___

### labelLeft

• `Optional` **labelLeft**: string

*Defined in Work/vortex/src/controls/ProgressBar.tsx:10*

___

### labelRight

• `Optional` **labelRight**: string

*Defined in Work/vortex/src/controls/ProgressBar.tsx:11*

___

### max

• `Optional` **max**: number

*Defined in Work/vortex/src/controls/ProgressBar.tsx:8*

___

### min

• `Optional` **min**: number

*Defined in Work/vortex/src/controls/ProgressBar.tsx:7*

___

### multiSelect

• `Optional` **multiSelect**: boolean

*Defined in Work/vortex/src/controls/Table.tsx:52*

___

### now

•  **now**: number

*Defined in Work/vortex/src/controls/ProgressBar.tsx:9*

___

### onHideDialog

•  **onHideDialog**: () => void

*Defined in Work/vortex/src/views/DialogContainer.tsx:16*

___

### orientation

• `Optional` **orientation**: \"vertical\" \| \"horizontal\"

*Defined in Work/vortex/src/controls/IconBar.tsx:27*

*Defined in Work/vortex/src/controls/Overlay.tsx:9*

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:24*

*Defined in Work/vortex/src/controls/OverlayTrigger.tsx:9*

___

### page

•  **page**: IMainPage

*Defined in Work/vortex/src/views/MainPageContainer.tsx:16*

___

### pullRight

• `Optional` **pullRight**: boolean

*Defined in Work/vortex/src/controls/IconBar.tsx:32*

___

### secondary

•  **secondary**: boolean

*Defined in Work/vortex/src/views/MainPageContainer.tsx:18*

___

### shouldUpdatePosition

• `Optional` **shouldUpdatePosition**: boolean

*Defined in Work/vortex/src/controls/Overlay.tsx:10*

*Defined in Work/vortex/src/controls/OverlayTrigger.tsx:10*

___

### showAll

• `Optional` **showAll**: boolean

*Defined in Work/vortex/src/controls/IconBar.tsx:34*

___

### showDetails

• `Optional` **showDetails**: boolean

*Defined in Work/vortex/src/controls/Table.tsx:55*

___

### showHeader

• `Optional` **showHeader**: boolean

*Defined in Work/vortex/src/controls/Table.tsx:54*

___

### showPercentage

• `Optional` **showPercentage**: boolean

*Defined in Work/vortex/src/controls/ProgressBar.tsx:12*

___

### showTimeLeft

• `Optional` **showTimeLeft**: boolean

*Defined in Work/vortex/src/controls/ProgressBar.tsx:13*

___

### slim

•  **slim**: boolean

*Defined in Work/vortex/src/views/MainFooter.tsx:7*

___

### split

• `Optional` **split**: boolean

*Defined in Work/vortex/src/controls/DropdownButton.tsx:7*

___

### style

• `Optional` **style**: CSSProperties

*Defined in Work/vortex/src/controls/Dropzone.tsx:29*

*Defined in Work/vortex/src/controls/ProgressBar.tsx:6*

___

### t

•  **t**: TFunction

*Defined in Work/vortex/src/controls/IconBar.tsx:35*

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:19*

*Defined in Work/vortex/src/views/QuickLauncher.tsx:30*

*Defined in Work/vortex/src/views/MainWindow.tsx:53*

___

### tableId

•  **tableId**: string

*Defined in Work/vortex/src/controls/Table.tsx:45*

___

### tooltipPlacement

• `Optional` **tooltipPlacement**: \"top\" \| \"right\" \| \"bottom\" \| \"left\"

*Defined in Work/vortex/src/controls/IconBar.tsx:25*

___

### triggerRef

• `Optional` **triggerRef**: (ref: HTMLElement) => void

*Defined in Work/vortex/src/controls/Overlay.tsx:7*

*Defined in Work/vortex/src/controls/OverlayTrigger.tsx:7*

___

### visibleDialog

•  **visibleDialog**: string

*Defined in Work/vortex/src/views/DialogContainer.tsx:15*
