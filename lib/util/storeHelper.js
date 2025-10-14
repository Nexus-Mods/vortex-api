"use strict";
/**
 * Helper functions when working with immutable state (or immutable objects in general)
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSafe = getSafe;
exports.getSafeCI = getSafeCI;
exports.mutateSafe = mutateSafe;
exports.setSafe = setSafe;
exports.setOrNop = setOrNop;
exports.changeOrNop = changeOrNop;
exports.deleteOrNop = deleteOrNop;
exports.setDefaultArray = setDefaultArray;
exports.pushSafe = pushSafe;
exports.addUniqueSafe = addUniqueSafe;
exports.removeValue = removeValue;
exports.removeValueIf = removeValueIf;
exports.merge = merge;
exports.rehydrate = rehydrate;
exports.currentGame = currentGame;
const bluebird_1 = __importDefault(require("bluebird"));
function clone(input) {
    return Array.isArray(input)
        ? input
        : Object.assign({}, input);
}
/**
 * return an item from state or the fallback if the path doesn't lead
 * to an item or if the item is null/undefined.
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
    for (let i = 0; i < path.length; i++) {
        current = current === null || current === void 0 ? void 0 : current[path[i]];
        if (current == null) {
            return fallback;
        }
    }
    return current !== null && current !== void 0 ? current : fallback;
}
/**
 * case insensitive variant of getSafe
 */
function getSafeCI(state, path, fallback) {
    let current = state;
    const getCaseCorrected = (obj, prop) => {
        if (typeof (prop) === 'number') {
            return obj[prop] !== undefined ? prop : undefined;
        }
        const keys = Object.keys(obj);
        const idx = keys.map(key => key.toLowerCase()).indexOf(prop.toLowerCase());
        if (idx === -1) {
            return undefined;
        }
        return keys[idx];
    };
    for (const segment of path) {
        if ((current === undefined) || (current === null)) {
            return fallback;
        }
        const caseCorrected = getCaseCorrected(current, segment);
        if (caseCorrected === undefined) {
            return fallback;
        }
        current = current[caseCorrected];
    }
    return current;
}
function mutateSafe(state, path, value) {
    const firstElement = path[0];
    if (path.length === 1) {
        state[firstElement] = value;
    }
    else {
        if (!Object.hasOwnProperty.call(state, firstElement)) {
            state[firstElement] = {};
        }
        mutateSafe(state[firstElement], path.slice(1), value);
    }
}
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
        if (!Object.hasOwnProperty.call(copy, firstElement)) {
            copy[firstElement] = {};
        }
        copy[firstElement] = setSafe(copy[firstElement], path.slice(1), value);
    }
    return copy;
}
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
        if (Object.hasOwnProperty.call(state, firstElement)) {
            const temp = setOrNop(result[firstElement], path.slice(1), value);
            if (temp !== result[firstElement]) {
                result = clone(result);
                result[firstElement] = temp;
            }
        }
    }
    return result;
}
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
        if (Object.hasOwnProperty.call(state, firstElement)) {
            result = Object.assign({}, state);
            result[firstElement] = value;
        }
    }
    else {
        if (Object.hasOwnProperty.call(state, firstElement)) {
            const temp = changeOrNop(result[firstElement], path.slice(1), value);
            if (temp !== result[firstElement]) {
                result = clone(result);
                result[firstElement] = temp;
            }
        }
    }
    return result;
}
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
        else if (Object.hasOwnProperty.call(state, firstElement)) {
            result = Object.assign({}, state);
            delete result[firstElement];
        }
    }
    else {
        if (Object.hasOwnProperty.call(result, firstElement)) {
            const temp = deleteOrNop(result[firstElement], path.slice(1));
            if (temp !== result[firstElement]) {
                result = clone(result);
                result[firstElement] = temp;
            }
        }
    }
    return result;
}
function setDefaultArray(state, path, fallback) {
    const firstElement = path[0];
    const copy = Array.isArray(state)
        ? state.slice()
        : Object.assign({}, state);
    if (path.length === 0) {
        return ((copy !== undefined) && Array.isArray(copy))
            ? copy
            : fallback;
    }
    else if (path.length === 1) {
        copy[firstElement] = (!Object.hasOwnProperty.call(copy, firstElement)
            || !Array.isArray(copy[firstElement]))
            ? fallback
            : copy[firstElement].slice();
    }
    else {
        if (!Object.hasOwnProperty.call(copy, firstElement)
            || (typeof (copy[firstElement]) !== 'object')) {
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
    if (idx === -1) {
        return state;
    }
    list.splice(idx, 1);
    return copy;
}
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
    const newVal = Object.assign(Object.assign({}, getSafe(state, path, {})), value);
    return setSafe(state, path, newVal);
}
function rehydrate(state, inbound, path, replace, defaults) {
    const inState = getSafe(inbound, path, undefined);
    return (inState !== undefined)
        ? merge(replace ? defaults : state, [], inState)
        : state;
}
function waitUntil(predicate, interval = 100) {
    return new bluebird_1.default((resolve, reject) => {
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
    // Helper function to get the active game ID without importing selectors
    // This inlines the logic from activeGameId selector to break circular dependency
    const getActiveGameId = (state) => {
        const profileId = getSafe(state, ['settings', 'profiles', 'activeProfileId'], undefined);
        const profile = getSafe(state, ['persistent', 'profiles', profileId], undefined);
        return profile !== undefined ? profile.gameId : undefined;
    };
    let knownGames = getSafe(store.getState(), ['session', 'gameMode', 'known'], null);
    if ((knownGames !== null) && (knownGames !== undefined)) {
        const gameMode = getActiveGameId(store.getState());
        const res = knownGames.find((ele) => ele.id === gameMode);
        return bluebird_1.default.resolve(res || fallback);
    }
    else {
        return waitUntil(() => {
            knownGames =
                getSafe(store.getState(), ['session', 'gameMode', 'known'], null);
            return (knownGames !== null) && (knownGames !== undefined);
        })
            .then(() => {
            const gameMode = getActiveGameId(store.getState());
            const res = knownGames.find((ele) => ele.id === gameMode);
            return bluebird_1.default.resolve(res || fallback);
        });
    }
}
