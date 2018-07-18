"use strict";
// rollup module for just the modules we want to be
// part of the api
// (excluding log, which is exported separately to give
//  it a more accessible name)
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./message"));
__export(require("./storeHelper"));
const category_management_1 = require("../extensions/category_management");
exports.resolveCategoryName = category_management_1.resolveCategoryName;
exports.resolveCategoryPath = category_management_1.resolveCategoryPath;
const gamemode_management_1 = require("../extensions/gamemode_management");
exports.getGame = gamemode_management_1.getGame;
exports.getGames = gamemode_management_1.getGames;
const modIdManager_1 = require("../extensions/mod_management/modIdManager");
exports.deriveInstallName = modIdManager_1.default;
const modName_1 = require("../extensions/mod_management/util/modName");
exports.renderModName = modName_1.default;
const resolvePath_1 = require("../extensions/mod_management/util/resolvePath");
exports.resolvePath = resolvePath_1.default;
const sort_1 = require("../extensions/mod_management/util/sort");
exports.sortMods = sort_1.default;
const testModReference_1 = require("../extensions/mod_management/util/testModReference");
exports.testModReference = testModReference_1.default;
const archives_1 = require("./archives");
exports.Archive = archives_1.Archive;
const copyRecursive_1 = require("./copyRecursive");
exports.copyRecursive = copyRecursive_1.default;
const CustomErrors_1 = require("./CustomErrors");
exports.DataInvalid = CustomErrors_1.DataInvalid;
exports.MissingInterpreter = CustomErrors_1.MissingInterpreter;
exports.NotSupportedError = CustomErrors_1.NotSupportedError;
exports.ProcessCanceled = CustomErrors_1.ProcessCanceled;
exports.SetupError = CustomErrors_1.SetupError;
exports.UserCanceled = CustomErrors_1.UserCanceled;
const Debouncer_1 = require("./Debouncer");
exports.Debouncer = Debouncer_1.default;
const delayed_1 = require("./delayed");
exports.delayed = delayed_1.default;
const errorHandling_1 = require("./errorHandling");
exports.terminate = errorHandling_1.terminate;
const ExtensionProvider_1 = require("./ExtensionProvider");
exports.extend = ExtensionProvider_1.extend;
const getNormalizeFunc_1 = require("./getNormalizeFunc");
exports.getNormalizeFunc = getNormalizeFunc_1.default;
const i18n_1 = require("./i18n");
exports.getCurrentLanguage = i18n_1.getCurrentLanguage;
const LazyComponent_1 = require("./LazyComponent");
exports.LazyComponent = LazyComponent_1.default;
const lazyRequire_1 = require("./lazyRequire");
exports.lazyRequire = lazyRequire_1.default;
const makeReactive_1 = require("./makeReactive");
exports.makeReactive = makeReactive_1.default;
const opn_1 = require("./opn");
exports.opn = opn_1.default;
const reduxLogger_1 = require("./reduxLogger");
exports.getReduxLog = reduxLogger_1.getReduxLog;
const ReduxProp_1 = require("./ReduxProp");
exports.ReduxProp = ReduxProp_1.default;
const relativeTime_1 = require("./relativeTime");
exports.relativeTime = relativeTime_1.default;
const Steam_1 = require("./Steam");
exports.steam = Steam_1.default;
exports.GameNotFound = Steam_1.GameNotFound;
const util_1 = require("./util");
exports.bytesToString = util_1.bytesToString;
exports.copyFileAtomic = util_1.copyFileAtomic;
exports.isNullOrWhitespace = util_1.isNullOrWhitespace;
exports.objDiff = util_1.objDiff;
exports.removePersistent = util_1.removePersistent;
exports.setdefault = util_1.setdefault;
const walk_1 = require("./walk");
exports.walk = walk_1.default;
const vortex_run_1 = require("vortex-run");
exports.runElevated = vortex_run_1.runElevated;
exports.runThreaded = vortex_run_1.runThreaded;
const texts_1 = require("../extensions/mod_management/texts");
function getText(group, textId, t) {
    if (group === 'mod') {
        return texts_1.default(textId, t);
    }
    throw new Error('invalid text group: ' + group);
}
exports.getText = getText;
