**[vortex_devel](../README.md)**

> [Globals](../globals.md) / MainWindow

# Class: MainWindow

## Hierarchy

* Component\<[IProps](../globals.md#iprops), [IMainWindowState](../interfaces/imainwindowstate.md)>

  ↳ **MainWindow**

## Index

### Constructors

* [constructor](mainwindow.md#constructor)

### Properties

* [applicationButtons](mainwindow.md#applicationbuttons)
* [context](mainwindow.md#context)
* [globalButtons](mainwindow.md#globalbuttons)
* [menuLayer](mainwindow.md#menulayer)
* [menuObserver](mainwindow.md#menuobserver)
* [nextState](mainwindow.md#nextstate)
* [props](mainwindow.md#props)
* [refs](mainwindow.md#refs)
* [settingsPage](mainwindow.md#settingspage)
* [sidebarRef](mainwindow.md#sidebarref)
* [sidebarTimer](mainwindow.md#sidebartimer)
* [state](mainwindow.md#state)
* [contextType](mainwindow.md#contexttype)

### Methods

* [UNSAFE\_componentWillMount](mainwindow.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](mainwindow.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](mainwindow.md#unsafe_componentwillupdate)
* [componentDidCatch](mainwindow.md#componentdidcatch)
* [componentDidMount](mainwindow.md#componentdidmount)
* [componentDidUpdate](mainwindow.md#componentdidupdate)
* [componentWillMount](mainwindow.md#componentwillmount)
* [componentWillReceiveProps](mainwindow.md#componentwillreceiveprops)
* [componentWillUnmount](mainwindow.md#componentwillunmount)
* [componentWillUpdate](mainwindow.md#componentwillupdate)
* [forceUpdate](mainwindow.md#forceupdate)
* [getChildContext](mainwindow.md#getchildcontext)
* [getModifiers](mainwindow.md#getmodifiers)
* [getSnapshotBeforeUpdate](mainwindow.md#getsnapshotbeforeupdate)
* [handleClickPage](mainwindow.md#handleclickpage)
* [render](mainwindow.md#render)
* [renderBlocker](mainwindow.md#renderblocker)
* [renderBody](mainwindow.md#renderbody)
* [renderPage](mainwindow.md#renderpage)
* [renderPageButton](mainwindow.md#renderpagebutton)
* [renderPageGroup](mainwindow.md#renderpagegroup)
* [renderToolbar](mainwindow.md#rendertoolbar)
* [renderWait](mainwindow.md#renderwait)
* [setFocus](mainwindow.md#setfocus)
* [setMainPage](mainwindow.md#setmainpage)
* [setMenuLayer](mainwindow.md#setmenulayer)
* [setSidebarRef](mainwindow.md#setsidebarref)
* [setState](mainwindow.md#setstate)
* [shouldComponentUpdate](mainwindow.md#shouldcomponentupdate)
* [toggleMenu](mainwindow.md#togglemenu)
* [unblock](mainwindow.md#unblock)
* [unsetFocus](mainwindow.md#unsetfocus)
* [updateModifiers](mainwindow.md#updatemodifiers)
* [updateSize](mainwindow.md#updatesize)
* [updateState](mainwindow.md#updatestate)

### Object literals

* [modifiers](mainwindow.md#modifiers)
* [childContextTypes](mainwindow.md#childcontexttypes)

## Constructors

### constructor

\+ **new MainWindow**(`props`: [IProps](../globals.md#iprops)): [MainWindow](mainwindow.md)

*Overrides [Icon](icon.md).[constructor](icon.md#constructor)*

*Defined in Work/vortex/src/views/MainWindow.tsx:115*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [MainWindow](mainwindow.md)

## Properties

### applicationButtons

• `Private` **applicationButtons**: [IActionDefinition](../interfaces/iactiondefinition.md)[]

*Defined in Work/vortex/src/views/MainWindow.tsx:104*

___

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

### globalButtons

• `Private` **globalButtons**: [IActionDefinition](../interfaces/iactiondefinition.md)[] = []

*Defined in Work/vortex/src/views/MainWindow.tsx:108*

___

### menuLayer

• `Private` **menuLayer**: HTMLDivElement = null

*Defined in Work/vortex/src/views/MainWindow.tsx:111*

___

### menuObserver

• `Private` **menuObserver**: MutationObserver

*Defined in Work/vortex/src/views/MainWindow.tsx:112*

___

### nextState

• `Private` **nextState**: [IMainWindowState](../interfaces/imainwindowstate.md)

*Defined in Work/vortex/src/views/MainWindow.tsx:107*

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

### settingsPage

• `Private` **settingsPage**: IMainPage

*Defined in Work/vortex/src/views/MainWindow.tsx:106*

___

### sidebarRef

• `Private` **sidebarRef**: HTMLElement = null

*Defined in Work/vortex/src/views/MainWindow.tsx:114*

___

### sidebarTimer

• `Private` **sidebarTimer**: Timer

*Defined in Work/vortex/src/views/MainWindow.tsx:115*

___

### state

•  **state**: Readonly\<[IMainWindowState](../interfaces/imainwindowstate.md)>

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

▸ **UNSAFE_componentWillReceiveProps**(`newProps`: [IProps](../globals.md#iprops)): void

*Overrides [ComponentEx](componentex.md).[UNSAFE_componentWillReceiveProps](componentex.md#unsafe_componentwillreceiveprops)*

*Defined in Work/vortex/src/views/MainWindow.tsx:204*

#### Parameters:

Name | Type |
------ | ------ |
`newProps` | [IProps](../globals.md#iprops) |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops)>, `nextState`: Readonly\<[IMainWindowState](../interfaces/imainwindowstate.md)>, `nextContext`: any): void

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
`nextState` | Readonly\<[IMainWindowState](../interfaces/imainwindowstate.md)> |
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

*Defined in Work/vortex/src/views/MainWindow.tsx:160*

**Returns:** void

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops)>, `prevState`: Readonly\<[IMainWindowState](../interfaces/imainwindowstate.md)>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[IProps](../globals.md#iprops)> |
`prevState` | Readonly\<[IMainWindowState](../interfaces/imainwindowstate.md)> |
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

▸ **componentWillUnmount**(): void

*Overrides [Icon](icon.md).[componentWillUnmount](icon.md#componentwillunmount)*

*Defined in Work/vortex/src/views/MainWindow.tsx:179*

**Returns:** void

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops)>, `nextState`: Readonly\<[IMainWindowState](../interfaces/imainwindowstate.md)>, `nextContext`: any): void

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
`nextState` | Readonly\<[IMainWindowState](../interfaces/imainwindowstate.md)> |
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

### getChildContext

▸ **getChildContext**(): [IComponentContext](../interfaces/icomponentcontext.md)

*Defined in Work/vortex/src/views/MainWindow.tsx:155*

**Returns:** [IComponentContext](../interfaces/icomponentcontext.md)

___

### getModifiers

▸ `Private`**getModifiers**(): [IModifiers](../interfaces/imodifiers.md)

*Defined in Work/vortex/src/views/MainWindow.tsx:260*

**Returns:** [IModifiers](../interfaces/imodifiers.md)

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops)>, `prevState`: Readonly\<[IMainWindowState](../interfaces/imainwindowstate.md)>): any \| null

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
`prevState` | Readonly\<[IMainWindowState](../interfaces/imainwindowstate.md)> |

**Returns:** any \| null

___

### handleClickPage

▸ `Private`**handleClickPage**(`evt`: MouseEvent\<any>): void

*Defined in Work/vortex/src/views/MainWindow.tsx:523*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | MouseEvent\<any> |

**Returns:** void

___

### render

▸ **render**(): Element

*Overrides [ComponentEx](componentex.md).[render](componentex.md#render)*

*Defined in Work/vortex/src/views/MainWindow.tsx:211*

**Returns:** Element

___

### renderBlocker

▸ `Private`**renderBlocker**(`id`: string, `blocker`: [IUIBlocker](../interfaces/iuiblocker.md)): Element

*Defined in Work/vortex/src/views/MainWindow.tsx:279*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |
`blocker` | [IUIBlocker](../interfaces/iuiblocker.md) |

**Returns:** Element

___

### renderBody

▸ `Private`**renderBody**(): Element

*Defined in Work/vortex/src/views/MainWindow.tsx:370*

**Returns:** Element

___

### renderPage

▸ `Private`**renderPage**(`page`: IMainPage): Element

*Defined in Work/vortex/src/views/MainWindow.tsx:476*

#### Parameters:

Name | Type |
------ | ------ |
`page` | IMainPage |

**Returns:** Element

___

### renderPageButton

▸ `Private`**renderPageButton**(`page`: IMainPage, `idx`: number): Element

*Defined in Work/vortex/src/views/MainWindow.tsx:455*

#### Parameters:

Name | Type |
------ | ------ |
`page` | IMainPage |
`idx` | number |

**Returns:** Element

___

### renderPageGroup

▸ `Private`**renderPageGroup**(`__namedParameters`: { key: string ; title: string  }): Element

*Defined in Work/vortex/src/views/MainWindow.tsx:412*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { key: string ; title: string  } |

**Returns:** Element

___

### renderToolbar

▸ `Private`**renderToolbar**(`switchingProfile`: boolean): Element

*Defined in Work/vortex/src/views/MainWindow.tsx:318*

#### Parameters:

Name | Type |
------ | ------ |
`switchingProfile` | boolean |

**Returns:** Element

___

### renderWait

▸ `Private`**renderWait**(): Element

*Defined in Work/vortex/src/views/MainWindow.tsx:264*

**Returns:** Element

___

### setFocus

▸ `Private`**setFocus**(): void

*Defined in Work/vortex/src/views/MainWindow.tsx:358*

**Returns:** void

___

### setMainPage

▸ `Private`**setMainPage**(`pageId`: string, `secondary`: boolean): void

*Defined in Work/vortex/src/views/MainWindow.tsx:527*

#### Parameters:

Name | Type |
------ | ------ |
`pageId` | string |
`secondary` | boolean |

**Returns:** void

___

### setMenuLayer

▸ `Private`**setMenuLayer**(`ref`: any): void

*Defined in Work/vortex/src/views/MainWindow.tsx:497*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

**Returns:** void

___

### setSidebarRef

▸ `Private`**setSidebarRef**(`ref`: any): void

*Defined in Work/vortex/src/views/MainWindow.tsx:447*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

**Returns:** void

___

### setState

▸ **setState**\<K>(`state`: (prevState: Readonly\<[IMainWindowState](../interfaces/imainwindowstate.md)>, props: Readonly\<[IProps](../globals.md#iprops)>) => Pick\<[IMainWindowState](../interfaces/imainwindowstate.md), K> \| [IMainWindowState](../interfaces/imainwindowstate.md) \| null \| Pick\<[IMainWindowState](../interfaces/imainwindowstate.md), K> \| [IMainWindowState](../interfaces/imainwindowstate.md) \| null, `callback?`: () => void): void

*Inherited from [Icon](icon.md).[setState](icon.md#setstate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:488*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof [IMainWindowState](../interfaces/imainwindowstate.md) |

#### Parameters:

Name | Type |
------ | ------ |
`state` | (prevState: Readonly\<[IMainWindowState](../interfaces/imainwindowstate.md)>, props: Readonly\<[IProps](../globals.md#iprops)>) => Pick\<[IMainWindowState](../interfaces/imainwindowstate.md), K> \| [IMainWindowState](../interfaces/imainwindowstate.md) \| null \| Pick\<[IMainWindowState](../interfaces/imainwindowstate.md), K> \| [IMainWindowState](../interfaces/imainwindowstate.md) \| null |
`callback?` | () => void |

**Returns:** void

___

### shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: [IProps](../globals.md#iprops), `nextState`: [IMainWindowState](../interfaces/imainwindowstate.md)): boolean

*Overrides [Icon](icon.md).[shouldComponentUpdate](icon.md#shouldcomponentupdate)*

*Defined in Work/vortex/src/views/MainWindow.tsx:187*

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | [IProps](../globals.md#iprops) |
`nextState` | [IMainWindowState](../interfaces/imainwindowstate.md) |

**Returns:** boolean

___

### toggleMenu

▸ `Private`**toggleMenu**(): void

*Defined in Work/vortex/src/views/MainWindow.tsx:545*

**Returns:** void

___

### unblock

▸ `Private`**unblock**(`evt`: MouseEvent\<any>): void

*Defined in Work/vortex/src/views/MainWindow.tsx:296*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | MouseEvent\<any> |

**Returns:** void

___

### unsetFocus

▸ `Private`**unsetFocus**(): void

*Defined in Work/vortex/src/views/MainWindow.tsx:364*

**Returns:** void

___

### updateModifiers

▸ `Private`**updateModifiers**(`event`: KeyboardEvent): void

*Defined in Work/vortex/src/views/MainWindow.tsx:302*

#### Parameters:

Name | Type |
------ | ------ |
`event` | KeyboardEvent |

**Returns:** void

___

### updateSize

▸ `Private`**updateSize**(): void

*Defined in Work/vortex/src/views/MainWindow.tsx:352*

**Returns:** void

___

### updateState

▸ `Private`**updateState**(`spec`: any): void

*Defined in Work/vortex/src/views/MainWindow.tsx:313*

#### Parameters:

Name | Type |
------ | ------ |
`spec` | any |

**Returns:** void

## Object literals

### modifiers

▪ `Private` **modifiers**: object

*Defined in Work/vortex/src/views/MainWindow.tsx:109*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`alt` | false | false |
`ctrl` | false | false |
`shift` | false | false |

___

### childContextTypes

▪ `Static` **childContextTypes**: object

*Defined in Work/vortex/src/views/MainWindow.tsx:98*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`api` | Validator\<object> | PropTypes.object.isRequired |
`getModifiers` | Requireable\<(...args: any[]) => any> | PropTypes.func |
`menuLayer` | Requireable\<object> | PropTypes.object |
