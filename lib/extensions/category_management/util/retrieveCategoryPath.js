"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = require("../../../util/selectors");
const storeHelper_1 = require("../../../util/storeHelper");
function createCategoryDetailPath(categories, category, categoryPath, visited = new Set()) {
    if (categories[category] === undefined) {
        return 'unknown';
    }
    categoryPath = (categoryPath === '')
        ? categories[category].name
        : categories[category].name + ' --> ' + categoryPath;
    visited.add(category);
    if ((categories[category].parentCategory !== undefined)
        && !visited.has(categories[category].parentCategory)) {
        return createCategoryDetailPath(categories, categories[category].parentCategory, categoryPath);
    }
    else {
        return categoryPath;
    }
}
/**
 * retrieve the Category from the Store returning the full category path.
 *
 * @param {number} category
 * @param {Redux.Store<any>} store
 */
function resolveCategoryPath(category, state) {
    if (category === undefined) {
        return null;
    }
    let completePath = '';
    const gameId = selectors_1.activeGameId(state);
    const categories = storeHelper_1.getSafe(state, ['persistent', 'categories', gameId], '');
    if (categories[category] !== undefined) {
        completePath = createCategoryDetailPath(categories, category, '');
    }
    return completePath;
}
exports.resolveCategoryPath = resolveCategoryPath;
/**
 * retrieve the Category from the Store
 *
 * @param {number} category
 * @param {Redux.Store<any>} store
 */
function resolveCategoryName(category, state) {
    if (category === undefined) {
        return null;
    }
    const gameId = selectors_1.activeGameId(state);
    const categories = storeHelper_1.getSafe(state, ['persistent', 'categories',
        gameId], '');
    return categories[category] !== undefined ? categories[category].name : '';
}
exports.resolveCategoryName = resolveCategoryName;
