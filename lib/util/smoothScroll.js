"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
function step(startTime, endTime, time) {
    if (time <= startTime) {
        return 0;
    }
    if (time >= endTime) {
        return 1;
    }
    const x = (time - startTime) / (endTime - startTime);
    return x * x * (3 - 2 * x);
}
const scrollJobs = {};
function smoothScroll(element, targetPos, duration) {
    targetPos = Math.round(targetPos);
    duration = Math.max(Math.round(duration), 0);
    const startTime = Date.now();
    const endTime = startTime + duration;
    const startPos = element.scrollTop;
    const distance = targetPos - startPos;
    if (scrollJobs[element.id] !== undefined) {
        scrollJobs[element.id]();
    }
    let timer;
    return new Promise((resolve, reject) => {
        scrollJobs[element.id] = () => {
            clearTimeout(timer);
            resolve();
        };
        const tick = () => {
            const now = Date.now();
            const percent = step(startTime, endTime, now);
            const newPos = Math.round(startPos + (distance * percent));
            element.scrollTop = newPos;
            if ((now >= endTime) || (element.scrollTop !== newPos)) {
                // failed to scroll all the way to the destination pos,
                // probably hit bounds
                return resolve();
            }
            timer = setTimeout(tick, 16);
        };
        setImmediate(tick);
    });
}
exports.default = smoothScroll;
