/// <reference types="react" />
import * as React from 'react';
export interface IDashletProps {
    className: string;
    title: string;
}
declare class Dashlet extends React.Component<IDashletProps, {}> {
    render(): JSX.Element;
}
export default Dashlet;
