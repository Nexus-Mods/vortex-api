"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archive = void 0;
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
    /**
     * list files at the specified path
     */
    get readDir() {
        return this.mHandler.readDir !== undefined
            ? (archivePath) => this.mHandler.readDir(archivePath)
            : undefined;
    }
    /**
     * read a file at the specified path via a stream
     */
    get readFile() {
        return this.mHandler.readFile !== undefined
            ? (filePath) => this.mHandler.readFile(filePath)
            : undefined;
    }
    /**
     * extract a single file
     */
    get extractFile() {
        return this.mHandler.extractFile !== undefined
            ? (filePath, outputPath) => this.mHandler.extractFile(filePath, outputPath)
            : undefined;
    }
    /**
     * extract the entire archive
     */
    get extractAll() {
        return this.mHandler.extractAll !== undefined
            ? (outputPath) => this.mHandler.extractAll(outputPath)
            : undefined;
    }
    /**
     * create this archive from the files in sourcePath
     */
    get create() {
        return this.mHandler.create !== undefined
            ? (sourcePath) => this.mHandler.create(sourcePath)
            : undefined;
    }
    /**
     * add a single file to the archive
     */
    get addFile() {
        return this.mHandler.addFile !== undefined
            ? (filePath, sourcePath) => this.mHandler.addFile(filePath, sourcePath)
            : undefined;
    }
    get write() {
        return this.mHandler.write !== undefined
            ? () => this.mHandler.write()
            : undefined;
    }
}
exports.Archive = Archive;
