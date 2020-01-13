export interface IRequestOptions {
    expectedContentType?: RegExp;
    encoding?: string;
}
export declare function rawRequest(apiURL: string, options?: IRequestOptions): Promise<string>;
export declare function jsonRequest<T>(apiURL: string): Promise<T>;
