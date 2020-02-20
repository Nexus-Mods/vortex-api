import { WithTranslation } from 'react-i18next';
export interface IErrorBoundaryProps extends WithTranslation {
    visible?: boolean;
    onHide?: () => void;
    className?: string;
}
declare const _default: any;
export default _default;
