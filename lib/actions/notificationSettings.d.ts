/**
 * set (or unset) notifications to not show again
 */
export declare const suppressNotification: import("redux-act").ComplexActionCreator2<string, boolean, {
    id: string;
    suppress: boolean;
}, {}>;
export declare const resetSuppression: import("redux-act").ComplexActionCreator1<unknown, any, {}>;
