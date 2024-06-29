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
  const [openDropdown, setOpenDropdown] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (key: string) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderSubNav = (subNav: NavLink[] | undefined, parentIndex: string) => {
    if (!subNav) return null;
    return (
      <ul style={{ ...subLinkStyle, position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', border: '1px solid #ccc', padding: '10px', zIndex: 100 }}>
        {subNav.map((subLink, subIndex) => {
          const key = `${parentIndex}-${subIndex}`;
          return (
            <li key={key} style={{ position: 'relative' }}>
              <a href={subLink.href} onClick={(e) => {
                if (subLink.subNav) {
                  e.preventDefault();
                  handleToggle(key);
                }
              }}>{subLink.label}</a>
              {openDropdown[key] && renderSubNav(subLink.subNav, key)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className={className ?? defaultStyle.navContainer} style={{ ...style }}>
      <ul className={defaultStyle.baseLinks} style={{ ...baseLinkStyle }}>
        {links.map((link, index) => {
          const key = index.toString();
          return (
            <li 
              key={key} 
              style={{ position: 'relative' }}
            >
              <a href={link.href} onClick={(e) => {
                if (link.subNav) {
                  e.preventDefault();
                  handleToggle(key);
                }
              }}>{link.label}</a>
              {openDropdown[key] && renderSubNav(link.subNav, key)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
