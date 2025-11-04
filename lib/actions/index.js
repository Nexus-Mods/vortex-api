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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNextProfile = void 0;
__exportStar(require("./app"), exports);
__exportStar(require("./notifications"), exports);
__exportStar(require("./notificationSettings"), exports);
__exportStar(require("./session"), exports);
__exportStar(require("./tables"), exports);
__exportStar(require("./window"), exports);
__exportStar(require("./loadOrder"), exports);
__exportStar(require("../extensions/browser/actions"), exports);
__exportStar(require("../extensions/category_management/actions/category"), exports);
__exportStar(require("../extensions/download_management/actions/settings"), exports);
__exportStar(require("../extensions/download_management/actions/state"), exports);
__exportStar(require("../extensions/installer_fomod_shared/actions/installerUI"), exports);
__exportStar(require("../extensions/mod_load_order/actions/loadOrder"), exports);
__exportStar(require("../extensions/file_based_loadorder/actions/loadOrder"), exports);
__exportStar(require("../extensions/mod_management/actions/settings"), exports);
__exportStar(require("../extensions/mod_management/actions/deployment"), exports);
__exportStar(require("../extensions/mod_management/actions/mods"), exports);
__exportStar(require("../extensions/nexus_integration/actions/account"), exports);
__exportStar(require("../extensions/nexus_integration/actions/settings"), exports);
__exportStar(require("../extensions/nexus_integration/actions/persistent"), exports);
__exportStar(require("../extensions/gamemode_management/actions/settings"), exports);
__exportStar(require("../extensions/profile_management/actions/profiles"), exports);
var settings_1 = require("../extensions/profile_management/actions/settings");
Object.defineProperty(exports, "setNextProfile", { enumerable: true, get: function () { return settings_1.setNextProfile; } });
__exportStar(require("../extensions/settings_interface/actions/automation"), exports);
__exportStar(require("../extensions/settings_interface/actions/interface"), exports);
__exportStar(require("../extensions/updater/actions"), exports);
__exportStar(require("../extensions/starter_dashlet/actions"), exports);
