/**
 * Generates fake HTTP errors for testing error handling.
 * @param errorCode HTTP status code (403, 404, 416, 500, etc.)
 * @param probability Chance of triggering (0-1), default 1.0 (always)
 */
export declare function simulateHttpError(errorCode: number, probability?: number): void;
