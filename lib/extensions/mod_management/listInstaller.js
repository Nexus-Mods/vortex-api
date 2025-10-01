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
const checksum_1 = require("../../util/checksum");
const fs = __importStar(require("../../util/fs"));
const bluebird_1 = __importDefault(require("bluebird"));
const path = __importStar(require("path"));
const xxhash_addon_1 = require("xxhash-addon");
function testSupported() {
    return bluebird_1.default.resolve({
        supported: true,
        requiredFiles: [],
    });
}
function makeXXHash64() {
    return (filePath) => {
        return fs.readFileAsync(filePath)
            .then(data => {
            const buf = xxhash_addon_1.XXHash64.hash(data);
            return buf.toString('base64');
        });
    };
}
/**
 * installer designed to unpack a specific list of files
 * from an archive, ignoring any install script
 */
function makeListInstaller(extractList, basePath) {
    let lookupFunc = (filePath) => bluebird_1.default.resolve((0, checksum_1.fileMD5)(filePath));
    let idxId = 'md5';
    // TODO: this is awkward. We expect the entire list to use the same checksum algorithm
    if (extractList.find(iter => (iter.md5 !== undefined) || (iter.xxh64 === undefined)) === undefined) {
        lookupFunc = makeXXHash64();
        idxId = 'xxh64';
    }
    return bluebird_1.default.resolve({
        installer: {
            id: 'list-installer',
            priority: 0,
            testSupported,
            install: (files, destinationPath, gameId, progressDelegate) => {
                let prog = 0;
                // build lookup table of the existing files on disk md5 -> source path
                return bluebird_1.default.reduce(files.filter(relPath => !relPath.endsWith(path.sep)), (prev, relPath, idx, length) => {
                    return lookupFunc(path.join(basePath, relPath))
                        .then(checksum => {
                        if (Math.floor((idx * 10) / length) > prog) {
                            prog = Math.floor((idx * 10) / length);
                            progressDelegate(prog * 10);
                        }
                        prev[checksum] = relPath;
                        return prev;
                    });
                }, {})
                    .then(lookup => {
                    // for each item in the extract list, look up the source path vial
                    // the lookup table, then create the copy instruction.
                    const missingItems = [];
                    return {
                        instructions: extractList.map(item => {
                            let instruction;
                            if (lookup[item[idxId]] === undefined) {
                                missingItems.push(item);
                                instruction = {
                                    type: 'error',
                                    source: `${item.path} (checksum: ${item[idxId]}) missing`,
                                    value: 'warn',
                                };
                            }
                            else {
                                instruction = {
                                    type: 'copy',
                                    source: lookup[item[idxId]],
                                    destination: item.path,
                                };
                            }
                            return instruction;
                        }),
                    };
                });
            },
        },
        requiredFiles: [],
    });
}
exports.default = makeListInstaller;
