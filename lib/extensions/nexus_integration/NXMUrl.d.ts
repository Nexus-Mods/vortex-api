import { URL } from 'url';
export declare enum NXMType {
    Mod = 0,
    Collection = 1,
    OAuth = 2,
    Premium = 3
}
declare class NXMUrl {
    private mGameId;
    private mModId;
    private mFileId;
    private mCollectionId;
    private mRevisionId;
    private mCollectionSlug;
    private mRevisionNumber;
    private mOAuthCode;
    private mOAuthState;
    private mKey;
    private mExpires;
    private mUserId;
    private mView;
    private mExtraParams;
    private mPremium;
    constructor(input: string | URL);
    get type(): 'mod' | 'collection' | 'oauth' | 'premium';
    get identifiers(): {
        type: NXMType;
        gameId: string;
        modId?: number;
        fileId?: number;
        collectionId?: number;
        revisionId?: number;
        collectionSlug?: string;
        revisionNumber?: number;
    };
    get gameId(): string;
    get modId(): number;
    get fileId(): number;
    get collectionId(): number;
    get revisionId(): number;
    get collectionSlug(): string;
    get revisionNumber(): number;
    get oauthCode(): string;
    get oauthState(): string;
    /**
     * a key identifying the user that requested the nxm link
     */
    get key(): string;
    /**
     * returns a timestamp of when the link becomes invalid
     */
    get expires(): number;
    /**
     * returns the user id for whom the download was created
     */
    get userId(): number;
    get view(): boolean;
    getParam(key: string): string;
}
export default NXMUrl;
