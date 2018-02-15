"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invalidWindowsChars = ['<', '>', ':', '"', '/', '\\', '|', '?', '*'];
const invalidOSXChars = ['/'];
const invalidLinuxChars = ['/'];
function deriveModInstallName(archiveName, info) {
    return maskFSInvalidChars(archiveName, process.platform);
}
exports.deriveModInstallName = deriveModInstallName;
function maskFSInvalidChars(archiveName, OS) {
    let invalidChars = [];
    if (OS === 'linux') {
        invalidChars = invalidLinuxChars;
    }
    else if (OS === 'darwin') {
        invalidChars = invalidOSXChars;
    }
    else if (OS === 'win32') {
        invalidChars = invalidWindowsChars;
    }
    let maskedName = '';
    for (let i = 0, len = archiveName.length; i < len; i++) {
        if (invalidChars.indexOf(archiveName[i]) >= 0) {
            maskedName += '_' + archiveName[i].charCodeAt(0) + '_';
        }
        else {
            maskedName += archiveName[i];
        }
    }
    return maskedName;
}
exports.default = deriveModInstallName;
