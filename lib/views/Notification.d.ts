/// <reference types="react" />
import { INotification } from '../types/INotification';
import { ComponentEx } from '../util/ComponentEx';
import { TFunction } from '../util/i18n';
export interface IProps {
    t: TFunction;
    collapsed: number;
    params: INotification & {
        process?: string;
    };
    onExpand: (groupId: string) => void;
    onTriggerAction: (notificationId: string, actionTitle: string) => void;
    onDismiss: (id: string) => void;
    onSuppress: (id: string) => void;
}
declare class Notification extends ComponentEx<IProps, {
    open: boolean;
}> {
    private menuRef;
    constructor(props: IProps);
    render(): JSX.Element;
    private renderExtraOptions;
    private open;
    private close;
    private suppressNotification;
    private renderAction;
    private trigger;
    private expand;
    private typeToStyle;
    private typeToIcon;
    private dismiss;
}
export default Notification;
