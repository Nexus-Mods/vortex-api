"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCollectionSessionId = generateCollectionSessionId;
function generateCollectionSessionId(collectionId, profileId) {
    return `${collectionId}_${profileId}`;
}
