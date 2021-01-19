/// <reference types="node" />
/// <reference types="jest" />
declare function runElevatedCustomTool(ipcClient: any, req: NodeRequire): Promise<void>;
export default runElevatedCustomTool;
