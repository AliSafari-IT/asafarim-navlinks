import React from "react";
import defaultStyle from "./NavbarLinks.module.css";
import { NavLinkType } from "./NavLinkType";

type NavLinksProps = {
  links: NavLinkType[];
  className?: string;
  baseLinkStyle?: React.CSSProperties;
  subLinkStyle?: React.CSSProperties;
  isRightAligned?: boolean; // for right aligned links
  isBottomAligned?: boolean; // for bottomAligned links
  isLeftAligned?: boolean; // for left aligned links
  isTopAligned?: boolean; // for top aligned links
};

const NavLinks: React.FC<NavLinksProps> = ({
  links,
  className,
  baseLinkStyle,
  subLinkStyle,
  isRightAligned = false,
  isBottomAligned = false,
  isLeftAligned = false,
  isTopAligned = false,
}) => {
  const renderSubNav = (
    subNav: NavLinkType[] | undefined,
    depth: number = 1
  ) => {
    if (!subNav) return null;
    return (
      <ul
        className={`${className} ${defaultStyle.dropdown} depth-${depth}`}
        style={{ 
          ...subLinkStyle,
          zIndex: 1000 + depth
        }}
        data-depth={depth}
      >
        {subNav.map((subLink, subIndex) => {
          const hasSubNav = !!subLink.subNav && subLink.subNav.length > 0;
          return (
            <li
              key={`sublevel-${depth}-${subIndex}`}
              className={`${
                hasSubNav ? defaultStyle.hasChildren : ""
              } ${
                isRightAligned
                  ? defaultStyle.rightAligned
                  : isBottomAligned
                  ? defaultStyle.bottomAligned
                  : isLeftAligned
                  ? defaultStyle.leftAligned
                  : isTopAligned
                  ? defaultStyle.topAligned
                  : ""
              } dropdown-item-${depth}`}
              data-has-children={hasSubNav ? "true" : "false"}
            >
              <a
                href={subLink.href}
                onClick={(e) => {
                  // Only prevent default if it's a parent item with no actual link
                  if (hasSubNav && subLink.href === "#") {
                    e.preventDefault();
                  }
                }}
                title={subLink.label || subLink.title}
                className={hasSubNav ? "has-submenu" : ""}
                data-depth={depth}
              >
                {getLinkContent(subLink)}
                {hasSubNav && (
                  <span className={defaultStyle.dropdownIndicator} style={{ color: "white", fontWeight: "bold" }}>
                    {depth === 1 ? " ▼" : " ▶"}
                  </span>
                )}
              </a>
              {hasSubNav && renderSubNav(subLink.subNav, depth + 1)}
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
      return <span className={defaultStyle.emoji}>{link.emoji} {link.label}</span>;
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
      className={`${defaultStyle.baseLinks} ${className || ""}`}
      style={baseLinkStyle}
    >
      {links.map((link, index) => {
        return (
          <li
            key={`level-0-${index}`}
            className={`${
              link.subNav ? defaultStyle.hasChildren : ""
            } ${
              isRightAligned
                ? defaultStyle.rightAligned
                : isBottomAligned
                ? defaultStyle.bottomAligned
                : isLeftAligned
                ? defaultStyle.leftAligned
                : isTopAligned
                ? defaultStyle.topAligned
                : ""
            }`}
          >
            <a
              href={link.href}
              onClick={(e) => {
                // Only prevent default if it's a parent item with no actual link
                if (link.subNav && link.href === "#") {
                  e.preventDefault();
                }
              }}
              title={link.label || link.title}
            >
              {getLinkContent(link)}
              {link.subNav && (
                <span className={defaultStyle.dropdownIndicator}> ▼</span>
              )}
            </a>
            {link.subNav && renderSubNav(link.subNav, 1)}
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
