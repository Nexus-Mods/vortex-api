/// <reference types="node" />
/// <reference types="jest" />
/// <reference types="webpack-env" />
declare function runElevatedCustomTool(ipcClient: any, req: NodeRequire): Promise<void>;
export default runElevatedCustomTool;
