import type PromiseBB from "bluebird";
import type { BrowserWindow } from "electron";
import type { IErrorOptions, IExtensionApi } from "../types/api";
import type { IError } from "../types/IError";
type IErrorContext = Record<string, string>;
export declare function createErrorReport(type: string, error: IError, context: IErrorContext, state: any, sourceProcess?: string): void;
export declare function setOutdated(api: IExtensionApi): void;
export declare function isOutdated(): boolean;
export declare function didIgnoreError(): boolean;
export declare function disableErrorReport(): void;
export declare function setWindow(window: BrowserWindow | null): void;
export declare function getWindow(): BrowserWindow | null;
export declare function getVisibleWindow(win?: BrowserWindow | null): BrowserWindow | null;
/**
 * display an error message and quit the application
 * on confirmation.
 * Use this whenever the application state is unknown and thus
 * continuing could lead to data loss
 *
 * @export
 * @param {ITermination} error
 */
export declare function terminate(error: IError, state: any, allowReport?: boolean, source?: string): void;
/**
 * render error message for internal processing (issue tracker and such).
 * It's important this doesn't translate the error message or lose information
 */
export declare function toError(input: any, title?: string, options?: IErrorOptions, sourceStack?: string): IError;
/**
 * set an error context, that will be reported with every error reported.
 * Please keep in mind that the error context will remain set
 * until it's cleared with clearErrorContext and use "withContext" where possible
 * to ensure the context gets reset
 * @param id context id
 * @param value context value
 */
export declare function setErrorContext(id: string, value: string): void;
/**
 * clear an error context
 * @param id id of the context
 */
export declare function clearErrorContext(id: string): void;
/**
 * execute a function with the specified error context
 * @param id identifier of the context to set
 * @param value context value
 * @param fun the function to set
 */
export declare function withContext(id: string, value: string, fun: () => PromiseBB<any>): Promise<any>;
/**
 * attach context to an error that may be caught after the global context has been reset
 * @param err the error to add context to
 */
export declare function contextify(err: Error): Error;
export declare function getErrorContext(): IErrorContext;
export type SetAttribute = (key: string, value: string | number | boolean) => void;
export type SetError = (error: Error) => void;
export type TrackedFunction<T> = (setAttribute: SetAttribute, setError: SetError) => PromiseBB<T> | Promise<T>;
export interface TrackedActivityOptions {
    /** Start a new root trace instead of inheriting the active parent span. */
    root?: boolean;
}
/**
 * Execute a function wrapped in an OTel span with full control over
 * tracer name, span name, and attributes.
 * The span is automatically ended when the returned promise settles.
 * The callback receives a `setAttribute` function for adding dynamic attributes.
 *
 * Pass `{ root: true }` for top-level operations (downloads, installs) that
 * should start a new trace rather than becoming children of whatever span
 * happens to be active in the Bluebird chain.
 */
export declare function withTrackedActivity<T>(tracerName: string, spanName: string, attributes: Record<string, string | number | boolean>, fun: TrackedFunction<T>, options?: TrackedActivityOptions): Promise<T>;
/**
 * Record an error on the currently active span, or create a new root span
 * if none exists. The RingBufferSpanProcessor will detect the ERROR status
 * and export the trace automatically.
 */
export declare function recordErrorSpan(title: string, error: Error, attributes?: Record<string, string | number | boolean>): void;
export {};
