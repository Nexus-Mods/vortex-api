import { ButtonType } from '../../../controls/IconBar';
import { IProfileMod } from '../../profile_management/types/IProfile';
import { IMod } from '../types/IMod';
import * as React from 'react';
export declare type IModWithState = IMod & IProfileMod;
export interface IBaseProps {
    buttonType: ButtonType;
}
declare const _default: React.ComponentClass<IBaseProps, React.ComponentState>;
export default _default;
