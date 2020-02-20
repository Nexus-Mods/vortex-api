import * as React from 'react';
import { IExtensibleProps } from '../types/IExtensionProvider';
export interface IDynDivProps {
    group: string;
    orientation?: 'horizontal' | 'vertical';
}
export declare type ExportType = IDynDivProps & IExtensibleProps & React.HTMLAttributes<any> & any;
declare const _default: React.ComponentClass<any, any>;
export default _default;
