"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
exports.loadCategories = safeCreateAction_1.default('LOAD_CATEGORIES', (gameId, gameCategories) => ({ gameId, gameCategories }));
exports.setCategory = safeCreateAction_1.default('SET_CATEGORY', (gameId, id, category) => ({ gameId, id, category }));
exports.removeCategory = safeCreateAction_1.default('REMOVE_CATEGORY', (gameId, id) => ({ gameId, id }));
exports.setCategoryOrder = safeCreateAction_1.default('SET_CATEGORY_ORDER', (gameId, categoryIds) => ({ gameId, categoryIds }));
exports.updateCategories = safeCreateAction_1.default('UPDATE_CATEGORIES', (gameId, gameCategories) => ({ gameId, gameCategories }));
exports.renameCategory = safeCreateAction_1.default('RENAME_CATEGORY', (gameId, categoryId, name) => ({ gameId, categoryId, name }));
