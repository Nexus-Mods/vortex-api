"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCollectionSessionId = generateCollectionSessionId;
exports.modRuleId = modRuleId;
function generateCollectionSessionId(collectionId, profileId) {
    return `${collectionId}_${profileId}`;
}
function modRuleId(input) {
    return input.type + '_' + (input.reference.fileMD5
        || input.reference.id
        || input.reference.logicalFileName
        || input.reference.fileExpression
        || input.reference.description);
}
