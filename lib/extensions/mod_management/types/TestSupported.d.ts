import Promise from 'bluebird';
export interface ISupportedResult {
    supported: boolean;
    requiredFiles: string[];
}
export type TestSupported = (files: string[], gameId: string, archivePath?: string) => Promise<ISupportedResult>;
