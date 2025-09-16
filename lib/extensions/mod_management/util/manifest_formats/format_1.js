"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deserialize(input) {
    return {
        version: 1,
        instance: input.instance,
        files: input.files,
        gameId: input.gameId,
        deploymentMethod: input.deploymentMethod,
        deploymentTime: input.deploymentTime,
        stagingPath: input.stagingPath,
        targetPath: input.targetPath,
    };
}
exports.default = deserialize;
