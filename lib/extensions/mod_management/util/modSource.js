"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModSources = getModSources;
exports.getModSource = getModSource;
exports.registerModSource = registerModSource;
const modSources = [];
function getModSources() {
    return modSources;
}
function getModSource(id) {
    return modSources.find((iter) => iter.id === id);
}
function registerModSource(id, name, onBrowse, options) {
    modSources.push({ id, name, onBrowse, options });
}
