"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("../../../util/storeHelper");
const generateSubtitle_1 = require("./generateSubtitle");
function searchChildren(t, categories, rootId, mods) {
    const children = Object.keys(categories)
        .filter(id => rootId === categories[id].parentCategory)
        .sort((lhs, rhs) => (categories[lhs].order - categories[rhs].order));
    const childrenList = [];
    children.forEach(childId => {
        const modCount = storeHelper_1.getSafe(mods, [childId], []).length;
        const subt = mods !== undefined ? generateSubtitle_1.default(t, childId, mods) : '';
        const child = {
            categoryId: childId,
            title: categories[childId].name,
            subtitle: subt,
            expanded: false,
            modCount,
            parentId: categories[childId].parentCategory,
            order: categories[childId].order,
            children: searchChildren(t, categories, childId, mods),
        };
        childrenList.push(child);
    });
    return childrenList;
}
/**
 * create the treeDataObject from the categories inside the store
 *
 * @param {Object} categories
 * @param {any} mods
 * @return {[]} categoryList
 *
 */
function createTreeDataObject(t, categories, mods) {
    const categoryList = [];
    const modsByCategory = Object.keys(mods || {}).reduce((prev, current) => {
        const category = storeHelper_1.getSafe(mods, [current, 'attributes', 'category'], undefined);
        if (category === undefined) {
            return prev;
        }
        return storeHelper_1.pushSafe(prev, [category], current);
    }, {});
    const roots = Object.keys(categories)
        .filter((id) => (categories[id].parentCategory === undefined))
        .sort((lhs, rhs) => (categories[lhs].order - categories[rhs].order));
    roots.forEach(rootElement => {
        const children = Object.keys(categories)
            .filter((id) => (rootElement === categories[id].parentCategory))
            .sort((lhs, rhs) => (categories[lhs].order - categories[rhs].order));
        const childrenList = [];
        children.forEach(element => {
            const subtitle = generateSubtitle_1.default(t, element, modsByCategory);
            const modCount = storeHelper_1.getSafe(modsByCategory, [element], []).length;
            const child = {
                categoryId: element,
                title: categories[element].name,
                subtitle,
                expanded: false,
                modCount,
                parentId: categories[element].parentCategory,
                order: categories[element].order,
                children: searchChildren(t, categories, element, modsByCategory),
            };
            childrenList.push(child);
        });
        categoryList.push({
            categoryId: rootElement,
            title: categories[rootElement].name,
            subtitle: generateSubtitle_1.default(t, rootElement, modsByCategory),
            expanded: false,
            parentId: undefined,
            modCount: storeHelper_1.getSafe(modsByCategory, [rootElement], []).length,
            children: childrenList,
            order: categories[rootElement].order,
        });
    });
    return categoryList;
}
exports.default = createTreeDataObject;
