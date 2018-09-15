"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const Registry = require("winreg");
const fs = require("./fs");
const log_1 = require("./log");
const storeHelper_1 = require("./storeHelper");
const path = require("path");
const simple_vdf_1 = require("simple-vdf");
const {homedir} = require("os");
class GameNotFound extends Error {
    constructor(search) {
        super(`game not found: ${search}`);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}
exports.GameNotFound = GameNotFound;
/**
 * base class to interact with local steam installation
 *
 * @class Steam
 */
class Steam {
    constructor() {
        if (process.platform === 'win32') {
            // windows
            const regKey = new Registry({
                hive: Registry.HKCU,
                key: '\\Software\\Valve\\Steam',
            });
            this.mBaseFolder = new Promise((resolve, reject) => {
                try {
                    regKey.get('SteamPath', (err, result) => {
                        if (err !== null) {
                            // hrm, if we notify the user about this, users without Steam will be
                            // annoyed. If we don't, the lack of steam functionality may confuse
                            // those who do have it. Well, it's their own fault for breaking
                            // the registry keys really...
                            log_1.log('info', 'steam not found', { error: err.message });
                            resolve(undefined);
                        }
                        else if (result === null) {
                            log_1.log('info', 'steam not found');
                            resolve(undefined);
                        }
                        else {
                            resolve(result.value);
                        }
                    });
                }
                catch (err) {
                    log_1.log('warn', 'steam not found', { error: err.message });
                    resolve(undefined);
                }
            });
        }
        else {
            this.mBaseFolder = Promise.resolve(path.resolve(homedir(), '.steam', 'steam'));
        }
    }
    /**
     * find the first game that matches the specified name pattern
     */
    findByName(namePattern) {
        const re = new RegExp(namePattern);
        return this.allGames()
            .then(entries => entries.find(entry => re.test(entry.name)))
            .then(entry => {
            if (entry === undefined) {
                return Promise.reject(new Steam.GameNotFound(namePattern));
            }
            else {
                return Promise.resolve(entry);
            }
        });
    }
    /**
     * find the first game with the specified appid or one of the specified appids
     */
    findByAppId(appId) {
        // support searching for one app id or one out of a list (when there are multiple
        // variants of a game)
        const matcher = Array.isArray(appId)
            ? entry => appId.indexOf(entry.appid) !== -1
            : entry => entry.appid === appId;
        return this.allGames()
            .then(entries => entries.find(matcher))
            .then(entry => {
            if (entry === undefined) {
                return Promise.reject(new GameNotFound(Array.isArray(appId) ? appId.join(', ') : appId));
            }
            else {
                return Promise.resolve(entry);
            }
        });
    }
    allGames() {
        if (this.mCache !== undefined) {
            return Promise.resolve(this.mCache);
        }
        return this.parseManifests().tap(entries => { this.mCache = entries; });
    }
    parseManifests() {
        const steamPaths = [];
        return this.mBaseFolder
            .then((basePath) => {
            if (basePath === undefined) {
                return Promise.resolve(undefined);
            }
            steamPaths.push(basePath);
            return fs.readFileAsync(path.resolve(basePath, 'config', 'config.vdf'));
        })
            .then((data) => {
            if (data === undefined) {
                return Promise.resolve([]);
            }
            const configObj = simple_vdf_1.parse(data.toString());
            let counter = 1;
            const steamObj = storeHelper_1.getSafeCI(configObj, ['InstallConfigStore', 'Software', 'Valve', 'Steam'], {});
            while (steamObj.hasOwnProperty(`BaseInstallFolder_${counter}`)) {
                steamPaths.push(steamObj[`BaseInstallFolder_${counter}`]);
                ++counter;
            }
            return Promise.all(Promise.map(steamPaths, steamPath => {
                const steamAppsPath = path.join(steamPath, 'steamapps');
                return fs.readdirAsync(steamAppsPath)
                    .then(names => {
                    const filtered = names.filter(name => name.startsWith('appmanifest_') && (path.extname(name) === '.acf'));
                    return Promise.map(filtered, (name) => fs.readFileAsync(path.join(steamAppsPath, name)));
                })
                    .then((appsData) => {
                    return appsData.map(appData => simple_vdf_1.parse(appData.toString())).map(obj => ({
                        appid: obj['AppState']['appid'],
                        name: obj['AppState']['name'],
                        gamePath: path.join(steamAppsPath, 'common', obj['AppState']['installdir']),
                        lastUpdated: new Date(obj['AppState']['LastUpdated'] * 1000),
                    }));
                });
            }));
        })
            .then((games) => games.reduce((prev, current) => prev.concat(current)));
    }
}
Steam.GameNotFound = GameNotFound;
const instance = new Steam();
exports.default = instance;
