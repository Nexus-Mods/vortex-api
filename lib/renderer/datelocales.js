"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocale = getLocale;
exports.getDateFormat = getDateFormat;
const locale_1 = require("date-fns/locale");
const langMap = {
    af: locale_1.af,
    ar_sa: locale_1.arSA,
    bn: locale_1.bn,
    de: locale_1.de,
    el: locale_1.el,
    en_ca: locale_1.enCA,
    en_gb: locale_1.enGB,
    en_us: locale_1.enUS,
    eo: locale_1.eo,
    es: locale_1.es,
    et: locale_1.et,
    fi: locale_1.fi,
    fr: locale_1.fr,
    gl: locale_1.gl,
    he: locale_1.he,
    hu: locale_1.hu,
    id: locale_1.id,
    is: locale_1.is,
    it: locale_1.it,
    lt: locale_1.lt,
    nb: locale_1.nb,
    nl: locale_1.nl,
    pt: locale_1.pt,
    pt_br: locale_1.ptBR,
    ro: locale_1.ro,
    ru: locale_1.ru,
    sv: locale_1.sv,
    th: locale_1.th,
    uk: locale_1.uk,
    vi: locale_1.vi,
    zh_cn: locale_1.zhCN,
    ar: locale_1.arSA,
    en: locale_1.enUS,
    zh: locale_1.zhCN,
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
