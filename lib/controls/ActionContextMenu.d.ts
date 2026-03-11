import type { IExtensibleProps } from "../types/IExtensionProvider";
import type { IActionControlProps } from "./ActionControl";
import type { IContextMenuProps } from "./ContextMenu";
import * as React from "react";
export type ExportType = IContextMenuProps & IActionControlProps & IExtensibleProps & React.HTMLAttributes<any>;
declare class ActionContextMenu extends React.Component<ExportType> {
    private static ACTION_PROPS;
    render(): JSX.Element;
}
export default ActionContextMenu;
