**[vortex_devel](../README.md)**

> [Globals](../globals.md) / TableRow

# Class: TableRow

## Hierarchy

* Component\<[IRowProps](../interfaces/irowprops.md), IRowState>

  ↳ **TableRow**

## Index

### Constructors

* [constructor](tablerow.md#constructor)

### Properties

* [context](tablerow.md#context)
* [props](tablerow.md#props)
* [refs](tablerow.md#refs)
* [state](tablerow.md#state)
* [contextType](tablerow.md#contexttype)

### Methods

* [UNSAFE\_componentWillMount](tablerow.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](tablerow.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](tablerow.md#unsafe_componentwillupdate)
* [componentDidCatch](tablerow.md#componentdidcatch)
* [componentDidMount](tablerow.md#componentdidmount)
* [componentDidUpdate](tablerow.md#componentdidupdate)
* [componentWillMount](tablerow.md#componentwillmount)
* [componentWillReceiveProps](tablerow.md#componentwillreceiveprops)
* [componentWillUnmount](tablerow.md#componentwillunmount)
* [componentWillUpdate](tablerow.md#componentwillupdate)
* [forceUpdate](tablerow.md#forceupdate)
* [getSnapshotBeforeUpdate](tablerow.md#getsnapshotbeforeupdate)
* [highlight](tablerow.md#highlight)
* [onContext](tablerow.md#oncontext)
* [onHideContext](tablerow.md#onhidecontext)
* [render](tablerow.md#render)
* [renderAttribute](tablerow.md#renderattribute)
* [renderAttributeExtra](tablerow.md#renderattributeextra)
* [renderCell](tablerow.md#rendercell)
* [renderPlaceholder](tablerow.md#renderplaceholder)
* [renderRow](tablerow.md#renderrow)
* [setState](tablerow.md#setstate)
* [setVisible](tablerow.md#setvisible)
* [shouldComponentUpdate](tablerow.md#shouldcomponentupdate)

## Constructors

### constructor

\+ **new TableRow**(`props`: [IRowProps](../interfaces/irowprops.md)): [TableRow](tablerow.md)

*Overrides [Icon](icon.md).[constructor](icon.md#constructor)*

*Defined in Work/vortex/src/controls/table/TableRow.tsx:252*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IRowProps](../interfaces/irowprops.md) |

**Returns:** [TableRow](tablerow.md)

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

### props

• `Readonly` **props**: Readonly\<[IRowProps](../interfaces/irowprops.md)> & Readonly\<{ children?: ReactNode  }>

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

•  **state**: Readonly\<IRowState>

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<[IRowProps](../interfaces/irowprops.md)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IRowProps](../interfaces/irowprops.md)> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[IRowProps](../interfaces/irowprops.md)>, `nextState`: Readonly\<IRowState>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IRowProps](../interfaces/irowprops.md)> |
`nextState` | Readonly\<IRowState> |
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

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[IRowProps](../interfaces/irowprops.md)>, `prevState`: Readonly\<IRowState>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[IRowProps](../interfaces/irowprops.md)> |
`prevState` | Readonly\<IRowState> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<[IRowProps](../interfaces/irowprops.md)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IRowProps](../interfaces/irowprops.md)> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[IRowProps](../interfaces/irowprops.md)>, `nextState`: Readonly\<IRowState>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IRowProps](../interfaces/irowprops.md)> |
`nextState` | Readonly\<IRowState> |
`nextContext` | any |

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

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[IRowProps](../interfaces/irowprops.md)>, `prevState`: Readonly\<IRowState>): any \| null

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
`prevProps` | Readonly\<[IRowProps](../interfaces/irowprops.md)> |
`prevState` | Readonly\<IRowState> |

**Returns:** any \| null

___

### highlight

▸ `Private`**highlight**(`highlight`: boolean): void

*Defined in Work/vortex/src/controls/table/TableRow.tsx:430*

#### Parameters:

Name | Type |
------ | ------ |
`highlight` | boolean |

**Returns:** void

___

### onContext

▸ `Private`**onContext**(`event`: MouseEvent\<any>): void

*Defined in Work/vortex/src/controls/table/TableRow.tsx:460*

#### Parameters:

Name | Type |
------ | ------ |
`event` | MouseEvent\<any> |

**Returns:** void

___

### onHideContext

▸ `Private`**onHideContext**(): void

*Defined in Work/vortex/src/controls/table/TableRow.tsx:464*

**Returns:** void

___

### render

▸ **render**(): Element \| Element[]

*Overrides [ComponentEx](componentex.md).[render](componentex.md#render)*

*Defined in Work/vortex/src/controls/table/TableRow.tsx:274*

**Returns:** Element \| Element[]

___

### renderAttribute

▸ `Private`**renderAttribute**(`attribute`: [ITableAttribute](../interfaces/itableattribute.md), `index`: number, `arr`: [ITableAttribute](../interfaces/itableattribute.md)[]): Element

*Defined in Work/vortex/src/controls/table/TableRow.tsx:389*

#### Parameters:

Name | Type |
------ | ------ |
`attribute` | [ITableAttribute](../interfaces/itableattribute.md) |
`index` | number |
`arr` | [ITableAttribute](../interfaces/itableattribute.md)[] |

**Returns:** Element

___

### renderAttributeExtra

▸ `Private`**renderAttributeExtra**(`attribute`: [ITableAttribute](../interfaces/itableattribute.md)): Element

*Defined in Work/vortex/src/controls/table/TableRow.tsx:412*

#### Parameters:

Name | Type |
------ | ------ |
`attribute` | [ITableAttribute](../interfaces/itableattribute.md) |

**Returns:** Element

___

### renderCell

▸ `Private`**renderCell**(`attribute`: [ITableAttribute](../interfaces/itableattribute.md), `rawData`: any, `calculatedData`: any, `t`: TFunction, `right`: boolean): Element

*Defined in Work/vortex/src/controls/table/TableRow.tsx:435*

#### Parameters:

Name | Type |
------ | ------ |
`attribute` | [ITableAttribute](../interfaces/itableattribute.md) |
`rawData` | any |
`calculatedData` | any |
`t` | TFunction |
`right` | boolean |

**Returns:** Element

___

### renderPlaceholder

▸ `Private`**renderPlaceholder**(): React.ReactNode

*Defined in Work/vortex/src/controls/table/TableRow.tsx:326*

**Returns:** React.ReactNode

___

### renderRow

▸ `Private`**renderRow**(): React.ReactNode

*Defined in Work/vortex/src/controls/table/TableRow.tsx:332*

**Returns:** React.ReactNode

___

### setState

▸ **setState**\<K>(`state`: (prevState: Readonly\<IRowState>, props: Readonly\<[IRowProps](../interfaces/irowprops.md)>) => Pick\<IRowState, K> \| IRowState \| null \| Pick\<IRowState, K> \| IRowState \| null, `callback?`: () => void): void

*Inherited from [Icon](icon.md).[setState](icon.md#setstate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:488*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof IRowState |

#### Parameters:

Name | Type |
------ | ------ |
`state` | (prevState: Readonly\<IRowState>, props: Readonly\<[IRowProps](../interfaces/irowprops.md)>) => Pick\<IRowState, K> \| IRowState \| null \| Pick\<IRowState, K> \| IRowState \| null |
`callback?` | () => void |

**Returns:** void

___

### setVisible

▸ `Private`**setVisible**(`visible`: boolean): void

*Defined in Work/vortex/src/controls/table/TableRow.tsx:382*

#### Parameters:

Name | Type |
------ | ------ |
`visible` | boolean |

**Returns:** void

___

### shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: [IRowProps](../interfaces/irowprops.md), `nextState`: IRowState): boolean

*Overrides [Icon](icon.md).[shouldComponentUpdate](icon.md#shouldcomponentupdate)*

*Defined in Work/vortex/src/controls/table/TableRow.tsx:261*

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | [IRowProps](../interfaces/irowprops.md) |
`nextState` | IRowState |

**Returns:** boolean
