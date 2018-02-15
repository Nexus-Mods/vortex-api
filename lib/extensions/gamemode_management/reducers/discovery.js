"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discovery_1 = require("../actions/discovery");
const update = require("immutability-helper");
/**
 * reducer for changes to the known mods
 */
exports.discoveryReducer = {
    reducers: {
        [discovery_1.setPhaseCount]: (state, payload) => {
            let res = update(state, { phases: { $set: {} } });
            for (let i = 0; i < payload; ++i) {
                res = update(res, {
                    phases: { [i]: { $set: { progress: 0, directory: 0 } } },
                });
            }
            return res;
        },
        [discovery_1.discoveryProgress]: (state, payload) => state.phases[payload.idx] !== undefined
            ? update(state, {
                running: { $set: true },
                phases: {
                    [payload.idx]: {
                        progress: { $set: payload.percent },
                        directory: { $set: payload.directory },
                    },
                },
            })
            : state,
        [discovery_1.discoveryFinished]: (state, payload) => update(state, {
            running: { $set: false },
            phases: { $set: [] },
        }),
    },
    defaults: {
        running: false,
        phases: {},
    },
};
