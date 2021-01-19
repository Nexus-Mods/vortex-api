**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IConnectedProps

# Interface: IConnectedProps

## Hierarchy

* **IConnectedProps**

## Index

### Properties

* [APIKey](iconnectedprops.md#apikey)
* [activeProfileId](iconnectedprops.md#activeprofileid)
* [advancedMode](iconnectedprops.md#advancedmode)
* [attributeState](iconnectedprops.md#attributestate)
* [bannerProps](iconnectedprops.md#bannerprops)
* [collapsedGroups](iconnectedprops.md#collapsedgroups)
* [customTitlebar](iconnectedprops.md#customtitlebar)
* [discoveredGames](iconnectedprops.md#discoveredgames)
* [discoveredTools](iconnectedprops.md#discoveredtools)
* [filter](iconnectedprops.md#filter)
* [game](iconnectedprops.md#game)
* [gameDiscovery](iconnectedprops.md#gamediscovery)
* [gameMode](iconnectedprops.md#gamemode)
* [groupBy](iconnectedprops.md#groupby)
* [knownGames](iconnectedprops.md#knowngames)
* [language](iconnectedprops.md#language)
* [lastActiveProfile](iconnectedprops.md#lastactiveprofile)
* [mainPage](iconnectedprops.md#mainpage)
* [nextProfileId](iconnectedprops.md#nextprofileid)
* [notifications](iconnectedprops.md#notifications)
* [primaryTool](iconnectedprops.md#primarytool)
* [profiles](iconnectedprops.md#profiles)
* [profilesVisible](iconnectedprops.md#profilesvisible)
* [progressProfile](iconnectedprops.md#progressprofile)
* [secondaryPage](iconnectedprops.md#secondarypage)
* [settingsPage](iconnectedprops.md#settingspage)
* [show](iconnectedprops.md#show)
* [tabsMinimized](iconnectedprops.md#tabsminimized)
* [toolsRunning](iconnectedprops.md#toolsrunning)
* [uiBlockers](iconnectedprops.md#uiblockers)
* [userInfo](iconnectedprops.md#userinfo)
* [visibleDialog](iconnectedprops.md#visibledialog)

## Properties

### APIKey

•  **APIKey**: string

*Defined in Work/vortex/src/views/MainWindow.tsx:81*

___

### activeProfileId

•  **activeProfileId**: string

*Defined in Work/vortex/src/views/MainWindow.tsx:75*

___

### advancedMode

•  **advancedMode**: boolean

*Defined in Work/vortex/src/controls/Advanced.tsx:7*

___

### attributeState

• `Optional` **attributeState**: { [id:string]: [IAttributeState](iattributestate.md);  }

*Defined in Work/vortex/src/controls/Table.tsx:60*

___

### bannerProps

•  **bannerProps**: { [bannerIdx:number]: { [key:string]: any;  };  }

*Defined in Work/vortex/src/controls/Banner.tsx:26*

___

### collapsedGroups

•  **collapsedGroups**: string[]

*Defined in Work/vortex/src/controls/Table.tsx:64*

___

### customTitlebar

•  **customTitlebar**: boolean

*Defined in Work/vortex/src/views/MainWindow.tsx:78*

___

### discoveredGames

•  **discoveredGames**: { [gameId:string]: [IDiscoveryResult](idiscoveryresult.md);  }

*Defined in Work/vortex/src/views/QuickLauncher.tsx:41*

___

### discoveredTools

•  **discoveredTools**: { [toolId:string]: [IDiscoveredTool](idiscoveredtool.md);  }

*Defined in Work/vortex/src/views/QuickLauncher.tsx:37*

___

### filter

•  **filter**: { [id:string]: any;  }

*Defined in Work/vortex/src/controls/Table.tsx:62*

___

### game

•  **game**: [IGameStored](igamestored.md)

*Defined in Work/vortex/src/views/QuickLauncher.tsx:35*

___

### gameDiscovery

•  **gameDiscovery**: [IDiscoveryResult](idiscoveryresult.md)

*Defined in Work/vortex/src/views/QuickLauncher.tsx:36*

___

### gameMode

•  **gameMode**: string

*Defined in Work/vortex/src/views/QuickLauncher.tsx:34*

___

### groupBy

•  **groupBy**: string

*Defined in Work/vortex/src/controls/Table.tsx:63*

___

### knownGames

•  **knownGames**: [IGameStored](igamestored.md)[]

*Defined in Work/vortex/src/views/QuickLauncher.tsx:42*

___

### language

•  **language**: string

*Defined in Work/vortex/src/controls/Table.tsx:61*

___

### lastActiveProfile

•  **lastActiveProfile**: { [gameId:string]: string;  }

*Defined in Work/vortex/src/views/QuickLauncher.tsx:44*

___

### mainPage

•  **mainPage**: string

*Defined in Work/vortex/src/views/MainPageHeader.tsx:17*

*Defined in Work/vortex/src/views/MainWindow.tsx:73*

___

### nextProfileId

•  **nextProfileId**: string

*Defined in Work/vortex/src/views/MainWindow.tsx:76*

___

### notifications

•  **notifications**: [INotification](inotification.md)[]

*Defined in Work/vortex/src/views/NotificationButton.tsx:19*

*Defined in Work/vortex/src/views/MainWindow.tsx:80*

___

### primaryTool

•  **primaryTool**: string

*Defined in Work/vortex/src/views/QuickLauncher.tsx:38*

___

### profiles

•  **profiles**: { [profileId:string]: [IProfile](iprofile.md);  }

*Defined in Work/vortex/src/views/QuickLauncher.tsx:40*

___

### profilesVisible

•  **profilesVisible**: boolean

*Defined in Work/vortex/src/views/QuickLauncher.tsx:43*

___

### progressProfile

•  **progressProfile**: { [progressId:string]: [IProgress](iprogress.md);  }

*Defined in Work/vortex/src/views/MainWindow.tsx:77*

___

### secondaryPage

•  **secondaryPage**: string

*Defined in Work/vortex/src/views/MainWindow.tsx:74*

___

### settingsPage

•  **settingsPage**: string

*Defined in Work/vortex/src/views/Settings.tsx:39*

___

### show

•  **show**: boolean

*Defined in Work/vortex/src/controls/Usage.tsx:18*

___

### tabsMinimized

•  **tabsMinimized**: boolean

*Defined in Work/vortex/src/views/QuickLauncher.tsx:39*

*Defined in Work/vortex/src/views/MainWindow.tsx:71*

___

### toolsRunning

•  **toolsRunning**: { [exePath:string]: [IRunningTool](irunningtool.md);  }

*Defined in Work/vortex/src/views/QuickLauncher.tsx:45*

___

### uiBlockers

•  **uiBlockers**: { [id:string]: [IUIBlocker](iuiblocker.md);  }

*Defined in Work/vortex/src/views/MainWindow.tsx:82*

___

### userInfo

•  **userInfo**: any

*Defined in Work/vortex/src/views/MainWindow.tsx:79*

___

### visibleDialog

•  **visibleDialog**: string

*Defined in Work/vortex/src/views/MainWindow.tsx:72*
