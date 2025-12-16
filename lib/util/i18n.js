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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.laterT = exports.TString = exports.fallbackTFunc = void 0;
exports.getCurrentLanguage = getCurrentLanguage;
exports.changeLanguage = changeLanguage;
exports.globalT = globalT;
exports.debugTranslations = debugTranslations;
exports.getMissingTranslations = getMissingTranslations;
exports.preT = preT;
const fs = __importStar(require("./fs"));
const getVortexPath_1 = __importDefault(require("./getVortexPath"));
const bluebird_1 = __importDefault(require("bluebird"));
const i18next_1 = __importDefault(require("i18next"));
const path = __importStar(require("path"));
const react_i18next_1 = require("react-i18next");
let debugging = false;
let currentLanguage = "en";
const fallbackTFunc = (str) => (Array.isArray(str) ? str[0].toString() : str.toString());
exports.fallbackTFunc = fallbackTFunc;
let actualT = fallbackTFunc;
let missingKeys = { common: {} };
class MultiBackend {
    constructor(services, options) {
        this.init(services, options);
    }
    init(services, options) {
        this.mOptions = options;
        this.mServices = services;
    }
    read(language, namespace, callback) {
        (() => __awaiter(this, void 0, void 0, function* () {
            const { backendType, extPath } = this.backendType(language);
            if (backendType !== this.mBackendType ||
                (backendType === "extension" && language !== this.mLastReadLanguage)) {
                this.mCurrentBackend = yield this.initBackend(backendType, extPath);
            }
            this.mLastReadLanguage = language;
            this.mCurrentBackend.read(language, namespace, callback);
        }))();
    }
    initBackend(type, extPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const FSBackend = yield (yield Promise.resolve().then(() => __importStar(require("i18next-fs-backend")))).default;
            const res = new FSBackend();
            let basePath;
            if (type === "bundled") {
                basePath = this.mOptions.bundled;
            }
            else if (type === "custom") {
                basePath = this.mOptions.user;
            }
            else {
                basePath = extPath;
            }
            res.init(this.mServices, {
                loadPath: path.join(basePath, "{{lng}}", "{{ns}}.json"),
                ident: 2,
            });
            this.mBackendType = type;
            return res;
        });
    }
    backendType(language) {
        try {
            // translations from the user directory (custom installs or in-development)
            fs.statSync(path.join(this.mOptions.user, language));
            return { backendType: "custom" };
        }
        catch (err) {
            // extension-provided
            const ext = this.mOptions.translationExts().find((iter) => {
                try {
                    fs.statSync(path.join(iter.path, language));
                    return true;
                }
                catch (err) {
                    return false;
                }
            });
            if (ext !== undefined) {
                return { backendType: "extension", extPath: ext.path };
            }
            try {
                // finally, see if we have the language bundled
                fs.statSync(path.join(this.mOptions.bundled, language));
                return { backendType: "bundled" };
            }
            catch (err) {
                return { backendType: "custom" };
            }
        }
    }
}
MultiBackend.type = "backend";
class HighlightPP {
    constructor() {
        this.type = "postProcessor";
        this.name = "HighlightPP";
    }
    process(value, key, options, translator) {
        if (value.startsWith("TT:")) {
            console.trace("duplicate translation", key, value);
        }
        return "TT:" + value.toUpperCase();
    }
}
/**
 * initialize the internationalization library
 *
 * @export
 * @param {string} language
 * @returns {I18next.I18n}
 */
function init(language, translationExts) {
    // reset to english if the language isn't valid
    try {
        new Date().toLocaleString(language);
    }
    catch (err) {
        language = "en";
    }
    currentLanguage = language;
    const i18nObj = i18next_1.default;
    if (process.env.HIGHLIGHT_I18N === "true") {
        i18nObj.use(new HighlightPP());
    }
    i18nObj.use(MultiBackend).use(react_i18next_1.initReactI18next);
    return bluebird_1.default.resolve(i18nObj.init({
        lng: language,
        fallbackLng: "en",
        fallbackNS: "common",
        ns: [
            "common",
            "collection",
            "mod_management",
            "download_management",
            "profile_management",
            "nexus_integration",
            "gamemode_management",
            "extension_manager",
        ],
        defaultNS: "common",
        nsSeparator: ":::",
        keySeparator: "::",
        debug: false,
        postProcess: process.env.HIGHLIGHT_I18N === "true" ? "HighlightPP" : false,
        react: {
            // afaict this is simply broken at this time. With this enabled the React.Suspense will
            // render the fallback on certain operations after the UI has been started,
            // why I don't know, and that unmounts all components in the dom but it doesn't seem to
            // fire the componentDidUnmount lifecycle functions meaning we can't stop delayed
            // operations that will then break since the component is unmounted
            useSuspense: false,
        },
        saveMissing: debugging,
        saveMissingTo: "current",
        missingKeyHandler: (lng, ns, key, fallbackValue) => {
            if (missingKeys[ns] === undefined) {
                missingKeys[ns] = {};
            }
            missingKeys[ns][key] = key;
        },
        interpolation: {
            escapeValue: false,
        },
        backend: {
            bundled: (0, getVortexPath_1.default)("locales"),
            user: path.normalize(path.join((0, getVortexPath_1.default)("userData"), "locales")),
            translationExts,
        },
    }))
        .tap((tFunc) => {
        actualT = tFunc;
    })
        .then((tFunc) => bluebird_1.default.resolve({
        i18n: i18nObj,
        tFunc,
    }))
        .catch((error) => ({
        i18n: i18nObj,
        tFunc: fallbackTFunc,
        error,
    }));
}
function getCurrentLanguage() {
    return currentLanguage;
}
function changeLanguage(lng, cb) {
    currentLanguage = lng;
    return i18next_1.default.changeLanguage(lng, cb);
}
function globalT(key, options) {
    return actualT(key, options);
}
function debugTranslations(enable) {
    debugging = enable !== undefined ? enable : !debugging;
    missingKeys = { common: {} };
    init(i18next_1.default.language, () => []);
}
function getMissingTranslations() {
    return missingKeys;
}
class TString {
    constructor(key, options, namespace) {
        this.mKey = key;
        this.mOptions = options !== null && options !== void 0 ? options : {};
        if (this.mOptions.ns === undefined) {
            this.mOptions.ns = namespace;
        }
    }
    get key() {
        return this.mKey;
    }
    get options() {
        return this.mOptions;
    }
    toString() {
        return this.mKey;
    }
}
exports.TString = TString;
const laterT = (key, optionsOrDefault, options) => {
    if (typeof optionsOrDefault === "string") {
        return new TString(key, options, "common");
    }
    else {
        return new TString(key, optionsOrDefault, "common");
    }
};
exports.laterT = laterT;
/**
 * translate an input string. If key is a string or string array, this just
 * forwards the parameters to the t function.
 * If it is an ITString object, will translate using with the parameters stored
 * within
 * @param t the actual translation function to invok
 * @param key translation key, keys or ITString object
 * @param options translations options. this will take precedence over those specified at
 *                the time the ITString was created
 * @param onlyTString if set to true and the key is a string, assume it's already the translated
 *                    string and don't translate again. This is mostly for backwards compatibility
 */
function preT(t, key, options, onlyTString) {
    if ([undefined, null].includes(key)) {
        return "";
    }
    if (typeof key === "string") {
        if (onlyTString === true) {
            return key;
        }
        else {
            return t(key, options);
        }
    }
    else if (Array.isArray(key)) {
        return t(key, options);
    }
    else {
        return t(key.key, Object.assign(Object.assign({}, key.options), (options !== null && options !== void 0 ? options : {})));
    }
}
exports.default = init;
