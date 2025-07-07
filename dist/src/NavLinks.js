import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import styles from './NavbarLinks.module.css';
const NavLinks = ({ links, theme = 'auto', className = '', baseLinkStyle, subLinkStyle, isRightAligned = false, isLeftAligned = false, isTopAligned = false, isBottomAligned = false, enableMobileCollapse = true, showSkipNav = false, isDemoContext = false }) => {
    // State hooks
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const navRef = useRef(null);
    // Detect mobile devices
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // Close menu when clicking outside
    useEffect(() => {
        if (!mobileMenuOpen)
            return;
        const handleOutsideClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setMobileMenuOpen(false);
                setExpandedItems([]);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [mobileMenuOpen]);
    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
        if (mobileMenuOpen) {
            setExpandedItems([]);
        }
    };
    // Toggle dropdown
    const toggleDropdown = (id, event) => {
        event.preventDefault();
        event.stopPropagation();
        // On desktop, only toggle with keyboard, not mouse
        if (!isMobile && event.type === 'click')
            return;
        setExpandedItems(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            }
            else {
                return [...prev, id];
            }
        });
    };
    // Handle keyboard navigation
    const handleKeyDown = (e, hasChildren, id) => {
        if (e.key === 'Escape') {
            setMobileMenuOpen(false);
            setExpandedItems([]);
            return;
        }
        if (hasChildren && (e.key === 'Enter' || e.key === ' ')) {
            toggleDropdown(id, e);
        }
    };
    // Render link content (icons, labels, etc.)
    const renderLinkContent = (link) => {
        const content = [];
        // Logo image
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
        // Left icon
        if (link.iconLeft) {
            content.push(_jsx("i", { className: `${link.iconLeft} ${styles.iconLeft}` }, "left-icon"));
        }
        // Label
        if (link.label) {
            content.push(_jsx("span", { className: styles.label, children: link.label }, "label"));
        }
        // Right icon
        if (link.iconRight) {
            content.push(_jsx("i", { className: `${link.iconRight} ${styles.iconRight}` }, "right-icon"));
        }
        return content;
    };
    // NavItem component to render either a button (for dropdown parents) or anchor (for links)
    const NavItem = ({ link, id, depth = 0 }) => {
        const hasChildren = Boolean(link.subNav?.length);
        const isExpanded = expandedItems.includes(id);
        const isDropdownParent = hasChildren && !link.href;
        // Button for dropdown parents without href
        if (isDropdownParent) {
            return (_jsxs("button", { className: `${styles.navButton} ${link.className || ''}`, onClick: (e) => toggleDropdown(id, e), onKeyDown: (e) => handleKeyDown(e, true, id), "aria-haspopup": "true", "aria-expanded": isExpanded, type: "button", children: [renderLinkContent(link), _jsx("span", { className: `${styles.arrow} ${isExpanded ? styles.expanded : ''}`, children: depth > 0 ? '►' : '▼' })] }));
        }
        // Regular link
        return (_jsxs("a", { href: link.href || '#', className: link.className || '', onClick: (e) => {
                if (hasChildren) {
                    toggleDropdown(id, e);
                }
                link.onClick?.(e);
            }, onKeyDown: (e) => handleKeyDown(e, hasChildren, id), "aria-haspopup": hasChildren ? "true" : undefined, "aria-expanded": hasChildren ? isExpanded : undefined, title: link.title || link.label || '', children: [renderLinkContent(link), hasChildren && (_jsx("span", { className: `${styles.arrow} ${isExpanded ? styles.expanded : ''}`, children: depth > 0 ? '►' : '▼' }))] }));
    };
    // Recursive component to render menu items
    const MenuItems = ({ items, depth = 0, parent = '' }) => {
        return items.map((item, index) => {
            const id = parent ? `${parent}-${index}` : `item-${index}`;
            const hasChildren = Boolean(item.subNav?.length);
            const isExpanded = expandedItems.includes(id);
            return (_jsxs("li", { className: `${hasChildren ? styles.hasChildren : ''} ${isExpanded ? styles.expanded : ''}`, children: [_jsx(NavItem, { link: item, id: id, depth: depth }), hasChildren && item.subNav && (_jsx("ul", { className: `
                ${styles.dropdown} 
                ${isExpanded ? styles.expanded : ''}
                ${!isMobile ? (isRightAligned ? styles.rightAligned :
                            isLeftAligned ? styles.leftAligned :
                                isTopAligned ? styles.topAligned :
                                    isBottomAligned ? styles.bottomAligned : '') : ''}
              `, style: depth > 0 && !isMobile ? subLinkStyle : undefined, children: _jsx(MenuItems, { items: item.subNav, depth: depth + 1, parent: id }) }))] }, id));
        });
    };
    // Get theme class
    const getThemeClass = () => {
        switch (theme) {
            case 'light': return styles.lightTheme;
            case 'dark': return styles.darkTheme;
            default: return styles.autoTheme;
        }
    };
    return (_jsxs("nav", { ref: navRef, className: `
        ${styles.navContainer} 
        ${getThemeClass()} 
        ${isDemoContext ? styles.demoContext : ''}
        ${className}
      `, "aria-label": "Main navigation", children: [showSkipNav && (_jsx("a", { href: "#main-content", className: styles.skipNav, children: "Skip to main content" })), isMobile && enableMobileCollapse && (_jsxs("div", { className: styles.mobileHeader, children: [links.find(link => link.svgLogoIcon) && (_jsx("div", { className: styles.mobileBrand, children: renderLinkContent(links.find(link => link.svgLogoIcon)) })), _jsxs("button", { className: `${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`, onClick: toggleMobileMenu, "aria-expanded": mobileMenuOpen, "aria-label": mobileMenuOpen ? "Close menu" : "Open menu", type: "button", children: [_jsx("span", { className: styles.hamburgerLine }), _jsx("span", { className: styles.hamburgerLine }), _jsx("span", { className: styles.hamburgerLine })] })] })), _jsx("ul", { className: `
          ${styles.navList} 
          ${isMobile && enableMobileCollapse ? styles.mobileNav : ''} 
          ${mobileMenuOpen ? styles.mobileOpen : ''}
        `, style: baseLinkStyle, role: "menubar", children: _jsx(MenuItems, { items: links }) })] }));
};
export default NavLinks;
