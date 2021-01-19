**[vortex_devel](../README.md)**

> [Globals](../globals.md) / INotification

# Interface: INotification

a notification message

**`export`** 

**`interface`** INotification

## Hierarchy

* **INotification**

## Index

### Properties

* [actions](inotification.md#actions)
* [allowSuppress](inotification.md#allowsuppress)
* [createdTime](inotification.md#createdtime)
* [displayMS](inotification.md#displayms)
* [group](inotification.md#group)
* [icon](inotification.md#icon)
* [id](inotification.md#id)
* [localize](inotification.md#localize)
* [message](inotification.md#message)
* [noDismiss](inotification.md#nodismiss)
* [process](inotification.md#process)
* [progress](inotification.md#progress)
* [replace](inotification.md#replace)
* [title](inotification.md#title)
* [type](inotification.md#type)
* [updatedTime](inotification.md#updatedtime)

## Properties

### actions

• `Optional` **actions**: [INotificationAction](inotificationaction.md)[]

*Defined in Work/vortex/src/types/INotification.ts:148*

actions to offer with the notification. These will be presented as buttons.
Due to limited space you should not have more than one or two actions and
usually combining actions with displayMS is probably a bad idea as it would
require the user to act in a limited time.

**`memberof`** INotification

___

### allowSuppress

• `Optional` **allowSuppress**: boolean

*Defined in Work/vortex/src/types/INotification.ts:137*

if set, the user may suppress the notification in the future

___

### createdTime

• `Optional` **createdTime**: number

*Defined in Work/vortex/src/types/INotification.ts:83*

time the notification was created

___

### displayMS

• `Optional` **displayMS**: number

*Defined in Work/vortex/src/types/INotification.ts:121*

the duration to display the message. If this is undefined, the
message has to be dismissed by the user.
Giving a duration may be convenient for the user but it is impossible to
correctly estimate the time it takes a user to read a message. Please
take into consideration that a user may be forced to read the message in
a language not native to him and in general some people simply read slower
than others.
Also you can't assume the user starts reading the message immediately when
it gets displayed, he may be presented with multiple messages at once.
The ui may not even be visible at the time the message gets shown.

Therefore: Absolutely never display an important message with a timer!

**`memberof`** INotification

___

### group

• `Optional` **group**: string

*Defined in Work/vortex/src/types/INotification.ts:127*

if set, notifications with the same group will be grouped together and shown as
one entry that can be expanded.

___

### icon

• `Optional` **icon**: string

*Defined in Work/vortex/src/types/INotification.ts:62*

path to an icon/image to display in the notification.
'global' notifications displayed outside the window will always display an
icon so the user can tell which application it is from.
If no icon is specified this will fall back to the application icon.

**`memberof`** INotification

___

### id

• `Optional` **id**: string

*Defined in Work/vortex/src/types/INotification.ts:27*

unique id of the notification. can be left out as
the notification system generates its own.
Manually set an id if you intend to programatically stop
the notification

**`memberof`** INotification

___

### localize

• `Optional` **localize**: { message?: boolean ; title?: boolean  }

*Defined in Work/vortex/src/types/INotification.ts:99*

control which part of the notification gets localized. default is true for both

#### Type declaration:

Name | Type |
------ | ------ |
`message?` | boolean |
`title?` | boolean |

___

### message

•  **message**: string

*Defined in Work/vortex/src/types/INotification.ts:78*

the message to display. This shouldn't be long

**`memberof`** INotification

___

### noDismiss

• `Optional` **noDismiss**: boolean

*Defined in Work/vortex/src/types/INotification.ts:132*

if set, no Dismiss button is provided automatically

___

### process

• `Optional` **process**: string

*Defined in Work/vortex/src/types/INotification.ts:153*

id of the process that triggered this action

___

### progress

• `Optional` **progress**: number

*Defined in Work/vortex/src/types/INotification.ts:51*

progress in percent (0-100). If set, the notification is a progress indicator

___

### replace

• `Optional` **replace**: { [key:string]: any;  }

*Defined in Work/vortex/src/types/INotification.ts:94*

replacement parameters for the localisation of title and message (the same
replacement dictionary will be used for both)

___

### title

• `Optional` **title**: string

*Defined in Work/vortex/src/types/INotification.ts:70*

optional title. Should only be one or two words

**`memberof`** INotification

___

### type

•  **type**: [NotificationType](../globals.md#notificationtype)

*Defined in Work/vortex/src/types/INotification.ts:46*

the kind of notification to display. This mostly determines
its look but also features to a degree.
Possible values:
  - 'activity': a notification that represents an activity. will have a
                spinner icon. Otherwise it looks like an info notification
  - 'global': This notification will always be visible, so if the window
              doesn't have the focus, this will be displayed as a native
              system notification. These notifications can not be
              programatically dismissed and actions are not supported
  - 'success': notification about a successful operation (ideally the
               user should be aware of the operation)
  - 'info': neutral information notification
  - 'error': Error notification (something went wrong)

**`memberof`** INotification

___

### updatedTime

• `Optional` **updatedTime**: number

*Defined in Work/vortex/src/types/INotification.ts:88*

time the notification was last updated
