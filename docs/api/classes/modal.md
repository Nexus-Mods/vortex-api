[vortex_devel](../README.md) / [Exports](../modules.md) / Modal

# Class: Modal

## Hierarchy

* *PureComponent*<*typeof* Modal.prototype.props, {}\>

  ↳ **Modal**

## Table of contents

### Constructors

- [constructor](modal.md#constructor)

### Properties

- [context](modal.md#context)
- [mMenuLayer](modal.md#mmenulayer)
- [props](modal.md#props)
- [refs](modal.md#refs)
- [state](modal.md#state)
- [Body](modal.md#body)
- [Footer](modal.md#footer)
- [Header](modal.md#header)
- [Title](modal.md#title)
- [childContextTypes](modal.md#childcontexttypes)
- [contextType](modal.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](modal.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](modal.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](modal.md#unsafe_componentwillupdate)
- [componentDidCatch](modal.md#componentdidcatch)
- [componentDidMount](modal.md#componentdidmount)
- [componentDidUpdate](modal.md#componentdidupdate)
- [componentWillMount](modal.md#componentwillmount)
- [componentWillReceiveProps](modal.md#componentwillreceiveprops)
- [componentWillUnmount](modal.md#componentwillunmount)
- [componentWillUpdate](modal.md#componentwillupdate)
- [forceUpdate](modal.md#forceupdate)
- [getChildContext](modal.md#getchildcontext)
- [getSnapshotBeforeUpdate](modal.md#getsnapshotbeforeupdate)
- [render](modal.md#render)
- [setMenuLayer](modal.md#setmenulayer)
- [setState](modal.md#setstate)
- [shouldComponentUpdate](modal.md#shouldcomponentupdate)

## Constructors

### constructor

\+ **new Modal**(`props`: *Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\> \| *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\>): [*Modal*](modal.md)

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\> \| *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\> |

**Returns:** [*Modal*](modal.md)

Defined in: node_modules/@types/react/index.d.ts:472

\+ **new Modal**(`props`: *Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>, `context`: *any*): [*Modal*](modal.md)

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\> |
`context` | *any* |

**Returns:** [*Modal*](modal.md)

Defined in: node_modules/@types/react/index.d.ts:474

## Properties

### context

• **context**: *any*

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

Defined in: node_modules/@types/react/index.d.ts:472

___

### mMenuLayer

• `Private` **mMenuLayer**: Element= null

Defined in: src/controls/Modal.tsx:15

___

### props

• `Readonly` **props**: *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\> & *Readonly*<{ `children?`: ReactNode  }\>

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

• **state**: *Readonly*<{}\>

Defined in: node_modules/@types/react/index.d.ts:498

___

### Body

▪ `Static` **Body**: *typeof* ModalBody

Defined in: src/controls/Modal.tsx:8

___

### Footer

▪ `Static` **Footer**: *typeof* ModalFooter

Defined in: src/controls/Modal.tsx:9

___

### Header

▪ `Static` **Header**: *typeof* ModalHeader

Defined in: src/controls/Modal.tsx:6

___

### Title

▪ `Static` **Title**: *typeof* ModalTitle

Defined in: src/controls/Modal.tsx:7

___

### childContextTypes

▪ `Static` **childContextTypes**: *ValidationMap*<any\>

Defined in: src/controls/Modal.tsx:11

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:740

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\> |
`nextState` | *Readonly*<{}\> |
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

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\>, `prevState`: *Readonly*<{}\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\> |
`prevState` | *Readonly*<{}\> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\> |
`nextState` | *Readonly*<{}\> |
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

### getChildContext

▸ **getChildContext**(): *any*

**Returns:** *any*

Defined in: src/controls/Modal.tsx:17

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\>, `prevState`: *Readonly*<{}\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\> |
`prevState` | *Readonly*<{}\> |

**Returns:** *any*

Defined in: node_modules/@types/react/index.d.ts:673

___

### render

▸ **render**(): *Element*

**Returns:** *Element*

Defined in: src/controls/Modal.tsx:21

___

### setMenuLayer

▸ `Private`**setMenuLayer**(`ref`: Element): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`ref` | Element |

**Returns:** *void*

Defined in: src/controls/Modal.tsx:32

___

### setState

▸ **setState**<K\>(`state`: {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\>) => {} \| *Pick*<{}, K\> \| *Pick*<{}, K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *never* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\>) => {} \| *Pick*<{}, K\> \| *Pick*<{}, K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:484

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<*Readonly*<ModalProps\> & *Readonly*<{ `children?`: ReactNode  }\>\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react/index.d.ts:627
