import { GenericDebouncer } from "@vortex/shared";
export default class Debouncer extends GenericDebouncer<number, typeof window.setTimeout, typeof window.clearTimeout> {
    constructor(func: (...args: any[]) => Error | PromiseLike<void>, debounceMS: number, reset?: boolean, triggerImmediately?: boolean);
}
