import I18next from 'i18next';
export declare type TimeMode = 'relative' | 'absolute';
export declare function setTimeMode(mode: TimeMode): void;
/**
 * format the specified date in a user-friendly way, depending on the globally set time mode
 */
export declare function userFriendlyTime(date: Date, t: I18next.TFunction, locale: string): string;
declare function relativeTime(date: Date, t: I18next.TFunction): string;
export default relativeTime;
