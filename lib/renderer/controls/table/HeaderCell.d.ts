import { IAttributeState } from '../../../types/IAttributeState';
import { ITableAttribute } from '../../../types/ITableAttribute';
import { SortDirection } from '../../../types/SortDirection';
import { TFunction } from '../../../util/i18n';
import * as React from 'react';
export interface IHeaderProps {
    className: string;
    attribute: ITableAttribute;
    state: IAttributeState;
    doFilter: boolean;
    doGroup: boolean;
    onSetSortDirection: (id: string, dir: SortDirection) => void;
    onSetGroup: (id: string) => void;
    onSetFilter: (id?: string, filter?: any) => void;
    t: TFunction;
}
type IProps = React.PropsWithChildren<IHeaderProps>;
declare class HeaderCell extends React.Component<IProps, {}> {
    private mMinWidth;
    private mRef;
    shouldComponentUpdate(newProps: IProps): boolean;
    render(): JSX.Element;
    updateWidth(): void;
    private renderGroupIndicator;
    private renderSortIndicator;
    private setRef;
    private cycleDirection;
    private setGroup;
    private setDirection;
}
export default HeaderCell;
