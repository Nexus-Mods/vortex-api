import * as React from 'react';
import { TFunction } from '../util/i18n';
export interface IItemProps {
    name: string;
}
export interface IToolIconProps {
    t?: TFunction;
    children?: any;
    classes?: string[];
    valid: boolean;
    isPrimary?: boolean;
    item: IItemProps;
    imageUrl: string;
    imageId?: number;
    onRun?: () => void;
}
declare const ToolIcon: (props: IToolIconProps) => React.JSX.Element;
export default ToolIcon;
