/**
 * wrapper for logging functionality
 */
export declare function valueReplacer(): (key: string, value: any) => any;
export declare type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export declare function setLogPath(basePath: string): void;
/**
 * application specific logging setup
 *
 * @export
 */
export declare function setupLogging(basePath: string, useConsole: boolean): void;
/**
 * log a message
 *
 * @export
 * @param {Level} level The log level of the message: 'debug', 'info' or 'error'
 * @param {string} message The text message. Should contain no variable data
 * @param {any} [metadata] Additional information about the error instance
 */
export declare function log(level: LogLevel, message: string, metadata?: any): void;
