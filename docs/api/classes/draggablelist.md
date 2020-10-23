**[vortex_devel](../README.md)**

> [Globals](../globals.md) / DraggableList

# Class: DraggableList

A list component that allows the user to manually re-order the items
in it.
It also allows items to be dragged into another list.

Important: items has to either be a string, a number, an object with an "id" field or you have
  to specify idFunc through props

## Hierarchy

* [ComponentEx](componentex.md)\<[IProps](../globals.md#iprops), [IDraggableListState](../interfaces/idraggableliststate.md)>

  ↳ **DraggableList**

## Index

### Constructors

* [constructor](draggablelist.md#constructor)

### Properties

* [context](draggablelist.md#context)
* [mDraggableClass](draggablelist.md#mdraggableclass)
* [nextState](draggablelist.md#nextstate)

### Methods

* [UNSAFE\_componentWillMount](draggablelist.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](draggablelist.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](draggablelist.md#unsafe_componentwillupdate)
* [apply](draggablelist.md#apply)
* [changeIndex](draggablelist.md#changeindex)
* [componentDidCatch](draggablelist.md#componentdidcatch)
* [componentDidMount](draggablelist.md#componentdidmount)
* [componentDidUpdate](draggablelist.md#componentdidupdate)
* [componentWillMount](draggablelist.md#componentwillmount)
* [componentWillReceiveProps](draggablelist.md#componentwillreceiveprops)
* [componentWillUnmount](draggablelist.md#componentwillunmount)
* [componentWillUpdate](draggablelist.md#componentwillupdate)
* [getSnapshotBeforeUpdate](draggablelist.md#getsnapshotbeforeupdate)
* [initState](draggablelist.md#initstate)
* [itemId](draggablelist.md#itemid)
* [render](draggablelist.md#render)
* [shouldComponentUpdate](draggablelist.md#shouldcomponentupdate)
* [take](draggablelist.md#take)

### Object literals

* [contextTypes](draggablelist.md#contexttypes)

## Constructors

### constructor

\+ **new DraggableList**(`props`: [IProps](../globals.md#iprops)): [DraggableList](draggablelist.md)

*Defined in Work/vortex/src/controls/DraggableList.tsx:37*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [DraggableList](draggablelist.md)

## Properties

### context

•  **context**: [IComponentContext](../interfaces/icomponentcontext.md)

*Inherited from [ComponentEx](componentex.md).[context](componentex.md#context)*

*Defined in Work/vortex/src/util/ComponentEx.ts:132*

___

### mDraggableClass

• `Private` **mDraggableClass**: ComponentClass\<[IDraggableListItemProps](../interfaces/idraggablelistitemprops.md)>

*Defined in Work/vortex/src/controls/DraggableList.tsx:37*

___

### nextState

•  **nextState**: [IDraggableListState](../interfaces/idraggableliststate.md)

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

▸ **UNSAFE_componentWillReceiveProps**(`newProps`: [IProps](../globals.md#iprops)): void

*Overrides [ComponentEx](componentex.md).[UNSAFE_componentWillReceiveProps](componentex.md#unsafe_componentwillreceiveprops)*

*Defined in Work/vortex/src/controls/DraggableList.tsx:49*

#### Parameters:

Name | Type |
------ | ------ |
`newProps` | [IProps](../globals.md#iprops) |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextState`: Readonly\<[IDraggableListState](../interfaces/idraggableliststate.md)>, `nextContext`: any): void

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
`nextState` | Readonly\<[IDraggableListState](../interfaces/idraggableliststate.md)> |
`nextContext` | any |

**Returns:** void

___

### apply

▸ `Private`**apply**(): void

*Defined in Work/vortex/src/controls/DraggableList.tsx:118*

**Returns:** void

___

### changeIndex

▸ **changeIndex**(`oldIndex`: number, `newIndex`: number, `changeContainer`: boolean, `take`: (list: any[]) => any): void

*Defined in Work/vortex/src/controls/DraggableList.tsx:78*

#### Parameters:

Name | Type |
------ | ------ |
`oldIndex` | number |
`newIndex` | number |
`changeContainer` | boolean |
`take` | (list: any[]) => any |

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

▸ `Optional`**componentDidMount**(): void

*Inherited from [ActionControl](actioncontrol.md).[componentDidMount](actioncontrol.md#componentdidmount)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:610*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** void

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `prevState`: Readonly\<[IDraggableListState](../interfaces/idraggableliststate.md)>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`prevState` | Readonly\<[IDraggableListState](../interfaces/idraggableliststate.md)> |
`snapshot?` | any |

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

▸ `Optional`**componentWillUnmount**(): void

*Inherited from [Icon](icon.md).[componentWillUnmount](icon.md#componentwillunmount)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:626*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** void

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextState`: Readonly\<[IDraggableListState](../interfaces/idraggableliststate.md)>, `nextContext`: any): void

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
`nextState` | Readonly\<[IDraggableListState](../interfaces/idraggableliststate.md)> |
`nextContext` | any |

**Returns:** void

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `prevState`: Readonly\<[IDraggableListState](../interfaces/idraggableliststate.md)>): any \| null

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
`prevState` | Readonly\<[IDraggableListState](../interfaces/idraggableliststate.md)> |

**Returns:** any \| null

___

### initState

▸ `Protected`**initState**(`value`: [IDraggableListState](../interfaces/idraggableliststate.md), `delayed?`: boolean): void

*Inherited from [ComponentEx](componentex.md).[initState](componentex.md#initstate)*

*Defined in Work/vortex/src/util/ComponentEx.ts:136*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`value` | [IDraggableListState](../interfaces/idraggableliststate.md) | - |
`delayed` | boolean | false |

**Returns:** void

___

### itemId

▸ `Private`**itemId**(`item`: any): any

*Defined in Work/vortex/src/controls/DraggableList.tsx:91*

#### Parameters:

Name | Type |
------ | ------ |
`item` | any |

**Returns:** any

___

### render

▸ **render**(): Element

*Defined in Work/vortex/src/controls/DraggableList.tsx:55*

**Returns:** Element

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextState`: Readonly\<[IDraggableListState](../interfaces/idraggableliststate.md)>, `nextContext`: any): boolean

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
`nextState` | Readonly\<[IDraggableListState](../interfaces/idraggableliststate.md)> |
`nextContext` | any |

**Returns:** boolean

___

### take

▸ `Private`**take**(`item`: any, `list`: any[]): any

*Defined in Work/vortex/src/controls/DraggableList.tsx:101*

#### Parameters:

Name | Type |
------ | ------ |
`item` | any |
`list` | any[] |

**Returns:** any

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
