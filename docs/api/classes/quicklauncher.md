**[vortex_devel](../README.md)**

> [Globals](../globals.md) / QuickLauncher

# Class: QuickLauncher

## Hierarchy

* [ComponentEx](componentex.md)\<[IProps](../globals.md#iprops), IComponentState>

  ↳ **QuickLauncher**

## Index

### Constructors

* [constructor](quicklauncher.md#constructor)

### Properties

* [context](quicklauncher.md#context)
* [mCacheDebouncer](quicklauncher.md#mcachedebouncer)
* [nextState](quicklauncher.md#nextstate)

### Methods

* [UNSAFE\_componentWillMount](quicklauncher.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](quicklauncher.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](quicklauncher.md#unsafe_componentwillupdate)
* [changeGame](quicklauncher.md#changegame)
* [componentDidCatch](quicklauncher.md#componentdidcatch)
* [componentDidMount](quicklauncher.md#componentdidmount)
* [componentDidUpdate](quicklauncher.md#componentdidupdate)
* [componentWillMount](quicklauncher.md#componentwillmount)
* [componentWillReceiveProps](quicklauncher.md#componentwillreceiveprops)
* [componentWillUnmount](quicklauncher.md#componentwillunmount)
* [componentWillUpdate](quicklauncher.md#componentwillupdate)
* [genGameIconCache](quicklauncher.md#gengameiconcache)
* [getSnapshotBeforeUpdate](quicklauncher.md#getsnapshotbeforeupdate)
* [initState](quicklauncher.md#initstate)
* [makeStarter](quicklauncher.md#makestarter)
* [render](quicklauncher.md#render)
* [renderGameOption](quicklauncher.md#rendergameoption)
* [renderGameOptions](quicklauncher.md#rendergameoptions)
* [shouldComponentUpdate](quicklauncher.md#shouldcomponentupdate)
* [start](quicklauncher.md#start)

### Object literals

* [contextTypes](quicklauncher.md#contexttypes)

## Constructors

### constructor

\+ **new QuickLauncher**(`props`: [IProps](../globals.md#iprops)): [QuickLauncher](quicklauncher.md)

*Defined in Work/vortex/src/views/QuickLauncher.tsx:65*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [QuickLauncher](quicklauncher.md)

## Properties

### context

•  **context**: [IComponentContext](../interfaces/icomponentcontext.md)

*Inherited from [ComponentEx](componentex.md).[context](componentex.md#context)*

*Defined in Work/vortex/src/util/ComponentEx.ts:132*

___

### mCacheDebouncer

• `Private` **mCacheDebouncer**: [Debouncer](debouncer.md) = new Debouncer(() => { this.nextState.gameIconCache = this.genGameIconCache(); return Promise.resolve(); }, 100)

*Defined in Work/vortex/src/views/QuickLauncher.tsx:62*

___

### nextState

•  **nextState**: IComponentState

*Inherited from [ComponentEx](componentex.md).[nextState](componentex.md#nextstate)*

*Defined in Work/vortex/src/util/ComponentEx.ts:134*

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

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: [IProps](../globals.md#iprops)): void

*Overrides [ComponentEx](componentex.md).[UNSAFE_componentWillReceiveProps](componentex.md#unsafe_componentwillreceiveprops)*

*Defined in Work/vortex/src/views/QuickLauncher.tsx:80*

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | [IProps](../globals.md#iprops) |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextState`: Readonly\<IComponentState>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`nextState` | Readonly\<IComponentState> |
`nextContext` | any |

**Returns:** void

___

### changeGame

▸ `Private`**changeGame**(`gameId`: any): void

*Defined in Work/vortex/src/views/QuickLauncher.tsx:223*

#### Parameters:

Name | Type |
------ | ------ |
`gameId` | any |

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

*Defined in Work/vortex/src/views/QuickLauncher.tsx:72*

**Returns:** void

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `prevState`: Readonly\<IComponentState>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`prevState` | Readonly\<IComponentState> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`nextContext` | any |

**Returns:** void

___

### componentWillUnmount

▸ **componentWillUnmount**(): void

*Overrides [Icon](icon.md).[componentWillUnmount](icon.md#componentwillunmount)*

*Defined in Work/vortex/src/views/QuickLauncher.tsx:76*

**Returns:** void

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextState`: Readonly\<IComponentState>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`nextState` | Readonly\<IComponentState> |
`nextContext` | any |

**Returns:** void

___

### genGameIconCache

▸ `Private`**genGameIconCache**(): object

*Defined in Work/vortex/src/views/QuickLauncher.tsx:203*

**Returns:** object

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `prevState`: Readonly\<IComponentState>): any \| null

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
`prevProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`prevState` | Readonly\<IComponentState> |

**Returns:** any \| null

___

### initState

▸ `Protected`**initState**(`value`: IComponentState, `delayed?`: boolean): void

*Inherited from [ComponentEx](componentex.md).[initState](componentex.md#initstate)*

*Defined in Work/vortex/src/util/ComponentEx.ts:136*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`value` | IComponentState | - |
`delayed` | boolean | false |

**Returns:** void

___

### makeStarter

▸ `Private`**makeStarter**(`props`: [IProps](../globals.md#iprops)): [StarterInfo](starterinfo.md)

*Defined in Work/vortex/src/views/QuickLauncher.tsx:242*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [StarterInfo](starterinfo.md)

___

### render

▸ **render**(): Element

*Defined in Work/vortex/src/views/QuickLauncher.tsx:93*

**Returns:** Element

___

### renderGameOption

▸ `Private`**renderGameOption**(`gameId`: string): Element \| ""

*Defined in Work/vortex/src/views/QuickLauncher.tsx:159*

#### Parameters:

Name | Type |
------ | ------ |
`gameId` | string |

**Returns:** Element \| ""

___

### renderGameOptions

▸ `Private`**renderGameOptions**(): Element \| Element[]

*Defined in Work/vortex/src/views/QuickLauncher.tsx:135*

**Returns:** Element \| Element[]

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>>, `nextState`: Readonly\<IComponentState>, `nextContext`: any): boolean

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
`nextProps` | Readonly\<[IProps](../globals.md#iprops) & Partial\<WithTranslation>> |
`nextState` | Readonly\<IComponentState> |
`nextContext` | any |

**Returns:** boolean

___

### start

▸ `Private`**start**(): void

*Defined in Work/vortex/src/views/QuickLauncher.tsx:231*

**Returns:** void

## Object literals

### contextTypes

▪ `Static` **contextTypes**: object

*Inherited from [ComponentEx](componentex.md).[contextTypes](componentex.md#contexttypes)*

*Defined in Work/vortex/src/util/ComponentEx.ts:126*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`api` | Validator\<object> | PropTypes.object.isRequired |
`getModifiers` | Requireable\<(...args: any[]) => any> | PropTypes.func |
`menuLayer` | Requireable\<object> | PropTypes.object |
