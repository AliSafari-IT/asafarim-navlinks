import { SvgLinkType } from "./SvgLinkType";
export type NavLinkType = {
    label?: string;
    href: string;
    svgLogoIcon?: SvgLinkType;
    title?: string;
    iconLeft?: string;
    iconRight?: string;
    emoji?: string;
    subNav?: NavLinkType[];
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
};
//# sourceMappingURL=NavLinkType.d.ts.map