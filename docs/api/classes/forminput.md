**[vortex_devel](../README.md)**

> [Globals](../globals.md) / FormInput

# Class: FormInput

this is a wrapper for the text input-component that is styled like the
bootstrap FormControl component.
This wrapper uses a "cache" in the state to reduce the number of (costy)
rerenders caused by changing the redux store every keypress.
As a side effect, this fixes a problem where the cursor always jumps to
the end of the line when using controlled input.

## Hierarchy

* PureComponent\<IProps, IComponentState>

  ↳ **FormInput**

## Index

### Constructors

* [constructor](forminput.md#constructor)

### Properties

* [mDebouncer](forminput.md#mdebouncer)
* [mLastCommitted](forminput.md#mlastcommitted)

### Methods

* [UNSAFE\_componentWillMount](forminput.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](forminput.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](forminput.md#unsafe_componentwillupdate)
* [clear](forminput.md#clear)
* [componentDidCatch](forminput.md#componentdidcatch)
* [componentDidMount](forminput.md#componentdidmount)
* [componentDidUpdate](forminput.md#componentdidupdate)
* [componentWillMount](forminput.md#componentwillmount)
* [componentWillReceiveProps](forminput.md#componentwillreceiveprops)
* [componentWillUnmount](forminput.md#componentwillunmount)
* [componentWillUpdate](forminput.md#componentwillupdate)
* [getSnapshotBeforeUpdate](forminput.md#getsnapshotbeforeupdate)
* [onBlur](forminput.md#onblur)
* [onChange](forminput.md#onchange)
* [onFocus](forminput.md#onfocus)
* [render](forminput.md#render)
* [renderClear](forminput.md#renderclear)
* [shouldComponentUpdate](forminput.md#shouldcomponentupdate)

## Constructors

### constructor

\+ **new FormInput**(`props`: IProps): [FormInput](forminput.md)

*Defined in Work/vortex/src/controls/FormInput.tsx:38*

#### Parameters:

Name | Type |
------ | ------ |
`props` | IProps |

**Returns:** [FormInput](forminput.md)

## Properties

### mDebouncer

• `Private` **mDebouncer**: [Debouncer](debouncer.md)

*Defined in Work/vortex/src/controls/FormInput.tsx:37*

___

### mLastCommitted

• `Private` **mLastCommitted**: any

*Defined in Work/vortex/src/controls/FormInput.tsx:38*

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

▸ **UNSAFE_componentWillReceiveProps**(`newProps`: IProps): void

*Overrides [ComponentEx](componentex.md).[UNSAFE_componentWillReceiveProps](componentex.md#unsafe_componentwillreceiveprops)*

*Defined in Work/vortex/src/controls/FormInput.tsx:56*

#### Parameters:

Name | Type |
------ | ------ |
`newProps` | IProps |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<IProps>, `nextState`: Readonly\<IComponentState>, `nextContext`: any): void

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
`nextProps` | Readonly\<IProps> |
`nextState` | Readonly\<IComponentState> |
`nextContext` | any |

**Returns:** void

___

### clear

▸ `Private`**clear**(): void

*Defined in Work/vortex/src/controls/FormInput.tsx:112*

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

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<IProps>, `prevState`: Readonly\<IComponentState>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<IProps> |
`prevState` | Readonly\<IComponentState> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<IProps>, `nextContext`: any): void

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
`nextProps` | Readonly\<IProps> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<IProps>, `nextState`: Readonly\<IComponentState>, `nextContext`: any): void

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
`nextProps` | Readonly\<IProps> |
`nextState` | Readonly\<IComponentState> |
`nextContext` | any |

**Returns:** void

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<IProps>, `prevState`: Readonly\<IComponentState>): any \| null

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
`prevProps` | Readonly\<IProps> |
`prevState` | Readonly\<IComponentState> |

**Returns:** any \| null

___

### onBlur

▸ `Private`**onBlur**(`evt`: FocusEvent\<HTMLInputElement>): void

*Defined in Work/vortex/src/controls/FormInput.tsx:117*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | FocusEvent\<HTMLInputElement> |

**Returns:** void

___

### onChange

▸ `Private`**onChange**(`evt`: FormEvent\<HTMLInputElement>): void

*Defined in Work/vortex/src/controls/FormInput.tsx:133*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | FormEvent\<HTMLInputElement> |

**Returns:** void

___

### onFocus

▸ `Private`**onFocus**(`evt`: FocusEvent\<HTMLInputElement>): void

*Defined in Work/vortex/src/controls/FormInput.tsx:125*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | FocusEvent\<HTMLInputElement> |

**Returns:** void

___

### render

▸ **render**(): Element

*Defined in Work/vortex/src/controls/FormInput.tsx:64*

**Returns:** Element

___

### renderClear

▸ `Private`**renderClear**(): Element

*Defined in Work/vortex/src/controls/FormInput.tsx:101*

**Returns:** Element

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<IProps>, `nextState`: Readonly\<IComponentState>, `nextContext`: any): boolean

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
`nextProps` | Readonly\<IProps> |
`nextState` | Readonly\<IComponentState> |
`nextContext` | any |

**Returns:** boolean
