"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENT_REVISION_INFO = exports.FULL_REVISION_INFO = exports.FULL_COLLECTION_INFO = void 0;
const revisionInfo = {
    id: true,
    revisionNumber: true,
    adultContent: true,
    collectionChangelog: {
        createdAt: true,
        description: true,
        id: true,
    },
    createdAt: true,
    updatedAt: true,
    downloadLink: true,
    fileSize: true,
    gameVersions: {
        id: true,
        reference: true,
    },
    rating: {
        average: true,
        total: true,
    },
    metadata: {
        ratingValue: true,
    },
    status: true,
    modFiles: {
        file: {
            mod: {
                author: true,
                category: true,
                modCategory: {
                    id: true,
                    name: true,
                },
                name: true,
                pictureUrl: true,
                status: true,
                summary: true,
                uploader: {
                    name: true,
                    avatar: true,
                    memberId: true,
                },
                version: true,
            },
            modId: true,
            fileId: true,
            size: true,
            name: true,
            version: true,
            description: true,
            uri: true,
            game: {
                domainName: true,
            },
            owner: {
                name: true,
                avatar: true,
                memberId: true,
            },
        },
    },
};
exports.FULL_COLLECTION_INFO = {
    id: true,
    slug: true,
    name: true,
    endorsements: true,
    user: {
        name: true,
        avatar: true,
        memberId: true,
    },
    game: {
        domainName: true,
    },
    createdAt: true,
    updatedAt: true,
    tileImage: {
        url: true,
    },
    revisions: {
        id: true,
        revisionNumber: true,
        revisionStatus: true,
    },
    description: true,
    summary: true,
    forumTopic: {
        postsCount: true,
    },
    commentLink: true,
    overallRating: true,
    overallRatingCount: true,
    viewerIsBlocked: true,
    recentRating: true,
    recentRatingCount: true,
};
exports.FULL_REVISION_INFO = Object.assign(Object.assign({}, revisionInfo), { collection: exports.FULL_COLLECTION_INFO });
exports.CURRENT_REVISION_INFO = {
    currentRevision: exports.FULL_REVISION_INFO,
};
