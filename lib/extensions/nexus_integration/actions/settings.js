"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAssociatedWithNXMURLs = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
/*
 * associate with nxm urls
 */
exports.setAssociatedWithNXMURLs = (0, safeCreateAction_1.default)('SET_ASSOCIATED_WITH_NXM_URLS', assoc => assoc);
