"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("./safeCreateAction");
exports.setAttributeVisible = safeCreateAction_1.default('SET_ATTRIBUTE_VISIBLE', (tableId, attributeId, visible) => ({ tableId, attributeId, visible }));
exports.setAttributeSort = safeCreateAction_1.default('SET_ATTRIBUTE_SORT', (tableId, attributeId, direction) => ({ tableId, attributeId, direction }));
exports.setAttributeFilter = safeCreateAction_1.default('SET_ATTRIBUTE_FILTER', (tableId, attributeId, filter) => ({ tableId, attributeId, filter }));
exports.setSplitPos = safeCreateAction_1.default('SET_SPLIT_POS', (tableId, pos) => ({ tableId, pos }));
