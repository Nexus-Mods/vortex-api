[vortex_devel](../README.md) / [Exports](../modules.md) / PureComponentEx

# Class: PureComponentEx<P, S\>

## Type parameters

Name | Type |
:------ | :------ |
`P` | - |
`S` | *object* |

## Hierarchy

* *PureComponent*<P & *Partial*<WithTranslation\>, S\>

  ↳ **PureComponentEx**

## Table of contents

### Constructors

- [constructor](purecomponentex.md#constructor)

### Properties

- [context](purecomponentex.md#context)
- [nextState](purecomponentex.md#nextstate)
- [props](purecomponentex.md#props)
- [refs](purecomponentex.md#refs)
- [state](purecomponentex.md#state)
- [contextType](purecomponentex.md#contexttype)
- [contextTypes](purecomponentex.md#contexttypes)

### Methods

- [UNSAFE\_componentWillMount](purecomponentex.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](purecomponentex.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](purecomponentex.md#unsafe_componentwillupdate)
- [componentDidCatch](purecomponentex.md#componentdidcatch)
- [componentDidMount](purecomponentex.md#componentdidmount)
- [componentDidUpdate](purecomponentex.md#componentdidupdate)
- [componentWillMount](purecomponentex.md#componentwillmount)
- [componentWillReceiveProps](purecomponentex.md#componentwillreceiveprops)
- [componentWillUnmount](purecomponentex.md#componentwillunmount)
- [componentWillUpdate](purecomponentex.md#componentwillupdate)
- [forceUpdate](purecomponentex.md#forceupdate)
- [getSnapshotBeforeUpdate](purecomponentex.md#getsnapshotbeforeupdate)
- [initState](purecomponentex.md#initstate)
- [render](purecomponentex.md#render)
- [setState](purecomponentex.md#setstate)
- [shouldComponentUpdate](purecomponentex.md#shouldcomponentupdate)

## Constructors

### constructor

\+ **new PureComponentEx**<P, S\>(`props`: P & *Partial*<WithTranslation\> \| *Readonly*<P & *Partial*<WithTranslation\>\>): [*PureComponentEx*](purecomponentex.md)<P, S\>

#### Type parameters:

Name | Type |
:------ | :------ |
`P` | - |
`S` | *object* |

#### Parameters:

Name | Type |
:------ | :------ |
`props` | P & *Partial*<WithTranslation\> \| *Readonly*<P & *Partial*<WithTranslation\>\> |

**Returns:** [*PureComponentEx*](purecomponentex.md)<P, S\>

Defined in: node_modules/@types/react/index.d.ts:472

\+ **new PureComponentEx**<P, S\>(`props`: P & *Partial*<WithTranslation\>, `context`: *any*): [*PureComponentEx*](purecomponentex.md)<P, S\>

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Type parameters:

Name | Type |
:------ | :------ |
`P` | - |
`S` | *object* |

#### Parameters:

Name | Type |
:------ | :------ |
`props` | P & *Partial*<WithTranslation\> |
`context` | *any* |

**Returns:** [*PureComponentEx*](purecomponentex.md)<P, S\>

Defined in: node_modules/@types/react/index.d.ts:474

## Properties

### context

• **context**: [*IComponentContext*](../interfaces/types.icomponentcontext.md)

Defined in: src/util/ComponentEx.ts:153

___

### nextState

• **nextState**: S

Defined in: src/util/ComponentEx.ts:155

___

### props

• `Readonly` **props**: *Readonly*<P & *Partial*<WithTranslation\>\> & *Readonly*<{ `children?`: ReactNode  }\>

Defined in: node_modules/@types/react/index.d.ts:497

___

### refs

• **refs**: *object*

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

Defined in: node_modules/@types/react/index.d.ts:503

___

### state

• **state**: *Readonly*<S\>

Defined in: node_modules/@types/react/index.d.ts:498

___

### contextType

▪ `Optional` `Static` **contextType**: *Context*<any\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

Defined in: node_modules/@types/react/index.d.ts:454

___

### contextTypes

▪ `Static` **contextTypes**: *ValidationMap*<any\>

Defined in: src/util/ComponentEx.ts:147

## Methods

### UNSAFE\_componentWillMount

▸ `Optional`**UNSAFE_componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:708

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<P & *Partial*<WithTranslation\>\>, `nextContext`: *any*): *void*

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
:------ | :------ |
`nextProps` | *Readonly*<P & *Partial*<WithTranslation\>\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:740

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<P & *Partial*<WithTranslation\>\>, `nextState`: *Readonly*<S\>, `nextContext`: *any*): *void*

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
:------ | :------ |
`nextProps` | *Readonly*<P & *Partial*<WithTranslation\>\> |
`nextState` | *Readonly*<S\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:768

___

### componentDidCatch

▸ `Optional`**componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters:

Name | Type |
:------ | :------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:637

___

### componentDidMount

▸ `Optional`**componentDidMount**(): *void*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:616

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<P & *Partial*<WithTranslation\>\>, `prevState`: *Readonly*<S\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<P & *Partial*<WithTranslation\>\> |
`prevState` | *Readonly*<S\> |
`snapshot?` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:679

___

### componentWillMount

▸ `Optional`**componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:694

___

### componentWillReceiveProps

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<P & *Partial*<WithTranslation\>\>, `nextContext`: *any*): *void*

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
:------ | :------ |
`nextProps` | *Readonly*<P & *Partial*<WithTranslation\>\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:723

___

### componentWillUnmount

▸ `Optional`**componentWillUnmount**(): *void*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:632

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<P & *Partial*<WithTranslation\>\>, `nextState`: *Readonly*<S\>, `nextContext`: *any*): *void*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<P & *Partial*<WithTranslation\>\> |
`nextState` | *Readonly*<S\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:753

___

### forceUpdate

▸ **forceUpdate**(`callback?`: () => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:489

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<P & *Partial*<WithTranslation\>\>, `prevState`: *Readonly*<S\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<P & *Partial*<WithTranslation\>\> |
`prevState` | *Readonly*<S\> |

**Returns:** *any*

Defined in: node_modules/@types/react/index.d.ts:673

___

### initState

▸ `Protected`**initState**(`value`: S, `delayed?`: *boolean*): *void*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | S | - |
`delayed` | *boolean* | false |

**Returns:** *void*

Defined in: src/util/ComponentEx.ts:157

___

### render

▸ **render**(): ReactNode

**Returns:** ReactNode

Defined in: node_modules/@types/react/index.d.ts:490

___

### setState

▸ **setState**<K\>(`state`: S \| (`prevState`: *Readonly*<S\>, `props`: *Readonly*<P & *Partial*<WithTranslation\>\>) => S \| *Pick*<S, K\> \| *Pick*<S, K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | S \| (`prevState`: *Readonly*<S\>, `props`: *Readonly*<P & *Partial*<WithTranslation\>\>) => S \| *Pick*<S, K\> \| *Pick*<S, K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:484

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<P & *Partial*<WithTranslation\>\>, `nextState`: *Readonly*<S\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<P & *Partial*<WithTranslation\>\> |
`nextState` | *Readonly*<S\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react/index.d.ts:627
