"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions = require("../actions/session");
const update = require("immutability-helper");
/**
 * reducer for changes to ephemeral session state
 */
exports.sessionReducer = {
    reducers: {
        [actions.setKnownGames]: (state, payload) => update(state, { known: { $set: payload } }),
    },
    defaults: {
        known: [],
    },
};
