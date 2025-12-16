import * as React from "react";
export interface IActionOptions {
    noCollapse?: boolean;
    namespace?: string;
    hollowIcon?: boolean;
}
export type ActionFunc = (instanceId: string | string[]) => IActionDefinition[];
/**
 * interface of an action within one of the icon bars
 *
 * @export
 * @interface IActionDefinition
 */
export interface IActionDefinition {
    icon?: string;
    title?: string;
    data?: any;
    component?: React.ComponentType<any>;
    props?: () => any;
    action?: (instanceId: string | string[], data?: any) => void;
    subMenus?: IActionDefinition[] | ActionFunc;
    condition?: (instanceId: string | string[], data?: any) => boolean | string;
    position?: number;
    group?: string;
    options?: IActionOptions;
    default?: boolean;
}
