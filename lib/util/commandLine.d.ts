export interface IParameters {
    download?: string;
    install?: string;
    report?: string;
    restore?: string;
    get?: string;
    set?: string[];
    del?: string;
    run?: string;
    shared?: boolean;
    maxMemory?: string;
    disableGPU?: boolean;
}
declare function parseCommandline(argv: string[], electronIsShitHack: boolean): IParameters;
export declare function filterArgs(input: string[]): string[];
export declare function relaunch(): void;
export default parseCommandline;