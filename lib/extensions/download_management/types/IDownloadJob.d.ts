import { IChunk } from './IChunk';
import { IDownloadOptions } from './IDownload';
import Promise from 'bluebird';
export interface IDownloadJob extends IChunk {
    state: 'init' | 'running' | 'paused' | 'finished';
    workerId?: number;
    options: IDownloadOptions;
    confirmedReceived: number;
    confirmedOffset: number;
    confirmedSize: number;
    extraCookies: string[];
    dataCB?: (offset: number, data: any) => Promise<boolean>;
    completionCB?: () => void;
    errorCB?: (err: any) => void;
    responseCB?: (size: number, fileName: string, chunkable: boolean) => void;
}
