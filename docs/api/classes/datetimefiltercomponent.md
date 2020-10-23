**[vortex_devel](../README.md)**

> [Globals](../globals.md) / DateTimeFilterComponent

# Class: DateTimeFilterComponent

## Hierarchy

* [ComponentEx](componentex.md)\<[IFilterProps](../interfaces/ifilterprops.md), {}>

  ↳ **DateTimeFilterComponent**

## Index

### Constructors

* [constructor](datetimefiltercomponent.md#constructor)

### Properties

* [comparisons](datetimefiltercomponent.md#comparisons)
* [context](datetimefiltercomponent.md#context)
* [currentComparison](datetimefiltercomponent.md#currentcomparison)
* [currentValue](datetimefiltercomponent.md#currentvalue)
* [nextState](datetimefiltercomponent.md#nextstate)

### Methods

* [UNSAFE\_componentWillMount](datetimefiltercomponent.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](datetimefiltercomponent.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](datetimefiltercomponent.md#unsafe_componentwillupdate)
* [changeFilter](datetimefiltercomponent.md#changefilter)
* [componentDidCatch](datetimefiltercomponent.md#componentdidcatch)
* [componentDidMount](datetimefiltercomponent.md#componentdidmount)
* [componentDidUpdate](datetimefiltercomponent.md#componentdidupdate)
* [componentWillMount](datetimefiltercomponent.md#componentwillmount)
* [componentWillReceiveProps](datetimefiltercomponent.md#componentwillreceiveprops)
* [componentWillUnmount](datetimefiltercomponent.md#componentwillunmount)
* [componentWillUpdate](datetimefiltercomponent.md#componentwillupdate)
* [getSnapshotBeforeUpdate](datetimefiltercomponent.md#getsnapshotbeforeupdate)
* [initState](datetimefiltercomponent.md#initstate)
* [render](datetimefiltercomponent.md#render)
* [shouldComponentUpdate](datetimefiltercomponent.md#shouldcomponentupdate)
* [toggleDirection](datetimefiltercomponent.md#toggledirection)

### Object literals

* [contextTypes](datetimefiltercomponent.md#contexttypes)

## Constructors

### constructor

\+ **new DateTimeFilterComponent**(`props`: [IFilterProps](../interfaces/ifilterprops.md)): [DateTimeFilterComponent](datetimefiltercomponent.md)

*Defined in Work/vortex/src/controls/table/DateTimeFilter.tsx:14*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IFilterProps](../interfaces/ifilterprops.md) |

**Returns:** [DateTimeFilterComponent](datetimefiltercomponent.md)

## Properties

### comparisons

• `Private` **comparisons**: any

*Defined in Work/vortex/src/controls/table/DateTimeFilter.tsx:14*

___

### context

•  **context**: [IComponentContext](../interfaces/icomponentcontext.md)

*Inherited from [ComponentEx](componentex.md).[context](componentex.md#context)*

*Defined in Work/vortex/src/util/ComponentEx.ts:132*

___

### currentComparison

• `Private` **currentComparison**: \"eq\" \| \"ge\" \| \"le\"

*Defined in Work/vortex/src/controls/table/DateTimeFilter.tsx:12*

___

### currentValue

• `Private` **currentValue**: Date

*Defined in Work/vortex/src/controls/table/DateTimeFilter.tsx:13*

___

### nextState

•  **nextState**: {}

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>>, `nextState`: Readonly\<{}>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>> |
`nextState` | Readonly\<{}> |
`nextContext` | any |

**Returns:** void

___

### changeFilter

▸ `Private`**changeFilter**(`date`: any): void

*Defined in Work/vortex/src/controls/table/DateTimeFilter.tsx:72*

#### Parameters:

Name | Type |
------ | ------ |
`date` | any |

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

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>>, `prevState`: Readonly\<{}>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>> |
`prevState` | Readonly\<{}> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>>, `nextState`: Readonly\<{}>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>> |
`nextState` | Readonly\<{}> |
`nextContext` | any |

**Returns:** void

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>>, `prevState`: Readonly\<{}>): any \| null

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
`prevProps` | Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>> |
`prevState` | Readonly\<{}> |

**Returns:** any \| null

___

### initState

▸ `Protected`**initState**(`value`: {}, `delayed?`: boolean): void

*Inherited from [ComponentEx](componentex.md).[initState](componentex.md#initstate)*

*Defined in Work/vortex/src/util/ComponentEx.ts:136*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`value` | {} | - |
`delayed` | boolean | false |

**Returns:** void

___

### render

▸ **render**(): Element

*Defined in Work/vortex/src/controls/table/DateTimeFilter.tsx:39*

**Returns:** Element

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>>, `nextState`: Readonly\<{}>, `nextContext`: any): boolean

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
`nextProps` | Readonly\<[IFilterProps](../interfaces/ifilterprops.md) & Partial\<WithTranslation>> |
`nextState` | Readonly\<{}> |
`nextContext` | any |

**Returns:** boolean

___

### toggleDirection

▸ `Private`**toggleDirection**(`evt`: any): void

*Defined in Work/vortex/src/controls/table/DateTimeFilter.tsx:79*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | any |

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
