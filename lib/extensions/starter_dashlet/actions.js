"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setToolValid = exports.setToolOrder = exports.setPrimaryTool = void 0;
const safeCreateAction_1 = __importDefault(require("../../actions/safeCreateAction"));
exports.setPrimaryTool = (0, safeCreateAction_1.default)('SET_PRIMARY_TOOL', (gameId, toolId) => ({ gameId, toolId }));
exports.setToolOrder = (0, safeCreateAction_1.default)('SET_TOOLS_ORDER', (gameId, tools) => ({ gameId, tools }));
exports.setToolValid = (0, safeCreateAction_1.default)('SET_TOOL_IS_VALID', (gameId, toolId, valid) => ({ gameId, toolId, valid }));
