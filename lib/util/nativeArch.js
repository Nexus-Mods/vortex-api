"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCPUArch = void 0;
const winapi_bindings_1 = require("winapi-bindings");
const getCPUArch = () => {
    try {
        const nativeArchInfo = (0, winapi_bindings_1.GetNativeArch)();
        return nativeArchInfo.nativeArch;
    }
    catch (err) {
        return "Unknown";
    }
};
exports.getCPUArch = getCPUArch;
