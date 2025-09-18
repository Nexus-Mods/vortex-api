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
exports.sessionReducer = exports.persistentReducer = void 0;
const IExtensionContext_1 = require("../../types/IExtensionContext");
const storeHelper_1 = require("../../util/storeHelper");
const actions = __importStar(require("./actions"));
const persistentReducer = {
    reducers: Object.assign(Object.assign(Object.assign({}, (0, IExtensionContext_1.addReducer)(actions.addHistoryEvent, (state, payload) => {
        const path = ['historyStacks', payload.stack];
        const copy = (0, storeHelper_1.getSafe)(state, path, [])
            .slice(payload.limit * -1 - 1);
        copy.push(payload.event);
        return (0, storeHelper_1.setSafe)(state, path, copy);
    })), (0, IExtensionContext_1.addReducer)(actions.setHistoryEvent, (state, payload) => {
        const idx = state.historyStacks[payload.stack].findIndex(evt => evt.id === payload.event.id);
        const copy = (0, storeHelper_1.setSafe)(state, ['historyStacks', payload.stack, idx], payload.event);
        return copy;
    })), (0, IExtensionContext_1.addReducer)(actions.markHistoryReverted, (state, payload) => {
        const idx = state.historyStacks[payload.stack].findIndex(evt => evt.id === payload.event.id);
        const copy = (0, storeHelper_1.setSafe)(state, ['historyStacks', payload.stack, idx, 'reverted'], true);
        return copy;
    })),
    defaults: {
        historyStacks: {},
    },
};
exports.persistentReducer = persistentReducer;
const sessionReducer = {
    reducers: Object.assign({}, (0, IExtensionContext_1.addReducer)(actions.showHistory, (state, payload) => (0, storeHelper_1.setSafe)(state, ['stackToShow'], payload))),
    defaults: {
        stackToShow: undefined,
    },
};
exports.sessionReducer = sessionReducer;
