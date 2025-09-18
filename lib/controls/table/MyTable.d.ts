/**
 * replacement for the react table using
 * the css display classes 'table', 'table-row' and so on
 * instead of <table>, <tr>, ... for more flexibility
 */
import * as React from 'react';
import { TableProps } from 'react-bootstrap';
export declare function Table(props: TableProps): React.JSX.Element;
export type DProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
export declare function THead(props: DProps<HTMLTableSectionElement> & {
    domRef?: ((instance: any | null) => any);
}): React.JSX.Element;
export declare function TBody(props: DProps<HTMLTableSectionElement> & {
    domRef?: ((instance: any | null) => any);
}): React.JSX.Element;
type THProps = DProps<HTMLTableHeaderCellElement> & {
    domRef?: (ref: HTMLDivElement) => void;
};
export declare class TH extends React.Component<THProps, {}> {
    render(): React.JSX.Element;
}
type TRProps = DProps<HTMLTableRowElement> & {
    domRef?: (ref: HTMLDivElement) => void;
};
export declare function TR(props: TRProps): React.JSX.Element;
type TDProps = DProps<HTMLTableCellElement> & {
    domRef?: (ref: HTMLDivElement) => void;
    colSpan?: number;
};
export declare function TD(props: TDProps): React.JSX.Element;
export {};
