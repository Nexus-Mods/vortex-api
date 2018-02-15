"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * wrapper around an format-specific archive handler
 *
 * @export
 * @class Archive
 */
class Archive {
    constructor(handler) {
        this.mHandler = handler;
    }
    get readDir() {
        return (this.mHandler.readDir !== undefined)
            ? (archivePath) => this.mHandler.readDir(archivePath)
            : undefined;
    }
    get readFile() {
        return (this.mHandler.readFile !== undefined)
            ? (filePath) => this.mHandler.readFile(filePath)
            : undefined;
    }
    get extractFile() {
        return (this.mHandler.extractFile !== undefined)
            ? (filePath, outputPath) => this.mHandler.extractFile(filePath, outputPath)
            : undefined;
    }
    get extractAll() {
        return (this.mHandler.extractAll !== undefined)
            ? (outputPath) => this.mHandler.extractAll(outputPath)
            : undefined;
    }
    get create() {
        return (this.mHandler.create !== undefined)
            ? (sourcePath) => this.mHandler.create(sourcePath)
            : undefined;
    }
}
exports.Archive = Archive;
