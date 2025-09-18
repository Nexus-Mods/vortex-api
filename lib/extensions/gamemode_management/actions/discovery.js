"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.discoveryFinished = exports.discoveryProgress = exports.setPhaseCount = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
exports.setPhaseCount = (0, safeCreateAction_1.default)('SET_DISCOVERY_PHASE_COUNT', count => count);
exports.discoveryProgress = (0, safeCreateAction_1.default)('DISCOVERY_PROGRESS', (idx, percent, directory) => ({ idx, percent, directory }));
exports.discoveryFinished = (0, safeCreateAction_1.default)('DISCOVERY_FINISHED');
