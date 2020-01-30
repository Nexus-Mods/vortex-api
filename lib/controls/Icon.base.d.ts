import * as Promise from 'bluebird';
import * as React from 'react';
/**
 * icon props
 */
export interface IIconProps {
    className?: string;
    style?: React.CSSProperties;
    /** icon set (aka namespace) to load from */
    set?: string;
    /** icon id */
    name: string;
    /** use css animation to spin */
    spin?: boolean;
    /** use css animation to pulse (spin in 8 distinct steps) */
    pulse?: boolean;
    /** set a stroke color */
    stroke?: boolean;
    /** disable fill color */
    hollow?: boolean;
    /** draw a (css) border around the control */
    border?: boolean;
    /** flip icon horizonally or vertically */
    flip?: 'horizontal' | 'vertical';
    /** rotate by specified number of degrees */
    rotate?: number;
    /**
     * rotation is somewhat expensive computationally. Specifying an id here for a rotated variant of
     * the icon lets vortex cache some data to eliminate that computation
     */
    rotateId?: string;
    /**
     * style to be passed into the svg component
     */
    svgStyle?: string;
    /**
     * get access to the specified set. This allows implementations to lazy-load icon sets
     * on demand
     */
    getSet: (set: string) => Promise<Set<string>>;
    onContextMenu?: React.MouseEventHandler<any>;
}
/**
 * renders a svg icon (as an instance/ref of a globally defined svg)
 */
declare class Icon extends React.Component<IIconProps, {}> {
    private static sCache;
    private mCurrentSize;
    componentWillMount(): void;
    componentWillReceiveProps(newProps: IIconProps): void;
    render(): JSX.Element;
    private setRef;
    private setIcon;
}
export default Icon;
