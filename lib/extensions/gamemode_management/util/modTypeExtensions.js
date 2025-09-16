"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModTypeExtensions = getModTypeExtensions;
exports.getModType = getModType;
exports.registerModType = registerModType;
const modTypeExtensions = [];
function getModTypeExtensions() {
    return modTypeExtensions;
}
/**
 * get information about a mod type
 * will return undefined if the id does not refer to a known mod type.
 * Also the default modType (empty string) for a game has no info structure like this
 * and will thus also return undefined
 * @param id mod type id
 * @returns details about the mod type, if available, undefined otherwise
 */
function getModType(id) {
    return modTypeExtensions.find(iter => iter.typeId === id);
}
function registerModType(id, priority, isSupported, getPath, test, options) {
    modTypeExtensions.push({
        typeId: id,
        priority,
        isSupported,
        getPath,
        test,
        options: options || {},
    });
}
