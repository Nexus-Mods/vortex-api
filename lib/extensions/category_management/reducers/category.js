"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("../../../util/storeHelper");
const actions = require("../actions/category");
/**
 * reducer for changes to ephemeral session state
 */
exports.categoryReducer = {
    reducers: {
        [actions.loadCategories]: (state, payload) => storeHelper_1.setOrNop(state, [payload.gameId], payload.gameCategories),
        [actions.setCategory]: (state, payload) => storeHelper_1.setSafe(state, [payload.gameId, payload.id], payload.category),
        [actions.removeCategory]: (state, payload) => storeHelper_1.deleteOrNop(state, [payload.gameId, payload.id]),
        [actions.updateCategories]: (state, payload) => storeHelper_1.setSafe(state, [payload.gameId], payload.gameCategories),
        [actions.renameCategory]: (state, payload) => storeHelper_1.setOrNop(state, [payload.gameId, payload.categoryId, 'name'], payload.name),
        [actions.setCategoryOrder]: (state, payload) => {
            const { gameId, categoryIds } = payload;
            let newState = state;
            categoryIds.forEach((id, idx) => {
                const oldOrder = storeHelper_1.getSafe(newState, [gameId, id, 'order'], undefined);
                if ((oldOrder !== undefined) && (oldOrder !== idx)) {
                    newState = storeHelper_1.setSafe(newState, [gameId, id, 'order'], idx);
                }
            });
            return newState;
        },
    },
    defaults: {},
    verifiers: {
        _: {
            elements: {
                _: {
                    elements: {
                        name: { type: 'string' },
                        order: { type: 'number' },
                    },
                },
            },
        },
    },
};
