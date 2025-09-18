import React from 'react';
import { ILoadOrderEntry } from '../../../types/api';
import { IExtensionApi, LoadOrder } from '../../../types/api';
interface IProps {
    className?: string;
    api: IExtensionApi;
    item: ILoadOrderEntry;
    loadOrder: LoadOrder;
    currentPosition: number;
    lockedEntriesCount: number;
    isLocked: (item: ILoadOrderEntry) => boolean;
    onApplyIndex: (idx: number) => void;
}
export declare function LoadOrderIndexInput(props: IProps): React.JSX.Element;
export {};
