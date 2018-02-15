"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../../../util/log");
const storeHelper_1 = require("../../../util/storeHelper");
const util_1 = require("../../../util/util");
const Promise = require("bluebird");
const graphlib_1 = require("graphlib");
const minimatch = require("minimatch");
const semver = require("semvish");
function testRef(mod, ref) {
    const attr = mod.attributes;
    // if reference is by file hash, use only that
    if (ref.fileMD5 !== undefined) {
        return attr.fileMD5 === ref.fileMD5;
    }
    // right file?
    if (((ref.logicalFileName !== undefined) &&
        (ref.logicalFileName !== attr.logicalFileName)) ||
        ((ref.fileExpression !== undefined) &&
            !minimatch(mod.installationPath, ref.fileExpression))) {
        return false;
    }
    // right version? If no version is set we assume it's the right one,
    // otherwise a no-version mod could never match
    try {
        if ((ref.versionMatch !== undefined) && util_1.truthy(attr.version) &&
            !semver.satisfies(attr.version, ref.versionMatch)) {
            return false;
        }
    }
    catch (err) {
        // nop. This exception is definitively thrown by satisfies and this
        // happens if the mod has no version specified or the versionMatch is
        // invalid. Either way, it's safer to assume the rule does apply than not
    }
    return true;
}
function findByRef(mods, reference) {
    return mods.find((mod) => testRef(mod, reference));
}
function sortMods(gameId, mods, api) {
    const dependencies = new graphlib_1.Graph();
    const modMapper = (mod) => {
        return api.lookupModMeta({
            fileMD5: mod.attributes['fileMD5'],
            fileSize: mod.attributes['size'],
            gameId,
        })
            .then((metaInfo) => {
            const rules = [].concat(storeHelper_1.getSafe(metaInfo, [0, 'value', 'rules'], []), mod.rules || []);
            rules.forEach((rule) => {
                const ref = findByRef(mods, rule.reference);
                if (ref !== undefined) {
                    if (rule.type === 'before') {
                        dependencies.setEdge(mod.id, ref.id);
                    }
                    else if (rule.type === 'after') {
                        dependencies.setEdge(ref.id, mod.id);
                    }
                }
            });
            return Promise.resolve();
        });
    };
    mods.forEach(mod => { dependencies.setNode(mod.id); });
    return Promise.map(mods, modMapper)
        .catch((err) => {
        log_1.log('error', 'failed to sort mods', { msg: err.message, stack: err.stack });
    })
        .then(() => {
        try {
            return Promise.resolve(graphlib_1.alg.topsort(dependencies));
        }
        catch (err) {
            // exception type not included in typings
            if (err instanceof graphlib_1.alg.topsort.CycleException) {
                api.showErrorNotification('Mod rules contain cycles', 'Dependency rules between your mods contain cycles, '
                    + 'like "A after B" and "B after A". You need to remove one of the '
                    + 'rules causing the cycle, otherwise your mods can\'t be '
                    + 'applied in the right order.<br/><ul>'
                    + renderCycles(graphlib_1.alg.findCycles(dependencies))
                    + '</ul>', { id: 'mod-cycles', isHTML: true, allowReport: false });
                // return unsorted
                return Promise.resolve(mods.map(mod => mod.id));
            }
            else {
                return Promise.reject(err);
            }
        }
    });
}
function renderCycles(cycles) {
    return cycles.map((cycle, idx) => `<li>Cycle ${idx + 1}: ${cycle.join(', ')}</li>`).join('<br />');
}
exports.default = sortMods;
