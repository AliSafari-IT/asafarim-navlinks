import React from 'react';

type NavLinkType = {
    label: string;
    href: string;
    svgRelativePath?: string;
    title?: string;
    iconLeft?: string;
    iconRight?: string;
    emoji?: string;
    subNav?: NavLinkType[];
};

type NavLinksProps = {
    links: NavLinkType[];
    className?: string;
    baseLinkStyle?: React.CSSProperties;
    subLinkStyle?: React.CSSProperties;
    isRightAligned?: boolean;
    isBottomAligned?: boolean;
};
declare const NavLinks: React.FC<NavLinksProps>;

export { NavLinks as default };
