import * as React from 'react';
export interface IEmptyPlaceholderProps {
    icon: string;
    text: string;
    subtext?: string | JSX.Element;
    fill?: boolean;
}
declare class EmptyPlaceholder extends React.PureComponent<IEmptyPlaceholderProps, {}> {
    constructor(props: any);
    render(): JSX.Element;
}
export default EmptyPlaceholder;
