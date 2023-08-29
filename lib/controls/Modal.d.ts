import * as React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
declare class MyModal extends React.PureComponent<typeof Modal.prototype.props, {}> {
    static Header: typeof ModalHeader;
    static Title: typeof ModalTitle;
    static Body: typeof ModalBody;
    static Footer: typeof ModalFooter;
    static childContextTypes: React.ValidationMap<any>;
    private getContainer;
    private mMenuLayer;
    getChildContext(): any;
    render(): JSX.Element;
    private getContainerImpl;
    private setMenuLayer;
}
export default MyModal;
