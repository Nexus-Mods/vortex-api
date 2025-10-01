"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitExceeded = void 0;
const log_1 = require("./log");
const bluebird_1 = __importDefault(require("bluebird"));
const https = __importStar(require("https"));
const semver = __importStar(require("semver"));
const CustomErrors_1 = require("./CustomErrors");
class RateLimitExceeded extends Error {
    constructor() {
        super('Too many requests to GitHub');
        this.name = this.constructor.name;
    }
}
exports.RateLimitExceeded = RateLimitExceeded;
/**
 * wrap requests to the Vortex GitHub repo, caching results where appropriate
 *
 * @class GitHub
 */
class GitHub {
    static repoUrl() {
        const isPreviewBuild = process.env.IS_PREVIEW_BUILD === 'true';
        const repo = isPreviewBuild ? 'Vortex-Staging' : 'Vortex';
        return `https://api.github.com/repos/Nexus-Mods/${repo}`;
    }
    static rawUrl() {
        const isPreviewBuild = process.env.IS_PREVIEW_BUILD === 'true';
        const repo = isPreviewBuild ? 'Vortex-Staging' : 'Vortex';
        return `https://raw.githubusercontent.com/Nexus-Mods/${repo}`;
    }
    releases() {
        if (this.mReleaseCache === undefined) {
            this.mReleaseCache = this.queryReleases()
                .catch(err => {
                this.mReleaseCache = undefined;
                return bluebird_1.default.reject(err);
            });
        }
        return this.mReleaseCache;
    }
    fetchConfig(config) {
        return this.query(GitHub.rawUrl(), `${GitHub.CONFIG_BRANCH}/${config}.json`);
    }
    query(baseUrl, request) {
        if ((this.mRatelimitReset !== undefined) && (this.mRatelimitReset > Date.now())) {
            return bluebird_1.default.reject(new RateLimitExceeded());
        }
        const stackErr = new Error();
        return new bluebird_1.default((resolve, reject) => {
            const relUrl = new URL(`${baseUrl}/${request}`);
            const options = {
                port: relUrl.port,
                hostname: relUrl.hostname,
                path: relUrl.pathname + relUrl.search,
                headers: {
                    'User-Agent': GitHub.USER_AGENT,
                },
            };
            https.get(options, res => {
                res.setEncoding('utf-8');
                const callsRemaining = parseInt(res.headers['x-ratelimit-remaining'], 10);
                if ((res.statusCode === 403) && (callsRemaining === 0)) {
                    const resetDate = parseInt(res.headers['x-ratelimit-reset'], 10) * 1000;
                    (0, log_1.log)('info', 'GitHub rate limit exceeded', { reset_at: (new Date(resetDate)).toString() });
                    this.mRatelimitReset = resetDate;
                    return reject(new RateLimitExceeded());
                }
                let output = '';
                res
                    .on('data', data => output += data)
                    .on('end', () => {
                    try {
                        return resolve(JSON.parse(output));
                    }
                    catch (parseErr) {
                        const message = output.split('\n')[0];
                        const error = new Error(message);
                        error.stack = stackErr.stack;
                        reject(error);
                    }
                });
            })
                .on('error', err => {
                reject(err);
            })
                .end();
        });
    }
    queryReleases() {
        return this.query(GitHub.repoUrl(), 'releases')
            .then((releases) => {
            if (!Array.isArray(releases)) {
                return bluebird_1.default.reject(new CustomErrors_1.DataInvalid('expected array of github releases'));
            }
            const current = releases
                .filter(rel => semver.valid(rel.name) && semver.gte(rel.name, GitHub.RELEASE_CUTOFF))
                .sort((lhs, rhs) => semver.compare(lhs.name, rhs.name));
            return bluebird_1.default.resolve(current);
        });
    }
}
// oldest release to be returned when retrieving releases
GitHub.RELEASE_CUTOFF = '0.12.7';
GitHub.USER_AGENT = 'Vortex';
GitHub.CONFIG_BRANCH = 'announcements';
exports.default = new GitHub();
