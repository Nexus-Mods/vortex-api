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
const electronRemote_1 = __importDefault(require("./electronRemote"));
const fs = __importStar(require("./fs"));
const efi = (0, electronRemote_1.default)('extract-file-icon', (electron, content, exePath, iconPath) => {
    return electron.app.getFileIcon(exePath, { size: 'normal' })
        .then(icon => fs.writeFileAsync(iconPath, icon.toPNG()))
        .then(() => null);
});
function extractExeIcon(exePath, destPath) {
    // app.getFileIcon generated broken output on windows as of electron 11.0.4
    // (see https://github.com/electron/electron/issues/26918)
    // This issue has not been closed or so much as been replied to, however I was not able to
    // reproduce it so I'm tentatively removing the windows-specific workaround as of
    // Vortex 1.6.0
    /*
    if (process.platform === 'win32') {
      return new Promise((resolve, reject) => {
        iconExtract.extractIconToFile(exePath, destPath, error => {
          if (error !== null) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    } else {
    */
    return efi(exePath, destPath);
    // }
}
exports.default = extractExeIcon;
