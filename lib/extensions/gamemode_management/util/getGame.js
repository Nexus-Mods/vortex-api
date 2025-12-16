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
exports.getGames = getGames;
exports.getGame = getGame;
exports.getGameStores = getGameStores;
exports.getGameStore = getGameStore;
const local_1 = __importDefault(require("../../../util/local"));
const modTypeExtensions_1 = require("./modTypeExtensions");
const path = __importStar(require("path"));
// "decorate" IGame objects with added functionality
const gameExHandler = {
    get: (target, key) => {
        if (key === "getModPaths") {
            const applicableExtensions = (0, modTypeExtensions_1.getModTypeExtensions)().filter((ex) => ex.isSupported(target.id));
            const extTypes = applicableExtensions.reduce((prev, val) => {
                const typePath = val.getPath(target);
                if (typePath !== undefined) {
                    prev[val.typeId] = typePath;
                }
                return prev;
            }, {});
            return (gamePath) => {
                let defaultPath = target.queryModPath(gamePath);
                if (!defaultPath) {
                    defaultPath = ".";
                }
                if (!path.isAbsolute(defaultPath)) {
                    defaultPath = path.resolve(gamePath, defaultPath);
                }
                return Object.assign(Object.assign({}, extTypes), { "": defaultPath });
            };
        }
        else if (key === "modTypes") {
            return (0, modTypeExtensions_1.getModTypeExtensions)().filter((ex) => ex.isSupported(target.id));
        }
        else if (key === "getInstalledVersion") {
            return (discovery) => gvm.gameVersionManager.getGameVersion(target, discovery);
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
const $ = (0, local_1.default)("gamemode-management", {
    gameModeManager: undefined,
    extensionGames: [],
    extensionStubs: [],
});
// ...neither is this
const gvm = (0, local_1.default)("gameversion-manager", {
    gameVersionManager: undefined,
});
// ...or this
function getGames() {
    if ($.gameModeManager === undefined) {
        throw new Error("getGames only available in renderer process");
    }
    return $.gameModeManager.games.map(makeGameProxy);
}
function getGame(gameId) {
    let game = $.extensionGames.find((iter) => iter.id === gameId);
    if (game === undefined) {
        const stub = $.extensionStubs.find((iter) => iter.game.id === gameId);
        if (stub !== undefined) {
            game = stub.game;
        }
    }
    return makeGameProxy(game);
}
function getGameStores() {
    if ($.gameModeManager === undefined) {
        throw new Error("getGameStores only available in renderer process");
    }
    return $.gameModeManager.gameStores || [];
}
function getGameStore(id) {
    return $.gameModeManager.gameStores.find((store) => store.id === id);
}
