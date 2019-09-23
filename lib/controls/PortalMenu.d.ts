import * as React from 'react';
interface IPortalMenuProps {
    open: boolean;
    target: JSX.Element;
    onClick: (evt: any) => void;
    onClose: () => void;
    bsRole?: string;
}
declare class PortalMenu extends React.Component<IPortalMenuProps, {}> {
    static contextTypes: React.ValidationMap<any>;
    context: {
        menuLayer: JSX.Element;
    };
    render(): JSX.Element;
}
export default PortalMenu;
