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
export declare function installIconSet(set: string, setPath: string): Promise<Set<string>>;
declare class Icon extends React.Component<IIconProps, {
    sets: {
        [setId: string]: Set<string>;
    };
}> {
    constructor(props: IIconProps);
    render(): JSX.Element;
    private loadSet;
}
export default Icon;
