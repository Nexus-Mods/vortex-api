import * as Redux from "redux";
interface IParameters<T, U> {
    store: Redux.Store<T>;
    selector: string[];
    prevState: T;
    currentState: T;
    prevValue: U;
    currentValue: U;
}
type WatchCallback<T, U> = (parameters: IParameters<T, U>) => void;
/**
 * this is a rewrite of redux-watcher (https://github.com/imsun/redux-watcher/)
 * The base idea is the same, it's a way to subscribe to changes on a redux store
 * with lower overhead and a memory of the previous state.
 * Compared to redux-watcher this is more forgiving if the monitored part of the state
 * doesn't actually exist
 */
declare class ReduxWatcher<T> {
    private mWatchList;
    private mLastState;
    constructor(store: Redux.Store<T>, onError: (err: Error, selector: string[]) => void);
    on<U>(selector: string[], listener: WatchCallback<T, U>): void;
    off<U>(selector: string[], listener: WatchCallback<T, U>): void;
    private selectorId;
}
export default ReduxWatcher;
