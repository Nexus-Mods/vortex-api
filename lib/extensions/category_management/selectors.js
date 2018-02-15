"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = require("../../util/selectors");
function allCategories(state) {
    const gameMode = selectors_1.activeGameId(state);
    const categories = state.persistent.categories[gameMode];
    return categories !== undefined ? categories : [];
}
exports.allCategories = allCategories;
