export interface IParameters {
    download?: string;
    install?: string;
    report?: string;
    restore?: string;
    startMinimized?: boolean;
    game?: string;
    get?: string;
    set?: string[];
    del?: string;
    run?: string;
    shared?: boolean;
    maxMemory?: string;
    disableGPU?: boolean;
    userData?: string;
}
declare function parseCommandline(argv: string[], electronIsShitHack: boolean): IParameters;
export declare function filterArgs(input: string[]): string[];
export declare function relaunch(args?: string[]): void;
export default parseCommandline;
