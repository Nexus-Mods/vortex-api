"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
// to make the keyframes simpler, I want the circumference (in svg units) to be 100
// so the animation goes from 0 to 100
const circumference = 100;
// everything else gets deduced from that, circumference = 2 * pi * radius
// so radius = circumference / (2 * pi)
const radius = circumference / (2 * Math.PI);
const stroke = Math.ceil(radius / 6);
const width = radius * 2 + stroke;
const center = width / 2;
function Timer(props) {
    const { className, duration, onTrigger, paused, started } = props;
    const [timer, setTimer] = React.useState(null);
    const [active, setActive] = React.useState(true);
    const [elapsed, setElapsed] = React.useState(null);
    React.useEffect(() => {
        return () => {
            if (timer !== null) {
                clearTimeout(timer);
            }
        };
    }, []);
    React.useEffect(() => {
        // reset the animation if a new started time is set
        setActive(false);
        setElapsed(null);
        setTimeout(() => {
            setActive(true);
        }, 10);
    }, [setActive, setElapsed, started]);
    React.useEffect(() => {
        // if pausing, unpausing or restarting the timer we have to (re-)queue the
        // trigger
        if (timer !== null) {
            clearTimeout(timer);
        }
        if (paused) {
            setElapsed(Date.now() - started);
        }
        else {
            let remaining = duration;
            if (elapsed !== null) {
                // after resume from pause
                remaining = duration - elapsed;
                setElapsed(null);
            }
            else {
                remaining = started + duration - Date.now();
            }
            if (remaining < 0) {
                remaining = duration;
            }
            if (onTrigger !== undefined) {
                setTimer(setTimeout(() => {
                    onTrigger();
                }, remaining));
            }
        }
    }, [setTimer, setElapsed, paused, started]);
    return (React.createElement("svg", { className: className, viewBox: `0 0 ${width} ${width}`, style: { strokeWidth: stroke } },
        React.createElement("circle", { className: "timer-background", fill: "none", cx: center, cy: center, r: radius }),
        React.createElement("circle", { className: "timer-circle", style: {
                animationDuration: duration.toString() + "ms",
                animationDirection: "reverse",
                animationIterationCount: "infinite",
                animationTimingFunction: "linear",
                animationPlayState: paused ? "paused" : "running",
                transform: "rotate(-90deg)",
                transformOrigin: "center",
                display: active ? undefined : "none",
            }, strokeDasharray: `${circumference},${circumference}`, strokeLinecap: "round", fill: "none", cx: center, cy: center, r: radius })));
}
exports.default = Timer;
