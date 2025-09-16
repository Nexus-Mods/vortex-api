"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * tracks progress. This has been designed to handle subtasks
 *
 * @class Progress
 */
class Progress {
    constructor(baseValue, magnitude, callback, depth = 0) {
        this.mLastProgress = 0;
        this.mLastProgressTime = Date.now();
        this.mMagnitude = magnitude;
        this.mBaseValue = baseValue;
        this.mCallback = callback;
        this.mStepsCompleted = 0;
        this.mDepth = depth;
    }
    /**
     * set the number of steps the progress bar has (that is: the number of
     * times 'completed' will be called before this progress is finished)
     *
     * @param {number} count
     *
     * @memberOf Progress
     */
    setStepCount(count) {
        this.mStepCount = count > 0 ? count : 1;
    }
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
    completed(label, steps = 1) {
        this.mStepsCompleted += steps;
        const now = Date.now();
        if (now - this.mLastProgressTime > 1000) {
            this.mCallback(this.currentProgress(), label);
            this.mLastProgressTime = now;
        }
    }
    /**
     * create a new progress bar that covers only the width of the current step
     * within this Progress.
     *
     * @returns
     *
     * @memberOf Progress
     */
    derive() {
        const childMag = this.mMagnitude / this.mStepCount;
        return childMag > 0.9
            ? new Progress(this.currentProgress(), childMag, this.mCallback, this.mDepth + 1)
            : null;
    }
    currentProgress() {
        const newProgress = Math.min(Math.max(this.mBaseValue +
            (this.mMagnitude * this.mStepsCompleted) / this.mStepCount, this.mLastProgress), this.mMagnitude);
        this.mLastProgress = newProgress;
        return newProgress;
    }
}
exports.default = Progress;
