import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  return (
    <nav>
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
