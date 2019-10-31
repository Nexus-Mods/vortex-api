import { IExtension } from './types';
import * as Promise from 'bluebird';
declare function installExtension(archivePath: string, info?: IExtension): Promise<void>;
export default installExtension;
