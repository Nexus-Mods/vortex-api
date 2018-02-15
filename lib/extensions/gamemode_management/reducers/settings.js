"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("../../../util/storeHelper");
const actions = require("../actions/settings");
/**
 * reducer for changes to the window state
 */
exports.settingsReducer = {
    reducers: {
        [actions.addDiscoveredGame]: (state, payload) => 
        // don't replace previously discovered tools as the settings
        // there may also be user configuration
        storeHelper_1.merge(state, ['discovered', payload.id], payload.result),
        [actions.setGamePath]: (state, payload) => storeHelper_1.setOrNop(state, ['discovered', payload.gameId, 'path'], payload.gamePath),
        [actions.addDiscoveredTool]: (state, payload) => (state.discovered[payload.gameId] === undefined)
            ? state
            : storeHelper_1.setSafe(state, ['discovered', payload.gameId, 'tools', payload.toolId], payload.result),
        [actions.setToolVisible]: (state, payload) => 
        // custom added tools can be deleted so we do that instead of hiding them
        (!payload.visible
            && storeHelper_1.getSafe(state, ['discovered', payload.gameId, 'tools', payload.toolId, 'custom'], false))
            ? storeHelper_1.deleteOrNop(state, ['discovered', payload.gameId, 'tools', payload.toolId])
            : storeHelper_1.setSafe(state, ['discovered', payload.gameId, 'tools', payload.toolId, 'hidden'], !payload.visible),
        [actions.setGameParameters]: (state, payload) => (state.discovered[payload.gameId] === undefined)
            ? state
            : storeHelper_1.merge(state, ['discovered', payload.gameId], payload.parameters),
        [actions.setGameHidden]: (state, payload) => storeHelper_1.setSafe(state, ['discovered', payload.gameId, 'hidden'], payload.hidden),
        [actions.addSearchPath]: (state, payload) => ((state.searchPaths !== undefined) && (state.searchPaths.indexOf(payload) !== -1))
            ? state
            : storeHelper_1.pushSafe(state, ['searchPaths'], payload),
        [actions.clearSearchPaths]: (state, payload) => storeHelper_1.setSafe(state, ['searchPaths'], []),
        [actions.removeSearchPath]: (state, payload) => storeHelper_1.removeValue(state, ['searchPaths'], payload),
        [actions.setPickerLayout]: (state, payload) => storeHelper_1.setSafe(state, ['pickerLayout'], payload.layout),
    },
    defaults: {
        searchPaths: undefined,
        discovered: {},
        pickerLayout: 'small',
    },
};
