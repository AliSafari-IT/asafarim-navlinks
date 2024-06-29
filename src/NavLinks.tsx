import React, { useState } from 'react';
import defaultStyle from './NavbarLinks.module.css';

interface NavLink {
  label: string;
  href: string;
  subNav?: NavLink[];
}

interface NavLinksProps {
  links: NavLink[];
  className?: string;
  style?: React.CSSProperties;
  baseLinkStyle?: React.CSSProperties;
  subLinkStyle?: React.CSSProperties;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, className, style, baseLinkStyle, subLinkStyle }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const renderSubNav = (subNav: NavLink[] | undefined) => {
    if (!subNav) return null;
    return (
      <ul style={{ ...subLinkStyle, position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', border: '1px solid #ccc', padding: '10px', zIndex: 100 }}>
        {subNav.map((subLink, subIndex) => (
          <li key={subIndex} style={{ position: 'relative' }}>
            <a href={subLink.href}>{subLink.label}</a>
            {renderSubNav(subLink.subNav)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className={className ?? defaultStyle.navContainer} style={{ ...style }}>
      <ul className={defaultStyle.baseLinks} style={{ ...baseLinkStyle }}>
        {links.map((link, index) => (
          <li 
            key={index} 
            onMouseEnter={() => handleMouseEnter(index)} 
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
          >
            <a href={link.href}>{link.label}</a>
            {link.subNav && openDropdown === index && renderSubNav(link.subNav)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
