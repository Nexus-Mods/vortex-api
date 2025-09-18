"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverProxyHandler = void 0;
class ObserverProxyHandler {
    constructor() {
        this.mSubscribers = [];
        this.attach = (component) => {
            this.mSubscribers.push(component);
        };
        this.detach = (component) => {
            const index = this.mSubscribers.indexOf(component);
            if (index !== -1) {
                this.mSubscribers.splice(index, 1);
            }
        };
    }
    has(target, key) {
        return (key in target) ||
            ((typeof (key) === 'string') && (['attach', 'detach'].indexOf(key) !== -1));
    }
    get(target, key) {
        if (key === 'attach') {
            return this.attach;
        }
        else if (key === 'detach') {
            return this.detach;
        }
        return target[key];
    }
    set(target, key, value, receiver) {
        target[key] = value;
        this.mSubscribers.forEach(comp => {
            comp.setState({});
        });
        return true;
    }
}
exports.ObserverProxyHandler = ObserverProxyHandler;
/**
 * create a proxy around the specified object that forces any
 * react component that has this proxy as a prop to update whenever
 * the object is changed (mutated)
 *
 * TODO: The implementation isn't particularly efficient (see comment in
 *   ExtensionGate.tsx), I hope we can fix that someday without changing
 *   the api
 *
 * @template T
 * @param {T} value
 * @returns {T}
 */
function makeReactive(value) {
    return new Proxy(value, new ObserverProxyHandler());
}
exports.default = makeReactive;
