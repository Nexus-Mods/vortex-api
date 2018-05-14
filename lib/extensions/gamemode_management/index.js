"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_1 = require("../../actions/notifications");
const CustomErrors_1 = require("../../util/CustomErrors");
const fs = require("../../util/fs");
const LazyComponent_1 = require("../../util/LazyComponent");
const local_1 = require("../../util/local");
const log_1 = require("../../util/log");
const message_1 = require("../../util/message");
const ReduxProp_1 = require("../../util/ReduxProp");
const selectors_1 = require("../../util/selectors");
const storeHelper_1 = require("../../util/storeHelper");
const settings_1 = require("../profile_management/actions/settings");
const persistent_1 = require("./actions/persistent");
const settings_2 = require("./actions/settings");
const discovery_1 = require("./reducers/discovery");
const persistent_2 = require("./reducers/persistent");
const session_1 = require("./reducers/session");
const settings_3 = require("./reducers/settings");
const queryGameInfo_1 = require("./util/queryGameInfo");
const HideGameIcon_1 = require("./views/HideGameIcon");
const ProgressFooter_1 = require("./views/ProgressFooter");
const RecentlyManagedDashlet_1 = require("./views/RecentlyManagedDashlet");
const selectors_2 = require("./selectors");
const Promise = require("bluebird");
const electron_1 = require("electron");
const path = require("path");
const extensionGames = [];
const modTypeExtensions = [];
// "decorate" IGame objects with added functionality
const gameExHandler = {
    get: (target, key) => {
        if (key === 'getModPaths') {
            const applicableExtensions = modTypeExtensions.filter(ex => ex.isSupported(target.id));
            const extTypes = applicableExtensions.reduce((prev, val) => {
                prev[val.typeId] = val.getPath(target);
                return prev;
            }, {});
            return gamePath => {
                let defaultPath = target.queryModPath(gamePath);
                if (defaultPath === undefined) {
                    defaultPath = '.';
                }
                if (!path.isAbsolute(defaultPath)) {
                    defaultPath = path.resolve(gamePath, defaultPath);
                }
                return Object.assign({}, extTypes, { '': defaultPath });
            };
        }
        else if (key === 'modTypes') {
            const applicableExtensions = modTypeExtensions.filter(ex => ex.isSupported(target.id));
            return applicableExtensions;
        }
        else {
            return target[key];
        }
    },
};
function makeGameProxy(game) {
    if (game === undefined) {
        return undefined;
    }
    return new Proxy(game, gameExHandler);
}
// this isn't nice...
const $ = local_1.default('gamemode-management', {
    gameModeManager: undefined,
});
// ...neither is this
function getGames() {
    if ($.gameModeManager === undefined) {
        throw new Error('getGames only available in renderer process');
    }
    return $.gameModeManager.games.map(makeGameProxy);
}
exports.getGames = getGames;
function getGame(gameId) {
    if ($.gameModeManager === undefined) {
        throw new Error('getGame only available in renderer process');
    }
    return makeGameProxy($.gameModeManager.games.find(iter => iter.id === gameId));
}
exports.getGame = getGame;
const gameInfoProviders = [];
function refreshGameInfo(store, gameId) {
    // determine a dictionary of which keys we should have for the game
    const expectedKeys = gameInfoProviders.reduce((prev, value) => {
        value.keys.forEach(key => {
            if ((prev[key] === undefined) || (prev[key].priority < value.priority)) {
                prev[key] = {
                    priority: value.priority,
                    provider: value.id,
                };
            }
        });
        return prev;
    }, {});
    const gameInfo = store.getState().persistent.gameMode.gameInfo[gameId] || {};
    const now = new Date().getTime();
    // find keys we need to update and which providers we have to query for that
    const missingKeys = Object.keys(expectedKeys).filter(key => (gameInfo[key] === undefined) || (gameInfo[key].expires < now));
    const providersToQuery = Array.from(new Set(missingKeys.map(key => gameInfoProviders.find(prov => prov.id === expectedKeys[key].provider))));
    // do the queries
    const game = store.getState().session.gameMode.known.find(iter => iter.id === gameId);
    const gameDiscovery = store.getState().settings.gameMode.discovered[gameId];
    const filterResult = (key, provider) => {
        if (expectedKeys[key] !== undefined) {
            return storeHelper_1.getSafe(expectedKeys, [key, 'provider'], undefined) === provider.id;
        }
        else {
            // for unexpected keys, use the result if the key wasn't provided before or
            // if this provider has higher priority
            const provId = storeHelper_1.getSafe(gameInfo, [key, 'provider'], provider.id);
            const previousProvider = gameInfoProviders.find(prov => prov.id === provId);
            return previousProvider.priority <= provider.priority;
        }
    };
    return Promise.map(providersToQuery, prov => {
        const expires = now + prov.expireMS;
        return prov.query(Object.assign({}, game, gameDiscovery)).then(details => {
            const receivedKeys = Object.keys(details);
            const values = receivedKeys
                // TODO: this filters out "optional" info keys that
                // weren't expected
                .filter(key => filterResult(key, prov))
                .map(key => ({
                key,
                title: details[key].title,
                value: details[key].value,
                type: details[key].type,
            }));
            prov.keys.forEach(key => {
                if (receivedKeys.indexOf(key) === -1) {
                    values.push({ key, title: 'Unknown', value: null, type: undefined });
                }
            });
            if (values.length > 0) {
                store.dispatch(persistent_1.setGameInfo(gameId, prov.id, expires, values));
            }
        });
    })
        .then(() => undefined);
}
function verifyGamePath(game, gamePath) {
    return Promise.map(game.requiredFiles || [], file => fs.statAsync(path.join(gamePath, file)))
        .then(() => undefined);
}
function transformModPaths(basePath, input) {
    return Object.keys(input).reduce((prev, type) => {
        if (input[type] !== undefined) {
            prev[type] = (path.isAbsolute(input[type]))
                ? input[type]
                : path.resolve(basePath, input[type]);
        }
        return prev;
    }, {});
}
function browseGameLocation(api, gameId) {
    const state = api.store.getState();
    const game = $.gameModeManager.games.find(iter => iter.id === gameId);
    const discovery = state.settings.gameMode.discovered[gameId];
    return new Promise((resolve, reject) => {
        if (discovery !== undefined) {
            electron_1.remote.dialog.showOpenDialog(electron_1.remote.getCurrentWindow(), {
                properties: ['openDirectory'],
                defaultPath: discovery.path,
            }, (fileNames) => {
                if (fileNames !== undefined) {
                    verifyGamePath(game, fileNames[0])
                        .then(() => {
                        api.store.dispatch(settings_2.setGamePath(game.id, fileNames[0]));
                        resolve();
                    })
                        .catch(err => {
                        api.store.dispatch(notifications_1.showDialog('error', 'Game not found', {
                            message: api.translate('This directory doesn\'t appear to contain the game. '
                                + 'Expected to find these files: {{ files }}', { replace: { files: game.requiredFiles.join(', ') } }),
                        }, [
                            { label: 'Cancel', action: () => resolve() },
                            { label: 'Try Again',
                                action: () => browseGameLocation(api, gameId).then(() => resolve()) },
                        ]));
                    });
                }
                else {
                    resolve();
                }
            });
        }
        else {
            electron_1.remote.dialog.showOpenDialog(electron_1.remote.getCurrentWindow(), {
                properties: ['openDirectory'],
            }, (fileNames) => {
                if (fileNames !== undefined) {
                    verifyGamePath(game, fileNames[0])
                        .then(() => {
                        api.store.dispatch(settings_2.addDiscoveredGame(game.id, {
                            path: fileNames[0],
                            tools: {},
                            hidden: false,
                            environment: game.environment,
                        }));
                        resolve();
                    })
                        .catch(err => {
                        api.store.dispatch(notifications_1.showDialog('error', 'Game not found', {
                            message: api.translate('This directory doesn\'t appear to contain the game. '
                                + 'Expected to find these files: {{ files }}', { replace: { files: game.requiredFiles.join(', ') } }),
                        }, [
                            { label: 'Cancel', action: () => resolve() },
                            { label: 'Try Again',
                                action: () => browseGameLocation(api, gameId).then(() => resolve()) },
                        ]));
                    });
                }
                else {
                    resolve();
                }
            });
        }
    });
}
function removeDisapearedGames(api) {
    const state = api.store.getState();
    const discovered = state.settings.gameMode.discovered;
    const known = state.session.gameMode.known;
    return Promise.map(Object.keys(discovered).filter(gameId => discovered[gameId].path !== undefined), gameId => {
        const stored = known.find(iter => iter.id === gameId);
        return stored === undefined
            ? Promise.resolve()
            : Promise.map(stored.requiredFiles, file => fs.statAsync(path.join(discovered[gameId].path, file)))
                .then(() => undefined)
                .catch(err => {
                api.sendNotification({
                    type: 'info',
                    message: api.translate('{{gameName}} no longer found', { replace: { gameName: stored.name } }),
                });
                api.store.dispatch(settings_2.setGamePath(gameId, undefined));
            });
    }).then(() => undefined);
}
function resetSearchPaths(api) {
    const store = api.store;
    store.dispatch(settings_2.clearSearchPaths());
    const { list } = require('drivelist');
    list((error, disks) => {
        if (error) {
            api.showErrorNotification('Failed to determine list of disk drives. ' +
                'Please review the settings before scanning for games.', error, { allowReport: false });
            store.dispatch(settings_2.addSearchPath('C:'));
            return;
        }
        for (const disk of disks.sort()) {
            // note: isRemovable is set correctly on windows, on MacOS (and presumably linux)
            // it will, as of this writing, be null. The isSystem flag should suffice as a
            // filter though.
            if (disk.isSystem && !disk.isRemovable) {
                if (disk.mountpoints) {
                    disk.mountpoints.forEach(mp => { store.dispatch(settings_2.addSearchPath(mp.path)); });
                }
                else {
                    store.dispatch(settings_2.addSearchPath(disk.mountpoint));
                }
            }
        }
    });
}
function init(context) {
    const activity = new ReduxProp_1.default(context.api, [
        ['session', 'discovery'],
    ], (discovery) => discovery.running);
    context.registerMainPage('game', 'Games', LazyComponent_1.default(() => require('./views/GamePicker')), {
        hotkey: 'G',
        group: 'global',
        props: () => ({
            onRefreshGameInfo: (gameId) => refreshGameInfo(context.api.store, gameId),
            onBrowseGameLocation: (gameId) => browseGameLocation(context.api, gameId),
        }),
        activity,
    });
    context.registerSettings('Games', LazyComponent_1.default(() => require('./views/Settings')), () => ({
        onResetSearchPaths: () => resetSearchPaths(context.api),
    }));
    context.registerReducer(['session', 'discovery'], discovery_1.discoveryReducer);
    context.registerReducer(['session', 'gameMode'], session_1.sessionReducer);
    context.registerReducer(['settings', 'gameMode'], settings_3.settingsReducer);
    context.registerReducer(['persistent', 'gameMode'], persistent_2.persistentReducer);
    context.registerFooter('discovery-progress', ProgressFooter_1.default);
    context.registerGame = (game, extensionPath) => {
        game.extensionPath = extensionPath;
        extensionGames.push(game);
    };
    context.registerGameInfoProvider =
        (id, priority, expireMS, keys, query) => {
            gameInfoProviders.push({ id, priority, expireMS, keys, query });
        };
    context.registerModType = (id, priority, isSupported, getPath, test) => {
        modTypeExtensions.push({
            typeId: id,
            priority,
            isSupported,
            getPath,
            test,
        });
    };
    context.registerGameInfoProvider('game-path', 0, 1000, ['path'], (game) => (game.path === undefined)
        ? Promise.resolve({})
        : Promise.resolve({
            path: { title: 'Path', value: path.normalize(game.path), type: 'url' },
        }));
    context.registerGameInfoProvider('main', 0, 86400000, ['size', 'size_nolinks'], queryGameInfo_1.default);
    const openGameFolder = (instanceIds) => {
        const discoveredGames = context.api.store.getState().settings.gameMode.discovered;
        const gamePath = storeHelper_1.getSafe(discoveredGames, [instanceIds[0], 'path'], undefined);
        if (gamePath !== undefined) {
            electron_1.shell.openItem(gamePath);
        }
    };
    const openModFolder = (instanceIds) => {
        const discoveredGames = context.api.store.getState().settings.gameMode.discovered;
        const discovered = storeHelper_1.getSafe(discoveredGames, [instanceIds[0]], undefined);
        if (discovered !== undefined) {
            electron_1.shell.openItem(getGame(instanceIds[0]).getModPaths(discovered.path)['']);
        }
    };
    context.registerAction('game-icons', 100, 'refresh', {}, 'Quickscan', () => {
        if ($.gameModeManager !== undefined) {
            $.gameModeManager.startQuickDiscovery()
                .then((gameIds) => {
                const state = context.api.store.getState();
                const knownGames = state.session.gameMode.known;
                const message = gameIds.length === 0
                    ? 'No new games found'
                    : gameIds.map(id => '- ' + knownGames.find(iter => iter.id === id).name).join('\n');
                removeDisapearedGames(context.api);
                context.api.sendNotification({
                    type: 'success',
                    message: 'Discovery completed\n' + message,
                });
            });
        }
    });
    context.registerAction('game-managed-buttons', 100, HideGameIcon_1.default, {});
    context.registerAction('game-discovered-buttons', 100, HideGameIcon_1.default, {});
    context.registerAction('game-undiscovered-buttons', 100, HideGameIcon_1.default, {});
    context.registerAction('game-managed-buttons', 105, 'open-ext', {}, context.api.translate('Open Game Folder'), openGameFolder);
    context.registerAction('game-discovered-buttons', 105, 'open-ext', {}, context.api.translate('Open Game Folder'), openGameFolder);
    context.registerAction('game-managed-buttons', 110, 'open-ext', {}, context.api.translate('Open Mod Folder'), openModFolder);
    context.registerAction('game-discovered-buttons', 110, 'open-ext', {}, context.api.translate('Open Mod Folder'), openModFolder);
    context.registerAction('game-managed-buttons', 120, 'browse', {}, context.api.translate('Manually Set Location'), (instanceIds) => { browseGameLocation(context.api, instanceIds[0]); });
    context.registerAction('game-discovered-buttons', 120, 'browse', {}, context.api.translate('Manually Set Location'), (instanceIds) => { browseGameLocation(context.api, instanceIds[0]); });
    context.registerAction('game-undiscovered-buttons', 50, 'browse', {}, context.api.translate('Manually Set Location'), (instanceIds) => { browseGameLocation(context.api, instanceIds[0]); });
    context.registerDashlet('Recently Managed', 2, 2, 175, RecentlyManagedDashlet_1.default, undefined, undefined, undefined);
    context.once(() => {
        const store = context.api.store;
        const events = context.api.events;
        const GameModeManagerImpl = require('./GameModeManager').default;
        $.gameModeManager = new GameModeManagerImpl(context.api.getPath('userData'), extensionGames, (gameMode) => {
            events.emit('gamemode-activated', gameMode);
        });
        $.gameModeManager.attachToStore(store);
        $.gameModeManager.startQuickDiscovery()
            .then(() => {
            removeDisapearedGames(context.api);
        });
        events.on('start-discovery', () => $.gameModeManager.startSearchDiscovery());
        events.on('cancel-discovery', () => {
            log_1.log('info', 'received cancel discovery');
            $.gameModeManager.stopSearchDiscovery();
        });
        events.on('refresh-game-info', (gameId, callback) => {
            refreshGameInfo(store, gameId)
                .then(() => callback(null))
                .catch(err => callback(err));
        });
        let { searchPaths } = store.getState().settings.gameMode;
        if ((searchPaths !== undefined) && Array.isArray(searchPaths[0])) {
            store.dispatch(settings_2.clearSearchPaths());
            searchPaths = undefined;
        }
        if (searchPaths === undefined) {
            resetSearchPaths(context.api);
        }
        const changeGameMode = (oldGameId, newGameId, oldProfileId) => {
            if (newGameId === undefined) {
                return Promise.resolve();
            }
            return $.gameModeManager.setupGameMode(newGameId)
                .then(() => $.gameModeManager.setGameMode(oldGameId, newGameId))
                .catch((err) => {
                if (err instanceof CustomErrors_1.UserCanceled) {
                    // nop
                }
                else if ((err instanceof CustomErrors_1.ProcessCanceled)
                    || (err instanceof CustomErrors_1.SetupError)) {
                    message_1.showError(store.dispatch, 'Failed to set game mode', err.message, { allowReport: false });
                }
                else {
                    message_1.showError(store.dispatch, 'Failed to set game mode', err);
                }
                // unset profile
                store.dispatch(settings_1.setNextProfile(undefined));
            });
        };
        context.api.onStateChange(['settings', 'profiles', 'activeProfileId'], (prev, current) => {
            const state = store.getState();
            const oldGameId = storeHelper_1.getSafe(state, ['persistent', 'profiles', prev, 'gameId'], undefined);
            const newGameId = storeHelper_1.getSafe(state, ['persistent', 'profiles', current, 'gameId'], undefined);
            log_1.log('debug', 'active profile id changed', { prev, current, oldGameId, newGameId });
            const prom = (oldGameId !== newGameId)
                ? changeGameMode(oldGameId, newGameId, prev)
                : Promise.resolve();
            prom.then(() => {
                const game = Object.assign({}, selectors_2.currentGame(state), selectors_2.currentGameDiscovery(state));
                if ((oldGameId !== newGameId)
                    && (game.name !== undefined)) {
                    const t = context.api.translate;
                    context.api.sendNotification({
                        type: 'info',
                        message: 'Switched game mode: {{mode}}',
                        replace: {
                            mode: game.name,
                        },
                        displayMS: 4000,
                    });
                }
                return null;
            });
        });
        changeGameMode(undefined, selectors_1.activeGameId(store.getState()), undefined)
            .then(() => null);
    });
    return true;
}
exports.default = init;
