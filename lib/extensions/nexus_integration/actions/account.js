"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
/*
 * action to set the user API Key. Takes one parameter, the api key as a string
 */
exports.setUserAPIKey = safeCreateAction_1.default('SET_USER_API_KEY', key => key);
