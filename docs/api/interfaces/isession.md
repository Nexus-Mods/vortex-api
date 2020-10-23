**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ISession

# Interface: ISession

"ephemeral" session state.
This state is generated at startup and forgotten at application exit

**`export`** 

**`interface`** ISession

## Hierarchy

* **ISession**

## Index

### Properties

* [activity](isession.md#activity)
* [commandLine](isession.md#commandline)
* [displayGroups](isession.md#displaygroups)
* [extLoadFailures](isession.md#extloadfailures)
* [mainPage](isession.md#mainpage)
* [networkConnected](isession.md#networkconnected)
* [overlayOpen](isession.md#overlayopen)
* [progress](isession.md#progress)
* [secondaryPage](isession.md#secondarypage)
* [settingsPage](isession.md#settingspage)
* [toolsRunning](isession.md#toolsrunning)
* [uiBlockers](isession.md#uiblockers)
* [visibleDialog](isession.md#visibledialog)

## Properties

### activity

•  **activity**: { [id:string]: string;  }

*Defined in Work/vortex/src/types/IState.ts:100*

___

### commandLine

•  **commandLine**: [IParameters](iparameters.md)

*Defined in Work/vortex/src/types/IState.ts:107*

___

### displayGroups

•  **displayGroups**: { [id:string]: string;  }

*Defined in Work/vortex/src/types/IState.ts:95*

___

### extLoadFailures

•  **extLoadFailures**: { [extId:string]: [IExtensionLoadFailure](iextensionloadfailure.md)[];  }

*Defined in Work/vortex/src/types/IState.ts:103*

___

### mainPage

•  **mainPage**: string

*Defined in Work/vortex/src/types/IState.ts:98*

___

### networkConnected

•  **networkConnected**: boolean

*Defined in Work/vortex/src/types/IState.ts:106*

___

### overlayOpen

•  **overlayOpen**: boolean

*Defined in Work/vortex/src/types/IState.ts:96*

___

### progress

•  **progress**: { [group:string]: { [id:string]: [IProgress](iprogress.md);  };  }

*Defined in Work/vortex/src/types/IState.ts:101*

___

### secondaryPage

•  **secondaryPage**: string

*Defined in Work/vortex/src/types/IState.ts:99*

___

### settingsPage

•  **settingsPage**: string

*Defined in Work/vortex/src/types/IState.ts:102*

___

### toolsRunning

•  **toolsRunning**: { [exeId:string]: [IRunningTool](irunningtool.md);  }

*Defined in Work/vortex/src/types/IState.ts:104*

___

### uiBlockers

•  **uiBlockers**: { [id:string]: [IUIBlocker](iuiblocker.md);  }

*Defined in Work/vortex/src/types/IState.ts:105*

___

### visibleDialog

•  **visibleDialog**: string

*Defined in Work/vortex/src/types/IState.ts:97*
