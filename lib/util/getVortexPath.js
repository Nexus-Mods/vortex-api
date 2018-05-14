"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
const app = electron_1.remote !== undefined ? electron_1.remote.app : electron_1.app;
/**
 * app.getAppPath() returns the path to the app.asar,
 * development: node_modules\electron\dist\resources\default_app.asar
 * production (with asar): Vortex\resources\app.asar
 * production (without asar): Vortex\resources\app
 */
let basePath = app.getAppPath();
const isDevelopment = path.basename(basePath, '.asar') !== 'app';
const isAsar = !isDevelopment && (path.extname(basePath) === '.asar');
const applicationPath = isDevelopment
    ? basePath
    : path.resolve(path.dirname(basePath), '..');
if (isDevelopment) {
    basePath = path.join(applicationPath, 'out');
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
function getPackagePath() {
    return isDevelopment
        ? applicationPath
        : basePath;
}
/**
 * the electron getAppPath function and globals like __dirname
 * or process.resourcesPath don't do a great job of abstracting away
 * how the application is being built, e.g. development or not, asar or not,
 * webpack or not, portable or not.
 * This function aims to provide paths to application data independent
 * of any of that.
 */
function getVortexPath(id) {
    switch (id) {
        case 'base': return basePath;
        case 'package': return getPackagePath();
        case 'assets': return getAssets(false);
        case 'assets_unpacked': return getAssets(true);
        case 'modules': return getModulesPath(false);
        case 'modules_unpacked': return getModulesPath(true);
        case 'bundledPlugins': return getBundledPluginsPath();
        case 'locales': return getLocalesPath();
    }
}
exports.default = getVortexPath;
