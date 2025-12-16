"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeBrowser = exports.showURL = void 0;
const safeCreateAction_1 = __importDefault(require("../../actions/safeCreateAction"));
exports.showURL = (0, safeCreateAction_1.default)("SHOW_URL", (url, instructions, subscriber, skippable) => ({ url, instructions, subscriber, skippable: skippable !== null && skippable !== void 0 ? skippable : false }));
exports.closeBrowser = (0, safeCreateAction_1.default)("CLOSE_BROWSER");
