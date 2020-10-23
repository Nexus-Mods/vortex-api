**[vortex_devel](../README.md)**

> [Globals](../globals.md) / TableCell

# Class: TableCell

## Hierarchy

* Component\<[ICellProps](../interfaces/icellprops.md), { isOpen: boolean  }>

  ↳ **TableCell**

## Index

### Constructors

* [constructor](tablecell.md#constructor)

### Properties

* [context](tablecell.md#context)
* [props](tablecell.md#props)
* [refs](tablecell.md#refs)
* [state](tablecell.md#state)
* [contextType](tablecell.md#contexttype)

### Methods

* [UNSAFE\_componentWillMount](tablecell.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](tablecell.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](tablecell.md#unsafe_componentwillupdate)
* [changeCell](tablecell.md#changecell)
* [changeCellSelect](tablecell.md#changecellselect)
* [componentDidCatch](tablecell.md#componentdidcatch)
* [componentDidMount](tablecell.md#componentdidmount)
* [componentDidUpdate](tablecell.md#componentdidupdate)
* [componentWillMount](tablecell.md#componentwillmount)
* [componentWillReceiveProps](tablecell.md#componentwillreceiveprops)
* [componentWillUnmount](tablecell.md#componentwillunmount)
* [componentWillUpdate](tablecell.md#componentwillupdate)
* [cycle](tablecell.md#cycle)
* [forceUpdate](tablecell.md#forceupdate)
* [getSnapshotBeforeUpdate](tablecell.md#getsnapshotbeforeupdate)
* [openChoice](tablecell.md#openchoice)
* [render](tablecell.md#render)
* [renderAction](tablecell.md#renderaction)
* [renderChoice](tablecell.md#renderchoice)
* [renderChoices](tablecell.md#renderchoices)
* [renderSelect](tablecell.md#renderselect)
* [setState](tablecell.md#setstate)
* [shouldComponentUpdate](tablecell.md#shouldcomponentupdate)
* [toggle](tablecell.md#toggle)

## Constructors

### constructor

\+ **new TableCell**(`props`: [ICellProps](../interfaces/icellprops.md)): [TableCell](tablecell.md)

*Overrides [Icon](icon.md).[constructor](icon.md#constructor)*

*Defined in Work/vortex/src/controls/table/TableRow.tsx:41*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [ICellProps](../interfaces/icellprops.md) |

**Returns:** [TableCell](tablecell.md)

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

• `Readonly` **props**: Readonly\<[ICellProps](../interfaces/icellprops.md)> & Readonly\<{ children?: ReactNode  }>

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

•  **state**: Readonly\<{ isOpen: boolean  }>

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<[ICellProps](../interfaces/icellprops.md)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[ICellProps](../interfaces/icellprops.md)> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[ICellProps](../interfaces/icellprops.md)>, `nextState`: Readonly\<{ isOpen: boolean  }>, `nextContext`: any): void

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
`nextProps` | Readonly\<[ICellProps](../interfaces/icellprops.md)> |
`nextState` | Readonly\<{ isOpen: boolean  }> |
`nextContext` | any |

**Returns:** void

___

### changeCell

▸ `Private`**changeCell**(`key`: any): void

*Defined in Work/vortex/src/controls/table/TableRow.tsx:184*

#### Parameters:

Name | Type |
------ | ------ |
`key` | any |

**Returns:** void

___

### changeCellSelect

▸ `Private`**changeCellSelect**(`value`: any): void

*Defined in Work/vortex/src/controls/table/TableRow.tsx:189*

#### Parameters:

Name | Type |
------ | ------ |
`value` | any |

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

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[ICellProps](../interfaces/icellprops.md)>, `prevState`: Readonly\<{ isOpen: boolean  }>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[ICellProps](../interfaces/icellprops.md)> |
`prevState` | Readonly\<{ isOpen: boolean  }> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<[ICellProps](../interfaces/icellprops.md)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[ICellProps](../interfaces/icellprops.md)> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[ICellProps](../interfaces/icellprops.md)>, `nextState`: Readonly\<{ isOpen: boolean  }>, `nextContext`: any): void

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
`nextProps` | Readonly\<[ICellProps](../interfaces/icellprops.md)> |
`nextState` | Readonly\<{ isOpen: boolean  }> |
`nextContext` | any |

**Returns:** void

___

### cycle

▸ `Private`**cycle**(): void

*Defined in Work/vortex/src/controls/table/TableRow.tsx:179*

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

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[ICellProps](../interfaces/icellprops.md)>, `prevState`: Readonly\<{ isOpen: boolean  }>): any \| null

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
`prevProps` | Readonly\<[ICellProps](../interfaces/icellprops.md)> |
`prevState` | Readonly\<{ isOpen: boolean  }> |

**Returns:** any \| null

___

### openChoice

▸ `Private`**openChoice**(`isOpen`: boolean): void

*Defined in Work/vortex/src/controls/table/TableRow.tsx:197*

#### Parameters:

Name | Type |
------ | ------ |
`isOpen` | boolean |

**Returns:** void

___

### render

▸ **render**(): Element

*Overrides [ComponentEx](componentex.md).[render](componentex.md#render)*

*Defined in Work/vortex/src/controls/table/TableRow.tsx:57*

**Returns:** Element

___

### renderAction

▸ `Private`**renderAction**(`data`: any): Element

*Defined in Work/vortex/src/controls/table/TableRow.tsx:115*

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** Element

___

### renderChoice

▸ `Private`**renderChoice**(`choice`: [IEditChoice](../interfaces/ieditchoice.md)): Element

*Defined in Work/vortex/src/controls/table/TableRow.tsx:201*

#### Parameters:

Name | Type |
------ | ------ |
`choice` | [IEditChoice](../interfaces/ieditchoice.md) |

**Returns:** Element

___

### renderChoices

▸ `Private`**renderChoices**(`data`: any): Element

*Defined in Work/vortex/src/controls/table/TableRow.tsx:106*

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** Element

___

### renderSelect

▸ `Private`**renderSelect**(`data`: any): Element

*Defined in Work/vortex/src/controls/table/TableRow.tsx:157*

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |

**Returns:** Element

___

### setState

▸ **setState**\<K>(`state`: (prevState: Readonly\<{ isOpen: boolean  }>, props: Readonly\<[ICellProps](../interfaces/icellprops.md)>) => Pick\<{ isOpen: boolean  }, K> \| { isOpen: boolean  } \| null \| Pick\<{ isOpen: boolean  }, K> \| { isOpen: boolean  } \| null, `callback?`: () => void): void

*Inherited from [Icon](icon.md).[setState](icon.md#setstate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:488*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof { isOpen: boolean  } |

#### Parameters:

Name | Type |
------ | ------ |
`state` | (prevState: Readonly\<{ isOpen: boolean  }>, props: Readonly\<[ICellProps](../interfaces/icellprops.md)>) => Pick\<{ isOpen: boolean  }, K> \| { isOpen: boolean  } \| null \| Pick\<{ isOpen: boolean  }, K> \| { isOpen: boolean  } \| null |
`callback?` | () => void |

**Returns:** void

___

### shouldComponentUpdate

▸ **shouldComponentUpdate**(`newProps`: [ICellProps](../interfaces/icellprops.md), `newState`: { isOpen: boolean  }): boolean

*Overrides [Icon](icon.md).[shouldComponentUpdate](icon.md#shouldcomponentupdate)*

*Defined in Work/vortex/src/controls/table/TableRow.tsx:49*

#### Parameters:

Name | Type |
------ | ------ |
`newProps` | [ICellProps](../interfaces/icellprops.md) |
`newState` | { isOpen: boolean  } |

**Returns:** boolean

___

### toggle

▸ `Private`**toggle**(): void

*Defined in Work/vortex/src/controls/table/TableRow.tsx:215*

**Returns:** void
