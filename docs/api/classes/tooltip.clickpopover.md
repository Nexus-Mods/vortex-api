[vortex_devel](../README.md) / [Exports](../modules.md) / [tooltip](../modules/tooltip.md) / ClickPopover

# Class: ClickPopover

[tooltip](../modules/tooltip.md).ClickPopover

## Hierarchy

* *Component*<[*ClickPopoverProps*](../modules/tooltip.md#clickpopoverprops), { `open`: *boolean*  }\>

  ↳ **ClickPopover**

## Table of contents

### Constructors

- [constructor](tooltip.clickpopover.md#constructor)

### Properties

- [context](tooltip.clickpopover.md#context)
- [mRef](tooltip.clickpopover.md#mref)
- [props](tooltip.clickpopover.md#props)
- [refs](tooltip.clickpopover.md#refs)
- [state](tooltip.clickpopover.md#state)
- [contextType](tooltip.clickpopover.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](tooltip.clickpopover.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](tooltip.clickpopover.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](tooltip.clickpopover.md#unsafe_componentwillupdate)
- [componentDidCatch](tooltip.clickpopover.md#componentdidcatch)
- [componentDidMount](tooltip.clickpopover.md#componentdidmount)
- [componentDidUpdate](tooltip.clickpopover.md#componentdidupdate)
- [componentWillMount](tooltip.clickpopover.md#componentwillmount)
- [componentWillReceiveProps](tooltip.clickpopover.md#componentwillreceiveprops)
- [componentWillUnmount](tooltip.clickpopover.md#componentwillunmount)
- [componentWillUpdate](tooltip.clickpopover.md#componentwillupdate)
- [forceUpdate](tooltip.clickpopover.md#forceupdate)
- [getSnapshotBeforeUpdate](tooltip.clickpopover.md#getsnapshotbeforeupdate)
- [hideOverlay](tooltip.clickpopover.md#hideoverlay)
- [render](tooltip.clickpopover.md#render)
- [setRef](tooltip.clickpopover.md#setref)
- [setState](tooltip.clickpopover.md#setstate)
- [shouldComponentUpdate](tooltip.clickpopover.md#shouldcomponentupdate)
- [toggleOverlay](tooltip.clickpopover.md#toggleoverlay)

## Constructors

### constructor

\+ **new ClickPopover**(`props`: [*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)): [*ClickPopover*](tooltip.clickpopover.md)

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*IconButtonProps*](../modules/tooltip.md#iconbuttonprops) |

**Returns:** [*ClickPopover*](tooltip.clickpopover.md)

Defined in: src/controls/TooltipControls.tsx:291

## Properties

### context

• **context**: *any*

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

Defined in: node_modules/@types/react/index.d.ts:472

___

### mRef

• `Private` **mRef**: *Element*

Defined in: src/controls/TooltipControls.tsx:291

___

### props

• `Readonly` **props**: *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\> & *Readonly*<{ `children?`: ReactNode  }\>

Defined in: node_modules/@types/react/index.d.ts:497

___

### refs

• **refs**: *object*

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

Defined in: node_modules/@types/react/index.d.ts:503

___

### state

• **state**: *Readonly*<{ `open`: *boolean*  }\>

Defined in: node_modules/@types/react/index.d.ts:498

___

### contextType

▪ `Optional` `Static` **contextType**: *Context*<any\>

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

Defined in: node_modules/@types/react/index.d.ts:454

## Methods

### UNSAFE\_componentWillMount

▸ `Optional`**UNSAFE_componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:708

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\>, `nextContext`: *any*): *void*

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
:------ | :------ |
`nextProps` | *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:740

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\>, `nextState`: *Readonly*<{ `open`: *boolean*  }\>, `nextContext`: *any*): *void*

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
:------ | :------ |
`nextProps` | *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\> |
`nextState` | *Readonly*<{ `open`: *boolean*  }\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:768

___

### componentDidCatch

▸ `Optional`**componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters:

Name | Type |
:------ | :------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:637

___

### componentDidMount

▸ `Optional`**componentDidMount**(): *void*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:616

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\>, `prevState`: *Readonly*<{ `open`: *boolean*  }\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\> |
`prevState` | *Readonly*<{ `open`: *boolean*  }\> |
`snapshot?` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:679

___

### componentWillMount

▸ `Optional`**componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:694

___

### componentWillReceiveProps

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\>, `nextContext`: *any*): *void*

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
:------ | :------ |
`nextProps` | *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:723

___

### componentWillUnmount

▸ `Optional`**componentWillUnmount**(): *void*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:632

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\>, `nextState`: *Readonly*<{ `open`: *boolean*  }\>, `nextContext`: *any*): *void*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\> |
`nextState` | *Readonly*<{ `open`: *boolean*  }\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:753

___

### forceUpdate

▸ **forceUpdate**(`callback?`: () => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:489

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\>, `prevState`: *Readonly*<{ `open`: *boolean*  }\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\> |
`prevState` | *Readonly*<{ `open`: *boolean*  }\> |

**Returns:** *any*

Defined in: node_modules/@types/react/index.d.ts:673

___

### hideOverlay

▸ `Private`**hideOverlay**(): *void*

**Returns:** *void*

Defined in: src/controls/TooltipControls.tsx:334

___

### render

▸ **render**(): *Element*

**Returns:** *Element*

Defined in: src/controls/TooltipControls.tsx:300

___

### setRef

▸ `Private`**setRef**(`ref`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`ref` | *any* |

**Returns:** *void*

Defined in: src/controls/TooltipControls.tsx:338

___

### setState

▸ **setState**<K\>(`state`: { `open`: *boolean*  } \| (`prevState`: *Readonly*<{ `open`: *boolean*  }\>, `props`: *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\>) => { `open`: *boolean*  } \| *Pick*<{ `open`: *boolean*  }, K\> \| *Pick*<{ `open`: *boolean*  }, K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *open* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | { `open`: *boolean*  } \| (`prevState`: *Readonly*<{ `open`: *boolean*  }\>, `props`: *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\>) => { `open`: *boolean*  } \| *Pick*<{ `open`: *boolean*  }, K\> \| *Pick*<{ `open`: *boolean*  }, K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:484

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\>, `nextState`: *Readonly*<{ `open`: *boolean*  }\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<[*IconButtonProps*](../modules/tooltip.md#iconbuttonprops)\> |
`nextState` | *Readonly*<{ `open`: *boolean*  }\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react/index.d.ts:627

___

### toggleOverlay

▸ `Private`**toggleOverlay**(): *void*

**Returns:** *void*

Defined in: src/controls/TooltipControls.tsx:330
