"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEntryNotFound = exports.GameStoreNotFound = void 0;
class GameStoreNotFound extends Error {
    constructor(name) {
        super("Missing game store extension");
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.mName = name;
    }
    get storeName() {
        return this.mName;
    }
}
exports.GameStoreNotFound = GameStoreNotFound;
class GameEntryNotFound extends Error {
    constructor(name, store, existing) {
        super("Game entry not found");
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.mName = name;
        this.mStore = store;
        this.mExistingNames = existing;
    }
    // Returns the name of the game we couldn't find.
    get gameName() {
        return this.mName;
    }
    // Name/Id of the store that couldn't find the game.
    get storeName() {
        return this.mStore;
    }
    // Returns the name of the games we had confirmed exist
    //  in this game store.
    get existingGames() {
        return this.mExistingNames;
    }
}
exports.GameEntryNotFound = GameEntryNotFound;
