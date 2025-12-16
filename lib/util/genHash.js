"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractToken = extractToken;
exports.genHash = genHash;
// remove the file names from stack lines because they contain local paths
function removeFileNames(input) {
    return input
        .replace(/(at [^\(]*)\(.*\)$/, "$1")
        .replace(/at [A-Z]:\\.*\\([^\\]*)/, "at $1");
}
// remove everything in quotes to get file names and such out of the error message
function removeQuoted(input) {
    return input
        .replace(/'.*?'($|\s|\.|\,|\;)/g, "")
        .replace(/"[^"]*"/g, "")
        .replace(/'[^']*'/g, "");
}
// sanitize certain well known error messages that don't get properly stripped by removing quotes
// or contain localized components
function sanitizeKnownMessages(input) {
    return (input
        .replace(/(Unexpected token ). (in JSON at position) [0-9]+/, "$1$2 ...")
        // reported from loot, the rest of these errors is localized
        .replace(/(boost::filesystem::file_size:) .*/, "$1")
        .replace(/.*(contains invalid WIN32 path characters.)/, "... $1")
        .replace(/(Error: Cannot get property '[^']*' on missing remote object) [0-9]+/, "$1")
        .replace(/.*(Cipher functions:OPENSSL_internal).*/, "$1")
        .replace(/\\\\?\\.*(\\Vortex\\resources)/i, "$1"));
}
// remove stack lines that are known to contain information that doesn't distinguish the issue
// but tends to be variable
function removeKnownVariable(input) {
    return input
        .replace(/HResult: [0-9\-]*/, "")
        .replace(/[0-9]+:error:[0-9a-f]+:(SSL routines:OPENSSL_internal):.*/, "$1");
}
// replace "at foobar [as somename]" by "at somename"
// TODO: This is mostly necessary because source maps are tranlated incorrectly and in these cases,
//   "foobar part" seems to be almost random and non-sensical wheras the "somename part" is mostly
//   correct
function replaceFuncName(input) {
    return input.replace(/at [^ ]* \[as (.*?)\]/, "at $1");
}
// this attempts to remove everything "dynamic" about the error message so that
// the hash is only calculated on the static part so we can group them
function sanitizeStackLine(input) {
    return replaceFuncName(removeKnownVariable(removeQuoted(removeFileNames(input))));
}
function extractToken(error) {
    if (error.stack === undefined) {
        return removeQuoted(error.message);
    }
    let hashStack = error.stack.split("\n");
    let messageLineCount = hashStack.findIndex((line) => line.startsWith(" "));
    if (messageLineCount === -1) {
        messageLineCount = 1;
    }
    hashStack = [
        removeQuoted(sanitizeKnownMessages(hashStack.slice(0, messageLineCount).join(" "))),
        ...hashStack.slice(messageLineCount).map(sanitizeStackLine),
    ];
    const idx = hashStack.findIndex((line) => line.indexOf("Promise._settlePromiseFromHandler") !== -1 ||
        line.indexOf("MappingPromiseArray._promiseFulfilled") !== -1);
    if (idx !== -1) {
        hashStack.splice(idx);
    }
    return hashStack.join("\n");
}
function genHash(error) {
    const { createHash } = require("crypto");
    const hash = createHash("md5");
    return hash.update(extractToken(error)).digest("hex");
}
