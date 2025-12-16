"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setForcedLogout = exports.setOAuthCredentials = exports.clearOAuthCredentials = exports.setUserAPIKey = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
/*
 * action to set the user API Key. Takes one parameter, the api key as a string
 */
exports.setUserAPIKey = (0, safeCreateAction_1.default)("SET_USER_API_KEY", (key) => key);
exports.clearOAuthCredentials = (0, safeCreateAction_1.default)("CLEAR_OAUTH_CREDENTIALS", () => null);
exports.setOAuthCredentials = (0, safeCreateAction_1.default)("SET_OAUTH_CREDENTIALS", (token, refreshToken, fingerprint) => ({
    token,
    refreshToken,
    fingerprint,
}));
/*
 * set to true if a logout was forced, normally via a migration
 */
exports.setForcedLogout = (0, safeCreateAction_1.default)("SET_FORCED_LOGOUT", (value) => value);
