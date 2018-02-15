"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("../../../util/storeHelper");
/**
 * generate the category's subtitle
 *
 * @param {string} rootId
 * @param {any} mods
 * @return {string}
 */
function generateSubtitle(t, categoryId, mods) {
    const modsCount = storeHelper_1.getSafe(mods, [categoryId], []).length;
    if (modsCount === 0) {
        return t('Empty');
    }
    else {
        return t('{{ count }} mod installed', { count: modsCount });
    }
}
exports.default = generateSubtitle;
