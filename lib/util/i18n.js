"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("./log");
const I18next = require("i18next");
const FSBackend = require("i18next-node-fs-backend");
const path = require("path");
const dirName = path.dirname(path.dirname(__dirname));
const basePath = path.normalize(path.join(dirName, 'locales'));
log_1.log('info', 'reading localizations', basePath);
let debugging = false;
let currentLanguage = 'en';
let missingKeys = { common: {} };
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
        const res = I18next.use(FSBackend).init({
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
                loadPath: path.join(basePath, '{{lng}}', '{{ns}}.json'),
                addPath: path.join(basePath, '{{lng}}', '{{ns}}.missing.json'),
            },
        }, (error, tFunc) => {
            if ((error !== null) && (error !== undefined)) {
                const trans = str => str;
                return resolve({ i18n: res, tFunc: trans, error });
            }
            resolve({ i18n: res, tFunc });
        });
        res.on('languageChanged', (newLanguage) => { currentLanguage = newLanguage; });
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
