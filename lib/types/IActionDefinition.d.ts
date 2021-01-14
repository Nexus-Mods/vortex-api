import * as React from 'react';
export interface IActionOptions {
    noCollapse?: boolean;
    namespace?: string;
    hollowIcon?: boolean;
}
/**
 * interface of an action within one of the icon bars
 *
 * @export
 * @interface IActionDefinition
 */
export interface IActionDefinition {
    icon?: string;
    title?: string;
    component?: React.ComponentType<any>;
    props?: () => any;
    action?: (instanceId: string | string[]) => void;
    condition?: (instanceId: string | string[]) => boolean | string;
    position?: number;
    options?: IActionOptions;
    default?: boolean;
}
