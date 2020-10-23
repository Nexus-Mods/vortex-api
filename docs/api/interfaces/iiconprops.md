**[vortex_devel](../README.md)**

> [Globals](../globals.md) / IIconProps

# Interface: IIconProps

icon props

## Hierarchy

* **IIconProps**

## Index

### Properties

* [border](iiconprops.md#border)
* [className](iiconprops.md#classname)
* [flip](iiconprops.md#flip)
* [getSet](iiconprops.md#getset)
* [hollow](iiconprops.md#hollow)
* [id](iiconprops.md#id)
* [name](iiconprops.md#name)
* [onContextMenu](iiconprops.md#oncontextmenu)
* [pulse](iiconprops.md#pulse)
* [rotate](iiconprops.md#rotate)
* [rotateId](iiconprops.md#rotateid)
* [set](iiconprops.md#set)
* [spin](iiconprops.md#spin)
* [stroke](iiconprops.md#stroke)
* [style](iiconprops.md#style)
* [svgStyle](iiconprops.md#svgstyle)

## Properties

### border

• `Optional` **border**: boolean

*Defined in Work/vortex/src/controls/Icon.base.tsx:26*

*Defined in Work/vortex/src/controls/Icon.tsx:23*

draw a (css) border around the control

___

### className

• `Optional` **className**: string

*Defined in Work/vortex/src/controls/Icon.base.tsx:11*

*Defined in Work/vortex/src/controls/Icon.tsx:15*

___

### flip

• `Optional` **flip**: \"horizontal\" \| \"vertical\"

*Defined in Work/vortex/src/controls/Icon.base.tsx:28*

*Defined in Work/vortex/src/controls/Icon.tsx:24*

flip icon horizonally or vertically

___

### getSet

•  **getSet**: (set: string) => Promise\<Set\<string>>

*Defined in Work/vortex/src/controls/Icon.base.tsx:45*

get access to the specified set. This allows implementations to lazy-load icon sets
on demand

___

### hollow

• `Optional` **hollow**: boolean

*Defined in Work/vortex/src/controls/Icon.base.tsx:24*

*Defined in Work/vortex/src/controls/Icon.tsx:22*

disable fill color

___

### id

• `Optional` **id**: string

*Defined in Work/vortex/src/controls/Icon.tsx:14*

___

### name

•  **name**: string

*Defined in Work/vortex/src/controls/Icon.base.tsx:16*

*Defined in Work/vortex/src/controls/Icon.tsx:18*

icon id

___

### onContextMenu

• `Optional` **onContextMenu**: React.MouseEventHandler\<[Icon](../classes/icon.md)>

*Defined in Work/vortex/src/controls/Icon.base.tsx:47*

*Defined in Work/vortex/src/controls/Icon.tsx:29*

___

### pulse

• `Optional` **pulse**: boolean

*Defined in Work/vortex/src/controls/Icon.base.tsx:20*

*Defined in Work/vortex/src/controls/Icon.tsx:20*

use css animation to pulse (spin in 8 distinct steps)

___

### rotate

• `Optional` **rotate**: number

*Defined in Work/vortex/src/controls/Icon.base.tsx:30*

*Defined in Work/vortex/src/controls/Icon.tsx:25*

rotate by specified number of degrees

___

### rotateId

• `Optional` **rotateId**: string

*Defined in Work/vortex/src/controls/Icon.base.tsx:35*

*Defined in Work/vortex/src/controls/Icon.tsx:26*

rotation is somewhat expensive computationally. Specifying an id here for a rotated variant of
the icon lets vortex cache some data to eliminate that computation

___

### set

• `Optional` **set**: string

*Defined in Work/vortex/src/controls/Icon.base.tsx:14*

*Defined in Work/vortex/src/controls/Icon.tsx:17*

icon set (aka namespace) to load from

___

### spin

• `Optional` **spin**: boolean

*Defined in Work/vortex/src/controls/Icon.base.tsx:18*

*Defined in Work/vortex/src/controls/Icon.tsx:19*

use css animation to spin

___

### stroke

• `Optional` **stroke**: boolean

*Defined in Work/vortex/src/controls/Icon.base.tsx:22*

*Defined in Work/vortex/src/controls/Icon.tsx:21*

set a stroke color

___

### style

• `Optional` **style**: CSSProperties

*Defined in Work/vortex/src/controls/Icon.base.tsx:12*

*Defined in Work/vortex/src/controls/Icon.tsx:16*

___

### svgStyle

• `Optional` **svgStyle**: string

*Defined in Work/vortex/src/controls/Icon.base.tsx:39*

*Defined in Work/vortex/src/controls/Icon.tsx:28*

style to be passed into the svg component
