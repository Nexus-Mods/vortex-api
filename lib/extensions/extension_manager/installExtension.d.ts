import { IExtensionApi } from "../../types/IExtensionContext";
import { IExtension } from "./types";
import Promise from "bluebird";
declare function installExtension(api: IExtensionApi, archivePath: string, info?: IExtension): Promise<void>;
export default installExtension;
