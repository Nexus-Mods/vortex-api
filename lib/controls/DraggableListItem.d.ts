import React from 'react';
export interface IDraggableListItemProps {
    disabled?: boolean;
    index: number;
    item: any;
    isLocked: boolean;
    itemRenderer: React.ComponentType<{
        className?: string;
        item: any;
        forwardedRef?: any;
    }>;
    containerId: string;
    isSelected: boolean;
    selectedItems: any[];
    draggedItems: any[];
    apply: () => void;
    findItemIndex: (item: any) => number;
    take: (item: any, list: any[]) => any;
    onChangeIndex: (oldIndex: number, newIndex: number, changeContainer: boolean, take: (list: any[]) => any) => void;
    onClick: (event: React.MouseEvent) => void;
    onDragStart: (items: any[]) => void;
}
declare const DraggableItem: React.FC<IDraggableListItemProps>;
export default DraggableItem;
