"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
// size of the running average window in seconds
const WINDOW_SIZE = 5;
function makeThrottle(getBPS) {
    let chunks = [];
    function transform(chunk, encoding, callback) {
        const bps = getBPS();
        if (bps === 0) {
            return callback(null, chunk);
        }
        const now = Date.now();
        chunks.push({ size: chunk.length, time: now });
        const idx = chunks.findIndex(iter => iter.time > now - (WINDOW_SIZE * 1000));
        if (idx !== 0) {
            chunks = chunks.slice(idx);
        }
        const speed = chunks.reduce((sum, iter) => sum + iter.size, 0);
        const elapsed = (now - chunks[0].time);
        const bytesPerSecond = bps / 8;
        const targetSpeed = bytesPerSecond * (elapsed / 1000);
        if ((elapsed === 0) || (targetSpeed > speed)) {
            callback(null, chunk);
        }
        else {
            // too fast!
            setTimeout(() => {
                callback(null, chunk);
            }, ((speed - targetSpeed) / bytesPerSecond) * 1000);
        }
    }
    return new stream_1.Transform({
        transform,
    });
}
exports.default = makeThrottle;
