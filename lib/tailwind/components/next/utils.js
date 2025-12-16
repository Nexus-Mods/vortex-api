"use strict";
/**
 * Shared utility functions for web team components
 * Adapted from web team's "next" project
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinClasses = joinClasses;
exports.getTabId = getTabId;
/**
 * Joins class names, filtering out falsy values
 * Supports conditional classes via object syntax
 */
function joinClasses(classes, conditionalClasses) {
    const classArray = [];
    // Process main classes
    classes.forEach((item) => {
        if (typeof item === "string") {
            classArray.push(item);
        }
        else if (Array.isArray(item)) {
            classArray.push(...item);
        }
        else if (typeof item === "object") {
            Object.entries(item).forEach(([key, value]) => {
                if (value) {
                    classArray.push(key);
                }
            });
        }
    });
    // Process conditional classes
    if (conditionalClasses) {
        Object.entries(conditionalClasses).forEach(([key, value]) => {
            if (value) {
                classArray.push(key);
            }
        });
    }
    return classArray.filter(Boolean).join(" ");
}
/**
 * Converts a tab name into a valid HTML element ID
 * Converts to lowercase and replaces whitespace with underscores
 *
 * @example
 * getTabId('My Tab') → 'my_tab'
 * getTabId('Tab   1') → 'tab_1'
 * getTabId('A tab name\n  on multiple lines') → 'a_tab_name_on_multiple_lines'
 */
function getTabId(tabName) {
    return tabName.toLowerCase().replace(/\s+/g, "_");
}
