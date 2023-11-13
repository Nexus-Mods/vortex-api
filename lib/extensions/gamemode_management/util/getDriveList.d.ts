import { IExtensionApi } from '../../../types/IExtensionContext';
declare function getDriveList(api: IExtensionApi): Promise<string[]>;
export default getDriveList;
