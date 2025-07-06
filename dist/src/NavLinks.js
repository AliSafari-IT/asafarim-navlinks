import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import defaultStyle from "./NavbarLinks.module.css";
const NavLinks = ({ links, className, baseLinkStyle, subLinkStyle, isRightAligned = false, isBottomAligned = false, isLeftAligned = false, isTopAligned = false, }) => {
    const renderSubNav = (subNav, depth = 1) => {
        if (!subNav)
            return null;
        return (_jsx("ul", { className: `${className} ${defaultStyle.dropdown} depth-${depth}`, style: {
                ...subLinkStyle,
                zIndex: 1000 + depth
            }, "data-depth": depth, children: subNav.map((subLink, subIndex) => {
                const hasSubNav = !!subLink.subNav && subLink.subNav.length > 0;
                return (_jsxs("li", { className: `${hasSubNav ? defaultStyle.hasChildren : ""} ${isRightAligned
                        ? defaultStyle.rightAligned
                        : isBottomAligned
                            ? defaultStyle.bottomAligned
                            : isLeftAligned
                                ? defaultStyle.leftAligned
                                : isTopAligned
                                    ? defaultStyle.topAligned
                                    : ""} dropdown-item-${depth}`, "data-has-children": hasSubNav ? "true" : "false", children: [_jsxs("a", { href: subLink.href, onClick: (e) => {
                                // Only prevent default if it's a parent item with no actual link
                                if (hasSubNav && subLink.href === "#") {
                                    e.preventDefault();
                                }
                            }, title: subLink.label || subLink.title, className: hasSubNav ? "has-submenu" : "", "data-depth": depth, children: [getLinkContent(subLink), hasSubNav && (_jsx("span", { className: defaultStyle.dropdownIndicator, style: { color: "white", fontWeight: "bold" }, children: depth === 1 ? " ▼" : " ▶" }))] }), hasSubNav && renderSubNav(subLink.subNav, depth + 1)] }, `sublevel-${depth}-${subIndex}`));
            }) }));
    };
    const getLinkContent = (link) => {
        if (!link)
            return null;
        if (link.svgLogoIcon) {
            return (_jsxs(_Fragment, { children: [_jsx("img", { src: link.svgLogoIcon.src, alt: link.svgLogoIcon.alt, width: link.svgLogoIcon.width ?? 40, height: link.svgLogoIcon.height ?? "auto", style: link.svgLogoIcon.style ?? { width: "20px", height: "20px" } }), link.svgLogoIcon.caption && _jsx("span", { children: link.svgLogoIcon.caption })] }));
        }
        if (link.emoji) {
            return _jsxs("span", { className: defaultStyle.emoji, children: [link.emoji, " ", link.label] });
        }
        if (link.iconLeft) {
            return (_jsxs("span", { children: [_jsx("i", { className: link.iconLeft }), " ", link.label] }));
        }
        if (link.iconRight) {
            return (_jsxs("span", { children: [link.label, " ", _jsx("i", { className: link.iconRight })] }));
        }
        return link.label;
    };
    return (_jsx("ul", { className: `${defaultStyle.baseLinks} ${className || ""}`, style: baseLinkStyle, children: links.map((link, index) => {
            return (_jsxs("li", { className: `${link.subNav ? defaultStyle.hasChildren : ""} ${isRightAligned
                    ? defaultStyle.rightAligned
                    : isBottomAligned
                        ? defaultStyle.bottomAligned
                        : isLeftAligned
                            ? defaultStyle.leftAligned
                            : isTopAligned
                                ? defaultStyle.topAligned
                                : ""}`, children: [_jsxs("a", { href: link.href, onClick: (e) => {
                            // Only prevent default if it's a parent item with no actual link
                            if (link.subNav && link.href === "#") {
                                e.preventDefault();
                            }
                        }, title: link.label || link.title, children: [getLinkContent(link), link.subNav && (_jsx("span", { className: defaultStyle.dropdownIndicator, children: " \u25BC" }))] }), link.subNav && renderSubNav(link.subNav, 1)] }, `level-0-${index}`));
        }) }));
};
export default NavLinks;
