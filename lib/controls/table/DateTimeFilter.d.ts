/// <reference types="react" />
import { IFilterProps, ITableFilter } from '../../types/ITableAttribute';
import * as React from 'react';
export declare class DateTimeFilterComponent extends React.Component<IFilterProps, {}> {
    private currentComparison;
    private currentValue;
    private comparisons;
    constructor(props: IFilterProps);
    render(): JSX.Element;
    private changeFilter;
    private toggleDirection;
}
declare class DateTimeFilter implements ITableFilter {
    component: typeof DateTimeFilterComponent;
    raw: boolean;
    matches(filter: any, input: any): boolean;
}
export default DateTimeFilter;
