export interface IDecoded {
    title: string;
    message: string;
    rethrowAs: string;
}
export declare function decodeSystemError(err: Error, filePath: string): IDecoded;
