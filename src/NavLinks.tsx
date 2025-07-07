import React, { useState, useEffect, useRef } from "react";
import styles from "./NavbarLinks.module.css";
import { NavLinkType } from "./NavLinkType";

type Theme = 'light' | 'dark' | 'auto';

interface NavLinksProps {
  links: NavLinkType[];
  theme?: Theme;
  className?: string;
  baseLinkStyle?: React.CSSProperties;
  subLinkStyle?: React.CSSProperties;
  isRightAligned?: boolean;
  isBottomAligned?: boolean;
  isLeftAligned?: boolean;
  isTopAligned?: boolean;
  enableMobileCollapse?: boolean;
  showSkipNav?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({
  links,
  theme = 'auto',
  className = '',
  baseLinkStyle,
  subLinkStyle,
  isRightAligned = false,
  isBottomAligned = false,
  isLeftAligned = false,
  isTopAligned = false,
  enableMobileCollapse = true,
  showSkipNav = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

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
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
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
  const toggleMobileDropdown = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, hasSubNav: boolean, itemId: string) => {
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
  const renderLinkContent = (link: NavLinkType) => {
    const content = [];

    // SVG Logo
    if (link.svgLogoIcon) {
      content.push(
        <img
          key="logo"
          src={link.svgLogoIcon.src}
          alt={link.svgLogoIcon.alt}
          width={link.svgLogoIcon.width ?? 24}
          height={link.svgLogoIcon.height ?? 24}
          style={link.svgLogoIcon.style}
          className={styles.logoIcon}
        />
      );
      if (link.svgLogoIcon.caption) {
        content.push(
          <span key="caption" className={styles.logoCaption}>
            {link.svgLogoIcon.caption}
          </span>
        );
      }
      return content;
    }

    // Emoji
    if (link.emoji) {
      content.push(
        <span key="emoji" className={styles.emoji}>
          {link.emoji}
        </span>
      );
    }

    // Left Icon
    if (link.iconLeft) {
      content.push(
        <i key="icon-left" className={`${link.iconLeft} ${styles.iconLeft}`} />
      );
    }

    // Label
    content.push(
      <span key="label" className={styles.label}>
        {link.label}
      </span>
    );

    // Right Icon
    if (link.iconRight) {
      content.push(
        <i key="icon-right" className={`${link.iconRight} ${styles.iconRight}`} />
      );
    }

    return content;
  };

  // Render dropdown menu
  const renderDropdown = (subNav: NavLinkType[], depth: number = 1, parentId: string = '') => {
    if (!subNav || subNav.length === 0) return null;

    const alignmentClass = isRightAligned ? styles.rightAligned :
                          isLeftAligned ? styles.leftAligned :
                          isTopAligned ? styles.topAligned :
                          isBottomAligned ? styles.bottomAligned : '';

    return (
      <ul
        className={`${styles.dropdown} ${alignmentClass} ${
          isMobile && expandedItems.has(parentId) ? styles.mobileOpen : ''
        }`}
        style={subLinkStyle}
        role="menu"
        aria-orientation={isMobile ? "vertical" : "horizontal"}
      >
        {subNav.map((item, index) => {
          const itemId = `${parentId}-${depth}-${index}`;
          const hasSubNav = item.subNav && item.subNav.length > 0;
          const isExpanded = expandedItems.has(itemId);

          return (
            <li key={itemId} className={`${styles.dropdownItem} ${hasSubNav ? styles.hasChildren : ''}`}>
              <a
                href={item.href}
                className={`${styles.dropdownLink} ${item.className || ''}`}
                role="menuitem"
                tabIndex={0}
                aria-haspopup={hasSubNav ? "true" : "false"}
                aria-expanded={hasSubNav ? isExpanded : undefined}
                onClick={(e) => {
                  if (hasSubNav && isMobile) {
                    e.preventDefault();
                    toggleMobileDropdown(itemId);
                  }
                  if (item.onClick) {
                    item.onClick(e);
                  }
                }}
                onKeyDown={(e) => handleKeyDown(e, !!hasSubNav, itemId)}
                title={item.title || item.label}
              >
                {renderLinkContent(item)}
                {hasSubNav && (
                  <span className={`${styles.dropdownIndicator} ${isExpanded ? styles.expanded : ''}`}>
                    {isMobile ? '▼' : '▶'}
                  </span>
                )}
              </a>
              {hasSubNav && renderDropdown(item.subNav!, depth + 1, itemId)}
            </li>
          );
        })}
      </ul>
    );
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

  return (
    <nav
      ref={navRef}
      className={`${styles.navContainer} ${getThemeClass()} ${className}`}
      aria-label="Main navigation"
      role="navigation"
    >
      {/* Skip Navigation Link */}
      {showSkipNav && (
        <a href="#main-content" className={styles.skipNav}>
          Skip to main content
        </a>
      )}

      {/* Mobile Header */}
      {isMobile && enableMobileCollapse && (
        <div className={styles.mobileHeader}>
          {/* Brand Logo */}
          {links.find(link => link.svgLogoIcon) && (
            <div className={styles.mobileBrand}>
              {renderLinkContent(links.find(link => link.svgLogoIcon)!)}
            </div>
          )}
          
          {/* Hamburger Menu Button */}
          <button
            className={`${styles.hamburgerBtn} ${mobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="main-navigation"
            type="button"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <ul
        id="main-navigation"
        className={`${styles.baseLinks} ${
          isMobile && enableMobileCollapse ? styles.mobileNav : ''
        } ${mobileMenuOpen ? styles.mobileOpen : ''}`}
        style={baseLinkStyle}
        role="menubar"
        aria-orientation={isMobile ? "vertical" : "horizontal"}
      >
        {links.map((link, index) => {
          const itemId = `main-${index}`;
          const hasSubNav = link.subNav && link.subNav.length > 0;
          const isExpanded = expandedItems.has(itemId);

          return (
            <li key={itemId} className={`${styles.baseItem} ${hasSubNav ? styles.hasChildren : ''}`}>
              <a
                href={link.href}
                className={`${styles.baseLink} ${link.className || ''}`}
                role="menuitem"
                tabIndex={0}
                aria-haspopup={hasSubNav ? "true" : "false"}
                aria-expanded={hasSubNav ? isExpanded : undefined}
                onClick={(e) => {
                  if (hasSubNav && isMobile) {
                    e.preventDefault();
                    toggleMobileDropdown(itemId);
                  }
                  if (link.onClick) {
                    link.onClick(e);
                  }
                }}
                onKeyDown={(e) => handleKeyDown(e, !!hasSubNav, itemId)}
                title={link.title || link.label}
              >
                {renderLinkContent(link)}
                {hasSubNav && (
                  <span className={`${styles.dropdownIndicator} ${isExpanded ? styles.expanded : ''}`}>
                    {isMobile ? '▼' : '▼'}
                  </span>
                )}
              </a>
              {hasSubNav && renderDropdown(link.subNav!, 1, itemId)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
