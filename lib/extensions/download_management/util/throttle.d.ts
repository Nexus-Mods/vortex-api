/// <reference types="node" />
import { Transform } from 'stream';
declare function makeThrottle(getBPS: () => number): Transform;
export default makeThrottle;
