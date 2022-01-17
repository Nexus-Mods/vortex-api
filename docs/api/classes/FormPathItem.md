[vortex_devel](../README.md) / [Exports](../modules.md) / FormPathItem

# Class: FormPathItem

## Hierarchy

- [`ComponentEx`](ComponentEx.md)<`IFormPathProps`, {}\>

  ↳ **`FormPathItem`**

## Table of contents

### Constructors

- [constructor](FormPathItem.md#constructor)

### Properties

- [context](FormPathItem.md#context)
- [nextState](FormPathItem.md#nextstate)
- [props](FormPathItem.md#props)
- [refs](FormPathItem.md#refs)
- [state](FormPathItem.md#state)
- [contextType](FormPathItem.md#contexttype)
- [contextTypes](FormPathItem.md#contexttypes)

### Methods

- [UNSAFE\_componentWillMount](FormPathItem.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](FormPathItem.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](FormPathItem.md#unsafe_componentwillupdate)
- [componentDidCatch](FormPathItem.md#componentdidcatch)
- [componentDidMount](FormPathItem.md#componentdidmount)
- [componentDidUpdate](FormPathItem.md#componentdidupdate)
- [componentWillMount](FormPathItem.md#componentwillmount)
- [componentWillReceiveProps](FormPathItem.md#componentwillreceiveprops)
- [componentWillUnmount](FormPathItem.md#componentwillunmount)
- [componentWillUpdate](FormPathItem.md#componentwillupdate)
- [forceUpdate](FormPathItem.md#forceupdate)
- [getSnapshotBeforeUpdate](FormPathItem.md#getsnapshotbeforeupdate)
- [handleChangePath](FormPathItem.md#handlechangepath)
- [handleTypePath](FormPathItem.md#handletypepath)
- [initState](FormPathItem.md#initstate)
- [render](FormPathItem.md#render)
- [setState](FormPathItem.md#setstate)
- [shouldComponentUpdate](FormPathItem.md#shouldcomponentupdate)
- [validationState](FormPathItem.md#validationstate)

## Constructors

### constructor

• **new FormPathItem**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\> \| `Readonly`<`IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |

#### Inherited from

[ComponentEx](ComponentEx.md).[constructor](ComponentEx.md#constructor)

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:474

• **new FormPathItem**(`props`, `context`)

**`deprecated`**

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\> |
| `context` | `any` |

#### Inherited from

[ComponentEx](ComponentEx.md).[constructor](ComponentEx.md#constructor)

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:479

## Properties

### context

• **context**: [`IComponentContext`](../interfaces/types.IComponentContext.md)

#### Inherited from

[ComponentEx](ComponentEx.md).[context](ComponentEx.md#context)

#### Defined in

../src/util/ComponentEx.ts:133

___

### nextState

• **nextState**: `Object`

#### Inherited from

[ComponentEx](ComponentEx.md).[nextState](ComponentEx.md#nextstate)

#### Defined in

../src/util/ComponentEx.ts:135

___

### props

• `Readonly` **props**: `Readonly`<`IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\>\> & `Readonly`<{ `children?`: `ReactNode`  }\>

#### Inherited from

[ComponentEx](ComponentEx.md).[props](ComponentEx.md#props)

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

[ComponentEx](ComponentEx.md).[refs](ComponentEx.md#refs)

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:503

___

### state

• **state**: `Readonly`<{}\>

#### Inherited from

[ComponentEx](ComponentEx.md).[state](ComponentEx.md#state)

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

[ComponentEx](ComponentEx.md).[contextType](ComponentEx.md#contexttype)

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:454

___

### contextTypes

▪ `Static` **contextTypes**: `ValidationMap`<`any`\>

#### Inherited from

[ComponentEx](ComponentEx.md).[contextTypes](ComponentEx.md#contexttypes)

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

[ComponentEx](ComponentEx.md).[UNSAFE_componentWillMount](ComponentEx.md#unsafe_componentwillmount)

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
| `nextProps` | `Readonly`<`IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentEx](ComponentEx.md).[UNSAFE_componentWillReceiveProps](ComponentEx.md#unsafe_componentwillreceiveprops)

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
| `nextProps` | `Readonly`<`IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `nextState` | `Readonly`<{}\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentEx](ComponentEx.md).[UNSAFE_componentWillUpdate](ComponentEx.md#unsafe_componentwillupdate)

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

[ComponentEx](ComponentEx.md).[componentDidCatch](ComponentEx.md#componentdidcatch)

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:637

___

### componentDidMount

▸ `Optional` **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Inherited from

[ComponentEx](ComponentEx.md).[componentDidMount](ComponentEx.md#componentdidmount)

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
| `prevProps` | `Readonly`<`IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `prevState` | `Readonly`<{}\> |
| `snapshot?` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentEx](ComponentEx.md).[componentDidUpdate](ComponentEx.md#componentdidupdate)

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

[ComponentEx](ComponentEx.md).[componentWillMount](ComponentEx.md#componentwillmount)

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
| `nextProps` | `Readonly`<`IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentEx](ComponentEx.md).[componentWillReceiveProps](ComponentEx.md#componentwillreceiveprops)

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

[ComponentEx](ComponentEx.md).[componentWillUnmount](ComponentEx.md#componentwillunmount)

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
| `nextProps` | `Readonly`<`IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `nextState` | `Readonly`<{}\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentEx](ComponentEx.md).[componentWillUpdate](ComponentEx.md#componentwillupdate)

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

[ComponentEx](ComponentEx.md).[forceUpdate](ComponentEx.md#forceupdate)

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
| `prevProps` | `Readonly`<`IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `prevState` | `Readonly`<{}\> |

#### Returns

`any`

#### Inherited from

[ComponentEx](ComponentEx.md).[getSnapshotBeforeUpdate](ComponentEx.md#getsnapshotbeforeupdate)

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:673

___

### handleChangePath

▸ `Private` **handleChangePath**(): `void`

#### Returns

`void`

#### Defined in

../src/controls/FormFields.tsx:150

___

### handleTypePath

▸ `Private` **handleTypePath**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `any` |

#### Returns

`void`

#### Defined in

../src/controls/FormFields.tsx:145

___

### initState

▸ `Protected` **initState**(`value`, `delayed?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `Object` | `undefined` |
| `delayed` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[ComponentEx](ComponentEx.md).[initState](ComponentEx.md#initstate)

#### Defined in

../src/util/ComponentEx.ts:137

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

[ComponentEx](ComponentEx.md).[render](ComponentEx.md#render)

#### Defined in

../src/controls/FormFields.tsx:97

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | {} \| (`prevState`: `Readonly`<{}\>, `props`: `Readonly`<`IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\>\>) => {} \| `Pick`<{}, `K`\> \| `Pick`<{}, `K`\> |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

[ComponentEx](ComponentEx.md).[setState](ComponentEx.md#setstate)

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
| `nextProps` | `Readonly`<`IFormPathProps` & `Partial`<`WithTranslation`<``"translation"``\>\>\> |
| `nextState` | `Readonly`<{}\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

[ComponentEx](ComponentEx.md).[shouldComponentUpdate](ComponentEx.md#shouldcomponentupdate)

#### Defined in

E:/WorkC/vortex/node_modules/@types/react/index.d.ts:627

___

### validationState

▸ `Private` **validationState**(): `string`

#### Returns

`string`

#### Defined in

../src/controls/FormFields.tsx:137
