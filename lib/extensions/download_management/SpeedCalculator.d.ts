/**
 * calculates a moving average of the download speed (total and
 * per counter)
 *
 * @class SpeedCalculator
 */
declare class SpeedCalculator {
    private mCounters;
    private mTimeSlices;
    private mHorizon;
    private mMeasureTime;
    private mTargetRate;
    constructor(horizon: number, speedCB: (speed: number) => void);
    initCounter(id: number): void;
    addMeasure(id: number, count: number): boolean;
    stopCounter(id: number): void;
    private moveHorizon;
    private now;
}
export default SpeedCalculator;
