/// <reference types="react" />
import * as React from 'react';
import { TableProps } from 'react-bootstrap';
export declare function Table(props: TableProps): JSX.Element;
export declare type DProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
export declare function THead(props: DProps<HTMLTableSectionElement> & {
    domRef?: ((instance: any | null) => any);
}): JSX.Element;
export declare function TBody(props: DProps<HTMLTableSectionElement> & {
    domRef?: ((instance: any | null) => any);
}): JSX.Element;
export declare function TH(props: DProps<HTMLTableHeaderCellElement>): JSX.Element;
export declare function TR(props: DProps<HTMLTableRowElement>): JSX.Element;
export declare function TD(props: DProps<HTMLTableCellElement>): JSX.Element;
