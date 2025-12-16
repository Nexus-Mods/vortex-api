"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util/util");
/**
 * calculates a moving average of the download speed (total and
 * per counter)
 *
 * @class SpeedCalculator
 */
class SpeedCalculator {
    constructor(horizon, speedCB) {
        this.mCounters = {};
        this.mTimeSlices = [];
        this.mTargetRate = 0;
        this.mHorizon = horizon;
        this.mMeasureTime = this.now();
        setInterval(() => {
            this.moveHorizon();
            const totalRate = (0, util_1.sum)(this.mTimeSlices.slice(0, this.mHorizon - 1)) / (this.mHorizon - 1);
            this.mTargetRate = this.mTargetRate * 0.99 + totalRate * 0.01;
            speedCB(totalRate);
        }, 1000);
    }
    initCounter(id) {
        this.mCounters[id] = { lastMeasure: this.now(), timeSlices: [] };
    }
    addMeasure(id, count) {
        const now = this.now();
        if (this.mCounters[id] === undefined) {
            // counter already stopped
            return;
        }
        const secondsPassed = now - this.mCounters[id].lastMeasure;
        const perSec = count / (secondsPassed + 1);
        for (let i = this.mHorizon - secondsPassed - 1; i < this.mHorizon; ++i) {
            if (this.mTimeSlices[i] === undefined) {
                this.mTimeSlices[i] = 0;
            }
            if (this.mCounters[id].timeSlices[i] === undefined) {
                this.mCounters[id].timeSlices[i] = 0;
            }
            this.mTimeSlices[i] += perSec;
            this.mCounters[id].timeSlices[i] += perSec;
        }
        let starvation;
        if (secondsPassed > 0 &&
            this.mCounters[id].timeSlices.length === this.mHorizon) {
            const rate = (0, util_1.sum)(this.mCounters[id].timeSlices.slice(0, this.mHorizon - 1)) /
                (this.mHorizon - 1);
            starvation =
                rate < this.mTargetRate / Object.keys(this.mCounters).length / 5;
        }
        this.mCounters[id].lastMeasure = now;
        return starvation;
    }
    stopCounter(id) {
        delete this.mCounters[id];
    }
    getLastActivity(id) {
        if (this.mCounters[id] === undefined) {
            return Date.now(); // Counter stopped, return current time to avoid false positives
        }
        return this.mCounters[id].lastMeasure * 1000; // Convert seconds to milliseconds
    }
    moveHorizon() {
        const time = this.now();
        if (this.mTimeSlices.length > 0) {
            for (let i = 0; i < time - this.mMeasureTime; ++i) {
                this.mTimeSlices.shift();
                Object.keys(this.mCounters).forEach((counterId) => {
                    this.mCounters[counterId].timeSlices.shift();
                });
            }
        }
        this.mMeasureTime = time;
    }
    now() {
        return Math.floor(Date.now() / 1000);
    }
}
exports.default = SpeedCalculator;
