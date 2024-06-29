import React from 'react';

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
declare const NavLinks: React.FC<NavLinksProps>;

export { NavLinks as default };
