"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNewestVersion = exports.setUserInfo = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
function id(input) {
    return input;
}
/**
 * action to set the user info nexus associates with an api key
 */
exports.setUserInfo = (0, safeCreateAction_1.default)("SET_USER_INFO", id);
/**
 * remember current version available on nexus
 */
exports.setNewestVersion = (0, safeCreateAction_1.default)("SET_NEWEST_VERSION", id);
