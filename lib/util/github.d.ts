import Promise from 'bluebird';
export interface IGitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}
export interface IGitHubAsset {
    browser_download_url: string;
    content_type: string;
    created_at: string;
    download_count: number;
    id: string;
    label: any;
    name: string;
    node_id: string;
    size: number;
    state: string;
    updated_at: string;
    uploader: IGitHubUser;
    url: string;
}
export interface IGitHubRelease {
    assets: IGitHubAsset[];
    assets_url: string;
    author: IGitHubUser;
    body: string;
    created_at: string;
    draft: boolean;
    html_url: string;
    id: number;
    name: string;
    node_id: string;
    prerelease: boolean;
    published_at: string;
    tag_name: string;
    tarball_url: string;
    target_commitish: string;
    upload_url: string;
    url: string;
    zipball_url: string;
}
export declare class RateLimitExceeded extends Error {
    constructor();
}
/**
 * wrap requests to the Vortex GitHub repo, caching results where appropriate
 *
 * @class GitHub
 */
declare class GitHub {
    private static RELEASE_CUTOFF;
    private static USER_AGENT;
    private static CONFIG_BRANCH;
    private static repoUrl;
    private static rawUrl;
    private mReleaseCache;
    private mRatelimitReset;
    releases(): Promise<IGitHubRelease[]>;
    fetchConfig(config: string): Promise<any>;
    private query;
    private queryReleases;
}
declare const _default: GitHub;
export default _default;
