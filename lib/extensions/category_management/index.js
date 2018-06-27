"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../../util/log");
const message_1 = require("../../util/message");
const selectors_1 = require("../../util/selectors");
const storeHelper_1 = require("../../util/storeHelper");
const state_1 = require("../download_management/actions/state");
const mods_1 = require("../mod_management/actions/mods");
const category_1 = require("./actions/category");
const session_1 = require("./actions/session");
const category_2 = require("./reducers/category");
const session_2 = require("./reducers/session");
const selectors_2 = require("./selectors");
const CategoryFilter_1 = require("./util/CategoryFilter");
const retrieveCategoryPath_1 = require("./util/retrieveCategoryPath");
exports.resolveCategoryName = retrieveCategoryPath_1.resolveCategoryName;
exports.resolveCategoryPath = retrieveCategoryPath_1.resolveCategoryPath;
const CategoryDialog_1 = require("./views/CategoryDialog");
function getModCategory(mod) {
    return storeHelper_1.getSafe(mod, ['attributes', 'category'], undefined);
}
function getCategoryChoices(state) {
    const categories = selectors_2.allCategories(state);
    return [{ key: '', text: '' }].concat(Object.keys(categories)
        .map(id => ({ key: id, text: retrieveCategoryPath_1.resolveCategoryPath(id, state) }))
        .sort((lhs, rhs) => categories[lhs.key].order - categories[rhs.key].order));
}
function init(context) {
    context.registerDialog('categories', CategoryDialog_1.default);
    context.registerAction('mod-icons', 100, 'categories', {}, 'Categories', () => {
        context.api.store.dispatch(session_1.showCategoriesDialog(true));
    });
    context.registerReducer(['persistent', 'categories'], category_2.categoryReducer);
    context.registerReducer(['session', 'categories'], session_2.sessionReducer);
    context.registerTableAttribute('mods', {
        id: 'category',
        name: 'Category',
        description: 'Mod Category',
        icon: 'sitemap',
        placement: 'table',
        calc: (mod) => retrieveCategoryPath_1.resolveCategoryName(getModCategory(mod), context.api.store.getState()),
        isToggleable: true,
        edit: {},
        isSortable: true,
        filter: new CategoryFilter_1.default(),
    });
    context.registerTableAttribute('mods', {
        id: 'category-detail',
        name: 'Category',
        description: 'Mod Category',
        icon: 'sitemap',
        supportsMultiple: true,
        calc: (mod) => retrieveCategoryPath_1.resolveCategoryPath(getModCategory(mod), context.api.store.getState()),
        edit: {
            choices: () => getCategoryChoices(context.api.store.getState()),
            onChangeValue: (rows, newValue) => {
                const gameMode = selectors_1.activeGameId(context.api.store.getState());
                rows.forEach(row => {
                    if (row.state === 'downloaded') {
                        context.api.store.dispatch(state_1.setDownloadModInfo(row.id, 'custom.category', newValue));
                    }
                    else {
                        context.api.store.dispatch(mods_1.setModAttribute(gameMode, row.id, 'category', newValue));
                    }
                });
            },
        },
        placement: 'detail',
        isToggleable: false,
        isSortable: true,
    });
    context.once(() => {
        const store = context.api.store;
        try {
            context.api.events.on('retrieve-categories', (gameId, categories, isUpdate) => {
                if (isUpdate) {
                    context.api.store.dispatch(category_1.updateCategories(gameId, categories));
                }
                else {
                    context.api.store.dispatch(category_1.loadCategories(gameId, categories));
                }
            });
            context.api.events.on('gamemode-activated', (gameMode) => {
                const categories = storeHelper_1.getSafe(store.getState(), ['persistent', 'categories', gameMode], undefined);
                const APIKEY = storeHelper_1.getSafe(store.getState(), ['confidential', 'account', 'nexus', 'APIKey'], undefined);
                if (categories === undefined && APIKEY !== undefined) {
                    context.api.events.emit('retrieve-category-list', false, {});
                }
                else if (categories !== undefined && categories.length === 0) {
                    context.api.store.dispatch(category_1.updateCategories(gameMode, {}));
                }
            });
        }
        catch (err) {
            log_1.log('error', 'Failed to load categories', err);
            message_1.showError(store.dispatch, 'Failed to load categories', err);
        }
    });
    return true;
}
exports.default = init;
