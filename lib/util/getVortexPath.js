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
exports.setVortexPath = setVortexPath;
const electron = __importStar(require("electron"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const electronRemote_1 = require("./electronRemote");
const getElectronPath = (electron !== undefined) ? (0, electronRemote_1.makeRemoteCallSync)('get-electron-path', (electronIn, webContents, id) => {
    // bit of a hack to roll getPath and getAppPath into a single call
    if (id === '__app') {
        return electronIn.app.getAppPath();
    }
    return electronIn.app.getPath(id);
}) : (id) => os.tmpdir();
const setElectronPath = (0, electronRemote_1.makeRemoteCallSync)('set-electron-path', (electronIn, webContents, id, value) => {
    electronIn.app.setPath(id, value);
});
/**
 * app.getAppPath() returns the path to the app.asar,
 * development: node_modules\electron\dist\resources\default_app.asar
 * production (with asar): Vortex\resources\app.asar
 * production (without asar): Vortex\resources\app
 *
 * when running from unit tests, app may not be defined at all, in that case we use __dirname
 * after all
 */
// let basePath = app !== undefined ? app.getAppPath() : path.resolve(__dirname, '..', '..');
let basePath = electron !== undefined ? getElectronPath('__app') : path.resolve(__dirname, '..', '..');
const isDevelopment = path.basename(basePath, '.asar') !== 'app';
const isAsar = !isDevelopment && (path.extname(basePath) === '.asar');
const applicationPath = isDevelopment
    ? basePath
    : path.resolve(path.dirname(basePath), '..');
if (isDevelopment) {
    // In Electron 37, app.getAppPath() may already point to the 'out' directory
    // Check if basePath already ends with 'out' to avoid double 'out/out'
    if (path.basename(basePath) === 'out') {
        // basePath is already correct (points to out directory)
        // Don't modify it
    }
    else {
        basePath = path.join(applicationPath, 'out');
    }
}
// basePath is now the path that contains assets, bundledPlugins, index.html, main.js and so on
// applicationPath is still different between development and production
function getModulesPath(unpacked) {
    if (isDevelopment) {
        return path.join(applicationPath, 'node_modules');
    }
    const asarPath = unpacked && isAsar ? basePath + '.unpacked' : basePath;
    return path.join(asarPath, 'node_modules');
}
function getAssets(unpacked) {
    const asarPath = unpacked && isAsar ? basePath + '.unpacked' : basePath;
    return path.join(asarPath, 'assets');
}
function getBundledPluginsPath() {
    // bundled plugins are never packed in the asar
    return isAsar
        ? path.join(basePath + '.unpacked', 'bundledPlugins')
        : path.join(basePath, 'bundledPlugins');
}
function getLocalesPath() {
    // in production builds the locales are not inside the app(.asar) directory but alongside it
    return isDevelopment
        ? path.join(basePath, 'locales')
        : path.resolve(basePath, '..', 'locales');
}
/**
 * path to the directory containing package.json file
 */
function getPackagePath(unpacked) {
    if (isDevelopment) {
        return applicationPath;
    }
    let res = basePath;
    if (unpacked && (path.basename(res) === 'app.asar')) {
        res = path.join(path.dirname(res), 'app.asar.unpacked');
    }
    return res;
}
const cache = {};
const cachedAppPath = (id) => {
    if (cache[id] === undefined) {
        cache[id] = getElectronPath(id);
    }
    const value = cache[id];
    if (typeof value === 'string') {
        return value;
    }
    else {
        return value();
    }
};
const localAppData = (() => {
    let cached;
    return () => {
        if (cached === undefined) {
            cached = process.env.LOCALAPPDATA
                || path.resolve(cachedAppPath('appData'), '..', 'Local');
        }
        return cached;
    };
})();
function setVortexPath(id, value) {
    cache[id] = value;
    if (typeof value === 'string') {
        setElectronPath(id, value);
    }
    else {
        setElectronPath(id, value());
    }
}
/**
 * the electron getAppPath function and globals like __dirname
 * or process.resourcesPath don't do a great job of abstracting away
 * how the application is being built, e.g. development or not, asar or not,
 * webpack or not, portable or not.
 * This function aims to provide reasonable paths to application data independent
 * of any of that.
 */
function getVortexPath(id) {
    switch (id) {
        // c:\users\<username>\appdata\roaming\vortex
        case 'userData': return cachedAppPath('userData');
        // c:\users\<username>\appdata\roaming\vortex\temp
        case 'temp': return cachedAppPath('temp');
        // c:\users\<username>\appdata\roaming
        case 'appData': return cachedAppPath('appData');
        // c:\users\<username>\appdata\local
        case 'localAppData': return localAppData();
        // C:\Users\Tannin
        case 'home': return cachedAppPath('home');
        // C:\Users\Tannin\Documents
        case 'documents': return cachedAppPath('documents');
        // C:\Program Files\Black Tree Gaming Ltd\Vortex\Vortex.exe
        case 'exe': return cachedAppPath('exe');
        // C:\Users\Tannin\Desktop
        case 'desktop': return cachedAppPath('desktop');
        // C:\Program Files\Black Tree Gaming Ltd\Vortex\resources\app.asar
        case 'base': return basePath;
        // C:\Program Files\Black Tree Gaming Ltd\Vortex
        case 'application': return applicationPath;
        // C:\Program Files\Black Tree Gaming Ltd\Vortex\resources\app.asar
        case 'package': return getPackagePath(false);
        // C:\Program Files\Black Tree Gaming Ltd\Vortex\resources\app.asar.unpacked
        case 'package_unpacked': return getPackagePath(true);
        // C:\Program Files\Black Tree Gaming Ltd\Vortex\resources\app.asar\assets
        case 'assets': return getAssets(false);
        // C:\Program Files\Black Tree Gaming Ltd\Vortex\resources\app.asar.unpacked\assets
        case 'assets_unpacked': return getAssets(true);
        // C:\Program Files\Black Tree Gaming Ltd\Vortex\resources\app.asar\node_modules
        case 'modules': return getModulesPath(false);
        // C:\Program Files\Black Tree Gaming Ltd\Vortex\resources\app.asar.unpacked\node_modules
        case 'modules_unpacked': return getModulesPath(true);
        // C:\Program Files\Black Tree Gaming Ltd\Vortex\resources\app.asar.unpacked\bundledPlugins
        case 'bundledPlugins': return getBundledPluginsPath();
        // C:\Program Files\Black Tree Gaming Ltd\Vortex\resources\locales
        case 'locales': return getLocalesPath();
    }
}
exports.default = getVortexPath;
