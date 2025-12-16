"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const RETRIES = 5;
/**
 * helper class to limit concurrency with asynchronous functions.
 */
class ConcurrencyLimiter {
    /**
     * Constructor
     * @param limit number of operations enqueued with do() that will happen concurrently
     * @param repeatTest if set, this function is called when an error happens and it can
     *                   decide if the operation should be retried.
     *                   This is purely a convenience feature but usually if you want to limit
     *                   concurrency it's because you're worried that some resource will run out
     *                   and it's not usually possible to know in advance how many operations
     *                   exactly can happen in parallel so you will usually still want to
     *                   handle errors that indicate the resource running out separately
     */
    constructor(limit, repeatTest) {
        this.mLimit = this.mInitialLimit = limit;
        this.mEndOfQueue = Promise.resolve();
        this.mRepeatTest = repeatTest;
    }
    clearQueue() {
        this.mEndOfQueue = Promise.resolve();
        this.mNext = undefined;
        this.mLimit = this.mInitialLimit;
    }
    do(cb) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doImpl(cb, RETRIES);
        });
    }
    doImpl(cb, tries) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.mLimit <= 0) {
                return this.enqueue(cb, tries);
            }
            return this.process(cb, tries);
        });
    }
    process(cb, tries) {
        return __awaiter(this, void 0, void 0, function* () {
            // reduce limit while processing
            --this.mLimit;
            try {
                // forward cb result
                return yield cb();
            }
            catch (err) {
                if (this.mRepeatTest !== undefined &&
                    tries > 0 &&
                    this.mRepeatTest(err)) {
                    return yield (0, util_1.delay)(100).then(() => this.do(cb));
                }
                else {
                    return Promise.reject(err);
                }
            }
            finally {
                // increment limit again
                ++this.mLimit;
                // if there is something in the queue, process it
                if (this.mNext !== undefined) {
                    this.mNext();
                }
            }
        });
    }
    enqueue(cb, tries) {
        return new Promise((outerResolve, outerReject) => {
            this.mEndOfQueue = this.mEndOfQueue.then(() => new Promise((resolve) => {
                // if the caller calls "do" in parallel, by the time we get here
                // tasks may already be fulfilled. More they might all have been fulfilled already
                // in which case no one is going to call mNext.
                if (this.mLimit > 0) {
                    resolve(false);
                }
                else {
                    // this pauses the queue until someone calls mNext
                    this.mNext = () => resolve(true);
                }
            }).then((queued) => {
                // once the queue is ticked, reset mNext in case there
                // is nothing else queued, then process the actual promise
                if (queued) {
                    this.mNext = undefined;
                }
                this.process(cb, tries)
                    .then(outerResolve)
                    .catch(outerReject)
                    .then(() => null);
                // this resolves immediately, so the next promise in the queue
                // gets paused
                return Promise.resolve();
            }));
        });
    }
}
exports.default = ConcurrencyLimiter;
