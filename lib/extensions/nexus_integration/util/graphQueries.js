"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLLECTION_SEARCH_QUERY = exports.CURRENT_REVISION_INFO = exports.FULL_REVISION_INFO = exports.FULL_COLLECTION_INFO = void 0;
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
    permissions: {
        global: true,
        key: true,
    },
    recentRating: true,
    recentRatingCount: true,
};
exports.FULL_REVISION_INFO = Object.assign(Object.assign({}, revisionInfo), { collection: exports.FULL_COLLECTION_INFO });
exports.CURRENT_REVISION_INFO = {
    currentRevision: exports.FULL_REVISION_INFO,
};
exports.COLLECTION_SEARCH_QUERY = {
    id: true,
    name: true,
    slug: true,
    collectionStatus: true,
    endorsements: true,
    totalDownloads: true,
    summary: true,
    badges: {
        name: true,
        description: true
    },
    permissions: {
        global: true,
        key: true
    },
    category: {
        name: true
    },
    game: {
        domainName: true,
        id: true,
        name: true
    },
    latestPublishedRevision: {
        adultContent: true,
        modCount: true,
        totalSize: true,
    },
    tileImage: {
        url: true,
        thumbnailUrl: {
            $filter: { size: 'med' }
        }
    },
    user: {
        avatar: true,
        memberId: true,
        name: true
    },
};
