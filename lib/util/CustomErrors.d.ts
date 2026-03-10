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
    private mExtraInfo;
    constructor(message: string, extraInfo?: any);
    get extraInfo(): any;
}
export declare class DataInvalid extends Error {
    constructor(message: string);
}
export declare class ArgumentInvalid extends Error {
    constructor(argument: string);
}
interface IUserCanceled extends Error {
    skipped: boolean;
    timed: number;
}
type IUserCanceledConstructor = new (skipped?: boolean) => IUserCanceled;
declare const UserCanceled: IUserCanceledConstructor;
export { UserCanceled };
export declare class MissingDependency extends Error {
    constructor();
}
export declare class DocumentsPathMissing extends Error {
    constructor();
}
export declare class SetupError extends Error {
    private mComponent;
    constructor(message: string, component?: string);
    get component(): string;
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
export declare class StalledError extends Error {
    constructor(msg: string);
}
export declare class TimeoutError extends Error {
    constructor();
}
/**
 * these errors we report but don't allow to be reported to us
 */
export declare class ThirdPartyError extends Error {
    constructor(message: string);
}
export declare class SelfCopyCheckError extends Error {
    constructor(src: string, dest: string, ino: BigInt);
}
export declare class ArchiveBrokenError extends Error {
    private mFileName;
    constructor(fileNameOrMessage: string, message?: string);
    get fileName(): string;
}
