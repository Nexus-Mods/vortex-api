"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("../../../util/fs");
const log_1 = require("../../../util/log");
const storeHelper_1 = require("../../../util/storeHelper");
const util_1 = require("../../../util/util");
const getNormalizeFunc_1 = require("../../../util/getNormalizeFunc");
const Progress_1 = require("./Progress");
const Promise = require("bluebird");
const path = require("path");
const turbowalk_1 = require("turbowalk");
function quickDiscoveryTools(tools, onDiscoveredTool) {
    if (tools === undefined) {
        return;
    }
    for (const tool of tools) {
        if (tool.queryPath === undefined) {
            continue;
        }
        const toolPath = tool.queryPath();
        if (typeof (toolPath) === 'string') {
            if (toolPath) {
                onDiscoveredTool(tool.id, Object.assign({}, tool, { path: toolPath, hidden: false, parameters: [], custom: false, workingDirectory: toolPath }));
            }
            else {
                log_1.log('debug', 'tool not found', tool.id);
            }
        }
        else {
            toolPath
                .then((resolvedPath) => {
                if (resolvedPath) {
                    onDiscoveredTool(tool.id, Object.assign({}, tool, { path: resolvedPath, hidden: false, parameters: [], custom: false, workingDirectory: resolvedPath }));
                }
                return null;
            })
                .catch((err) => {
                log_1.log('debug', 'tool not found', { id: tool.id, err: err.message });
            });
        }
    }
}
/**
 * run the "quick" discovery using functions provided by the game extension
 *
 * @export
 * @param {IGame[]} knownGames
 * @param {DiscoveredCB} onDiscoveredGame
 */
function quickDiscovery(knownGames, discoveredGames, onDiscoveredGame, onDiscoveredTool) {
    return Promise.map(knownGames, game => new Promise((resolve, reject) => {
        quickDiscoveryTools(game.supportedTools, onDiscoveredTool);
        if (game.queryPath === undefined) {
            return resolve();
        }
        try {
            const gamePath = game.queryPath();
            const prom = (typeof (gamePath) === 'string')
                ? Promise.resolve(gamePath)
                : gamePath;
            prom
                .then(resolvedPath => assertToolDir(game, resolvedPath))
                .then(resolvedPath => {
                if (!util_1.truthy(resolvedPath)) {
                    return resolve(undefined);
                }
                log_1.log('info', 'found game', { name: game.name, location: resolvedPath });
                onDiscoveredGame(game.id, {
                    path: resolvedPath,
                });
                getNormalizeFunc_1.default(resolvedPath)
                    .then(normalize => discoverRelativeTools(game, resolvedPath, discoveredGames, onDiscoveredTool, normalize))
                    .then(() => resolve(game.id));
            }).catch((err) => {
                log_1.log('debug', 'game not found', { id: game.id, err: err.message.replace(/(?:\r\n|\r|\n)/g, '; ') });
                resolve();
            });
        }
        catch (err) {
            log_1.log('warn', 'failed to use game support plugin', { id: game.id, err: err.message });
            // TODO: this may not be the right thing to do, just because one game support plugin doesn't
            //   work we shouldn't cancel the whole discovery?
            reject(err);
        }
    })).then(gameNames => gameNames.filter(name => name !== undefined));
}
exports.quickDiscovery = quickDiscovery;
/**
 * recursively walk the specified directory, calling
 * the resultCB whenever a file or directory from the
 * matchList was hit.
 *
 * @param {string} searchPath
 * @param {Set<string>} matchList
 * @param {(path: string) => void} resultCB
 * @param {Progress} progress
 * @param {Normalize} normalize a function to normalize a filename for the
 *                    search folder, i.e. in a case-insensitive fs
 *                    it will upper-case the input. the entries of
 *                    matchList and blackList will be normalized within
 *                    the same function.
 * @returns
 */
function walk(searchPath, matchList, resultCB, progress, normalize) {
    // we can't actually know the progress percentage because for
    // that we'd need to search the disk twice, first to know the number of directories
    // just so we can show progress for the second run.
    // So instead we start with an extremely high directory total and gradually converge
    // towards an extrapolation based on progress so far, to get a smoother progress.
    let estimatedDirectories = Math.pow(2, 24);
    const seenTL = new Set();
    let processedTL = 0;
    let seenDirectories = 0;
    let isTL = true;
    return turbowalk_1.default(searchPath, entries => {
        let doneCount = 0;
        let lastCompleted;
        entries.forEach(entry => {
            if (entry.isTerminator) {
                if (seenTL.has(entry.filePath)) {
                    ++processedTL;
                    // 80% of previous estimate plus a bit more than 20% of new estimate.
                    // this will estimate a bit more than it mathematically should,
                    // so the progress doesn't hang at 100%
                    estimatedDirectories = (estimatedDirectories * 0.8 +
                        seenDirectories * (seenTL.size / processedTL) * 0.202);
                }
                ++doneCount;
                lastCompleted = entry.filePath;
            }
            else if (entry.isDirectory) {
                ++seenDirectories;
                if (isTL) {
                    if (path.relative(searchPath, entry.filePath).indexOf(path.sep) !==
                        -1) {
                        isTL = false;
                    }
                    else {
                        seenTL.add(entry.filePath);
                    }
                }
            }
            else if (matchList.has(normalize(path.basename(entry.filePath)))) {
                log_1.log('info', 'potential match', entry.filePath);
                // notify that a searched file was found. If the CB says so
                // we stop looking at this directory
                resultCB(entry.filePath);
            }
        });
        if (progress) {
            // count number of directories to be used as the step counter in the progress bar
            progress.setStepCount(estimatedDirectories);
            progress.completed(lastCompleted, doneCount);
        }
    }, { terminators: true });
}
function verifyToolDir(tool, testPath) {
    return Promise.mapSeries(tool.requiredFiles, (fileName) => fs.statAsync(path.join(testPath, fileName)))
        .then(() => undefined);
}
function assertToolDir(tool, testPath) {
    if (!util_1.truthy(testPath)) {
        return Promise.resolve(undefined);
    }
    return verifyToolDir(tool, testPath)
        .then(() => testPath)
        .catch(err => {
        if (err.code === 'ENOENT') {
            log_1.log('warn', 'game directory not valid', { testPath });
        }
        else {
            log_1.log('error', 'failed to verify game directory', { testPath, error: err.message });
        }
        return Promise.resolve(undefined);
    });
}
const nop = () => undefined;
function discoverRelativeTools(game, gamePath, discoveredGames, onDiscoveredTool, normalize) {
    const discoveredTools = storeHelper_1.getSafe(discoveredGames[game.id], ['tools'], {});
    const relativeTools = (game.supportedTools || [])
        .filter(tool => tool.relative === true)
        .filter(tool => discoveredTools[tool.id] === undefined);
    if (relativeTools.length === 0) {
        return Promise.resolve();
    }
    const files = relativeTools.reduce((prev, tool) => {
        for (const required of tool.requiredFiles) {
            prev.push({
                fileName: normalize(required),
                gameId: game.id,
                application: tool,
            });
        }
        return prev;
    }, []);
    const matchList = new Set(files.map(entry => path.basename(entry.fileName)));
    const onFileCB = filePath => onFile(filePath, files, normalize, discoveredGames, nop, onDiscoveredTool);
    return walk(gamePath, matchList, onFileCB, undefined, normalize);
}
exports.discoverRelativeTools = discoverRelativeTools;
function testApplicationDirValid(application, testPath, gameId, discoveredGames, onDiscoveredGame, onDiscoveredTool, normalize) {
    verifyToolDir(application, testPath)
        .then(() => {
        const game = application;
        if (game.queryModPath !== undefined) {
            onDiscoveredGame(gameId, {
                path: testPath,
            });
            return discoverRelativeTools(game, testPath, discoveredGames, onDiscoveredTool, normalize);
        }
        else {
            onDiscoveredTool(gameId, Object.assign({}, application, { path: path.join(testPath, application.executable()), hidden: false, custom: false, workingDirectory: testPath }));
            return Promise.resolve();
        }
    })
        .catch(() => {
        log_1.log('info', 'invalid', { game: application.id, path: testPath });
    });
}
function toolFilesForGame(game, discoveredTools, normalize) {
    const result = [];
    if (game.supportedTools !== undefined) {
        // all the (non-relative) known tools for the game we haven't found already
        game.supportedTools
            .filter(tool => tool.relative !== true)
            .forEach((tool) => {
            if (storeHelper_1.getSafe(discoveredTools, [tool.id, 'path'], undefined) === undefined) {
                for (const required of tool.requiredFiles) {
                    result.push({
                        fileName: normalize(required),
                        gameId: game.id,
                        application: tool,
                    });
                }
            }
        });
    }
    return result;
}
function onFile(filePath, files, normalize, discoveredGames, onDiscoveredGame, onDiscoveredTool) {
    const matches = files.filter(entry => normalize(filePath).endsWith(entry.fileName));
    for (const match of matches) {
        const testPath = filePath.substring(0, filePath.length - match.fileName.length);
        testApplicationDirValid(match.application, testPath, match.gameId, discoveredGames, onDiscoveredGame, onDiscoveredTool, normalize);
    }
    return false;
}
/**
 * run the "search"-discovery based on required files as specified by the game extension
 *
 * @export
 * @param {IGame[]} knownGames
 * @param {{ [id: string]: any }} discoveredGames
 * @param {string[]} searchPaths
 * @param {DiscoveredCB} onDiscoveredGame
 * @param {Progress} progressObj
 * @returns {Promise<any[]>}
 */
function searchDiscovery(knownGames, discoveredGames, searchPaths, onDiscoveredGame, onDiscoveredTool, progressCB) {
    return Promise.map(
    // windows has separate cwds per drive. If we used c: as the search path it would not actually
    // search in the root of drive c but in whatever is currently the working directory on c, so
    // we have to append a backslash. Damn you windows...
    searchPaths.map(searchPath => searchPath.endsWith(':') ? searchPath + path.sep : searchPath), (searchPath, index) => {
        log_1.log('info', 'searching for games & tools', { searchPath });
        const progressObj = new Progress_1.default(0, 100, (percent, label) => progressCB(index, percent, label));
        // recurse through the search path and look for known files. use the appropriate file name
        // normalization
        return getNormalizeFunc_1.default(searchPath, { separators: false, unicode: false, relative: false })
            .then((normalize) => {
            // gather files to look for
            const files = [];
            knownGames.forEach((knownGame) => {
                const discoveredGame = discoveredGames[knownGame.id];
                // the game itself
                if (discoveredGame === undefined) {
                    for (const required of knownGame.requiredFiles) {
                        files.push({
                            fileName: normalize(required),
                            gameId: knownGame.id,
                            application: knownGame,
                        });
                    }
                }
                // and its tools
                files.push.apply(files, toolFilesForGame(knownGame, storeHelper_1.getSafe(discoveredGame, ['tools'], {}), normalize));
            }, []);
            // retrieve only the basenames of required files because the walk only ever looks
            // at the last path component of a file
            const matchList = new Set(files.map(entry => path.basename(entry.fileName)));
            const onFileCB = (filePath) => onFile(filePath, files, normalize, discoveredGames, onDiscoveredGame, onDiscoveredTool);
            return walk(searchPath, matchList, onFileCB, progressObj, normalize);
        })
            .catch(err => (err.code === 'ENOENT')
            ? Promise.resolve()
            : Promise.reject(err))
            .then(() => {
            progressObj.completed(searchPath);
            return null;
        });
    });
}
exports.searchDiscovery = searchDiscovery;
