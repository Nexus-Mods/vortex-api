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
exports.preProcess = preProcess;
exports.stripBBCode = stripBBCode;
exports.bbcodeToHTML = bbcodeToHTML;
const BrTag_1 = __importDefault(require("./bbcode/BrTag"));
const FontTag_1 = __importDefault(require("./bbcode/FontTag"));
const HeadingTag_1 = __importDefault(require("./bbcode/HeadingTag"));
const IdentityTag_1 = __importDefault(require("./bbcode/IdentityTag"));
const LineTag_1 = __importDefault(require("./bbcode/LineTag"));
const LinkTag_1 = __importDefault(require("./bbcode/LinkTag"));
const MoreTag_1 = __importDefault(require("./bbcode/MoreTag"));
const SizeTag_1 = __importDefault(require("./bbcode/SizeTag"));
const SpoilerTag_1 = __importDefault(require("./bbcode/SpoilerTag"));
const StyleTag_1 = __importDefault(require("./bbcode/StyleTag"));
const SvgTag_1 = __importDefault(require("./bbcode/SvgTag"));
const TooltipTag_1 = __importDefault(require("./bbcode/TooltipTag"));
const YoutubeTag_1 = __importDefault(require("./bbcode/YoutubeTag"));
const bbcode = __importStar(require("bbcode-to-react"));
const fullParser = new bbcode.Parser();
fullParser.registerTag("size", SizeTag_1.default);
fullParser.registerTag("br", BrTag_1.default);
fullParser.registerTag("email", LinkTag_1.default);
fullParser.registerTag("link", LinkTag_1.default);
fullParser.registerTag("url", LinkTag_1.default);
fullParser.registerTag("spoiler", SpoilerTag_1.default);
fullParser.registerTag("font", FontTag_1.default);
fullParser.registerTag("youtube", YoutubeTag_1.default);
fullParser.registerTag("line", LineTag_1.default);
fullParser.registerTag("heading", HeadingTag_1.default);
fullParser.registerTag("svg", SvgTag_1.default);
fullParser.registerTag("more", MoreTag_1.default);
fullParser.registerTag("tooltip", TooltipTag_1.default);
fullParser.registerTag("style", StyleTag_1.default);
const stripParser = new bbcode.Parser();
stripParser.registerTag("br", BrTag_1.default);
[
    "size",
    "email",
    "font",
    "link",
    "url",
    "spoiler",
    "font",
    "youtube",
    "line",
    "heading",
    "svg",
    "b",
    "u",
    "style",
].forEach((tag) => stripParser.registerTag(tag, IdentityTag_1.default));
let convertDiv;
function transformSymbol(fullMatch, symbol) {
    if (convertDiv === undefined) {
        convertDiv = document.createElement("div");
    }
    convertDiv.innerHTML = symbol;
    return convertDiv.innerText;
}
function preProcess(input) {
    return input
        .replace(/<br *\/?>/g, "[br][/br]")
        .replace(/(&[^;]+;)/g, transformSymbol);
}
function renderBBCode(input, context) {
    if (input === undefined) {
        return [""];
    }
    if (context !== undefined) {
        return fullParser["renderer"].context(context, () => fullParser.toReact(preProcess(input)));
    }
    else {
        return fullParser.toReact(preProcess(input));
    }
}
function stripBBCode(input) {
    if (input === undefined) {
        return "";
    }
    return stripParser
        .toReact(input
        .replace(/<br *\/?>/g, "[br][/br]")
        .replace(/(&[^;]+;)/g, transformSymbol))
        .filter((line) => typeof line === "string")
        .join("");
}
function bbcodeToHTML(input) {
    const res = fullParser.toHTML(preProcess(input));
    // according to the typings toHTML should return an array of strings but
    // in practice I found it to return just a string
    if (Array.isArray(res)) {
        return res.join();
    }
    else {
        return res;
    }
}
exports.default = renderBBCode;
