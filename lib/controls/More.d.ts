import * as React from 'react';
export interface IProps {
    id: string;
    name: string;
    wikiId?: string;
    children?: string;
    container?: Element;
    orientation?: 'vertical' | 'horizontal';
}
export interface IComponentState {
    open: boolean;
}
declare const _default: React.ComponentClass<Pick<IProps, "name" | "children" | "container" | "id" | "orientation" | "wikiId"> & import("react-i18next/src/translate").TranslateHocProps, React.ComponentState>;
export default _default;
