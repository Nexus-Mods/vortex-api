import { type CSSProperties, type FC, type MouseEventHandler } from "react";
declare global {
    interface Window {
        __iconSetPromises?: Map<string, Promise<Set<string>>>;
    }
}
export interface IIconProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    set?: string;
    name: string;
    spin?: boolean;
    pulse?: boolean;
    stroke?: boolean;
    hollow?: boolean;
    border?: boolean;
    flip?: "horizontal" | "vertical";
    rotate?: number;
    svgStyle?: string;
    onContextMenu?: MouseEventHandler<SVGSVGElement>;
}
/**
 * Install a custom icon set from a given path (for extensions).
 */
export declare const installIconSet: (set: string, setPath: string) => Promise<Set<string>>;
export declare const Icon: FC<IIconProps>;
export default Icon;
