/**
 * tracks progress. This has been designed to handle subtasks
 *
 * @class Progress
 */
declare class Progress {
    private mMagnitude;
    private mStepCount;
    private mStepsCompleted;
    private mBaseValue;
    private mCallback;
    private mDepth;
    private mIdx;
    private mLastProgress;
    private mLastProgressTime;
    constructor(baseValue: number, magnitude: number, callback: (percent: number, label: string) => void, depth?: number);
    /**
     * set the number of steps the progress bar has (that is: the number of
     * times 'completed' will be called before this progress is finished)
     *
     * @param {number} count
     *
     * @memberOf Progress
     */
    setStepCount(count: number): void;
    /**
     * called whenever one step of the task is finished. label
     * should be a text giving the user a hint of what's currently going on
     * but please do not rely on this text being readable, depending on the theme
     * it may not be as long as the progress is very low
     *
     * @param {string} label
     *
     * @memberOf Progress
     */
    completed(label: string, steps?: number): void;
    /**
     * create a new progress bar that covers only the width of the current step
     * within this Progress.
     *
     * @returns
     *
     * @memberOf Progress
     */
    derive(): Progress;
    private currentProgress;
}
export default Progress;
