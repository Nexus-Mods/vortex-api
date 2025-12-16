"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const application_1 = require("./application");
const Debouncer_1 = __importDefault(require("./Debouncer"));
const fs = __importStar(require("./fs"));
const fsAtomic_1 = require("./fsAtomic");
const getVortexPath_1 = __importDefault(require("./getVortexPath"));
const log_1 = require("./log");
const startupPath = () => path.join((0, getVortexPath_1.default)("appData"), (0, application_1.getApplication)().name, "startup.json");
function read() {
    try {
        return JSON.parse(fs.readFileSync(startupPath(), { encoding: "utf-8" }));
    }
    catch (err) {
        if (err.code !== "ENOENT") {
            (0, log_1.log)("warn", "failed to parse startup.json", { error: err.message });
        }
        return {};
    }
}
const updateDebouncer = new Debouncer_1.default(() => {
    return (0, fsAtomic_1.writeFileAtomic)(startupPath(), JSON.stringify(settings)).catch((err) => {
        (0, log_1.log)("error", "failed to write startup.json", { error: err.message });
    });
}, 100);
const settings = read();
const proxy = new Proxy(settings, {
    set: (target, key, value) => {
        target[key] = value;
        updateDebouncer.schedule();
        return true;
    },
});
exports.default = proxy;
