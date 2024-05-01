[vortex_devel](../README.md) / [Exports](../modules.md) / actions

# Namespace: actions

## Table of contents

### Interfaces

- [ICheckbox](../interfaces/actions.ICheckbox.md)
- [IConditionResult](../interfaces/actions.IConditionResult.md)
- [IControlBase](../interfaces/actions.IControlBase.md)
- [IDialog](../interfaces/actions.IDialog.md)
- [IDialogAction](../interfaces/actions.IDialogAction.md)
- [IDialogContent](../interfaces/actions.IDialogContent.md)
- [IDialogResult](../interfaces/actions.IDialogResult.md)
- [IDictionary](../interfaces/actions.IDictionary.md)
- [IEnableOptions](../interfaces/actions.IEnableOptions.md)
- [IInput](../interfaces/actions.IInput.md)
- [ILink](../interfaces/actions.ILink.md)

### Type aliases

- [Condition](actions.md#condition)
- [ConditionResults](actions.md#conditionresults)
- [DialogActions](actions.md#dialogactions)
- [DialogType](actions.md#dialogtype)

### Variables

- [addDialog](actions.md#adddialog)
- [addDiscoveredGame](actions.md#adddiscoveredgame)
- [addDiscoveredTool](actions.md#adddiscoveredtool)
- [addLocalDownload](actions.md#addlocaldownload)
- [addMod](actions.md#addmod)
- [addModRule](actions.md#addmodrule)
- [addMods](actions.md#addmods)
- [cacheModReference](actions.md#cachemodreference)
- [clearDialog](actions.md#cleardialog)
- [clearModRules](actions.md#clearmodrules)
- [clearUIBlocker](actions.md#clearuiblocker)
- [closeBrowser](actions.md#closebrowser)
- [collapseGroup](actions.md#collapsegroup)
- [completeMigration](actions.md#completemigration)
- [dismissDialog](actions.md#dismissdialog)
- [displayGroup](actions.md#displaygroup)
- [downloadProgress](actions.md#downloadprogress)
- [endDialog](actions.md#enddialog)
- [finalizingDownload](actions.md#finalizingdownload)
- [finalizingProgress](actions.md#finalizingprogress)
- [finishDownload](actions.md#finishdownload)
- [forgetExtension](actions.md#forgetextension)
- [forgetMod](actions.md#forgetmod)
- [initDownload](actions.md#initdownload)
- [loadCategories](actions.md#loadcategories)
- [mergeDownloadModInfo](actions.md#mergedownloadmodinfo)
- [pauseDownload](actions.md#pausedownload)
- [removeCategory](actions.md#removecategory)
- [removeDownload](actions.md#removedownload)
- [removeExtension](actions.md#removeextension)
- [removeMod](actions.md#removemod)
- [removeModRule](actions.md#removemodrule)
- [removeProfile](actions.md#removeprofile)
- [renameCategory](actions.md#renamecategory)
- [resetSuppression](actions.md#resetsuppression)
- [setActivator](actions.md#setactivator)
- [setAdvancedMode](actions.md#setadvancedmode)
- [setApplicationVersion](actions.md#setapplicationversion)
- [setAssociatedWithNXMURLs](actions.md#setassociatedwithnxmurls)
- [setAttributeFilter](actions.md#setattributefilter)
- [setAttributeSort](actions.md#setattributesort)
- [setAttributeVisible](actions.md#setattributevisible)
- [setAutoDeployment](actions.md#setautodeployment)
- [setAutoEnable](actions.md#setautoenable)
- [setAutoInstall](actions.md#setautoinstall)
- [setAutoStart](actions.md#setautostart)
- [setCategory](actions.md#setcategory)
- [setCategoryOrder](actions.md#setcategoryorder)
- [setCleanupOnDeploy](actions.md#setcleanupondeploy)
- [setCollapsedGroups](actions.md#setcollapsedgroups)
- [setCommandLine](actions.md#setcommandline)
- [setCompatibleGames](actions.md#setcompatiblegames)
- [setConfirmPurge](actions.md#setconfirmpurge)
- [setCopyOnIFF](actions.md#setcopyoniff)
- [setCustomTitlebar](actions.md#setcustomtitlebar)
- [setDeploymentNecessary](actions.md#setdeploymentnecessary)
- [setDesktopNotifications](actions.md#setdesktopnotifications)
- [setDialogState](actions.md#setdialogstate)
- [setDialogVisible](actions.md#setdialogvisible)
- [setDownloadFilePath](actions.md#setdownloadfilepath)
- [setDownloadHash](actions.md#setdownloadhash)
- [setDownloadHashByFile](actions.md#setdownloadhashbyfile)
- [setDownloadInstalled](actions.md#setdownloadinstalled)
- [setDownloadInterrupted](actions.md#setdownloadinterrupted)
- [setDownloadModInfo](actions.md#setdownloadmodinfo)
- [setDownloadPath](actions.md#setdownloadpath)
- [setDownloadPausable](actions.md#setdownloadpausable)
- [setDownloadSpeed](actions.md#setdownloadspeed)
- [setDownloadSpeeds](actions.md#setdownloadspeeds)
- [setDownloadTime](actions.md#setdownloadtime)
- [setExtensionEnabled](actions.md#setextensionenabled)
- [setExtensionEndorsed](actions.md#setextensionendorsed)
- [setExtensionLoadFailures](actions.md#setextensionloadfailures)
- [setExtensionVersion](actions.md#setextensionversion)
- [setFBLoadOrder](actions.md#setfbloadorder)
- [setFBLoadOrderEntry](actions.md#setfbloadorderentry)
- [setFeature](actions.md#setfeature)
- [setFileOverride](actions.md#setfileoverride)
- [setForegroundDL](actions.md#setforegrounddl)
- [setGameHidden](actions.md#setgamehidden)
- [setGameParameters](actions.md#setgameparameters)
- [setGamePath](actions.md#setgamepath)
- [setGameSearchPaths](actions.md#setgamesearchpaths)
- [setGroupingAttribute](actions.md#setgroupingattribute)
- [setHideTopLevelCategory](actions.md#sethidetoplevelcategory)
- [setINITweakEnabled](actions.md#setinitweakenabled)
- [setInstallPath](actions.md#setinstallpath)
- [setInstallerDataPath](actions.md#setinstallerdatapath)
- [setInstanceId](actions.md#setinstanceid)
- [setLanguage](actions.md#setlanguage)
- [setLoadOrder](actions.md#setloadorder)
- [setLoadOrderEntry](actions.md#setloadorderentry)
- [setMaxBandwidth](actions.md#setmaxbandwidth)
- [setMaxDownloads](actions.md#setmaxdownloads)
- [setMaximized](actions.md#setmaximized)
- [setModArchiveId](actions.md#setmodarchiveid)
- [setModAttribute](actions.md#setmodattribute)
- [setModAttributes](actions.md#setmodattributes)
- [setModEnabled](actions.md#setmodenabled)
- [setModInstallationPath](actions.md#setmodinstallationpath)
- [setModState](actions.md#setmodstate)
- [setModType](actions.md#setmodtype)
- [setNetworkConnected](actions.md#setnetworkconnected)
- [setNextProfile](actions.md#setnextprofile)
- [setOpenMainPage](actions.md#setopenmainpage)
- [setPickerLayout](actions.md#setpickerlayout)
- [setProfile](actions.md#setprofile)
- [setProfileActivated](actions.md#setprofileactivated)
- [setProfilesVisible](actions.md#setprofilesvisible)
- [setProgress](actions.md#setprogress)
- [setRelativeTimes](actions.md#setrelativetimes)
- [setSettingsPage](actions.md#setsettingspage)
- [setShowDLDropzone](actions.md#setshowdldropzone)
- [setShowDLGraph](actions.md#setshowdlgraph)
- [setShowModDropzone](actions.md#setshowmoddropzone)
- [setStartMinimized](actions.md#setstartminimized)
- [setStateVersion](actions.md#setstateversion)
- [setTabsMinimized](actions.md#settabsminimized)
- [setToolPid](actions.md#settoolpid)
- [setToolRunning](actions.md#settoolrunning)
- [setToolStopped](actions.md#settoolstopped)
- [setToolVisible](actions.md#settoolvisible)
- [setUIBlocker](actions.md#setuiblocker)
- [setUpdateChannel](actions.md#setupdatechannel)
- [setUserAPIKey](actions.md#setuserapikey)
- [setWarnedAdmin](actions.md#setwarnedadmin)
- [setWindowPosition](actions.md#setwindowposition)
- [setWindowSize](actions.md#setwindowsize)
- [setZoomFactor](actions.md#setzoomfactor)
- [showUsageInstruction](actions.md#showusageinstruction)
- [startActivity](actions.md#startactivity)
- [startDialog](actions.md#startdialog)
- [startDownload](actions.md#startdownload)
- [startNotification](actions.md#startnotification)
- [stopActivity](actions.md#stopactivity)
- [stopNotification](actions.md#stopnotification)
- [suppressNotification](actions.md#suppressnotification)
- [updateCategories](actions.md#updatecategories)
- [updateNotification](actions.md#updatenotification)
- [willRemoveProfile](actions.md#willremoveprofile)

### Functions

- [addNotification](actions.md#addnotification)
- [closeDialog](actions.md#closedialog)
- [dismissNotification](actions.md#dismissnotification)
- [fireNotificationAction](actions.md#firenotificationaction)
- [setModsEnabled](actions.md#setmodsenabled)
- [setupNotificationSuppression](actions.md#setupnotificationsuppression)
- [showDialog](actions.md#showdialog)
- [showURL](actions.md#showurl)
- [triggerDialogLink](actions.md#triggerdialoglink)

## Type aliases

### Condition

Ƭ **Condition**: (`content`: [`IDialogContent`](../interfaces/actions.IDialogContent.md)) => [`ConditionResults`](actions.md#conditionresults)

#### Type declaration

▸ (`content`): [`ConditionResults`](actions.md#conditionresults)

##### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`IDialogContent`](../interfaces/actions.IDialogContent.md) |

##### Returns

[`ConditionResults`](actions.md#conditionresults)

#### Defined in

../src/types/IDialog.ts:30

___

### ConditionResults

Ƭ **ConditionResults**: [`IConditionResult`](../interfaces/actions.IConditionResult.md)[]

#### Defined in

../src/types/IDialog.ts:26

___

### DialogActions

Ƭ **DialogActions**: [`IDialogAction`](../interfaces/actions.IDialogAction.md)[]

#### Defined in

../src/types/IDialog.ts:28

___

### DialogType

Ƭ **DialogType**: ``"success"`` \| ``"info"`` \| ``"error"`` \| ``"question"``

#### Defined in

../src/types/IDialog.ts:3

## Variables

### addDialog

• **addDialog**: `ComplexActionCreator6`<`string`, `string`, `string`, [`IDialogContent`](../interfaces/actions.IDialogContent.md), `string`, `string`[], { `actions`: `string`[] ; `content`: [`IDialogContent`](../interfaces/actions.IDialogContent.md) ; `defaultAction`: `string` ; `id`: `string` ; `title`: `string` ; `type`: `string`  }, {}\>

show a modal dialog to the user

don't call this directly, use showDialog

#### Defined in

../src/actions/notifications.ts:39

___

### addDiscoveredGame

• **addDiscoveredGame**: `ComplexActionCreator2`<`string`, [`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md), { `id`: `string` ; `result`: [`IDiscoveryResult`](../interfaces/types.IDiscoveryResult.md)  }, {}\>

add info about a discovered game

#### Defined in

../src/extensions/gamemode_management/actions/settings.ts:13

___

### addDiscoveredTool

• **addDiscoveredTool**: `ComplexActionCreator4`<`string`, `string`, [`IDiscoveredTool`](../interfaces/types.IDiscoveredTool.md), `boolean`, { `gameId`: `string` ; `manual`: `boolean` ; `result`: [`IDiscoveredTool`](../interfaces/types.IDiscoveredTool.md) ; `toolId`: `string`  }, {}\>

add info about a discovered tool

#### Defined in

../src/extensions/gamemode_management/actions/settings.ts:26

___

### addLocalDownload

• **addLocalDownload**: `ComplexActionCreator4`<`string`, `string`, `string`, `number`, { `fileSize`: `number` ; `game`: `string` ; `id`: `string` ; `localPath`: `string`  }, {}\>

add a file that has been found on disk but where we weren't involved
in the download.

#### Defined in

../src/extensions/download_management/actions/state.ts:94

___

### addMod

• **addMod**: `ComplexActionCreator2`<`string`, [`IMod`](../interfaces/types.IMod.md), { `gameId`: `string` ; `mod`: [`IMod`](../interfaces/types.IMod.md)  }, {}\>

#### Defined in

../src/extensions/mod_management/actions/mods.ts:7

___

### addModRule

• **addModRule**: `ComplexActionCreator3`<`string`, `string`, [`IModRule`](../interfaces/types.IModRule.md), { `gameId`: `string` ; `modId`: `string` ; `rule`: [`IModRule`](../interfaces/types.IModRule.md)  }, {}\>

add a dependency rule for this mod

#### Defined in

../src/extensions/mod_management/actions/mods.ts:59

___

### addMods

• **addMods**: `ComplexActionCreator2`<`string`, [`IMod`](../interfaces/types.IMod.md)[], { `gameId`: `string` ; `mods`: [`IMod`](../interfaces/types.IMod.md)[]  }, {}\>

#### Defined in

../src/extensions/mod_management/actions/mods.ts:10

___

### cacheModReference

• **cacheModReference**: `ComplexActionCreator4`<`string`, `string`, [`IModReference`](../interfaces/types.IModReference.md), `string`, { `gameId`: `string` ; `modId`: `string` ; `refModId`: `string` ; `reference`: [`IModReference`](../interfaces/types.IModReference.md)  }, {}\>

store the mod id for a resolved rule, so we can resolve it quicker and more
reliably in the future

#### Defined in

../src/extensions/mod_management/actions/mods.ts:72

___

### clearDialog

• **clearDialog**: `EmptyActionCreator`

#### Defined in

../src/extensions/installer_fomod/actions/installerUI.ts:10

___

### clearModRules

• **clearModRules**: `ComplexActionCreator2`<`string`, `string`, { `gameId`: `string` ; `modId`: `string`  }, {}\>

#### Defined in

../src/extensions/mod_management/actions/mods.ts:53

___

### clearUIBlocker

• **clearUIBlocker**: `ComplexActionCreator1`<`string`, `string`, {}\>

#### Defined in

../src/actions/session.ts:56

___

### closeBrowser

• **closeBrowser**: `EmptyActionCreator`

#### Defined in

../src/extensions/browser/actions.ts:14

___

### collapseGroup

• **collapseGroup**: `ComplexActionCreator3`<`string`, `string`, `boolean`, { `collapse`: `boolean` ; `groupId`: `string` ; `tableId`: `string`  }, {}\>

#### Defined in

../src/actions/tables.ts:21

___

### completeMigration

• **completeMigration**: `ComplexActionCreator1`<`any`, `any`, {}\>

#### Defined in

../src/actions/app.ts:26

___

### dismissDialog

• **dismissDialog**: `ComplexActionCreator1`<`any`, `any`, {}\>

dismiss the dialog being displayed

don't call this directly especially when you used "showDialog" to create the dialog or
you leak (a tiny amount of) memory and the action callbacks aren't called.
Use closeDialog instead

#### Defined in

../src/actions/notifications.ts:52

___

### displayGroup

• **displayGroup**: `ComplexActionCreator2`<`string`, `string`, { `groupId`: `string` ; `itemId`: `string`  }, {}\>

action to choose which item in a group to display (all other items in the
group will be hidden). the itemId can be undefined to hide them all.

#### Defined in

../src/actions/session.ts:15

___

### downloadProgress

• **downloadProgress**: `ComplexActionCreator5`<`string`, `number`, `number`, `IChunk`[], `string`[], { `chunks`: `IChunk`[] ; `id`: `string` ; `received`: `number` ; `total`: `number` ; `urls`: `string`[]  }, {}\>

set download progress (in percent)

#### Defined in

../src/extensions/download_management/actions/state.ts:21

___

### endDialog

• **endDialog**: `EmptyActionCreator`

#### Defined in

../src/extensions/installer_fomod/actions/installerUI.ts:8

___

### finalizingDownload

• **finalizingDownload**: `ComplexActionCreator1`<`string`, { `id`: `string`  }, {}\>

mark download as finalizing, meaning the file has been downloaded fully,
during this phase checksums are calculated for example

#### Defined in

../src/extensions/download_management/actions/state.ts:50

___

### finalizingProgress

• **finalizingProgress**: `ComplexActionCreator2`<`string`, `number`, { `id`: `string` ; `progress`: `number`  }, {}\>

#### Defined in

../src/extensions/download_management/actions/state.ts:25

___

### finishDownload

• **finishDownload**: `ComplexActionCreator3`<`string`, ``"finished"`` \| ``"failed"`` \| ``"redirect"``, `any`, { `failCause`: `any` ; `id`: `string` ; `state`: ``"finished"`` \| ``"failed"`` \| ``"redirect"``  }, {}\>

mark download as finished

#### Defined in

../src/extensions/download_management/actions/state.ts:56

___

### forgetExtension

• **forgetExtension**: `ComplexActionCreator1`<`any`, `any`, {}\>

#### Defined in

../src/actions/app.ts:24

___

### forgetMod

• **forgetMod**: `ComplexActionCreator2`<`string`, `string`, { `modId`: `string` ; `profileId`: `string`  }, {}\>

#### Defined in

../src/extensions/profile_management/actions/profiles.ts:25

___

### initDownload

• **initDownload**: `ComplexActionCreator4`<`string`, `string`[], [`IDictionary`](../interfaces/actions.IDictionary.md), `string`[], { `games`: `string`[] ; `id`: `string` ; `modInfo`: [`IDictionary`](../interfaces/actions.IDictionary.md) ; `urls`: `string`[]  }, {}\>

initialize a download (it may not be started immediately)

#### Defined in

../src/extensions/download_management/actions/state.ts:13

___

### loadCategories

• **loadCategories**: `ComplexActionCreator2`<`string`, `ICategoryDictionary`, { `gameCategories`: `ICategoryDictionary` ; `gameId`: `string`  }, {}\>

#### Defined in

../src/extensions/category_management/actions/category.ts:6

___

### mergeDownloadModInfo

• **mergeDownloadModInfo**: `ComplexActionCreator2`<`string`, `any`, { `id`: `string` ; `value`: `any`  }, {}\>

#### Defined in

../src/extensions/download_management/actions/state.ts:98

___

### pauseDownload

• **pauseDownload**: `ComplexActionCreator3`<`string`, `boolean`, `IChunk`[], { `chunks`: `IChunk`[] ; `id`: `string` ; `paused`: `boolean`  }, {}\>

mark download paused

#### Defined in

../src/extensions/download_management/actions/state.ts:69

___

### removeCategory

• **removeCategory**: `ComplexActionCreator2`<`string`, `string`, { `gameId`: `string` ; `id`: `string`  }, {}\>

#### Defined in

../src/extensions/category_management/actions/category.ts:13

___

### removeDownload

• **removeDownload**: `ComplexActionCreator1`<`string`, { `id`: `string`  }, {}\>

remove a download (and associated file if any)

#### Defined in

../src/extensions/download_management/actions/state.ts:78

___

### removeExtension

• **removeExtension**: `ComplexActionCreator1`<`any`, `any`, {}\>

#### Defined in

../src/actions/app.ts:22

___

### removeMod

• **removeMod**: `ComplexActionCreator2`<`string`, `string`, { `gameId`: `string` ; `modId`: `string`  }, {}\>

#### Defined in

../src/extensions/mod_management/actions/mods.ts:13

___

### removeModRule

• **removeModRule**: `ComplexActionCreator3`<`string`, `string`, [`IModRule`](../interfaces/types.IModRule.md), { `gameId`: `string` ; `modId`: `string` ; `rule`: [`IModRule`](../interfaces/types.IModRule.md)  }, {}\>

remove a dependency rule from this mod

#### Defined in

../src/extensions/mod_management/actions/mods.ts:65

___

### removeProfile

• **removeProfile**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/profile_management/actions/profiles.ts:14

___

### renameCategory

• **renameCategory**: `ComplexActionCreator3`<`string`, `string`, `string`, { `categoryId`: `string` ; `gameId`: `string` ; `name`: `string`  }, {}\>

#### Defined in

../src/extensions/category_management/actions/category.ts:23

___

### resetSuppression

• **resetSuppression**: `ComplexActionCreator1`<`unknown`, `any`, {}\>

#### Defined in

../src/actions/notificationSettings.ts:9

___

### setActivator

• **setActivator**: `ComplexActionCreator2`<`string`, `string`, { `activatorId`: `string` ; `gameId`: `string`  }, {}\>

sets the activator to use for this game

#### Defined in

../src/extensions/mod_management/actions/settings.ts:14

___

### setAdvancedMode

• **setAdvancedMode**: `ComplexActionCreator1`<`boolean`, { `advanced`: `boolean`  }, {}\>

enable or disable advanced mode

#### Defined in

../src/extensions/settings_interface/actions/interface.ts:13

___

### setApplicationVersion

• **setApplicationVersion**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/actions/app.ts:10

___

### setAssociatedWithNXMURLs

• **setAssociatedWithNXMURLs**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/nexus_integration/actions/settings.ts:8

___

### setAttributeFilter

• **setAttributeFilter**: `ComplexActionCreator3`<`string`, `string`, `any`, { `attributeId`: `string` ; `filter`: `any` ; `tableId`: `string`  }, {}\>

#### Defined in

../src/actions/tables.ts:15

___

### setAttributeSort

• **setAttributeSort**: `ComplexActionCreator3`<`string`, `string`, [`SortDirection`](types.md#sortdirection), { `attributeId`: `string` ; `direction`: [`SortDirection`](types.md#sortdirection) ; `tableId`: `string`  }, {}\>

#### Defined in

../src/actions/tables.ts:10

___

### setAttributeVisible

• **setAttributeVisible**: `ComplexActionCreator3`<`string`, `string`, `boolean`, { `attributeId`: `string` ; `tableId`: `string` ; `visible`: `boolean`  }, {}\>

#### Defined in

../src/actions/tables.ts:7

___

### setAutoDeployment

• **setAutoDeployment**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/settings_interface/actions/automation.ts:5

___

### setAutoEnable

• **setAutoEnable**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/settings_interface/actions/automation.ts:7

___

### setAutoInstall

• **setAutoInstall**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/settings_interface/actions/automation.ts:6

___

### setAutoStart

• **setAutoStart**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/settings_interface/actions/automation.ts:8

___

### setCategory

• **setCategory**: `ComplexActionCreator3`<`string`, `string`, `ICategory`, { `category`: `ICategory` ; `gameId`: `string` ; `id`: `string`  }, {}\>

#### Defined in

../src/extensions/category_management/actions/category.ts:10

___

### setCategoryOrder

• **setCategoryOrder**: `ComplexActionCreator2`<`string`, `string`[], { `categoryIds`: `string`[] ; `gameId`: `string`  }, {}\>

#### Defined in

../src/extensions/category_management/actions/category.ts:16

___

### setCleanupOnDeploy

• **setCleanupOnDeploy**: `ComplexActionCreator1`<`boolean`, `boolean`, {}\>

#### Defined in

../src/extensions/mod_management/actions/settings.ts:23

___

### setCollapsedGroups

• **setCollapsedGroups**: `ComplexActionCreator2`<`string`, `string`[], { `groups`: `string`[] ; `tableId`: `string`  }, {}\>

#### Defined in

../src/actions/tables.ts:24

___

### setCommandLine

• **setCommandLine**: `ComplexActionCreator1`<`IParameters`, `IParameters`, {}\>

#### Defined in

../src/actions/session.ts:61

___

### setCompatibleGames

• **setCompatibleGames**: `ComplexActionCreator2`<`string`, `string`[], { `games`: `string`[] ; `id`: `string`  }, {}\>

#### Defined in

../src/extensions/download_management/actions/state.ts:110

___

### setConfirmPurge

• **setConfirmPurge**: `ComplexActionCreator1`<`boolean`, `boolean`, {}\>

#### Defined in

../src/extensions/mod_management/actions/settings.ts:20

___

### setCopyOnIFF

• **setCopyOnIFF**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/download_management/actions/settings.ts:9

___

### setCustomTitlebar

• **setCustomTitlebar**: `ComplexActionCreator1`<`any`, `any`, {}\>

#### Defined in

../src/actions/window.ts:30

___

### setDeploymentNecessary

• **setDeploymentNecessary**: `ComplexActionCreator2`<`string`, `boolean`, { `gameId`: `string` ; `required`: `boolean`  }, {}\>

#### Defined in

../src/extensions/mod_management/actions/deployment.ts:5

___

### setDesktopNotifications

• **setDesktopNotifications**: `ComplexActionCreator1`<`boolean`, `boolean`, {}\>

#### Defined in

../src/extensions/settings_interface/actions/interface.ts:19

___

### setDialogState

• **setDialogState**: `ComplexActionCreator1`<`IInstallerState`, `any`, {}\>

#### Defined in

../src/extensions/installer_fomod/actions/installerUI.ts:12

___

### setDialogVisible

• **setDialogVisible**: `ComplexActionCreator1`<`string`, { `dialogId`: `string`  }, {}\>

#### Defined in

../src/actions/session.ts:18

___

### setDownloadFilePath

• **setDownloadFilePath**: `ComplexActionCreator2`<`string`, `string`, { `filePath`: `string` ; `id`: `string`  }, {}\>

set/change the file path

#### Defined in

../src/extensions/download_management/actions/state.ts:31

___

### setDownloadHash

• **setDownloadHash**: `ComplexActionCreator2`<`string`, `string`, { `fileMD5`: `string` ; `id`: `string`  }, {}\>

#### Defined in

../src/extensions/download_management/actions/state.ts:60

___

### setDownloadHashByFile

• **setDownloadHashByFile**: `ComplexActionCreator3`<`string`, `string`, `number`, { `fileMD5`: `string` ; `fileName`: `string` ; `fileSize`: `number`  }, {}\>

#### Defined in

../src/extensions/download_management/actions/state.ts:63

___

### setDownloadInstalled

• **setDownloadInstalled**: `ComplexActionCreator3`<`string`, `string`, `string`, { `gameId`: `string` ; `id`: `string` ; `modId`: `string`  }, {}\>

#### Defined in

../src/extensions/download_management/actions/state.ts:104

___

### setDownloadInterrupted

• **setDownloadInterrupted**: `ComplexActionCreator2`<`string`, `number`, { `id`: `string` ; `realReceived`: `number`  }, {}\>

#### Defined in

../src/extensions/download_management/actions/state.ts:72

___

### setDownloadModInfo

• **setDownloadModInfo**: `ComplexActionCreator3`<`string`, `string`, `any`, { `id`: `string` ; `key`: `string` ; `value`: `any`  }, {}\>

#### Defined in

../src/extensions/download_management/actions/state.ts:101

___

### setDownloadPath

• **setDownloadPath**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/download_management/actions/settings.ts:6

___

### setDownloadPausable

• **setDownloadPausable**: `ComplexActionCreator2`<`string`, `boolean`, { `id`: `string` ; `pausable`: `boolean`  }, {}\>

mark the download as pausable or not

#### Defined in

../src/extensions/download_management/actions/state.ts:37

___

### setDownloadSpeed

• **setDownloadSpeed**: `ComplexActionCreator1`<`unknown`, `unknown`, { `forward`: `boolean` = false; `scope`: `string` = 'local' }\>

sets the current download speed in bytes/second

#### Defined in

../src/extensions/download_management/actions/state.ts:84

___

### setDownloadSpeeds

• **setDownloadSpeeds**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/download_management/actions/state.ts:87

___

### setDownloadTime

• **setDownloadTime**: `ComplexActionCreator2`<`string`, `number`, { `id`: `string` ; `time`: `number`  }, {}\>

#### Defined in

../src/extensions/download_management/actions/state.ts:107

___

### setExtensionEnabled

• **setExtensionEnabled**: `ComplexActionCreator2`<`string`, `boolean`, { `enabled`: `boolean` ; `extensionId`: `string`  }, {}\>

#### Defined in

../src/actions/app.ts:13

___

### setExtensionEndorsed

• **setExtensionEndorsed**: `ComplexActionCreator2`<`string`, `string`, { `endorsed`: `string` ; `extensionId`: `string`  }, {}\>

#### Defined in

../src/actions/app.ts:19

___

### setExtensionLoadFailures

• **setExtensionLoadFailures**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/actions/session.ts:48

___

### setExtensionVersion

• **setExtensionVersion**: `ComplexActionCreator2`<`string`, `string`, { `extensionId`: `string` ; `version`: `string`  }, {}\>

#### Defined in

../src/actions/app.ts:16

___

### setFBLoadOrder

• **setFBLoadOrder**: `any`

#### Defined in

../src/extensions/file_based_loadorder/actions/loadOrder.ts:10

___

### setFBLoadOrderEntry

• **setFBLoadOrderEntry**: `any`

#### Defined in

../src/extensions/file_based_loadorder/actions/loadOrder.ts:5

___

### setFeature

• **setFeature**: `ComplexActionCreator3`<`string`, `string`, `any`, { `featureId`: `string` ; `profileId`: `string` ; `value`: `any`  }, {}\>

#### Defined in

../src/extensions/profile_management/actions/profiles.ts:29

___

### setFileOverride

• **setFileOverride**: `ComplexActionCreator3`<`string`, `string`, `string`[], { `files`: `string`[] ; `gameId`: `string` ; `modId`: `string`  }, {}\>

set list of files that will always be provided by this mod, no matter the deployment order

#### Defined in

../src/extensions/mod_management/actions/mods.ts:84

___

### setForegroundDL

• **setForegroundDL**: `ComplexActionCreator1`<`boolean`, `boolean`, {}\>

#### Defined in

../src/extensions/settings_interface/actions/interface.ts:31

___

### setGameHidden

• **setGameHidden**: `ComplexActionCreator2`<`string`, `boolean`, { `gameId`: `string` ; `hidden`: `boolean`  }, {}\>

hide or unhide a game

#### Defined in

../src/extensions/gamemode_management/actions/settings.ts:47

___

### setGameParameters

• **setGameParameters**: `ComplexActionCreator2`<`string`, `any`, { `gameId`: `string` ; `parameters`: `any`  }, {}\>

change parameters for a game (i.e. call arguments, environment, ...)

#### Defined in

../src/extensions/gamemode_management/actions/settings.ts:41

___

### setGamePath

• **setGamePath**: `ComplexActionCreator2`<`string`, `string`, { `gameId`: `string` ; `gamePath`: `string`  }, {}\>

override the path of a game that's already been discovered

#### Defined in

../src/extensions/gamemode_management/actions/settings.ts:20

___

### setGameSearchPaths

• **setGameSearchPaths**: `ComplexActionCreator1`<`string`[], `string`[], {}\>

#### Defined in

../src/extensions/gamemode_management/actions/settings.ts:50

___

### setGroupingAttribute

• **setGroupingAttribute**: `ComplexActionCreator2`<`string`, `string`, { `attributeId`: `string` ; `tableId`: `string`  }, {}\>

#### Defined in

../src/actions/tables.ts:18

___

### setHideTopLevelCategory

• **setHideTopLevelCategory**: `ComplexActionCreator1`<`boolean`, { `hide`: `boolean`  }, {}\>

#### Defined in

../src/extensions/settings_interface/actions/interface.ts:22

___

### setINITweakEnabled

• **setINITweakEnabled**: `ComplexActionCreator4`<`string`, `string`, `string`, `boolean`, { `enabled`: `boolean` ; `gameId`: `string` ; `modId`: `string` ; `tweak`: `string`  }, {}\>

#### Defined in

../src/extensions/mod_management/actions/mods.ts:76

___

### setInstallPath

• **setInstallPath**: `ComplexActionCreator2`<`string`, `string`, { `gameId`: `string` ; `path`: `string`  }, {}\>

change the mod install path. Supports placeholders

#### Defined in

../src/extensions/mod_management/actions/settings.ts:8

___

### setInstallerDataPath

• **setInstallerDataPath**: `ComplexActionCreator1`<`string`, `any`, {}\>

#### Defined in

../src/extensions/installer_fomod/actions/installerUI.ts:15

___

### setInstanceId

• **setInstanceId**: `ComplexActionCreator1`<`any`, `any`, {}\>

#### Defined in

../src/actions/app.ts:28

___

### setLanguage

• **setLanguage**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

change the user interface language

#### Defined in

../src/extensions/settings_interface/actions/interface.ts:8

___

### setLoadOrder

• **setLoadOrder**: `ComplexActionCreator2`<`string`, `any`[], { `id`: `string` ; `order`: `any`[]  }, {}\>

generic action to store load orders for games. How it is to be interpreted
is up to the corresponding game support code.
the id will usually be the profile id for which the load order is to be stored, the items
in the order could be the ids of mods/plugins - in the order they should be loaded.

With most games we don't store the load order this way but instead directly synchronise
with the data/configuration file holding the load order.
Use this only if that isn't an option (e.g. with "7 days to die" there is no generic way
to store the load order, it's only stored in the form of mod names and it would be
impractical to redeploy every time the load order is changed)

#### Defined in

../src/actions/loadOrder.ts:15

___

### setLoadOrderEntry

• **setLoadOrderEntry**: `any`

#### Defined in

../src/extensions/mod_load_order/actions/loadOrder.ts:5

___

### setMaxBandwidth

• **setMaxBandwidth**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/download_management/actions/settings.ts:10

___

### setMaxDownloads

• **setMaxDownloads**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/download_management/actions/settings.ts:5

___

### setMaximized

• **setMaximized**: `ComplexActionCreator1`<`any`, `any`, {}\>

action to set maximized in the store
to avoid confusion: maximize maintains window frame and fills one screen,
fullscreen makes the window borderless + fill the screen

#### Defined in

../src/actions/window.ts:24

___

### setModArchiveId

• **setModArchiveId**: `ComplexActionCreator3`<`string`, `string`, `string`, { `archiveId`: `string` ; `gameId`: `string` ; `modId`: `string`  }, {}\>

#### Defined in

../src/extensions/mod_management/actions/mods.ts:16

___

### setModAttribute

• **setModAttribute**: `ComplexActionCreator4`<`string`, `string`, `string`, `any`, { `attribute`: `string` ; `gameId`: `string` ; `modId`: `string` ; `value`: `any`  }, {}\>

sets the value of an attribute on a mod

#### Defined in

../src/extensions/mod_management/actions/mods.ts:36

___

### setModAttributes

• **setModAttributes**: `ComplexActionCreator3`<`string`, `string`, { [attribute: string]: `any`;  }, { `attributes`: { [attribute: string]: `any`;  } ; `gameId`: `string` ; `modId`: `string`  }, {}\>

set multiple mod attributes at once

#### Defined in

../src/extensions/mod_management/actions/mods.ts:43

___

### setModEnabled

• **setModEnabled**: `ComplexActionCreator3`<`string`, `string`, `boolean`, { `enable`: `boolean` ; `modId`: `string` ; `profileId`: `string`  }, {}\>

enable or disable a mod in a profile

#### Defined in

../src/extensions/profile_management/actions/profiles.ts:21

___

### setModInstallationPath

• **setModInstallationPath**: `ComplexActionCreator3`<`string`, `string`, `string`, { `gameId`: `string` ; `installPath`: `string` ; `modId`: `string`  }, {}\>

sets the (final) installation path of the mod. This should be set as soon as
any data is written to disk so that it can be cleaned/removed in case of an error.
The actual path on disk may be a variation of this path during installation.

#### Defined in

../src/extensions/mod_management/actions/mods.ts:30

___

### setModState

• **setModState**: `ComplexActionCreator3`<`string`, `string`, `ModState`, { `gameId`: `string` ; `modId`: `string` ; `modState`: `ModState`  }, {}\>

sets the state of a mod (whether it's downloaded, installed, ...)

#### Defined in

../src/extensions/mod_management/actions/mods.ts:22

___

### setModType

• **setModType**: `ComplexActionCreator3`<`string`, `string`, `string`, { `gameId`: `string` ; `modId`: `string` ; `type`: `string`  }, {}\>

sets the type of a mod

#### Defined in

../src/extensions/mod_management/actions/mods.ts:50

___

### setNetworkConnected

• **setNetworkConnected**: `ComplexActionCreator1`<`boolean`, `boolean`, {}\>

#### Defined in

../src/actions/session.ts:58

___

### setNextProfile

• **setNextProfile**: `ComplexActionCreator1`<`string`, { `profileId`: `string`  }, {}\>

sets a profile to be activated

#### Defined in

../src/extensions/profile_management/actions/settings.ts:8

___

### setOpenMainPage

• **setOpenMainPage**: `ComplexActionCreator2`<`string`, `boolean`, { `page`: `string` ; `secondary`: `boolean`  }, {}\>

#### Defined in

../src/actions/session.ts:24

___

### setPickerLayout

• **setPickerLayout**: `ComplexActionCreator1`<``"list"`` \| ``"small"`` \| ``"large"``, { `layout`: ``"list"`` \| ``"small"`` \| ``"large"``  }, {}\>

#### Defined in

../src/extensions/gamemode_management/actions/settings.ts:53

___

### setProfile

• **setProfile**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

add or edit a profile

#### Defined in

../src/extensions/profile_management/actions/profiles.ts:12

___

### setProfileActivated

• **setProfileActivated**: `ComplexActionCreator1`<`string`, `string`, {}\>

#### Defined in

../src/extensions/profile_management/actions/profiles.ts:33

___

### setProfilesVisible

• **setProfilesVisible**: `ComplexActionCreator1`<`boolean`, { `visible`: `boolean`  }, {}\>

#### Defined in

../src/extensions/settings_interface/actions/interface.ts:16

___

### setProgress

• **setProgress**: `ComplexActionCreator4`<`string`, `string`, `string`, `number`, { `group`: `string` ; `percent`: `number` ; `progressId`: `string` ; `text`: `string`  }, {}\>

#### Defined in

../src/actions/session.ts:35

___

### setRelativeTimes

• **setRelativeTimes**: `ComplexActionCreator1`<`boolean`, `boolean`, {}\>

#### Defined in

../src/extensions/settings_interface/actions/interface.ts:28

___

### setSettingsPage

• **setSettingsPage**: `ComplexActionCreator1`<`string`, { `pageId`: `string`  }, {}\>

#### Defined in

../src/actions/session.ts:21

___

### setShowDLDropzone

• **setShowDLDropzone**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/download_management/actions/settings.ts:7

___

### setShowDLGraph

• **setShowDLGraph**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/download_management/actions/settings.ts:8

___

### setShowModDropzone

• **setShowModDropzone**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/mod_management/actions/settings.ts:17

___

### setStartMinimized

• **setStartMinimized**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/settings_interface/actions/automation.ts:9

___

### setStateVersion

• **setStateVersion**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/actions/app.ts:7

___

### setTabsMinimized

• **setTabsMinimized**: `ComplexActionCreator1`<`any`, `any`, {}\>

#### Defined in

../src/actions/window.ts:28

___

### setToolPid

• **setToolPid**: `ComplexActionCreator3`<`string`, `number`, `boolean`, { `exclusive`: `boolean` ; `exePath`: `string` ; `pid`: `number`  }, {}\>

#### Defined in

../src/actions/session.ts:42

___

### setToolRunning

• **setToolRunning**: `ComplexActionCreator3`<`string`, `number`, `boolean`, { `exclusive`: `boolean` ; `exePath`: `string` ; `started`: `number`  }, {}\>

#### Defined in

../src/actions/session.ts:39

___

### setToolStopped

• **setToolStopped**: `ComplexActionCreator1`<`string`, { `exePath`: `string`  }, {}\>

#### Defined in

../src/actions/session.ts:45

___

### setToolVisible

• **setToolVisible**: `ComplexActionCreator3`<`string`, `string`, `boolean`, { `gameId`: `string` ; `toolId`: `string` ; `visible`: `boolean`  }, {}\>

set visibility of a tool. Tools that have been added by the user will be removed entirely whereas
discovered tools (those where we have code to discover them) are merely hidden

#### Defined in

../src/extensions/gamemode_management/actions/settings.ts:35

___

### setUIBlocker

• **setUIBlocker**: `ComplexActionCreator4`<`string`, `string`, `string`, `boolean`, { `description`: `string` ; `icon`: `string` ; `id`: `string` ; `mayCancel`: `boolean`  }, {}\>

#### Defined in

../src/actions/session.ts:51

___

### setUpdateChannel

• **setUpdateChannel**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

changes the 'channel' from which to receive Vortex updates
currently either 'beta', 'stable' or 'none'

#### Defined in

../src/extensions/updater/actions.ts:9

___

### setUserAPIKey

• **setUserAPIKey**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/nexus_integration/actions/account.ts:8

___

### setWarnedAdmin

• **setWarnedAdmin**: `ComplexActionCreator1`<`any`, `any`, {}\>

#### Defined in

../src/actions/app.ts:30

___

### setWindowPosition

• **setWindowPosition**: `ComplexActionCreator1`<`any`, `any`, {}\>

action to set window position in the store.
Takes one parameter of the form {x: number, y: number}

#### Defined in

../src/actions/window.ts:17

___

### setWindowSize

• **setWindowSize**: `ComplexActionCreator1`<`any`, `any`, {}\>

action to set window size in the store.
Takes one parameter of the form {width: number, height: number}

#### Defined in

../src/actions/window.ts:11

___

### setZoomFactor

• **setZoomFactor**: `ComplexActionCreator1`<`any`, `any`, {}\>

#### Defined in

../src/actions/window.ts:26

___

### showUsageInstruction

• **showUsageInstruction**: `ComplexActionCreator2`<`string`, `boolean`, { `show`: `boolean` ; `usageId`: `string`  }, {}\>

#### Defined in

../src/extensions/settings_interface/actions/interface.ts:25

___

### startActivity

• **startActivity**: `ComplexActionCreator2`<`string`, `string`, { `activityId`: `string` ; `group`: `string`  }, { `forward`: `boolean` = false; `scope`: `string` = 'local' }\>

#### Defined in

../src/actions/session.ts:27

___

### startDialog

• **startDialog**: `ComplexActionCreator1`<`IInstallerInfo`, `any`, {}\>

#### Defined in

../src/extensions/installer_fomod/actions/installerUI.ts:6

___

### startDownload

• **startDownload**: `ComplexActionCreator1`<`string`, { `id`: `string`  }, {}\>

mark download as started

#### Defined in

../src/extensions/download_management/actions/state.ts:43

___

### startNotification

• **startNotification**: `ComplexActionCreator1`<`any`, `any`, {}\>

adds a notification to be displayed. Takes one parameter of type INotification. The id may be
left unset, in that case one will be generated

#### Defined in

../src/actions/notifications.ts:23

___

### stopActivity

• **stopActivity**: `ComplexActionCreator2`<`string`, `string`, { `activityId`: `string` ; `group`: `string`  }, { `forward`: `boolean` = false; `scope`: `string` = 'local' }\>

#### Defined in

../src/actions/session.ts:31

___

### stopNotification

• **stopNotification**: `ComplexActionCreator1`<`any`, `any`, {}\>

dismiss a notification. Takes the id of the notification

#### Defined in

../src/actions/notifications.ts:32

___

### suppressNotification

• **suppressNotification**: `ComplexActionCreator2`<`string`, `boolean`, { `id`: `string` ; `suppress`: `boolean`  }, {}\>

set (or unset) notifications to not show again

#### Defined in

../src/actions/notificationSettings.ts:6

___

### updateCategories

• **updateCategories**: `ComplexActionCreator2`<`string`, `ICategoryDictionary`, { `gameCategories`: `ICategoryDictionary` ; `gameId`: `string`  }, {}\>

#### Defined in

../src/extensions/category_management/actions/category.ts:19

___

### updateNotification

• **updateNotification**: `ComplexActionCreator3`<`string`, `number`, `string`, { `id`: `string` ; `message`: `string` ; `progress`: `number`  }, { `forward`: `boolean` = false; `scope`: `string` = 'local' }\>

#### Defined in

../src/actions/notifications.ts:25

___

### willRemoveProfile

• **willRemoveProfile**: `ComplexActionCreator1`<`unknown`, `unknown`, {}\>

#### Defined in

../src/extensions/profile_management/actions/profiles.ts:16

## Functions

### addNotification

▸ **addNotification**(`notification`): (`dispatch`: `any`) => [`Promise`](../classes/Promise.md)<`void`\>

show a notification

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`INotification`](../interfaces/types.INotification.md) |

#### Returns

`fn`

▸ (`dispatch`): [`Promise`](../classes/Promise.md)<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `any` |

##### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/actions/notifications.ts:118

___

### closeDialog

▸ **closeDialog**(`id`, `actionKey?`, `input?`): (`dispatch`: `any`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `actionKey?` | `string` |
| `input?` | `any` |

#### Returns

`fn`

▸ (`dispatch`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `any` |

##### Returns

`void`

#### Defined in

../src/actions/notifications.ts:234

___

### dismissNotification

▸ **dismissNotification**(`id`): (`dispatch`: `any`) => [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`fn`

▸ (`dispatch`): [`Promise`](../classes/Promise.md)<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `any` |

##### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/actions/notifications.ts:162

___

### fireNotificationAction

▸ **fireNotificationAction**(`notiId`, `notiProcess`, `action`, `dismiss`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `notiId` | `string` |
| `notiProcess` | `string` |
| `action` | `number` |
| `dismiss` | [`NotificationDismiss`](types.md#notificationdismiss) |

#### Returns

`void`

#### Defined in

../src/actions/notifications.ts:59

___

### setModsEnabled

▸ `Const` **setModsEnabled**(`api`, `profileIdIn`, `modIdsIn`, `enableIn`, `optionsIn?`): [`Promise`](../classes/Promise.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`IExtensionApi`](../interfaces/types.IExtensionApi.md) |
| `profileIdIn` | `string` |
| `modIdsIn` | `string`[] |
| `enableIn` | `boolean` |
| `optionsIn?` | [`IEnableOptions`](../interfaces/actions.IEnableOptions.md) |

#### Returns

[`Promise`](../classes/Promise.md)<`void`\>

#### Defined in

../src/extensions/profile_management/actions/profiles.ts:41

___

### setupNotificationSuppression

▸ **setupNotificationSuppression**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`id`: `string`) => `boolean` |

#### Returns

`void`

#### Defined in

../src/actions/notifications.ts:107

___

### showDialog

▸ **showDialog**(`type`, `title`, `content`, `actions`, `inId?`): (`dispatch`: `any`) => [`Promise`](../classes/Promise.md)<[`IDialogResult`](../interfaces/actions.IDialogResult.md)\>

show a dialog

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`DialogType`](actions.md#dialogtype) |
| `title` | `string` |
| `content` | [`IDialogContent`](../interfaces/actions.IDialogContent.md) |
| `actions` | [`DialogActions`](actions.md#dialogactions) |
| `inId?` | `string` |

#### Returns

`fn`

▸ (`dispatch`): [`Promise`](../classes/Promise.md)<[`IDialogResult`](../interfaces/actions.IDialogResult.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `any` |

##### Returns

[`Promise`](../classes/Promise.md)<[`IDialogResult`](../interfaces/actions.IDialogResult.md)\>

#### Defined in

../src/actions/notifications.ts:193

___

### showURL

▸ `Const` **showURL**(`url`, `instructions?`, `subscriber?`, `skippable?`): `Action`<{ `instructions`: `string` ; `skippable`: `boolean` ; `subscriber`: `string` ; `url`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `instructions?` | `string` |
| `subscriber?` | `string` |
| `skippable?` | `boolean` |

#### Returns

`Action`<{ `instructions`: `string` ; `skippable`: `boolean` ; `subscriber`: `string` ; `url`: `string`  }\>

#### Defined in

../src/extensions/browser/actions.ts:9

___

### triggerDialogLink

▸ **triggerDialogLink**(`id`, `idx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `idx` | `number` |

#### Returns

`void`

#### Defined in

../src/actions/notifications.ts:253
