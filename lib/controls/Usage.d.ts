import * as React from 'react';
export interface IUsageProps {
    infoId: string;
    persistent?: boolean;
    className?: string;
}
interface IConnectedProps {
    show: boolean;
}
interface IActionProps {
    onShow: () => void;
    onHide: () => void;
}
declare const _default: React.ComponentClass<Pick<Pick<IUsageProps & IConnectedProps & IActionProps & import("../../../../Work/Vortex/src/types/II18NProps").II18NProps, "persistent" | "className" | "t" | "infoId"> & IUsageProps, "persistent" | "className" | "infoId"> & import("react-i18next/src/translate").TranslateHocProps, React.ComponentState>;
export default _default;
