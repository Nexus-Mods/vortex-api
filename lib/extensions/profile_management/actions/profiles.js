"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setModsEnabled = exports.setProfileActivated = exports.setFeature = exports.forgetMod = exports.setModEnabled = exports.willRemoveProfile = exports.removeProfile = exports.setProfile = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
const bluebird_1 = __importDefault(require("bluebird"));
const util_1 = require("../../../util/util");
/**
 * add or edit a profile
 */
exports.setProfile = (0, safeCreateAction_1.default)('SET_PROFILE', (profile) => profile);
exports.removeProfile = (0, safeCreateAction_1.default)('REMOVE_PROFILE', profileId => profileId);
exports.willRemoveProfile = (0, safeCreateAction_1.default)('WILL_REMOVE_PROFILE', profileId => profileId);
/**
 * enable or disable a mod in a profile
 */
exports.setModEnabled = (0, safeCreateAction_1.default)('SET_MOD_ENABLED', (profileId, modId, enable) => ({ profileId, modId, enable }));
exports.forgetMod = (0, safeCreateAction_1.default)('FORGET_PROFILE_MOD', (profileId, modId) => ({ profileId, modId }));
exports.setFeature = (0, safeCreateAction_1.default)('SET_PROFILE_FEATURE', (profileId, featureId, value) => ({ profileId, featureId, value }));
exports.setProfileActivated = (0, safeCreateAction_1.default)('SET_PROFILE_ACTIVATED', (active) => active);
const setModsEnabled = (() => {
    let ppFunc;
    return (api, profileIdIn, modIdsIn, enableIn, optionsIn) => {
        const { profileById } = require('../selectors');
        if (ppFunc === undefined) {
            ppFunc = api.withPrePost('enable-mods', (profileId, modIds, enable, options) => {
                if (modIds.length > 0) {
                    const profile = profileById(api.getState(), profileId);
                    if (profile !== undefined) {
                        (0, util_1.batchDispatch)(api.store, modIds.map(id => (0, exports.setModEnabled)(profileId, id, enable)));
                        api.events.emit('mods-enabled', modIds, enable, profile.gameId, options);
                    }
                }
                return bluebird_1.default.resolve();
            });
        }
        {
            const profile = profileById(api.getState(), profileIdIn);
            if (profile === undefined) {
                return bluebird_1.default.resolve();
            }
            const willChange = modIdsIn.filter(id => { var _a, _b, _c; return ((_c = (_b = (_a = profile.modState) === null || _a === void 0 ? void 0 : _a[id]) === null || _b === void 0 ? void 0 : _b.enabled) !== null && _c !== void 0 ? _c : false) !== enableIn; });
            return ppFunc(profileIdIn, willChange, enableIn, optionsIn)
                .catch(err => {
                api.showErrorNotification('Failed to enable/disable mod', err);
            });
        }
    };
})();
exports.setModsEnabled = setModsEnabled;
