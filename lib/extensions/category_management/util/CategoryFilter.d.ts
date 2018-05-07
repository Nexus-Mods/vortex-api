/// <reference types="react" />
import { IState } from '../../../types/IState';
import { IFilterProps, ITableFilter } from '../../../types/ITableAttribute';
import * as React from 'react';
declare class CategoryFilter implements ITableFilter {
    component: React.ComponentClass<IFilterProps>;
    raw: string;
    matches(filter: any, value: any, state: IState): boolean;
    isEmpty(filter: any): boolean;
    private categoryChain(category, state);
}
export default CategoryFilter;
