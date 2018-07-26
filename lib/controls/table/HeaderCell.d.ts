/// <reference types="i18next" />
/// <reference types="react" />
import { IAttributeState } from '../../types/IAttributeState';
import { ITableAttribute } from '../../types/ITableAttribute';
import { SortDirection } from '../../types/SortDirection';
import * as I18next from 'i18next';
import * as React from 'react';
export interface IHeaderProps {
    className: string;
    attribute: ITableAttribute;
    state: IAttributeState;
    doFilter: boolean;
    onSetSortDirection: (id: string, dir: SortDirection) => void;
    onSetFilter: (id?: string, filter?: any) => void;
    t: I18next.TranslationFunction;
}
declare class HeaderCell extends React.Component<IHeaderProps, {}> {
    private mMinWidth;
    private mRef;
    shouldComponentUpdate(newProps: IHeaderProps): boolean;
    render(): JSX.Element;
    updateWidth(): void;
    private renderSortIndicator();
    private renderFilterIndicator();
    private setRef;
    private cycleDirection;
    private setDirection;
    private toggleFilter;
}
export default HeaderCell;
