**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IActionProps

# Interface: IActionProps

## Hierarchy

* **IActionProps**

## Index

### Properties

* [action](iactionprops.md#action)
* [count](iactionprops.md#count)
* [isDefault](iactionprops.md#isdefault)
* [isDisabled](iactionprops.md#isdisabled)
* [onCollapseGroup](iactionprops.md#oncollapsegroup)
* [onDismiss](iactionprops.md#ondismiss)
* [onHide](iactionprops.md#onhide)
* [onHideDialog](iactionprops.md#onhidedialog)
* [onSetAttributeFilter](iactionprops.md#onsetattributefilter)
* [onSetAttributeSort](iactionprops.md#onsetattributesort)
* [onSetAttributeVisible](iactionprops.md#onsetattributevisible)
* [onSetCollapsedGroups](iactionprops.md#onsetcollapsedgroups)
* [onSetGroupingAttribute](iactionprops.md#onsetgroupingattribute)
* [onSetOpenMainPage](iactionprops.md#onsetopenmainpage)
* [onSetPage](iactionprops.md#onsetpage)
* [onSetTabsMinimized](iactionprops.md#onsettabsminimized)
* [onShow](iactionprops.md#onshow)
* [onShowDialog](iactionprops.md#onshowdialog)
* [onShowError](iactionprops.md#onshowerror)
* [onSuppress](iactionprops.md#onsuppress)
* [onTrigger](iactionprops.md#ontrigger)
* [onUnblockUI](iactionprops.md#onunblockui)
* [t](iactionprops.md#t)
* [title](iactionprops.md#title)

## Properties

### action

•  **action**: string

*Defined in Work/vortex/src/views/Dialog.tsx:32*

___

### count

•  **count**: number

*Defined in Work/vortex/src/views/Notification.tsx:16*

___

### isDefault

•  **isDefault**: boolean

*Defined in Work/vortex/src/views/Dialog.tsx:33*

___

### isDisabled

•  **isDisabled**: boolean

*Defined in Work/vortex/src/views/Dialog.tsx:34*

___

### onCollapseGroup

•  **onCollapseGroup**: (tableId: string, groupId: string, collapse: boolean) => void

*Defined in Work/vortex/src/controls/Table.tsx:72*

___

### onDismiss

•  **onDismiss**: (id: string) => void

*Defined in Work/vortex/src/views/Dialog.tsx:31*

*Defined in Work/vortex/src/views/NotificationButton.tsx:23*

___

### onHide

•  **onHide**: () => void

*Defined in Work/vortex/src/controls/Usage.tsx:23*

___

### onHideDialog

•  **onHideDialog**: () => void

*Defined in Work/vortex/src/views/MainWindow.tsx:88*

___

### onSetAttributeFilter

•  **onSetAttributeFilter**: (tableId: string, attributeId: string, filter: any) => void

*Defined in Work/vortex/src/controls/Table.tsx:70*

___

### onSetAttributeSort

•  **onSetAttributeSort**: (tableId: string, attributeId: string, direction: [SortDirection](../globals.md#sortdirection)) => void

*Defined in Work/vortex/src/controls/Table.tsx:69*

___

### onSetAttributeVisible

•  **onSetAttributeVisible**: (tableId: string, attributeId: string, visible: boolean) => void

*Defined in Work/vortex/src/controls/Table.tsx:68*

___

### onSetCollapsedGroups

•  **onSetCollapsedGroups**: (tableId: string, groupOptions: string[]) => void

*Defined in Work/vortex/src/controls/Table.tsx:73*

___

### onSetGroupingAttribute

•  **onSetGroupingAttribute**: (tableId: string, attributeId: string) => void

*Defined in Work/vortex/src/controls/Table.tsx:71*

___

### onSetOpenMainPage

•  **onSetOpenMainPage**: (page: string, secondary: boolean) => void

*Defined in Work/vortex/src/views/MainWindow.tsx:87*

___

### onSetPage

•  **onSetPage**: (page: string) => void

*Defined in Work/vortex/src/views/Settings.tsx:43*

___

### onSetTabsMinimized

•  **onSetTabsMinimized**: (minimized: boolean) => void

*Defined in Work/vortex/src/views/MainWindow.tsx:86*

___

### onShow

•  **onShow**: () => void

*Defined in Work/vortex/src/controls/Usage.tsx:22*

___

### onShowDialog

•  **onShowDialog**: (type: [DialogType](../globals.md#dialogtype), title: string, content: [IDialogContent](idialogcontent.md), actions: [DialogActions](../globals.md#dialogactions)) => Promise\<[IDialogResult](idialogresult.md)>

*Defined in Work/vortex/src/controls/Dropzone.tsx:36*

*Defined in Work/vortex/src/views/QuickLauncher.tsx:50*

___

### onShowError

•  **onShowError**: (message: string, details?: any, allowReport?: boolean) => void

*Defined in Work/vortex/src/views/QuickLauncher.tsx:49*

___

### onSuppress

•  **onSuppress**: (id: string) => void

*Defined in Work/vortex/src/views/NotificationButton.tsx:24*

___

### onTrigger

•  **onTrigger**: (actionTitle: string) => void

*Defined in Work/vortex/src/views/Notification.tsx:17*

___

### onUnblockUI

•  **onUnblockUI**: (id: string) => void

*Defined in Work/vortex/src/views/MainWindow.tsx:89*

___

### t

•  **t**: TFunction

*Defined in Work/vortex/src/views/Dialog.tsx:30*

*Defined in Work/vortex/src/views/Notification.tsx:14*

___

### title

•  **title**: string

*Defined in Work/vortex/src/views/Notification.tsx:15*
