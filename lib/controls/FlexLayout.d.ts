/// <reference types="react" />
import * as React from 'react';
export interface IFlexProps {
    fill?: boolean;
}
export interface IFlexLayoutProps {
    type: 'column' | 'row';
    fill?: boolean;
}
export declare type IProps = IFlexLayoutProps & React.HTMLAttributes<HTMLDivElement>;
declare class FlexLayout extends React.PureComponent<IProps, {}> {
    static Fixed: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
    static Flex: (props: IFlexProps & React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
    render(): JSX.Element;
}
export default FlexLayout;
