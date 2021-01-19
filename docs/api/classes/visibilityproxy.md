**[vortex_devel](../README.md)**

> [Globals](../globals.md) / VisibilityProxy

# Class: VisibilityProxy

proxy component that delays loading of a control until it comes into view

## Hierarchy

* PureComponent\<any, {}>

  ↳ **VisibilityProxy**

## Index

### Properties

* [mLastVisible](visibilityproxy.md#mlastvisible)
* [mVisibleTime](visibilityproxy.md#mvisibletime)
* [sInstances](visibilityproxy.md#sinstances)
* [sObservers](visibilityproxy.md#sobservers)

### Methods

* [UNSAFE\_componentWillMount](visibilityproxy.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](visibilityproxy.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](visibilityproxy.md#unsafe_componentwillupdate)
* [componentDidCatch](visibilityproxy.md#componentdidcatch)
* [componentDidMount](visibilityproxy.md#componentdidmount)
* [componentDidUpdate](visibilityproxy.md#componentdidupdate)
* [componentWillMount](visibilityproxy.md#componentwillmount)
* [componentWillReceiveProps](visibilityproxy.md#componentwillreceiveprops)
* [componentWillUnmount](visibilityproxy.md#componentwillunmount)
* [componentWillUpdate](visibilityproxy.md#componentwillupdate)
* [getSnapshotBeforeUpdate](visibilityproxy.md#getsnapshotbeforeupdate)
* [render](visibilityproxy.md#render)
* [shouldComponentUpdate](visibilityproxy.md#shouldcomponentupdate)
* [callback](visibilityproxy.md#callback)
* [getObserver](visibilityproxy.md#getobserver)
* [observe](visibilityproxy.md#observe)
* [unobserve](visibilityproxy.md#unobserve)

## Properties

### mLastVisible

• `Private` **mLastVisible**: boolean = false

*Defined in Work/vortex/src/controls/VisibilityProxy.tsx:67*

___

### mVisibleTime

• `Private` **mVisibleTime**: number = 0

*Defined in Work/vortex/src/controls/VisibilityProxy.tsx:68*

___

### sInstances

▪ `Static` `Private` **sInstances**: Map\<Element, (visible: boolean) => void> = new Map()

*Defined in Work/vortex/src/controls/VisibilityProxy.tsx:25*

___

### sObservers

▪ `Static` `Private` **sObservers**: Map\<Element, IntersectionObserver> = new Map()

*Defined in Work/vortex/src/controls/VisibilityProxy.tsx:24*

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<any>, `nextContext`: any): void

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
`nextProps` | Readonly\<any> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<any>, `nextState`: Readonly\<{}>, `nextContext`: any): void

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
`nextProps` | Readonly\<any> |
`nextState` | Readonly\<{}> |
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

*Defined in Work/vortex/src/controls/VisibilityProxy.tsx:70*

**Returns:** void

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<any>, `prevState`: Readonly\<{}>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<any> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<any>, `nextContext`: any): void

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
`nextProps` | Readonly\<any> |
`nextContext` | any |

**Returns:** void

___

### componentWillUnmount

▸ **componentWillUnmount**(): void

*Overrides [Icon](icon.md).[componentWillUnmount](icon.md#componentwillunmount)*

*Defined in Work/vortex/src/controls/VisibilityProxy.tsx:90*

**Returns:** void

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<any>, `nextState`: Readonly\<{}>, `nextContext`: any): void

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
`nextProps` | Readonly\<any> |
`nextState` | Readonly\<{}> |
`nextContext` | any |

**Returns:** void

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<any>, `prevState`: Readonly\<{}>): any \| null

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
`prevProps` | Readonly\<any> |
`prevState` | Readonly\<{}> |

**Returns:** any \| null

___

### render

▸ **render**(): Element

*Defined in Work/vortex/src/controls/VisibilityProxy.tsx:94*

**Returns:** Element

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<any>, `nextState`: Readonly\<{}>, `nextContext`: any): boolean

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
`nextProps` | Readonly\<any> |
`nextState` | Readonly\<{}> |
`nextContext` | any |

**Returns:** boolean

___

### callback

▸ `Static` `Private`**callback**(`entries`: IntersectionObserverEntry[], `observer`: IntersectionObserver): void

*Defined in Work/vortex/src/controls/VisibilityProxy.tsx:38*

#### Parameters:

Name | Type |
------ | ------ |
`entries` | IntersectionObserverEntry[] |
`observer` | IntersectionObserver |

**Returns:** void

___

### getObserver

▸ `Static` `Private`**getObserver**(`container`: HTMLElement): IntersectionObserver

*Defined in Work/vortex/src/controls/VisibilityProxy.tsx:27*

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |

**Returns:** IntersectionObserver

___

### observe

▸ `Static` `Private`**observe**(`container`: HTMLElement, `target`: HTMLElement, `cb`: (visible: boolean) => void): void

*Defined in Work/vortex/src/controls/VisibilityProxy.tsx:47*

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |
`target` | HTMLElement |
`cb` | (visible: boolean) => void |

**Returns:** void

___

### unobserve

▸ `Static` `Private`**unobserve**(`container`: HTMLElement, `target`: HTMLElement): void

*Defined in Work/vortex/src/controls/VisibilityProxy.tsx:54*

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |
`target` | HTMLElement |

**Returns:** void
