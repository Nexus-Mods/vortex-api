**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IMainPage

# Interface: IMainPage\<S>

interface of a "main page", that is: a content page
displaying a lot of data and thus requiring a lot of screen
space

**`export`** 

**`interface`** IMainPage

## Type parameters

Name | Default |
------ | ------ |
`S` | ComponentState |

## Hierarchy

* ComponentClass\<IBaseProps>

  ↳ **IMainPage**

## Index

### Constructors

* [constructor](imainpage.md#constructor)

### Properties

* [Body](imainpage.md#body)
* [Header](imainpage.md#header)
* [activity](imainpage.md#activity)
* [badge](imainpage.md#badge)
* [childContextTypes](imainpage.md#childcontexttypes)
* [component](imainpage.md#component)
* [contextType](imainpage.md#contexttype)
* [contextTypes](imainpage.md#contexttypes)
* [defaultProps](imainpage.md#defaultprops)
* [displayName](imainpage.md#displayname)
* [getDerivedStateFromError](imainpage.md#getderivedstatefromerror)
* [getDerivedStateFromProps](imainpage.md#getderivedstatefromprops)
* [group](imainpage.md#group)
* [icon](imainpage.md#icon)
* [id](imainpage.md#id)
* [namespace](imainpage.md#namespace)
* [priority](imainpage.md#priority)
* [propTypes](imainpage.md#proptypes)
* [propsFunc](imainpage.md#propsfunc)
* [title](imainpage.md#title)
* [visible](imainpage.md#visible)

## Constructors

### constructor

\+ **new IMainPage**(`props`: IBaseProps, `context?`: any): Component\<IBaseProps, S>

*Inherited from [ISteps](isteps.md).[constructor](isteps.md#constructor)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:575*

#### Parameters:

Name | Type |
------ | ------ |
`props` | IBaseProps |
`context?` | any |

**Returns:** Component\<IBaseProps, S>

## Properties

### Body

•  **Body**: *typeof* Body

*Defined in Work/vortex/src/views/MainPage.tsx:31*

___

### Header

•  **Header**: *typeof* Header

*Defined in Work/vortex/src/views/MainPage.tsx:32*

___

### activity

• `Optional` **activity**: [ReduxProp](../classes/reduxprop.md)\<boolean>

*Defined in Work/vortex/src/types/IMainPage.ts:23*

___

### badge

• `Optional` **badge**: [ReduxProp](../classes/reduxprop.md)\<any>

*Defined in Work/vortex/src/types/IMainPage.ts:22*

___

### childContextTypes

• `Optional` **childContextTypes**: ValidationMap\<any>

*Inherited from [ISteps](isteps.md).[childContextTypes](isteps.md#childcontexttypes)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:580*

___

### component

•  **component**: ComponentClass\<any> \| React.StatelessComponent\<any>

*Defined in Work/vortex/src/types/IMainPage.ts:17*

___

### contextType

• `Optional` **contextType**: Context\<any>

*Inherited from [ISteps](isteps.md).[contextType](isteps.md#contexttype)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:578*

___

### contextTypes

• `Optional` **contextTypes**: ValidationMap\<any>

*Inherited from [ISteps](isteps.md).[contextTypes](isteps.md#contexttypes)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:579*

___

### defaultProps

• `Optional` **defaultProps**: Partial\<IBaseProps>

*Inherited from [ISteps](isteps.md).[defaultProps](isteps.md#defaultprops)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:581*

___

### displayName

• `Optional` **displayName**: string

*Inherited from [ISteps](isteps.md).[displayName](isteps.md#displayname)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:582*

___

### getDerivedStateFromError

• `Optional` **getDerivedStateFromError**: GetDerivedStateFromError\<IBaseProps, S>

*Inherited from [ISteps](isteps.md).[getDerivedStateFromError](isteps.md#getderivedstatefromerror)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:637*

___

### getDerivedStateFromProps

• `Optional` **getDerivedStateFromProps**: GetDerivedStateFromProps\<IBaseProps, S>

*Inherited from [ISteps](isteps.md).[getDerivedStateFromProps](isteps.md#getderivedstatefromprops)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:636*

___

### group

•  **group**: \"global\" \| \"per-game\" \| \"support\" \| \"hidden\" \| \"dashboard\"

*Defined in Work/vortex/src/types/IMainPage.ts:20*

___

### icon

•  **icon**: string

*Defined in Work/vortex/src/types/IMainPage.ts:15*

___

### id

•  **id**: string

*Defined in Work/vortex/src/types/IMainPage.ts:14*

___

### namespace

• `Optional` **namespace**: string

*Defined in Work/vortex/src/types/IMainPage.ts:24*

___

### priority

• `Optional` **priority**: number

*Defined in Work/vortex/src/types/IMainPage.ts:21*

___

### propTypes

• `Optional` **propTypes**: WeakValidationMap\<IBaseProps>

*Inherited from [ISteps](isteps.md).[propTypes](isteps.md#proptypes)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:577*

___

### propsFunc

•  **propsFunc**: () => any

*Defined in Work/vortex/src/types/IMainPage.ts:18*

___

### title

•  **title**: string

*Defined in Work/vortex/src/types/IMainPage.ts:16*

___

### visible

•  **visible**: () => boolean

*Defined in Work/vortex/src/types/IMainPage.ts:19*
