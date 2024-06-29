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
            {link.subNav && link.subNav.length > 0 && openDropdown === index && (
              <ul style={{ ...subLinkStyle, position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', border: '1px solid #ccc', padding: '10px', zIndex: 100 }}>
                {link.subNav.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <a href={subLink.href}>{subLink.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
