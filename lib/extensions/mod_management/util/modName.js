"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("../../../util/storeHelper");
function modNameFromAttributes(mod, options) {
    const fields = [];
    fields.push(storeHelper_1.getSafe(mod, ['customFileName'], '')
        || storeHelper_1.getSafe(mod, ['logicalFileName'], '')
        || storeHelper_1.getSafe(mod, ['fileName'], '')
        || storeHelper_1.getSafe(mod, ['name'], ''));
    if (options !== undefined && options.version) {
        fields.push(`(v${storeHelper_1.getSafe(mod, ['version'], '?')})`);
    }
    return fields.join(' ');
}
exports.modNameFromAttributes = modNameFromAttributes;
/**
 * determins the mod name to show to the user based on the mod attributes.
 * absolutely never use this function for anything other than showing the output
 * to the user, the output must not be stored or used as an identifier for the mod,
 * I reserve the right to change the algorithm at any time.
 * @param {IMod} mod
 * @param {INameOptions} [options]
 * @returns {string}
 */
function modName(mod, options) {
    return modNameFromAttributes(mod.attributes, options);
}
exports.default = modName;
