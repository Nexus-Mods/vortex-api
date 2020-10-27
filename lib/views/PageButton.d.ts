import { IMainPage } from '../types/IMainPage';
import { TFunction } from '../util/i18n';
import * as React from 'react';
interface IPageButtonProps {
    t: TFunction;
    page: IMainPage;
    namespace: string;
}
declare class PageButton extends React.Component<IPageButtonProps, {}> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private renderBadge;
    private renderActivity;
}
export default PageButton;
