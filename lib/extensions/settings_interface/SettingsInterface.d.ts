import type { IParameters } from "@vortex/shared/cli";
export interface IBaseProps {
    startup: IParameters;
    changeStartup: (key: string, value: any) => void;
}
declare function SettingsInterface(props: IBaseProps): JSX.Element;
export default SettingsInterface;
