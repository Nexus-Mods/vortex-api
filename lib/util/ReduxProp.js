"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("./storeHelper");
class ReduxProp {
    constructor(api, inputs, func) {
        this.mInputs = inputs;
        this.mFunc = func;
        this.mApi = api;
        this.mSubscribers = [];
    }
    attach(component) {
        if (this.mSubscribers.length === 0) {
            this.subscribe();
        }
        this.mSubscribers.push(component);
    }
    detach(component) {
        const idx = this.mSubscribers.indexOf(component);
        this.mSubscribers.splice(idx, 1);
        if (this.mSubscribers.length === 0) {
            this.unsubscribe();
        }
    }
    calculate() {
        if (this.mApi === undefined) {
            return undefined;
        }
        const values = this.mInputs.map(valPath => (0, storeHelper_1.getSafe)(this.mApi.store.getState(), valPath, undefined));
        return this.mFunc(...values);
    }
    subscribe() {
        if (this.mApi === undefined) {
            return;
        }
        let oldState = this.mApi.store.getState();
        this.mUnsubscribe = this.mApi.store.subscribe(() => {
            const changed = this.mInputs.find(valPath => (0, storeHelper_1.getSafe)(oldState, valPath, undefined)
                !== (0, storeHelper_1.getSafe)(this.mApi.store.getState(), valPath, undefined));
            oldState = this.mApi.store.getState();
            if (changed !== undefined) {
                this.mSubscribers.forEach(sub => sub.forceUpdate());
            }
        });
    }
    unsubscribe() {
        this.mUnsubscribe();
        this.mUnsubscribe = undefined;
    }
}
exports.default = ReduxProp;
