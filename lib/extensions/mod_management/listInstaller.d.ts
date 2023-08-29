import { IFileListItem } from './types/IMod';
import { ISupportedInstaller } from './types/IModInstaller';
import Promise from 'bluebird';
/**
 * installer designed to unpack a specific list of files
 * from an archive, ignoring any install script
 */
declare function makeListInstaller(extractList: IFileListItem[], basePath: string): Promise<ISupportedInstaller>;
export default makeListInstaller;
