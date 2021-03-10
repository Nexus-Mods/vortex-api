import { IMod, IModReference } from '../types/IMod';
export interface INameOptions {
    version?: boolean;
    variant?: boolean;
}
export declare function modNameFromAttributes(mod: {
    [key: string]: any;
}, options?: INameOptions): string;
/**
 * determins the mod name to show to the user based on the mod attributes.
 * absolutely never use this function for anything other than showing the output
 * to the user, the output must not be stored or used as an identifier for the mod,
 * I reserve the right to change the algorithm at any time.
 * @param {IMod} mod
 * @param {INameOptions} [options]
 * @returns {string}
 */
declare function modName(mod: IMod, options?: INameOptions): string;
export interface IRenderOptions {
    version?: boolean;
}
export declare function renderModReference(ref: IModReference, mod?: IMod, options?: IRenderOptions): string;
export default modName;
