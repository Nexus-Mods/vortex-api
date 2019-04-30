import * as React from 'react';
export interface IDraggableListProps {
    id: string;
    itemTypeId: string;
    items: any[];
    itemRenderer: React.ComponentClass<{
        item: any;
    }>;
    apply: (ordered: any[]) => void;
    style?: React.CSSProperties;
    className?: string;
}
declare function DraggableListWrapper(props: IDraggableListProps): JSX.Element;
export default DraggableListWrapper;
