import React, { useState } from "react";
import defaultStyle from "./NavbarLinks.module.css";
import { NavLinkType } from "./NavLinkType";

type NavLinksProps = {
  links: NavLinkType[];
  className?: string;
  baseLinkStyle?: React.CSSProperties;
  subLinkStyle?: React.CSSProperties;
  isRightAligned?: boolean; // for right aligned links
  isBottomAligned?: boolean; // for bottomAligned links
};

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

  const renderSubNav = (
    subNav: NavLinkType[] | undefined,
    parentIndex: string
  ) => {
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
              style={{ position: "relative" }}
              className={
                isRightAligned
                  ? defaultStyle.rightAligned
                  : isBottomAligned
                  ? defaultStyle.bottomAligned
                  : undefined
              }
            >
              <a
                href={subLink.href}
                onClick={(e) => {
                  if (subLink.subNav) {
                    e.preventDefault();
                    handleToggle(key);
                  }
                }}
                title={subLink.label}
              >
                {getLinkContent(subLink)}
              </a>
              {openDropdown[key] && renderSubNav(subLink.subNav, key)}
            </li>
          );
        })}
      </ul>
    );
  };

  const getLinkContent = (link: NavLinkType) => {
    if (!link) return null;
    if (link.svgLogoIcon) {
      return (
        <> 
          <img
            src={link.svgLogoIcon.src}
            alt={link.svgLogoIcon.alt}
            width={link.svgLogoIcon.width ?? 40}
            height={link.svgLogoIcon.height ?? "auto"}
            style={link.svgLogoIcon.style ?? { width: "20px", height: "20px" }}
          />
          {link.svgLogoIcon.caption && <span>{link.svgLogoIcon.caption}</span>}
        </>
      );
    }

    if (link.emoji) {
      return <span>{link.emoji}</span>;
    }
    if (link.iconLeft) {
      return (
        <span>
          <i className={link.iconLeft}></i> {link.label}
        </span>
      );
    }
    if (link.iconRight) {
      return (
        <span>
          {link.label} <i className={link.iconRight}></i>
        </span>
      );
    }

    return link.label;
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
            className={
              isRightAligned
                ? defaultStyle.rightAligned
                : isBottomAligned
                ? defaultStyle.bottomAligned
                : undefined
            }
            style={{ position: "relative" }}
          >
            <a
              href={link.href}
              onClick={(e) => {
                if (link.subNav) {
                  e.preventDefault();
                  handleToggle(key);
                }
              }}
              title={link.label}
            >
              {getLinkContent(link)}
            </a>
            {openDropdown[key] && renderSubNav(link.subNav, key)}
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
