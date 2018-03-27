"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// dummy declarations
let toolPath;
// tslint:disable-next-line:prefer-const
let toolCWD;
// tslint:disable-next-line:prefer-const
let parameters;
// tslint:disable-next-line:prefer-const
let environment;
function runElevatedCustomTool(ipcClient) {
    const exec = require('child_process').execFile;
    try {
        let params = [];
        if (parameters !== undefined) {
            params = parameters;
        }
        const execOptions = {
            cwd: toolCWD,
            env: Object.assign({}, process.env, environment),
        };
        toolPath = toolPath.replace(/\\/g, '\\\\');
        exec(toolPath, params, execOptions, (err, output) => {
            // exec will report an error even if it's simply a not-0 exit code
            // which is not something we should react to (when you start from
            // windows explorer or similar you don't get notified of status
            // code != 0 either so it shouldn't be a situation to worry about
            ipcClient.emit('finished', {});
            process.exit(0);
        });
    }
    catch (err) {
        ipcClient.emit('log', {
            level: 'error',
            message: 'Elevation Error',
            meta: { err: err.message },
        });
    }
    ipcClient.on('disconnect', () => {
        process.exit(0);
    });
}
exports.default = runElevatedCustomTool;
