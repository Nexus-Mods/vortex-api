import type { VortexPaths } from "@vortex/shared/ipc";
export declare class ApplicationData {
    #private;
    private constructor();
    static init(): Promise<ApplicationData>;
    static get instance(): ApplicationData;
    get name(): string;
    get windowId(): number;
    get version(): string;
    get paths(): VortexPaths;
}
