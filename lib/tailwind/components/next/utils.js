"use strict";
/**
 * Shared utility functions for web team components
 * Adapted from web team's "next" project
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinClasses = joinClasses;
/**
 * Joins class names, filtering out falsy values
 * Supports conditional classes via object syntax
 */
function joinClasses(classes, conditionalClasses) {
    const classArray = [];
    // Process main classes
    classes.forEach((item) => {
        if (typeof item === 'string') {
            classArray.push(item);
        }
        else if (Array.isArray(item)) {
            classArray.push(...item);
        }
        else if (typeof item === 'object') {
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
    return classArray.filter(Boolean).join(' ');
}
