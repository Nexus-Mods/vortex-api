import type { IActionDefinition } from "../types/IActionDefinition";
import type { IExtensibleProps } from "../types/IExtensionProvider";
import type { TFunction } from "../util/i18n";
import type { IActionControlProps } from "./ActionControl";
import * as React from "react";
export type ButtonType = "text" | "icon" | "both" | "menu";
export interface IBaseProps {
    className?: string;
    group?: string;
    instanceId?: string | string[];
    tooltipPlacement?: "top" | "right" | "bottom" | "left";
    buttonType?: ButtonType;
    orientation?: "horizontal" | "vertical";
    collapse?: boolean | "force";
    groupByIcon?: boolean;
    filter?: (action: IActionDefinition) => boolean;
    icon?: string;
    pullRight?: boolean;
    clickAnywhere?: boolean;
    showAll?: boolean;
    t: TFunction;
}
type ExportType = IBaseProps & IActionControlProps & IExtensibleProps & React.HTMLAttributes<any>;
declare const _default: React.ComponentClass<ExportType>;
export default _default;
