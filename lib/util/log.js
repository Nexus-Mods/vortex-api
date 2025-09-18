"use strict";
/**
 * wrapper for logging functionality
 */
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
exports.valueReplacer = valueReplacer;
exports.setLogPath = setLogPath;
exports.setupLogging = setupLogging;
exports.log = log;
/** dummy */
const path = __importStar(require("path"));
const util = __importStar(require("util"));
const winston_1 = __importDefault(require("winston"));
function valueReplacer() {
    const known = new Map();
    return (key, value) => {
        if (typeof (value) === 'object') {
            if (known.has(value)) {
                return '<Circular>';
            }
            known.set(value, true);
        }
        else if (typeof (value) === 'bigint') {
            // BigInt values are not serialized in JSON by default.
            return value.toString();
        }
        return value;
    };
}
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
            ipcRenderer.send('log-message', level, message, meta !== undefined ? JSON.stringify(meta, valueReplacer()) : undefined);
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
        ipcMain.on('log-message', (event, level, message, metadataSer) => {
            try {
                const metadata = (metadataSer !== undefined)
                    ? JSON.parse(metadataSer)
                    : undefined;
                logger.log(level, message, metadata);
            }
            catch (e) {
                // failed to log, what am I supposed to do now?
            }
        });
    } // otherwise we're not in electron
    // TODO: very weird issue, getting an EPIPE error if log is called before setupLogging
    //   unless we do a console.log first.
    // tslint:disable-next-line:no-console
    console.log('logging started');
}
/**
 * Formats log level to fixed 4-character width for consistent log alignment
 */
function formatLogLevel(level) {
    switch (level) {
        case 'debug': return 'DEBG';
        case 'info': return 'INFO';
        case 'warn': return 'WARN';
        case 'error': return 'ERRO';
        default: return level.toUpperCase();
    }
}
function setLogPath(basePath) {
    // remove the original transport so we can add the new one back again
    logger.remove(logger.transports['File']);
    // add the new transport
    logger.add(logger.transports['File'], {
        filename: path.join(basePath, 'vortex.log'),
        json: false,
        level: 'debug',
        maxsize: 1024 * 1024,
        maxFiles: 5,
        tailable: true,
        timestamp: () => new Date().toISOString(),
        formatter: (options) => {
            return `${options.timestamp()} [${formatLogLevel(options.level)}] ${options.message !== undefined ? options.message : ''} ${(options.meta && Object.keys(options.meta).length) ? JSON.stringify(options.meta) : ''}`;
        }
    });
}
/**
 * application specific logging setup
 *
 * @export
 */
function setupLogging(basePath, useConsole) {
    try {
        // remove default one as we can't change things after added
        logger.remove(logger.transports['Console']);
        // add the new transport
        logger.add(logger.transports['File'], {
            filename: path.join(basePath, 'vortex.log'),
            json: false,
            level: 'debug',
            maxsize: 1024 * 1024,
            maxFiles: 5,
            tailable: true,
            timestamp: () => new Date().toISOString(),
            formatter: (options) => {
                return `${options.timestamp()} [${formatLogLevel(options.level)}] ${options.message !== undefined ? options.message : ''} ${(options.meta && Object.keys(options.meta).length) ? JSON.stringify(options.meta) : ''}`;
            }
        });
        // if we are using console (development enviorment) then add back a new console transport with better logging format
        if (useConsole) {
            logger.add(logger.transports['Console'], {
                level: 'debug',
                timestamp: () => new Date().toISOString(),
                formatter: (options) => {
                    return `${options.timestamp()} [${winston_1.default.config.colorize(options.level, formatLogLevel(options.level))}] ${options.message !== undefined ? options.message : ''} ${(options.meta && Object.keys(options.meta).length) ? JSON.stringify(options.meta) : ''}`;
                    //(options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
                }
            });
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
/**
 * log a message
 *
 * @export
 * @param {Level} level The log level of the message: 'debug', 'info' or 'error'
 * @param {string} message The text message. Should contain no variable data
 * @param {any} [metadata] Additional information about the error instance
 */
function log(level, message, metadata) {
    try {
        if (metadata === undefined) {
            logger.log(level, message);
        }
        else {
            logger.log(level, message, metadata);
        }
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.log('failed to log to file', { level, message, metadata });
    }
}
