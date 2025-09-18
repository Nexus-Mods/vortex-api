import * as React from 'react';
export interface IDraggableListProps {
    disabled?: boolean;
    id: string;
    itemTypeId: string;
    items: any[];
    isLocked?: (item: any) => boolean;
    idFunc?: (item: any) => string;
    itemRenderer: React.ComponentType<{
        item: any;
    }>;
    apply: (ordered: any[]) => void;
    style?: React.CSSProperties;
    className?: string;
}
declare function DraggableListWrapper(props: IDraggableListProps): React.JSX.Element;
export default DraggableListWrapper;
