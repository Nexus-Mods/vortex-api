"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLoadOrderEntry = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
// Change a specific load order entry.
exports.setLoadOrderEntry = (0, safeCreateAction_1.default)("SET_LOAD_ORDER_ENTRY", (profileId, modId, loEntry) => ({
    profileId,
    modId,
    loEntry,
}));
