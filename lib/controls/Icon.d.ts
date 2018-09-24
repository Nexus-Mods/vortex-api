/// <reference types="react" />
import * as React from 'react';
export interface IIconProps {
    className?: string;
    style?: React.CSSProperties;
    set?: string;
    name: string;
    spin?: boolean;
    pulse?: boolean;
    stroke?: boolean;
    border?: boolean;
    flip?: 'horizontal' | 'vertical';
    rotate?: number;
    rotateId?: string;
    svgStyle?: string;
}
declare class Icon extends React.Component<IIconProps, {}> {
    private static sCache;
    private mCurrentSize;
    componentWillMount(): void;
    componentWillReceiveProps(newProps: IIconProps): void;
    render(): JSX.Element;
    private setRef;
    private setIcon(props);
    private loadSet(set);
}
export default Icon;
