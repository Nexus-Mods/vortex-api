**[vortex_devel](../README.md)**

> [Globals](../globals.md) / HeaderCell

# Class: HeaderCell

## Hierarchy

* Component\<[IHeaderProps](../interfaces/iheaderprops.md), {}>

  ↳ **HeaderCell**

## Index

### Constructors

* [constructor](headercell.md#constructor)

### Properties

* [context](headercell.md#context)
* [mMinWidth](headercell.md#mminwidth)
* [mRef](headercell.md#mref)
* [props](headercell.md#props)
* [refs](headercell.md#refs)
* [state](headercell.md#state)
* [contextType](headercell.md#contexttype)

### Methods

* [UNSAFE\_componentWillMount](headercell.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](headercell.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](headercell.md#unsafe_componentwillupdate)
* [componentDidCatch](headercell.md#componentdidcatch)
* [componentDidMount](headercell.md#componentdidmount)
* [componentDidUpdate](headercell.md#componentdidupdate)
* [componentWillMount](headercell.md#componentwillmount)
* [componentWillReceiveProps](headercell.md#componentwillreceiveprops)
* [componentWillUnmount](headercell.md#componentwillunmount)
* [componentWillUpdate](headercell.md#componentwillupdate)
* [cycleDirection](headercell.md#cycledirection)
* [forceUpdate](headercell.md#forceupdate)
* [getSnapshotBeforeUpdate](headercell.md#getsnapshotbeforeupdate)
* [render](headercell.md#render)
* [renderGroupIndicator](headercell.md#rendergroupindicator)
* [renderSortIndicator](headercell.md#rendersortindicator)
* [setDirection](headercell.md#setdirection)
* [setGroup](headercell.md#setgroup)
* [setRef](headercell.md#setref)
* [setState](headercell.md#setstate)
* [shouldComponentUpdate](headercell.md#shouldcomponentupdate)
* [updateWidth](headercell.md#updatewidth)

## Constructors

### constructor

\+ **new HeaderCell**(`props`: Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)>): [HeaderCell](headercell.md)

*Inherited from [Icon](icon.md).[constructor](icon.md#constructor)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:476*

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
------ | ------ |
`props` | Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)> |

**Returns:** [HeaderCell](headercell.md)

\+ **new HeaderCell**(`props`: [IHeaderProps](../interfaces/iheaderprops.md), `context?`: any): [HeaderCell](headercell.md)

*Inherited from [Icon](icon.md).[constructor](icon.md#constructor)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:478*

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IHeaderProps](../interfaces/iheaderprops.md) |
`context?` | any |

**Returns:** [HeaderCell](headercell.md)

## Properties

### context

•  **context**: any

*Inherited from [Icon](icon.md).[context](icon.md#context)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:476*

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

___

### mMinWidth

• `Private` **mMinWidth**: number = -1

*Defined in Work/vortex/src/controls/table/HeaderCell.tsx:35*

___

### mRef

• `Private` **mRef**: HTMLDivElement = null

*Defined in Work/vortex/src/controls/table/HeaderCell.tsx:36*

___

### props

• `Readonly` **props**: Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)> & Readonly\<{ children?: ReactNode  }>

*Inherited from [Icon](icon.md).[props](icon.md#props)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:501*

___

### refs

•  **refs**: { [key:string]: ReactInstance;  }

*Inherited from [Icon](icon.md).[refs](icon.md#refs)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:507*

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

___

### state

•  **state**: Readonly\<{}>

*Inherited from [Icon](icon.md).[state](icon.md#state)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:502*

___

### contextType

▪ `Static` `Optional` **contextType**: Context\<any>

*Inherited from [Icon](icon.md).[contextType](icon.md#contexttype)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:458*

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)>, `nextState`: Readonly\<{}>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)> |
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

▸ `Optional`**componentDidMount**(): void

*Inherited from [ActionControl](actioncontrol.md).[componentDidMount](actioncontrol.md#componentdidmount)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:610*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** void

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)>, `prevState`: Readonly\<{}>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)>, `nextState`: Readonly\<{}>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)> |
`nextState` | Readonly\<{}> |
`nextContext` | any |

**Returns:** void

___

### cycleDirection

▸ `Private`**cycleDirection**(`evt`: MouseEvent\<any>): void

*Defined in Work/vortex/src/controls/table/HeaderCell.tsx:115*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | MouseEvent\<any> |

**Returns:** void

___

### forceUpdate

▸ **forceUpdate**(`callback?`: () => void): void

*Inherited from [Icon](icon.md).[forceUpdate](icon.md#forceupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:493*

#### Parameters:

Name | Type |
------ | ------ |
`callback?` | () => void |

**Returns:** void

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)>, `prevState`: Readonly\<{}>): any \| null

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
`prevProps` | Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)> |
`prevState` | Readonly\<{}> |

**Returns:** any \| null

___

### render

▸ **render**(): Element

*Overrides [ComponentEx](componentex.md).[render](componentex.md#render)*

*Defined in Work/vortex/src/controls/table/HeaderCell.tsx:47*

**Returns:** Element

___

### renderGroupIndicator

▸ `Private`**renderGroupIndicator**(): Element

*Defined in Work/vortex/src/controls/table/HeaderCell.tsx:86*

**Returns:** Element

___

### renderSortIndicator

▸ `Private`**renderSortIndicator**(): Element

*Defined in Work/vortex/src/controls/table/HeaderCell.tsx:101*

**Returns:** Element

___

### setDirection

▸ `Private`**setDirection**(`dir`: [SortDirection](../globals.md#sortdirection)): void

*Defined in Work/vortex/src/controls/table/HeaderCell.tsx:132*

#### Parameters:

Name | Type |
------ | ------ |
`dir` | [SortDirection](../globals.md#sortdirection) |

**Returns:** void

___

### setGroup

▸ `Private`**setGroup**(`evt`: any): void

*Defined in Work/vortex/src/controls/table/HeaderCell.tsx:126*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | any |

**Returns:** void

___

### setRef

▸ `Private`**setRef**(`ref`: HTMLDivElement): void

*Defined in Work/vortex/src/controls/table/HeaderCell.tsx:111*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | HTMLDivElement |

**Returns:** void

___

### setState

▸ **setState**\<K>(`state`: (prevState: Readonly\<{}>, props: Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)>) => Pick\<{}, K> \| {} \| null \| Pick\<{}, K> \| {} \| null, `callback?`: () => void): void

*Inherited from [Icon](icon.md).[setState](icon.md#setstate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:488*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof {} |

#### Parameters:

Name | Type |
------ | ------ |
`state` | (prevState: Readonly\<{}>, props: Readonly\<[IHeaderProps](../interfaces/iheaderprops.md)>) => Pick\<{}, K> \| {} \| null \| Pick\<{}, K> \| {} \| null |
`callback?` | () => void |

**Returns:** void

___

### shouldComponentUpdate

▸ **shouldComponentUpdate**(`newProps`: [IHeaderProps](../interfaces/iheaderprops.md)): boolean

*Overrides [Icon](icon.md).[shouldComponentUpdate](icon.md#shouldcomponentupdate)*

*Defined in Work/vortex/src/controls/table/HeaderCell.tsx:38*

#### Parameters:

Name | Type |
------ | ------ |
`newProps` | [IHeaderProps](../interfaces/iheaderprops.md) |

**Returns:** boolean

___

### updateWidth

▸ **updateWidth**(): void

*Defined in Work/vortex/src/controls/table/HeaderCell.tsx:78*

**Returns:** void
