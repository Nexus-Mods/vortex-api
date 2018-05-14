"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("./fs");
const Promise = require("bluebird");
const electron_1 = require("electron");
const I18next = require("i18next");
const FSBackend = require("i18next-node-fs-backend");
const path = require("path");
const getVortexPath_1 = require("./getVortexPath");
const app = electron_1.remote !== undefined ? electron_1.remote.app : electron_1.app;
let debugging = false;
let currentLanguage = 'en';
let missingKeys = { common: {} };
class MultiBackend {
    constructor(services, options) {
        this.mLangUser = {};
        this.mBundled = new FSBackend(services);
        this.mUser = new FSBackend(services);
        this.init(services, options);
    }
    init(services, options) {
        this.mOptions = options;
        if (options !== undefined) {
            this.mBundled.init(services, {
                loadPath: path.join(options.bundled, '{{lng}}', '{{ns}}.json'),
                jsonIndent: 2,
            });
            this.mUser.init(services, {
                loadPath: path.join(options.user, '{{lng}}', '{{ns}}.json'),
                jsonIndent: 2,
            });
        }
    }
    read(language, namespace, callback) {
        const backend = this.langUser(language) ? this.mUser : this.mBundled;
        backend.read(language, namespace, callback);
    }
    langUser(language) {
        if (this.mLangUser[language] === undefined) {
            try {
                fs.statSync(path.join(this.mOptions.user, language));
                this.mLangUser[language] = true;
            }
            catch (err) {
                this.mLangUser[language] = false;
            }
        }
        return this.mLangUser[language];
    }
}
MultiBackend.type = 'backend';
/**
 * initialize the internationalization library
 *
 * @export
 * @param {string} language
 * @returns {I18next.I18n}
 */
function init(language) {
    currentLanguage = language;
    return new Promise((resolve, reject) => {
        const res = I18next.use(MultiBackend).init({
            lng: language,
            fallbackLng: 'en',
            fallbackNS: 'common',
            ns: ['common'],
            defaultNS: 'common',
            nsSeparator: ':::',
            keySeparator: '::',
            debug: false,
            saveMissing: debugging,
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
                bundled: getVortexPath_1.default('locales'),
                user: path.normalize(path.join(app.getPath('userData'), 'locales')),
            },
        }, (error, tFunc) => {
            if ((error !== null) && (error !== undefined)) {
                const trans = str => str;
                return resolve({ i18n: res, tFunc: trans, error });
            }
            resolve({ i18n: res, tFunc });
        });
        res.on('languageChanged', (newLanguage) => {
            currentLanguage = newLanguage;
        });
    });
}
function getCurrentLanguage() {
    return currentLanguage;
}
exports.getCurrentLanguage = getCurrentLanguage;
function debugTranslations(enable) {
    debugging = (enable !== undefined)
        ? enable
        : !debugging;
    missingKeys = { common: {} };
    init(I18next.language);
}
exports.debugTranslations = debugTranslations;
function getMissingTranslations() {
    return missingKeys;
}
exports.getMissingTranslations = getMissingTranslations;
exports.default = init;
