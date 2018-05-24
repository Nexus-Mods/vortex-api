"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../../../util/log");
const walk_1 = require("../../../util/walk");
const Promise = require("bluebird");
function queryGameInfo(game) {
    if (game.path === undefined) {
        return Promise.resolve({});
    }
    let totalSize = 0;
    let sizeWithoutLinks = 0;
    const start = Date.now();
    return walk_1.default(game.path, (iter, stats) => {
        totalSize += stats.size;
        // symbolic links are still counted because walk uses lstat, so the size returned is
        // the size of the link itself, not the linked file so it's appropriate the add it
        if (stats.nlink === 1) {
            sizeWithoutLinks += stats.size;
        }
        return Promise.resolve();
    })
        .then(() => {
        return {
            size: { title: 'Space Used', value: totalSize, type: 'bytes' },
            size_nolinks: {
                title: 'Space Used (without links)',
                value: sizeWithoutLinks,
                type: 'bytes',
            },
        };
    })
        .catch(err => {
        log_1.log('error', 'failed to query game info', { err: err.message });
        return {};
    });
}
exports.default = queryGameInfo;
