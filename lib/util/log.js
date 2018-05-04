"use strict";
/**
 * wrapper for logging functionality
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** dummy */
const path = require("path");
const util = require("util");
function IPCTransport(options) {
    this.name = 'IPCTransport';
    this.level = 'debug';
}
let logger = null;
// magic: when we're in the main process, this uses the logger from winston
// (which appears to be a singleton). In the renderer processes we connect
// to the main-process logger through ipc
if (process.type === 'renderer') {
    // tslint:disable-next-line:no-var-requires
    const { ipcRenderer } = require('electron');
    IPCTransport.prototype.log =
        (level, message, meta, callback) => {
            ipcRenderer.send('log-message', level, message, meta);
            callback(null);
        };
    // tslint:disable-next-line:no-var-requires
    logger = require('winston');
    util.inherits(IPCTransport, logger.Transport);
    logger.configure({
        transports: [
            new IPCTransport({}),
        ],
    });
}
else {
    // when being required from extensions, don't re-require the winston module
    // because the "singleton" is implemented abusing the require-cache
    if (global.logger === undefined) {
        // tslint:disable-next-line:no-var-requires
        logger = require('winston');
        global.logger = logger;
    }
    else {
        logger = global.logger;
    }
    // tslint:disable-next-line:no-var-requires
    const { ipcMain } = require('electron');
    if (ipcMain !== undefined) {
        ipcMain.on('log-message', (event, level, message, metadata) => logger.log(level, message, metadata));
    } // otherwise we're not in electron
}
function setLogPath(basePath) {
    logger.remove(logger.transports['File']);
    logger.add(logger.transports['File'], {
        filename: path.join(basePath, 'vortex.log'),
        json: false,
        level: 'debug',
        maxsize: 1024 * 1024,
        maxFiles: 5,
        tailable: true,
        timestamp: () => new Date().toUTCString(),
    });
}
exports.setLogPath = setLogPath;
/**
 * application specific logging setup
 *
 * @export
 */
function setupLogging(basePath, useConsole) {
    try {
        logger.add(logger.transports['File'], {
            filename: path.join(basePath, 'vortex.log'),
            json: false,
            level: 'debug',
            maxsize: 1024 * 1024,
            maxFiles: 5,
            tailable: true,
            timestamp: () => new Date().toUTCString(),
        });
        if (!useConsole) {
            logger.remove(logger.transports['Console']);
        }
    }
    catch (err) {
        // logger.add dynamically calls requires('./transport/file'). For some reason that
        // fails when this exe is called from chrome as a protocol handler. I've debugged as
        // far as I can, it fails in a stat call to asar. The parameter is fine, the file
        // exists and it worked in past versions so it appears to be a bug in electron
        logger.log('error', 'Failed to set up logging to file', { error: err.message });
    }
}
exports.setupLogging = setupLogging;
/**
 * log a message
 *
 * @export
 * @param {Level} level The log level of the message: 'debug', 'info' or 'error'
 * @param {string} message The text message. Should contain no variable data
 * @param {any} [metadata] Additional information about the error instance
 */
function log(level, message, metadata) {
    if (metadata === undefined) {
        logger.log(level, message);
    }
    else {
        logger.log(level, message, metadata);
    }
}
exports.log = log;
