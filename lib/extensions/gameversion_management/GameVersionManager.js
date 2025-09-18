"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomErrors_1 = require("../../util/CustomErrors");
const util_1 = require("../../util/util");
const log_1 = require("../../util/log");
const getGameVersion_1 = require("./util/getGameVersion");
class GameVersionManager {
    constructor(api, providers) {
        this.mApi = api;
        this.mProviders = providers;
    }
    getSupportedProvider(game, discovery) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const provider of this.mProviders) {
                const isSupported = yield provider.supported(game, discovery);
                if (isSupported) {
                    return Promise.resolve(provider);
                }
            }
        });
    }
    getGameVersion(game, discovery) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isGameValid(game, discovery)) {
                return Promise.reject(new CustomErrors_1.ProcessCanceled('Game is not discovered'));
            }
            const provider = yield this.getSupportedProvider(game, discovery);
            try {
                const version = yield provider.getGameVersion(game, discovery);
                return Promise.resolve(version);
            }
            catch (err) {
                // fallback
                (0, log_1.log)('warn', 'extension getGameVersion call failed', { message: err.message, stack: err.stack, extension: game.extensionPath });
                return (0, getGameVersion_1.getExecGameVersion)(game, discovery);
            }
        });
    }
    isGameValid(game, discovery) {
        var _a;
        return ((discovery === null || discovery === void 0 ? void 0 : discovery.path) !== undefined)
            && (0, util_1.truthy)((_a = game === null || game === void 0 ? void 0 : game.executable) === null || _a === void 0 ? void 0 : _a.call(game, discovery.path));
    }
}
exports.default = GameVersionManager;
