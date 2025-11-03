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
exports.ONE_MONTH = exports.ONE_WEEK = exports.ONE_DAY = exports.ONE_MINUTE = void 0;
exports.fetchRecentUpdates = fetchRecentUpdates;
exports.checkModVersion = checkModVersion;
exports.findLatestUpdate = findLatestUpdate;
exports.retrieveModInfo = retrieveModInfo;
const log_1 = require("../../../util/log");
const storeHelper_1 = require("../../../util/storeHelper");
const util_1 = require("../../../util/util");
const convertGameId_1 = require("./convertGameId");
const selectors_1 = require("../../gamemode_management/selectors");
const mods_1 = require("../../mod_management/actions/mods");
const session_1 = require("../actions/session");
const nexus_api_1 = require("@nexusmods/nexus-api");
const bluebird_1 = __importDefault(require("bluebird"));
const path = __importStar(require("path"));
const semver = __importStar(require("semver"));
exports.ONE_MINUTE = 60 * 1000;
exports.ONE_DAY = 24 * 60 * exports.ONE_MINUTE;
exports.ONE_WEEK = 7 * exports.ONE_DAY;
exports.ONE_MONTH = 30 * exports.ONE_DAY;
const UPDATE_CHECK_TIMEOUT = 5 * exports.ONE_MINUTE;
/**
 * fetch a list of mods, updated within a certain time range
 *
 * @param {Redux.Store<any>} store
 * @param {NexusT} nexus
 * @param {string} gameId game to fetch for
 * @param {number} minAge timestamp of the least recently updated mod we're interested in
 * @returns {Promise<IUpdateEntry[]>}
 */
function fetchRecentUpdates(store, nexus, gameId, minAge) {
    const state = store.getState();
    const now = Date.now();
    const lastUpdate = (0, storeHelper_1.getSafe)(state, ['session', 'nexus', 'lastUpdate', gameId], {
        time: 0,
        range: 0,
        updateList: [],
    });
    const timeSinceUpdate = now - lastUpdate.time;
    if ((timeSinceUpdate < UPDATE_CHECK_TIMEOUT) && ((now - minAge) < lastUpdate.range)) {
        // don't fetch same or smaller range again within 5 minutes
        return bluebird_1.default.resolve((0, storeHelper_1.getSafe)(state, ['session', 'nexus', 'lastUpdate', gameId, 'updateList'], []));
    }
    else {
        (0, log_1.log)('debug', '[update check] lru', (new Date(minAge)).toISOString());
        // round elapsed time since minAge to day/week/month
        const period = (now - minAge) < exports.ONE_DAY
            ? '1d'
            : (now - minAge) < exports.ONE_WEEK
                ? '1w'
                : '1m';
        const range = {
            '1d': exports.ONE_DAY,
            '1w': exports.ONE_WEEK,
            '1m': exports.ONE_MONTH,
        }[period];
        (0, log_1.log)('debug', '[update check] using range', { gameId, period });
        return bluebird_1.default.resolve(nexus.getRecentlyUpdatedMods(period, (0, convertGameId_1.nexusGameId)((0, selectors_1.gameById)(state, gameId), gameId)))
            .then(recentUpdates => {
            // store 5 minutes ago for the time of the last update check, since
            // the list is cached and might be that outdated
            store.dispatch((0, session_1.setLastUpdateCheck)(gameId, now - 5 * exports.ONE_MINUTE, range, recentUpdates));
            return bluebird_1.default.resolve(recentUpdates);
        });
    }
}
/**
 * check if there is a newer mod version on the server
 *
 * @param {NexusT} nexus
 * @param {string} gameId
 * @param {string} modId
 * @param {number} newestFileId
 * @param {string} version
 * @param {number} uploadedTimestamp
 * @return {Promise<IFileInfo>}
 *
 */
function checkModVersion(store, nexus, gameMode, mod) {
    const nexusModId = parseInt((0, storeHelper_1.getSafe)(mod.attributes, ['modId'], undefined), 10);
    if (isNaN(nexusModId)) {
        return bluebird_1.default.resolve();
    }
    const gameId = (0, storeHelper_1.getSafe)(mod.attributes, ['downloadGame'], undefined) || gameMode;
    const game = (0, selectors_1.gameById)(store.getState(), gameId);
    const fallBackGameId = gameId === 'site'
        ? 'site' : gameId;
    return bluebird_1.default.resolve(nexus.getModFiles(nexusModId, (0, convertGameId_1.nexusGameId)(game, fallBackGameId)))
        .then(result => updateFileAttributes(store.dispatch, gameMode, mod, result))
        .tapCatch(err => {
        (0, log_1.log)('warn', 'dropping update info', { gameMode, id: mod.id, err: err.message });
        if ([403, 404].indexOf(err.statusCode) !== -1) {
            setNoUpdateAttributes(store.dispatch, gameMode, mod);
        }
    });
}
/**
 * based on file update information, find the newest version of the file
 * @param fileUpdates
 * @param fileId
 */
function findLatestUpdate(fileUpdates, updateChain, fileId) {
    const updatedFile = fileUpdates.find(file => file.old_file_id === fileId);
    return (updatedFile !== undefined)
        ? findLatestUpdate(fileUpdates, updateChain.concat([updatedFile]), updatedFile.new_file_id)
        : updateChain;
}
function update(dispatch, gameId, mod, attribute, newValue) {
    // previously this would only update the attribute if it was already
    // set on the mod. I just can't think of a good reason to do that any more
    dispatch((0, mods_1.setModAttribute)(gameId, mod.id, attribute, newValue));
}
function updateModAttributes(dispatch, gameId, mod, modInfo) {
    const actions = [];
    const disp = (action) => {
        actions.push(action);
        return action;
    };
    if (modInfo.endorsement !== undefined) {
        update(disp, gameId, mod, 'endorsed', modInfo.endorsement.endorse_status);
    }
    update(disp, gameId, mod, 'allowRating', modInfo.allow_rating);
    if ((0, storeHelper_1.getSafe)(mod.attributes, ['category'], undefined) === undefined) {
        update(disp, gameId, mod, 'category', modInfo.category_id);
    }
    update(disp, gameId, mod, 'shortDescription', modInfo.summary);
    update(disp, gameId, mod, 'description', modInfo.description);
    update(disp, gameId, mod, 'pictureUrl', modInfo.picture_url);
    update(disp, gameId, mod, 'author', modInfo.author);
    (0, util_1.batchDispatch)(dispatch, actions);
}
function updateLatestFileAttributes(dispatch, gameId, mod, file) {
    update(dispatch, gameId, mod, 'newestVersion', file.version);
    if (['OLD_VERSION', 'ARCHIVED'].includes(file.category_name) || !(0, util_1.truthy)(file.category_name)) {
        // file was removed from mod or is old, either way there should be a new version available
        // but we have no way of determining which it is.
        update(dispatch, gameId, mod, 'newestFileId', 'unknown');
    }
    else {
        update(dispatch, gameId, mod, 'newestFileId', file.file_id);
    }
}
function setNoUpdateAttributes(dispatch, gameId, mod) {
    update(dispatch, gameId, mod, 'newestVersion', undefined);
    update(dispatch, gameId, mod, 'newestFileId', undefined);
    update(dispatch, gameId, mod, 'lastUpdateTime', undefined);
}
function basename(input) {
    return path.basename(input, path.extname(input));
}
function noExt(input) {
    const dotIdx = input.indexOf('.');
    if (dotIdx !== -1) {
        return input.slice(0, dotIdx);
    }
    else {
        return input;
    }
}
function updateFileAttributes(dispatch, gameId, mod, files) {
    var _a;
    const { fileId, isPrimary } = (_a = mod.attributes) !== null && _a !== void 0 ? _a : {};
    if (fileId === undefined) {
        // mod.attributes.name may include a counter (.1, .2) at the end that would confuse
        // the following comparison against fileInfo.file_name so we're cutting off all extension.
        // This is under the assumption that nexus mods file names never include a dot.
        const candidate = files.files.find(fileInfo => {
            var _a, _b, _c;
            return (((_a = mod.attributes) === null || _a === void 0 ? void 0 : _a.fileName) !== undefined)
                ? (fileInfo.file_name === ((_b = mod.attributes) === null || _b === void 0 ? void 0 : _b.fileName))
                : (noExt(fileInfo.file_name) === noExt((_c = mod.attributes) === null || _c === void 0 ? void 0 : _c.name));
        });
        if (candidate !== undefined) {
            fileId === candidate.file_id;
            isPrimary === candidate.is_primary;
            dispatch((0, mods_1.setModAttribute)(gameId, mod.id, 'fileId', candidate.file_id));
            if ((0, storeHelper_1.getSafe)(mod.attributes, ['version'], undefined) === undefined) {
                dispatch((0, mods_1.setModAttribute)(gameId, mod.id, 'version', candidate.version));
            }
        }
    }
    const latestFileId = fileId;
    let fileUpdates = findLatestUpdate(files.file_updates, [], latestFileId);
    // at this point there is the possibility that the latest file in the update
    // chain has been deleted, so we have to traverse _back_ through the chain to
    // the latest file that actually exists
    const isFileDeleted = (candidateId) => {
        const fileInfo = files.files.find(info => info.file_id === candidateId);
        return (fileInfo === undefined) || [6, 7].includes(fileInfo.category_id);
    };
    while ((fileUpdates.length > 0)
        && isFileDeleted(fileUpdates[fileUpdates.length - 1].new_file_id)) {
        (0, log_1.log)('debug', 'update discarded because new version was deleted', {
            update: JSON.stringify(fileUpdates[fileUpdates.length - 1]),
        });
        fileUpdates.pop();
    }
    if (fileUpdates.length === 0) {
        // update not found through update-chain. If there is only a single file that
        // isn't marked as old we assume that is the right update.
        const notOld = files.files.filter(file => ![4, 6, 7].includes(file.category_id));
        if ((notOld.length === 1) && (notOld[0].file_id !== fileId)) {
            const fallbackUpdate = {
                old_file_id: fileId,
                old_file_name: (0, storeHelper_1.getSafe)(mod.attributes, ['logicalFileName'], undefined),
                new_file_id: notOld[0].file_id,
                new_file_name: notOld[0].file_name,
                uploaded_time: notOld[0].uploaded_time,
                uploaded_timestamp: notOld[0].uploaded_timestamp,
            };
            const potentialCandidates = files.file_updates.filter(up => !isFileDeleted(up.new_file_id) && up.old_file_id === fileId);
            // We can only resolve the latest update if there is only one candidate
            //  otherwise there's just no way for us to know which one is the latest
            //  since the mod author might be providing multiple main files.
            //
            // This is fine - the user will be told that there's a new update and that
            //  Vortex can't ascertain which file to download - the update column will
            //  link the user to the mod page so that the user can select the right update
            //  manually.
            const latestUpdate = (potentialCandidates.length === 1)
                ? findLatestUpdate(potentialCandidates, [], potentialCandidates[0].new_file_id) || [fallbackUpdate]
                : [fallbackUpdate];
            fileUpdates = latestUpdate;
        }
        else {
            // The only way we can find the correct update at this point is
            //  dependent on whether the installed mod is seen as the "primary" file
            if (isPrimary) {
                const primaryFile = notOld.find(file => file.is_primary);
                const potentialCandidates = files.file_updates.filter(up => !isFileDeleted(up.new_file_id) && up.old_file_id === (primaryFile === null || primaryFile === void 0 ? void 0 : primaryFile.file_id));
                if (potentialCandidates.length === 1) {
                    // There should be only one primary file at this point
                    fileUpdates = findLatestUpdate(potentialCandidates, [], potentialCandidates[0].new_file_id);
                }
            }
        }
    }
    // collect the changelogs of all the versions > currently installed and <= newest
    const changelog = fileUpdates
        .map(fileUpdate => {
        const file = files.files.find(iter => iter.file_id === fileUpdate.new_file_id);
        return file !== undefined ? file.changelog_html : undefined;
    })
        .filter(change => change !== undefined)
        .join('</br>');
    if (changelog.length > 0) {
        update(dispatch, gameId, mod, 'newestChangelog', { format: 'html', content: changelog });
    }
    else {
        update(dispatch, gameId, mod, 'newestChangelog', undefined);
    }
    let updatedFile = fileUpdates.length > 0
        ? files.files.find(file => file.file_id === fileUpdates[fileUpdates.length - 1].new_file_id)
        : files.files.find(file => file.file_id === fileId);
    if ((updatedFile === undefined) && (0, util_1.truthy)(mod.attributes.version)) {
        try {
            updatedFile = files.files.find(file => semver.eq(semver.coerce(file.mod_version), semver.coerce(mod.attributes.version)));
        }
        catch (err) {
            // nop
        }
    }
    if (updatedFile !== undefined) {
        updateLatestFileAttributes(dispatch, gameId, mod, updatedFile);
    }
    else {
        setNoUpdateAttributes(dispatch, gameId, mod);
    }
}
function errorFromNexus(err) {
    if (err.statusCode >= 500) {
        return new Error(`Internal server error (${err.statusCode}, ${err.request}):` + err.message);
    }
    else if (err.statusCode >= 400) {
        return new Error(`Not found (${err.statusCode}, ${err.request}): ` + err.message);
    }
    else {
        return new Error(`${err.message} (${err.statusCode}, ${err.request})`);
    }
}
function retrieveModInfo(nexus, api, gameMode, mod, t) {
    const store = api.store;
    const nexusModId = (0, storeHelper_1.getSafe)(mod.attributes, ['modId'], undefined);
    if ((nexusModId === undefined) || (nexusModId.length === 0)) {
        return bluebird_1.default.resolve();
    }
    const gameId = (0, storeHelper_1.getSafe)(mod.attributes, ['downloadGame'], gameMode);
    const nexusIdNum = parseInt(nexusModId, 10);
    // if the endorsement state is unknown, request it
    return bluebird_1.default.resolve(nexus.getModInfo(nexusIdNum, (0, convertGameId_1.nexusGameId)((0, selectors_1.gameById)(store.getState(), gameId))))
        .then((modInfo) => {
        if (modInfo !== undefined) {
            updateModAttributes(store.dispatch, gameMode, mod, modInfo);
        }
    })
        .catch(nexus_api_1.RateLimitError, err => {
        api.sendNotification({
            id: 'rate-limit-exceeded',
            type: 'warning',
            title: 'Rate-limit exceeded',
            message: 'You wont be able to use network features until the next full hour.',
        });
    })
        .catch((err) => {
        if (err.statusCode === 404) {
            return;
        }
        (0, log_1.log)('warn', 'An error occurred looking up a mod', {
            error: JSON.stringify(errorFromNexus(err)),
            gameId,
            modId: nexusModId,
        });
    });
}
