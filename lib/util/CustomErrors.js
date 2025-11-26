"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveBrokenError = exports.SelfCopyCheckError = exports.ThirdPartyError = exports.TimeoutError = exports.StalledError = exports.NotFound = exports.MissingInterpreter = exports.HTTPError = exports.TemporaryError = exports.SetupError = exports.DocumentsPathMissing = exports.MissingDependency = exports.UserCanceled = exports.ArgumentInvalid = exports.DataInvalid = exports.ProcessCanceled = exports.InsufficientDiskSpace = exports.UnsupportedOperatingSystem = exports.ServiceTemporarilyUnavailable = exports.CleanupFailedException = exports.NotSupportedError = void 0;
const log_1 = require("./log");
class NotSupportedError extends Error {
    constructor() {
        super('Not supported');
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}
exports.NotSupportedError = NotSupportedError;
class CleanupFailedException extends Error {
    constructor(error) {
        super('Cleanup process has failed');
        this.name = this.constructor.name;
        this.mErrorObject = error;
    }
    get errorObject() {
        return this.mErrorObject;
    }
}
exports.CleanupFailedException = CleanupFailedException;
class ServiceTemporarilyUnavailable extends Error {
    constructor(service) {
        super(`${service} service is temporarily unavailable. Please try again later.`);
        this.name = this.constructor.name;
    }
}
exports.ServiceTemporarilyUnavailable = ServiceTemporarilyUnavailable;
class UnsupportedOperatingSystem extends Error {
    constructor() {
        super('Not supported on current Operating System');
        this.name = this.constructor.name;
    }
}
exports.UnsupportedOperatingSystem = UnsupportedOperatingSystem;
class InsufficientDiskSpace extends Error {
    constructor(mountPoint) {
        super(`The partition "${mountPoint}" has insufficient space.`);
        this.name = this.constructor.name;
    }
}
exports.InsufficientDiskSpace = InsufficientDiskSpace;
class ProcessCanceled extends Error {
    constructor(message, extraInfo) {
        super(message);
        this.name = this.constructor.name;
        this.mExtraInfo = extraInfo;
    }
    get extraInfo() {
        return this.mExtraInfo;
    }
}
exports.ProcessCanceled = ProcessCanceled;
class DataInvalid extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.DataInvalid = DataInvalid;
class ArgumentInvalid extends Error {
    constructor(argument) {
        super(`Invalid argument: "${argument}"`);
        this.name = this.constructor.name;
    }
}
exports.ArgumentInvalid = ArgumentInvalid;
const UserCanceled = function (skipped) {
    if (!(this instanceof UserCanceled)) {
        (0, log_1.log)('error', 'UserCanceled invoked without new', Error.captureStackTrace(this, UserCanceled));
        return new Error('UserCanceled invoked without new');
    }
    this.message = 'canceled by user';
    this.skipped = skipped !== null && skipped !== void 0 ? skipped : false;
    Error.captureStackTrace(this, UserCanceled);
};
exports.UserCanceled = UserCanceled;
UserCanceled.prototype = Object.create(Error.prototype);
UserCanceled.prototype.name = 'UserCanceled';
UserCanceled.prototype.constructor = UserCanceled;
class MissingDependency extends Error {
    constructor() {
        super('Dependency is missing');
        this.name = this.constructor.name;
    }
}
exports.MissingDependency = MissingDependency;
class DocumentsPathMissing extends Error {
    constructor() {
        super('Failed to query the current user\'s documents folder');
        this.name = this.constructor.name;
    }
}
exports.DocumentsPathMissing = DocumentsPathMissing;
class SetupError extends Error {
    constructor(message, component) {
        super(message);
        this.name = this.constructor.name;
        this.mComponent = component;
    }
    get component() {
        return this.mComponent;
    }
}
exports.SetupError = SetupError;
class TemporaryError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.TemporaryError = TemporaryError;
class HTTPError extends Error {
    constructor(statusCode, message, url) {
        super(`HTTP (${statusCode}) - ${message}`);
        this.name = this.constructor.name;
        this.mCode = statusCode;
        this.mMessage = message;
        this.mURL = url;
    }
    get statusCode() {
        return this.mCode;
    }
    get statusMessage() {
        return this.mMessage;
    }
    get url() {
        return this.mURL;
    }
}
exports.HTTPError = HTTPError;
class MissingInterpreter extends Error {
    constructor(message, url) {
        super(message);
        this.name = this.constructor.name;
        this.mURL = url;
    }
    get url() {
        return this.mURL;
    }
}
exports.MissingInterpreter = MissingInterpreter;
class NotFound extends Error {
    constructor(what) {
        super(`Not found: "${what}"`);
        this.name = this.constructor.name;
    }
}
exports.NotFound = NotFound;
class StalledError extends Error {
    constructor() {
        super('Operation stalled');
        this.name = this.constructor.name;
    }
}
exports.StalledError = StalledError;
class TimeoutError extends Error {
    constructor() {
        super('Operation timed out');
        this.name = this.constructor.name;
    }
}
exports.TimeoutError = TimeoutError;
/**
 * these errors we report but don't allow to be reported to us
 */
class ThirdPartyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.ThirdPartyError = ThirdPartyError;
class SelfCopyCheckError extends Error {
    constructor(src, dest, ino) {
        super(`Source "${src}" and destination "${dest}" are the same file (id "${ino}").`);
        this.name = this.constructor.name;
    }
}
exports.SelfCopyCheckError = SelfCopyCheckError;
class ArchiveBrokenError extends Error {
    constructor(fileNameOrMessage, message) {
        if (message == null) {
            // Single argument: it's just a message
            super(`Archive is broken: ${fileNameOrMessage}`);
            this.mFileName = undefined;
        }
        else {
            super(`Archive is broken: ${message}`);
            this.mFileName = fileNameOrMessage;
        }
        this.name = this.constructor.name;
    }
    get fileName() {
        return this.mFileName;
    }
}
exports.ArchiveBrokenError = ArchiveBrokenError;
