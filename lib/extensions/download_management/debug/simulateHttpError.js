"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateHttpError = simulateHttpError;
const CustomErrors_1 = require("../../../util/CustomErrors");
/**
 * Generates fake HTTP errors for testing error handling.
 * @param errorCode HTTP status code (403, 404, 416, 500, etc.)
 * @param probability Chance of triggering (0-1), default 1.0 (always)
 */
function simulateHttpError(errorCode, probability = 1.0) {
    if (Math.random() < probability) {
        const messages = {
            400: 'Bad Request',
            401: 'Unauthorized',
            403: 'Forbidden',
            404: 'Not Found',
            408: 'Request Timeout',
            410: 'Gone',
            416: 'Requested Range Not Satisfiable',
            429: 'Too Many Requests',
            500: 'Internal Server Error',
            502: 'Bad Gateway',
            503: 'Service Unavailable',
            504: 'Gateway Timeout',
        };
        const message = messages[errorCode] || 'Unknown Error';
        throw new CustomErrors_1.HTTPError(errorCode, `HTTP (${errorCode}) - ${message}`, 'http://example.com/test');
    }
}
