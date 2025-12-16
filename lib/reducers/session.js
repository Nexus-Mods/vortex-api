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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionReducer = void 0;
exports.makeExeId = makeExeId;
const actions = __importStar(require("../actions/session"));
const storeHelper_1 = require("../util/storeHelper");
const path = __importStar(require("path"));
function makeExeId(exePath) {
    // TODO: stripping the path means that we can't distinguish between different installations
    // of the same exe running at the same time, we might see an exe as "not running" when it
    // actually is. This is rather unlikely though.
    // On the flipside, if we _don't_ use the basename, lookup will be more complicated and
    // thus slower.
    return path.basename(exePath).toLowerCase();
}
/**
 * reducer for changes to the window state
 */
exports.sessionReducer = {
    reducers: {
        [actions.displayGroup]: (state, payload) => (0, storeHelper_1.setSafe)(state, ["displayGroups", payload.groupId], payload.itemId),
        [actions.setDialogVisible]: (state, payload) => (0, storeHelper_1.setSafe)(state, ["visibleDialog"], payload.dialogId),
        [actions.setSettingsPage]: (state, payload) => (0, storeHelper_1.setSafe)(state, ["settingsPage"], payload.pageId),
        [actions.startActivity]: (state, payload) => (0, storeHelper_1.addUniqueSafe)(state, ["activity", payload.group], payload.activityId),
        [actions.stopActivity]: (state, payload) => (0, storeHelper_1.removeValue)(state, ["activity", payload.group], payload.activityId),
        [actions.setProgress]: (state, payload) => (0, storeHelper_1.setSafe)(state, ["progress", payload.group, payload.progressId], {
            text: payload.text,
            percent: Math.round(payload.percent),
        }),
        [actions.setOpenMainPage]: (state, payload) => {
            if (payload.secondary) {
                return (0, storeHelper_1.setSafe)(state, ["secondaryPage"], payload.page);
            }
            else {
                return (0, storeHelper_1.setSafe)((0, storeHelper_1.setSafe)(state, ["mainPage"], payload.page), ["secondaryPage"], "");
            }
        },
        [actions.setExtensionLoadFailures]: (state, payload) => (0, storeHelper_1.setSafe)(state, ["extLoadFailures"], payload),
        [actions.setToolRunning]: (state, payload) => (0, storeHelper_1.setSafe)(state, ["toolsRunning", makeExeId(payload.exePath)], {
            exePath: payload.exePath,
            started: payload.started,
            pid: undefined,
            exclusive: payload.exclusive || false,
        }),
        [actions.setToolPid]: (state, payload) => (0, storeHelper_1.setSafe)(state, ["toolsRunning", makeExeId(payload.exePath)], {
            exePath: payload.exePath,
            started: payload.started,
            pid: payload.pid,
            exclusive: payload.exclusive || false,
        }),
        [actions.setToolStopped]: (state, payload) => (0, storeHelper_1.deleteOrNop)(state, ["toolsRunning", makeExeId(payload.exePath)]),
        [actions.setUIBlocker]: (state, payload) => (0, storeHelper_1.setSafe)(state, ["uiBlockers", payload.id], {
            icon: payload.icon,
            description: payload.description,
            mayCancel: payload.mayCancel,
        }),
        [actions.clearUIBlocker]: (state, payload) => (0, storeHelper_1.deleteOrNop)(state, ["uiBlockers", payload]),
        [actions.setNetworkConnected]: (state, payload) => (0, storeHelper_1.setSafe)(state, ["networkConnected"], payload),
        [actions.setCommandLine]: (state, payload) => (0, storeHelper_1.setSafe)(state, ["commandLine"], payload),
    },
    defaults: {
        displayGroups: {},
        visibleDialog: undefined,
        overlayOpen: false,
        networkConnected: true,
        mainPage: "",
        secondaryPage: "",
        activity: {},
        progress: {},
        settingsPage: undefined,
        extLoadFailures: {},
        toolsRunning: {},
        uiBlockers: {},
        commandLine: {},
    },
};
