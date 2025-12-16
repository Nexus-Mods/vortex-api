"use strict";
/// This implements a react hook (and wrapper) component that ensure of the components using it,
/// only one is visible at the same time.
/// It's currently intended to prevent multiple modals from showing up at once
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
exports.MutexConsumer = exports.MutexProvider = void 0;
exports.createQueue = createQueue;
exports.useMutex = useMutex;
exports.useRandomId = useRandomId;
exports.MutexWrapper = MutexWrapper;
const React = __importStar(require("react"));
const shortid_1 = require("shortid");
class MutexContextValue {
    constructor() {
        this.mQueue = [];
    }
    get current() {
        return this.mQueue.length > 0 ? this.mQueue[0] : null;
    }
    add(newItem) {
        const idx = this.mQueue.indexOf(newItem);
        if (idx === -1) {
            this.mQueue.unshift(newItem);
        }
    }
    remove(item) {
        const idx = this.mQueue.indexOf(item);
        if (idx !== -1) {
            this.mQueue.splice(idx, 1);
        }
    }
}
const MutexContext = React.createContext(null);
function createQueue() {
    return new MutexContextValue();
}
exports.MutexProvider = MutexContext.Provider;
exports.MutexConsumer = MutexContext.Consumer;
function useMutex(show) {
    const ctx = React.useContext(MutexContext);
    const mutexId = useRandomId();
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    React.useEffect(() => {
        if (ctx === undefined) {
            return;
        }
        if (show) {
            ctx.add(mutexId);
            forceUpdate();
        }
        return () => {
            ctx.remove(mutexId);
            forceUpdate();
        };
    }, [show]);
    return ctx.current === mutexId && mutexId !== null;
}
function useRandomId() {
    const ref = React.useRef();
    if (ref.current === undefined) {
        ref.current = (0, shortid_1.generate)();
    }
    return ref.current;
}
function MutexWrapper(props) {
    // const primary = useMutex(props.show);
    // return primary ? React.createElement('div', undefined, props.children) : null;
    return React.createElement("div", undefined, props.children);
}
