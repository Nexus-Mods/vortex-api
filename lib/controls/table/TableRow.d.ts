import { ITableAttribute } from '../../types/ITableAttribute';
import { TFunction } from '../../util/i18n';
import { ITableRowAction } from '../Table';
import * as React from 'react';
export interface IRowProps {
    t: TFunction;
    id: string;
    tableId: string;
    data: any;
    rawData: any;
    attributes: ITableAttribute[];
    inlines: ITableAttribute[];
    sortAttribute: string;
    actions: ITableRowAction[];
    hasActions: boolean;
    language: string;
    onClick: React.MouseEventHandler<any>;
    selected: boolean;
    highlighted: boolean;
    domRef?: (ref: any) => void;
    container: HTMLElement;
    visible: boolean;
    grouped: boolean;
    onSetVisible: (rowId: string, visible: boolean) => void;
    onHighlight: (rowId: string, highlight: boolean) => void;
}
declare const _default: React.ComponentClass<IRowProps, any>;
export default _default;
