"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDeploymentNecessary = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
exports.setDeploymentNecessary = (0, safeCreateAction_1.default)("SET_NEED_DEPLOYMENT", (gameId, required) => ({ gameId, required }));
