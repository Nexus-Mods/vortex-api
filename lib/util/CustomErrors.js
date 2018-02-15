"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotSupportedError extends Error {
    constructor() {
        super('Not supported');
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}
exports.NotSupportedError = NotSupportedError;
class ProcessCanceled extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.ProcessCanceled = ProcessCanceled;
class UserCanceled extends Error {
    constructor() {
        super('canceled by user');
        this.name = this.constructor.name;
    }
}
exports.UserCanceled = UserCanceled;
class HTTPError extends Error {
    constructor(statusCode, message, body) {
        super(`HTTP (${statusCode}) - ${message}`);
        this.name = this.constructor.name;
        this.mBody = body;
    }
    get body() {
        return this.mBody;
    }
}
exports.HTTPError = HTTPError;
