import * as React from 'react';
export interface IBar {
    value: number;
    min: number;
    max: number;
    class: string;
}
export interface IBaseProps {
    data: IBar[];
    className?: string;
    innerGap?: number;
    gap?: number;
    totalRadius: number;
    offset?: number;
    maxWidth?: number;
    style?: React.CSSProperties;
    restOverlap?: boolean;
    spin?: boolean;
}
declare const _default: React.ComponentClass<IBaseProps, any>;
export default _default;
