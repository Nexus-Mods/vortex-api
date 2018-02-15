/// <reference types="react" />
import * as React from 'react';
export interface IBar {
    value: number;
    min: number;
    max: number;
    class: string;
}
export interface IBaseProps {
    data: IBar[];
    gap?: number;
    totalRadius: number;
    offset?: number;
    maxWidth?: number;
    style?: React.CSSProperties;
}
declare const _default: React.ComponentClass<IBaseProps>;
export default _default;
