"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NXMType = void 0;
const CustomErrors_1 = require("../../util/CustomErrors");
const url_1 = require("url");
const sUrlExpression = /\/mods\/(\d+)\/files\/(\d+)/i;
const sCollectionUrlExpression = /\/collections\/(\w+)\/revisions\/(\d+|latest)/i;
var NXMType;
(function (NXMType) {
    NXMType[NXMType["Mod"] = 0] = "Mod";
    NXMType[NXMType["Collection"] = 1] = "Collection";
    NXMType[NXMType["OAuth"] = 2] = "OAuth";
    NXMType[NXMType["Premium"] = 3] = "Premium";
})(NXMType || (exports.NXMType = NXMType = {}));
class NXMUrl {
    constructor(input) {
        var _a;
        this.mExtraParams = {};
        let parsed;
        try {
            parsed = typeof input === "string" ? new url_1.URL(input) : input;
        }
        catch (err) {
            throw new CustomErrors_1.DataInvalid('invalid nxm url "' + input + '"');
        }
        if (parsed.protocol !== "nxm:") {
            throw new CustomErrors_1.DataInvalid('invalid nxm url "' + input + '"');
        }
        this.mGameId = parsed.hostname;
        const matches = parsed.pathname.match(sUrlExpression);
        const collMatches = parsed.pathname.match(sCollectionUrlExpression);
        if (matches !== null) {
            if (matches.length !== 3) {
                throw new CustomErrors_1.DataInvalid('invalid nxm url "' + input + '"');
            }
            this.mModId = parseInt(matches[1], 10);
            this.mFileId = parseInt(matches[2], 10);
        }
        else if (collMatches !== null) {
            if (collMatches.length !== 3) {
                throw new CustomErrors_1.DataInvalid('invalid nxm url "' + input + '"');
            }
            // TODO: legacy, drop after alpha phase
            this.mCollectionId = parseInt(collMatches[1], 10);
            if (collMatches[1].length < 6 && !isNaN(this.mCollectionId)) {
                this.mRevisionId = parseInt(collMatches[2], 10);
            }
            else {
                this.mCollectionId = undefined;
                this.mCollectionSlug = collMatches[1];
                if (collMatches[2] === "latest") {
                    this.mRevisionNumber = -1;
                }
                else {
                    this.mRevisionNumber = parseInt(collMatches[2], 10);
                }
            }
        }
        else if (parsed.hostname === "oauth" && parsed.pathname === "/callback") {
            this.mOAuthCode = parsed.searchParams.get("code");
            this.mOAuthState = parsed.searchParams.get("state");
        }
        else if (parsed.hostname === "premium") {
            this.mPremium = true;
        }
        else {
            throw new CustomErrors_1.DataInvalid(`invalid nxm url "${input}"`);
        }
        this.mKey = parsed.searchParams.get("key") || undefined;
        const exp = parsed.searchParams.get("expires") || undefined;
        this.mExpires = exp !== undefined ? parseInt(exp, 10) : undefined;
        const userId = parsed.searchParams.get("user_id") || undefined;
        this.mUserId = userId !== undefined ? parseInt(userId, 10) : undefined;
        const view = (_a = parsed.searchParams.get("view")) !== null && _a !== void 0 ? _a : "0";
        this.mView =
            view !== undefined
                ? view.toLowerCase() === "true" || parseInt(view, 10) > 0
                : undefined;
        for (const entry of parsed.searchParams.entries()) {
            this.mExtraParams[entry[0]] = entry[1];
        }
    }
    get type() {
        if (this.mOAuthCode !== undefined) {
            return "oauth";
        }
        else if (this.mPremium) {
            return "premium";
        }
        else if (this.mCollectionId !== undefined ||
            this.mCollectionSlug !== undefined) {
            return "collection";
        }
        else {
            return "mod";
        }
    }
    get identifiers() {
        return this.type === "mod"
            ? {
                type: NXMType.Mod,
                gameId: this.mGameId,
                modId: this.mModId,
                fileId: this.mFileId,
            }
            : this.type === "collection"
                ? {
                    type: NXMType.Collection,
                    gameId: this.mGameId,
                    collectionId: this.mCollectionId,
                    revisionId: this.mRevisionId,
                    collectionSlug: this.mCollectionSlug,
                    revisionNumber: this.mRevisionNumber,
                }
                : null;
    }
    get gameId() {
        return this.mGameId;
    }
    get modId() {
        return this.mModId;
    }
    get fileId() {
        return this.mFileId;
    }
    get collectionId() {
        return this.mCollectionId;
    }
    get revisionId() {
        return this.mRevisionId;
    }
    get collectionSlug() {
        return this.mCollectionSlug;
    }
    get revisionNumber() {
        return this.mRevisionNumber;
    }
    get oauthCode() {
        return this.mOAuthCode;
    }
    get oauthState() {
        return this.mOAuthState;
    }
    /**
     * a key identifying the user that requested the nxm link
     */
    get key() {
        return this.mKey;
    }
    /**
     * returns a timestamp of when the link becomes invalid
     */
    get expires() {
        return this.mExpires;
    }
    /**
     * returns the user id for whom the download was created
     */
    get userId() {
        return this.mUserId;
    }
    get view() {
        return this.mView;
    }
    getParam(key) {
        return this.mExtraParams[key];
    }
}
exports.default = NXMUrl;
