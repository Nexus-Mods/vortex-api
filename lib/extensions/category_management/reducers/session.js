"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("../../../util/storeHelper");
const actions = require("../actions/session");
/**
 * reducer for changes to ephemeral session state
 */
exports.sessionReducer = {
    reducers: {
        [actions.showCategoriesDialog]: (state, payload) => storeHelper_1.setSafe(state, ['showDialog'], payload),
    },
    defaults: {
        showDialog: false,
    },
};
