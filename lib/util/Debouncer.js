"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
/**
 * management function. Prevents a function from being called too often
 * and, for function returning a promise, it ensures that it's not run
 * again (through this Debouncer) before the promise is resolved.
 *
 * @class Debouncer
 */
class Debouncer {
    constructor(func, debounceMS) {
        this.mCallbacks = [];
        this.mAddCallbacks = [];
        this.mRunning = false;
        this.mReschedule = 'no';
        this.mArgs = [];
        this.mFunc = func;
        this.mDebounceMS = debounceMS;
    }
    /**
     * schedule the function and invoke the callback once that is done
     * @param callback the callback to invoke upon completion
     * @param args the arguments to pass to the function. When the timer expires
     *             and the function actually gets invoked, only the last set of
     *             parameters will be used
     */
    schedule(callback, ...args) {
        if (this.mTimer !== undefined) {
            clearTimeout(this.mTimer);
        }
        if ((callback !== undefined) && (callback !== null)) {
            this.mCallbacks.push(callback);
        }
        this.mArgs = args;
        if (this.mRunning) {
            if (this.mReschedule !== 'immediately') {
                this.mReschedule = 'yes';
            }
        }
        else {
            this.startTimer();
        }
    }
    /**
     * run the function immediately without waiting for the timer
     * to run out. (It does cancel the timer though and invokes all
     * scheduled timeouts)
     *
     * @param {(err: Error) => void} callback
     * @param {...any[]} args
     *
     * @memberOf Debouncer
     */
    runNow(callback, ...args) {
        if (this.mTimer !== undefined) {
            clearTimeout(this.mTimer);
        }
        if ((callback !== undefined) && (callback !== null)) {
            this.mCallbacks.push(callback);
        }
        this.mArgs = args;
        if (this.mRunning) {
            this.mReschedule = 'immediately';
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
        if ((this.mTimer === undefined) && !this.mRunning) {
            // not scheduled
            return callback(null);
        }
        this.mAddCallbacks.push(callback);
        if (immediately && !this.mRunning) {
            clearTimeout(this.mTimer);
            this.run();
        }
    }
    clear() {
        clearTimeout(this.mTimer);
        this.mTimer = undefined;
    }
    run() {
        this.mRunning = true;
        const callbacks = this.mCallbacks;
        this.mCallbacks = [];
        const args = this.mArgs;
        this.mArgs = [];
        this.mTimer = undefined;
        const prom = this.mFunc(...args);
        if (prom instanceof Promise) {
            prom.then(() => this.invokeCallbacks(callbacks, null))
                .catch((err) => this.invokeCallbacks(callbacks, err))
                .finally(() => {
                this.mRunning = false;
                if (this.mReschedule === 'immediately') {
                    this.mReschedule = 'no';
                    this.run();
                }
                else if (this.mReschedule === 'yes') {
                    this.mReschedule = 'no';
                    this.schedule(undefined);
                }
            });
        }
        else {
            this.mRunning = false;
            this.invokeCallbacks(callbacks, prom);
        }
    }
    invokeCallbacks(localCallbacks, err) {
        localCallbacks.forEach((cb) => cb(err));
        this.mAddCallbacks.forEach((cb) => cb(err));
        this.mAddCallbacks = [];
    }
    startTimer() {
        this.mTimer = setTimeout(() => this.run(), this.mDebounceMS);
    }
}
exports.default = Debouncer;
