import { IExtensionApi } from "../../types/IExtensionContext";
export interface IComponentContext {
    api: IExtensionApi;
    headerPortal: () => HTMLElement;
    page: string;
}
declare const _default: any;
export default _default;
