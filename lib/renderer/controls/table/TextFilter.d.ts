import { IFilterProps, ITableFilter } from '../../../types/ITableAttribute';
import * as React from 'react';
export declare class TextFilterComponent extends React.Component<IFilterProps, {}> {
    render(): JSX.Element;
    private changeFilter;
}
declare class TextFilter implements ITableFilter {
    component: typeof TextFilterComponent;
    raw: boolean;
    private mCaseInsensitive;
    constructor(ignoreCase: boolean);
    matches(filter: any, value: any): boolean;
}
export default TextFilter;
