"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeCreateAction = safeCreateAction;
const redux_act_1 = require("redux-act");
function safeCreateAction(description, payloadReducer, metaReducer) {
    if (redux_act_1.types.has(description)) {
        redux_act_1.types.remove(description);
    }
    return (0, redux_act_1.createAction)(description, payloadReducer, metaReducer);
}
exports.default = safeCreateAction;
