"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFreeUserDLItem = exports.addFreeUserDLItem = exports.setLastUpdateCheck = exports.setLoginError = exports.setOauthPending = exports.setLoginId = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
exports.setLoginId = (0, safeCreateAction_1.default)("SET_LOGIN_ID", (id) => id);
exports.setOauthPending = (0, safeCreateAction_1.default)("SET_OAUTH_PENDING", (url) => url);
exports.setLoginError = (0, safeCreateAction_1.default)("SET_LOGIN_ERROR", (error) => error);
/**
 * store last time we checked for updates
 */
exports.setLastUpdateCheck = (0, safeCreateAction_1.default)("SET_LAST_UPDATE_CHECK", (gameId, time, range, updateList) => ({ gameId, time, range, updateList }));
exports.addFreeUserDLItem = (0, safeCreateAction_1.default)("ADD_FREEUSER_DLITEM", (url) => url);
exports.removeFreeUserDLItem = (0, safeCreateAction_1.default)("REMOVE_FREEUSER_DLITEM", (url) => url);
