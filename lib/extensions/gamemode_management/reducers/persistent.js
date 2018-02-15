"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("../../../util/storeHelper");
const actions = require("../actions/persistent");
/**
 * reducer for changes to ephemeral session state
 */
exports.persistentReducer = {
    reducers: {
        [actions.setGameInfo]: (state, payload) => {
            let temp = state;
            payload.values.forEach((val) => {
                temp = storeHelper_1.setSafe(temp, ['gameInfo', payload.gameId, val.key], {
                    provider: payload.provider,
                    expires: payload.expires,
                    title: val.title,
                    value: val.value,
                    type: val.type,
                });
            });
            return temp;
        },
    },
    defaults: {
        gameInfo: {},
    },
};
