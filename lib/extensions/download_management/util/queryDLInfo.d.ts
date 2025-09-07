import { IExtensionApi } from '../../../types/IExtensionContext';
declare function queryInfo(api: IExtensionApi, dlIds: string[], ignoreCache: boolean): Promise<void>;
export default queryInfo;
