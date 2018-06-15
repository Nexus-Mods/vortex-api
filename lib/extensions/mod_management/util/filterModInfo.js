"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("../../../util/storeHelper");
const Promise = require("bluebird");
const _ = require("lodash");
function transfer(info, key, source, path) {
    const value = storeHelper_1.getSafe(source, path, undefined);
    if (value !== undefined) {
        info[key] = value;
    }
}
const attributeExtractors = [];
function registerAttributeExtractor(priority, extractor) {
    attributeExtractors.push({ priority, extractor });
}
exports.registerAttributeExtractor = registerAttributeExtractor;
function filterUndefined(input) {
    return _.omitBy(input, val => val === undefined);
}
function filterModInfo(input, modPath) {
    return Promise.map(attributeExtractors.sort(), extractor => extractor.extractor(input, modPath))
        .then(infoBlobs => Object.assign({}, ...infoBlobs.map(filterUndefined)));
}
exports.default = filterModInfo;
