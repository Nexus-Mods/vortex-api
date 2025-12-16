"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetSuppression = exports.suppressNotification = void 0;
const safeCreateAction_1 = __importDefault(require("./safeCreateAction"));
/**
 * set (or unset) notifications to not show again
 */
exports.suppressNotification = (0, safeCreateAction_1.default)("SUPPRESS_NOTIFICATION", (id, suppress) => ({ id, suppress }));
exports.resetSuppression = (0, safeCreateAction_1.default)("RESET_SUPPRESSION", () => null);
