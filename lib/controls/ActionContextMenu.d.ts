/// <reference types="react" />
import { IExtensibleProps } from '../util/ExtensionProvider';
import { IActionControlProps } from './ActionControl';
import { IContextMenuProps } from './ContextMenu';
import * as React from 'react';
export declare type ExportType = IContextMenuProps & IActionControlProps & IExtensibleProps & React.HTMLAttributes<any>;
declare class ActionContextMenu extends React.Component<ExportType> {
    private static ACTION_PROPS;
    render(): JSX.Element;
}
export default ActionContextMenu;
