"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("../../util/storeHelper");
const reselect_1 = require("reselect");
const profilesBase = (state) => state.persistent.profiles;
exports.activeGameId = (state) => {
    const profile = exports.activeProfile(state);
    return profile !== undefined ? profile.gameId : undefined;
};
exports.gameProfiles = reselect_1.createSelector(exports.activeGameId, profilesBase, (gameId, profiles) => {
    return Object.keys(profiles)
        .filter((id) => profiles[id].gameId === gameId)
        .map((id) => profiles[id]);
});
exports.activeProfile = (state) => {
    const profileId = storeHelper_1.getSafe(state, ['settings', 'profiles', 'activeProfileId'], undefined);
    return storeHelper_1.getSafe(state, ['persistent', 'profiles', profileId], undefined);
};
