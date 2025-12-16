"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalize(key) {
    return typeof key === "string" ? key.toLowerCase() : key;
}
/**
 * create a case insensitive (in the sense that keys are case insensitive,
 * it doesn't affect values) copy of an object
 * @param input the input data
 */
function makeInsensitive(input) {
    const inputL = Object.keys(input).reduce((prev, key) => {
        prev[normalize(key)] = input[key];
        return prev;
    }, {});
    return new Proxy(inputL, {
        has: (target, key) => Reflect.has(target, key) || Reflect.has(target, normalize(key)),
        get: (target, key) => target[key] !== undefined
            ? target[key]
            : Reflect.get(target, normalize(key)),
        set: (target, key, value, receiver) => Reflect.set(target, normalize(key), value, receiver),
        getOwnPropertyDescriptor: (target, key) => Reflect.getOwnPropertyDescriptor(target, key) ||
            Reflect.getOwnPropertyDescriptor(target, normalize(key)),
        ownKeys: (target) => Reflect.ownKeys(target).map(normalize),
    });
}
exports.default = makeInsensitive;
