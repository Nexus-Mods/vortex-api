"use strict";
/**
 * Worker pool manager for archive extraction
 *
 * Manages a pool of worker threads for parallel archive extraction.
 * Limits concurrent workers to prevent resource exhaustion.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractionWorkerPool = void 0;
const worker_threads_1 = require("worker_threads");
const path = __importStar(require("path"));
const log_1 = require("../../../util/log");
/**
 * Manages worker threads for archive extraction
 */
class ExtractionWorkerPool {
    constructor(maxWorkers = 5) {
        this.activeWorkers = 0;
        this.queue = [];
        // Limit to 5 concurrent extractions to prevent disk thrashing
        this.maxWorkers = maxWorkers;
    }
    /**
     * Get singleton instance
     */
    static getInstance() {
        if (!ExtractionWorkerPool.instance) {
            ExtractionWorkerPool.instance = new ExtractionWorkerPool();
        }
        return ExtractionWorkerPool.instance;
    }
    /**
     * Extract archive using worker thread
     */
    extractArchive(task, progressCallback) {
        return __awaiter(this, void 0, void 0, function* () {
            // Wait for available worker slot
            if (this.activeWorkers >= this.maxWorkers) {
                yield new Promise((resolve) => {
                    this.queue.push(resolve);
                });
            }
            this.activeWorkers++;
            try {
                const result = yield this.runWorker(task, progressCallback);
                return result;
            }
            finally {
                this.activeWorkers--;
                // Process next queued task
                const nextTask = this.queue.shift();
                if (nextTask) {
                    nextTask();
                }
            }
        });
    }
    /**
     * Run worker thread for extraction
     */
    runWorker(task, progressCallback) {
        return new Promise((resolve, reject) => {
            // Determine worker script path
            // In development: src/extensions/mod_management/workers/extractionWorker.js
            // In production: app.asar/extensions/mod_management/workers/extractionWorker.js
            const workerScript = path.join(__dirname, 'extractionWorker.js');
            (0, log_1.log)('debug', 'starting extraction worker', {
                archivePath: path.basename(task.archivePath),
                workerScript,
            });
            const worker = new worker_threads_1.Worker(workerScript, {
                workerData: task,
            });
            let workerTimeout;
            // Set timeout to prevent hung workers (10 minutes max)
            const timeoutMs = 600000;
            workerTimeout = setTimeout(() => {
                (0, log_1.log)('error', 'extraction worker timeout', {
                    archivePath: path.basename(task.archivePath),
                    timeoutMs,
                });
                worker.terminate();
                reject(new Error(`Extraction timed out after ${timeoutMs}ms`));
            }, timeoutMs);
            worker.on('message', (message) => {
                if (message.type === 'progress') {
                    if (progressCallback) {
                        progressCallback(message.phase, message.percent, message.files);
                    }
                }
                else if (message.type === 'complete') {
                    clearTimeout(workerTimeout);
                    (0, log_1.log)('debug', 'extraction worker completed', {
                        archivePath: path.basename(task.archivePath),
                        fileCount: message.fileList.length,
                    });
                    resolve({
                        code: message.code,
                        errors: message.errors,
                        fileList: message.fileList,
                    });
                    worker.terminate();
                }
                else if (message.type === 'error') {
                    clearTimeout(workerTimeout);
                    (0, log_1.log)('error', 'extraction worker error', {
                        archivePath: path.basename(task.archivePath),
                        error: message.error,
                    });
                    reject(new Error(message.error));
                    worker.terminate();
                }
            });
            worker.on('error', (err) => {
                clearTimeout(workerTimeout);
                (0, log_1.log)('error', 'extraction worker crashed', {
                    archivePath: path.basename(task.archivePath),
                    error: err.message,
                });
                reject(err);
            });
            worker.on('exit', (code) => {
                clearTimeout(workerTimeout);
                if (code !== 0) {
                    (0, log_1.log)('error', 'extraction worker exited with error', {
                        archivePath: path.basename(task.archivePath),
                        exitCode: code,
                    });
                    reject(new Error(`Worker exited with code ${code}`));
                }
            });
        });
    }
    /**
     * Get current number of active workers
     */
    getActiveWorkerCount() {
        return this.activeWorkers;
    }
    /**
     * Get current queue length
     */
    getQueueLength() {
        return this.queue.length;
    }
}
exports.ExtractionWorkerPool = ExtractionWorkerPool;
exports.default = ExtractionWorkerPool;
