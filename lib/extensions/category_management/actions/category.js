"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameCategory = exports.updateCategories = exports.setCategoryOrder = exports.removeCategory = exports.setCategory = exports.loadCategories = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
exports.loadCategories = (0, safeCreateAction_1.default)('LOAD_CATEGORIES', (gameId, gameCategories) => ({ gameId, gameCategories }));
exports.setCategory = (0, safeCreateAction_1.default)('SET_CATEGORY', (gameId, id, category) => ({ gameId, id, category }));
exports.removeCategory = (0, safeCreateAction_1.default)('REMOVE_CATEGORY', (gameId, id) => ({ gameId, id }));
exports.setCategoryOrder = (0, safeCreateAction_1.default)('SET_CATEGORY_ORDER', (gameId, categoryIds) => ({ gameId, categoryIds }));
exports.updateCategories = (0, safeCreateAction_1.default)('UPDATE_CATEGORIES', (gameId, gameCategories) => ({ gameId, gameCategories }));
exports.renameCategory = (0, safeCreateAction_1.default)('RENAME_CATEGORY', (gameId, categoryId, name) => ({ gameId, categoryId, name }));
