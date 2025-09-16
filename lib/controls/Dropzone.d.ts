import * as React from 'react';
export type DropType = 'urls' | 'files';
export interface IBaseProps {
    drop: (type: DropType, paths: string[]) => void;
    accept: DropType[];
    dropText?: string;
    clickText?: string;
    icon?: string;
    clickable?: boolean;
    dialogHint?: string;
    dialogDefault?: string;
    style?: React.CSSProperties;
    dragOverlay?: JSX.Element;
}
declare const _default: React.ComponentClass<IBaseProps>;
export default _default;
