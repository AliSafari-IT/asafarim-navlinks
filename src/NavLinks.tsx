import React, { useState } from "react";
import defaultStyle from "./NavbarLinks.module.css";

type NavLinkType = {
  label: string;
  href: string;
  svgRelativePath?: string;
  title?: string;
  iconLeft?: string;
  iconRight?: string;
  emoji?: string;
  subNav?: NavLinkType[];
}

type NavLinksProps = {
  links: NavLinkType[];
  className?: string;
  baseLinkStyle?: React.CSSProperties;
  subLinkStyle?: React.CSSProperties;
  isRightAligned?: boolean;
  isBottomAligned?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({
  links,
  className,
  baseLinkStyle,
  subLinkStyle,
  isRightAligned = false,
  isBottomAligned = false,
}) => {
  const [openDropdown, setOpenDropdown] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleToggle = (key: string) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderSubNav = (subNav: NavLinkType[] | undefined, parentIndex: string) => {
    if (!subNav) return null;
    return (
      <ul
        className={className}
        style={{ ...subLinkStyle, position: "absolute" }}
      >
        {subNav.map((subLink, subIndex) => {
          const key = `${parentIndex}-${subIndex}`;
          return (
            <li
              key={key}
              style={{ position: "relative", minWidth: "100px",  }}
              className={isRightAligned ? defaultStyle.rightAligned : isBottomAligned ? defaultStyle.bottomAligned : undefined}
              >
              <a
                href={subLink.href}
                onClick={(e) => {
                  if (subLink.subNav) {
                    e.preventDefault();
                    handleToggle(key);
                  }
                }}
              >
              { subLink.emoji && <span>{subLink.emoji}</span>} {subLink.iconLeft && <i className={subLink.iconLeft}></i> } { subLink.label}  { subLink.iconRight && <i className={subLink.iconRight}></i> }
              </a>
              {openDropdown[key] && renderSubNav(subLink.subNav, key)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <ul
      className={`${defaultStyle.baseLinks} ${className}`}
      style={baseLinkStyle}
    >
      {links.map((link, index) => {
        const key = index.toString();
        return (
          <li
            key={key}
            className={isRightAligned ? defaultStyle.rightAligned : isBottomAligned ? defaultStyle.bottomAligned : undefined}
            style={{ position: "relative", display: "inline-block", margin: "0" }}
          >
            <a
              href={link.href}
              onClick={(e) => {
                if (link.subNav) {
                  e.preventDefault();
                  handleToggle(key);
                }
              }}
            >
              { link.emoji && <span>{link.emoji}</span>} {link.iconLeft && <i className={link.iconLeft}></i> } { link.label}  { link.iconRight && <i className={link.iconRight}></i> }
            </a>
            {openDropdown[key] && renderSubNav(link.subNav, key)}
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
