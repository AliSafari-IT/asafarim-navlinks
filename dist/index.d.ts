import React$1 from 'react';

type SvgLinkType = {
    src: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
};

type NavLinkType = {
    label: string;
    href: string;
    svgLogoIcon?: SvgLinkType;
    title?: string;
    iconLeft?: string;
    iconRight?: string;
    emoji?: string;
    subNav?: NavLinkType[];
};

type NavLinksProps = {
    links: NavLinkType[];
    className?: string;
    baseLinkStyle?: React$1.CSSProperties;
    subLinkStyle?: React$1.CSSProperties;
    isRightAligned?: boolean;
    isBottomAligned?: boolean;
};
declare const NavLinks: React$1.FC<NavLinksProps>;

export { type NavLinkType, type SvgLinkType, NavLinks as default };
