import { IMod } from './IMod';
export declare type InstallOutcome = 'success' | 'failed' | 'canceled';
export interface IInstallContext {
    startIndicator: (id: string) => void;
    stopIndicator: (mod?: IMod) => void;
    setProgress: (phase: string, percent?: number) => void;
    startInstallCB: (id: string, gameId: string, archiveId: string) => void;
    finishInstallCB: (success: InstallOutcome, info?: any) => void;
    progressCB: (percent: number, file: string) => void;
    reportError: (message: string, details?: string | Error) => void;
}
