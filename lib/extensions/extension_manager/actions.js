"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOptionalExtensions = exports.setExtensionsUpdate = exports.setInstalledExtensions = exports.setAvailableExtensions = void 0;
const redux_act_1 = require("redux-act");
exports.setAvailableExtensions = (0, redux_act_1.createAction)("SET_AVAILABLE_EXTENSIONS", (extensions) => extensions);
exports.setInstalledExtensions = (0, redux_act_1.createAction)("SET_INSTALLED_EXTENSIONS", (extensions) => extensions);
exports.setExtensionsUpdate = (0, redux_act_1.createAction)("SET_EXTENSIONS_UPDATE_TIME", (time) => time);
exports.setOptionalExtensions = (0, redux_act_1.createAction)("SET_OPTIONAL_EXTENSIONS", (optional) => optional);
