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
exports.writeFileAtomic = writeFileAtomic;
exports.copyFileAtomic = copyFileAtomic;
const checksum_1 = require("./checksum");
const fs = __importStar(require("./fs"));
const log_1 = require("./log");
const bluebird_1 = __importDefault(require("bluebird"));
const tmp_1 = require("tmp");
function writeFileAtomic(filePath, input) {
    return writeFileAtomicImpl(filePath, input, 3);
}
function writeFileAtomicImpl(filePath, input, attempts) {
    const stackErr = new Error();
    let cleanup;
    let tmpPath;
    const buf = input instanceof Buffer
        ? input
        : Buffer.from(input);
    const callCleanup = () => {
        if (cleanup !== undefined) {
            try {
                cleanup();
            }
            catch (err) {
                (0, log_1.log)('error', 'failed to clean up temporary file', err.message);
            }
            cleanup = undefined;
        }
    };
    const hash = (0, checksum_1.checksum)(buf);
    let fd = -1;
    return fs.withTmpFile((fdIn, pathIn) => {
        fd = fdIn;
        tmpPath = pathIn;
        return fs.writeAsync(fd, buf, 0, buf.byteLength, 0)
            .then(() => fs.fsyncAsync(fd).catch(() => bluebird_1.default.resolve()))
            .then(() => fs.closeAsync(fd).catch(() => bluebird_1.default.resolve()));
    }, {
        cleanup: false,
        template: `${filePath}.XXXXXX.tmp`,
    })
        .then(() => fs.readFileAsync(tmpPath))
        .catch({ code: 'EBADF' }, () => {
        (0, log_1.log)('warn', 'failed to access temporary file', {
            filePath,
            fd,
        });
        return bluebird_1.default.resolve(undefined);
    })
        .then(data => {
        if ((data === undefined) || ((0, checksum_1.checksum)(data) !== hash)) {
            callCleanup();
            return (attempts > 0)
                // retry
                ? writeFileAtomicImpl(filePath, input, attempts - 1)
                : bluebird_1.default.reject(new Error('Write failed, checksums differ'));
        }
        else {
            return fs.renameAsync(tmpPath, filePath)
                .catch({ code: 'EEXIST' }, () => 
            // renameAsync is supposed to overwrite so this is likely to fail as well
            fs.removeAsync(filePath).then(() => fs.renameAsync(tmpPath, filePath)));
        }
    })
        .catch(err => {
        err.stack = err.stack + '\n' + stackErr.stack;
        return bluebird_1.default.reject(err);
    })
        .finally(() => {
        callCleanup();
    });
}
/**
 * copy a file in such a way that it will not replace the target if the copy is
 * somehow interrupted. The file is first copied to a temporary file in the same
 * directory as the destination, then deletes the destination and renames the temp
 * to destination. Since the rename is atomic and the deletion only happens after
 * a successful write this should minimize the risk of error.
 *
 * @export
 * @param {string} srcPath
 * @param {string} destPath
 * @returns {Promise<void>}
 */
function copyFileAtomic(srcPath, destPath) {
    let cleanup;
    let tmpPath;
    return new bluebird_1.default((resolve, reject) => {
        (0, tmp_1.file)({ template: `${destPath}.XXXXXX.tmp` }, (err, genPath, fd, cleanupCB) => {
            if (err) {
                return reject(err);
            }
            cleanup = cleanupCB;
            tmpPath = genPath;
            resolve(fd);
        });
    })
        .then((fd) => fs.closeAsync(fd))
        .then(() => fs.copyAsync(srcPath, tmpPath))
        .then(() => fs.unlinkAsync(destPath).catch((err) => {
        if (err.code === 'EPERM') {
            // if the file is currently in use, try a second time
            // 100ms later
            (0, log_1.log)('debug', 'file locked, retrying delete', destPath);
            return bluebird_1.default.delay(100).then(() => fs.unlinkAsync(destPath));
        }
        else if (err.code === 'ENOENT') {
            // file doesn't exist anyway? no problem
            return bluebird_1.default.resolve();
        }
        else {
            return bluebird_1.default.reject(err);
        }
    }))
        .catch(err => err.code === 'ENOENT' ? bluebird_1.default.resolve() : bluebird_1.default.reject(err))
        .then(() => (tmpPath !== undefined)
        ? fs.renameAsync(tmpPath, destPath)
        : bluebird_1.default.resolve())
        .catch(err => {
        (0, log_1.log)('info', 'failed to copy', { srcPath, destPath, err: err.stack });
        if (cleanup !== undefined) {
            try {
                cleanup();
            }
            catch (cleanupErr) {
                (0, log_1.log)('error', 'failed to clean up temporary file', cleanupErr.message);
            }
        }
        return bluebird_1.default.reject(err);
    });
}
