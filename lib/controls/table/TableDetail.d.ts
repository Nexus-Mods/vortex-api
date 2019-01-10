/// <reference types="react" />
import { ITableAttribute } from '../../types/ITableAttribute';
import { ComponentEx } from '../../util/ComponentEx';
import * as I18next from 'i18next';
export interface IDetailProps {
    language: string;
    rowIds: string[];
    rowData: {
        [rowId: string]: any;
    };
    rawData: {
        [rowId: string]: any;
    };
    attributes: ITableAttribute[];
    t: I18next.TranslationFunction;
    show: boolean;
    title: string;
    onToggleShow: () => void;
}
declare class DetailBox extends ComponentEx<IDetailProps, {
    hovered: boolean;
}> {
    private mFormRef;
    constructor(props: IDetailProps);
    shouldComponentUpdate(nextProps: IDetailProps, nextState: {
        hovered: boolean;
    }): boolean;
    render(): JSX.Element;
    private renderDetail;
    private setFormRef;
    private startHover;
    private stopHover;
    private onChangeData;
}
export default DetailBox;
