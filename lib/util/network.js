"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawRequest = rawRequest;
exports.jsonRequest = jsonRequest;
exports.request = request;
exports.upload = upload;
/* eslint-disable */
const http_1 = require("http");
const https_1 = require("https");
const CustomErrors_1 = require("./CustomErrors");
const log_1 = require("./log");
function rawRequest(apiURL, options) {
    if (options === undefined) {
        options = {};
    }
    return new Promise((resolve, reject) => {
        const parsed = new URL(apiURL);
        const get = (parsed.protocol === 'http:')
            ? http_1.get
            : https_1.get;
        get({
            hostname: parsed.hostname,
            port: parsed.port,
            path: parsed.pathname + parsed.search,
            headers: { 'User-Agent': 'Vortex' },
        }, (res) => {
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
    const parsed = new URL(reqURL);
    const reqFunc = (parsed.protocol === 'http:')
        ? http_1.request
        : https_1.request;
    const result = reqFunc({
        hostname: parsed.hostname,
        port: parsed.port,
        path: parsed.pathname + parsed.search,
        method,
        headers: Object.assign({ 'User-Agent': 'Vortex' }, headers),
    }, cb);
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
