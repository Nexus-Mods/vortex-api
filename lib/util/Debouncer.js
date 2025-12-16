"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * management function. Prevents a function from being called too often
 * and, for function returning a promise, it ensures that it's not run
 * again (through this Debouncer) before the promise is resolved.
 *
 * @class Debouncer
 */
class Debouncer {
    /**
     * constructor
     * @param func the function to call when the timer expired
     * @param debounceMS the (minimum) time between two calls
     * @param reset if true (the default) the time is reset with every
     *              time schedule gets called. This means if the debouncer
     *              is triggered regularly in less than debounceMS it never
     *              gets run.
     * @param triggerImmediately if true, the debouncer will trigger immediately
     *                           when first called and then not be called again
     *                           until the timer expires. Otherwise (the default)
     *                           the initial call is delay.
     */
    constructor(func, debounceMS, reset, triggerImmediately = false) {
        this.mCallbacks = [];
        this.mAddCallbacks = [];
        this.mRunning = false;
        this.mReschedule = "no";
        this.mArgs = [];
        // only used with triggerImmediately
        this.mRetrigger = false;
        this.mResetting = reset !== false;
        this.mFunc = func;
        this.mDebounceMS = debounceMS;
        this.mTriggerImmediately = triggerImmediately;
    }
    /**
     * schedule the function and invoke the callback once that is done
     * @param callback the callback to invoke upon completion
     * @param args the arguments to pass to the function. When the timer expires
     *             and the function actually gets invoked, only the last set of
     *             parameters will be used
     */
    schedule(callback, ...args) {
        if (callback !== undefined && callback !== null) {
            this.mCallbacks.push(callback);
        }
        this.mArgs = args;
        if (this.mTriggerImmediately && this.mTimer === undefined) {
            this.run();
        }
        else {
            const doReset = this.mTimer !== undefined && this.mResetting;
            if (doReset) {
                this.clear();
            }
            if (this.mTriggerImmediately) {
                this.mRetrigger = true;
                if (doReset) {
                    this.startTimer();
                }
            }
            else if (this.mRunning) {
                if (this.mReschedule !== "immediately") {
                    this.mReschedule = "yes";
                }
            }
            else if (this.mTimer === undefined) {
                this.startTimer();
            }
        }
    }
    /**
     * run the function immediately without waiting for the timer
     * to run out. (It does cancel the timer though and invokes all
     * scheduled callbacks)
     *
     * @param {(err: Error) => void} callback
     * @param {...any[]} args
     *
     * @memberOf Debouncer
     */
    runNow(callback, ...args) {
        if (this.mTimer !== undefined) {
            this.clear();
        }
        if (callback !== undefined && callback !== null) {
            this.mCallbacks.push(callback);
        }
        this.mArgs = args;
        if (this.mRunning) {
            this.mReschedule = "immediately";
        }
        else {
            this.run();
        }
    }
    /**
     * wait for the completion of the current timer without scheduling it.
     * if the function is not scheduled currently the callback will be
     * called (as a success) immediately.
     * This does not reset the timer
     *
     * @param {(err: Error) => void} callback
     * @param {boolean} immediately if set (default is false) the function gets called
     *                              immediately instead of awaiting the timer
     *
     * @memberOf Debouncer
     */
    wait(callback, immediately = false) {
        if (this.mTimer === undefined && !this.mRunning) {
            // not scheduled
            return callback(null);
        }
        this.mAddCallbacks.push(callback);
        if (immediately && !this.mRunning) {
            this.clear();
            this.run();
        }
    }
    clear() {
        clearTimeout(this.mTimer);
        this.mTimer = undefined;
    }
    run() {
        const callbacks = this.mCallbacks;
        this.mCallbacks = [];
        const args = this.mArgs;
        this.mArgs = [];
        this.mTimer = undefined;
        let prom;
        try {
            prom = this.mFunc(...args);
        }
        catch (err) {
            prom = err;
        }
        if ((prom === null || prom === void 0 ? void 0 : prom["then"]) !== undefined) {
            this.mRunning = true;
            prom["then"](() => this.invokeCallbacks(callbacks, null))
                .catch((err) => this.invokeCallbacks(callbacks, err))
                .finally(() => {
                this.mRunning = false;
                if (this.mReschedule === "immediately") {
                    this.mReschedule = "no";
                    this.run();
                }
                else if (this.mReschedule === "yes") {
                    this.mReschedule = "no";
                    this.reschedule();
                }
            });
        }
        else {
            this.invokeCallbacks(callbacks, prom);
        }
        // in the default case the "run" marks the end of the timer,
        // in the "trigger immediately" case it marks the start
        if (this.mTriggerImmediately) {
            this.startTimer();
        }
    }
    reschedule() {
        if (this.mTimer !== undefined && this.mResetting) {
            this.clear();
        }
        if (this.mTimer === undefined) {
            this.startTimer();
        }
    }
    invokeCallbacks(localCallbacks, err) {
        localCallbacks.forEach((cb) => cb(err));
        this.mAddCallbacks.forEach((cb) => cb(err));
        this.mAddCallbacks = [];
    }
    startTimer() {
        this.mTimer = setTimeout(() => {
            this.mTimer = undefined;
            if (!this.mTriggerImmediately || this.mRetrigger) {
                this.mRetrigger = false;
                if (this.mRunning) {
                    this.mReschedule = "immediately";
                }
                else {
                    this.run();
                }
            }
        }, this.mDebounceMS);
    }
}
exports.default = Debouncer;
