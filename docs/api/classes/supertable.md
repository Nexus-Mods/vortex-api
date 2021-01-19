**[vortex_devel](../README.md)**

> [Globals](../globals.md) / SuperTable

# Class: SuperTable

a wrapper for the react-bootstrap table adding various features:
- desktop-like selection/multi-selection
- sorting
- toggleable columns
- a detail-pane that gives additional detail on the (last) selected row

## Hierarchy

* [ComponentEx](componentex.md)\<[IProps](../globals.md#iprops), IComponentState>

  ↳ **SuperTable**

## Index

### Constructors

* [constructor](supertable.md#constructor)

### Properties

* [context](supertable.md#context)
* [mDelayedVisibility](supertable.md#mdelayedvisibility)
* [mDelayedVisibilityTimer](supertable.md#mdelayedvisibilitytimer)
* [mDetailTimer](supertable.md#mdetailtimer)
* [mHeaderRef](supertable.md#mheaderref)
* [mHeaderUpdateDebouncer](supertable.md#mheaderupdatedebouncer)
* [mLastDetailIds](supertable.md#mlastdetailids)
* [mLastScroll](supertable.md#mlastscroll)
* [mLastSelectOnly](supertable.md#mlastselectonly)
* [mLastUpdateState](supertable.md#mlastupdatestate)
* [mMounted](supertable.md#mmounted)
* [mNextState](supertable.md#mnextstate)
* [mNextUpdateState](supertable.md#mnextupdatestate)
* [mNextVisibility](supertable.md#mnextvisibility)
* [mNoShrinkColumns](supertable.md#mnoshrinkcolumns)
* [mPinnedRef](supertable.md#mpinnedref)
* [mProxyHeaderRef](supertable.md#mproxyheaderref)
* [mRowRefs](supertable.md#mrowrefs)
* [mScrollRef](supertable.md#mscrollref)
* [mUpdateCalculatedDebouncer](supertable.md#mupdatecalculateddebouncer)
* [mUpdateInProgress](supertable.md#mupdateinprogress)
* [mVisibleAttributes](supertable.md#mvisibleattributes)
* [mVisibleDetails](supertable.md#mvisibledetails)
* [mVisibleHeaderRef](supertable.md#mvisibleheaderref)
* [mVisibleInlines](supertable.md#mvisibleinlines)
* [mWillSetVisibility](supertable.md#mwillsetvisibility)
* [nextState](supertable.md#nextstate)
* [SCROLL\_DEBOUNCE](supertable.md#scroll_debounce)
* [SCROLL\_DURATION](supertable.md#scroll_duration)

### Methods

* [UNSAFE\_componentWillMount](supertable.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](supertable.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](supertable.md#unsafe_componentwillupdate)
* [attributeSortFunction](supertable.md#attributesortfunction)
* [clearFilters](supertable.md#clearfilters)
* [collapseAll](supertable.md#collapseall)
* [columnToggles](supertable.md#columntoggles)
* [componentDidCatch](supertable.md#componentdidcatch)
* [componentDidMount](supertable.md#componentdidmount)
* [componentDidUpdate](supertable.md#componentdidupdate)
* [componentWillMount](supertable.md#componentwillmount)
* [componentWillReceiveProps](supertable.md#componentwillreceiveprops)
* [componentWillUnmount](supertable.md#componentwillunmount)
* [componentWillUpdate](supertable.md#componentwillupdate)
* [deselectAll](supertable.md#deselectall)
* [expandAll](supertable.md#expandall)
* [filteredRows](supertable.md#filteredrows)
* [getAttributeState](supertable.md#getattributestate)
* [getAttributeStates](supertable.md#getattributestates)
* [getClasses](supertable.md#getclasses)
* [getGroupOptions](supertable.md#getgroupoptions)
* [getSnapshotBeforeUpdate](supertable.md#getsnapshotbeforeupdate)
* [groupedRows](supertable.md#groupedrows)
* [handleKeyDown](supertable.md#handlekeydown)
* [initState](supertable.md#initstate)
* [invalidate](supertable.md#invalidate)
* [isSortColumn](supertable.md#issortcolumn)
* [mainHeaderRef](supertable.md#mainheaderref)
* [mainPaneRef](supertable.md#mainpaneref)
* [matchHotKey](supertable.md#matchhotkey)
* [multiRowActions](supertable.md#multirowactions)
* [onRowStateChanged](supertable.md#onrowstatechanged)
* [onScroll](supertable.md#onscroll)
* [postScroll](supertable.md#postscroll)
* [refreshSorted](supertable.md#refreshsorted)
* [render](supertable.md#render)
* [renderBody](supertable.md#renderbody)
* [renderDetails](supertable.md#renderdetails)
* [renderFooter](supertable.md#renderfooter)
* [renderHeader](supertable.md#renderheader)
* [renderHeaderField](supertable.md#renderheaderfield)
* [renderRow](supertable.md#renderrow)
* [renderTableActions](supertable.md#rendertableactions)
* [scrollTo](supertable.md#scrollto)
* [scrollToItem](supertable.md#scrolltoitem)
* [selectAll](supertable.md#selectall)
* [selectOnly](supertable.md#selectonly)
* [selectRelative](supertable.md#selectrelative)
* [selectRow](supertable.md#selectrow)
* [selectTo](supertable.md#selectto)
* [selectToggle](supertable.md#selecttoggle)
* [setAttributeVisible](supertable.md#setattributevisible)
* [setFilter](supertable.md#setfilter)
* [setGroup](supertable.md#setgroup)
* [setHeaderCellRef](supertable.md#setheadercellref)
* [setPinnedRef](supertable.md#setpinnedref)
* [setProxyHeaderRef](supertable.md#setproxyheaderref)
* [setRowHighlight](supertable.md#setrowhighlight)
* [setRowRef](supertable.md#setrowref)
* [setRowState](supertable.md#setrowstate)
* [setRowVisible](supertable.md#setrowvisible)
* [setSortDirection](supertable.md#setsortdirection)
* [setVisibleHeaderRef](supertable.md#setvisibleheaderref)
* [shouldComponentUpdate](supertable.md#shouldcomponentupdate)
* [singleRowActions](supertable.md#singlerowactions)
* [sortedRows](supertable.md#sortedrows)
* [standardSort](supertable.md#standardsort)
* [toggleDetails](supertable.md#toggledetails)
* [toggleGroup](supertable.md#togglegroup)
* [triggerUpdateVisibility](supertable.md#triggerupdatevisibility)
* [updateCalculatedValues](supertable.md#updatecalculatedvalues)
* [updateColumnWidth](supertable.md#updatecolumnwidth)
* [updateDetailIds](supertable.md#updatedetailids)
* [updateSelection](supertable.md#updateselection)
* [updateState](supertable.md#updatestate)
* [useMultiSelect](supertable.md#usemultiselect)
* [visibleAttributes](supertable.md#visibleattributes)

### Object literals

* [contextTypes](supertable.md#contexttypes)

## Constructors

### constructor

\+ **new SuperTable**(`props`: [IProps](../globals.md#iprops)): [SuperTable](supertable.md)

*Defined in Work/vortex/src/controls/Table.tsx:139*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [SuperTable](supertable.md)

## Properties

### context

•  **context**: [IComponentContext](../interfaces/icomponentcontext.md)

*Inherited from [ComponentEx](componentex.md).[context](componentex.md#context)*

*Defined in Work/vortex/src/util/ComponentEx.ts:132*

___

### mDelayedVisibility

• `Private` **mDelayedVisibility**: { [id:string]: boolean;  }

*Defined in Work/vortex/src/controls/Table.tsx:130*

___

### mDelayedVisibilityTimer

• `Private` **mDelayedVisibilityTimer**: Timer

*Defined in Work/vortex/src/controls/Table.tsx:131*

___

### mDetailTimer

• `Private` **mDetailTimer**: Timer = null

*Defined in Work/vortex/src/controls/Table.tsx:124*

___

### mHeaderRef

• `Private` **mHeaderRef**: HTMLElement

*Defined in Work/vortex/src/controls/Table.tsx:120*

___

### mHeaderUpdateDebouncer

• `Private` **mHeaderUpdateDebouncer**: [Debouncer](debouncer.md)

*Defined in Work/vortex/src/controls/Table.tsx:134*

___

### mLastDetailIds

• `Private` **mLastDetailIds**: string[] = []

*Defined in Work/vortex/src/controls/Table.tsx:123*

___

### mLastScroll

• `Private` **mLastScroll**: number

*Defined in Work/vortex/src/controls/Table.tsx:136*

___

### mLastSelectOnly

• `Private` **mLastSelectOnly**: number = 0

*Defined in Work/vortex/src/controls/Table.tsx:122*

___

### mLastUpdateState

• `Private` **mLastUpdateState**: [IProps](../globals.md#iprops) = undefined

*Defined in Work/vortex/src/controls/Table.tsx:125*

___

### mMounted

• `Private` **mMounted**: boolean = false

*Defined in Work/vortex/src/controls/Table.tsx:138*

___

### mNextState

• `Private` **mNextState**: IComponentState = undefined

*Defined in Work/vortex/src/controls/Table.tsx:128*

___

### mNextUpdateState

• `Private` **mNextUpdateState**: [IProps](../globals.md#iprops) = undefined

*Defined in Work/vortex/src/controls/Table.tsx:126*

___

### mNextVisibility

• `Private` **mNextVisibility**: { [id:string]: boolean;  }

*Defined in Work/vortex/src/controls/Table.tsx:129*

___

### mNoShrinkColumns

• `Private` **mNoShrinkColumns**: { [attributeId:string]: [HeaderCell](headercell.md);  }

*Defined in Work/vortex/src/controls/Table.tsx:139*

___

### mPinnedRef

• `Private` **mPinnedRef**: HTMLElement

*Defined in Work/vortex/src/controls/Table.tsx:118*

___

### mProxyHeaderRef

• `Private` **mProxyHeaderRef**: HTMLElement

*Defined in Work/vortex/src/controls/Table.tsx:132*

___

### mRowRefs

• `Private` **mRowRefs**: { [id:string]: HTMLElement;  }

*Defined in Work/vortex/src/controls/Table.tsx:121*

___

### mScrollRef

• `Private` **mScrollRef**: HTMLElement

*Defined in Work/vortex/src/controls/Table.tsx:119*

___

### mUpdateCalculatedDebouncer

• `Private` **mUpdateCalculatedDebouncer**: [Debouncer](debouncer.md)

*Defined in Work/vortex/src/controls/Table.tsx:135*

___

### mUpdateInProgress

• `Private` **mUpdateInProgress**: boolean = false

*Defined in Work/vortex/src/controls/Table.tsx:127*

___

### mVisibleAttributes

• `Private` **mVisibleAttributes**: [ITableAttribute](../interfaces/itableattribute.md)[]

*Defined in Work/vortex/src/controls/Table.tsx:114*

___

### mVisibleDetails

• `Private` **mVisibleDetails**: [ITableAttribute](../interfaces/itableattribute.md)[]

*Defined in Work/vortex/src/controls/Table.tsx:115*

___

### mVisibleHeaderRef

• `Private` **mVisibleHeaderRef**: HTMLElement

*Defined in Work/vortex/src/controls/Table.tsx:133*

___

### mVisibleInlines

• `Private` **mVisibleInlines**: [ITableAttribute](../interfaces/itableattribute.md)[]

*Defined in Work/vortex/src/controls/Table.tsx:116*

___

### mWillSetVisibility

• `Private` **mWillSetVisibility**: boolean = false

*Defined in Work/vortex/src/controls/Table.tsx:137*

___

### nextState

•  **nextState**: IComponentState

*Inherited from [ComponentEx](componentex.md).[nextState](componentex.md#nextstate)*

*Defined in Work/vortex/src/util/ComponentEx.ts:134*

___

### SCROLL\_DEBOUNCE

▪ `Static` `Private` **SCROLL\_DEBOUNCE**: number = 5000

*Defined in Work/vortex/src/controls/Table.tsx:112*

___

### SCROLL\_DURATION

▪ `Static` `Private` **SCROLL\_DURATION**: number = 200

*Defined in Work/vortex/src/controls/Table.tsx:109*

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

*Defined in Work/vortex/src/controls/Table.tsx:202*

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

### attributeSortFunction

▸ `Private`**attributeSortFunction**(`sortAttribute`: [ITableAttribute](../interfaces/itableattribute.md), `calculatedValues`: [ILookupCalculated](../interfaces/ilookupcalculated.md), `data`: { [id:string]: any;  }, `locale`: string): any

*Defined in Work/vortex/src/controls/Table.tsx:1206*

#### Parameters:

Name | Type |
------ | ------ |
`sortAttribute` | [ITableAttribute](../interfaces/itableattribute.md) |
`calculatedValues` | [ILookupCalculated](../interfaces/ilookupcalculated.md) |
`data` | { [id:string]: any;  } |
`locale` | string |

**Returns:** any

___

### clearFilters

▸ `Private`**clearFilters**(): void

*Defined in Work/vortex/src/controls/Table.tsx:1579*

**Returns:** void

___

### collapseAll

▸ `Private`**collapseAll**(): void

*Defined in Work/vortex/src/controls/Table.tsx:452*

**Returns:** void

___

### columnToggles

▸ `Private`**columnToggles**(`props`: [IProps](../globals.md#iprops)): [ITableRowAction](../interfaces/itablerowaction.md)[]

*Defined in Work/vortex/src/controls/Table.tsx:577*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [ITableRowAction](../interfaces/itablerowaction.md)[]

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

*Defined in Work/vortex/src/controls/Table.tsx:184*

**Returns:** void

___

### componentDidUpdate

▸ **componentDidUpdate**(): void

*Overrides [Icon](icon.md).[componentDidUpdate](icon.md#componentdidupdate)*

*Defined in Work/vortex/src/controls/Table.tsx:256*

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

*Defined in Work/vortex/src/controls/Table.tsx:197*

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

### deselectAll

▸ `Private`**deselectAll**(): void

*Defined in Work/vortex/src/controls/Table.tsx:1437*

**Returns:** void

___

### expandAll

▸ `Private`**expandAll**(): void

*Defined in Work/vortex/src/controls/Table.tsx:447*

**Returns:** void

___

### filteredRows

▸ `Private`**filteredRows**(`props`: [IProps](../globals.md#iprops), `attributes`: [ITableAttribute](../interfaces/itableattribute.md)[], `data`: { [id:string]: any;  }): object

*Defined in Work/vortex/src/controls/Table.tsx:1163*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |
`attributes` | [ITableAttribute](../interfaces/itableattribute.md)[] |
`data` | { [id:string]: any;  } |

**Returns:** object

___

### getAttributeState

▸ `Private`**getAttributeState**(`attribute`: [ITableAttribute](../interfaces/itableattribute.md), `attributeStatesIn?`: { [id:string]: [IAttributeState](../interfaces/iattributestate.md);  }): object

*Defined in Work/vortex/src/controls/Table.tsx:1535*

#### Parameters:

Name | Type |
------ | ------ |
`attribute` | [ITableAttribute](../interfaces/itableattribute.md) |
`attributeStatesIn?` | { [id:string]: [IAttributeState](../interfaces/iattributestate.md);  } |

**Returns:** object

Name | Type |
------ | ------ |
`enabled` | boolean |
`sortDirection` | [SortDirection](../globals.md#sortdirection) |

___

### getAttributeStates

▸ `Private`**getAttributeStates**(`props`: [IProps](../globals.md#iprops)): object

*Defined in Work/vortex/src/controls/Table.tsx:856*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** object

___

### getClasses

▸ `Private`**getClasses**(`element`: HTMLElement): string

*Defined in Work/vortex/src/controls/Table.tsx:1332*

#### Parameters:

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** string

___

### getGroupOptions

▸ `Private`**getGroupOptions**(`props`: [IProps](../globals.md#iprops), `sortedRows`: string[], `sortAttribute`: [ITableAttribute](../interfaces/itableattribute.md), `groupAttribute`: [ITableAttribute](../interfaces/itableattribute.md), `valFunc`: (key: string) => any): any[]

*Defined in Work/vortex/src/controls/Table.tsx:485*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |
`sortedRows` | string[] |
`sortAttribute` | [ITableAttribute](../interfaces/itableattribute.md) |
`groupAttribute` | [ITableAttribute](../interfaces/itableattribute.md) |
`valFunc` | (key: string) => any |

**Returns:** any[]

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

### groupedRows

▸ `Private`**groupedRows**(`props`: [IProps](../globals.md#iprops), `sortedRows`: string[]): Array\<{ count: number ; id: string ; rows: string[]  }>

*Defined in Work/vortex/src/controls/Table.tsx:1276*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |
`sortedRows` | string[] |

**Returns:** Array\<{ count: number ; id: string ; rows: string[]  }>

___

### handleKeyDown

▸ `Private`**handleKeyDown**(`evt`: KeyboardEvent\<any>): void

*Defined in Work/vortex/src/controls/Table.tsx:750*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | KeyboardEvent\<any> |

**Returns:** void

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

### invalidate

▸ `Private`**invalidate**(`columnId`: string): void

*Defined in Work/vortex/src/controls/Table.tsx:522*

#### Parameters:

Name | Type |
------ | ------ |
`columnId` | string |

**Returns:** void

___

### isSortColumn

▸ `Private`**isSortColumn**(`attributeState`: [IAttributeState](../interfaces/iattributestate.md)): boolean

*Defined in Work/vortex/src/controls/Table.tsx:646*

#### Parameters:

Name | Type |
------ | ------ |
`attributeState` | [IAttributeState](../interfaces/iattributestate.md) |

**Returns:** boolean

___

### mainHeaderRef

▸ `Private`**mainHeaderRef**(`ref`: any): void

*Defined in Work/vortex/src/controls/Table.tsx:1058*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

**Returns:** void

___

### mainPaneRef

▸ `Private`**mainPaneRef**(`ref`: any): void

*Defined in Work/vortex/src/controls/Table.tsx:1045*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

**Returns:** void

___

### matchHotKey

▸ `Private`**matchHotKey**(`action`: [ITableRowAction](../interfaces/itablerowaction.md), `code`: number, `shift`: boolean, `alt`: boolean, `ctrl`: boolean): boolean

*Defined in Work/vortex/src/controls/Table.tsx:828*

#### Parameters:

Name | Type |
------ | ------ |
`action` | [ITableRowAction](../interfaces/itablerowaction.md) |
`code` | number |
`shift` | boolean |
`alt` | boolean |
`ctrl` | boolean |

**Returns:** boolean

___

### multiRowActions

▸ `Private`**multiRowActions**(`props`: [IProps](../globals.md#iprops)): [ITableRowAction](../interfaces/itablerowaction.md)[]

*Defined in Work/vortex/src/controls/Table.tsx:872*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [ITableRowAction](../interfaces/itablerowaction.md)[]

___

### onRowStateChanged

▸ `Private`**onRowStateChanged**(): void

*Defined in Work/vortex/src/controls/Table.tsx:1432*

**Returns:** void

___

### onScroll

▸ `Private`**onScroll**(`event`: any): void

*Defined in Work/vortex/src/controls/Table.tsx:1025*

#### Parameters:

Name | Type |
------ | ------ |
`event` | any |

**Returns:** void

___

### postScroll

▸ `Private`**postScroll**(): void

*Defined in Work/vortex/src/controls/Table.tsx:974*

**Returns:** void

___

### refreshSorted

▸ `Private`**refreshSorted**(`props`: [IProps](../globals.md#iprops)): void

*Defined in Work/vortex/src/controls/Table.tsx:837*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** void

___

### render

▸ **render**(): Element

*Defined in Work/vortex/src/controls/Table.tsx:277*

**Returns:** Element

___

### renderBody

▸ `Private`**renderBody**(): Element

*Defined in Work/vortex/src/controls/Table.tsx:396*

**Returns:** Element

___

### renderDetails

▸ `Private`**renderDetails**(): Element

*Defined in Work/vortex/src/controls/Table.tsx:551*

**Returns:** Element

___

### renderFooter

▸ `Private`**renderFooter**(): Element

*Defined in Work/vortex/src/controls/Table.tsx:348*

**Returns:** Element

___

### renderHeader

▸ `Private`**renderHeader**(`proxy`: boolean): Element

*Defined in Work/vortex/src/controls/Table.tsx:319*

#### Parameters:

Name | Type |
------ | ------ |
`proxy` | boolean |

**Returns:** Element

___

### renderHeaderField

▸ `Private`**renderHeaderField**(`attribute`: [ITableAttribute](../interfaces/itableattribute.md), `proxy`: boolean): Element

*Defined in Work/vortex/src/controls/Table.tsx:693*

#### Parameters:

Name | Type |
------ | ------ |
`attribute` | [ITableAttribute](../interfaces/itableattribute.md) |
`proxy` | boolean |

**Returns:** Element

___

### renderRow

▸ `Private`**renderRow**(`rowId`: string, `sortAttribute`: [ITableAttribute](../interfaces/itableattribute.md), `groupId?`: string): Element

*Defined in Work/vortex/src/controls/Table.tsx:652*

#### Parameters:

Name | Type |
------ | ------ |
`rowId` | string |
`sortAttribute` | [ITableAttribute](../interfaces/itableattribute.md) |
`groupId?` | string |

**Returns:** Element

___

### renderTableActions

▸ `Private`**renderTableActions**(`hasActions`: boolean): Element

*Defined in Work/vortex/src/controls/Table.tsx:620*

#### Parameters:

Name | Type |
------ | ------ |
`hasActions` | boolean |

**Returns:** Element

___

### scrollTo

▸ `Private`**scrollTo**(`id`: string, `mayRetry?`: boolean): void

*Defined in Work/vortex/src/controls/Table.tsx:461*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |
`mayRetry?` | boolean |

**Returns:** void

___

### scrollToItem

▸ `Private`**scrollToItem**(`item`: HTMLElement, `smooth`: boolean, `iterations?`: number): void

*Defined in Work/vortex/src/controls/Table.tsx:989*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`item` | HTMLElement | - |
`smooth` | boolean | - |
`iterations` | number | 3 |

**Returns:** void

___

### selectAll

▸ `Private`**selectAll**(): void

*Defined in Work/vortex/src/controls/Table.tsx:1449*

**Returns:** void

___

### selectOnly

▸ `Private`**selectOnly**(`rowId`: string, `groupId`: string, `click`: boolean): void

*Defined in Work/vortex/src/controls/Table.tsx:1385*

#### Parameters:

Name | Type |
------ | ------ |
`rowId` | string |
`groupId` | string |
`click` | boolean |

**Returns:** void

___

### selectRelative

▸ `Private`**selectRelative**(`delta`: number, `groupId`: string, `shiftHeld`: boolean): string

*Defined in Work/vortex/src/controls/Table.tsx:877*

#### Parameters:

Name | Type |
------ | ------ |
`delta` | number |
`groupId` | string |
`shiftHeld` | boolean |

**Returns:** string

___

### selectRow

▸ `Private`**selectRow**(`evt`: MouseEvent\<any>): void

*Defined in Work/vortex/src/controls/Table.tsx:1343*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | MouseEvent\<any> |

**Returns:** void

___

### selectTo

▸ `Private`**selectTo**(`rowId`: string, `groupId`: string): void

*Defined in Work/vortex/src/controls/Table.tsx:1469*

#### Parameters:

Name | Type |
------ | ------ |
`rowId` | string |
`groupId` | string |

**Returns:** void

___

### selectToggle

▸ `Private`**selectToggle**(`rowId`: string, `groupId`: string): void

*Defined in Work/vortex/src/controls/Table.tsx:1415*

#### Parameters:

Name | Type |
------ | ------ |
`rowId` | string |
`groupId` | string |

**Returns:** void

___

### setAttributeVisible

▸ `Private`**setAttributeVisible**(`attributeId`: string, `visible`: boolean): void

*Defined in Work/vortex/src/controls/Table.tsx:1327*

#### Parameters:

Name | Type |
------ | ------ |
`attributeId` | string |
`visible` | boolean |

**Returns:** void

___

### setFilter

▸ `Private`**setFilter**(`attributeId?`: string, `filter?`: any): void

*Defined in Work/vortex/src/controls/Table.tsx:1574*

#### Parameters:

Name | Type |
------ | ------ |
`attributeId?` | string |
`filter?` | any |

**Returns:** void

___

### setGroup

▸ `Private`**setGroup**(`id`: string): void

*Defined in Work/vortex/src/controls/Table.tsx:1565*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |

**Returns:** void

___

### setHeaderCellRef

▸ `Private`**setHeaderCellRef**(`ref`: [HeaderCell](headercell.md)): void

*Defined in Work/vortex/src/controls/Table.tsx:742*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | [HeaderCell](headercell.md) |

**Returns:** void

___

### setPinnedRef

▸ `Private`**setPinnedRef**(`ref`: any): void

*Defined in Work/vortex/src/controls/Table.tsx:936*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

**Returns:** void

___

### setProxyHeaderRef

▸ `Private`**setProxyHeaderRef**(`ref`: any): void

*Defined in Work/vortex/src/controls/Table.tsx:911*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

**Returns:** void

___

### setRowHighlight

▸ `Private`**setRowHighlight**(`rowId`: string, `highlighted`: boolean): void

*Defined in Work/vortex/src/controls/Table.tsx:985*

#### Parameters:

Name | Type |
------ | ------ |
`rowId` | string |
`highlighted` | boolean |

**Returns:** void

___

### setRowRef

▸ `Private`**setRowRef**(`ref`: any): void

*Defined in Work/vortex/src/controls/Table.tsx:940*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

**Returns:** void

___

### setRowState

▸ `Private`**setRowState**(`rowIds`: string[]): void

*Defined in Work/vortex/src/controls/Table.tsx:531*

#### Parameters:

Name | Type |
------ | ------ |
`rowIds` | string[] |

**Returns:** void

___

### setRowVisible

▸ `Private`**setRowVisible**(`rowId`: string, `visible`: boolean): void

*Defined in Work/vortex/src/controls/Table.tsx:946*

#### Parameters:

Name | Type |
------ | ------ |
`rowId` | string |
`visible` | boolean |

**Returns:** void

___

### setSortDirection

▸ `Private`**setSortDirection**(`id`: string, `direction`: [SortDirection](../globals.md#sortdirection)): void

*Defined in Work/vortex/src/controls/Table.tsx:1549*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |
`direction` | [SortDirection](../globals.md#sortdirection) |

**Returns:** void

___

### setVisibleHeaderRef

▸ `Private`**setVisibleHeaderRef**(`ref`: any): void

*Defined in Work/vortex/src/controls/Table.tsx:916*

#### Parameters:

Name | Type |
------ | ------ |
`ref` | any |

**Returns:** void

___

### shouldComponentUpdate

▸ **shouldComponentUpdate**(`newProps`: [IProps](../globals.md#iprops), `newState`: IComponentState): boolean

*Overrides [Icon](icon.md).[shouldComponentUpdate](icon.md#shouldcomponentupdate)*

*Defined in Work/vortex/src/controls/Table.tsx:260*

#### Parameters:

Name | Type |
------ | ------ |
`newProps` | [IProps](../globals.md#iprops) |
`newState` | IComponentState |

**Returns:** boolean

___

### singleRowActions

▸ `Private`**singleRowActions**(`props`: [IProps](../globals.md#iprops)): [ITableRowAction](../interfaces/itablerowaction.md)[]

*Defined in Work/vortex/src/controls/Table.tsx:867*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** [ITableRowAction](../interfaces/itablerowaction.md)[]

___

### sortedRows

▸ `Private`**sortedRows**(`attributeState`: { [id:string]: [IAttributeState](../interfaces/iattributestate.md);  }, `attributes`: [ITableAttribute](../interfaces/itableattribute.md)[], `data`: { [id:string]: any;  }, `locale`: string): string[]

*Defined in Work/vortex/src/controls/Table.tsx:1229*

#### Parameters:

Name | Type |
------ | ------ |
`attributeState` | { [id:string]: [IAttributeState](../interfaces/iattributestate.md);  } |
`attributes` | [ITableAttribute](../interfaces/itableattribute.md)[] |
`data` | { [id:string]: any;  } |
`locale` | string |

**Returns:** string[]

___

### standardSort

▸ `Private`**standardSort**(`lhs`: any, `rhs`: any): number

*Defined in Work/vortex/src/controls/Table.tsx:1157*

#### Parameters:

Name | Type |
------ | ------ |
`lhs` | any |
`rhs` | any |

**Returns:** number

___

### toggleDetails

▸ `Private`**toggleDetails**(): void

*Defined in Work/vortex/src/controls/Table.tsx:526*

**Returns:** void

___

### toggleGroup

▸ `Private`**toggleGroup**(`groupName`: string, `expand`: boolean): void

*Defined in Work/vortex/src/controls/Table.tsx:441*

#### Parameters:

Name | Type |
------ | ------ |
`groupName` | string |
`expand` | boolean |

**Returns:** void

___

### triggerUpdateVisibility

▸ `Private`**triggerUpdateVisibility**(): void

*Defined in Work/vortex/src/controls/Table.tsx:964*

**Returns:** void

___

### updateCalculatedValues

▸ `Private`**updateCalculatedValues**(`props`: [IProps](../globals.md#iprops), `forceUpdateId?`: string): Promise\<string[]>

*Defined in Work/vortex/src/controls/Table.tsx:1062*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |
`forceUpdateId?` | string |

**Returns:** Promise\<string[]>

___

### updateColumnWidth

▸ `Private`**updateColumnWidth**(): void

*Defined in Work/vortex/src/controls/Table.tsx:921*

**Returns:** void

___

### updateDetailIds

▸ `Private`**updateDetailIds**(`rowIds`: string[]): void

*Defined in Work/vortex/src/controls/Table.tsx:539*

#### Parameters:

Name | Type |
------ | ------ |
`rowIds` | string[] |

**Returns:** void

___

### updateSelection

▸ `Private`**updateSelection**(`props`: [IProps](../globals.md#iprops)): void

*Defined in Work/vortex/src/controls/Table.tsx:1141*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |

**Returns:** void

___

### updateState

▸ `Private`**updateState**(`newState`: IComponentState, `callback?`: () => void): void

*Defined in Work/vortex/src/controls/Table.tsx:1588*

#### Parameters:

Name | Type |
------ | ------ |
`newState` | IComponentState |
`callback?` | () => void |

**Returns:** void

___

### useMultiSelect

▸ `Private`**useMultiSelect**(): boolean

*Defined in Work/vortex/src/controls/Table.tsx:1583*

**Returns:** boolean

___

### visibleAttributes

▸ `Private`**visibleAttributes**(`attributes`: [ITableAttribute](../interfaces/itableattribute.md)[], `attributeStates`: { [id:string]: [IAttributeState](../interfaces/iattributestate.md);  }): object

*Defined in Work/vortex/src/controls/Table.tsx:1515*

#### Parameters:

Name | Type |
------ | ------ |
`attributes` | [ITableAttribute](../interfaces/itableattribute.md)[] |
`attributeStates` | { [id:string]: [IAttributeState](../interfaces/iattributestate.md);  } |

**Returns:** object

Name | Type |
------ | ------ |
`detail` | [ITableAttribute](../interfaces/itableattribute.md)[] |
`inline` | [ITableAttribute](../interfaces/itableattribute.md)[] |
`table` | [ITableAttribute](../interfaces/itableattribute.md)[] |

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
