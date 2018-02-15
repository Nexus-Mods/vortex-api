"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("../../../util/storeHelper");
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
    const fields = [];
    fields.push(storeHelper_1.getSafe(mod.attributes, ['customFileName'], storeHelper_1.getSafe(mod.attributes, ['logicalFileName'], storeHelper_1.getSafe(mod.attributes, ['fileName'], storeHelper_1.getSafe(mod.attributes, ['name'], '')))));
    if (options !== undefined && options.version) {
        fields.push(`(v${storeHelper_1.getSafe(mod.attributes, ['version'], '?')})`);
    }
    return fields.join(' ');
}
exports.default = modName;
