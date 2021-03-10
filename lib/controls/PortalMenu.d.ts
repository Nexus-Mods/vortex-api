import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';
interface IPortalMenuProps {
    open: boolean;
    target: Element;
    onClick: (evt: any) => void;
    onClose: () => void;
    onSelect?: SelectCallback;
    useMousePosition?: boolean | {
        x: number;
        y: number;
    };
    bsRole?: string;
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
