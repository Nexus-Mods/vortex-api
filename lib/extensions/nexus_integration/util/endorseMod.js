"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endorseCollection = endorseCollection;
exports.endorseMod = endorseMod;
const bluebird_1 = __importDefault(require("bluebird"));
/**
 * endorse the mod by the server call
 *
 * @param {string} activeGameId
 * @param {NexusT} nexus
 * @param {string} endorseStatus
 * @param {string} modId,
 * @return {boolean} isEndorsed
 *
 */
function endorseMod(nexus, gameId, nexusModId, version, endorseStatus) {
    endorseStatus = endorseStatus.toLowerCase();
    if (endorseStatus === "undecided" ||
        endorseStatus === "abstained" ||
        endorseStatus === "") {
        endorseStatus = "endorse";
    }
    else if (endorseStatus === "endorsed") {
        endorseStatus = "abstain";
    }
    return bluebird_1.default.resolve(nexus.endorseMod(nexusModId, version, endorseStatus, gameId)).then((result) => result.status);
}
function endorseCollection(nexus, gameId, collectionId, endorseStatus) {
    endorseStatus = endorseStatus.toLowerCase();
    if (endorseStatus === "undecided" ||
        endorseStatus === "abstained" ||
        endorseStatus === "") {
        endorseStatus = "endorse";
    }
    else if (endorseStatus === "endorsed") {
        endorseStatus = "abstain";
    }
    return bluebird_1.default.resolve(nexus.endorseCollection(collectionId, endorseStatus, gameId));
}
