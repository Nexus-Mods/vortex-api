**[vortex_devel](../README.md)**

> [Globals](../globals.md) / DetailBox

# Class: DetailBox

## Hierarchy

* [ComponentEx](componentex.md)\<[IDetailProps](../interfaces/idetailprops.md), { hovered: boolean  }>

  ↳ **DetailBox**

## Index

### Constructors

* [constructor](detailbox.md#constructor)

### Properties

* [context](detailbox.md#context)
* [mFormRef](detailbox.md#mformref)
* [nextState](detailbox.md#nextstate)

### Methods

* [UNSAFE\_componentWillMount](detailbox.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](detailbox.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](detailbox.md#unsafe_componentwillupdate)
* [componentDidCatch](detailbox.md#componentdidcatch)
* [componentDidMount](detailbox.md#componentdidmount)
* [componentDidUpdate](detailbox.md#componentdidupdate)
* [componentWillMount](detailbox.md#componentwillmount)
* [componentWillReceiveProps](detailbox.md#componentwillreceiveprops)
* [componentWillUnmount](detailbox.md#componentwillunmount)
* [componentWillUpdate](detailbox.md#componentwillupdate)
* [getSnapshotBeforeUpdate](detailbox.md#getsnapshotbeforeupdate)
* [initState](detailbox.md#initstate)
* [onChangeData](detailbox.md#onchangedata)
* [render](detailbox.md#render)
* [renderDetail](detailbox.md#renderdetail)
* [setFormRef](detailbox.md#setformref)
* [shouldComponentUpdate](detailbox.md#shouldcomponentupdate)
* [startHover](detailbox.md#starthover)
* [stopHover](detailbox.md#stophover)

### Object literals

* [contextTypes](detailbox.md#contexttypes)

## Constructors

### constructor

\+ **new DetailBox**(`props`: [IDetailProps](../interfaces/idetailprops.md)): [DetailBox](detailbox.md)

*Defined in Work/vortex/src/controls/table/TableDetail.tsx:281*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IDetailProps](../interfaces/idetailprops.md) |

**Returns:** [DetailBox](detailbox.md)

## Properties

### context

•  **context**: [IComponentContext](../interfaces/icomponentcontext.md)

*Inherited from [ComponentEx](componentex.md).[context](componentex.md#context)*

*Defined in Work/vortex/src/util/ComponentEx.ts:132*

___

### mFormRef

• `Private` **mFormRef**: HTMLFormElement = null

*Defined in Work/vortex/src/controls/table/TableDetail.tsx:281*

___

### nextState

•  **nextState**: { hovered: boolean  }

*Inherited from [ComponentEx](componentex.md).[nextState](componentex.md#nextstate)*

*Defined in Work/vortex/src/util/ComponentEx.ts:134*

#### Type declaration:

Name | Type |
------ | ------ |
`hovered` | boolean |

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>>, `nextState`: Readonly\<{ hovered: boolean  }>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>> |
`nextState` | Readonly\<{ hovered: boolean  }> |
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

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>>, `prevState`: Readonly\<{ hovered: boolean  }>, `snapshot?`: any): void

*Inherited from [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:673*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>> |
`prevState` | Readonly\<{ hovered: boolean  }> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>>, `nextState`: Readonly\<{ hovered: boolean  }>, `nextContext`: any): void

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
`nextProps` | Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>> |
`nextState` | Readonly\<{ hovered: boolean  }> |
`nextContext` | any |

**Returns:** void

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>>, `prevState`: Readonly\<{ hovered: boolean  }>): any \| null

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
`prevProps` | Readonly\<[IDetailProps](../interfaces/idetailprops.md) & Partial\<WithTranslation>> |
`prevState` | Readonly\<{ hovered: boolean  }> |

**Returns:** any \| null

___

### initState

▸ `Protected`**initState**(`value`: { hovered: boolean  }, `delayed?`: boolean): void

*Inherited from [ComponentEx](componentex.md).[initState](componentex.md#initstate)*

*Defined in Work/vortex/src/util/ComponentEx.ts:136*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`value` | { hovered: boolean  } | - |
`delayed` | boolean | false |

**Returns:** void

___

### onChangeData

▸ `Private`**onChangeData**(`rowIds`: string[], `attributeId`: string, `value`: any): void

*Defined in Work/vortex/src/controls/table/TableDetail.tsx:384*

#### Parameters:

Name | Type |
------ | ------ |
`rowIds` | string[] |
`attributeId` | string |
`value` | any |

**Returns:** void

___

### render

▸ **render**(): Element

*Defined in Work/vortex/src/controls/table/TableDetail.tsx:301*

**Returns:** Element

___

### renderDetail

▸ `Private`**renderDetail**(`attribute`: [ITableAttribute](../interfaces/itableattribute.md)): Element

*Defined in Work/vortex/src/controls/table/TableDetail.tsx:345*

#### Parameters:

Name | Type |
------ | ------ |
`attribute` | [ITableAttribute](../interfaces/itableattribute.md) |

**Returns:** Element

___

### setFormRef

▸ `Private`**setFormRef**(`ref`: HTMLFormElement): void

*Defined in Work/vortex/src/controls/table/TableDetail.tsx:362*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | HTMLFormElement |

**Returns:** void

___

### shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: [IDetailProps](../interfaces/idetailprops.md), `nextState`: { hovered: boolean  }): boolean

*Overrides [Icon](icon.md).[shouldComponentUpdate](icon.md#shouldcomponentupdate)*

*Defined in Work/vortex/src/controls/table/TableDetail.tsx:288*

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | [IDetailProps](../interfaces/idetailprops.md) |
`nextState` | { hovered: boolean  } |

**Returns:** boolean

___

### startHover

▸ `Private`**startHover**(): void

*Defined in Work/vortex/src/controls/table/TableDetail.tsx:374*

**Returns:** void

___

### stopHover

▸ `Private`**stopHover**(): void

*Defined in Work/vortex/src/controls/table/TableDetail.tsx:380*

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
