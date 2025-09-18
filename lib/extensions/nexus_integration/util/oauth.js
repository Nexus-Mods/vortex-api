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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const http = __importStar(require("node:http"));
const https = __importStar(require("node:https"));
const querystring = __importStar(require("node:querystring"));
const url = __importStar(require("node:url"));
const log_1 = require("../../../util/log");
const constants_1 = require("../constants");
const nexusmodslogo_1 = __importDefault(require("./nexusmodslogo"));
const CustomErrors_1 = require("../../../util/CustomErrors");
/* eslint-disable max-len */
function makeResultPage(success) {
    var html = [];
    html.push(`<!DOCTYPE html>

    <html lang="en">
    
    <head>
    <title>Authentication Status</title>
    
      <meta http-equiv="refresh" content="6; url=http://www.nexusmods.com/" />
    
    </head>
    
    <body style="display: flex; flex-direction: column; height: 50vh; justify-content: center; align-items: center; background-color: black; font-family: sans-serif; color: white;">
    
    <div style="text-align: center; ">
    
    <img width="200px" src="data:image/png;base64,${nexusmodslogo_1.default}" />`);
    if (success) {
        html.push(`
    <h1>Vortex log in successful!</h1>
  `);
    }
    else {
        html.push(`
    <h1>Vortex was unable to log in</h1>
    <p style="font-size: 1.2em;">Please check Vortex for more information</a></p>
  `);
    }
    html.push(`

  <p style="font-size: 1.2em;">Taking you to the <a href="http://www.nexusmods.com/" style="color: #D98F40;">Nexus Mods homepage</a></p>
    </div>
    </body>
    
    </html>
  `);
    return html.join("");
}
/* eslint-enable max-len */
/**
 * deals with token exchange for OAuth2
 **/
class OAuth {
    constructor(settings) {
        this.mStates = {};
        this.mServerSettings = settings;
        this.mLocalhost = url.parse(constants_1.OAUTH_REDIRECT_URL).protocol === 'http:';
    }
    sendRequest(onToken, onOpenPage) {
        return __awaiter(this, void 0, void 0, function* () {
            // importing uuid can take significant amounts of time so always delay it as far as possible
            const uuid = (yield Promise.resolve().then(() => __importStar(require('uuid/v1')))).default;
            const crypto = (yield Promise.resolve().then(() => __importStar(require('crypto')))).default;
            const state = uuid();
            this.mStates[state] = onToken;
            // see https://www.rfc-editor.org/rfc/rfc7636#section-4.1
            this.mVerifier = Buffer.from(uuid().replace(/-/g, '')).toString('base64');
            // see https://www.rfc-editor.org/rfc/rfc7636#section-4.2
            const challenge = crypto.createHash('sha256').update(this.mVerifier).digest('base64');
            try {
                this.mLastServerPort = this.mLocalhost ? yield this.ensureServer() : -1;
            }
            catch (err) {
                (0, log_1.log)('error', 'failed to start server', err);
                throw err;
            }
            // see https://www.rfc-editor.org/rfc/rfc7636#section-4.3
            const url = this.authorizeUrl(challenge, state);
            // call callback with generated url
            onOpenPage(url);
        });
    }
    receiveCode(code, state) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            if (state === undefined) {
                for (const key of Object.keys(this.mStates)) {
                    yield this.receiveCode(code, key);
                }
            }
            else {
                if (this.mStates[state] === undefined) {
                    throw new CustomErrors_1.ArgumentInvalid('unexpected authorize token');
                }
                try {
                    const tokenReply = yield this.sentAuthorizeToken(code);
                    (_b = (_a = this.mStates)[state]) === null || _b === void 0 ? void 0 : _b.call(_a, null, tokenReply);
                }
                catch (err) {
                    (_d = (_c = this.mStates)[state]) === null || _d === void 0 ? void 0 : _d.call(_c, err, undefined);
                }
                delete this.mStates[state];
            }
        });
    }
    ensureServer() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.mServer === undefined) {
                (0, log_1.log)('info', 'starting localhost server to receive oauth response');
                yield this.startServer();
            }
            const addr = this.mServer.address();
            (0, log_1.log)('info', 'using localhost server for oauth response', { port: addr.port });
            return addr.port;
        });
    }
    checkServerStillRequired() {
        if (this.mLocalhost && (Object.keys(this.mStates).length === 0)) {
            (0, log_1.log)('info', 'no more oauth responses outstanding, stopping server');
            this.stopServer();
        }
    }
    stopServer() {
        var _a, _b;
        (_b = (_a = this.mServer) === null || _a === void 0 ? void 0 : _a.close) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.mServer = undefined;
    }
    startServer() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this.mServer = http.createServer()
                        .listen(undefined, '127.0.0.1')
                        .on('error', reject)
                        .on('listening', resolve)
                        .on('request', (req, resp) => {
                        this.onHTTPRequest(req, resp);
                    });
                }
                catch (err) {
                    reject(err);
                }
            });
        });
    }
    onHTTPRequest(req, resp) {
        var _a, _b, _c;
        const queryItems = url.parse(req.url, true).query;
        const getQueryParam = (key) => {
            const tmp = queryItems[key];
            return Array.isArray(tmp) ? tmp[0] : tmp;
        };
        const code = getQueryParam('code');
        const state = getQueryParam('state');
        const error = getQueryParam('error');
        const error_description = getQueryParam('error_description');
        req.setEncoding('utf-8');
        let msg = '';
        req
            .on('data', chunk => { msg += chunk; });
        if ((code !== undefined) && (state !== undefined)) {
            (() => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield this.receiveCode(code, state);
                }
                catch (err) {
                    // ignore unexpected codes
                }
            }))();
            resp.write(makeResultPage(true));
            this.checkServerStillRequired();
        }
        else if (error !== undefined) {
            const err = new Error((_a = error_description) !== null && _a !== void 0 ? _a : 'Description missing');
            err['code'] = error;
            (_c = (_b = this.mStates)[state]) === null || _c === void 0 ? void 0 : _c.call(_b, err, undefined);
            resp.write(makeResultPage(false));
            delete this.mStates[state];
            this.checkServerStillRequired();
        }
        resp.end();
    }
    postRequest(tokenUrl, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestStr = querystring.stringify(request);
            return new Promise((resolve, reject) => {
                const req = https.request(Object.assign(Object.assign({}, url.parse(tokenUrl)), { method: 'POST', headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Content-Length': requestStr.length,
                    } }), res => {
                    let responseStr = '';
                    let error;
                    res
                        .on('data', chunk => responseStr += chunk.toString())
                        .on('error', err => error = err)
                        .on('end', () => {
                        if (error) {
                            reject(error);
                        }
                        else if (res.statusCode !== 200) {
                            try {
                                const errDetails = JSON.parse(responseStr);
                                const err = new Error(`Invalid request: "${errDetails === null || errDetails === void 0 ? void 0 : errDetails.error}"`);
                                err['code'] = errDetails === null || errDetails === void 0 ? void 0 : errDetails.error;
                                // these details are explicitly intended for the developer, not for the user
                                err['details'] = errDetails === null || errDetails === void 0 ? void 0 : errDetails.error_description;
                                reject(err);
                            }
                            catch (err) {
                                const errMessage = responseStr.includes('<!DOCTYPE html>')
                                    ? `Received HTML response from ${tokenUrl} when JSON was expected. Please check your connection settings.`
                                    : `Failed to parse failure response: "${responseStr.substring(0, 50)}"`;
                                reject(new Error(errMessage));
                            }
                        }
                        else {
                            resolve(responseStr);
                        }
                    });
                });
                req.on('error', err => console.error('token req error', err));
                req.write(requestStr);
                req.end();
            });
        });
    }
    // sanitize a base64 string to use in urls
    static sanitizeBase64(input) {
        const replacements = {
            '+': '-',
            '/': '_',
        };
        return input
            .replace(/[+/]/g, char => replacements[char])
            .replace(/=*$/, '');
    }
    authorizeUrl(challenge, state) {
        const request = {
            response_type: 'code',
            scope: 'openid profile email',
            code_challenge_method: 'S256',
            client_id: this.mServerSettings.clientId,
            redirect_uri: this.mServerSettings.redirectUrl.replace('PORT', this.mLastServerPort.toString()),
            state,
            code_challenge: OAuth.sanitizeBase64(challenge),
        };
        return `${this.mServerSettings.baseUrl}/authorize?${querystring.stringify(request)}`;
    }
    sentAuthorizeToken(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = {
                grant_type: 'authorization_code',
                client_id: this.mServerSettings.clientId,
                redirect_uri: this.mServerSettings.redirectUrl.replace('PORT', this.mLastServerPort.toString()),
                code,
                code_verifier: this.mVerifier,
            };
            const tokenUrl = `${this.mServerSettings.baseUrl}/token`;
            // TODO: validate result
            return JSON.parse(yield this.postRequest(tokenUrl, request));
        });
    }
}
exports.default = OAuth;
