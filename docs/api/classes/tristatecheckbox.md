**[vortex_devel](../README.md)**

> [Globals](../globals.md) / TriStateCheckbox

# Class: TriStateCheckbox

## Hierarchy

* [ComponentEx](componentex.md)\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md), [ITriCheckboxState](../interfaces/itricheckboxstate.md)>

  ↳ **TriStateCheckbox**

## Index

### Constructors

* [constructor](tristatecheckbox.md#constructor)

### Properties

* [context](tristatecheckbox.md#context)
* [mRef](tristatecheckbox.md#mref)
* [nextState](tristatecheckbox.md#nextstate)

### Methods

* [UNSAFE\_componentWillMount](tristatecheckbox.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](tristatecheckbox.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](tristatecheckbox.md#unsafe_componentwillupdate)
* [componentDidCatch](tristatecheckbox.md#componentdidcatch)
* [componentDidMount](tristatecheckbox.md#componentdidmount)
* [componentDidUpdate](tristatecheckbox.md#componentdidupdate)
* [componentWillMount](tristatecheckbox.md#componentwillmount)
* [componentWillReceiveProps](tristatecheckbox.md#componentwillreceiveprops)
* [componentWillUnmount](tristatecheckbox.md#componentwillunmount)
* [componentWillUpdate](tristatecheckbox.md#componentwillupdate)
* [getSnapshotBeforeUpdate](tristatecheckbox.md#getsnapshotbeforeupdate)
* [initState](tristatecheckbox.md#initstate)
* [onChange](tristatecheckbox.md#onchange)
* [onClick](tristatecheckbox.md#onclick)
* [onContextMenu](tristatecheckbox.md#oncontextmenu)
* [onRef](tristatecheckbox.md#onref)
* [render](tristatecheckbox.md#render)
* [shouldComponentUpdate](tristatecheckbox.md#shouldcomponentupdate)

### Object literals

* [contextTypes](tristatecheckbox.md#contexttypes)

## Constructors

### constructor

\+ **new TriStateCheckbox**(`props`: [ITriCheckboxProps](../interfaces/itricheckboxprops.md)): [TriStateCheckbox](tristatecheckbox.md)

*Defined in Work/vortex/src/controls/TriStateCheckbox.tsx:20*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [ITriCheckboxProps](../interfaces/itricheckboxprops.md) |

**Returns:** [TriStateCheckbox](tristatecheckbox.md)

## Properties

### context

•  **context**: [IComponentContext](../interfaces/icomponentcontext.md)

*Inherited from [ComponentEx](componentex.md).[context](componentex.md#context)*

*Defined in Work/vortex/src/util/ComponentEx.ts:132*

___

### mRef

• `Private` **mRef**: any = null

*Defined in Work/vortex/src/controls/TriStateCheckbox.tsx:20*

___

### nextState

•  **nextState**: [ITriCheckboxState](../interfaces/itricheckboxstate.md)

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>>, `nextContext`: any): void

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
`nextProps` | Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>>, `nextState`: Readonly\<[ITriCheckboxState](../interfaces/itricheckboxstate.md)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>> |
`nextState` | Readonly\<[ITriCheckboxState](../interfaces/itricheckboxstate.md)> |
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

▸ `Optional`**componentDidMount**(): void

*Inherited from [ActionControl](actioncontrol.md).[componentDidMount](actioncontrol.md#componentdidmount)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:610*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** void

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>>, `prevState`: Readonly\<[ITriCheckboxState](../interfaces/itricheckboxstate.md)>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>> |
`prevState` | Readonly\<[ITriCheckboxState](../interfaces/itricheckboxstate.md)> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>>, `nextContext`: any): void

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
`nextProps` | Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>>, `nextState`: Readonly\<[ITriCheckboxState](../interfaces/itricheckboxstate.md)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>> |
`nextState` | Readonly\<[ITriCheckboxState](../interfaces/itricheckboxstate.md)> |
`nextContext` | any |

**Returns:** void

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>>, `prevState`: Readonly\<[ITriCheckboxState](../interfaces/itricheckboxstate.md)>): any \| null

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
`prevProps` | Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>> |
`prevState` | Readonly\<[ITriCheckboxState](../interfaces/itricheckboxstate.md)> |

**Returns:** any \| null

___

### initState

▸ `Protected`**initState**(`value`: [ITriCheckboxState](../interfaces/itricheckboxstate.md), `delayed?`: boolean): void

*Inherited from [ComponentEx](componentex.md).[initState](componentex.md#initstate)*

*Defined in Work/vortex/src/util/ComponentEx.ts:136*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`value` | [ITriCheckboxState](../interfaces/itricheckboxstate.md) | - |
`delayed` | boolean | false |

**Returns:** void

___

### onChange

▸ `Private`**onChange**(`evt`: ChangeEvent\<HTMLInputElement>): void

*Defined in Work/vortex/src/controls/TriStateCheckbox.tsx:89*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | ChangeEvent\<HTMLInputElement> |

**Returns:** void

___

### onClick

▸ `Private`**onClick**(`evt`: MouseEvent\<HTMLInputElement>): void

*Defined in Work/vortex/src/controls/TriStateCheckbox.tsx:56*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | MouseEvent\<HTMLInputElement> |

**Returns:** void

___

### onContextMenu

▸ `Private`**onContextMenu**(`evt`: MouseEvent\<HTMLInputElement>): void

*Defined in Work/vortex/src/controls/TriStateCheckbox.tsx:69*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | MouseEvent\<HTMLInputElement> |

**Returns:** void

___

### onRef

▸ `Private`**onRef**(`ref`: any): void

*Defined in Work/vortex/src/controls/TriStateCheckbox.tsx:97*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

**Returns:** void

___

### render

▸ **render**(): Element

*Defined in Work/vortex/src/controls/TriStateCheckbox.tsx:31*

**Returns:** Element

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>>, `nextState`: Readonly\<[ITriCheckboxState](../interfaces/itricheckboxstate.md)>, `nextContext`: any): boolean

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
`nextProps` | Readonly\<[ITriCheckboxProps](../interfaces/itricheckboxprops.md) & Partial\<WithTranslation>> |
`nextState` | Readonly\<[ITriCheckboxState](../interfaces/itricheckboxstate.md)> |
`nextContext` | any |

**Returns:** boolean

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