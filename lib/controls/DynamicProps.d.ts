/// <reference types="react" />
import * as React from 'react';
export interface IBaseProps {
    dynamicProps: () => any;
    staticProps: any;
    component: React.ComponentClass<any> | React.StatelessComponent<any>;
}
/**
 * a hack to ensure a component gets rerendered when dynamic props
 * change even though we have no even to react to when that happens.
 * TODO: This is ugly polling, can we find a better way without
 *   uglifying the api for the user?
 *
 * @class DynamicProps
 * @extends {React.Component<any, {}>}
 */
declare class DynamicProps extends React.Component<IBaseProps, {}> {
    private mLastProps;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    refreshProps(): void;
    render(): JSX.Element;
}
export default DynamicProps;
