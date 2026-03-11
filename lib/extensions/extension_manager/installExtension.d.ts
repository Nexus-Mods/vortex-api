import type { IExtensionApi } from "../../types/IExtensionContext";
import type { IExtension } from "../../types/extensions";
import PromiseBB from "bluebird";
declare function installExtension(api: IExtensionApi, archivePath: string, info?: IExtension): PromiseBB<void>;
export default installExtension;
