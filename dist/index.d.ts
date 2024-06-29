import React from 'react';

interface NavLink {
    label: string;
    href: string;
}
interface NavLinksProps {
    links: NavLink[];
}
declare const NavLinks: React.FC<NavLinksProps>;

export { NavLinks as default };
