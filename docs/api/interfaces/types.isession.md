[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / ISession

# Interface: ISession

[types](../modules/types.md).ISession

"ephemeral" session state.
This state is generated at startup and forgotten at application exit

**`export`**

**`interface`** ISession

## Table of contents

### Properties

- [activity](types.ISession.md#activity)
- [commandLine](types.ISession.md#commandline)
- [displayGroups](types.ISession.md#displaygroups)
- [extLoadFailures](types.ISession.md#extloadfailures)
- [mainPage](types.ISession.md#mainpage)
- [networkConnected](types.ISession.md#networkconnected)
- [overlayOpen](types.ISession.md#overlayopen)
- [progress](types.ISession.md#progress)
- [secondaryPage](types.ISession.md#secondarypage)
- [settingsPage](types.ISession.md#settingspage)
- [toolsRunning](types.ISession.md#toolsrunning)
- [uiBlockers](types.ISession.md#uiblockers)
- [visibleDialog](types.ISession.md#visibledialog)

## Properties

### activity

• **activity**: `Object`

#### Index signature

▪ [id: `string`]: `string`

#### Defined in

../src/types/IState.ts:101

___

### commandLine

• **commandLine**: `IParameters`

#### Defined in

../src/types/IState.ts:108

___

### displayGroups

• **displayGroups**: `Object`

#### Index signature

▪ [id: `string`]: `string`

#### Defined in

../src/types/IState.ts:96

___

### extLoadFailures

• **extLoadFailures**: `Object`

#### Index signature

▪ [extId: `string`]: [`IExtensionLoadFailure`](types.IExtensionLoadFailure.md)[]

#### Defined in

../src/types/IState.ts:104

___

### mainPage

• **mainPage**: `string`

#### Defined in

../src/types/IState.ts:99

___

### networkConnected

• **networkConnected**: `boolean`

#### Defined in

../src/types/IState.ts:107

___

### overlayOpen

• **overlayOpen**: `boolean`

#### Defined in

../src/types/IState.ts:97

___

### progress

• **progress**: `Object`

#### Index signature

▪ [group: `string`]: { [id: string]: [`IProgress`](types.IProgress.md);  }

#### Defined in

../src/types/IState.ts:102

___

### secondaryPage

• **secondaryPage**: `string`

#### Defined in

../src/types/IState.ts:100

___

### settingsPage

• **settingsPage**: `string`

#### Defined in

../src/types/IState.ts:103

___

### toolsRunning

• **toolsRunning**: `Object`

#### Index signature

▪ [exeId: `string`]: [`IRunningTool`](types.IRunningTool.md)

#### Defined in

../src/types/IState.ts:105

___

### uiBlockers

• **uiBlockers**: `Object`

#### Index signature

▪ [id: `string`]: [`IUIBlocker`](types.IUIBlocker.md)

#### Defined in

../src/types/IState.ts:106

___

### visibleDialog

• **visibleDialog**: `string`

#### Defined in

../src/types/IState.ts:98
