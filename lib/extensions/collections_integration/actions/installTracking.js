"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearOldSessions = exports.finishInstallSession = exports.markModInstalled = exports.updateModStatus = exports.startInstallSession = void 0;
const redux_act_1 = require("redux-act");
exports.startInstallSession = (0, redux_act_1.createAction)('COLLECTION_START_INSTALL_SESSION', (sessionInfo) => sessionInfo);
exports.updateModStatus = (0, redux_act_1.createAction)('COLLECTION_UPDATE_MOD_STATUS', (sessionId, ruleId, status) => ({ sessionId, ruleId, status }));
exports.markModInstalled = (0, redux_act_1.createAction)('COLLECTION_MARK_MOD_INSTALLED', (sessionId, ruleId, modId) => ({ sessionId, ruleId, modId }));
exports.finishInstallSession = (0, redux_act_1.createAction)('COLLECTION_FINISH_INSTALL_SESSION', (sessionId, success) => ({ sessionId, success }));
exports.clearOldSessions = (0, redux_act_1.createAction)('COLLECTION_CLEAR_OLD_SESSIONS', (daysOld) => ({ daysOld }));
