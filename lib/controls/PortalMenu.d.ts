import * as React from "react";
import type { SelectCallback } from "react-bootstrap";
interface IPortalMenuProps {
    open: boolean;
    target: Element | React.Component | null;
    onClick: (evt: React.MouseEvent<HTMLElement>) => void;
    onClose: () => void;
    onSelect?: SelectCallback;
    useMousePosition?: boolean | {
        x: number;
        y: number;
    };
    bsRole?: string;
    placement?: "top" | "bottom" | "left" | "right";
}
declare class PortalMenu extends React.Component<IPortalMenuProps, {
    x: number;
    y: number;
}> {
    static contextTypes: React.ValidationMap<any>;
    context: {
        menuLayer: JSX.Element;
    };
    constructor(props: IPortalMenuProps);
    render(): JSX.Element;
    private onClick;
}
export default PortalMenu;
