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
exports.getLocale = getLocale;
exports.getDateFormat = getDateFormat;
const af = __importStar(require("date-fns/locale/af"));
const ar_sa = __importStar(require("date-fns/locale/ar-SA"));
const bn = __importStar(require("date-fns/locale/bn"));
const de = __importStar(require("date-fns/locale/de"));
const el = __importStar(require("date-fns/locale/el"));
const en_ca = __importStar(require("date-fns/locale/en-CA"));
const en_gb = __importStar(require("date-fns/locale/en-GB"));
const en_us = __importStar(require("date-fns/locale/en-US"));
const eo = __importStar(require("date-fns/locale/eo"));
const es = __importStar(require("date-fns/locale/es"));
const et = __importStar(require("date-fns/locale/et"));
const fi = __importStar(require("date-fns/locale/fi"));
const fr = __importStar(require("date-fns/locale/fr"));
const gl = __importStar(require("date-fns/locale/gl"));
const he = __importStar(require("date-fns/locale/he"));
const hu = __importStar(require("date-fns/locale/hu"));
const id = __importStar(require("date-fns/locale/id"));
const is = __importStar(require("date-fns/locale/is"));
const it = __importStar(require("date-fns/locale/it"));
const lt = __importStar(require("date-fns/locale/lt"));
const nb = __importStar(require("date-fns/locale/nb"));
const nl = __importStar(require("date-fns/locale/nl"));
const pt = __importStar(require("date-fns/locale/pt"));
const pt_br = __importStar(require("date-fns/locale/pt-BR"));
const ro = __importStar(require("date-fns/locale/ro"));
const ru = __importStar(require("date-fns/locale/ru"));
const sv = __importStar(require("date-fns/locale/sv"));
const th = __importStar(require("date-fns/locale/th"));
const uk = __importStar(require("date-fns/locale/uk"));
const vi = __importStar(require("date-fns/locale/vi"));
const zh_cn = __importStar(require("date-fns/locale/zh-CN"));
const langMap = {
    af,
    ar_sa,
    bn,
    de,
    el,
    en_ca,
    en_gb,
    en_us,
    eo,
    es,
    et,
    fi,
    fr,
    gl,
    he,
    hu,
    id,
    is,
    it,
    lt,
    nb,
    nl,
    pt,
    pt_br,
    ro,
    ru,
    sv,
    th,
    uk,
    vi,
    zh_cn,
    ar: ar_sa,
    en: en_us,
    zh: zh_cn,
};
function getLocale(langCode) {
    const code = langCode.split("-").map((k) => k.toLowerCase());
    if (code.length > 1 && langMap[`${code[0]}_${code[1]}`] !== undefined) {
        return langMap[`${code[0]}_${code[1]}`];
    }
    else if (code.length >= 1 && langMap[code[0]] !== undefined) {
        return langMap[code[0]];
    }
    else {
        return langMap["en"];
    }
}
const sampleDate1 = new Date("12/31/2019");
const sampleDate2 = new Date("05/31/2019");
function getDateFormat(langCode) {
    const loc = getLocale(langCode);
    if (loc !== undefined) {
        return loc.formatLong.date({ width: "short" });
    }
    // if date-fns doesn't know the language code, try a fallback by parsing
    // the output of toLocaleDateString. Not sure why javascript doesn't just provide
    // an api to get at that format string but whatever...
    // instead of bringing our own table of formats, lets just deduce it from the
    // js date library
    const formatted = sampleDate1.toLocaleDateString(langCode);
    if (formatted.indexOf("2019") === -1) {
        // this function will fail for any language not using latin characters, use
        // ISO format until someone implements the proper format for this language
        return "yyyy-MM-dd";
    }
    const formatted2 = sampleDate2.toLocaleString(langCode);
    const pad = formatted2.indexOf("05") !== -1;
    return formatted
        .replace("12", pad ? "MM" : "M")
        .replace("31", pad ? "dd" : "d")
        .replace("2019", "yyyy");
}
