import { IState } from '../../../types/IState';
import { IFilterProps, ITableFilter } from '../../../types/ITableAttribute';
import * as React from 'react';
declare class CategoryFilter implements ITableFilter {
    component: React.ComponentClass<IFilterProps, React.ComponentState>;
    raw: string;
    matches(filter: any, value: any, state: IState): boolean;
    isEmpty(filter: any): boolean;
    private categoryChain;
}
export default CategoryFilter;
