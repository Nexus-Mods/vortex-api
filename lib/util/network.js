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
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawRequest = rawRequest;
exports.jsonRequest = jsonRequest;
exports.request = request;
exports.upload = upload;
/* eslint-disable */
const http_1 = require("http");
const https_1 = require("https");
const url = __importStar(require("url"));
const CustomErrors_1 = require("./CustomErrors");
const log_1 = require("./log");
function rawRequest(apiURL, options) {
    if (options === undefined) {
        options = {};
    }
    return new Promise((resolve, reject) => {
        const parsed = url.parse(apiURL);
        const get = (parsed.protocol === 'http:')
            ? http_1.get
            : https_1.get;
        get(Object.assign(Object.assign({}, parsed), { headers: { 'User-Agent': 'Vortex' } }), (res) => {
            const { statusCode } = res;
            const contentType = res.headers['content-type'];
            let err;
            if (statusCode !== 200) {
                err = `Request Failed. Status Code: ${statusCode}`;
            }
            else if ((options.expectedContentType !== undefined)
                && !options.expectedContentType.test(contentType)) {
                err = `Invalid content-type ${contentType}`;
            }
            if (options.encoding !== undefined) {
                res.setEncoding(options.encoding);
            }
            let rawData = (options.encoding !== undefined)
                ? ''
                : Buffer.alloc(0);
            res.on('data', (chunk) => {
                if (options.encoding !== undefined) {
                    rawData += chunk;
                }
                else {
                    rawData = Buffer.concat([rawData, chunk]);
                }
            });
            res.on('end', () => {
                if (!!err) {
                    const errMsg = new CustomErrors_1.TemporaryError(err);
                    errMsg.message = rawData.toString((options === null || options === void 0 ? void 0 : options.encoding) || 'utf-8');
                    return reject(errMsg);
                }
                try {
                    return resolve(rawData);
                }
                catch (e) {
                    return reject(e);
                }
            })
                .on('error', reject);
        })
            .on('error', reject);
    });
}
function jsonRequest(apiURL) {
    return rawRequest(apiURL, {
        expectedContentType: /^(application\/json|text\/plain)/,
        encoding: 'utf-8',
    })
        .then(rawData => {
        try {
            return JSON.parse(rawData);
        }
        catch (err) {
            return Promise.reject(new CustomErrors_1.DataInvalid('Invalid json response: ' + rawData));
        }
    });
}
function request(method, reqURL, headers, cb) {
    const parsed = url.parse(reqURL);
    const reqFunc = (parsed.protocol === 'http:')
        ? http_1.request
        : https_1.request;
    const result = reqFunc(Object.assign(Object.assign({}, parsed), { method, headers: Object.assign({ 'User-Agent': 'Vortex' }, headers) }), cb);
    return result;
}
function upload(targetUrl, dataStream, dataSize) {
    return new Promise((resolve, reject) => {
        (0, log_1.log)('debug', 'uploading file', { targetUrl, dataSize });
        const started = Date.now();
        const req = request('PUT', targetUrl, {
            'Content-Type': 'application/octet-stream',
            'Content-Length': dataSize.toString(),
        }, res => {
            const { statusCode } = res;
            (0, log_1.log)('debug', 'upload complete', { targetUrl, dataSize, statusCode, elapsed: Date.now() - started });
            let err;
            if (statusCode !== 200) {
                err = `Request Failed. Status Code: ${statusCode}`;
            }
            let rawData = Buffer.alloc(0);
            res.on('data', (chunk) => {
                rawData = Buffer.concat([rawData, chunk]);
            })
                .on('end', () => {
                try {
                    resolve(rawData);
                }
                catch (e) {
                    reject(e);
                }
            })
                .on('error', (reqErr) => {
                return reject(reqErr);
            });
        });
        req.on('error', err => {
            return reject(err);
        });
        dataStream.pipe(req, {
            end: true,
        });
    });
}
