export declare class NotSupportedError extends Error {
    constructor();
}
export declare class ProcessCanceled extends Error {
    constructor(message: string);
}
export declare class DataInvalid extends Error {
    constructor(message: string);
}
export declare class UserCanceled extends Error {
    constructor();
}
export declare class SetupError extends Error {
    constructor(message: string);
}
export declare class HTTPError extends Error {
    private mBody;
    constructor(statusCode: number, message: string, body: string);
    readonly body: string;
}
