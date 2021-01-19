**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IconBar

# Class: IconBar

represents an extensible row of icons/buttons/actions
In the simplest form this is simply a bunch of buttons that will run
an action if clicked, but an icon can also be more dynamic (i.e. rendering
dynamic content or having multiple states)

## Hierarchy

* Component\<[IProps](../globals.md#iprops), { open: boolean  }>

  ↳ **IconBar**

## Index

### Constructors

* [constructor](iconbar.md#constructor)

### Properties

* [context](iconbar.md#context)
* [mBackgroundClick](iconbar.md#mbackgroundclick)
* [portalTargetRef](iconbar.md#portaltargetref)
* [props](iconbar.md#props)
* [refs](iconbar.md#refs)
* [state](iconbar.md#state)
* [contextType](iconbar.md#contexttype)

### Methods

* [UNSAFE\_componentWillMount](iconbar.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](iconbar.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](iconbar.md#unsafe_componentwillupdate)
* [componentDidCatch](iconbar.md#componentdidcatch)
* [componentDidMount](iconbar.md#componentdidmount)
* [componentDidUpdate](iconbar.md#componentdidupdate)
* [componentWillMount](iconbar.md#componentwillmount)
* [componentWillReceiveProps](iconbar.md#componentwillreceiveprops)
* [componentWillUnmount](iconbar.md#componentwillunmount)
* [componentWillUpdate](iconbar.md#componentwillupdate)
* [forceUpdate](iconbar.md#forceupdate)
* [getSnapshotBeforeUpdate](iconbar.md#getsnapshotbeforeupdate)
* [render](iconbar.md#render)
* [renderCustomIcon](iconbar.md#rendercustomicon)
* [renderIcon](iconbar.md#rendericon)
* [renderIconGroup](iconbar.md#rendericongroup)
* [renderIconInner](iconbar.md#rendericoninner)
* [renderIcons](iconbar.md#rendericons)
* [renderMenuItem](iconbar.md#rendermenuitem)
* [setPortalTargetRef](iconbar.md#setportaltargetref)
* [setState](iconbar.md#setstate)
* [shouldComponentUpdate](iconbar.md#shouldcomponentupdate)
* [toggleOpen](iconbar.md#toggleopen)
* [updateBGClick](iconbar.md#updatebgclick)

### Object literals

* [contextTypes](iconbar.md#contexttypes)

## Constructors

### constructor

\+ **new IconBar**(`props`: [IProps](../globals.md#iprops)): [IconBar](iconbar.md)

*Overrides [Icon](icon.md).[constructor](icon.md#constructor)*

*Defined in Work/vortex/src/controls/IconBar.tsx:95*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [IconBar](iconbar.md)

## Properties

### context

•  **context**: { menuLayer: Element  }

*Overrides [Icon](icon.md).[context](icon.md#context)*

*Defined in Work/vortex/src/controls/IconBar.tsx:92*

#### Type declaration:

Name | Type |
------ | ------ |
`menuLayer` | Element |

___

### mBackgroundClick

• `Private` **mBackgroundClick**: (evt: MouseEvent\<ButtonGroup>) => void

*Defined in Work/vortex/src/controls/IconBar.tsx:95*

___

### portalTargetRef

• `Private` **portalTargetRef**: Element

*Defined in Work/vortex/src/controls/IconBar.tsx:94*

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

•  **state**: Readonly\<{ open: boolean  }>

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

▸ **UNSAFE_componentWillReceiveProps**(): void

*Overrides [ComponentEx](componentex.md).[UNSAFE_componentWillReceiveProps](componentex.md#unsafe_componentwillreceiveprops)*

*Defined in Work/vortex/src/controls/IconBar.tsx:107*

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops)>, `nextState`: Readonly\<{ open: boolean  }>, `nextContext`: any): void

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
`nextState` | Readonly\<{ open: boolean  }> |
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

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops)>, `prevState`: Readonly\<{ open: boolean  }>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[IProps](../globals.md#iprops)> |
`prevState` | Readonly\<{ open: boolean  }> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops)>, `nextState`: Readonly\<{ open: boolean  }>, `nextContext`: any): void

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
`nextState` | Readonly\<{ open: boolean  }> |
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

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops)>, `prevState`: Readonly\<{ open: boolean  }>): any \| null

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
`prevState` | Readonly\<{ open: boolean  }> |

**Returns:** any \| null

___

### render

▸ **render**(): Element

*Overrides [ComponentEx](componentex.md).[render](componentex.md#render)*

*Defined in Work/vortex/src/controls/IconBar.tsx:111*

**Returns:** Element

___

### renderCustomIcon

▸ `Private`**renderCustomIcon**(`id`: string, `icon`: [IActionDefinition](../interfaces/iactiondefinition.md)): Element

*Defined in Work/vortex/src/controls/IconBar.tsx:306*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |
`icon` | [IActionDefinition](../interfaces/iactiondefinition.md) |

**Returns:** Element

___

### renderIcon

▸ `Private`**renderIcon**(`icon`: [IActionDefinitionEx](../interfaces/iactiondefinitionex.md), `index`: number): Element

*Defined in Work/vortex/src/controls/IconBar.tsx:227*

#### Parameters:

Name | Type |
------ | ------ |
`icon` | [IActionDefinitionEx](../interfaces/iactiondefinitionex.md) |
`index` | number |

**Returns:** Element

___

### renderIconGroup

▸ `Private`**renderIconGroup**(`icons`: [IActionDefinition](../interfaces/iactiondefinition.md)[], `index`: number): Element

*Defined in Work/vortex/src/controls/IconBar.tsx:247*

#### Parameters:

Name | Type |
------ | ------ |
`icons` | [IActionDefinition](../interfaces/iactiondefinition.md)[] |
`index` | number |

**Returns:** Element

___

### renderIconInner

▸ `Private`**renderIconInner**(`icon`: [IActionDefinitionEx](../interfaces/iactiondefinitionex.md), `index`: number, `forceButtonType?`: [ButtonType](../globals.md#buttontype)): Element

*Defined in Work/vortex/src/controls/IconBar.tsx:267*

#### Parameters:

Name | Type |
------ | ------ |
`icon` | [IActionDefinitionEx](../interfaces/iactiondefinitionex.md) |
`index` | number |
`forceButtonType?` | [ButtonType](../globals.md#buttontype) |

**Returns:** Element

___

### renderIcons

▸ `Private`**renderIcons**(`icons`: [IActionDefinitionEx](../interfaces/iactiondefinitionex.md)[], `index`: number): Element

*Defined in Work/vortex/src/controls/IconBar.tsx:235*

#### Parameters:

Name | Type |
------ | ------ |
`icons` | [IActionDefinitionEx](../interfaces/iactiondefinitionex.md)[] |
`index` | number |

**Returns:** Element

___

### renderMenuItem

▸ `Private`**renderMenuItem**(`icon`: [IActionDefinition](../interfaces/iactiondefinition.md) & { show: boolean \| string  }, `index`: number): Element

*Defined in Work/vortex/src/controls/IconBar.tsx:197*

#### Parameters:

Name | Type |
------ | ------ |
`icon` | [IActionDefinition](../interfaces/iactiondefinition.md) & { show: boolean \| string  } |
`index` | number |

**Returns:** Element

___

### setPortalTargetRef

▸ `Private`**setPortalTargetRef**(`ref`: any): void

*Defined in Work/vortex/src/controls/IconBar.tsx:336*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

**Returns:** void

___

### setState

▸ **setState**\<K>(`state`: (prevState: Readonly\<{ open: boolean  }>, props: Readonly\<[IProps](../globals.md#iprops)>) => Pick\<{ open: boolean  }, K> \| { open: boolean  } \| null \| Pick\<{ open: boolean  }, K> \| { open: boolean  } \| null, `callback?`: () => void): void

*Inherited from [Icon](icon.md).[setState](icon.md#setstate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:488*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof { open: boolean  } |

#### Parameters:

Name | Type |
------ | ------ |
`state` | (prevState: Readonly\<{ open: boolean  }>, props: Readonly\<[IProps](../globals.md#iprops)>) => Pick\<{ open: boolean  }, K> \| { open: boolean  } \| null \| Pick\<{ open: boolean  }, K> \| { open: boolean  } \| null |
`callback?` | () => void |

**Returns:** void

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops)>, `nextState`: Readonly\<{ open: boolean  }>, `nextContext`: any): boolean

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
`nextState` | Readonly\<{ open: boolean  }> |
`nextContext` | any |

**Returns:** boolean

___

### toggleOpen

▸ `Private`**toggleOpen**(): void

*Defined in Work/vortex/src/controls/IconBar.tsx:340*

**Returns:** void

___

### updateBGClick

▸ `Private`**updateBGClick**(): void

*Defined in Work/vortex/src/controls/IconBar.tsx:346*

**Returns:** void

## Object literals

### contextTypes

▪ `Static` **contextTypes**: object

*Defined in Work/vortex/src/controls/IconBar.tsx:88*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`menuLayer` | Requireable\<object> | PropTypes.object |
