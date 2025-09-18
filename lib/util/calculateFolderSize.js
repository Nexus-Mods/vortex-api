"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird_1 = __importDefault(require("bluebird"));
const path_1 = __importDefault(require("path"));
const walk_1 = __importDefault(require("./walk"));
function calculateFolderSize(dirPath) {
    let totalSize = 0;
    const onIter = (walkPath, iter, stats) => {
        if (stats.isFile()) {
            totalSize += stats.size;
        }
        if (stats.isDirectory()) {
            return (0, walk_1.default)(path_1.default.join(walkPath, iter), (iter2, stats2) => onIter(walkPath, iter2, stats2), { ignoreErrors: true });
        }
    };
    return (0, walk_1.default)(dirPath, (iter, stats) => onIter(dirPath, iter, stats), { ignoreErrors: true })
        .then(() => bluebird_1.default.resolve(totalSize))
        .catch(err => bluebird_1.default.reject(err));
}
exports.default = calculateFolderSize;
