**[vortex_devel](../README.md)**

> [Globals](../globals.md) / OptionsFilterComponent

# Class: OptionsFilterComponent

## Hierarchy

* Component\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md), {}>

  ↳ **OptionsFilterComponent**

## Index

### Constructors

* [constructor](optionsfiltercomponent.md#constructor)

### Properties

* [context](optionsfiltercomponent.md#context)
* [props](optionsfiltercomponent.md#props)
* [refs](optionsfiltercomponent.md#refs)
* [state](optionsfiltercomponent.md#state)
* [contextType](optionsfiltercomponent.md#contexttype)

### Methods

* [UNSAFE\_componentWillMount](optionsfiltercomponent.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](optionsfiltercomponent.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](optionsfiltercomponent.md#unsafe_componentwillupdate)
* [changeFilter](optionsfiltercomponent.md#changefilter)
* [changeFilterMulti](optionsfiltercomponent.md#changefiltermulti)
* [componentDidCatch](optionsfiltercomponent.md#componentdidcatch)
* [componentDidMount](optionsfiltercomponent.md#componentdidmount)
* [componentDidUpdate](optionsfiltercomponent.md#componentdidupdate)
* [componentWillMount](optionsfiltercomponent.md#componentwillmount)
* [componentWillReceiveProps](optionsfiltercomponent.md#componentwillreceiveprops)
* [componentWillUnmount](optionsfiltercomponent.md#componentwillunmount)
* [componentWillUpdate](optionsfiltercomponent.md#componentwillupdate)
* [forceUpdate](optionsfiltercomponent.md#forceupdate)
* [getSnapshotBeforeUpdate](optionsfiltercomponent.md#getsnapshotbeforeupdate)
* [render](optionsfiltercomponent.md#render)
* [setState](optionsfiltercomponent.md#setstate)
* [shouldComponentUpdate](optionsfiltercomponent.md#shouldcomponentupdate)

## Constructors

### constructor

\+ **new OptionsFilterComponent**(`props`: Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)>): [OptionsFilterComponent](optionsfiltercomponent.md)

*Inherited from [Icon](icon.md).[constructor](icon.md#constructor)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:476*

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
------ | ------ |
`props` | Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)> |

**Returns:** [OptionsFilterComponent](optionsfiltercomponent.md)

\+ **new OptionsFilterComponent**(`props`: [IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md), `context?`: any): [OptionsFilterComponent](optionsfiltercomponent.md)

*Inherited from [Icon](icon.md).[constructor](icon.md#constructor)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:478*

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md) |
`context?` | any |

**Returns:** [OptionsFilterComponent](optionsfiltercomponent.md)

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

• `Readonly` **props**: Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)> & Readonly\<{ children?: ReactNode  }>

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)>, `nextState`: Readonly\<{}>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)> |
`nextState` | Readonly\<{}> |
`nextContext` | any |

**Returns:** void

___

### changeFilter

▸ `Private`**changeFilter**(`filter`: { label: string ; value: any  }): void

*Defined in Work/vortex/src/controls/table/OptionsFilter.tsx:44*

#### Parameters:

Name | Type |
------ | ------ |
`filter` | { label: string ; value: any  } |

**Returns:** void

___

### changeFilterMulti

▸ `Private`**changeFilterMulti**(`filter`: Array\<{ label: string ; value: any  }>): void

*Defined in Work/vortex/src/controls/table/OptionsFilter.tsx:39*

#### Parameters:

Name | Type |
------ | ------ |
`filter` | Array\<{ label: string ; value: any  }> |

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

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)>, `prevState`: Readonly\<{}>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)>, `nextState`: Readonly\<{}>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)> |
`nextState` | Readonly\<{}> |
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

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)>, `prevState`: Readonly\<{}>): any \| null

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
`prevProps` | Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)> |
`prevState` | Readonly\<{}> |

**Returns:** any \| null

___

### render

▸ **render**(): Element

*Overrides [ComponentEx](componentex.md).[render](componentex.md#render)*

*Defined in Work/vortex/src/controls/table/OptionsFilter.tsx:20*

**Returns:** Element

___

### setState

▸ **setState**\<K>(`state`: (prevState: Readonly\<{}>, props: Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)>) => Pick\<{}, K> \| {} \| null \| Pick\<{}, K> \| {} \| null, `callback?`: () => void): void

*Inherited from [Icon](icon.md).[setState](icon.md#setstate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:488*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof {} |

#### Parameters:

Name | Type |
------ | ------ |
`state` | (prevState: Readonly\<{}>, props: Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)>) => Pick\<{}, K> \| {} \| null \| Pick\<{}, K> \| {} \| null |
`callback?` | () => void |

**Returns:** void

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)>, `nextState`: Readonly\<{}>, `nextContext`: any): boolean

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & [IBoundProps](../interfaces/iboundprops.md)> |
`nextState` | Readonly\<{}> |
`nextContext` | any |

**Returns:** boolean
