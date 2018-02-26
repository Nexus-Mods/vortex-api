"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
/*
 * associate with nxm urls
 */
exports.setAssociatedWithNXMURLs = safeCreateAction_1.default('SET_ASSOCIATED_WITH_NXM_URLS', assoc => assoc);
