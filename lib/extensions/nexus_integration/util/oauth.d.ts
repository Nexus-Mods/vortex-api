type TokenType = 'Bearer';
export interface ITokenReply {
    access_token: string;
    token_type: TokenType;
    expires_in: number;
    refresh_token: string;
    scope: string;
}
interface IOAuthServerSettings {
    baseUrl: string;
    clientId: string;
    redirectUrl: string;
}
/**
 * deals with token exchange for OAuth2
 **/
declare class OAuth {
    private mVerifier;
    private mServerSettings;
    private mStates;
    private mServer;
    private mLastServerPort;
    private mLocalhost;
    constructor(settings: IOAuthServerSettings);
    sendRequest(onToken: (err: Error, token: ITokenReply) => void, onOpenPage: (url: string) => void): Promise<void>;
    receiveCode(code: string, state?: string): Promise<void>;
    private ensureServer;
    private checkServerStillRequired;
    private stopServer;
    private startServer;
    private onHTTPRequest;
    private postRequest;
    private static sanitizeBase64;
    private authorizeUrl;
    private sentAuthorizeToken;
}
export default OAuth;
