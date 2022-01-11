import { IActionDefinition } from '../types/IActionDefinition';
import { IExtensibleProps } from '../types/IExtensionProvider';
import { ITableState } from '../types/IState';
import * as React from 'react';
import { OutputSelector } from 'reselect';
export declare type ChangeDataHandler = (rowId: string, attributeId: string, newValue: any) => void;
export interface ITableRowAction extends IActionDefinition {
    singleRowAction?: boolean;
    multiRowAction?: boolean;
    hotKey?: {
        code: number;
        shift?: boolean;
        alt?: boolean;
        ctrl?: boolean;
    };
    subMenus?: ITableRowAction[];
}
export interface IBaseProps {
    tableId: string;
    data: {
        [rowId: string]: any;
    };
    dataId?: number;
    actions: ITableRowAction[];
    columnBlacklist?: string[];
    detailsTitle?: string;
    multiSelect?: boolean;
    defaultSort?: string;
    showHeader?: boolean;
    showDetails?: boolean;
    hasActions?: boolean;
    onChangeSelection?: (ids: string[]) => void;
}
export interface ILookupCalculated {
    [rowId: string]: {
        [attributeId: string]: any;
    };
}
declare type GetSelection = OutputSelector<any, string[], (res: ITableState) => string[]>;
export declare function makeGetSelection(tableId: string): GetSelection;
declare const _default: React.ComponentType<IBaseProps & IExtensibleProps>;
export default _default;
