import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import styles from "./NavbarLinks.module.css";
const NavLinks = ({ links, theme = 'auto', className = '', baseLinkStyle, subLinkStyle, isRightAligned = false, isBottomAligned = false, isLeftAligned = false, isTopAligned = false, enableMobileCollapse = true, showSkipNav = false, }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState(new Set());
    const [isMobile, setIsMobile] = useState(false);
    const navRef = useRef(null);
    // Mobile detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
                setExpandedItems(new Set());
            }
        };
        if (mobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [mobileMenuOpen]);
    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (mobileMenuOpen) {
            setExpandedItems(new Set());
        }
    };
    // Toggle mobile dropdown
    const toggleMobileDropdown = (itemId) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(itemId)) {
            newExpanded.delete(itemId);
        }
        else {
            newExpanded.add(itemId);
        }
        setExpandedItems(newExpanded);
    };
    // Handle keyboard navigation
    const handleKeyDown = (e, hasSubNav, itemId) => {
        if (e.key === 'Escape') {
            setMobileMenuOpen(false);
            setExpandedItems(new Set());
            return;
        }
        if (hasSubNav && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            if (isMobile) {
                toggleMobileDropdown(itemId);
            }
        }
    };
    // Render link content
    const renderLinkContent = (link) => {
        const content = [];
        // SVG Logo
        if (link.svgLogoIcon) {
            content.push(_jsx("img", { src: link.svgLogoIcon.src, alt: link.svgLogoIcon.alt, width: link.svgLogoIcon.width ?? 24, height: link.svgLogoIcon.height ?? 24, style: link.svgLogoIcon.style, className: styles.logoIcon }, "logo"));
            if (link.svgLogoIcon.caption) {
                content.push(_jsx("span", { className: styles.logoCaption, children: link.svgLogoIcon.caption }, "caption"));
            }
            return content;
        }
        // Emoji
        if (link.emoji) {
            content.push(_jsx("span", { className: styles.emoji, children: link.emoji }, "emoji"));
        }
        // Left Icon
        if (link.iconLeft) {
            content.push(_jsx("i", { className: `${link.iconLeft} ${styles.iconLeft}` }, "icon-left"));
        }
        // Label
        content.push(_jsx("span", { className: styles.label, children: link.label }, "label"));
        // Right Icon
        if (link.iconRight) {
            content.push(_jsx("i", { className: `${link.iconRight} ${styles.iconRight}` }, "icon-right"));
        }
        return content;
    };
    // Render dropdown menu
    const renderDropdown = (subNav, depth = 1, parentId = '') => {
        if (!subNav || subNav.length === 0)
            return null;
        const alignmentClass = isRightAligned ? styles.rightAligned :
            isLeftAligned ? styles.leftAligned :
                isTopAligned ? styles.topAligned :
                    isBottomAligned ? styles.bottomAligned : '';
        return (_jsx("ul", { className: `${styles.dropdown} ${alignmentClass} ${isMobile && expandedItems.has(parentId) ? styles.mobileOpen : ''}`, style: subLinkStyle, role: "menu", "aria-orientation": isMobile ? "vertical" : "horizontal", children: subNav.map((item, index) => {
                const itemId = `${parentId}-${depth}-${index}`;
                const hasSubNav = item.subNav && item.subNav.length > 0;
                const isExpanded = expandedItems.has(itemId);
                return (_jsxs("li", { className: `${styles.dropdownItem} ${hasSubNav ? styles.hasChildren : ''}`, children: [_jsxs("a", { href: item.href, className: `${styles.dropdownLink} ${item.className || ''}`, role: "menuitem", tabIndex: 0, "aria-haspopup": hasSubNav ? "true" : "false", "aria-expanded": hasSubNav ? isExpanded : undefined, onClick: (e) => {
                                if (hasSubNav && isMobile) {
                                    e.preventDefault();
                                    toggleMobileDropdown(itemId);
                                }
                                if (item.onClick) {
                                    item.onClick(e);
                                }
                            }, onKeyDown: (e) => handleKeyDown(e, !!hasSubNav, itemId), title: item.title || item.label, children: [renderLinkContent(item), hasSubNav && (_jsx("span", { className: `${styles.dropdownIndicator} ${isExpanded ? styles.expanded : ''}`, children: isMobile ? '▼' : '▶' }))] }), hasSubNav && renderDropdown(item.subNav, depth + 1, itemId)] }, itemId));
            }) }));
    };
    // Get theme class
    const getThemeClass = () => {
        switch (theme) {
            case 'light':
                return styles.lightTheme;
            case 'dark':
                return styles.darkTheme;
            case 'auto':
            default:
                return styles.autoTheme;
        }
    };
    return (_jsxs("nav", { ref: navRef, className: `${styles.navContainer} ${getThemeClass()} ${className}`, "aria-label": "Main navigation", role: "navigation", children: [showSkipNav && (_jsx("a", { href: "#main-content", className: styles.skipNav, children: "Skip to main content" })), isMobile && enableMobileCollapse && (_jsxs("div", { className: styles.mobileHeader, children: [links.find(link => link.svgLogoIcon) && (_jsx("div", { className: styles.mobileBrand, children: renderLinkContent(links.find(link => link.svgLogoIcon)) })), _jsxs("button", { className: `${styles.hamburgerBtn} ${mobileMenuOpen ? styles.active : ''}`, onClick: toggleMobileMenu, "aria-expanded": mobileMenuOpen, "aria-label": mobileMenuOpen ? "Close menu" : "Open menu", "aria-controls": "main-navigation", type: "button", children: [_jsx("span", { className: styles.hamburgerLine }), _jsx("span", { className: styles.hamburgerLine }), _jsx("span", { className: styles.hamburgerLine })] })] })), _jsx("ul", { id: "main-navigation", className: `${styles.baseLinks} ${isMobile && enableMobileCollapse ? styles.mobileNav : ''} ${mobileMenuOpen ? styles.mobileOpen : ''}`, style: baseLinkStyle, role: "menubar", "aria-orientation": isMobile ? "vertical" : "horizontal", children: links.map((link, index) => {
                    const itemId = `main-${index}`;
                    const hasSubNav = link.subNav && link.subNav.length > 0;
                    const isExpanded = expandedItems.has(itemId);
                    return (_jsxs("li", { className: `${styles.baseItem} ${hasSubNav ? styles.hasChildren : ''}`, children: [_jsxs("a", { href: link.href, className: `${styles.baseLink} ${link.className || ''}`, role: "menuitem", tabIndex: 0, "aria-haspopup": hasSubNav ? "true" : "false", "aria-expanded": hasSubNav ? isExpanded : undefined, onClick: (e) => {
                                    if (hasSubNav && isMobile) {
                                        e.preventDefault();
                                        toggleMobileDropdown(itemId);
                                    }
                                    if (link.onClick) {
                                        link.onClick(e);
                                    }
                                }, onKeyDown: (e) => handleKeyDown(e, !!hasSubNav, itemId), title: link.title || link.label, children: [renderLinkContent(link), hasSubNav && (_jsx("span", { className: `${styles.dropdownIndicator} ${isExpanded ? styles.expanded : ''}`, children: isMobile ? '▼' : '▼' }))] }), hasSubNav && renderDropdown(link.subNav, 1, itemId)] }, itemId));
                }) })] }));
};
export default NavLinks;
