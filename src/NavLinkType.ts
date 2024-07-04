
export type NavLinkType = {
  label: string;
  href: string;
  svgRelativePath?: string;
  title?: string;
  iconLeft?: string;
  iconRight?: string;
  emoji?: string;
  subNav?: NavLinkType[];
};
