**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IComponentState

# Interface: IComponentState

## Hierarchy

* **IComponentState**

## Index

### Properties

* [bottom](icomponentstate.md#bottom)
* [cachedValue](icomponentstate.md#cachedvalue)
* [calculatedValues](icomponentstate.md#calculatedvalues)
* [columnToggles](icomponentstate.md#columntoggles)
* [conditionResults](icomponentstate.md#conditionresults)
* [currentDialogId](icomponentstate.md#currentdialogid)
* [detailsOpen](icomponentstate.md#detailsopen)
* [dialogState](icomponentstate.md#dialogstate)
* [dropActive](icomponentstate.md#dropactive)
* [error](icomponentstate.md#error)
* [errorInfo](icomponentstate.md#errorinfo)
* [expand](icomponentstate.md#expand)
* [filtered](icomponentstate.md#filtered)
* [gameIconCache](icomponentstate.md#gameiconcache)
* [groupedRows](icomponentstate.md#groupedrows)
* [lastSelected](icomponentstate.md#lastselected)
* [multiRowActions](icomponentstate.md#multirowactions)
* [open](icomponentstate.md#open)
* [right](icomponentstate.md#right)
* [rowIdsDelayed](icomponentstate.md#rowidsdelayed)
* [rowState](icomponentstate.md#rowstate)
* [rowVisibility](icomponentstate.md#rowvisibility)
* [selectionStart](icomponentstate.md#selectionstart)
* [singleRowActions](icomponentstate.md#singlerowactions)
* [sortedRows](icomponentstate.md#sortedrows)
* [starter](icomponentstate.md#starter)

## Properties

### bottom

• `Optional` **bottom**: number

*Defined in Work/vortex/src/controls/ContextMenu.tsx:77*

___

### cachedValue

•  **cachedValue**: string

*Defined in Work/vortex/src/controls/FormInput.tsx:25*

___

### calculatedValues

• `Optional` **calculatedValues**: [ILookupCalculated](ilookupcalculated.md)

*Defined in Work/vortex/src/controls/Table.tsx:87*

___

### columnToggles

•  **columnToggles**: [ITableRowAction](itablerowaction.md)[]

*Defined in Work/vortex/src/controls/Table.tsx:96*

___

### conditionResults

•  **conditionResults**: [ConditionResults](../globals.md#conditionresults)

*Defined in Work/vortex/src/views/Dialog.tsx:76*

___

### currentDialogId

•  **currentDialogId**: string

*Defined in Work/vortex/src/views/Dialog.tsx:74*

___

### detailsOpen

•  **detailsOpen**: boolean

*Defined in Work/vortex/src/controls/Table.tsx:91*

___

### dialogState

•  **dialogState**: [IDialogContent](idialogcontent.md)

*Defined in Work/vortex/src/views/Dialog.tsx:75*

___

### dropActive

•  **dropActive**: [DropMode](../globals.md#dropmode)

*Defined in Work/vortex/src/controls/Dropzone.tsx:43*

___

### error

•  **error**: [Error](../classes/notsupportederror.md#error)

*Defined in Work/vortex/src/views/MainPageContainer.tsx:28*

___

### errorInfo

•  **errorInfo**: ErrorInfo

*Defined in Work/vortex/src/views/MainPageContainer.tsx:29*

___

### expand

•  **expand**: string

*Defined in Work/vortex/src/views/NotificationButton.tsx:30*

___

### filtered

•  **filtered**: [INotification](inotification.md)[]

*Defined in Work/vortex/src/views/NotificationButton.tsx:32*

___

### gameIconCache

•  **gameIconCache**: { [gameId:string]: { game: [IGameStored](igamestored.md) ; icon: string  };  }

*Defined in Work/vortex/src/views/QuickLauncher.tsx:58*

___

### groupedRows

•  **groupedRows**: Array\<{ count: number ; id: string ; rows: string[]  }>

*Defined in Work/vortex/src/controls/Table.tsx:90*

___

### lastSelected

• `Optional` **lastSelected**: { groupId: string ; rowId: string  }

*Defined in Work/vortex/src/controls/Table.tsx:85*

#### Type declaration:

Name | Type |
------ | ------ |
`groupId` | string |
`rowId` | string |

___

### multiRowActions

•  **multiRowActions**: [ITableRowAction](itablerowaction.md)[]

*Defined in Work/vortex/src/controls/Table.tsx:95*

___

### open

•  **open**: boolean

*Defined in Work/vortex/src/controls/More.tsx:34*

*Defined in Work/vortex/src/views/NotificationButton.tsx:31*

___

### right

• `Optional` **right**: number

*Defined in Work/vortex/src/controls/ContextMenu.tsx:76*

___

### rowIdsDelayed

•  **rowIdsDelayed**: string[]

*Defined in Work/vortex/src/controls/Table.tsx:92*

___

### rowState

•  **rowState**: { [id:string]: [IRowState](irowstate.md);  }

*Defined in Work/vortex/src/controls/Table.tsx:88*

___

### rowVisibility

•  **rowVisibility**: { [id:string]: boolean;  }

*Defined in Work/vortex/src/controls/Table.tsx:93*

___

### selectionStart

• `Optional` **selectionStart**: { groupId: string ; rowId: string  }

*Defined in Work/vortex/src/controls/Table.tsx:86*

#### Type declaration:

Name | Type |
------ | ------ |
`groupId` | string |
`rowId` | string |

___

### singleRowActions

•  **singleRowActions**: [ITableRowAction](itablerowaction.md)[]

*Defined in Work/vortex/src/controls/Table.tsx:94*

___

### sortedRows

•  **sortedRows**: string[]

*Defined in Work/vortex/src/controls/Table.tsx:89*

___

### starter

•  **starter**: [StarterInfo](../classes/starterinfo.md)

*Defined in Work/vortex/src/views/QuickLauncher.tsx:57*
