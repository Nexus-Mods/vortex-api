"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modNameFromAttributes = modNameFromAttributes;
exports.renderModReference = renderModReference;
const storeHelper_1 = require("../../../util/storeHelper");
function modNameFromAttributes(mod, options) {
    const fields = [];
    fields.push((0, storeHelper_1.getSafe)(mod, ["customFileName"], "") ||
        (0, storeHelper_1.getSafe)(mod, ["logicalFileName"], "") ||
        (0, storeHelper_1.getSafe)(mod, ["fileName"], "") ||
        (0, storeHelper_1.getSafe)(mod, ["name"], ""));
    if (options === null || options === void 0 ? void 0 : options.version) {
        fields.push(`(v${(0, storeHelper_1.getSafe)(mod, ["version"], "?")})`);
    }
    if ((options === null || options === void 0 ? void 0 : options.variant) && (mod === null || mod === void 0 ? void 0 : mod.variant) !== undefined) {
        fields.push(`(${mod.variant})`);
    }
    return fields.join(" ");
}
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
    if (mod === undefined || mod.attributes === undefined) {
        return undefined;
    }
    return modNameFromAttributes(mod.attributes, options) || mod.installationPath;
}
function renderModReference(ref, mod, options) {
    const version = options === undefined || options.version !== false;
    if (mod !== undefined) {
        return modName(mod, { version });
    }
    if (ref === undefined) {
        return "<Invalid reference>";
    }
    if (ref.description !== undefined) {
        return ref.description;
    }
    if (ref.logicalFileName === undefined && ref.fileExpression === undefined) {
        return ref.fileMD5 || ref.id || "<Invalid reference>";
    }
    let name = ref.logicalFileName || ref.fileExpression || "<Invalid reference>";
    if (ref.versionMatch !== undefined && version) {
        name += " v" + ref.versionMatch;
    }
    return name;
}
exports.default = modName;
