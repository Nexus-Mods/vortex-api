import * as React from 'react';
export interface IFlexProps {
    fill?: boolean;
}
export interface IFlexLayoutProps {
    type: 'column' | 'row';
    fill?: boolean;
}
export type IProps = IFlexLayoutProps & React.HTMLAttributes<HTMLDivElement>;
declare class FlexLayout extends React.PureComponent<IProps, {}> {
    static Fixed: (props: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
    static Flex: (props: IFlexProps & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
    render(): JSX.Element;
}
export default FlexLayout;
