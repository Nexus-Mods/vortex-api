[vortex_devel](../README.md) / [Exports](../modules.md) / actions

# Namespace: actions

## Table of contents

### Interfaces

- [ICheckbox](../interfaces/actions.icheckbox.md)
- [IConditionResult](../interfaces/actions.iconditionresult.md)
- [IControlBase](../interfaces/actions.icontrolbase.md)
- [IDialog](../interfaces/actions.idialog.md)
- [IDialogAction](../interfaces/actions.idialogaction.md)
- [IDialogContent](../interfaces/actions.idialogcontent.md)
- [IDialogResult](../interfaces/actions.idialogresult.md)
- [IDictionary](../interfaces/actions.idictionary.md)
- [IInput](../interfaces/actions.iinput.md)
- [ILink](../interfaces/actions.ilink.md)

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
- [setupNotificationSuppression](actions.md#setupnotificationsuppression)
- [showDialog](actions.md#showdialog)
- [showURL](actions.md#showurl)
- [triggerDialogLink](actions.md#triggerdialoglink)

## Type aliases

### Condition

Ƭ **Condition**: (`content`: [*IDialogContent*](../interfaces/actions.idialogcontent.md)) => [*ConditionResults*](actions.md#conditionresults)

#### Type declaration:

▸ (`content`: [*IDialogContent*](../interfaces/actions.idialogcontent.md)): [*ConditionResults*](actions.md#conditionresults)

#### Parameters:

Name | Type |
:------ | :------ |
`content` | [*IDialogContent*](../interfaces/actions.idialogcontent.md) |

**Returns:** [*ConditionResults*](actions.md#conditionresults)

Defined in: src/types/IDialog.ts:30

___

### ConditionResults

Ƭ **ConditionResults**: [*IConditionResult*](../interfaces/actions.iconditionresult.md)[]

Defined in: src/types/IDialog.ts:26

___

### DialogActions

Ƭ **DialogActions**: [*IDialogAction*](../interfaces/actions.idialogaction.md)[]

Defined in: src/types/IDialog.ts:28

___

### DialogType

Ƭ **DialogType**: *success* \| *info* \| *error* \| *question*

Defined in: src/types/IDialog.ts:3

## Variables

### addDialog

• `Const` **addDialog**: *ComplexActionCreator6*<string, string, string, [*IDialogContent*](../interfaces/actions.idialogcontent.md), string, string[], { `actions`: *string*[] ; `content`: [*IDialogContent*](../interfaces/actions.idialogcontent.md) ; `defaultAction`: *string* ; `id`: *string* ; `title`: *string* ; `type`: *string*  }, {}\>

show a modal dialog to the user

don't call this directly, use showDialog

Defined in: src/actions/notifications.ts:39

___

### addDiscoveredGame

• `Const` **addDiscoveredGame**: *ComplexActionCreator2*<string, [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md), { `id`: *string* ; `result`: [*IDiscoveryResult*](../interfaces/types.idiscoveryresult.md)  }, {}\>

add info about a discovered game

Defined in: src/extensions/gamemode_management/actions/settings.ts:13

___

### addDiscoveredTool

• `Const` **addDiscoveredTool**: *ComplexActionCreator4*<string, string, [*IDiscoveredTool*](../interfaces/types.idiscoveredtool.md), boolean, { `gameId`: *string* ; `manual`: *boolean* ; `result`: [*IDiscoveredTool*](../interfaces/types.idiscoveredtool.md) ; `toolId`: *string*  }, {}\>

add info about a discovered tool

Defined in: src/extensions/gamemode_management/actions/settings.ts:26

___

### addLocalDownload

• `Const` **addLocalDownload**: *ComplexActionCreator4*<string, string, string, number, { `fileSize`: *number* ; `game`: *string* ; `id`: *string* ; `localPath`: *string*  }, {}\>

add a file that has been found on disk but where we weren't involved
in the download.

Defined in: src/extensions/download_management/actions/state.ts:94

___

### addMod

• `Const` **addMod**: *ComplexActionCreator2*<string, [*IMod*](../interfaces/types.imod.md), { `gameId`: *string* ; `mod`: [*IMod*](../interfaces/types.imod.md)  }, {}\>

Defined in: src/extensions/mod_management/actions/mods.ts:7

___

### addModRule

• `Const` **addModRule**: *ComplexActionCreator3*<string, string, [*IModRule*](../interfaces/types.imodrule.md), { `gameId`: *string* ; `modId`: *string* ; `rule`: [*IModRule*](../interfaces/types.imodrule.md)  }, {}\>

add a dependency rule for this mod

Defined in: src/extensions/mod_management/actions/mods.ts:56

___

### addMods

• `Const` **addMods**: *ComplexActionCreator2*<string, [*IMod*](../interfaces/types.imod.md)[], { `gameId`: *string* ; `mods`: [*IMod*](../interfaces/types.imod.md)[]  }, {}\>

Defined in: src/extensions/mod_management/actions/mods.ts:10

___

### clearModRules

• `Const` **clearModRules**: *ComplexActionCreator2*<string, string, { `gameId`: *string* ; `modId`: *string*  }, {}\>

Defined in: src/extensions/mod_management/actions/mods.ts:50

___

### clearUIBlocker

• `Const` **clearUIBlocker**: *ComplexActionCreator1*<string, string, {}\>

Defined in: src/actions/session.ts:50

___

### closeBrowser

• `Const` **closeBrowser**: *EmptyActionCreator*

Defined in: src/extensions/browser/actions.ts:14

___

### collapseGroup

• `Const` **collapseGroup**: *ComplexActionCreator3*<string, string, boolean, { `collapse`: *boolean* ; `groupId`: *string* ; `tableId`: *string*  }, {}\>

Defined in: src/actions/tables.ts:21

___

### completeMigration

• `Const` **completeMigration**: *ComplexActionCreator1*<any, any, {}\>

Defined in: src/actions/app.ts:26

___

### dismissDialog

• `Const` **dismissDialog**: *ComplexActionCreator1*<any, any, {}\>

dismiss the dialog being displayed

don't call this directly especially when you used "showDialog" to create the dialog or
you leak (a tiny amount of) memory and the action callbacks aren't called.
Use closeDialog instead

Defined in: src/actions/notifications.ts:52

___

### displayGroup

• `Const` **displayGroup**: *ComplexActionCreator2*<string, string, { `groupId`: *string* ; `itemId`: *string*  }, {}\>

action to choose which item in a group to display (all other items in the
group will be hidden). the itemId can be undefined to hide them all.

Defined in: src/actions/session.ts:11

___

### downloadProgress

• `Const` **downloadProgress**: *ComplexActionCreator5*<string, number, number, IChunk[], string[], { `chunks`: IChunk[] ; `id`: *string* ; `received`: *number* ; `total`: *number* ; `urls`: *string*[]  }, {}\>

set download progress (in percent)

Defined in: src/extensions/download_management/actions/state.ts:21

___

### endDialog

• `Const` **endDialog**: *EmptyActionCreator*

Defined in: src/extensions/installer_fomod/actions/installerUI.ts:8

___

### finalizingDownload

• `Const` **finalizingDownload**: *ComplexActionCreator1*<string, { `id`: *string*  }, {}\>

mark download as finalizing, meaning the file has been downloaded fully,
during this phase checksums are calculated for example

Defined in: src/extensions/download_management/actions/state.ts:50

___

### finalizingProgress

• `Const` **finalizingProgress**: *ComplexActionCreator2*<string, number, { `id`: *string* ; `progress`: *number*  }, {}\>

Defined in: src/extensions/download_management/actions/state.ts:25

___

### finishDownload

• `Const` **finishDownload**: *ComplexActionCreator3*<string, *finished* \| *failed* \| *redirect*, any, { `failCause`: *any* ; `id`: *string* ; `state`: *finished* \| *failed* \| *redirect*  }, {}\>

mark download as finished

Defined in: src/extensions/download_management/actions/state.ts:56

___

### forgetExtension

• `Const` **forgetExtension**: *ComplexActionCreator1*<any, any, {}\>

Defined in: src/actions/app.ts:24

___

### forgetMod

• `Const` **forgetMod**: *ComplexActionCreator2*<string, string, { `modId`: *string* ; `profileId`: *string*  }, {}\>

Defined in: src/extensions/profile_management/actions/profiles.ts:21

___

### initDownload

• `Const` **initDownload**: *ComplexActionCreator4*<string, string[], [*IDictionary*](../interfaces/actions.idictionary.md), string, { `game`: *string* ; `id`: *string* ; `modInfo`: [*IDictionary*](../interfaces/actions.idictionary.md) ; `urls`: *string*[]  }, {}\>

initialize a download (it may not be started immediately)

Defined in: src/extensions/download_management/actions/state.ts:13

___

### loadCategories

• `Const` **loadCategories**: *ComplexActionCreator2*<string, ICategoryDictionary, { `gameCategories`: ICategoryDictionary ; `gameId`: *string*  }, {}\>

Defined in: src/extensions/category_management/actions/category.ts:6

___

### pauseDownload

• `Const` **pauseDownload**: *ComplexActionCreator3*<string, boolean, IChunk[], { `chunks`: IChunk[] ; `id`: *string* ; `paused`: *boolean*  }, {}\>

mark download paused

Defined in: src/extensions/download_management/actions/state.ts:69

___

### removeCategory

• `Const` **removeCategory**: *ComplexActionCreator2*<string, string, { `gameId`: *string* ; `id`: *string*  }, {}\>

Defined in: src/extensions/category_management/actions/category.ts:13

___

### removeDownload

• `Const` **removeDownload**: *ComplexActionCreator1*<string, { `id`: *string*  }, {}\>

remove a download (and associated file if any)

Defined in: src/extensions/download_management/actions/state.ts:78

___

### removeExtension

• `Const` **removeExtension**: *ComplexActionCreator1*<any, any, {}\>

Defined in: src/actions/app.ts:22

___

### removeMod

• `Const` **removeMod**: *ComplexActionCreator2*<string, string, { `gameId`: *string* ; `modId`: *string*  }, {}\>

Defined in: src/extensions/mod_management/actions/mods.ts:13

___

### removeModRule

• `Const` **removeModRule**: *ComplexActionCreator3*<string, string, [*IModRule*](../interfaces/types.imodrule.md), { `gameId`: *string* ; `modId`: *string* ; `rule`: [*IModRule*](../interfaces/types.imodrule.md)  }, {}\>

remove a dependency rule from this mod

Defined in: src/extensions/mod_management/actions/mods.ts:62

___

### removeProfile

• `Const` **removeProfile**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/profile_management/actions/profiles.ts:10

___

### renameCategory

• `Const` **renameCategory**: *ComplexActionCreator3*<string, string, string, { `categoryId`: *string* ; `gameId`: *string* ; `name`: *string*  }, {}\>

Defined in: src/extensions/category_management/actions/category.ts:23

___

### resetSuppression

• `Const` **resetSuppression**: *ComplexActionCreator1*<unknown, any, {}\>

Defined in: src/actions/notificationSettings.ts:9

___

### setActivator

• `Const` **setActivator**: *ComplexActionCreator2*<string, string, { `activatorId`: *string* ; `gameId`: *string*  }, {}\>

sets the activator to use for this game

Defined in: src/extensions/mod_management/actions/settings.ts:14

___

### setAdvancedMode

• `Const` **setAdvancedMode**: *ComplexActionCreator1*<boolean, { `advanced`: *boolean*  }, {}\>

enable or disable advanced mode

Defined in: src/extensions/settings_interface/actions/interface.ts:13

___

### setApplicationVersion

• `Const` **setApplicationVersion**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/actions/app.ts:10

___

### setAssociatedWithNXMURLs

• `Const` **setAssociatedWithNXMURLs**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/nexus_integration/actions/settings.ts:8

___

### setAttributeFilter

• `Const` **setAttributeFilter**: *ComplexActionCreator3*<string, string, any, { `attributeId`: *string* ; `filter`: *any* ; `tableId`: *string*  }, {}\>

Defined in: src/actions/tables.ts:15

___

### setAttributeSort

• `Const` **setAttributeSort**: *ComplexActionCreator3*<string, string, [*SortDirection*](types.md#sortdirection), { `attributeId`: *string* ; `direction`: [*SortDirection*](types.md#sortdirection) ; `tableId`: *string*  }, {}\>

Defined in: src/actions/tables.ts:10

___

### setAttributeVisible

• `Const` **setAttributeVisible**: *ComplexActionCreator3*<string, string, boolean, { `attributeId`: *string* ; `tableId`: *string* ; `visible`: *boolean*  }, {}\>

Defined in: src/actions/tables.ts:7

___

### setAutoDeployment

• `Const` **setAutoDeployment**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/settings_interface/actions/automation.ts:5

___

### setAutoEnable

• `Const` **setAutoEnable**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/settings_interface/actions/automation.ts:7

___

### setAutoInstall

• `Const` **setAutoInstall**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/settings_interface/actions/automation.ts:6

___

### setAutoStart

• `Const` **setAutoStart**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/settings_interface/actions/automation.ts:8

___

### setCategory

• `Const` **setCategory**: *ComplexActionCreator3*<string, string, ICategory, { `category`: ICategory ; `gameId`: *string* ; `id`: *string*  }, {}\>

Defined in: src/extensions/category_management/actions/category.ts:10

___

### setCategoryOrder

• `Const` **setCategoryOrder**: *ComplexActionCreator2*<string, string[], { `categoryIds`: *string*[] ; `gameId`: *string*  }, {}\>

Defined in: src/extensions/category_management/actions/category.ts:16

___

### setCleanupOnDeploy

• `Const` **setCleanupOnDeploy**: *ComplexActionCreator1*<boolean, boolean, {}\>

Defined in: src/extensions/mod_management/actions/settings.ts:23

___

### setCollapsedGroups

• `Const` **setCollapsedGroups**: *ComplexActionCreator2*<string, string[], { `groups`: *string*[] ; `tableId`: *string*  }, {}\>

Defined in: src/actions/tables.ts:24

___

### setCommandLine

• `Const` **setCommandLine**: *ComplexActionCreator1*<IParameters, IParameters, {}\>

Defined in: src/actions/session.ts:55

___

### setCompatibleGames

• `Const` **setCompatibleGames**: *ComplexActionCreator2*<string, string[], { `games`: *string*[] ; `id`: *string*  }, {}\>

Defined in: src/extensions/download_management/actions/state.ts:107

___

### setConfirmPurge

• `Const` **setConfirmPurge**: *ComplexActionCreator1*<boolean, boolean, {}\>

Defined in: src/extensions/mod_management/actions/settings.ts:20

___

### setCopyOnIFF

• `Const` **setCopyOnIFF**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/download_management/actions/settings.ts:9

___

### setCustomTitlebar

• `Const` **setCustomTitlebar**: *ComplexActionCreator1*<any, any, {}\>

Defined in: src/actions/window.ts:30

___

### setDeploymentNecessary

• `Const` **setDeploymentNecessary**: *ComplexActionCreator2*<string, boolean, { `gameId`: *string* ; `required`: *boolean*  }, {}\>

Defined in: src/extensions/mod_management/actions/deployment.ts:5

___

### setDesktopNotifications

• `Const` **setDesktopNotifications**: *ComplexActionCreator1*<boolean, boolean, {}\>

Defined in: src/extensions/settings_interface/actions/interface.ts:19

___

### setDialogState

• `Const` **setDialogState**: *ComplexActionCreator1*<IInstallerState, any, {}\>

Defined in: src/extensions/installer_fomod/actions/installerUI.ts:10

___

### setDialogVisible

• `Const` **setDialogVisible**: *ComplexActionCreator1*<string, { `dialogId`: *string*  }, {}\>

Defined in: src/actions/session.ts:14

___

### setDownloadFilePath

• `Const` **setDownloadFilePath**: *ComplexActionCreator2*<string, string, { `filePath`: *string* ; `id`: *string*  }, {}\>

set/change the file path

Defined in: src/extensions/download_management/actions/state.ts:31

___

### setDownloadHash

• `Const` **setDownloadHash**: *ComplexActionCreator2*<string, string, { `fileMD5`: *string* ; `id`: *string*  }, {}\>

Defined in: src/extensions/download_management/actions/state.ts:60

___

### setDownloadHashByFile

• `Const` **setDownloadHashByFile**: *ComplexActionCreator3*<string, string, number, { `fileMD5`: *string* ; `fileName`: *string* ; `fileSize`: *number*  }, {}\>

Defined in: src/extensions/download_management/actions/state.ts:63

___

### setDownloadInstalled

• `Const` **setDownloadInstalled**: *ComplexActionCreator3*<string, string, string, { `gameId`: *string* ; `id`: *string* ; `modId`: *string*  }, {}\>

Defined in: src/extensions/download_management/actions/state.ts:101

___

### setDownloadInterrupted

• `Const` **setDownloadInterrupted**: *ComplexActionCreator2*<string, number, { `id`: *string* ; `realReceived`: *number*  }, {}\>

Defined in: src/extensions/download_management/actions/state.ts:72

___

### setDownloadModInfo

• `Const` **setDownloadModInfo**: *ComplexActionCreator3*<string, string, any, { `id`: *string* ; `key`: *string* ; `value`: *any*  }, {}\>

Defined in: src/extensions/download_management/actions/state.ts:98

___

### setDownloadPath

• `Const` **setDownloadPath**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/download_management/actions/settings.ts:6

___

### setDownloadPausable

• `Const` **setDownloadPausable**: *ComplexActionCreator2*<string, boolean, { `id`: *string* ; `pausable`: *boolean*  }, {}\>

mark the download as pausable or not

Defined in: src/extensions/download_management/actions/state.ts:37

___

### setDownloadSpeed

• `Const` **setDownloadSpeed**: *ComplexActionCreator1*<unknown, unknown, { `forward`: *boolean* = false }\>

sets the current download speed in bytes/second

Defined in: src/extensions/download_management/actions/state.ts:84

___

### setDownloadSpeeds

• `Const` **setDownloadSpeeds**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/download_management/actions/state.ts:87

___

### setDownloadTime

• `Const` **setDownloadTime**: *ComplexActionCreator2*<string, number, { `id`: *string* ; `time`: *number*  }, {}\>

Defined in: src/extensions/download_management/actions/state.ts:104

___

### setExtensionEnabled

• `Const` **setExtensionEnabled**: *ComplexActionCreator2*<string, boolean, { `enabled`: *boolean* ; `extensionId`: *string*  }, {}\>

Defined in: src/actions/app.ts:13

___

### setExtensionEndorsed

• `Const` **setExtensionEndorsed**: *ComplexActionCreator2*<string, string, { `endorsed`: *string* ; `extensionId`: *string*  }, {}\>

Defined in: src/actions/app.ts:19

___

### setExtensionLoadFailures

• `Const` **setExtensionLoadFailures**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/actions/session.ts:42

___

### setExtensionVersion

• `Const` **setExtensionVersion**: *ComplexActionCreator2*<string, string, { `extensionId`: *string* ; `version`: *string*  }, {}\>

Defined in: src/actions/app.ts:16

___

### setFeature

• `Const` **setFeature**: *ComplexActionCreator3*<string, string, any, { `featureId`: *string* ; `profileId`: *string* ; `value`: *any*  }, {}\>

Defined in: src/extensions/profile_management/actions/profiles.ts:25

___

### setFileOverride

• `Const` **setFileOverride**: *ComplexActionCreator3*<string, string, string[], { `files`: *string*[] ; `gameId`: *string* ; `modId`: *string*  }, {}\>

set list of files that will always be provided by this mod, no matter the deployment order

Defined in: src/extensions/mod_management/actions/mods.ts:73

___

### setForegroundDL

• `Const` **setForegroundDL**: *ComplexActionCreator1*<boolean, boolean, {}\>

Defined in: src/extensions/settings_interface/actions/interface.ts:31

___

### setGameHidden

• `Const` **setGameHidden**: *ComplexActionCreator2*<string, boolean, { `gameId`: *string* ; `hidden`: *boolean*  }, {}\>

hide or unhide a game

Defined in: src/extensions/gamemode_management/actions/settings.ts:47

___

### setGameParameters

• `Const` **setGameParameters**: *ComplexActionCreator2*<string, any, { `gameId`: *string* ; `parameters`: *any*  }, {}\>

change parameters for a game (i.e. call arguments, environment, ...)

Defined in: src/extensions/gamemode_management/actions/settings.ts:41

___

### setGamePath

• `Const` **setGamePath**: *ComplexActionCreator2*<string, string, { `gameId`: *string* ; `gamePath`: *string*  }, {}\>

override the path of a game that's already been discovered

Defined in: src/extensions/gamemode_management/actions/settings.ts:20

___

### setGameSearchPaths

• `Const` **setGameSearchPaths**: *ComplexActionCreator1*<string[], string[], {}\>

Defined in: src/extensions/gamemode_management/actions/settings.ts:50

___

### setGroupingAttribute

• `Const` **setGroupingAttribute**: *ComplexActionCreator2*<string, string, { `attributeId`: *string* ; `tableId`: *string*  }, {}\>

Defined in: src/actions/tables.ts:18

___

### setHideTopLevelCategory

• `Const` **setHideTopLevelCategory**: *ComplexActionCreator1*<boolean, { `hide`: *boolean*  }, {}\>

Defined in: src/extensions/settings_interface/actions/interface.ts:22

___

### setINITweakEnabled

• `Const` **setINITweakEnabled**: *ComplexActionCreator4*<string, string, string, boolean, { `enabled`: *boolean* ; `gameId`: *string* ; `modId`: *string* ; `tweak`: *string*  }, {}\>

Defined in: src/extensions/mod_management/actions/mods.ts:65

___

### setInstallPath

• `Const` **setInstallPath**: *ComplexActionCreator2*<string, string, { `gameId`: *string* ; `path`: *string*  }, {}\>

change the mod install path. Supports placeholders

Defined in: src/extensions/mod_management/actions/settings.ts:8

___

### setInstallerDataPath

• `Const` **setInstallerDataPath**: *ComplexActionCreator1*<string, any, {}\>

Defined in: src/extensions/installer_fomod/actions/installerUI.ts:13

___

### setInstanceId

• `Const` **setInstanceId**: *ComplexActionCreator1*<any, any, {}\>

Defined in: src/actions/app.ts:28

___

### setLanguage

• `Const` **setLanguage**: *ComplexActionCreator1*<unknown, unknown, {}\>

change the user interface language

Defined in: src/extensions/settings_interface/actions/interface.ts:8

___

### setLoadOrder

• `Const` **setLoadOrder**: *ComplexActionCreator2*<string, any[], { `id`: *string* ; `order`: *any*[]  }, {}\>

generic action to store load orders for games. How it is to be interpreted
is up to the corresponding game support code.
the id will usually be the profile id for which the load order is to be stored, the items
in the order could be the ids of mods/plugins - in the order they should be loaded.

With most games we don't store the load order this way but instead directly synchronise
with the data/configuration file holding the load order.
Use this only if that isn't an option (e.g. with "7 days to die" there is no generic way
to store the load order, it's only stored in the form of mod names and it would be
impractical to redeploy every time the load order is changed)

Defined in: src/actions/loadOrder.ts:15

___

### setLoadOrderEntry

• `Const` **setLoadOrderEntry**: *any*

Defined in: src/extensions/mod_load_order/actions/loadOrder.ts:5

___

### setMaxBandwidth

• `Const` **setMaxBandwidth**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/download_management/actions/settings.ts:10

___

### setMaxDownloads

• `Const` **setMaxDownloads**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/download_management/actions/settings.ts:5

___

### setMaximized

• `Const` **setMaximized**: *ComplexActionCreator1*<any, any, {}\>

action to set maximized in the store
to avoid confusion: maximize maintains window frame and fills one screen,
fullscreen makes the window borderless + fill the screen

Defined in: src/actions/window.ts:24

___

### setModAttribute

• `Const` **setModAttribute**: *ComplexActionCreator4*<string, string, string, any, { `attribute`: *string* ; `gameId`: *string* ; `modId`: *string* ; `value`: *any*  }, {}\>

sets the value of an attribute on a mod

Defined in: src/extensions/mod_management/actions/mods.ts:33

___

### setModAttributes

• `Const` **setModAttributes**: *ComplexActionCreator3*<string, string, { [attribute: string]: *any*;  }, { `attributes`: { [attribute: string]: *any*;  } ; `gameId`: *string* ; `modId`: *string*  }, {}\>

set multiple mod attributes at once

Defined in: src/extensions/mod_management/actions/mods.ts:40

___

### setModEnabled

• `Const` **setModEnabled**: *ComplexActionCreator3*<string, string, boolean, { `enable`: *boolean* ; `modId`: *string* ; `profileId`: *string*  }, {}\>

enable or disable a mod in a profile

Defined in: src/extensions/profile_management/actions/profiles.ts:17

___

### setModInstallationPath

• `Const` **setModInstallationPath**: *ComplexActionCreator3*<string, string, string, { `gameId`: *string* ; `installPath`: *string* ; `modId`: *string*  }, {}\>

sets the (final) installation path of the mod. This should be set as soon as
any data is written to disk so that it can be cleaned/removed in case of an error.
The actual path on disk may be a variation of this path during installation.

Defined in: src/extensions/mod_management/actions/mods.ts:27

___

### setModState

• `Const` **setModState**: *ComplexActionCreator3*<string, string, ModState, { `gameId`: *string* ; `modId`: *string* ; `modState`: ModState  }, {}\>

sets the state of a mod (whether it's downloaded, installed, ...)

Defined in: src/extensions/mod_management/actions/mods.ts:19

___

### setModType

• `Const` **setModType**: *ComplexActionCreator3*<string, string, string, { `gameId`: *string* ; `modId`: *string* ; `type`: *string*  }, {}\>

sets the type of a mod

Defined in: src/extensions/mod_management/actions/mods.ts:47

___

### setNetworkConnected

• `Const` **setNetworkConnected**: *ComplexActionCreator1*<boolean, boolean, {}\>

Defined in: src/actions/session.ts:52

___

### setNextProfile

• `Const` **setNextProfile**: *ComplexActionCreator1*<string, { `profileId`: *string*  }, {}\>

sets a profile to be activated

Defined in: src/extensions/profile_management/actions/settings.ts:8

___

### setOpenMainPage

• `Const` **setOpenMainPage**: *ComplexActionCreator2*<string, boolean, { `page`: *string* ; `secondary`: *boolean*  }, {}\>

Defined in: src/actions/session.ts:20

___

### setPickerLayout

• `Const` **setPickerLayout**: *ComplexActionCreator1*<*list* \| *small* \| *large*, { `layout`: *list* \| *small* \| *large*  }, {}\>

Defined in: src/extensions/gamemode_management/actions/settings.ts:53

___

### setProfile

• `Const` **setProfile**: *ComplexActionCreator1*<unknown, unknown, {}\>

add or edit a profile

Defined in: src/extensions/profile_management/actions/profiles.ts:8

___

### setProfileActivated

• `Const` **setProfileActivated**: *ComplexActionCreator1*<string, string, {}\>

Defined in: src/extensions/profile_management/actions/profiles.ts:29

___

### setProfilesVisible

• `Const` **setProfilesVisible**: *ComplexActionCreator1*<boolean, { `visible`: *boolean*  }, {}\>

Defined in: src/extensions/settings_interface/actions/interface.ts:16

___

### setProgress

• `Const` **setProgress**: *ComplexActionCreator4*<string, string, string, number, { `group`: *string* ; `percent`: *number* ; `progressId`: *string* ; `text`: *string*  }, {}\>

Defined in: src/actions/session.ts:29

___

### setRelativeTimes

• `Const` **setRelativeTimes**: *ComplexActionCreator1*<boolean, boolean, {}\>

Defined in: src/extensions/settings_interface/actions/interface.ts:28

___

### setSettingsPage

• `Const` **setSettingsPage**: *ComplexActionCreator1*<string, { `pageId`: *string*  }, {}\>

Defined in: src/actions/session.ts:17

___

### setShowDLDropzone

• `Const` **setShowDLDropzone**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/download_management/actions/settings.ts:7

___

### setShowDLGraph

• `Const` **setShowDLGraph**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/download_management/actions/settings.ts:8

___

### setShowModDropzone

• `Const` **setShowModDropzone**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/mod_management/actions/settings.ts:17

___

### setStartMinimized

• `Const` **setStartMinimized**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/settings_interface/actions/automation.ts:9

___

### setStateVersion

• `Const` **setStateVersion**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/actions/app.ts:7

___

### setTabsMinimized

• `Const` **setTabsMinimized**: *ComplexActionCreator1*<any, any, {}\>

Defined in: src/actions/window.ts:28

___

### setToolPid

• `Const` **setToolPid**: *ComplexActionCreator3*<string, number, boolean, { `exclusive`: *boolean* ; `exePath`: *string* ; `pid`: *number*  }, {}\>

Defined in: src/actions/session.ts:36

___

### setToolRunning

• `Const` **setToolRunning**: *ComplexActionCreator3*<string, number, boolean, { `exclusive`: *boolean* ; `exePath`: *string* ; `started`: *number*  }, {}\>

Defined in: src/actions/session.ts:33

___

### setToolStopped

• `Const` **setToolStopped**: *ComplexActionCreator1*<string, { `exePath`: *string*  }, {}\>

Defined in: src/actions/session.ts:39

___

### setToolVisible

• `Const` **setToolVisible**: *ComplexActionCreator3*<string, string, boolean, { `gameId`: *string* ; `toolId`: *string* ; `visible`: *boolean*  }, {}\>

set visibility of a tool. Tools that have been added by the user will be removed entirely whereas
discovered tools (those where we have code to discover them) are merely hidden

Defined in: src/extensions/gamemode_management/actions/settings.ts:35

___

### setUIBlocker

• `Const` **setUIBlocker**: *ComplexActionCreator4*<string, string, string, boolean, { `description`: *string* ; `icon`: *string* ; `id`: *string* ; `mayCancel`: *boolean*  }, {}\>

Defined in: src/actions/session.ts:45

___

### setUpdateChannel

• `Const` **setUpdateChannel**: *ComplexActionCreator1*<unknown, unknown, {}\>

changes the 'channel' from which to receive Vortex updates
currently either 'beta', 'stable' or 'none'

Defined in: src/extensions/updater/actions.ts:9

___

### setUserAPIKey

• `Const` **setUserAPIKey**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/nexus_integration/actions/account.ts:8

___

### setWarnedAdmin

• `Const` **setWarnedAdmin**: *ComplexActionCreator1*<any, any, {}\>

Defined in: src/actions/app.ts:30

___

### setWindowPosition

• `Const` **setWindowPosition**: *ComplexActionCreator1*<any, any, {}\>

action to set window position in the store.
Takes one parameter of the form {x: number, y: number}

Defined in: src/actions/window.ts:17

___

### setWindowSize

• `Const` **setWindowSize**: *ComplexActionCreator1*<any, any, {}\>

action to set window size in the store.
Takes one parameter of the form {width: number, height: number}

Defined in: src/actions/window.ts:11

___

### setZoomFactor

• `Const` **setZoomFactor**: *ComplexActionCreator1*<any, any, {}\>

Defined in: src/actions/window.ts:26

___

### showUsageInstruction

• `Const` **showUsageInstruction**: *ComplexActionCreator2*<string, boolean, { `show`: *boolean* ; `usageId`: *string*  }, {}\>

Defined in: src/extensions/settings_interface/actions/interface.ts:25

___

### startActivity

• `Const` **startActivity**: *ComplexActionCreator2*<string, string, { `activityId`: *string* ; `group`: *string*  }, {}\>

Defined in: src/actions/session.ts:23

___

### startDialog

• `Const` **startDialog**: *ComplexActionCreator1*<IInstallerInfo, any, {}\>

Defined in: src/extensions/installer_fomod/actions/installerUI.ts:6

___

### startDownload

• `Const` **startDownload**: *ComplexActionCreator1*<string, { `id`: *string*  }, {}\>

mark download as started

Defined in: src/extensions/download_management/actions/state.ts:43

___

### startNotification

• `Const` **startNotification**: *ComplexActionCreator1*<any, any, {}\>

adds a notification to be displayed. Takes one parameter of type INotification. The id may be
left unset, in that case one will be generated

Defined in: src/actions/notifications.ts:23

___

### stopActivity

• `Const` **stopActivity**: *ComplexActionCreator2*<string, string, { `activityId`: *string* ; `group`: *string*  }, {}\>

Defined in: src/actions/session.ts:26

___

### stopNotification

• `Const` **stopNotification**: *ComplexActionCreator1*<any, any, {}\>

dismiss a notification. Takes the id of the notification

Defined in: src/actions/notifications.ts:32

___

### suppressNotification

• `Const` **suppressNotification**: *ComplexActionCreator2*<string, boolean, { `id`: *string* ; `suppress`: *boolean*  }, {}\>

set (or unset) notifications to not show again

Defined in: src/actions/notificationSettings.ts:6

___

### updateCategories

• `Const` **updateCategories**: *ComplexActionCreator2*<string, ICategoryDictionary, { `gameCategories`: ICategoryDictionary ; `gameId`: *string*  }, {}\>

Defined in: src/extensions/category_management/actions/category.ts:19

___

### updateNotification

• `Const` **updateNotification**: *ComplexActionCreator3*<string, number, string, { `id`: *string* ; `message`: *string* ; `progress`: *number*  }, { `forward`: *boolean* = false }\>

Defined in: src/actions/notifications.ts:25

___

### willRemoveProfile

• `Const` **willRemoveProfile**: *ComplexActionCreator1*<unknown, unknown, {}\>

Defined in: src/extensions/profile_management/actions/profiles.ts:12

## Functions

### addNotification

▸ **addNotification**(`notification`: [*INotification*](../interfaces/types.inotification.md)): *function*

show a notification

**`export`** 

#### Parameters:

Name | Type |
:------ | :------ |
`notification` | [*INotification*](../interfaces/types.inotification.md) |

**Returns:** (`dispatch`: *any*) => [*Promise*](../classes/promise.md)<void\>

Defined in: src/actions/notifications.ts:118

___

### closeDialog

▸ **closeDialog**(`id`: *string*, `actionKey?`: *string*, `input?`: *any*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`actionKey?` | *string* |
`input?` | *any* |

**Returns:** (`dispatch`: *any*) => *void*

Defined in: src/actions/notifications.ts:234

___

### dismissNotification

▸ **dismissNotification**(`id`: *string*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** (`dispatch`: *any*) => [*Promise*](../classes/promise.md)<void\>

Defined in: src/actions/notifications.ts:162

___

### fireNotificationAction

▸ **fireNotificationAction**(`notiId`: *string*, `notiProcess`: *string*, `action`: *number*, `dismiss`: [*NotificationDismiss*](types.md#notificationdismiss)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`notiId` | *string* |
`notiProcess` | *string* |
`action` | *number* |
`dismiss` | [*NotificationDismiss*](types.md#notificationdismiss) |

**Returns:** *void*

Defined in: src/actions/notifications.ts:59

___

### setupNotificationSuppression

▸ **setupNotificationSuppression**(`cb`: (`id`: *string*) => *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`cb` | (`id`: *string*) => *boolean* |

**Returns:** *void*

Defined in: src/actions/notifications.ts:107

___

### showDialog

▸ **showDialog**(`type`: [*DialogType*](actions.md#dialogtype), `title`: *string*, `content`: [*IDialogContent*](../interfaces/actions.idialogcontent.md), `actions`: [*DialogActions*](actions.md#dialogactions), `inId?`: *string*): *function*

show a dialog

**`export`** 

#### Parameters:

Name | Type |
:------ | :------ |
`type` | [*DialogType*](actions.md#dialogtype) |
`title` | *string* |
`content` | [*IDialogContent*](../interfaces/actions.idialogcontent.md) |
`actions` | [*DialogActions*](actions.md#dialogactions) |
`inId?` | *string* |

**Returns:** (`dispatch`: *any*) => [*Promise*](../classes/promise.md)<[*IDialogResult*](../interfaces/actions.idialogresult.md)\>

Defined in: src/actions/notifications.ts:193

___

### showURL

▸ `Const`**showURL**(`url`: *string*, `instructions?`: *string*, `subscriber?`: *string*): *Action*<{ `instructions`: *string* ; `subscriber`: *string* ; `url`: *string*  }\>

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`instructions?` | *string* |
`subscriber?` | *string* |

**Returns:** *Action*<{ `instructions`: *string* ; `subscriber`: *string* ; `url`: *string*  }\>

Defined in: src/extensions/browser/actions.ts:9

___

### triggerDialogLink

▸ **triggerDialogLink**(`id`: *string*, `idx`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`idx` | *number* |

**Returns:** *void*

Defined in: src/actions/notifications.ts:253
