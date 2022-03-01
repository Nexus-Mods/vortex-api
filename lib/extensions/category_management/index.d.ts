import { IExtensionContext } from '../../types/IExtensionContext';
import { resolveCategoryName, resolveCategoryPath } from './util/retrieveCategoryPath';
export { resolveCategoryName, resolveCategoryPath };
declare function init(context: IExtensionContext): boolean;
export default init;
