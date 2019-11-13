import { ButtonType } from '../../../controls/IconBar';
import I18next from 'i18next';
import * as React from 'react';
export interface IBaseProps {
    buttonType: ButtonType;
    toggleHidden: () => void;
    showHidden: boolean;
    t: I18next.TFunction;
}
declare const _default: React.ComponentClass<IBaseProps, any>;
export default _default;
