import * as React from 'react';
export interface IToggleProps {
    dataId?: string;
    checked: boolean;
    onToggle: (newValue: boolean, dataId?: string) => void;
    disabled?: boolean;
}
export declare type IProps = React.HTMLAttributes<HTMLDivElement> & IToggleProps;
declare class Toggle extends React.PureComponent<IProps, {}> {
    render(): JSX.Element;
    private onToggle;
}
export default Toggle;
