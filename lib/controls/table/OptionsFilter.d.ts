import { ITableFilter } from '../../types/ITableAttribute';
import * as React from 'react';
declare class OptionsFilter implements ITableFilter {
    static EMPTY: string;
    component: React.ComponentClass<any>;
    raw: boolean;
    private mMulti;
    constructor(options: Array<{
        value: any;
        label: string;
    }>, multi: boolean, raw?: boolean);
    matches(filter: any, value: any): boolean;
    isEmpty(filter: any): boolean;
}
export default OptionsFilter;
