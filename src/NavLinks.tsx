import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
  className: string | undefined;
  style?: React.CSSProperties;
  [key: string]: any;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, className ="sticky top-0 z-50", style = {position: "sticky", top: "0", zIndex: "50"} }) => {
  return (
    <nav className={className} style={style}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
