**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ComponentEx

# Class: ComponentEx\<P, S>

convenience extension for React.Component that adds support for the
i18n library.

This whole module is just here to reduce the code required for "decorated"
components.

**`export`** 

## Type parameters

Name | Type | Description |
------ | ------ | ------ |
`P` | - |  |
`S` | object |   |

## Hierarchy

* Component\<P & Partial\<WithTranslation>, S>

  ↳ **ComponentEx**

  ↳↳ [ErrorBoundary](errorboundary.md)

  ↳↳ [More](more.md)

  ↳↳ [ContextMenu](contextmenu.md)

  ↳↳ [Advanced](advanced.md)

  ↳↳ [DraggableList](draggablelist.md)

  ↳↳ [Dropzone](dropzone.md)

  ↳↳ [GroupingRow](groupingrow.md)

  ↳↳ [DetailBox](detailbox.md)

  ↳↳ [SuperTable](supertable.md)

  ↳↳ [DateTimeFilterComponent](datetimefiltercomponent.md)

  ↳↳ [TriStateCheckbox](tristatecheckbox.md)

  ↳↳ [MainPage](mainpage.md)

  ↳↳ [Dialog](dialog.md)

  ↳↳ [MainFooter](mainfooter.md)

  ↳↳ [MainPageContainer](mainpagecontainer.md)

  ↳↳ [Notification](notification.md)

  ↳↳ [NotificationButton](notificationbutton.md)

  ↳↳ [QuickLauncher](quicklauncher.md)

  ↳↳ [Settings](settings.md)

## Index

### Constructors

* [constructor](componentex.md#constructor)

### Properties

* [context](componentex.md#context)
* [nextState](componentex.md#nextstate)
* [props](componentex.md#props)
* [refs](componentex.md#refs)
* [state](componentex.md#state)
* [contextType](componentex.md#contexttype)

### Methods

* [UNSAFE\_componentWillMount](componentex.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](componentex.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](componentex.md#unsafe_componentwillupdate)
* [componentDidCatch](componentex.md#componentdidcatch)
* [componentDidMount](componentex.md#componentdidmount)
* [componentDidUpdate](componentex.md#componentdidupdate)
* [componentWillMount](componentex.md#componentwillmount)
* [componentWillReceiveProps](componentex.md#componentwillreceiveprops)
* [componentWillUnmount](componentex.md#componentwillunmount)
* [componentWillUpdate](componentex.md#componentwillupdate)
* [forceUpdate](componentex.md#forceupdate)
* [getSnapshotBeforeUpdate](componentex.md#getsnapshotbeforeupdate)
* [initState](componentex.md#initstate)
* [render](componentex.md#render)
* [setState](componentex.md#setstate)
* [shouldComponentUpdate](componentex.md#shouldcomponentupdate)

### Object literals

* [contextTypes](componentex.md#contexttypes)

## Constructors

### constructor

\+ **new ComponentEx**(`props`: Readonly\<P & Partial\<WithTranslation>>): [ComponentEx](componentex.md)

*Inherited from [Icon](icon.md).[constructor](icon.md#constructor)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:476*

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
------ | ------ |
`props` | Readonly\<P & Partial\<WithTranslation>> |

**Returns:** [ComponentEx](componentex.md)

\+ **new ComponentEx**(`props`: P & Partial\<WithTranslation>, `context?`: any): [ComponentEx](componentex.md)

*Inherited from [Icon](icon.md).[constructor](icon.md#constructor)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:478*

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
------ | ------ |
`props` | P & Partial\<WithTranslation> |
`context?` | any |

**Returns:** [ComponentEx](componentex.md)

## Properties

### context

•  **context**: [IComponentContext](../interfaces/icomponentcontext.md)

*Overrides [Icon](icon.md).[context](icon.md#context)*

*Defined in Work/vortex/src/util/ComponentEx.ts:132*

___

### nextState

•  **nextState**: S

*Defined in Work/vortex/src/util/ComponentEx.ts:134*

___

### props

• `Readonly` **props**: Readonly\<P & Partial\<WithTranslation>> & Readonly\<{ children?: ReactNode  }>

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

•  **state**: Readonly\<S>

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<P & Partial\<WithTranslation>>, `nextContext`: any): void

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
`nextProps` | Readonly\<P & Partial\<WithTranslation>> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<P & Partial\<WithTranslation>>, `nextState`: Readonly\<S>, `nextContext`: any): void

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
`nextProps` | Readonly\<P & Partial\<WithTranslation>> |
`nextState` | Readonly\<S> |
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

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<P & Partial\<WithTranslation>>, `prevState`: Readonly\<S>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<P & Partial\<WithTranslation>> |
`prevState` | Readonly\<S> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<P & Partial\<WithTranslation>>, `nextContext`: any): void

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
`nextProps` | Readonly\<P & Partial\<WithTranslation>> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<P & Partial\<WithTranslation>>, `nextState`: Readonly\<S>, `nextContext`: any): void

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
`nextProps` | Readonly\<P & Partial\<WithTranslation>> |
`nextState` | Readonly\<S> |
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

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<P & Partial\<WithTranslation>>, `prevState`: Readonly\<S>): any \| null

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
`prevProps` | Readonly\<P & Partial\<WithTranslation>> |
`prevState` | Readonly\<S> |

**Returns:** any \| null

___

### initState

▸ `Protected`**initState**(`value`: S, `delayed?`: boolean): void

*Defined in Work/vortex/src/util/ComponentEx.ts:136*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`value` | S | - |
`delayed` | boolean | false |

**Returns:** void

___

### render

▸ **render**(): ReactNode

*Inherited from [ComponentEx](componentex.md).[render](componentex.md#render)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:494*

**Returns:** ReactNode

___

### setState

▸ **setState**\<K>(`state`: (prevState: Readonly\<S>, props: Readonly\<P & Partial\<WithTranslation>>) => Pick\<S, K> \| S \| null \| Pick\<S, K> \| S \| null, `callback?`: () => void): void

*Inherited from [Icon](icon.md).[setState](icon.md#setstate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:488*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof S |

#### Parameters:

Name | Type |
------ | ------ |
`state` | (prevState: Readonly\<S>, props: Readonly\<P & Partial\<WithTranslation>>) => Pick\<S, K> \| S \| null \| Pick\<S, K> \| S \| null |
`callback?` | () => void |

**Returns:** void

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<P & Partial\<WithTranslation>>, `nextState`: Readonly\<S>, `nextContext`: any): boolean

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
`nextProps` | Readonly\<P & Partial\<WithTranslation>> |
`nextState` | Readonly\<S> |
`nextContext` | any |

**Returns:** boolean

## Object literals

### contextTypes

▪ `Static` **contextTypes**: object

*Defined in Work/vortex/src/util/ComponentEx.ts:126*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`api` | Validator\<object> | PropTypes.object.isRequired |
`getModifiers` | Requireable\<(...args: any[]) => any> | PropTypes.func |
`menuLayer` | Requireable\<object> | PropTypes.object |
