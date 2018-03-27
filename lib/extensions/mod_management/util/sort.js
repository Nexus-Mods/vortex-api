"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../../../actions");
const log_1 = require("../../../util/log");
const storeHelper_1 = require("../../../util/storeHelper");
const testModReference_1 = require("./testModReference");
const Promise = require("bluebird");
const graphlib_1 = require("graphlib");
function findByRef(mods, reference) {
    return mods.find((mod) => testModReference_1.default(mod, reference));
}
function showCycles(api, cycles) {
    api.store.dispatch(actions_1.showDialog('error', 'Cycles', {
        text: 'Dependency rules between your mods contain cycles, '
            + 'like "A after B" and "B after A". You need to remove one of the '
            + 'rules causing the cycle, otherwise your mods can\'t be '
            + 'applied in the right order.',
        links: cycles.map((cycle, idx) => ({ label: cycle.join(', '), action: () => {
                api.events.emit('edit-mod-cycle', cycle);
            } })),
    }, [
        { label: 'Close' },
    ]));
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
            const res = graphlib_1.alg.topsort(dependencies);
            api.dismissNotification('mod-cycle-warning');
            return Promise.resolve(res);
        }
        catch (err) {
            // exception type not included in typings
            if (err instanceof graphlib_1.alg.topsort.CycleException) {
                api.sendNotification({
                    id: 'mod-cycle-warning',
                    type: 'warning',
                    message: 'Mod rules contain cycles',
                    actions: [
                        { title: 'Show', action: () => {
                                showCycles(api, graphlib_1.alg.findCycles(dependencies));
                            } },
                    ],
                });
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
