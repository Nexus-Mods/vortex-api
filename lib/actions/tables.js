"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCollapsedGroups = exports.collapseGroup = exports.setGroupingAttribute = exports.setAttributeFilter = exports.setAttributeSort = exports.setAttributeVisible = void 0;
const safeCreateAction_1 = __importDefault(require("./safeCreateAction"));
exports.setAttributeVisible = (0, safeCreateAction_1.default)("SET_ATTRIBUTE_VISIBLE", (tableId, attributeId, visible) => ({
    tableId,
    attributeId,
    visible,
}));
exports.setAttributeSort = (0, safeCreateAction_1.default)("SET_ATTRIBUTE_SORT", (tableId, attributeId, direction) => ({
    tableId,
    attributeId,
    direction,
}));
exports.setAttributeFilter = (0, safeCreateAction_1.default)("SET_ATTRIBUTE_FILTER", (tableId, attributeId, filter) => ({
    tableId,
    attributeId,
    filter,
}));
exports.setGroupingAttribute = (0, safeCreateAction_1.default)("SET_GROUPING_ATTRIBUTE", (tableId, attributeId) => ({ tableId, attributeId }));
exports.collapseGroup = (0, safeCreateAction_1.default)("COLLAPSE_GROUP", (tableId, groupId, collapse) => ({
    tableId,
    groupId,
    collapse,
}));
exports.setCollapsedGroups = (0, safeCreateAction_1.default)("SET_COLLAPSED_GROUPS", (tableId, groups) => ({ tableId, groups }));
