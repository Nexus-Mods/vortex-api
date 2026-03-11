import type { Level } from "@vortex/shared";
export type { Level as LogLevel } from "@vortex/shared";
/** @deprecated Use log method from renderer directly */
export declare function log(level: Level, message: string, metadata?: unknown): void;
