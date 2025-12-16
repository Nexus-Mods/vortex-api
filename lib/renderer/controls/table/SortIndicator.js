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
const Icon_1 = __importDefault(require("../Icon"));
const React = __importStar(require("react"));
function next(direction) {
    switch (direction) {
        case "asc":
            return "desc";
        default:
            return "asc";
    }
}
class SortIndicator extends React.Component {
    constructor() {
        super(...arguments);
        this.cycleDirection = () => {
            const { direction, onSetDirection } = this.props;
            onSetDirection(next(direction));
        };
    }
    render() {
        const { direction } = this.props;
        return (React.createElement("div", { style: { display: "inline" } },
            React.createElement(Icon_1.default, { name: this.icon(direction) })));
    }
    icon(direction) {
        switch (direction) {
            case "none":
                return "sort-none";
            case "asc":
                return "sort-up";
            case "desc":
                return "sort-down";
            default:
                return "question";
        }
    }
}
exports.default = SortIndicator;
