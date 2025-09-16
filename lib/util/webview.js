"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateViewURL = exports.positionBrowserView = exports.closeBrowserView = exports.makeBrowserView = void 0;
exports.closeAllViews = closeAllViews;
const electronRemote_1 = __importDefault(require("./electronRemote"));
const util_1 = require("./util");
const electron_1 = require("electron");
const shortid_1 = require("shortid");
const log_1 = require("./log");
const extraWebViews = {};
exports.makeBrowserView = (0, electronRemote_1.default)('make-browser-view', (mainElectron, content, src, forwardEvents, options) => {
    const viewId = (0, shortid_1.generate)();
    const window = electron_1.BrowserWindow.fromWebContents(content);
    const view = new mainElectron.BrowserView(options);
    (0, util_1.setdefault)(extraWebViews, content.id, {})[viewId] = view;
    view.setAutoResize({
        horizontal: true,
        vertical: true,
    });
    window.addBrowserView(view);
    view.webContents.loadURL(src);
    forwardEvents.forEach(eventId => {
        view.webContents.on(eventId, (evt, ...args) => {
            content.send(`view-${viewId}-${eventId}`, JSON.stringify(args, (0, log_1.valueReplacer)()));
            evt.preventDefault();
        });
    });
    return Promise.resolve(viewId);
});
exports.closeBrowserView = (0, electronRemote_1.default)('close-browser-view', (mainElectron, content, viewId) => {
    var _a, _b;
    if (((_a = extraWebViews[content.id]) === null || _a === void 0 ? void 0 : _a[viewId]) !== undefined) {
        const window = electron_1.BrowserWindow.fromWebContents(content);
        window.removeBrowserView(extraWebViews[content.id][viewId]);
        (_b = extraWebViews[content.id]) === null || _b === void 0 ? true : delete _b[viewId];
    }
    return Promise.resolve();
});
exports.positionBrowserView = (0, electronRemote_1.default)('position-browser-view', (mainElectron, content, viewId, rect) => {
    var _a, _b, _c;
    (_c = (_b = (_a = extraWebViews[content.id]) === null || _a === void 0 ? void 0 : _a[viewId]) === null || _b === void 0 ? void 0 : _b.setBounds) === null || _c === void 0 ? void 0 : _c.call(_b, rect);
    return Promise.resolve();
});
exports.updateViewURL = (0, electronRemote_1.default)('update-view-url', (mainElectron, content, viewId, newURL) => {
    var _a, _b;
    (_b = (_a = extraWebViews[content.id]) === null || _a === void 0 ? void 0 : _a[viewId]) === null || _b === void 0 ? void 0 : _b.webContents.loadURL(newURL);
    return Promise.resolve();
});
function closeAllViews(window) {
    var _a;
    Object.keys((_a = extraWebViews[window.webContents.id]) !== null && _a !== void 0 ? _a : {}).forEach(viewId => {
        window.removeBrowserView(extraWebViews[window.webContents.id][viewId]);
    });
}
