"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastActiveProfileForGame = exports.activeProfile = exports.gameProfiles = exports.activeGameId = void 0;
exports.profileById = profileById;
const storeHelper_1 = require("../../util/storeHelper");
const re_reselect_1 = __importDefault(require("re-reselect"));
const reselect_1 = require("reselect");
const profilesBase = (state) => state.persistent.profiles;
const lastActiveProfiles = (state) => state.settings.profiles.lastActiveProfile;
const activeGameId = (state) => {
    const profile = (0, exports.activeProfile)(state);
    return profile !== undefined ? profile.gameId : undefined;
};
exports.activeGameId = activeGameId;
exports.gameProfiles = (0, reselect_1.createSelector)(exports.activeGameId, profilesBase, (gameId, profiles) => {
    return Object.keys(profiles)
        .filter((id) => profiles[id].gameId === gameId)
        .map((id) => profiles[id]);
});
const activeProfile = (state) => {
    const profileId = (0, storeHelper_1.getSafe)(state, ["settings", "profiles", "activeProfileId"], undefined);
    return (0, storeHelper_1.getSafe)(state, ["persistent", "profiles", profileId], undefined);
};
exports.activeProfile = activeProfile;
const profileByIdImpl = (0, re_reselect_1.default)(profilesBase, (state, profileId) => profileId, (profilesBaseIn, profileId) => profilesBaseIn[profileId])((state, profileId) => profileId);
function profileById(state, profileId) {
    if (profileId === undefined) {
        return undefined;
    }
    return profileByIdImpl(state, profileId);
}
exports.lastActiveProfileForGame = (0, re_reselect_1.default)(lastActiveProfiles, (state, gameId) => gameId, (lastActiveProfilesIn, gameId) => lastActiveProfilesIn[gameId])((state, gameId) => gameId);
