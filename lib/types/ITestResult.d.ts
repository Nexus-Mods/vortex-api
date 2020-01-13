import Promise from 'bluebird';
export declare type ProblemSeverity = 'warning' | 'error';
export interface ITestResult {
    description: {
        short: string;
        long?: string;
        replace?: {
            [key: string]: any;
        };
    };
    severity: ProblemSeverity;
    automaticFix?: () => Promise<void>;
}
