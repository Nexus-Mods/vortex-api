"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduxLogger = reduxLogger;
exports.getReduxLog = getReduxLog;
const util_1 = require("./util");
const MAX_ENTRIES = 20;
const BUFFER = 10;
let actions = [];
function truncateActions() {
    actions = actions.slice(actions.length - MAX_ENTRIES);
}
let store;
function reduxLogger() {
    return (storeIn) => {
        store = storeIn;
        return (next) => {
            return (action) => {
                if (actions.length > 0) {
                    actions[actions.length - 1].after = store.getState();
                }
                actions.push({ before: store.getState(),
                    action });
                if (actions.length > MAX_ENTRIES + BUFFER) {
                    truncateActions();
                }
                return next(action);
            };
        };
    };
}
function getReduxLog() {
    if (actions.length > MAX_ENTRIES) {
        truncateActions();
    }
    if (actions.length > 0) {
        actions[actions.length - 1].after = store.getState();
    }
    return Promise.resolve(actions.map((action, idx) => {
        const res = {
            action: action.action,
            delta: action.after !== undefined ? (0, util_1.objDiff)(action.before, action.after) : {},
        };
        return res;
    }));
}
