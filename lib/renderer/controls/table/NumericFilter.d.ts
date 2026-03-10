import { IFilterProps, ITableFilter } from "../../../types/ITableAttribute";
import * as React from "react";
export declare class NumericFilterComponent extends React.Component<IFilterProps, {}> {
    private currentComparison;
    private currentValue;
    private comparisons;
    constructor(props: IFilterProps);
    render(): JSX.Element;
    private changeFilter;
    private toggleDirection;
}
declare class NumericFilter implements ITableFilter {
    component: typeof NumericFilterComponent;
    raw: boolean;
    matches(filter: any, input: number): boolean;
}
export default NumericFilter;
