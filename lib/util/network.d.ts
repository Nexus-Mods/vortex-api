import { IncomingMessage, ClientRequest } from 'http';
import { Readable } from 'stream';
export interface IRequestOptions {
    expectedContentType?: RegExp;
    encoding?: BufferEncoding;
}
export declare function rawRequest(apiURL: string, options?: IRequestOptions): Promise<string | Buffer>;
export declare function jsonRequest<T>(apiURL: string): Promise<T>;
export type Method = 'GET' | 'POST' | 'PUT';
export declare function request(method: Method, reqURL: string, headers: any, cb: (res: IncomingMessage) => void): ClientRequest;
export declare function upload(targetUrl: string, dataStream: Readable, dataSize: number): Promise<Buffer>;
