[vortex_devel](../README.md) / [Exports](../modules.md) / [tooltip](../modules/tooltip.md) / ClickPopover

# Class: ClickPopover

[tooltip](../modules/tooltip.md).ClickPopover

## Hierarchy

- `Component`<[`ClickPopoverProps`](../modules/tooltip.md#clickpopoverprops), { `open`: `boolean`  }\>

  ↳ **`ClickPopover`**

## Table of contents

### Constructors

- [constructor](tooltip.ClickPopover.md#constructor)

### Properties

- [context](tooltip.ClickPopover.md#context)
- [mRef](tooltip.ClickPopover.md#mref)
- [props](tooltip.ClickPopover.md#props)
- [refs](tooltip.ClickPopover.md#refs)
- [state](tooltip.ClickPopover.md#state)
- [contextType](tooltip.ClickPopover.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](tooltip.ClickPopover.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](tooltip.ClickPopover.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](tooltip.ClickPopover.md#unsafe_componentwillupdate)
- [componentDidCatch](tooltip.ClickPopover.md#componentdidcatch)
- [componentDidMount](tooltip.ClickPopover.md#componentdidmount)
- [componentDidUpdate](tooltip.ClickPopover.md#componentdidupdate)
- [componentWillMount](tooltip.ClickPopover.md#componentwillmount)
- [componentWillReceiveProps](tooltip.ClickPopover.md#componentwillreceiveprops)
- [componentWillUnmount](tooltip.ClickPopover.md#componentwillunmount)
- [componentWillUpdate](tooltip.ClickPopover.md#componentwillupdate)
- [forceUpdate](tooltip.ClickPopover.md#forceupdate)
- [getSnapshotBeforeUpdate](tooltip.ClickPopover.md#getsnapshotbeforeupdate)
- [hideOverlay](tooltip.ClickPopover.md#hideoverlay)
- [render](tooltip.ClickPopover.md#render)
- [setRef](tooltip.ClickPopover.md#setref)
- [setState](tooltip.ClickPopover.md#setstate)
- [shouldComponentUpdate](tooltip.ClickPopover.md#shouldcomponentupdate)
- [toggleOverlay](tooltip.ClickPopover.md#toggleoverlay)

## Constructors

### constructor

• **new ClickPopover**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ClickPopoverProps`](../modules/tooltip.md#clickpopoverprops) |

#### Overrides

React.Component&lt;ClickPopoverProps, { open: boolean }\&gt;.constructor

#### Defined in

../src/controls/TooltipControls.tsx:294

## Properties

### context

• **context**: `any`

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

#### Inherited from

React.Component.context

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:472

___

### mRef

• `Private` **mRef**: `Element`

#### Defined in

../src/controls/TooltipControls.tsx:292

___

### props

• `Readonly` **props**: `Readonly`<[`ClickPopoverProps`](../modules/tooltip.md#clickpopoverprops)\> & `Readonly`<{ `children?`: `ReactNode`  }\>

#### Inherited from

React.Component.props

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:497

___

### refs

• **refs**: `Object`

**`deprecated`**
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: `ReactInstance`

#### Inherited from

React.Component.refs

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:503

___

### state

• **state**: `Readonly`<{ `open`: `boolean`  }\>

#### Inherited from

React.Component.state

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:498

___

### contextType

▪ `Static` `Optional` **contextType**: `Context`<`any`\>

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

#### Inherited from

React.Component.contextType

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:454

## Methods

### UNSAFE\_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillMount

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:708

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<[`ClickPopoverProps`](../modules/tooltip.md#clickpopoverprops)\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillReceiveProps

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:740

___

### UNSAFE\_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<[`ClickPopoverProps`](../modules/tooltip.md#clickpopoverprops)\> |
| `nextState` | `Readonly`<{ `open`: `boolean`  }\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillUpdate

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:768

___

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

React.Component.componentDidCatch

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:637

___

### componentDidMount

▸ `Optional` **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Inherited from

React.Component.componentDidMount

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:616

___

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<[`ClickPopoverProps`](../modules/tooltip.md#clickpopoverprops)\> |
| `prevState` | `Readonly`<{ `open`: `boolean`  }\> |
| `snapshot?` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentDidUpdate

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:679

___

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.componentWillMount

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:694

___

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<[`ClickPopoverProps`](../modules/tooltip.md#clickpopoverprops)\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentWillReceiveProps

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:723

___

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

React.Component.componentWillUnmount

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:632

___

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<[`ClickPopoverProps`](../modules/tooltip.md#clickpopoverprops)\> |
| `nextState` | `Readonly`<{ `open`: `boolean`  }\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentWillUpdate

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:753

___

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.Component.forceUpdate

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:489

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<[`ClickPopoverProps`](../modules/tooltip.md#clickpopoverprops)\> |
| `prevState` | `Readonly`<{ `open`: `boolean`  }\> |

#### Returns

`any`

#### Inherited from

React.Component.getSnapshotBeforeUpdate

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:673

___

### hideOverlay

▸ `Private` **hideOverlay**(): `void`

#### Returns

`void`

#### Defined in

../src/controls/TooltipControls.tsx:335

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

React.Component.render

#### Defined in

../src/controls/TooltipControls.tsx:301

___

### setRef

▸ `Private` **setRef**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`void`

#### Defined in

../src/controls/TooltipControls.tsx:339

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"open"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | { `open`: `boolean`  } \| (`prevState`: `Readonly`<{ `open`: `boolean`  }\>, `props`: `Readonly`<[`ClickPopoverProps`](../modules/tooltip.md#clickpopoverprops)\>) => { `open`: `boolean`  } \| `Pick`<{ `open`: `boolean`  }, `K`\> \| `Pick`<{ `open`: `boolean`  }, `K`\> |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.Component.setState

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:484

___

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<[`ClickPopoverProps`](../modules/tooltip.md#clickpopoverprops)\> |
| `nextState` | `Readonly`<{ `open`: `boolean`  }\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

React.Component.shouldComponentUpdate

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:627

___

### toggleOverlay

▸ `Private` **toggleOverlay**(): `void`

#### Returns

`void`

#### Defined in

../src/controls/TooltipControls.tsx:331
