import * as Promise from 'bluebird';
import * as React from 'react';
export interface IIconProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    set?: string;
    name: string;
    spin?: boolean;
    pulse?: boolean;
    stroke?: boolean;
    hollow?: boolean;
    border?: boolean;
    flip?: 'horizontal' | 'vertical';
    rotate?: number;
    rotateId?: string;
    svgStyle?: string;
}
export declare function installIconSet(set: string, setPath: string): Promise<void>;
declare class Icon extends React.Component<IIconProps, {}> {
    private static sCache;
    private mCurrentSize;
    componentWillMount(): void;
    componentWillReceiveProps(newProps: IIconProps): void;
    render(): JSX.Element;
    private setRef;
    private setIcon;
    private loadSet;
}
export default Icon;
