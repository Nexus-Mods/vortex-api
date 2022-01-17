[vortex_devel](../README.md) / [Exports](../modules.md) / ComponentEx

# Class: ComponentEx<P, S\>

convenience extension for React.Component that adds support for the
i18n library.

This whole module is just here to reduce the code required for "decorated"
components.

**`export`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | `P` |
| `S` | extends `object` |

## Hierarchy

- `Component`<`P` & `Partial`<`WithTranslation`\>, `S`\>

  ↳ **`ComponentEx`**

  ↳↳ [`FormPathItem`](FormPathItem.md)

  ↳↳ [`MainPage`](MainPage.md)

## Table of contents

### Constructors

- [constructor](ComponentEx.md#constructor)

### Properties

- [context](ComponentEx.md#context)
- [nextState](ComponentEx.md#nextstate)
- [props](ComponentEx.md#props)
- [refs](ComponentEx.md#refs)
- [state](ComponentEx.md#state)
- [contextType](ComponentEx.md#contexttype)
- [contextTypes](ComponentEx.md#contexttypes)

### Methods

- [UNSAFE\_componentWillMount](ComponentEx.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](ComponentEx.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](ComponentEx.md#unsafe_componentwillupdate)
- [componentDidCatch](ComponentEx.md#componentdidcatch)
- [componentDidMount](ComponentEx.md#componentdidmount)
- [componentDidUpdate](ComponentEx.md#componentdidupdate)
- [componentWillMount](ComponentEx.md#componentwillmount)
- [componentWillReceiveProps](ComponentEx.md#componentwillreceiveprops)
- [componentWillUnmount](ComponentEx.md#componentwillunmount)
- [componentWillUpdate](ComponentEx.md#componentwillupdate)
- [forceUpdate](ComponentEx.md#forceupdate)
- [getSnapshotBeforeUpdate](ComponentEx.md#getsnapshotbeforeupdate)
- [initState](ComponentEx.md#initstate)
- [render](ComponentEx.md#render)
- [setState](ComponentEx.md#setstate)
- [shouldComponentUpdate](ComponentEx.md#shouldcomponentupdate)

## Constructors

### constructor

• **new ComponentEx**<`P`, `S`\>(`props`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | `P` |
| `S` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `P` & `Partial`<`WithTranslation`<``"translation"``\>\> \| `Readonly`<`P` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |

#### Inherited from

React.Component<P & Partial<WithTranslation\>, S\>.constructor

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:474

• **new ComponentEx**<`P`, `S`\>(`props`, `context`)

**`deprecated`**

**`see`** https://reactjs.org/docs/legacy-context.html

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | `P` |
| `S` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `P` & `Partial`<`WithTranslation`<``"translation"``\>\> |
| `context` | `any` |

#### Inherited from

React.Component<P & Partial<WithTranslation\>, S\>.constructor

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:479

## Properties

### context

• **context**: [`IComponentContext`](../interfaces/types.IComponentContext.md)

#### Overrides

React.Component.context

#### Defined in

../src/util/ComponentEx.ts:133

___

### nextState

• **nextState**: `S`

#### Defined in

../src/util/ComponentEx.ts:135

___

### props

• `Readonly` **props**: `Readonly`<`P` & `Partial`<`WithTranslation`<``"translation"``\>\>\> & `Readonly`<{ `children?`: `ReactNode`  }\>

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

• **state**: `Readonly`<`S`\>

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

___

### contextTypes

▪ `Static` **contextTypes**: `ValidationMap`<`any`\>

#### Defined in

../src/util/ComponentEx.ts:127

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
| `nextProps` | `Readonly`<`P` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
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
| `nextProps` | `Readonly`<`P` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `nextState` | `Readonly`<`S`\> |
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
| `prevProps` | `Readonly`<`P` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `prevState` | `Readonly`<`S`\> |
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
| `nextProps` | `Readonly`<`P` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
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
| `nextProps` | `Readonly`<`P` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `nextState` | `Readonly`<`S`\> |
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
| `prevProps` | `Readonly`<`P` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `prevState` | `Readonly`<`S`\> |

#### Returns

`any`

#### Inherited from

React.Component.getSnapshotBeforeUpdate

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:673

___

### initState

▸ `Protected` **initState**(`value`, `delayed?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `S` | `undefined` |
| `delayed` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

../src/util/ComponentEx.ts:137

___

### render

▸ **render**(): `ReactNode`

#### Returns

`ReactNode`

#### Inherited from

React.Component.render

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:490

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `S` \| (`prevState`: `Readonly`<`S`\>, `props`: `Readonly`<`P` & `Partial`<`WithTranslation`<``"translation"``\>\>\>) => `S` \| `Pick`<`S`, `K`\> \| `Pick`<`S`, `K`\> |
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
| `nextProps` | `Readonly`<`P` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `nextState` | `Readonly`<`S`\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

React.Component.shouldComponentUpdate

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:627
