[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / INotification

# Interface: INotification

[types](../modules/types.md).INotification

a notification message

**`export`**

**`interface`** INotification

## Table of contents

### Properties

- [actions](types.INotification.md#actions)
- [allowSuppress](types.INotification.md#allowsuppress)
- [createdTime](types.INotification.md#createdtime)
- [displayMS](types.INotification.md#displayms)
- [group](types.INotification.md#group)
- [icon](types.INotification.md#icon)
- [id](types.INotification.md#id)
- [localize](types.INotification.md#localize)
- [message](types.INotification.md#message)
- [noDismiss](types.INotification.md#nodismiss)
- [process](types.INotification.md#process)
- [progress](types.INotification.md#progress)
- [replace](types.INotification.md#replace)
- [title](types.INotification.md#title)
- [type](types.INotification.md#type)
- [updatedTime](types.INotification.md#updatedtime)

## Properties

### actions

• `Optional` **actions**: [`INotificationAction`](types.INotificationAction.md)[]

actions to offer with the notification. These will be presented as buttons.
Due to limited space you should not have more than one or two actions and
usually combining actions with displayMS is probably a bad idea as it would
require the user to act in a limited time.

**`memberof`** INotification

#### Defined in

../src/types/INotification.ts:148

___

### allowSuppress

• `Optional` **allowSuppress**: `boolean`

if set, the user may suppress the notification in the future

#### Defined in

../src/types/INotification.ts:137

___

### createdTime

• `Optional` **createdTime**: `number`

time the notification was created

#### Defined in

../src/types/INotification.ts:83

___

### displayMS

• `Optional` **displayMS**: `number`

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

#### Defined in

../src/types/INotification.ts:121

___

### group

• `Optional` **group**: `string`

if set, notifications with the same group will be grouped together and shown as
one entry that can be expanded.

#### Defined in

../src/types/INotification.ts:127

___

### icon

• `Optional` **icon**: `string`

path to an icon/image to display in the notification.
'global' notifications displayed outside the window will always display an
icon so the user can tell which application it is from.
If no icon is specified this will fall back to the application icon.

**`memberof`** INotification

#### Defined in

../src/types/INotification.ts:62

___

### id

• `Optional` **id**: `string`

unique id of the notification. can be left out as
the notification system generates its own.
Manually set an id if you intend to programatically stop
the notification

**`memberof`** INotification

#### Defined in

../src/types/INotification.ts:27

___

### localize

• `Optional` **localize**: `Object`

control which part of the notification gets localized. default is true for both

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message?` | `boolean` |
| `title?` | `boolean` |

#### Defined in

../src/types/INotification.ts:99

___

### message

• **message**: `string`

the message to display. This shouldn't be long

**`memberof`** INotification

#### Defined in

../src/types/INotification.ts:78

___

### noDismiss

• `Optional` **noDismiss**: `boolean`

if set, no Dismiss button is provided automatically

#### Defined in

../src/types/INotification.ts:132

___

### process

• `Optional` **process**: `string`

id of the process that triggered this action

#### Defined in

../src/types/INotification.ts:153

___

### progress

• `Optional` **progress**: `number`

progress in percent (0-100). If set, the notification is a progress indicator

#### Defined in

../src/types/INotification.ts:51

___

### replace

• `Optional` **replace**: `Object`

replacement parameters for the localisation of title and message (the same
replacement dictionary will be used for both)

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

../src/types/INotification.ts:94

___

### title

• `Optional` **title**: `string`

optional title. Should only be one or two words

**`memberof`** INotification

#### Defined in

../src/types/INotification.ts:70

___

### type

• **type**: [`NotificationType`](../modules/types.md#notificationtype)

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

#### Defined in

../src/types/INotification.ts:46

___

### updatedTime

• `Optional` **updatedTime**: `number`

time the notification was last updated

#### Defined in

../src/types/INotification.ts:88
