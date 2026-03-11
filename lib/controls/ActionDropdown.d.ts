import type { IExtensibleProps } from "../types/IExtensionProvider";
import type { TFunction } from "../util/i18n";
import type { IActionControlProps } from "./ActionControl";
import * as React from "react";
export type ButtonType = "text" | "icon" | "both" | "menu";
export interface IBaseProps {
    t: TFunction;
    className?: string;
    group?: string;
    instanceId?: string | string[];
    buttonType?: ButtonType;
    orientation?: "horizontal" | "vertical";
}
type ExportType = IBaseProps & IActionControlProps & IExtensibleProps & React.HTMLAttributes<any>;
declare const _default: React.ComponentClass<ExportType>;
export default _default;
