"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// dummy declarations. Filled with random data to ensure webpack (-plugins) don't try to
// optimize these away
let toolPath = `${Math.random()}`;
// tslint:disable-next-line:prefer-const
let toolCWD = `${Math.random()}`;
// tslint:disable-next-line:prefer-const
let parameters = [`${Math.random()}`];
// tslint:disable-next-line:prefer-const
let environment = { foobar: Math.random() };
function runElevatedCustomTool(ipcClient, req) {
    return new Promise((resolve, reject) => {
        const emit = (message, payload) => {
            ipcClient.sendMessage({ message, payload });
        };
        const exec = req('child_process').execFile;
        try {
            let params = [];
            if (parameters !== undefined) {
                params = parameters;
            }
            const execOptions = {
                cwd: toolCWD,
                env: Object.assign(Object.assign({}, process.env), environment),
            };
            toolPath = toolPath.replace(/\\/g, '\\\\');
            emit('log', {
                level: 'info',
                message: 'start tool elevated',
                meta: { toolPath, params },
            });
            exec(toolPath, params, execOptions, (err, output) => {
                // exec will report an error even if it's simply a not-0 exit code
                // which is not something we should react to (when you start from
                // windows explorer or similar you don't get notified of status
                // code != 0 either so it shouldn't be a situation to worry about
                emit('finished', {});
                emit('log', {
                    level: err ? 'error' : 'info',
                    message: 'tool finished',
                    meta: err ? { err } : {},
                });
                resolve();
            });
        }
        catch (err) {
            emit('log', {
                level: 'error',
                message: 'Elevation Error',
                meta: { err: err.message },
            });
            reject(err);
        }
    });
}
exports.default = runElevatedCustomTool;
