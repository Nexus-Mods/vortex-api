import { ITableFilter } from '../../../types/ITableAttribute';
import * as React from 'react';
export interface ISelectOption {
    value: any;
    label: string;
}
type Options = ISelectOption[];
declare class OptionsFilter implements ITableFilter {
    static EMPTY: string;
    component: React.ComponentClass<any>;
    raw: boolean;
    private mMulti;
    constructor(options: Options | (() => Options), multi: boolean, raw?: boolean);
    matches(filter: any, value: any): boolean;
    isEmpty(filter: any): boolean;
}
export default OptionsFilter;
