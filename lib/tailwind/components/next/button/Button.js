"use strict";
/**
 * Button Component
 * Adapted from web team's "next" project for Vortex
 *
 * Provides a consistent button system with multiple types, sizes, and states.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.Button = void 0;
const React = __importStar(require("react"));
const Icon_1 = require("./Icon");
const Link_1 = require("./Link");
const Typography_1 = require("../typography/Typography");
const utils_1 = require("../utils");
const getSizes = ({ isResponsive, size, }) => {
    const md = {
        buttonClass: 'tw:min-h-9 tw:px-3 tw:min-w-24',
        iconClassName: 'tw:size-5',
        iconWrapperClassName: '[&>svg]:tw:max-w-5! [&>svg]:tw:max-h-5!',
        spacing: 'tw:gap-x-1.5',
        typographyType: 'body-lg',
    };
    switch (size) {
        case 'sm':
            if (isResponsive) {
                return {
                    buttonClass: (0, utils_1.joinClasses)([md.buttonClass, 'sm:tw:min-h-7 sm:tw:min-w-0 sm:tw:px-2.5']),
                    iconClassName: (0, utils_1.joinClasses)([md.iconClassName, 'sm:tw:size-4']),
                    iconWrapperClassName: (0, utils_1.joinClasses)([md.iconWrapperClassName, 'sm:[&>svg]:tw:max-h-4! sm:[&>svg]:tw:max-w-4!']),
                    spacing: (0, utils_1.joinClasses)([md.spacing, 'sm:tw:gap-x-1']),
                    typographyType: { default: md.typographyType, sm: 'body-md' },
                };
            }
            return {
                buttonClass: 'tw:min-h-7 tw:px-2.5',
                iconClassName: 'tw:size-4',
                iconWrapperClassName: '[&>svg]:tw:max-w-4! [&>svg]:tw:max-h-4!',
                spacing: 'tw:gap-x-1',
                typographyType: 'body-md',
            };
        case 'md':
            return md;
    }
};
const getButtonClasses = ({ buttonType, filled, isDisabled, isLoading, isResponsive, size, }) => {
    const { buttonClass } = getSizes({ isResponsive, size });
    const canHover = !isDisabled && !isLoading;
    const classes = [
        buttonClass,
        'tw:relative tw:whitespace-nowrap tw:transition [&>*:first-child]:tw:relative',
        'tw:flex tw:items-center tw:justify-center tw:rounded before:tw:rounded',
        ...(isDisabled
            ? ['tw:cursor-not-allowed tw:opacity-40']
            : ['tw:cursor-pointer', !isLoading && !filled ? 'tw:hover-overlay' : '']),
    ];
    switch (buttonType) {
        case 'primary':
            classes.push('tw:bg-primary-moderate tw:text-neutral-inverted');
            break;
        case 'secondary':
            classes.push('tw:border tw:border-stroke-moderate', canHover ? 'hover:tw:border-stroke-strong' : '');
            if (filled) {
                classes.push(...(filled === 'strong'
                    ? ['tw:bg-neutral-strong tw:text-neutral-inverted', canHover ? 'tw:hover-dark-overlay' : '']
                    : ['tw:bg-neutral-800 tw:text-neutral-moderate', canHover ? 'hover:tw:text-neutral-strong tw:hover-overlay' : '']));
            }
            else {
                classes.push('tw:text-neutral-moderate', canHover ? 'hover:tw:text-neutral-strong' : '');
            }
            break;
        case 'tertiary':
            if (filled) {
                classes.push(...(filled === 'strong'
                    ? ['tw:bg-neutral-strong tw:text-neutral-inverted', canHover ? 'tw:hover-dark-overlay' : '']
                    : ['tw:bg-neutral-800 tw:text-neutral-moderate', canHover ? 'hover:tw:text-neutral-strong tw:hover-overlay' : '']));
            }
            else {
                classes.push('tw:text-neutral-moderate', canHover ? 'hover:tw:text-neutral-strong' : '');
            }
            break;
        case 'success':
            classes.push('tw:bg-success-moderate tw:text-neutral-inverted');
            break;
        case 'premium':
            classes.push('tw:bg-premium-moderate tw:text-neutral-strong');
            break;
    }
    return classes;
};
const ButtonIcon = ({ className, icon, isLoading = false, path, wrapperClassName, }) => {
    if (isLoading) {
        // Note: Loading icon won't render until Icon component is implemented
        return (React.createElement("span", { className: (0, utils_1.joinClasses)(['tw:shrink-0 tw:animate-spin', className]) },
            React.createElement(Icon_1.Icon, { className: "tw:opacity-40", path: "mdiCircleOutline", size: "none" }),
            React.createElement(Icon_1.Icon, { path: "mdiLoading", size: "none" })));
    }
    if (!!icon) {
        return (React.createElement("span", { className: (0, utils_1.joinClasses)(['tw:flex tw:items-center tw:justify-center tw:shrink-0', wrapperClassName, className]) }, icon));
    }
    if (!!path) {
        return (React.createElement(Icon_1.Icon, { className: (0, utils_1.joinClasses)(['tw:shrink-0', className]), path: path, size: "none" }));
    }
    return null;
};
const Content = ({ isLoading, isResponsive, label, leftIcon, leftIconPath, rightIcon, rightIconPath, size, }) => {
    const { iconClassName, iconWrapperClassName, spacing, typographyType } = getSizes({ isResponsive, size });
    return (React.createElement("span", { className: (0, utils_1.joinClasses)(['tw:flex tw:items-center', spacing]) },
        React.createElement(ButtonIcon, { className: (0, utils_1.joinClasses)(['tw:-ml-0.5', iconClassName]), icon: leftIcon, isLoading: isLoading, path: leftIconPath, wrapperClassName: iconWrapperClassName }),
        !!label && (React.createElement(Typography_1.Typography, { appearance: "none", as: "span", className: "tw:grow tw:text-left tw:leading-5", typographyType: typographyType }, label)),
        React.createElement(ButtonIcon, { className: (0, utils_1.joinClasses)(['tw:-mr-0.5', iconClassName]), icon: rightIcon, path: rightIconPath, wrapperClassName: iconWrapperClassName })));
};
const Button = (all) => {
    var _a;
    const { 'aria-disabled': ariaDisabled, buttonType = 'primary', children, className, customContent, disabled, filled, isExternal, isLoading = false, isResponsive = false, leftIcon, leftIconPath, ref, rightIcon, rightIconPath, size = 'md' } = all, rest = __rest(all, ['aria-disabled', "buttonType", "children", "className", "customContent", "disabled", "filled", "isExternal", "isLoading", "isResponsive", "leftIcon", "leftIconPath", "ref", "rightIcon", "rightIconPath", "size"]);
    const content = customContent !== null && customContent !== void 0 ? customContent : (React.createElement(Content, { isLoading: isLoading, isResponsive: isResponsive, label: children, leftIcon: leftIcon, leftIconPath: leftIconPath, rightIcon: rightIcon, rightIconPath: rightIconPath, size: size }));
    if (rest.as === 'link') {
        const _b = rest, { as, href } = _b, props = __rest(_b, ["as", "href"]);
        return (React.createElement(Link_1.Link, Object.assign({ ref: ref, href: href, "aria-disabled": ariaDisabled ? true : undefined, isExternal: isExternal, className: (0, utils_1.joinClasses)([
                ...getButtonClasses({
                    buttonType,
                    filled,
                    isDisabled: !!ariaDisabled || isLoading,
                    isLoading,
                    isResponsive,
                    size,
                }),
                className || '',
            ]) }, props), content));
    }
    if (rest.as === 'a') {
        const { as } = rest, props = __rest(rest, ["as"]);
        return (React.createElement("a", Object.assign({ ref: ref, "aria-disabled": ariaDisabled, className: (0, utils_1.joinClasses)([
                ...getButtonClasses({
                    buttonType,
                    filled,
                    isDisabled: !!ariaDisabled || isLoading,
                    isLoading,
                    isResponsive,
                    size,
                }),
                className || '',
            ]) }, (isExternal ? { rel: 'noreferrer', target: '_blank' } : {}), props), content));
    }
    const { href } = rest, props = __rest(rest, ["href"]);
    return (React.createElement("button", Object.assign({ ref: ref, "aria-disabled": ariaDisabled, className: (0, utils_1.joinClasses)([
            ...getButtonClasses({
                buttonType,
                filled,
                isDisabled: !!ariaDisabled || !!disabled || isLoading,
                isLoading,
                isResponsive,
                size,
            }),
            className || '',
        ]), disabled: disabled || isLoading, type: (_a = props.type) !== null && _a !== void 0 ? _a : 'button' }, props), content));
};
exports.Button = Button;
