"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VORTEX_VERSION = exports.VCREDIST_URL = exports.DEBUG_PORT = exports.HTTP_HEADER_SIZE = void 0;
exports.HTTP_HEADER_SIZE = 16384;
exports.DEBUG_PORT = "9222";
exports.VCREDIST_URL = "https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist";
const VORTEX_MAJOR = "1";
const VORTEX_MINOR = "16";
const VORTEX_PATCH = "0";
//  Can be used by extensions to check compatibility
exports.VORTEX_VERSION = `${VORTEX_MAJOR}.${VORTEX_MINOR}.${VORTEX_PATCH}`;
