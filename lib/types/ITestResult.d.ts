import Promise from 'bluebird';
export declare type ProblemSeverity = 'warning' | 'error';
export interface ITestResult {
    description: {
        short: string;
        long?: string;
    };
    severity: ProblemSeverity;
    automaticFix?: () => Promise<void>;
}
