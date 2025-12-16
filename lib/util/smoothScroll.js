"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird_1 = __importDefault(require("bluebird"));
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
    return new bluebird_1.default((resolve, reject) => {
        let canceled = false;
        let timer;
        scrollJobs[element.id] = () => {
            canceled = true;
            window.cancelAnimationFrame(timer);
            scrollJobs[element.id] = undefined;
            resolve(false);
        };
        const tick = () => {
            if (canceled) {
                return;
            }
            const now = Date.now();
            const percent = step(startTime, endTime, now);
            const newPos = Math.round(startPos + distance * percent);
            if (element.scrollTop === newPos) {
                return resolve(true);
            }
            element.scrollTop = newPos;
            if (now >= endTime ||
                element.scrollTop !== newPos ||
                newPos === targetPos) {
                // done or failed to scroll all the way to the destination pos,
                // in which case we probably hit bounds
                scrollJobs[element.id] = undefined;
                return resolve(true);
            }
            else {
                timer = window.requestAnimationFrame(tick);
            }
        };
        timer = window.requestAnimationFrame(tick);
    });
}
exports.default = smoothScroll;
