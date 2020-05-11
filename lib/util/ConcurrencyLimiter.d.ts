/**
 * helper class to limit concurrency with asynchronous functions.
 */
declare class ConcurrencyLimiter {
    private mLimit;
    private mNext;
    private mEndOfQueue;
    private mRepeatTest;
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
    constructor(limit: number, repeatTest?: (err: Error) => boolean);
    do<T>(cb: () => Promise<T>): Promise<T>;
    private doImpl;
    private process;
    private enqueue;
}
export default ConcurrencyLimiter;
