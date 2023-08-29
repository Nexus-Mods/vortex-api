import { SortDirection } from '../types/SortDirection';
import * as reduxAct from 'redux-act';
export declare const setAttributeVisible: reduxAct.ComplexActionCreator3<string, string, boolean, {
    tableId: string;
    attributeId: string;
    visible: boolean;
}, {}>;
export declare const setAttributeSort: reduxAct.ComplexActionCreator3<string, string, SortDirection, {
    tableId: string;
    attributeId: string;
    direction: SortDirection;
}, {}>;
export declare const setAttributeFilter: reduxAct.ComplexActionCreator3<string, string, any, {
    tableId: string;
    attributeId: string;
    filter: any;
}, {}>;
export declare const setGroupingAttribute: reduxAct.ComplexActionCreator2<string, string, {
    tableId: string;
    attributeId: string;
}, {}>;
export declare const collapseGroup: reduxAct.ComplexActionCreator3<string, string, boolean, {
    tableId: string;
    groupId: string;
    collapse: boolean;
}, {}>;
export declare const setCollapsedGroups: reduxAct.ComplexActionCreator2<string, string[], {
    tableId: string;
    groups: string[];
}, {}>;
