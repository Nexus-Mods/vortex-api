/// <reference types="react" />
import { IFilterProps, ITableFilter } from '../../types/ITableAttribute';
import { ComponentEx } from '../../util/ComponentEx';
export declare class DateTimeFilterComponent extends ComponentEx<IFilterProps, {}> {
    private currentComparison;
    private currentValue;
    private comparisons;
    constructor(props: IFilterProps);
    render(): JSX.Element;
    private hasValidComparison;
    private changeFilter;
    private toggleDirection;
}
declare class DateTimeFilter implements ITableFilter {
    component: typeof DateTimeFilterComponent;
    raw: boolean;
    matches(filter: any, input: any): boolean;
    isEmpty(filter: any): boolean;
}
export default DateTimeFilter;
