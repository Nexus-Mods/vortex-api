/// <reference types="i18next" />
/// <reference types="react" />
import { ITableAttribute } from '../../types/ITableAttribute';
import { ITableRowAction } from '../Table';
import * as I18next from 'i18next';
import * as React from 'react';
export interface IRowProps {
    t: I18next.TranslationFunction;
    id: string;
    tableId: string;
    data: any;
    rawData: any;
    attributes: ITableAttribute[];
    sortAttribute: string;
    actions: ITableRowAction[];
    language: string;
    onClick: React.MouseEventHandler<any>;
    selected: boolean;
    highlighted: boolean;
    domRef?: (ref) => void;
    container: HTMLElement;
    initVisible: boolean;
    onHighlight: (rowId: string, highlight: boolean) => void;
}
declare class TableRow extends React.Component<IRowProps, {}> {
    shouldComponentUpdate(nextProps: IRowProps): boolean;
    render(): JSX.Element;
    private renderPlaceholder;
    private renderRow;
    private selectDefaultAction;
    private selectAction;
    private renderDefault;
    private renderAttribute;
    private highlight;
    private renderCell(attribute, rawData, calculatedData, t, right);
}
export default TableRow;
