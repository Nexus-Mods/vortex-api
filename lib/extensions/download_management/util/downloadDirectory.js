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
exports.DOWNLOADS_DIR_TAG = void 0;
exports.writeDownloadsTag = writeDownloadsTag;
exports.ensureDownloadsDirectory = ensureDownloadsDirectory;
const bluebird_1 = __importDefault(require("bluebird"));
const path = __importStar(require("path"));
const shortid_1 = require("shortid");
const application_1 = require("../../../util/application");
const CustomErrors_1 = require("../../../util/CustomErrors");
const fs = __importStar(require("../../../util/fs"));
const util_1 = require("../../../util/util");
const settings_1 = require("../actions/settings");
const state_1 = require("../actions/state");
const getDownloadPath_1 = __importDefault(require("./getDownloadPath"));
exports.DOWNLOADS_DIR_TAG = '__vortex_downloads_folder';
function writeDownloadsTag(api, tagPath) {
    const state = api.store.getState();
    const data = {
        instance: state.app.instanceId,
    };
    const writeTag = () => fs.writeFileAsync(path.join(tagPath, exports.DOWNLOADS_DIR_TAG), JSON.stringify(data), { encoding: 'utf8' });
    return writeTag()
        .catch({ code: 'EISDIR' }, err => {
        // __vortex_downloads_folder exists inside the tag path. (as a folder!)
        //  It's possible the user tried to create it manually in an attempt
        //  to fix some other error, but it's also possible that this is actually
        //  a bug somewhere in the application. We're going to try to re-create the
        //  tag.
        return api.showDialog('question', 'Reinitialize Tag', {
            text: 'Vortex expected the below filepath to lead to a file but found '
                + 'a directory instead - Vortex can try to re-initialize this file for you, '
                + 'but we suggest you manually ensure it doesn\'t contain any files you may '
                + 'need before proceeding.',
            message: path.join(tagPath, exports.DOWNLOADS_DIR_TAG),
        }, [
            { label: 'Cancel' },
            { label: 'Proceed' },
        ]).then(res => (res.action === 'Proceed')
            ? fs.removeAsync(path.join(tagPath, exports.DOWNLOADS_DIR_TAG))
            : bluebird_1.default.reject(err))
            .catch({ code: 'ENOENT' }, remErr => bluebird_1.default.resolve())
            .then(() => writeTag())
            .catch(innerErr => bluebird_1.default.reject(err));
    });
}
function removeDownloadsMetadata(api) {
    const state = api.store.getState();
    const downloads = state.persistent.downloads.files;
    return bluebird_1.default.each(Object.keys(downloads), dlId => {
        api.store.dispatch((0, state_1.removeDownload)(dlId));
        return bluebird_1.default.resolve();
    }).then(() => bluebird_1.default.resolve());
}
function queryDownloadFolderInvalid(api, err, dirExists, currentDownloadPath) {
    if (dirExists) {
        // dir exists but not tagged
        return api.showDialog('error', 'Downloads Folder invalid', {
            bbcode: 'Your downloads folder "{{path}}" is not marked correctly. This may be ok '
                + 'if you\'ve updated from a very old version of Vortex and you can ignore this.<br/>'
                + '[b]However[/b], if you use a removable medium (network or USB drive) and that path '
                + 'does not actually point to your real Vortex download folder, you [b]have[/b] '
                + 'to make sure the actual folder is available and tell Vortex where it is.',
            message: err.message,
            parameters: {
                path: currentDownloadPath,
            },
        }, [
            { label: 'Quit Vortex' },
            { label: 'Ignore' },
            { label: 'Browse...' },
        ]);
    }
    return api.showDialog('error', ' Downloads Folder missing!', {
        text: 'Your downloads folder "{{path}}" is missing. This might happen because you '
            + 'deleted it or - if you have it on a removable drive - it is not currently '
            + 'connected.\nIf you continue now, a new downloads folder will be created but all '
            + 'your previous mod archives will be lost.\n\n'
            + 'If you have moved the folder or the drive letter changed, you can browse '
            + 'for the new location manually, but please be extra careful to select the right '
            + 'folder!',
        message: err.message,
        parameters: {
            path: currentDownloadPath,
        },
    }, [
        { label: 'Quit Vortex' },
        { label: 'Reinitialize' },
        { label: 'Browse...' },
    ]);
}
function validateDownloadsTag(api, tagPath) {
    return fs.readFileAsync(tagPath, { encoding: 'utf8' })
        .then(data => {
        const state = api.store.getState();
        const tag = JSON.parse(data);
        if (tag.instance !== state.app.instanceId) {
            return api.showDialog('question', 'Confirm', {
                text: 'This is a downloads folder but it appears to belong to a different Vortex '
                    + 'instance. If you\'re using Vortex in shared and "regular" mode, do not use '
                    + 'the same downloads folder for both!',
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
        .catch(() => {
        return api.showDialog('question', 'Confirm', {
            text: 'This directory is not marked as a downloads folder. '
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
function ensureDownloadsDirectory(api) {
    const state = api.getState();
    let currentDownloadPath = (0, getDownloadPath_1.default)(state.settings.downloads.path);
    let dirExists = false;
    return fs.statAsync(currentDownloadPath)
        .then(() => {
        dirExists = true;
        // download dir exists, does the tag exist?
        return fs.statAsync(path.join(currentDownloadPath, exports.DOWNLOADS_DIR_TAG));
    })
        .catch(err => {
        var _a;
        if (!dirExists
            && (Object.keys((_a = state.persistent.downloads.files) !== null && _a !== void 0 ? _a : {}).length === 0)) {
            return fs.ensureDirWritableAsync(currentDownloadPath, () => bluebird_1.default.resolve())
                .catch({ code: 'ENOENT' }, () => {
                // user has no downloads yet so no point asking them for the location but
                // the current one is invalid so we reset
                api.store.dispatch((0, settings_1.setDownloadPath)(''));
                currentDownloadPath = (0, getDownloadPath_1.default)(api.getState().settings.downloads.path);
                return fs.ensureDirWritableAsync(currentDownloadPath, () => bluebird_1.default.resolve())
                    .then(() => ensureDownloadsDirectory(api))
                    .then(() => api.sendNotification({
                    type: 'info',
                    message: 'Your download directory was misconfigured and got reset.',
                }));
            });
        }
        return queryDownloadFolderInvalid(api, err, dirExists, currentDownloadPath)
            .then(result => {
            if (result.action === 'Quit Vortex') {
                (0, application_1.getApplication)().quit(0);
                return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
            }
            else if (result.action === 'Reinitialize') {
                const id = (0, shortid_1.generate)();
                api.sendNotification({
                    id,
                    type: 'activity',
                    message: 'Cleaning downloads metadata',
                });
                return removeDownloadsMetadata(api)
                    .then(() => fs.ensureDirWritableAsync(currentDownloadPath, () => bluebird_1.default.resolve()))
                    .catch(() => {
                    api.showDialog('error', 'Downloads Folder missing!', {
                        bbcode: 'The downloads folder could not be created. '
                            + 'You [b][color=red]have[/color][/b] to go to settings->downloads and '
                            + 'change it to a valid directory [b][color=red]before doing anything '
                            + 'else[/color][/b] or you will get further error messages.',
                    }, [
                        { label: 'Close' },
                    ]);
                    return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('Failed to reinitialize download directory'));
                })
                    .finally(() => {
                    api.dismissNotification(id);
                });
            }
            else if (result.action === 'Ignore') {
                return bluebird_1.default.resolve();
            }
            else { // Browse...
                return api.selectDir({
                    defaultPath: currentDownloadPath,
                    title: api.translate('Select downloads folder'),
                }).then((selectedPath) => {
                    if (!(0, util_1.truthy)(selectedPath)) {
                        return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
                    }
                    return validateDownloadsTag(api, path.join(selectedPath, exports.DOWNLOADS_DIR_TAG))
                        .then(() => {
                        currentDownloadPath = selectedPath;
                        api.store.dispatch((0, settings_1.setDownloadPath)(currentDownloadPath));
                        return bluebird_1.default.resolve();
                    });
                })
                    .catch(() => ensureDownloadsDirectory(api));
            }
        });
    })
        .then(() => writeDownloadsTag(api, currentDownloadPath));
}
