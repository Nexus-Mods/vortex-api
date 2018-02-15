"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
exports.setPhaseCount = safeCreateAction_1.default('SET_DISCOVERY_PHASE_COUNT');
exports.discoveryProgress = safeCreateAction_1.default('DISCOVERY_PROGRESS', (idx, percent, directory) => ({ idx, percent, directory }));
exports.discoveryFinished = safeCreateAction_1.default('DISCOVERY_FINISHED');
