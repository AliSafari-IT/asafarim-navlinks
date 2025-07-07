import React from 'react';
import { NavLinkType } from './NavLinkType';
type Theme = 'light' | 'dark' | 'auto';
interface NavLinksProps {
    links: NavLinkType[];
    theme?: Theme;
    className?: string;
    baseLinkStyle?: React.CSSProperties;
    subLinkStyle?: React.CSSProperties;
    isRightAligned?: boolean;
    isLeftAligned?: boolean;
    isTopAligned?: boolean;
    isBottomAligned?: boolean;
    enableMobileCollapse?: boolean;
    showSkipNav?: boolean;
    isDemoContext?: boolean;
}
declare const NavLinks: React.FC<NavLinksProps>;
export default NavLinks;
//# sourceMappingURL=NavLinks.d.ts.map