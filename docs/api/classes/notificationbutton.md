**[vortex_devel](../README.md)**

> [Globals](../globals.md) / NotificationButton

# Class: NotificationButton

## Hierarchy

* [ComponentEx](componentex.md)\<[IProps](../globals.md#iprops), IComponentState>

  ↳ **NotificationButton**

## Index

### Constructors

* [constructor](notificationbutton.md#constructor)

### Properties

* [context](notificationbutton.md#context)
* [mMounted](notificationbutton.md#mmounted)
* [mRef](notificationbutton.md#mref)
* [mUpdateTimer](notificationbutton.md#mupdatetimer)
* [nextState](notificationbutton.md#nextstate)

### Methods

* [UNSAFE\_componentWillMount](notificationbutton.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](notificationbutton.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](notificationbutton.md#unsafe_componentwillupdate)
* [componentDidCatch](notificationbutton.md#componentdidcatch)
* [componentDidMount](notificationbutton.md#componentdidmount)
* [componentDidUpdate](notificationbutton.md#componentdidupdate)
* [componentWillMount](notificationbutton.md#componentwillmount)
* [componentWillReceiveProps](notificationbutton.md#componentwillreceiveprops)
* [componentWillUnmount](notificationbutton.md#componentwillunmount)
* [componentWillUpdate](notificationbutton.md#componentwillupdate)
* [dismissAll](notificationbutton.md#dismissall)
* [displayTime](notificationbutton.md#displaytime)
* [expand](notificationbutton.md#expand)
* [getSnapshotBeforeUpdate](notificationbutton.md#getsnapshotbeforeupdate)
* [groupNotifications](notificationbutton.md#groupnotifications)
* [initState](notificationbutton.md#initstate)
* [inverseSort](notificationbutton.md#inversesort)
* [render](notificationbutton.md#render)
* [renderNotification](notificationbutton.md#rendernotification)
* [setRef](notificationbutton.md#setref)
* [shouldComponentUpdate](notificationbutton.md#shouldcomponentupdate)
* [suppress](notificationbutton.md#suppress)
* [toggle](notificationbutton.md#toggle)
* [triggerAction](notificationbutton.md#triggeraction)
* [unExpand](notificationbutton.md#unexpand)
* [updateFiltered](notificationbutton.md#updatefiltered)

### Object literals

* [contextTypes](notificationbutton.md#contexttypes)

## Constructors

### constructor

\+ **new NotificationButton**(`props`: [IProps](../globals.md#iprops)): [NotificationButton](notificationbutton.md)

*Defined in Work/vortex/src/views/NotificationButton.tsx:38*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [NotificationButton](notificationbutton.md)

## Properties

### context

•  **context**: [IComponentContext](../interfaces/icomponentcontext.md)

*Inherited from [ComponentEx](componentex.md).[context](componentex.md#context)*

*Defined in Work/vortex/src/util/ComponentEx.ts:132*

___

### mMounted

• `Private` **mMounted**: boolean = false

*Defined in Work/vortex/src/views/NotificationButton.tsx:38*

___

### mRef

• `Private` **mRef**: any = null

*Defined in Work/vortex/src/views/NotificationButton.tsx:36*

___

### mUpdateTimer

• `Private` **mUpdateTimer**: Timeout = undefined

*Defined in Work/vortex/src/views/NotificationButton.tsx:37*

___

### nextState

•  **nextState**: IComponentState

*Inherited from [ComponentEx](componentex.md).[nextState](componentex.md#nextstate)*

*Defined in Work/vortex/src/util/ComponentEx.ts:134*

## Methods

### UNSAFE\_componentWillMount

▸ `Optional`**UNSAFE_componentWillMount**(): void

*Inherited from [Icon](icon.md).[UNSAFE_componentWillMount](icon.md#unsafe_componentwillmount)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:702*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** void

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextContext`: any): void

*Inherited from [ComponentEx](componentex.md).[UNSAFE_componentWillReceiveProps](componentex.md#unsafe_componentwillreceiveprops)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:734*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextState`: Readonly\<IComponentState>, `nextContext`: any): void

*Inherited from [Icon](icon.md).[UNSAFE_componentWillUpdate](icon.md#unsafe_componentwillupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:762*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`nextState` | Readonly\<IComponentState> |
`nextContext` | any |

**Returns:** void

___

### componentDidCatch

▸ `Optional`**componentDidCatch**(`error`: [Error](notsupportederror.md#error), `errorInfo`: ErrorInfo): void

*Inherited from [Icon](icon.md).[componentDidCatch](icon.md#componentdidcatch)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:631*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters:

Name | Type |
------ | ------ |
`error` | [Error](notsupportederror.md#error) |
`errorInfo` | ErrorInfo |

**Returns:** void

___

### componentDidMount

▸ **componentDidMount**(): void

*Overrides [ActionControl](actioncontrol.md).[componentDidMount](actioncontrol.md#componentdidmount)*

*Defined in Work/vortex/src/views/NotificationButton.tsx:50*

**Returns:** void

___

### componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: [IProps](../globals.md#iprops)): void

*Overrides [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/src/views/NotificationButton.tsx:62*

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | [IProps](../globals.md#iprops) |

**Returns:** void

___

### componentWillMount

▸ `Optional`**componentWillMount**(): void

*Inherited from [Icon](icon.md).[componentWillMount](icon.md#componentwillmount)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:688*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** void

___

### componentWillReceiveProps

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextContext`: any): void

*Inherited from [Icon](icon.md).[componentWillReceiveProps](icon.md#componentwillreceiveprops)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:717*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`nextContext` | any |

**Returns:** void

___

### componentWillUnmount

▸ **componentWillUnmount**(): void

*Overrides [Icon](icon.md).[componentWillUnmount](icon.md#componentwillunmount)*

*Defined in Work/vortex/src/views/NotificationButton.tsx:55*

**Returns:** void

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextState`: Readonly\<IComponentState>, `nextContext`: any): void

*Inherited from [Icon](icon.md).[componentWillUpdate](icon.md#componentwillupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:747*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`nextState` | Readonly\<IComponentState> |
`nextContext` | any |

**Returns:** void

___

### dismissAll

▸ `Private`**dismissAll**(`notificationId`: string): void

*Defined in Work/vortex/src/views/NotificationButton.tsx:275*

#### Parameters:

Name | Type |
------ | ------ |
`notificationId` | string |

**Returns:** void

___

### displayTime

▸ `Private`**displayTime**(`item`: [INotification](../interfaces/inotification.md)): any

*Defined in Work/vortex/src/views/NotificationButton.tsx:110*

#### Parameters:

Name | Type |
------ | ------ |
`item` | [INotification](../interfaces/inotification.md) |

**Returns:** any

___

### expand

▸ `Private`**expand**(`groupId`: string): void

*Defined in Work/vortex/src/views/NotificationButton.tsx:189*

#### Parameters:

Name | Type |
------ | ------ |
`groupId` | string |

**Returns:** void

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `prevState`: Readonly\<IComponentState>): any \| null

*Inherited from [Icon](icon.md).[getSnapshotBeforeUpdate](icon.md#getsnapshotbeforeupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:667*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`prevState` | Readonly\<IComponentState> |

**Returns:** any \| null

___

### groupNotifications

▸ `Private`**groupNotifications**(`previous`: [INotification](../interfaces/inotification.md)[], `notification`: [INotification](../interfaces/inotification.md), `collapsed`: { [groupId:string]: number;  }): [INotification](../interfaces/inotification.md)[]

*Defined in Work/vortex/src/views/NotificationButton.tsx:174*

#### Parameters:

Name | Type |
------ | ------ |
`previous` | [INotification](../interfaces/inotification.md)[] |
`notification` | [INotification](../interfaces/inotification.md) |
`collapsed` | { [groupId:string]: number;  } |

**Returns:** [INotification](../interfaces/inotification.md)[]

___

### initState

▸ `Protected`**initState**(`value`: IComponentState, `delayed?`: boolean): void

*Inherited from [ComponentEx](componentex.md).[initState](componentex.md#initstate)*

*Defined in Work/vortex/src/util/ComponentEx.ts:136*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`value` | IComponentState | - |
`delayed` | boolean | false |

**Returns:** void

___

### inverseSort

▸ `Private`**inverseSort**(`lhs`: [INotification](../interfaces/inotification.md), `rhs`: [INotification](../interfaces/inotification.md)): number

*Defined in Work/vortex/src/views/NotificationButton.tsx:208*

#### Parameters:

Name | Type |
------ | ------ |
`lhs` | [INotification](../interfaces/inotification.md) |
`rhs` | [INotification](../interfaces/inotification.md) |

**Returns:** number

___

### render

▸ **render**(): Element

*Defined in Work/vortex/src/views/NotificationButton.tsx:68*

**Returns:** Element

___

### renderNotification

▸ `Private`**renderNotification**(`notification`: [INotification](../interfaces/inotification.md), `collapsed`: { [groupId:string]: number;  }): Element

*Defined in Work/vortex/src/views/NotificationButton.tsx:212*

#### Parameters:

Name | Type |
------ | ------ |
`notification` | [INotification](../interfaces/inotification.md) |
`collapsed` | { [groupId:string]: number;  } |

**Returns:** Element

___

### setRef

▸ `Private`**setRef**(`ref`: any): void

*Defined in Work/vortex/src/views/NotificationButton.tsx:197*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

**Returns:** void

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextState`: Readonly\<IComponentState>, `nextContext`: any): boolean

*Inherited from [Icon](icon.md).[shouldComponentUpdate](icon.md#shouldcomponentupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:621*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`nextState` | Readonly\<IComponentState> |
`nextContext` | any |

**Returns:** boolean

___

### suppress

▸ `Private`**suppress**(`notificationId`: string): void

*Defined in Work/vortex/src/views/NotificationButton.tsx:290*

#### Parameters:

Name | Type |
------ | ------ |
`notificationId` | string |

**Returns:** void

___

### toggle

▸ `Private`**toggle**(): void

*Defined in Work/vortex/src/views/NotificationButton.tsx:166*

**Returns:** void

___

### triggerAction

▸ `Private`**triggerAction**(`notificationId`: string, `actionTitle`: string): void

*Defined in Work/vortex/src/views/NotificationButton.tsx:245*

#### Parameters:

Name | Type |
------ | ------ |
`notificationId` | string |
`actionTitle` | string |

**Returns:** void

___

### unExpand

▸ `Private`**unExpand**(): void

*Defined in Work/vortex/src/views/NotificationButton.tsx:193*

**Returns:** void

___

### updateFiltered

▸ `Private`**updateFiltered**(): void

*Defined in Work/vortex/src/views/NotificationButton.tsx:124*

**Returns:** void

## Object literals

### contextTypes

▪ `Static` **contextTypes**: object

*Inherited from [ComponentEx](componentex.md).[contextTypes](componentex.md#contexttypes)*

*Defined in Work/vortex/src/util/ComponentEx.ts:126*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`api` | Validator\<object> | PropTypes.object.isRequired |
`getModifiers` | Requireable\<(...args: any[]) => any> | PropTypes.func |
`menuLayer` | Requireable\<object> | PropTypes.object |
