import * as React from "react";
import { IExtensibleProps } from "../../types/IExtensionProvider";
export interface IDynDivProps {
    group: string;
    orientation?: "horizontal" | "vertical";
}
export type ExportType = IDynDivProps & IExtensibleProps & React.HTMLAttributes<any> & any;
declare const _default: React.ComponentClass<ExportType>;
export default _default;
