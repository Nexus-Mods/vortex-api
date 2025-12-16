"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const select = (state, selector) => selector.reduce((prev, current) => prev[current], state);
/**
 * this is a rewrite of redux-watcher (https://github.com/imsun/redux-watcher/)
 * The base idea is the same, it's a way to subscribe to changes on a redux store
 * with lower overhead and a memory of the previous state.
 * Compared to redux-watcher this is more forgiving if the monitored part of the state
 * doesn't actually exist
 */
class ReduxWatcher {
    constructor(store, onError) {
        this.mWatchList = {};
        this.mLastState = store.getState();
        store.subscribe(() => {
            const currentState = store.getState();
            const lastState = this.mLastState;
            Object.values(this.mWatchList).forEach(({ selector, listeners }) => {
                try {
                    const prevValue = select(lastState, selector);
                    const currentValue = select(currentState, selector);
                    // TODO: shouldn't be a comparison by identity be good enough?
                    if (!(0, lodash_1.isEqual)(prevValue, currentValue)) {
                        const parameters = {
                            store,
                            selector,
                            prevState: lastState,
                            currentState,
                            prevValue,
                            currentValue,
                        };
                        listeners.forEach((listener) => listener(parameters));
                    }
                }
                catch (err) {
                    onError(err, selector);
                }
            });
            this.mLastState = currentState;
        });
    }
    on(selector, listener) {
        const id = this.selectorId(selector);
        if (this.mWatchList[id] === undefined) {
            this.mWatchList[id] = { selector, listeners: [] };
        }
        this.mWatchList[id].listeners.push(listener);
    }
    off(selector, listener) {
        const id = this.selectorId(selector);
        if (this.mWatchList[id] !== undefined) {
            const idx = this.mWatchList[id].listeners.indexOf(listener);
            if (idx !== undefined) {
                this.mWatchList[id].listeners.splice(idx, 1);
            }
        }
    }
    selectorId(selector) {
        return JSON.stringify(selector);
    }
}
exports.default = ReduxWatcher;
