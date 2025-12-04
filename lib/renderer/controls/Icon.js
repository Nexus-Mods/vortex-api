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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installIconSet = installIconSet;
const log_1 = require("../../util/log");
const Icon_base_1 = __importDefault(require("./Icon.base"));
const bluebird_1 = __importDefault(require("bluebird"));
// using fs directly because the svg may be bundled inside the asar so
// we need the electron-fs hook here
const fs = __importStar(require("fs"));
const immutability_helper_1 = __importDefault(require("immutability-helper"));
const path = __importStar(require("path"));
const React = __importStar(require("react"));
const getVortexPath_1 = __importDefault(require("../../util/getVortexPath"));
function installIconSet(set, setPath) {
    const newset = document.createElement('div');
    newset.id = 'iconset-' + set;
    document.getElementById('icon-sets').appendChild(newset);
    (0, log_1.log)('info', 'read font', setPath);
    return new bluebird_1.default((resolve, reject) => {
        fs.readFile(setPath, {}, (err, data) => {
            if (err !== null) {
                return reject(err);
            }
            return resolve(data);
        });
    })
        .then(data => {
        newset.innerHTML = data.toString();
        const newSymbols = newset.querySelectorAll('symbol');
        const newSet = new Set();
        newSymbols.forEach(ele => {
            newSet.add(ele.id);
        });
        return newSet;
    });
}
const loadingIconSets = new Set();
class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.mMounted = false;
        this.loadSet = (set) => {
            const { sets } = this.state;
            if ((sets[set] === undefined) && !loadingIconSets.has(set)) {
                { // mark the set as being loaded
                    const copy = Object.assign({}, sets);
                    copy[set] = null;
                    loadingIconSets.add(set);
                    if (this.mMounted) {
                        this.setState((0, immutability_helper_1.default)(this.state, { sets: { $set: copy } }));
                    }
                }
                // different extensions don't share the sets global so check in the dom
                // to see if the iconset is already loaded after all
                const existing = document.getElementById('iconset-' + set);
                if (existing !== null) {
                    const newSymbols = existing.querySelectorAll('symbol');
                    const newSet = new Set();
                    newSymbols.forEach(ele => {
                        newSet.add(ele.id);
                    });
                    this.mLoadPromise = bluebird_1.default.resolve(newSet);
                }
                else {
                    // make sure that no other icon instance tries to render this icon
                    const fontPath = path.resolve((0, getVortexPath_1.default)('assets'), 'fonts', set + '.svg');
                    this.mLoadPromise = installIconSet(set, fontPath);
                }
                return this.mLoadPromise.then((newSet) => {
                    this.mLoadPromise = undefined;
                    // need to copy the _current_ sets because for all we know another load might have completed
                    // in the meantime
                    const copy = Object.assign({}, this.state.sets);
                    copy[set] = newSet;
                    loadingIconSets.delete(set);
                    if (this.mMounted) {
                        this.setState((0, immutability_helper_1.default)(this.state, { sets: { $set: copy } }));
                    }
                    return newSet;
                });
            }
            else {
                return bluebird_1.default.resolve(sets[set] || null);
            }
        };
        this.state = {
            sets: {},
        };
    }
    componentDidMount() {
        this.mMounted = true;
    }
    componentWillUnmount() {
        this.mMounted = false;
        if (this.mLoadPromise !== undefined) {
            this.mLoadPromise.cancel();
        }
    }
    render() {
        return React.createElement(Icon_base_1.default, Object.assign({}, this.props, { getSet: this.loadSet }));
    }
}
exports.default = Icon;
