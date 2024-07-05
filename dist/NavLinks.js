import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import defaultStyle from "./NavbarLinks.module.css";
const NavLinks = ({ links, className, baseLinkStyle, subLinkStyle, isRightAligned = false, isBottomAligned = false, }) => {
    const [openDropdown, setOpenDropdown] = useState({});
    const handleToggle = (key) => {
        setOpenDropdown((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };
    const renderSubNav = (subNav, parentIndex) => {
        if (!subNav)
            return null;
        return (_jsx("ul", { className: className, style: { ...subLinkStyle, position: "absolute" }, children: subNav.map((subLink, subIndex) => {
                const key = `${parentIndex}-${subIndex}`;
                return (_jsxs("li", { style: { position: "relative" }, className: isRightAligned
                        ? defaultStyle.rightAligned
                        : isBottomAligned
                            ? defaultStyle.bottomAligned
                            : undefined, children: [_jsx("a", { href: subLink.href, onClick: (e) => {
                                if (subLink.subNav) {
                                    e.preventDefault();
                                    handleToggle(key);
                                }
                            }, title: subLink.label, children: getLinkContent(subLink) }), openDropdown[key] && renderSubNav(subLink.subNav, key)] }, key));
            }) }));
    };
    const getLinkContent = (link) => {
        if (!link)
            return null;
        if (link.svgLogoIcon) {
            return (_jsxs(_Fragment, { children: [_jsx("img", { src: link.svgLogoIcon.src, alt: link.svgLogoIcon.alt, width: link.svgLogoIcon.width ?? 40, height: link.svgLogoIcon.height ?? "auto", style: link.svgLogoIcon.style ?? { width: "20px", height: "20px" } }), link.svgLogoIcon.caption && _jsx("span", { children: link.svgLogoIcon.caption })] }));
        }
        if (link.emoji) {
            return _jsx("span", { children: link.emoji });
        }
        if (link.iconLeft) {
            return (_jsxs("span", { children: [_jsx("i", { className: link.iconLeft }), " ", link.label] }));
        }
        if (link.iconRight) {
            return (_jsxs("span", { children: [link.label, " ", _jsx("i", { className: link.iconRight })] }));
        }
        return link.label;
    };
    return (_jsx("ul", { className: `${defaultStyle.baseLinks} ${className}`, style: baseLinkStyle, children: links.map((link, index) => {
            const key = index.toString();
            return (_jsxs("li", { className: isRightAligned
                    ? defaultStyle.rightAligned
                    : isBottomAligned
                        ? defaultStyle.bottomAligned
                        : undefined, style: { position: "relative" }, children: [_jsx("a", { href: link.href, onClick: (e) => {
                            if (link.subNav) {
                                e.preventDefault();
                                handleToggle(key);
                            }
                        }, title: link.label, children: getLinkContent(link) }), openDropdown[key] && renderSubNav(link.subNav, key)] }, key));
        }) }));
};
export default NavLinks;
