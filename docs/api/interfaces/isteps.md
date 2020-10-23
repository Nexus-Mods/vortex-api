**[vortex_devel](../README.md)**

> [Globals](../globals.md) / ISteps

# Interface: ISteps\<S>

## Type parameters

Name | Default |
------ | ------ |
`S` | ComponentState |

## Hierarchy

* ComponentClass\<[IProps](../globals.md#iprops)>

  ↳ **ISteps**

## Index

### Constructors

* [constructor](isteps.md#constructor)

### Properties

* [Step](isteps.md#step)
* [childContextTypes](isteps.md#childcontexttypes)
* [contextType](isteps.md#contexttype)
* [contextTypes](isteps.md#contexttypes)
* [defaultProps](isteps.md#defaultprops)
* [displayName](isteps.md#displayname)
* [getDerivedStateFromError](isteps.md#getderivedstatefromerror)
* [getDerivedStateFromProps](isteps.md#getderivedstatefromprops)
* [propTypes](isteps.md#proptypes)

## Constructors

### constructor

\+ **new ISteps**(`props`: [IProps](../globals.md#iprops), `context?`: any): Component\<[IProps](../globals.md#iprops), S>

*Inherited from [ISteps](isteps.md).[constructor](isteps.md#constructor)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:575*

#### Parameters:

Name | Type |
------ | ------ |
`props` | [IProps](../globals.md#iprops) |
`context?` | any |

**Returns:** Component\<[IProps](../globals.md#iprops), S>

## Properties

### Step

•  **Step**: *typeof* [Step](../classes/step.md)

*Defined in Work/vortex/src/controls/Steps.tsx:48*

___

### childContextTypes

• `Optional` **childContextTypes**: ValidationMap\<any>

*Inherited from [ISteps](isteps.md).[childContextTypes](isteps.md#childcontexttypes)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:580*

___

### contextType

• `Optional` **contextType**: Context\<any>

*Inherited from [ISteps](isteps.md).[contextType](isteps.md#contexttype)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:578*

___

### contextTypes

• `Optional` **contextTypes**: ValidationMap\<any>

*Inherited from [ISteps](isteps.md).[contextTypes](isteps.md#contexttypes)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:579*

___

### defaultProps

• `Optional` **defaultProps**: Partial\<[IProps](../globals.md#iprops)>

*Inherited from [ISteps](isteps.md).[defaultProps](isteps.md#defaultprops)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:581*

___

### displayName

• `Optional` **displayName**: string

*Inherited from [ISteps](isteps.md).[displayName](isteps.md#displayname)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:582*

___

### getDerivedStateFromError

• `Optional` **getDerivedStateFromError**: GetDerivedStateFromError\<[IProps](../globals.md#iprops), S>

*Inherited from [ISteps](isteps.md).[getDerivedStateFromError](isteps.md#getderivedstatefromerror)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:637*

___

### getDerivedStateFromProps

• `Optional` **getDerivedStateFromProps**: GetDerivedStateFromProps\<[IProps](../globals.md#iprops), S>

*Inherited from [ISteps](isteps.md).[getDerivedStateFromProps](isteps.md#getderivedstatefromprops)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:636*

___

### propTypes

• `Optional` **propTypes**: WeakValidationMap\<[IProps](../globals.md#iprops)>

*Inherited from [ISteps](isteps.md).[propTypes](isteps.md#proptypes)*

*Defined in Work/vortex/node_modules/@types/react/index.d.ts:577*
