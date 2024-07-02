import React from 'react';

interface NavLink {
    label: string;
    href: string;
    iconLeft?: string;
    iconRight?: string;
    emoji?: string;
    subNav?: NavLink[];
}
interface NavLinksProps {
    links: NavLink[];
    className?: string;
    baseLinkStyle?: React.CSSProperties;
    subLinkStyle?: React.CSSProperties;
    isRightAligned?: boolean;
    isBottomAligned?: boolean;
}
declare const NavLinks: React.FC<NavLinksProps>;

export { NavLinks as default };
