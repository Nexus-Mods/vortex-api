"use strict";
// top-level file for the 'api' which exposes components
// that should be available to extensions
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tailwind = exports.PureComponentEx = exports.ComponentEx = exports.util = exports.types = exports.selectors = exports.log = exports.fs = exports.Promise = exports.actions = void 0;
const actions = __importStar(require("./actions/index"));
exports.actions = actions;
const types = __importStar(require("./types/api"));
exports.types = types;
const util = __importStar(require("./util/api"));
exports.util = util;
const fs = __importStar(require("./util/fs"));
exports.fs = fs;
const log_1 = require("./util/log");
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return log_1.log; } });
const selectors = __importStar(require("./util/selectors"));
exports.selectors = selectors;
const bluebird_1 = __importDefault(require("bluebird"));
exports.Promise = bluebird_1.default;
__exportStar(require("./renderer/controls/api"), exports);
__exportStar(require("./renderer/views/api"), exports);
var ComponentEx_1 = require("./util/ComponentEx");
Object.defineProperty(exports, "ComponentEx", { enumerable: true, get: function () { return ComponentEx_1.ComponentEx; } });
Object.defineProperty(exports, "PureComponentEx", { enumerable: true, get: function () { return ComponentEx_1.PureComponentEx; } });
// Tailwind component library (namespaced to avoid conflicts)
var tailwind_1 = require("./tailwind");
Object.defineProperty(exports, "Tailwind", { enumerable: true, get: function () { return tailwind_1.Tailwind; } });
