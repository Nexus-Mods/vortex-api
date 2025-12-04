import * as Promise from 'bluebird';
import { IActionDefinitionEx } from '../../../renderer/controls/ActionControl';
import { IMod } from '../../../types/IState';
export type SortType = 'ascending' | 'descending';
export type ListViewType = 'compact' | 'full';
export type UpdateType = 'drag-n-drop' | 'props-update' | 'refresh';
export interface IInfoPanelProps {
    refresh: () => void;
}
export interface ILoadOrderEntry<T = any> {
    pos: number;
    enabled: boolean;
    prefix?: string;
    data?: T;
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
/**
 * describes an item in the load order control.
 * This isn't just used for "display", the id is what gets stored to internally
 * save the load order
 */
export interface ILoadOrderDisplayItem {
    id: string;
    name: string;
    imgUrl: string;
    prefix?: string;
    data?: string;
    locked?: boolean;
    external?: boolean;
    official?: boolean;
    message?: string;
    contextMenuActions?: IActionDefinitionEx[];
    condition?: (lhs: ILoadOrderDisplayItem, rhs: ILoadOrderDisplayItem, predictedResult: ILoadOrderDisplayItem[]) => IDnDConditionResult;
}
export interface IGameLoadOrderEntry {
    gameId: string;
    gameArtURL: string;
    displayCheckboxes?: boolean;
    noCollectionGeneration?: boolean;
    createInfoPanel: (props: IInfoPanelProps) => string | React.ComponentType;
    preSort?: (items: ILoadOrderDisplayItem[], sortDir: SortType, updateType?: UpdateType) => Promise<ILoadOrderDisplayItem[]>;
    filter?: (mods: IMod[]) => IMod[];
    callback?: (loadOrder: ILoadOrder, updateType?: UpdateType) => void;
    itemRenderer?: React.ComponentType<{
        className?: string;
        item: ILoadOrderDisplayItem;
        onRef: (ref: any) => any;
    }>;
}
