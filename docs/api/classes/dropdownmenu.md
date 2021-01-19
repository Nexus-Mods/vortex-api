**[vortex_devel](../README.md)**

> [Globals](../globals.md) / DropdownMenu

# Class: DropdownMenu

represents an extensible row of icons/buttons/actions
In the simplest form this is simply a bunch of buttons that will run
an action if clicked, but an icon can also be more dynamic (i.e. rendering
dynamic content or having multiple states)

## Hierarchy

* PureComponent\<[IProps](../globals.md#iprops), { open: boolean  }>

  ↳ **DropdownMenu**

## Index

### Constructors

* [constructor](dropdownmenu.md#constructor)

### Properties

* [mRef](dropdownmenu.md#mref)

### Methods

* [UNSAFE\_componentWillMount](dropdownmenu.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](dropdownmenu.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](dropdownmenu.md#unsafe_componentwillupdate)
* [close](dropdownmenu.md#close)
* [componentDidCatch](dropdownmenu.md#componentdidcatch)
* [componentDidMount](dropdownmenu.md#componentdidmount)
* [componentDidUpdate](dropdownmenu.md#componentdidupdate)
* [componentWillMount](dropdownmenu.md#componentwillmount)
* [componentWillReceiveProps](dropdownmenu.md#componentwillreceiveprops)
* [componentWillUnmount](dropdownmenu.md#componentwillunmount)
* [componentWillUpdate](dropdownmenu.md#componentwillupdate)
* [getSnapshotBeforeUpdate](dropdownmenu.md#getsnapshotbeforeupdate)
* [render](dropdownmenu.md#render)
* [renderCustomIcon](dropdownmenu.md#rendercustomicon)
* [renderMenuItem](dropdownmenu.md#rendermenuitem)
* [setRef](dropdownmenu.md#setref)
* [shouldComponentUpdate](dropdownmenu.md#shouldcomponentupdate)
* [toggleOpen](dropdownmenu.md#toggleopen)
* [triggerDefault](dropdownmenu.md#triggerdefault)

## Constructors

### constructor

\+ **new DropdownMenu**(`props`: [IProps](../globals.md#iprops)): [DropdownMenu](dropdownmenu.md)

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:81*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [DropdownMenu](dropdownmenu.md)

## Properties

### mRef

• `Private` **mRef**: Element

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:81*

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

### close

▸ `Private`**close**(): void

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:143*

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

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:89*

**Returns:** Element

___

### renderCustomIcon

▸ `Private`**renderCustomIcon**(`id`: string, `action`: [IActionDefinition](../interfaces/iactiondefinition.md)): Element

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:182*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |
`action` | [IActionDefinition](../interfaces/iactiondefinition.md) |

**Returns:** Element

___

### renderMenuItem

▸ `Private`**renderMenuItem**(`action`: [IActionDefinition](../interfaces/iactiondefinition.md) & { show: boolean \| string  }, `index`: number): Element

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:152*

#### Parameters:

Name | Type |
------ | ------ |
`action` | [IActionDefinition](../interfaces/iactiondefinition.md) & { show: boolean \| string  } |
`index` | number |

**Returns:** Element

___

### setRef

▸ `Private`**setRef**(`ref`: any): void

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:139*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

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

▸ `Private`**toggleOpen**(`evt`: MouseEvent\<any>): void

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:147*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | MouseEvent\<any> |

**Returns:** void

___

### triggerDefault

▸ `Private`**triggerDefault**(`evt`: MouseEvent\<any>): void

*Defined in Work/vortex/src/controls/ActionDropdown.tsx:212*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | MouseEvent\<any> |

**Returns:** void
