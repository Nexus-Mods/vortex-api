"use strict";
/**
 * Helper functions when working with immutable state (or immutable objects in general)
 */
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = require("./selectors");
const Promise = require("bluebird");
function clone(input) {
    return Array.isArray(input)
        ? [].concat(input)
        : Object.assign({}, input);
}
/**
 * return an item from state or the fallback if the path doesn't lead
 * to an item.
 *
 * @export
 * @template T
 * @param {*} state
 * @param {string[]} path
 * @param {T} fallback
 * @returns {T}
 */
function getSafe(state, path, fallback) {
    let current = state;
    for (const segment of path) {
        if ((current === undefined) || (current === null) || !current.hasOwnProperty(segment)) {
            return fallback;
        }
        else {
            current = current[segment];
        }
    }
    return current;
}
exports.getSafe = getSafe;
function mutateSafe(state, path, value) {
    const firstElement = path[0];
    if (path.length === 1) {
        state[firstElement] = value;
    }
    else {
        if (!state.hasOwnProperty(firstElement)) {
            state[firstElement] = {};
        }
        mutateSafe(state[firstElement], path.slice(1), value);
    }
}
exports.mutateSafe = mutateSafe;
/**
 * set an item in state, creating all intermediate nodes as necessary
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {*} value
 * @returns {T}
 */
function setSafe(state, path, value) {
    if (path.length === 0) {
        return Object.assign({}, value);
    }
    const firstElement = path[0];
    const copy = Array.isArray(state)
        ? state.slice()
        : Object.assign({}, state); // "as any" is a workaround for
    // https://github.com/Microsoft/TypeScript/issues/13557
    if (path.length === 1) {
        copy[firstElement] = value;
    }
    else {
        if (!copy.hasOwnProperty(firstElement)) {
            copy[firstElement] = {};
        }
        copy[firstElement] = setSafe(copy[firstElement], path.slice(1), value);
    }
    return copy;
}
exports.setSafe = setSafe;
/**
 * sets a value or do nothing if the path (except for the last element) doesn't exist.
 * That is: setOrNop does not create the object hierarchy referenced in the path but
 * it does add a new attribute to the object if necessary.
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {*} value
 * @returns {T}
 */
function setOrNop(state, path, value) {
    const firstElement = path[0];
    let result = state;
    if (path.length === 1) {
        result = Object.assign({}, state);
        result[firstElement] = value;
    }
    else {
        if (state.hasOwnProperty(firstElement)) {
            const temp = setOrNop(result[firstElement], path.slice(1), value);
            if (temp !== result[firstElement]) {
                result = clone(result);
                result[firstElement] = temp;
            }
        }
    }
    return result;
}
exports.setOrNop = setOrNop;
/**
 * sets a value or do nothing if the path or the key (last element of the path) doesn't exist.
 * This means changeOrNop only changes a pre-existing object attribute
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {*} value
 * @returns {T}
 */
function changeOrNop(state, path, value) {
    const firstElement = path[0];
    let result = state;
    if (path.length === 1) {
        if (state.hasOwnProperty(firstElement)) {
            result = Object.assign({}, state);
            result[firstElement] = value;
        }
    }
    else {
        if (state.hasOwnProperty(firstElement)) {
            const temp = changeOrNop(result[firstElement], path.slice(1), value);
            if (temp !== result[firstElement]) {
                result = clone(result);
                result[firstElement] = temp;
            }
        }
    }
    return result;
}
exports.changeOrNop = changeOrNop;
/**
 * delete a value or do nothing if the path doesn't exist
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @returns {T}
 */
function deleteOrNop(state, path) {
    const firstElement = path[0];
    let result = state;
    if (path.length === 1) {
        if (Array.isArray(state)) {
            result = [].concat(state);
            result.splice(firstElement, 1);
        }
        else if (state.hasOwnProperty(firstElement)) {
            result = Object.assign({}, state);
            delete result[firstElement];
        }
    }
    else {
        if (result.hasOwnProperty(firstElement)) {
            const temp = deleteOrNop(result[firstElement], path.slice(1));
            if (temp !== result[firstElement]) {
                result = clone(result);
                result[firstElement] = temp;
            }
        }
    }
    return result;
}
exports.deleteOrNop = deleteOrNop;
function setDefaultArray(state, path, fallback) {
    const firstElement = path[0];
    const copy = Array.isArray(state)
        ? state.slice()
        : Object.assign({}, state);
    if (path.length === 1) {
        copy[firstElement] = (!copy.hasOwnProperty(firstElement) || (copy[firstElement] === undefined))
            ? fallback
            : copy[firstElement].slice();
    }
    else {
        if (!copy.hasOwnProperty(firstElement)) {
            copy[firstElement] = {};
        }
        copy[firstElement] = setDefaultArray(copy[firstElement], path.slice(1), fallback);
    }
    return copy;
}
/**
 * push an item to an array inside state. This creates all intermediate
 * nodes and the array itself as necessary
 * @param state immutable object to update
 * @param path path to the item to update
 * @param value the value to add.
 */
function pushSafe(state, path, value) {
    const copy = setDefaultArray(state, path, []);
    getSafe(copy, path, undefined).push(value);
    return copy;
}
exports.pushSafe = pushSafe;
/**
 * add an item to an array inside state but don't allow duplicates
 * @param state immutable object to update
 * @param path path to the item to update
 * @param value the value to add.
 */
function addUniqueSafe(state, path, value) {
    const copy = setDefaultArray(state, path, []);
    const arr = getSafe(copy, path, undefined);
    if (arr.indexOf(value) !== -1) {
        return state;
    }
    arr.push(value);
    return copy;
}
exports.addUniqueSafe = addUniqueSafe;
/**
 * remove a value from an array by value
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {*} value
 * @returns {T}
 */
function removeValue(state, path, value) {
    const copy = setDefaultArray(state, path, []);
    const list = getSafe(copy, path, undefined);
    const idx = list.indexOf(value);
    if (idx !== -1) {
        list.splice(idx, 1);
    }
    return copy;
}
exports.removeValue = removeValue;
/**
 * remove all vales for which the predicate applies
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {(element: any) => boolean} predicate
 * @returns {T}
 */
function removeValueIf(state, path, predicate) {
    return setSafe(state, path, getSafe(state, path, []).filter((ele) => !predicate(ele)));
}
exports.removeValueIf = removeValueIf;
/**
 * shallow merge a value into the store at the specified location
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {Object} value
 * @returns {T}
 */
function merge(state, path, value) {
    const newVal = Object.assign({}, getSafe(state, path, {}), value);
    return setSafe(state, path, newVal);
}
exports.merge = merge;
function rehydrate(state, inbound, path) {
    const inState = getSafe(inbound, path, undefined);
    return inState !== undefined
        ? merge(state, [], inState)
        : state;
}
exports.rehydrate = rehydrate;
function waitUntil(predicate, interval = 100) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (predicate()) {
                resolve();
            }
            else {
                return waitUntil(predicate, interval);
            }
        }, interval);
    });
}
/**
 * return the stored static details about the currently selected game mode
 * or a fallback with the id '__placeholder'
 * the return value is a promise because known games are loaded during extension
 * initialization so there is quite a bit of code where we can't be sure
 * if this is yet available
 *
 * @export
 * @param {*} state
 * @returns {Promise<IGameStored>}
 */
function currentGame(store) {
    const fallback = { id: '__placeholder', name: '<No game>', requiredFiles: [] };
    let knownGames = getSafe(store.getState(), ['session', 'gameMode', 'known'], null);
    if ((knownGames !== null) && (knownGames !== undefined)) {
        const gameMode = selectors_1.activeGameId(store.getState());
        const res = knownGames.find((ele) => ele.id === gameMode);
        return Promise.resolve(res || fallback);
    }
    else {
        return waitUntil(() => {
            knownGames =
                getSafe(store.getState(), ['session', 'gameMode', 'known'], null);
            return (knownGames !== null) && (knownGames !== undefined);
        })
            .then(() => {
            const gameMode = selectors_1.activeGameId(store.getState());
            const res = knownGames.find((ele) => ele.id === gameMode);
            return Promise.resolve(res || fallback);
        });
    }
}
exports.currentGame = currentGame;
