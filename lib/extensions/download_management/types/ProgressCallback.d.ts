import { IChunk } from './IChunk';
export declare type ProgressCallback = (received: number, total: number, chunks: IChunk[], urls: string[], filePath?: string) => void;
