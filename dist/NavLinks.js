"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var NavbarLinks_module_css_1 = __importDefault(require("./NavbarLinks.module.css"));
var NavLinks = function (_a) {
    var links = _a.links, className = _a.className, baseLinkStyle = _a.baseLinkStyle, subLinkStyle = _a.subLinkStyle, _b = _a.isRightAligned, isRightAligned = _b === void 0 ? false : _b, _c = _a.isBottomAligned, isBottomAligned = _c === void 0 ? false : _c;
    var _d = (0, react_1.useState)({}), openDropdown = _d[0], setOpenDropdown = _d[1];
    function getSvg(link) {
        var svgRelativePath = link.svgRelativePath;
        // add './' to svgRelativePath if it is not a full path or a valid remote url and it doesn't have it
        if (svgRelativePath &&
            !svgRelativePath.startsWith('./') &&
            !svgRelativePath.startsWith('/') &&
            !svgRelativePath.startsWith('http')) {
            svgRelativePath = "./".concat(svgRelativePath);
        }
        return svgRelativePath;
    }
    var handleToggle = function (key) {
        setOpenDropdown(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[key] = !prev[key], _a)));
        });
    };
    var renderSubNav = function (subNav, parentIndex) {
        if (!subNav)
            return null;
        return (react_1.default.createElement("ul", { className: className, style: __assign(__assign({}, subLinkStyle), { position: 'absolute' }) }, subNav.map(function (subLink, subIndex) {
            var key = "".concat(parentIndex, "-").concat(subIndex);
            var svgRelativePath = getSvg(subLink);
            return (react_1.default.createElement("li", { key: key, style: { position: 'relative' }, className: isRightAligned
                    ? NavbarLinks_module_css_1.default.rightAligned
                    : isBottomAligned
                        ? NavbarLinks_module_css_1.default.bottomAligned
                        : undefined },
                react_1.default.createElement("a", { href: subLink.href, onClick: function (e) {
                        if (subLink.subNav) {
                            e.preventDefault();
                            handleToggle(key);
                        }
                    } },
                    svgRelativePath && (react_1.default.createElement("img", { src: require("".concat(svgRelativePath)), alt: subLink.title })) && react_1.default.createElement("span", null, subLink.label),
                    !svgRelativePath && subLink.emoji && react_1.default.createElement("span", null, subLink.emoji),
                    !svgRelativePath && !subLink.emoji && subLink.iconLeft && (react_1.default.createElement("i", { className: subLink.iconLeft })),
                    subLink.label,
                    !svgRelativePath && !subLink.emoji && subLink.iconRight && (react_1.default.createElement("i", { className: subLink.iconRight }))),
                openDropdown[key] && renderSubNav(subLink.subNav, key)));
        })));
    };
    return (react_1.default.createElement("ul", { className: "".concat(NavbarLinks_module_css_1.default.baseLinks, " ").concat(className), style: baseLinkStyle }, links.map(function (link, index) {
        var key = index.toString();
        var svgRelativePath = getSvg(link);
        return (react_1.default.createElement("li", { key: key, className: isRightAligned
                ? NavbarLinks_module_css_1.default.rightAligned
                : isBottomAligned
                    ? NavbarLinks_module_css_1.default.bottomAligned
                    : undefined, style: { position: 'relative' } },
            react_1.default.createElement("a", { href: link.href, onClick: function (e) {
                    if (link.subNav) {
                        e.preventDefault();
                        handleToggle(key);
                    }
                } },
                svgRelativePath && (react_1.default.createElement("img", { src: require("".concat(svgRelativePath)), alt: link.title })) && react_1.default.createElement("span", null, link.label),
                !svgRelativePath && link.emoji && react_1.default.createElement("span", null, link.emoji),
                !svgRelativePath && !link.emoji && link.iconLeft && (react_1.default.createElement("i", { className: link.iconLeft })),
                link.label,
                !svgRelativePath && !link.emoji && link.iconRight && (react_1.default.createElement("i", { className: link.iconRight }))),
            openDropdown[key] && renderSubNav(link.subNav, key)));
    })));
};
exports.default = NavLinks;
