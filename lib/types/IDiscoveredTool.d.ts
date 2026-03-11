import type { ITool } from "./ITool";
export interface IDiscoveredTool extends ITool {
    path: string;
    hidden: boolean;
    custom: boolean;
    workingDirectory?: string;
    timestamp?: number;
}
