import React, { useState, useEffect, useRef } from 'react';
import styles from './NavbarLinks.module.css';
import { NavLinkType } from './NavLinkType';

type Theme = 'light' | 'dark' | 'auto';

interface NavLinksProps {
  links: NavLinkType[];
  theme?: Theme;
  className?: string;
  baseLinkStyle?: React.CSSProperties;
  subLinkStyle?: React.CSSProperties;
  isRightAligned?: boolean;
  isLeftAligned?: boolean;
  isTopAligned?: boolean;
  isBottomAligned?: boolean;
  enableMobileCollapse?: boolean;
  showSkipNav?: boolean;
  isDemoContext?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({
  links,
  theme = 'auto',
  className = '',
  baseLinkStyle,
  subLinkStyle,
  isRightAligned = false,
  isLeftAligned = false,
  isTopAligned = false,
  isBottomAligned = false,
  enableMobileCollapse = true,
  showSkipNav = false,
  isDemoContext = false
}) => {
  // State hooks
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

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
    if (!mobileMenuOpen) return;
    
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
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
  const toggleDropdown = (id: string, event: React.MouseEvent | React.KeyboardEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    // On desktop, only toggle with keyboard, not mouse
    if (!isMobile && event.type === 'click') return;
    
    setExpandedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, hasChildren: boolean, id: string) => {
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
  const renderLinkContent = (link: NavLinkType) => {
    const content = [];

    // Logo image
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

    // Left icon
    if (link.iconLeft) {
      content.push(
        <i key="left-icon" className={`${link.iconLeft} ${styles.iconLeft}`} />
      );
    }

    // Label
    if (link.label) {
      content.push(
        <span key="label" className={styles.label}>
          {link.label}
        </span>
      );
    }

    // Right icon
    if (link.iconRight) {
      content.push(
        <i key="right-icon" className={`${link.iconRight} ${styles.iconRight}`} />
      );
    }

    return content;
  };

  // NavItem component to render either a button (for dropdown parents) or anchor (for links)
  const NavItem = ({ 
    link,
    id,
    depth = 0
  }: { 
    link: NavLinkType;
    id: string;
    depth?: number;
  }) => {
    const hasChildren = Boolean(link.subNav?.length);
    const isExpanded = expandedItems.includes(id);
    const isDropdownParent = hasChildren && !link.href;
    
    // Button for dropdown parents without href
    if (isDropdownParent) {
      return (
        <button
          className={`${styles.navButton} ${link.className || ''}`}
          onClick={(e) => toggleDropdown(id, e)}
          onKeyDown={(e) => handleKeyDown(e, true, id)}
          aria-haspopup="true"
          aria-expanded={isExpanded}
          type="button"
        >
          {renderLinkContent(link)}
          <span className={`${styles.arrow} ${isExpanded ? styles.expanded : ''}`}>
            {depth > 0 ? '►' : '▼'}
          </span>
        </button>
      );
    }
    
    // Regular link
    return (
      <a
        href={link.href || '#'}
        className={link.className || ''}
        onClick={(e) => {
          if (hasChildren) {
            toggleDropdown(id, e);
          }
          link.onClick?.(e);
        }}
        onKeyDown={(e) => handleKeyDown(e, hasChildren, id)}
        aria-haspopup={hasChildren ? "true" : undefined}
        aria-expanded={hasChildren ? isExpanded : undefined}
        title={link.title || link.label || ''}
      >
        {renderLinkContent(link)}
        {hasChildren && (
          <span className={`${styles.arrow} ${isExpanded ? styles.expanded : ''}`}>
            {depth > 0 ? '►' : '▼'}
          </span>
        )}
      </a>
    );
  };

  // Recursive component to render menu items
  const MenuItems = ({ 
    items,
    depth = 0,
    parent = ''
  }: {
    items: NavLinkType[];
    depth?: number;
    parent?: string;
  }) => {
    return items.map((item, index) => {
      const id = parent ? `${parent}-${index}` : `item-${index}`;
      const hasChildren = Boolean(item.subNav?.length);
      const isExpanded = expandedItems.includes(id);
      
      return (
        <li 
          key={id} 
          className={`${hasChildren ? styles.hasChildren : ''} ${isExpanded ? styles.expanded : ''}`}
        >
          <NavItem link={item} id={id} depth={depth} />
          
          {hasChildren && item.subNav && (
            <ul 
              className={`
                ${styles.dropdown} 
                ${isExpanded ? styles.expanded : ''}
                ${!isMobile ? (
                  isRightAligned ? styles.rightAligned :
                  isLeftAligned ? styles.leftAligned :
                  isTopAligned ? styles.topAligned :
                  isBottomAligned ? styles.bottomAligned : ''
                ) : ''}
              `}
              style={depth > 0 && !isMobile ? subLinkStyle : undefined}
            >
              <MenuItems 
                items={item.subNav} 
                depth={depth + 1}
                parent={id}
              />
            </ul>
          )}
        </li>
      );
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

  return (
    <nav 
      ref={navRef}
      className={`
        ${styles.navContainer} 
        ${getThemeClass()} 
        ${isDemoContext ? styles.demoContext : ''}
        ${className}
      `}
      aria-label="Main navigation"
    >
      {/* Skip navigation for accessibility */}
      {showSkipNav && (
        <a href="#main-content" className={styles.skipNav}>
          Skip to main content
        </a>
      )}
      
      {/* Mobile header with hamburger menu */}
      {isMobile && enableMobileCollapse && (
        <div className={styles.mobileHeader}>
          {/* Logo if available */}
          {links.find(link => link.svgLogoIcon) && (
            <div className={styles.mobileBrand}>
              {renderLinkContent(links.find(link => link.svgLogoIcon)!)}
            </div>
          )}
          
          <button
            className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      )}
      
      {/* Main navigation */}
      <ul
        className={`
          ${styles.navList} 
          ${isMobile && enableMobileCollapse ? styles.mobileNav : ''} 
          ${mobileMenuOpen ? styles.mobileOpen : ''}
        `}
        style={baseLinkStyle}
        role="menubar"
      >
        <MenuItems items={links} />
      </ul>
    </nav>
  );
};

export default NavLinks;
