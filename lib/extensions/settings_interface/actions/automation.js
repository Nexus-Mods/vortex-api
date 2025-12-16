"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStartMinimized = exports.setAutoStart = exports.setAutoEnable = exports.setAutoInstall = exports.setAutoDeployment = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
exports.setAutoDeployment = (0, safeCreateAction_1.default)("SET_AUTO_DEPLOYMENT", (deploy) => deploy);
exports.setAutoInstall = (0, safeCreateAction_1.default)("SET_AUTO_INSTALL", (enabled) => enabled);
exports.setAutoEnable = (0, safeCreateAction_1.default)("SET_AUTO_ENABLE", (enabled) => enabled);
exports.setAutoStart = (0, safeCreateAction_1.default)("SET_AUTO_START", (start) => start);
exports.setStartMinimized = (0, safeCreateAction_1.default)("SET_START_MINIMIZED", (minimized) => minimized);
