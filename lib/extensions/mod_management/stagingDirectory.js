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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STAGING_DIR_TAG = void 0;
exports.ensureStagingDirectory = ensureStagingDirectory;
const bluebird_1 = __importDefault(require("bluebird"));
const path = __importStar(require("path"));
const shortid_1 = require("shortid");
const application_1 = require("../../util/application");
const CustomErrors_1 = require("../../util/CustomErrors");
const fs = __importStar(require("../../util/fs"));
const lazyRequire_1 = __importDefault(require("../../util/lazyRequire"));
const log_1 = require("../../util/log");
const selectors_1 = require("../../util/selectors");
const storeHelper_1 = require("../../util/storeHelper");
const util_1 = require("../../util/util");
const discovery_1 = require("../gamemode_management/util/discovery");
const settings_1 = require("./actions/settings");
const activationStore_1 = require("./util/activationStore");
const getInstallPath_1 = require("./util/getInstallPath");
const winapi = (0, lazyRequire_1.default)(() => require('winapi-bindings'));
exports.STAGING_DIR_TAG = '__vortex_staging_folder';
function writeStagingTag(api, tagPath, gameId) {
    const state = api.store.getState();
    const data = {
        instance: state.app.instanceId,
        game: gameId,
    };
    return fs.writeFileAsync(tagPath, JSON.stringify(data), { encoding: 'utf8' });
}
function validateStagingTag(api, tagPath) {
    return fs.readFileAsync(tagPath, { encoding: 'utf8' })
        .then(data => {
        const state = api.store.getState();
        const tag = JSON.parse(data);
        if (tag.instance !== state.app.instanceId) {
            return api.showDialog('question', 'Confirm', {
                text: 'This is a staging folder but it appears to belong to a different Vortex '
                    + 'instance. If you\'re using Vortex in shared and "regular" mode, do not use '
                    + 'the same staging folder for both!',
            }, [
                { label: 'Cancel' },
                { label: 'Continue' },
            ])
                .then(result => (result.action === 'Cancel')
                ? bluebird_1.default.reject(new CustomErrors_1.UserCanceled())
                : bluebird_1.default.resolve());
        }
        return bluebird_1.default.resolve();
    })
        .catch(err => {
        if (err instanceof CustomErrors_1.UserCanceled) {
            return bluebird_1.default.reject(err);
        }
        return api.showDialog('question', 'Confirm', {
            text: 'This directory is not marked as a staging folder. '
                + 'Are you *sure* it\'s the right directory?',
        }, [
            { label: 'Cancel' },
            { label: 'I\'m sure' },
        ])
            .then(result => result.action === 'Cancel'
            ? bluebird_1.default.reject(new CustomErrors_1.UserCanceled())
            : bluebird_1.default.resolve());
    });
}
function queryStagingFolderInvalid(api, err, dirExists, instPath) {
    if (dirExists) {
        // dir exists but not tagged
        return api.showDialog('error', 'Mod Staging Folder invalid', {
            bbcode: 'Your mod staging folder "{{path}}" is not marked correctly. This may be ok '
                + 'if you\'ve updated from a very old version of Vortex and you can ignore this.<br/>'
                + '[b]However[/b], if you use a removable medium (network or USB drive) and that path '
                + 'does not actually point to your real staging folder, you [b]have[/b] '
                + 'to make sure the actual folder is available and tell Vortex where it is.',
            message: err.message,
            parameters: {
                path: instPath,
            },
        }, [
            { label: 'Quit Vortex' },
            { label: 'Ignore' },
            { label: 'Browse...' },
        ]);
    }
    return api.showDialog('error', 'Mod Staging Folder missing!', {
        text: 'Your mod staging folder "{{path}}" is missing. This might happen because you '
            + 'deleted it or - if you have it on a removable drive - it is not currently '
            + 'connected.\nIf you continue now, a new staging folder will be created but all '
            + 'your previously managed mods will be lost.\n\n'
            + 'If you have moved the folder or the drive letter changed, you can browse '
            + 'for the new location manually, but please be extra careful to select the right '
            + 'folder!',
        message: instPath,
        parameters: {
            path: instPath,
        },
    }, [
        { label: 'Quit Vortex' },
        { label: 'Reinitialize' },
        { label: 'Browse...' },
    ]);
}
function ensureStagingDirectoryImpl(api, instPath, gameId) {
    return __awaiter(this, void 0, void 0, function* () {
        const state = api.getState();
        if (gameId === undefined) {
            gameId = (0, selectors_1.activeGameId)(state);
        }
        if (instPath === undefined) {
            // no staging folder set yet
            if (state.settings.mods.installPathMode === 'suggested') {
                instPath = (0, getInstallPath_1.resolveInstallPath)(yield (0, discovery_1.suggestStagingPath)(api, gameId), gameId);
                api.store.dispatch((0, settings_1.setInstallPath)(gameId, instPath));
            }
            else {
                instPath = (0, selectors_1.installPathForGame)(state, gameId);
            }
        }
        let partitionExists = true;
        try {
            winapi.GetVolumePathName(instPath);
        }
        catch (err) {
            // On Windows, error number 2 (0x2) translates to ERROR_FILE_NOT_FOUND.
            //  the only way for this error to be reported at this point is when
            //  the destination path is pointing towards a non-existing partition.
            // If it's a non-existing partition, we want the reinitialization dialog
            //  to appear so that the user can re-configure his game's staging folder.
            if (err.systemCode === 2) {
                partitionExists = false;
            }
        }
        let dirExists = false;
        try {
            yield fs.statAsync(instPath);
            dirExists = true;
            // staging dir exists, does the tag exist?
            yield fs.statAsync(path.join(instPath, exports.STAGING_DIR_TAG));
        }
        catch (err) {
            const mods = (0, storeHelper_1.getSafe)(state, ['persistent', 'mods', gameId], undefined);
            if ((partitionExists === true) && (dirExists === false) && (mods === undefined)) {
                // If the mods state branch for this game is undefined - this must be the
                //  first time we manage this game - just create the staging path.
                //
                // This code should never be hit because the directory is created in
                // profile_management/index.ts as soon as we start managing the game for the
                // first time but we probably still don't want to report an error if we have
                // no meta information about any mods anyway
                yield fs.ensureDirWritableAsync(instPath, () => bluebird_1.default.resolve());
            }
            else {
                const dialogResult = yield queryStagingFolderInvalid(api, err, dirExists, instPath);
                if (dialogResult.action === 'Quit Vortex') {
                    (0, application_1.getApplication)().quit(0);
                    throw new CustomErrors_1.UserCanceled();
                }
                else if (dialogResult.action === 'Reinitialize') {
                    const id = (0, shortid_1.generate)();
                    api.sendNotification({
                        id,
                        type: 'activity',
                        message: 'Purging mods',
                    });
                    try {
                        yield (0, activationStore_1.fallbackPurge)(api, gameId);
                        yield fs.ensureDirWritableAsync(instPath, () => bluebird_1.default.resolve());
                    }
                    catch (purgeErr) {
                        if (!partitionExists) {
                            // Can't purge a non-existing partition!
                            throw new CustomErrors_1.ProcessCanceled('Invalid/Missing partition');
                        }
                        if (purgeErr instanceof CustomErrors_1.ProcessCanceled) {
                            (0, log_1.log)('warn', 'Mods not purged', purgeErr.message);
                        }
                        else {
                            api.showDialog('error', 'Mod Staging Folder missing!', {
                                bbcode: 'The staging folder could not be created. '
                                    + 'You [b][color=red]have[/color][/b] to go to settings->mods and change it '
                                    + 'to a valid directory [b][color=red]before doing anything else[/color][/b] '
                                    + 'or you will get further error messages.',
                            }, [
                                { label: 'Close' },
                            ]);
                        }
                        throw new CustomErrors_1.ProcessCanceled('Not purged');
                    }
                    api.dismissNotification(id);
                }
                else if (dialogResult.action === 'Ignore') {
                    // nop
                }
                else { // Browse...
                    const selectedPath = yield api.selectDir({
                        defaultPath: instPath,
                        title: api.translate('Select staging folder'),
                    });
                    if (!(0, util_1.truthy)(selectedPath)) {
                        return ensureStagingDirectoryImpl(api, instPath, gameId);
                    }
                    try {
                        yield validateStagingTag(api, path.join(selectedPath, exports.STAGING_DIR_TAG));
                        instPath = selectedPath;
                        api.store.dispatch((0, settings_1.setInstallPath)(gameId, instPath));
                    }
                    catch (validateErr) {
                        yield ensureStagingDirectory(api, instPath, gameId);
                    }
                }
            }
        }
        yield writeStagingTag(api, path.join(instPath, exports.STAGING_DIR_TAG), gameId);
        return instPath;
    });
}
function ensureStagingDirectory(api, instPath, gameId) {
    return bluebird_1.default.resolve(ensureStagingDirectoryImpl(api, instPath, gameId));
}
