[vortex_devel](../README.md) / [Exports](../modules.md) / DropdownButton

# Class: DropdownButton

An enhanced dropdown button that adjusts placement of the popover based on the
position within the container, so it doesn't get cut off (as long as the
popover isn't larger than half of the container)

## Hierarchy

* *Component*<IProps, { `right`: *boolean* ; `up`: *boolean*  }\>

  ↳ **DropdownButton**

## Table of contents

### Constructors

- [constructor](dropdownbutton.md#constructor)

### Properties

- [context](dropdownbutton.md#context)
- [mNode](dropdownbutton.md#mnode)
- [mOpen](dropdownbutton.md#mopen)
- [props](dropdownbutton.md#props)
- [refs](dropdownbutton.md#refs)
- [state](dropdownbutton.md#state)
- [contextType](dropdownbutton.md#contexttype)

### Accessors

- [bounds](dropdownbutton.md#bounds)

### Methods

- [UNSAFE\_componentWillMount](dropdownbutton.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](dropdownbutton.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](dropdownbutton.md#unsafe_componentwillupdate)
- [componentDidCatch](dropdownbutton.md#componentdidcatch)
- [componentDidMount](dropdownbutton.md#componentdidmount)
- [componentDidUpdate](dropdownbutton.md#componentdidupdate)
- [componentWillMount](dropdownbutton.md#componentwillmount)
- [componentWillReceiveProps](dropdownbutton.md#componentwillreceiveprops)
- [componentWillUnmount](dropdownbutton.md#componentwillunmount)
- [componentWillUpdate](dropdownbutton.md#componentwillupdate)
- [forceUpdate](dropdownbutton.md#forceupdate)
- [getSnapshotBeforeUpdate](dropdownbutton.md#getsnapshotbeforeupdate)
- [onToggle](dropdownbutton.md#ontoggle)
- [render](dropdownbutton.md#render)
- [setState](dropdownbutton.md#setstate)
- [shouldComponentUpdate](dropdownbutton.md#shouldcomponentupdate)

## Constructors

### constructor

\+ **new DropdownButton**(`props`: IProps): [*DropdownButton*](dropdownbutton.md)

#### Parameters:

Name | Type |
:------ | :------ |
`props` | IProps |

**Returns:** [*DropdownButton*](dropdownbutton.md)

Defined in: src/controls/DropdownButton.tsx:23

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

### mNode

• `Private` **mNode**: Element

Defined in: src/controls/DropdownButton.tsx:22

___

### mOpen

• `Private` **mOpen**: *boolean*= false

Defined in: src/controls/DropdownButton.tsx:23

___

### props

• `Readonly` **props**: *Readonly*<IProps\> & *Readonly*<{ `children?`: ReactNode  }\>

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

• **state**: *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\>

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

## Accessors

### bounds

• `Private`get **bounds**(): ClientRect

**Returns:** ClientRect

Defined in: src/controls/DropdownButton.tsx:50

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<IProps\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<IProps\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:740

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<IProps\>, `nextState`: *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<IProps\> |
`nextState` | *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\> |
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

▸ **componentDidMount**(): *void*

**Returns:** *void*

Defined in: src/controls/DropdownButton.tsx:34

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<IProps\>, `prevState`: *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<IProps\> |
`prevState` | *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<IProps\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<IProps\> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<IProps\>, `nextState`: *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<IProps\> |
`nextState` | *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\> |
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

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<IProps\>, `prevState`: *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<IProps\> |
`prevState` | *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\> |

**Returns:** *any*

Defined in: node_modules/@types/react/index.d.ts:673

___

### onToggle

▸ `Private`**onToggle**(`isOpen`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`isOpen` | *boolean* |

**Returns:** *void*

Defined in: src/controls/DropdownButton.tsx:63

___

### render

▸ **render**(): *Element*

**Returns:** *Element*

Defined in: src/controls/DropdownButton.tsx:38

___

### setState

▸ **setState**<K\>(`state`: { `right`: *boolean* ; `up`: *boolean*  } \| (`prevState`: *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\>, `props`: *Readonly*<IProps\>) => { `right`: *boolean* ; `up`: *boolean*  } \| *Pick*<{ `right`: *boolean* ; `up`: *boolean*  }, K\> \| *Pick*<{ `right`: *boolean* ; `up`: *boolean*  }, K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *up* \| *right* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | { `right`: *boolean* ; `up`: *boolean*  } \| (`prevState`: *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\>, `props`: *Readonly*<IProps\>) => { `right`: *boolean* ; `up`: *boolean*  } \| *Pick*<{ `right`: *boolean* ; `up`: *boolean*  }, K\> \| *Pick*<{ `right`: *boolean* ; `up`: *boolean*  }, K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:484

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<IProps\>, `nextState`: *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<IProps\> |
`nextState` | *Readonly*<{ `right`: *boolean* ; `up`: *boolean*  }\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react/index.d.ts:627
