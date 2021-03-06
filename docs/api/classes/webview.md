[vortex_devel](../README.md) / [Exports](../modules.md) / Webview

# Class: Webview

## Hierarchy

* *Component*<IWebviewProps & IWebView, {}\>

  ↳ **Webview**

## Table of contents

### Constructors

- [constructor](webview.md#constructor)

### Properties

- [context](webview.md#context)
- [mNode](webview.md#mnode)
- [props](webview.md#props)
- [refs](webview.md#refs)
- [state](webview.md#state)
- [contextType](webview.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](webview.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](webview.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](webview.md#unsafe_componentwillupdate)
- [componentDidCatch](webview.md#componentdidcatch)
- [componentDidMount](webview.md#componentdidmount)
- [componentDidUpdate](webview.md#componentdidupdate)
- [componentWillMount](webview.md#componentwillmount)
- [componentWillReceiveProps](webview.md#componentwillreceiveprops)
- [componentWillUnmount](webview.md#componentwillunmount)
- [componentWillUpdate](webview.md#componentwillupdate)
- [enterFullscreen](webview.md#enterfullscreen)
- [forceUpdate](webview.md#forceupdate)
- [getSnapshotBeforeUpdate](webview.md#getsnapshotbeforeupdate)
- [leaveFullscreen](webview.md#leavefullscreen)
- [logMessage](webview.md#logmessage)
- [newWindow](webview.md#newwindow)
- [render](webview.md#render)
- [setState](webview.md#setstate)
- [shouldComponentUpdate](webview.md#shouldcomponentupdate)
- [startLoad](webview.md#startload)
- [stopLoad](webview.md#stopload)

## Constructors

### constructor

\+ **new Webview**(`props`: IWebviewProps & *IWebView* \| *Readonly*<IWebviewProps & *IWebView*\>): [*Webview*](webview.md)

#### Parameters:

Name | Type |
:------ | :------ |
`props` | IWebviewProps & *IWebView* \| *Readonly*<IWebviewProps & *IWebView*\> |

**Returns:** [*Webview*](webview.md)

Defined in: node_modules/@types/react/index.d.ts:472

\+ **new Webview**(`props`: IWebviewProps & *IWebView*, `context`: *any*): [*Webview*](webview.md)

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
:------ | :------ |
`props` | IWebviewProps & *IWebView* |
`context` | *any* |

**Returns:** [*Webview*](webview.md)

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

### mNode

• `Private` **mNode**: *WebviewTag*

Defined in: src/controls/Webview.tsx:33

___

### props

• `Readonly` **props**: *Readonly*<IWebviewProps & *IWebView*\> & *Readonly*<{ `children?`: ReactNode  }\>

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<IWebviewProps & *IWebView*\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<IWebviewProps & *IWebView*\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:740

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<IWebviewProps & *IWebView*\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<IWebviewProps & *IWebView*\> |
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

▸ **componentDidMount**(): *void*

**Returns:** *void*

Defined in: src/controls/Webview.tsx:35

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<IWebviewProps & *IWebView*\>, `prevState`: *Readonly*<{}\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<IWebviewProps & *IWebView*\> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<IWebviewProps & *IWebView*\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<IWebviewProps & *IWebView*\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:723

___

### componentWillUnmount

▸ **componentWillUnmount**(): *void*

**Returns:** *void*

Defined in: src/controls/Webview.tsx:49

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<IWebviewProps & *IWebView*\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<IWebviewProps & *IWebView*\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:753

___

### enterFullscreen

▸ `Private`**enterFullscreen**(`evt`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`evt` | *any* |

**Returns:** *void*

Defined in: src/controls/Webview.tsx:83

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

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<IWebviewProps & *IWebView*\>, `prevState`: *Readonly*<{}\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<IWebviewProps & *IWebView*\> |
`prevState` | *Readonly*<{}\> |

**Returns:** *any*

Defined in: node_modules/@types/react/index.d.ts:673

___

### leaveFullscreen

▸ `Private`**leaveFullscreen**(`evt`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`evt` | *any* |

**Returns:** *void*

Defined in: src/controls/Webview.tsx:91

___

### logMessage

▸ `Private`**logMessage**(`evt`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`evt` | *any* |

**Returns:** *void*

Defined in: src/controls/Webview.tsx:99

___

### newWindow

▸ `Private`**newWindow**(`evt`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`evt` | *any* |

**Returns:** *void*

Defined in: src/controls/Webview.tsx:76

___

### render

▸ **render**(): *Element*

**Returns:** *Element*

Defined in: src/controls/Webview.tsx:58

___

### setState

▸ **setState**<K\>(`state`: {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<IWebviewProps & *IWebView*\>) => {} \| *Pick*<{}, K\> \| *Pick*<{}, K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *never* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<IWebviewProps & *IWebView*\>) => {} \| *Pick*<{}, K\> \| *Pick*<{}, K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:484

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<IWebviewProps & *IWebView*\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<IWebviewProps & *IWebView*\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react/index.d.ts:627

___

### startLoad

▸ `Private`**startLoad**(): *void*

**Returns:** *void*

Defined in: src/controls/Webview.tsx:62

___

### stopLoad

▸ `Private`**stopLoad**(): *void*

**Returns:** *void*

Defined in: src/controls/Webview.tsx:69
