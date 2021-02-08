import { IChunk } from './IChunk';
export declare type ProgressCallback = (received: number, total: number, chunks: IChunk[], chunkable: boolean, urls: string[], filePath?: string) => void;
