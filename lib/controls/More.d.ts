import * as React from 'react';
export interface IMoreProps {
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
declare const _default: React.ComponentClass<IMoreProps, any>;
export default _default;
