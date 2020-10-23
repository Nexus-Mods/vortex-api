**[vortex_devel](../README.md)**

> [Globals](../globals.md) / MyDropdown

# Class: MyDropdown

An enhanced dropdown that adjusts placement of the popover based on the
position within the container, so it doesn't get cut off (as long as the
popover isn't larger than half of the container)

## Hierarchy

* Component\<[IProps](../globals.md#iprops), { up: boolean  }>

  ↳ **MyDropdown**

## Index

### Constructors

* [constructor](mydropdown.md#constructor)

### Properties

* [context](mydropdown.md#context)
* [mNode](mydropdown.md#mnode)
* [mOpen](mydropdown.md#mopen)
* [props](mydropdown.md#props)
* [refs](mydropdown.md#refs)
* [state](mydropdown.md#state)
* [Menu](mydropdown.md#menu)
* [Toggle](mydropdown.md#toggle)
* [contextType](mydropdown.md#contexttype)

### Accessors

* [bounds](mydropdown.md#bounds)

### Methods

* [UNSAFE\_componentWillMount](mydropdown.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](mydropdown.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](mydropdown.md#unsafe_componentwillupdate)
* [componentDidCatch](mydropdown.md#componentdidcatch)
* [componentDidMount](mydropdown.md#componentdidmount)
* [componentDidUpdate](mydropdown.md#componentdidupdate)
* [componentWillMount](mydropdown.md#componentwillmount)
* [componentWillReceiveProps](mydropdown.md#componentwillreceiveprops)
* [componentWillUnmount](mydropdown.md#componentwillunmount)
* [componentWillUpdate](mydropdown.md#componentwillupdate)
* [forceUpdate](mydropdown.md#forceupdate)
* [getSnapshotBeforeUpdate](mydropdown.md#getsnapshotbeforeupdate)
* [onToggle](mydropdown.md#ontoggle)
* [render](mydropdown.md#render)
* [setState](mydropdown.md#setstate)
* [shouldComponentUpdate](mydropdown.md#shouldcomponentupdate)

## Constructors

### constructor

\+ **new MyDropdown**(`props`: [IProps](../globals.md#iprops)): [MyDropdown](mydropdown.md)

*Overrides [Icon](icon.md).[constructor](icon.md#constructor)*

*Defined in Work/vortex/src/controls/Dropdown.tsx:37*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [MyDropdown](mydropdown.md)

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

### mNode

• `Private` **mNode**: Element

*Defined in Work/vortex/src/controls/Dropdown.tsx:36*

___

### mOpen

• `Private` **mOpen**: boolean = false

*Defined in Work/vortex/src/controls/Dropdown.tsx:37*

___

### props

• `Readonly` **props**: Readonly\<[IProps](../globals.md#iprops)> & Readonly\<{ children?: ReactNode  }>

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

•  **state**: Readonly\<{ up: boolean  }>

*Inherited from [Icon](icon.md).[state](icon.md#state)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:502*

___

### Menu

▪ `Static` **Menu**: *typeof* Menu = Dropdown.Menu

*Defined in Work/vortex/src/controls/Dropdown.tsx:34*

___

### Toggle

▪ `Static` **Toggle**: *typeof* Toggle = Dropdown.Toggle

*Defined in Work/vortex/src/controls/Dropdown.tsx:35*

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

## Accessors

### bounds

• `Private`get **bounds**(): ClientRect

*Defined in Work/vortex/src/controls/Dropdown.tsx:64*

**Returns:** ClientRect

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<[IProps](../globals.md#iprops)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops)> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops)>, `nextState`: Readonly\<{ up: boolean  }>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops)> |
`nextState` | Readonly\<{ up: boolean  }> |
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

*Defined in Work/vortex/src/controls/Dropdown.tsx:47*

**Returns:** void

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops)>, `prevState`: Readonly\<{ up: boolean  }>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[IProps](../globals.md#iprops)> |
`prevState` | Readonly\<{ up: boolean  }> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<[IProps](../globals.md#iprops)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops)> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops)>, `nextState`: Readonly\<{ up: boolean  }>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops)> |
`nextState` | Readonly\<{ up: boolean  }> |
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

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops)>, `prevState`: Readonly\<{ up: boolean  }>): any \| null

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
`prevProps` | Readonly\<[IProps](../globals.md#iprops)> |
`prevState` | Readonly\<{ up: boolean  }> |

**Returns:** any \| null

___

### onToggle

▸ `Private`**onToggle**(`isOpen`: boolean): void

*Defined in Work/vortex/src/controls/Dropdown.tsx:77*

#### Parameters:

Name | Type |
------ | ------ |
`isOpen` | boolean |

**Returns:** void

___

### render

▸ **render**(): Element

*Overrides [ComponentEx](componentex.md).[render](componentex.md#render)*

*Defined in Work/vortex/src/controls/Dropdown.tsx:51*

**Returns:** Element

___

### setState

▸ **setState**\<K>(`state`: (prevState: Readonly\<{ up: boolean  }>, props: Readonly\<[IProps](../globals.md#iprops)>) => Pick\<{ up: boolean  }, K> \| { up: boolean  } \| null \| Pick\<{ up: boolean  }, K> \| { up: boolean  } \| null, `callback?`: () => void): void

*Inherited from [Icon](icon.md).[setState](icon.md#setstate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:488*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof { up: boolean  } |

#### Parameters:

Name | Type |
------ | ------ |
`state` | (prevState: Readonly\<{ up: boolean  }>, props: Readonly\<[IProps](../globals.md#iprops)>) => Pick\<{ up: boolean  }, K> \| { up: boolean  } \| null \| Pick\<{ up: boolean  }, K> \| { up: boolean  } \| null |
`callback?` | () => void |

**Returns:** void

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops)>, `nextState`: Readonly\<{ up: boolean  }>, `nextContext`: any): boolean

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops)> |
`nextState` | Readonly\<{ up: boolean  }> |
`nextContext` | any |

**Returns:** boolean
