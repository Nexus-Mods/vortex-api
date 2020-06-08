/// <reference types="react" />
import * as Promise from 'bluebird';
import { types } from 'vortex-api';
import { IActionDefinitionEx } from '../../../controls/ActionControl';
export declare type SortType = 'ascending' | 'descending';
export declare type ListViewType = 'compact' | 'full';
export interface IInfoPanelProps {
    refresh: () => void;
}
export interface ILoadOrderEntry {
    pos: number;
    enabled: boolean;
    locked?: boolean;
    external?: boolean;
}
export interface ILoadOrder {
    [modId: string]: ILoadOrderEntry;
}
export interface IItemRendererOptions {
    displayCheckboxes: boolean;
    listViewType: ListViewType;
}
export interface IDnDConditionResult {
    success: boolean;
    errMessage?: string;
}
export interface ILoadOrderDisplayItem {
    id: string;
    name: string;
    imgUrl: string;
    prefix?: string;
    locked?: boolean;
    external?: boolean;
    official?: boolean;
    invalid?: boolean;
    message?: string;
    contextMenuActions?: IActionDefinitionEx[];
    condition?: (lhs: ILoadOrderDisplayItem, rhs: ILoadOrderDisplayItem) => IDnDConditionResult;
}
export interface IGameLoadOrderEntry {
    gameId: string;
    gameArtURL: string;
    displayCheckboxes?: boolean;
    contextActions?: IActionDefinitionEx[];
    createInfoPanel: (props: IInfoPanelProps) => string | React.Component;
    preSort?: (items: ILoadOrderDisplayItem[], sortDir: SortType) => Promise<ILoadOrderDisplayItem[]>;
    filter?: (mods: types.IMod[]) => types.IMod[];
    callback?: (loadOrder: ILoadOrder) => void;
    itemRenderer?: React.ComponentClass<{
        className?: string;
        item: ILoadOrderDisplayItem;
        onRef: (ref: any) => any;
    }>;
}
