/**
 * Provide context during batch operations
 * This is a generic system that allows operations to find out if they are run in a batch
 * (same operation on multiple selected items) and then get/set information to be remembered
 * for all items.
 * The most obvious use is a "Do this for all x items" checkbox on a dialog.
 *
 * The contexts are global, keyed by an identifier for the operation and the items they act upon.
 * At any point the operation intends to act differently for batch actions, it can determine
 * if this item is part of a batch, fetch the context and query or set arbitrary variables for it.
 * Thus the creation of the context merely declares that it is a batch action, it
 * says nothing on if/how the context is used.
 * The code implementing the operation itself decides if it wants to do anything special with
 * a context and what kind of data it needs to store for that.
 *
 * It's safe to create a context for any batch operation even if there are no current plans
 * to use it and it's safe to write operations to support batch contexts even if the trigger
 * is not yet built to create one.
 * All code has to be written in a way that works without a batch context anyway because every
 * operation can be run on a single item.
 * !!! All intermediate functions/events do not need to be changed at all
 *
 * !!! The combination of operation+item id has to be unique though, as in: the same item can't
 * appear in a multiple batches for the same operation.
 * For example: if a user reinstalls 10 files in a batch they have control inside Vortex while
 * the mods are being reinstalled one by one.
 * They could now trigger _another_ batch-reinstall including one of the mods already processed
 * in the first batch.
 * The context system will delay/queue the entire second batch until the entire first batch is
 * complete, thereby enforcing an order that didn't exist before.
 * For the most part this should not have a noticeable effect for the user.
 */
export interface IBatchContext {
    itemCount: number;
    get<T = any>(varName: string, fallback?: T): T;
    set<T>(varName: string, value: T): any;
    onClose(cb: (context: BatchContext) => void): void;
}
declare class BatchContext implements IBatchContext {
    private mCloseCBs;
    private mId;
    private mKeys;
    private mValues;
    private mCompletion;
    constructor(id: string, keys: string[]);
    get itemCount(): number;
    await(): Promise<void>;
    get<T = any>(varName: string, fallback?: T): T;
    set<T>(varName: string, value: T): void;
    close(): void;
    onClose(cb: (context: BatchContext) => void): void;
}
export declare function getBatchContext(operation: string, key: string): IBatchContext;
export declare function withBatchContext<T>(operation: string, keys: string[], cb: () => PromiseLike<T>): Promise<T>;
export {};
