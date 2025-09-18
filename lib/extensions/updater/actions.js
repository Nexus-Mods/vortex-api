"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpdateChannel = void 0;
const safeCreateAction_1 = __importDefault(require("../../actions/safeCreateAction"));
/**
 * changes the 'channel' from which to receive Vortex updates
 * currently either 'beta', 'stable' or 'none'
 */
exports.setUpdateChannel = (0, safeCreateAction_1.default)('SET_UPDATE_CHANNEL', channel => channel);
