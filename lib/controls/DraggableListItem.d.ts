import * as React from 'react';
export interface IDraggableListItemProps {
    index: number;
    item: any;
    isLocked: boolean;
    itemRenderer: React.ComponentType<{
        className?: string;
        item: any;
        ref?: React.LegacyRef<any>;
    }>;
    containerId: string;
    take: (item: any, list: any[]) => any;
    onChangeIndex: (oldIndex: number, newIndex: number, changeContainer: boolean, take: (list: any[]) => any) => void;
    apply: () => void;
}
declare function makeDraggable(itemTypeId: string): React.ComponentClass<IDraggableListItemProps>;
export default makeDraggable;
