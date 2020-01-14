export declare class NotSupportedError extends Error {
    constructor();
}
export declare class CleanupFailedException extends Error {
    private mErrorObject;
    constructor(error: Error);
    get errorObject(): Error;
}
export declare class ServiceTemporarilyUnavailable extends Error {
    constructor(service: string);
}
export declare class UnsupportedOperatingSystem extends Error {
    constructor();
}
export declare class InsufficientDiskSpace extends Error {
    constructor(mountPoint: string);
}
export declare class ProcessCanceled extends Error {
    constructor(message: string);
}
export declare class DataInvalid extends Error {
    constructor(message: string);
}
export declare class ArgumentInvalid extends Error {
    constructor(argument: string);
}
export declare class UserCanceled extends Error {
    constructor();
}
export declare class MissingDependency extends Error {
    constructor();
}
export declare class DocumentsPathMissing extends Error {
    constructor();
}
export declare class SetupError extends Error {
    constructor(message: string);
}
export declare class TemporaryError extends Error {
    constructor(message: string);
}
export declare class HTTPError extends Error {
    private mCode;
    private mMessage;
    private mURL;
    constructor(statusCode: number, message: string, url: string);
    get statusCode(): number;
    get statusMessage(): string;
    get url(): string;
}
export declare class MissingInterpreter extends Error {
    private mURL;
    constructor(message: string, url?: string);
    get url(): string;
}
export declare class NotFound extends Error {
    constructor(what: string);
}
