import { IActionDefinition } from '../types/IActionDefinition';
import { ITableState } from '../types/IState';
import { IExtensibleProps } from '../util/ExtensionProvider';
import * as React from 'react';
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
}
export interface IBaseProps {
    tableId: string;
    data: {
        [rowId: string]: any;
    };
    dataId?: number;
    actions: ITableRowAction[];
    detailsTitle?: string;
    multiSelect?: boolean;
    defaultSort?: string;
    showHeader?: boolean;
    showDetails?: boolean;
}
export interface ILookupCalculated {
    [rowId: string]: {
        [attributeId: string]: any;
    };
}
export declare function makeGetSelection(tableId: string): import("../../../../Projects/Vortex/node_modules/reselect").OutputSelector<any, string[], (res: ITableState) => string[]>;
declare const _default: React.ComponentClass<IBaseProps & IExtensibleProps, React.ComponentState>;
export default _default;
