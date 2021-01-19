**[vortex_devel](../README.md)**

> [Globals](../globals.md) / Dialog

# Class: Dialog

## Hierarchy

* [ComponentEx](componentex.md)\<[IProps](../globals.md#iprops), IComponentState>

  ↳ **Dialog**

## Index

### Constructors

* [constructor](dialog.md#constructor)

### Properties

* [context](dialog.md#context)
* [nextState](dialog.md#nextstate)
* [contextType](dialog.md#contexttype)

### Methods

* [UNSAFE\_componentWillMount](dialog.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](dialog.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](dialog.md#unsafe_componentwillupdate)
* [changeInput](dialog.md#changeinput)
* [componentDidCatch](dialog.md#componentdidcatch)
* [componentDidMount](dialog.md#componentdidmount)
* [componentDidUpdate](dialog.md#componentdidupdate)
* [componentWillMount](dialog.md#componentwillmount)
* [componentWillReceiveProps](dialog.md#componentwillreceiveprops)
* [componentWillUnmount](dialog.md#componentwillunmount)
* [componentWillUpdate](dialog.md#componentwillupdate)
* [dismiss](dialog.md#dismiss)
* [focusMe](dialog.md#focusme)
* [getSnapshotBeforeUpdate](dialog.md#getsnapshotbeforeupdate)
* [getValidationResult](dialog.md#getvalidationresult)
* [handleKeyPress](dialog.md#handlekeypress)
* [iconForType](dialog.md#iconfortype)
* [initState](dialog.md#initstate)
* [render](dialog.md#render)
* [renderAction](dialog.md#renderaction)
* [renderCheckbox](dialog.md#rendercheckbox)
* [renderContent](dialog.md#rendercontent)
* [renderInput](dialog.md#renderinput)
* [renderLink](dialog.md#renderlink)
* [renderRadiobutton](dialog.md#renderradiobutton)
* [shouldComponentUpdate](dialog.md#shouldcomponentupdate)
* [toggleCheckbox](dialog.md#togglecheckbox)
* [toggleRadio](dialog.md#toggleradio)
* [translateParts](dialog.md#translateparts)
* [triggerLink](dialog.md#triggerlink)
* [validateContent](dialog.md#validatecontent)

### Object literals

* [contextTypes](dialog.md#contexttypes)

## Constructors

### constructor

\+ **new Dialog**(`props`: [IProps](../globals.md#iprops)): [Dialog](dialog.md)

*Defined in Work/vortex/src/views/Dialog.tsx:82*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [Dialog](dialog.md)

## Properties

### context

•  **context**: [IComponentContext](../interfaces/icomponentcontext.md)

*Inherited from [ComponentEx](componentex.md).[context](componentex.md#context)*

*Defined in Work/vortex/src/util/ComponentEx.ts:132*

___

### nextState

•  **nextState**: IComponentState

*Inherited from [ComponentEx](componentex.md).[nextState](componentex.md#nextstate)*

*Defined in Work/vortex/src/util/ComponentEx.ts:134*

___

### contextType

▪ `Static` **contextType**: Context\<IErrorContext> = ErrorContext

*Defined in Work/vortex/src/views/Dialog.tsx:82*

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

*Defined in Work/vortex/src/views/Dialog.tsx:94*

#### Parameters:

Name | Type |
------ | ------ |
`newProps` | [IProps](../globals.md#iprops) |

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

### changeInput

▸ `Private`**changeInput**(`evt`: any): void

*Defined in Work/vortex/src/views/Dialog.tsx:397*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | any |

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

*Defined in Work/vortex/src/views/Dialog.tsx:119*

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

▸ `Optional`**componentWillUnmount**(): void

*Inherited from [Icon](icon.md).[componentWillUnmount](icon.md#componentwillunmount)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:626*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

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

### dismiss

▸ `Private`**dismiss**(`action`: string): void

*Defined in Work/vortex/src/views/Dialog.tsx:501*

#### Parameters:

Name | Type |
------ | ------ |
`action` | string |

**Returns:** void

___

### focusMe

▸ `Private`**focusMe**(`ref`: React.ReactInstance): void

*Defined in Work/vortex/src/views/Dialog.tsx:390*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | React.ReactInstance |

**Returns:** void

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

### getValidationResult

▸ `Private`**getValidationResult**(`input`: [IInput](../interfaces/iinput.md)): [IConditionResult](../interfaces/iconditionresult.md)[]

*Defined in Work/vortex/src/views/Dialog.tsx:308*

#### Parameters:

Name | Type |
------ | ------ |
`input` | [IInput](../interfaces/iinput.md) |

**Returns:** [IConditionResult](../interfaces/iconditionresult.md)[]

___

### handleKeyPress

▸ `Private`**handleKeyPress**(`evt`: KeyboardEvent\<Modal>): void

*Defined in Work/vortex/src/views/Dialog.tsx:278*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | KeyboardEvent\<Modal> |

**Returns:** void

___

### iconForType

▸ `Private`**iconForType**(`type`: [DialogType](../globals.md#dialogtype)): Element

*Defined in Work/vortex/src/views/Dialog.tsx:486*

#### Parameters:

Name | Type |
------ | ------ |
`type` | [DialogType](../globals.md#dialogtype) |

**Returns:** Element

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

### render

▸ **render**(): Element

*Defined in Work/vortex/src/views/Dialog.tsx:128*

**Returns:** Element

___

### renderAction

▸ `Private`**renderAction**(`action`: string, `isDefault`: boolean): Element

*Defined in Work/vortex/src/views/Dialog.tsx:469*

#### Parameters:

Name | Type |
------ | ------ |
`action` | string |
`isDefault` | boolean |

**Returns:** Element

___

### renderCheckbox

▸ `Private`**renderCheckbox**(`checkbox`: [ICheckbox](../interfaces/icheckbox.md)): Element

*Defined in Work/vortex/src/views/Dialog.tsx:359*

#### Parameters:

Name | Type |
------ | ------ |
`checkbox` | [ICheckbox](../interfaces/icheckbox.md) |

**Returns:** Element

___

### renderContent

▸ `Private`**renderContent**(`content`: [IDialogContent](../interfaces/idialogcontent.md)): Element

*Defined in Work/vortex/src/views/Dialog.tsx:178*

#### Parameters:

Name | Type |
------ | ------ |
`content` | [IDialogContent](../interfaces/idialogcontent.md) |

**Returns:** Element

___

### renderInput

▸ `Private`**renderInput**(`input`: [IInput](../interfaces/iinput.md), `idx`: number): Element

*Defined in Work/vortex/src/views/Dialog.tsx:313*

#### Parameters:

Name | Type |
------ | ------ |
`input` | [IInput](../interfaces/iinput.md) |
`idx` | number |

**Returns:** Element

___

### renderLink

▸ `Private`**renderLink**(`link`: [ILink](../interfaces/ilink.md), `idx`: number): Element

*Defined in Work/vortex/src/views/Dialog.tsx:346*

#### Parameters:

Name | Type |
------ | ------ |
`link` | [ILink](../interfaces/ilink.md) |
`idx` | number |

**Returns:** Element

___

### renderRadiobutton

▸ `Private`**renderRadiobutton**(`checkbox`: [ICheckbox](../interfaces/icheckbox.md)): Element

*Defined in Work/vortex/src/views/Dialog.tsx:374*

#### Parameters:

Name | Type |
------ | ------ |
`checkbox` | [ICheckbox](../interfaces/icheckbox.md) |

**Returns:** Element

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

### toggleCheckbox

▸ `Private`**toggleCheckbox**(`evt`: MouseEvent\<any>): void

*Defined in Work/vortex/src/views/Dialog.tsx:422*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | MouseEvent\<any> |

**Returns:** void

___

### toggleRadio

▸ `Private`**toggleRadio**(`evt`: MouseEvent\<any>): void

*Defined in Work/vortex/src/views/Dialog.tsx:445*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | MouseEvent\<any> |

**Returns:** void

___

### translateParts

▸ `Private`**translateParts**(`message`: string, `t`: TFunction, `parameters?`: any): string

*Defined in Work/vortex/src/views/Dialog.tsx:166*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`t` | TFunction |
`parameters?` | any |

**Returns:** string

___

### triggerLink

▸ `Private`**triggerLink**(`evt`: MouseEvent\<any>): void

*Defined in Work/vortex/src/views/Dialog.tsx:354*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | MouseEvent\<any> |

**Returns:** void

___

### validateContent

▸ `Private`**validateContent**(`dialogState`: [IDialogContent](../interfaces/idialogcontent.md)): [ConditionResults](../globals.md#conditionresults)

*Defined in Work/vortex/src/views/Dialog.tsx:299*

#### Parameters:

Name | Type |
------ | ------ |
`dialogState` | [IDialogContent](../interfaces/idialogcontent.md) |

**Returns:** [ConditionResults](../globals.md#conditionresults)

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
