/// <reference types="i18next" />
/// <reference types="react" />
import { ButtonType } from '../../../controls/IconBar';
import * as I18next from 'i18next';
import * as React from 'react';
export interface IBaseProps {
    buttonType: ButtonType;
    toggleHidden: () => void;
    showHidden: boolean;
    t: I18next.TranslationFunction;
}
declare const _default: React.ComponentClass<IBaseProps>;
export default _default;
