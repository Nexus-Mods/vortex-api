"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFBLoadOrder = exports.setFBLoadOrderEntry = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
// Change a specific load order entry.
exports.setFBLoadOrderEntry = (0, safeCreateAction_1.default)("SET_FB_LOAD_ORDER_ENTRY", (profileId, loEntry) => ({ profileId, loEntry }));
exports.setFBLoadOrder = (0, safeCreateAction_1.default)("SET_FB_LOAD_ORDER", (profileId, loadOrder) => ({ profileId, loadOrder }));
