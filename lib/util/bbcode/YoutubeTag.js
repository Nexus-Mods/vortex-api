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
const bbcode_to_react_1 = require("bbcode-to-react");
const React = __importStar(require("react"));
class YoutubeTag extends bbcode_to_react_1.Tag {
    toHTML() {
        return [
            `<iframe src="https://www.youtube-nocookie.com/embed/${this.getContent()}" referrerpolicy="strict-origin-when-cross-origin" allow="encrypted-media; web-share" title="YouTube video player"/>`,
        ];
    }
    toReact() {
        return (React.createElement("div", { className: "youtube-embed-container" },
            React.createElement("iframe", { src: `https://www.youtube-nocookie.com/embed/${this.getContent()}`, referrerPolicy: "strict-origin-when-cross-origin", allow: "encrypted-media; web-share", title: "YouTube video player" }),
            React.createElement("p", { className: "youtube-privacy-notice" }, "Playing this video will store cookies on your device")));
    }
}
exports.default = YoutubeTag;
