import type { IError } from "../types/IError";
export declare function extractToken(error: IError): string;
/**
 * Compute a fingerprint from the stack trace call frames and app version.
 * Same error from the same code path in the same version produces the same hash,
 * which can be used for deduplication on the backend.
 */
export declare function computeErrorFingerprint(stack: string | undefined, appVersion: string): string | undefined;
export declare function genHash(error: IError): string;
