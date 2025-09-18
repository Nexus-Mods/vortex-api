"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAttributeExtractor = registerAttributeExtractor;
exports.debugListExtractors = debugListExtractors;
const log_1 = require("../../../util/log");
const attributeExtractors = [];
function registerAttributeExtractor(priority, extractor) {
    attributeExtractors.push({ priority, extractor });
    attributeExtractors.sort((lhs, rhs) => rhs.priority - lhs.priority);
}
/**
 * Debug function to list all registered attribute extractors
 * Useful for identifying which extractors are registered and their priorities
 */
function debugListExtractors() {
    return attributeExtractors.map(({ priority, extractor }) => {
        var _a;
        let name = '[unknown extractor]';
        let details = '';
        try {
            const extractorObj = extractor;
            if (extractorObj.name && extractorObj.name !== 'Function') {
                name = extractorObj.name;
            }
            else if (typeof extractor === 'function') {
                const funcStr = extractor.toString();
                const match = funcStr.match(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/);
                if (match && match[1] !== 'Function') {
                    name = match[1];
                }
                else {
                    const bodyMatch = funcStr.match(/return\s+({[^}]*}|[^;]+)/);
                    if (bodyMatch) {
                        name = `[anonymous: ${bodyMatch[1].substring(0, 30)}...]`;
                    }
                    else {
                        name = '[anonymous function extractor]';
                    }
                }
            }
            details = `type: ${typeof extractor}, hasName: ${!!(extractorObj.name)}, constructor: ${((_a = extractorObj.constructor) === null || _a === void 0 ? void 0 : _a.name) || 'unknown'}`;
        }
        catch (err) {
            name = '[identification failed]';
            details = `error: ${err.message}`;
        }
        return { priority, name, details };
    });
}
function filterNullish(input) {
    return Object.fromEntries(Object.entries(input !== null && input !== void 0 ? input : {}).filter(([_, val]) => val != null));
}
// Every mod installation is run through the attributeExtractors in order of priority.
//  Imagine the simplest use case where installing a collection with 1000 mods - and one extractor takes over 1.5 seconds to run,
//  that's at a minimum 25 minutes of waiting for the user. Keep in mind that incorrect usage of the attributeExtractors in community
//  extensions will raise this time even further. This is why we have a timeout of 5 seconds for each extractor (this is already quite generous).
// All core extractors should never take more than a few milliseconds to run.
function extractorOrSkip(extractor, input, modPath) {
    var _a;
    // Enhanced extractor identification for better debugging
    let extractorName = '[unknown extractor]';
    let extractorDetails = '';
    try {
        const extractorObj = extractor;
        if (extractorObj.name && extractorObj.name !== 'Function') {
            extractorName = extractorObj.name;
        }
        else if (typeof extractor === 'function') {
            const funcStr = extractor.toString();
            const match = funcStr.match(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/);
            if (match && match[1] !== 'Function') {
                extractorName = match[1];
            }
            else {
                const bodyMatch = funcStr.match(/return\s+({[^}]*}|[^;]+)/);
                if (bodyMatch) {
                    extractorName = `[anonymous: ${bodyMatch[1].substring(0, 50)}...]`;
                }
                else {
                    extractorName = '[anonymous function extractor]';
                }
            }
        }
        extractorDetails = ` (type: ${typeof extractor}, hasName: ${!!(extractorObj.name)}, constructor: ${((_a = extractorObj.constructor) === null || _a === void 0 ? void 0 : _a.name) || 'unknown'})`;
    }
    catch (err) {
        extractorName = '[extractor identification failed]';
        extractorDetails = ` (error: ${err.message})`;
    }
    // Create timeout promise that rejects after 5 seconds
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Extractor "${extractorName}" timed out after 5 seconds${extractorDetails}`));
        }, 5000);
    });
    // Add start time for performance tracking
    const startTime = Date.now();
    // Race the extractor against the timeout
    return Promise.race([
        Promise.resolve(extractor(input, modPath)),
        timeoutPromise
    ])
        .catch(err => {
        const duration = Date.now() - startTime;
        (0, log_1.log)('error', `Extractor skipped: "${extractorName}" (modPath: "${modPath}") - ${err.message}`, {
            extractorName,
            duration,
            modPath,
            extractorDetails,
            errorType: err.name || 'Unknown'
        });
        return {};
    });
}
function filterModInfo(input, modPath) {
    return Promise.all(attributeExtractors.map(extractor => extractorOrSkip(extractor.extractor, input, modPath)))
        .then(infoBlobs => Object.assign({}, ...infoBlobs.map(filterNullish)));
}
exports.default = filterModInfo;
