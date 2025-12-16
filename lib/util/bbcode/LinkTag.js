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
const ErrorBoundary_1 = require("../../renderer/controls/ErrorBoundary");
const opn_1 = __importDefault(require("../opn"));
const bbcode_to_react_1 = require("bbcode-to-react");
const React = __importStar(require("react"));
class LinkTag extends bbcode_to_react_1.Tag {
    constructor() {
        super(...arguments);
        this.clicked = (evt, callbacks, allowLocal) => {
            evt.preventDefault();
            const uri = evt.currentTarget.href;
            let parsed;
            try {
                parsed = new URL(uri);
            }
            catch (_a) {
                // Invalid URL, don't handle it
                return;
            }
            const protocols = allowLocal
                ? ["http:", "https:", "file:"]
                : ["http:", "https:"];
            if (parsed.protocol === "cb:" && (callbacks === null || callbacks === void 0 ? void 0 : callbacks[parsed.host]) !== undefined) {
                try {
                    if (parsed.pathname === "") {
                        callbacks[parsed.host]();
                    }
                    else {
                        const args = parsed.pathname
                            .slice(1)
                            .split("/")
                            .map((seg) => decodeURIComponent(seg));
                        callbacks[parsed.host](...args);
                    }
                }
                catch (err) {
                    throw new Error(`invalid callback url "${uri}"`);
                }
            }
            else if (protocols.includes(parsed.protocol)) {
                (0, opn_1.default)(uri).catch((err) => undefined);
            }
        };
    }
    toHTML() {
        let linkUrl = this.renderer.strip(this.params[this.name] || this.getContent(true));
        if (/javascript:/i.test(linkUrl)) {
            linkUrl = "";
        }
        if (!linkUrl || !linkUrl.length) {
            return this.getContent();
        }
        return this.renderer.context({ linkify: false }, () => [
            `<a href="${linkUrl}" target="_blank" title="${linkUrl}">`,
            this.getContent(),
            "</a>",
        ]);
    }
    toReact() {
        let linkUrl = this.renderer.strip(this.params[this.name] || this.getContent(true));
        if (/javascript:/i.test(linkUrl)) {
            linkUrl = "";
        }
        if (!linkUrl || !linkUrl.length) {
            return this.getComponents();
        }
        if (this.name === "email") {
            linkUrl = `mailto:${linkUrl}`;
        }
        const title = linkUrl.startsWith("cb:") ? undefined : linkUrl;
        const { callbacks, allowLocal } = this.renderer.options;
        return (React.createElement(ErrorBoundary_1.ErrorContext.Consumer, null, (context) => (React.createElement("a", { href: linkUrl, 
            // tslint:disable-next-line:jsx-no-lambda
            onClick: context.safeCB((evt) => this.clicked(evt, callbacks, allowLocal), [this.renderer.options]), title: title }, this.getComponents()))));
    }
}
exports.default = LinkTag;
