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
const CustomErrors_1 = require("../../util/CustomErrors");
const errorHandling_1 = require("../../util/errorHandling");
const fs = __importStar(require("../../util/fs"));
const log_1 = require("../../util/log");
const util_1 = require("../../util/util");
const bluebird_1 = __importDefault(require("bluebird"));
const electron_1 = require("electron");
const path = __importStar(require("path"));
const dialog = process.type === "renderer"
    ? // tslint:disable-next-line:no-var-requires
        require("@electron/remote").dialog
    : electron_1.dialog;
/**
 * assembles a file received in chunks.
 *
 * @class FileAssembler
 */
class FileAssembler {
    static create(fileName) {
        let exists = false;
        let size = 0;
        return fs
            .ensureDirAsync(path.dirname(fileName))
            .then(() => fs.statAsync(fileName))
            .then((stats) => {
            if (stats.isDirectory()) {
                return bluebird_1.default.reject(new Error("Download target is a directory"));
            }
            size = stats.size;
            exists = true;
            return bluebird_1.default.resolve();
        })
            .catch(() => null)
            .then(() => fs.openAsync(fileName, exists ? "r+" : "w"))
            .then((fd) => new FileAssembler(fileName, size, fd));
    }
    constructor(fileName, size, fd) {
        this.mWritten = 0;
        this.mLastFlushedTime = 0;
        this.mLastFlushedSize = 0;
        this.mFileName = fileName;
        this.mTotalSize = size;
        this.mFD = fd;
        this.mQueue = (0, util_1.makeQueue)();
    }
    setTotalSize(size) {
        this.mQueue(() => {
            this.mTotalSize = size;
            return bluebird_1.default.resolve();
        }, false);
    }
    isClosed() {
        return this.mFD === undefined;
    }
    rename(newName) {
        const closeFD = () => this.isClosed()
            ? bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled("File is closed"))
            : fs.closeAsync(this.mFD);
        let resolved;
        // to rename the file we have to close the file descriptor, rename,
        // then open it again
        return this.mQueue(() => closeFD()
            .catch({ code: "EBADF" }, () => null)
            .then(() => bluebird_1.default.resolve(newName).then((nameResolved) => (resolved = nameResolved)))
            .then(() => fs.renameAsync(this.mFileName, resolved))
            .then(() => fs.openAsync(resolved, "r+"))
            .then((fd) => {
            this.mFD = fd;
            this.mFileName = resolved;
            return bluebird_1.default.resolve();
        })
            .catch((err) => {
            if (err instanceof CustomErrors_1.ProcessCanceled) {
                // This would only happen if we have closed the
                //  file in one of the queue's previous iterations.
                (0, log_1.log)("warn", "attempt to rename closed file", this.mFileName);
                return bluebird_1.default.reject(err);
            }
            // in case of error, re-open the original file name so we can continue writing,
            // only  then rethrow the exception
            return fs
                .openAsync(this.mFileName, "r+")
                .then((fd) => {
                this.mFD = fd;
            })
                .then(() => bluebird_1.default.reject(err));
        }), false);
    }
    addChunk(offset, data) {
        let synced = false;
        return this.mQueue(() => (this.mFD === undefined
            ? bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled("file already closed"))
            : this.writeAsync(data, offset))
            .then(({ bytesWritten, buffer }) => {
            this.mWritten += bytesWritten;
            const now = Date.now();
            if (this.mWritten - this.mLastFlushedSize >
                FileAssembler.MIN_FLUSH_SIZE ||
                now - this.mLastFlushedTime > FileAssembler.MIN_FLUSH_TIME) {
                this.mLastFlushedSize = this.mWritten;
                this.mLastFlushedTime = now;
                synced = true;
                return fs
                    .fsyncAsync(this.mFD)
                    .catch({ code: "EBADF" }, () => {
                    // if we log this we may be generating thousands of log messages
                })
                    .then(() => bytesWritten);
            }
            else {
                return bluebird_1.default.resolve(bytesWritten);
            }
        })
            .then((bytesWritten) => bytesWritten !== data.length
            ? bluebird_1.default.reject(new Error(`incomplete write ${bytesWritten}/${data.length}`))
            : bluebird_1.default.resolve(synced))
            .catch({ code: "ENOSPC" }, () => {
            dialog.showMessageBoxSync((0, errorHandling_1.getVisibleWindow)(), {
                type: "warning",
                title: "Disk is full",
                message: "Download can't continue because disk is full, " +
                    "please free some some space and retry.",
                buttons: ["Cancel", "Retry"],
                defaultId: 1,
                noLink: true,
            }) === 1
                ? this.addChunk(offset, data)
                : bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
        }), false);
    }
    close() {
        return this.mQueue(() => {
            if (this.mFD !== undefined) {
                const fd = this.mFD;
                this.mFD = undefined;
                return fs
                    .fsyncAsync(fd)
                    .then(() => fs.closeAsync(fd))
                    .catch({ code: "EBADF" }, () => {
                    (0, log_1.log)("warn", "failed to sync or close file", this.mFileName);
                    return bluebird_1.default.resolve();
                })
                    .catch({ code: "ENOENT" }, () => bluebird_1.default.resolve());
            }
            else {
                return bluebird_1.default.resolve();
            }
        }, false);
    }
    writeAsync(data, offset) {
        return fs
            .writeAsync(this.mFD, data, 0, data.length, offset)
            .catch((err) => {
            var _a;
            if (err.code === "EBADF") {
                err.message += ` (fd: ${(_a = this.mFD) !== null && _a !== void 0 ? _a : "closed"})`;
            }
            return bluebird_1.default.reject(err);
        });
    }
}
// flush at least every few megabytes
FileAssembler.MIN_FLUSH_SIZE = 16 * 1024 * 1024;
// flush at least once every few seconds
FileAssembler.MIN_FLUSH_TIME = 5 * 1000;
exports.default = FileAssembler;
