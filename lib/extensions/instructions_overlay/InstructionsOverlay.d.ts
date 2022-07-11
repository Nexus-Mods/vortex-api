import * as React from 'react';
import { types } from 'vortex-api';
import { IOverlay } from '../../types/IState';
interface IInstructionsOverlayProps {
    t: types.TFunction;
    overlayId: string;
    overlay: IOverlay;
    onClose: (id: string) => void;
}
declare function InstructionsOverlay(props: IInstructionsOverlayProps): React.ReactPortal;
export default InstructionsOverlay;
