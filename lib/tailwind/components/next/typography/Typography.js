"use strict";
/**
 * Typography Component
 * Adapted from web team's "next" project for Vortex
 *
 * Provides a consistent typography system with predefined sizes and appearances.
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
const react_1 = require("react");
const utils_1 = require("../utils");
const getTypographyStyles = ({ as, typographyType, }) => {
    const styles = [];
    const typeFallbacks = {
        div: 'body-md',
        h1: 'heading-2xl',
        h2: 'heading-xl',
        h3: 'heading-lg',
        h4: 'heading-md',
        h5: 'heading-sm',
        h6: 'heading-xs',
        p: 'body-md',
        span: 'body-md',
        ul: 'body-md',
    };
    if (!typographyType || typeof typographyType === 'string') {
        styles.push(`tw:typography-${typeof typographyType === 'string'
            ? typographyType
            : typeFallbacks[as]}`);
    }
    else {
        Object.keys(typographyType).forEach((size) => {
            const screenSize = size;
            const style = typographyType[screenSize];
            if (style) {
                styles.push(`${screenSize === 'default' ? 'tw:' : `${screenSize}:tw:`}typography-${style}`);
            }
        });
    }
    return styles;
};
const Typography = (_a) => {
    var { appearance = 'inverted', as = 'p', children, className, isTranslucent = false, typographyType } = _a, props = __rest(_a, ["appearance", "as", "children", "className", "isTranslucent", "typographyType"]);
    /* eslint-disable sort-keys */
    const appearanceClasses = {
        none: '',
        inverted: isTranslucent ? 'tw:text-translucent-dark-950' : 'tw:text-neutral-inverted',
        moderate: isTranslucent ? 'tw:text-translucent-moderate' : 'tw:text-neutral-moderate',
        strong: isTranslucent ? 'tw:text-translucent-strong' : 'tw:text-neutral-strong',
        subdued: isTranslucent ? 'tw:text-translucent-subdued' : 'tw:text-neutral-subdued',
        weak: isTranslucent ? 'tw:text-translucent-weak' : 'tw:text-neutral-weak',
    };
    /* eslint-enable sort-keys */
    return (0, react_1.createElement)(as, Object.assign({ className: (0, utils_1.joinClasses)([
            ...getTypographyStyles({ as, typographyType }),
            appearanceClasses[appearance],
            className,
        ]) }, props), children);
};
exports.Typography = Typography;
