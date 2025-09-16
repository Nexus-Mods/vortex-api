"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showHistory = exports.markHistoryReverted = exports.setHistoryEvent = exports.addHistoryEvent = void 0;
const safeCreateAction_1 = __importDefault(require("../../actions/safeCreateAction"));
exports.addHistoryEvent = (0, safeCreateAction_1.default)('HISTORY_ADD_EVENT', (stack, event, limit) => ({ stack, event, limit }));
exports.setHistoryEvent = (0, safeCreateAction_1.default)('HISTORY_SET_EVENT', (stack, event) => ({ stack, event }));
exports.markHistoryReverted = (0, safeCreateAction_1.default)('HISTORY_MARK_REVERTED', (stack, event) => ({ stack, event }));
exports.showHistory = (0, safeCreateAction_1.default)('HISTORY_SHOW', (stack) => stack);
