import { IExtensibleProps } from "../../types/IExtensionProvider";
import * as React from "react";
export interface IBaseProps {
    group: string;
    cycleTime?: number;
}
export type ExportType = IBaseProps & IExtensibleProps & React.HTMLAttributes<any> & any;
declare const _default: React.ComponentClass<ExportType>;
export default _default;
