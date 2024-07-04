import React, { useState } from 'react';
import defaultStyle from './NavbarLinks.module.css';
 
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

type NavLinksProps = {
  links: NavLinkType[];
  className?: string;
  baseLinkStyle?: React.CSSProperties;
  subLinkStyle?: React.CSSProperties;
  isRightAligned?: boolean;
  isBottomAligned?: boolean;
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
    {},
  );

  function getSvg(link: NavLinkType) {
    let svgRelativePath = link.svgRelativePath;
    // add './' to svgRelativePath if it is not a full path or a valid remote url and it doesn't have it
    if (svgRelativePath &&
      !svgRelativePath.startsWith('./') &&
      !svgRelativePath.startsWith('/') &&
      !svgRelativePath.startsWith('http')) {
      svgRelativePath = `./${svgRelativePath}`;
    }
    return svgRelativePath;
  }

  const handleToggle = (key: string) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderSubNav = (
    subNav: NavLinkType[] | undefined,
    parentIndex: string,
  ) => {
    if (!subNav) return null;
    return (
      <ul
        className={className}
        style={{ ...subLinkStyle, position: 'absolute' }}
      >
        {subNav.map((subLink, subIndex) => {
          const key = `${parentIndex}-${subIndex}`;
          const svgRelativePath = getSvg(subLink);

          return (
            <li
              key={key}
              style={{ position: 'relative' }}
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
              >
               {svgRelativePath && (
                  <img src={require(`${svgRelativePath}`)} alt={subLink.title} />
                ) && <span>{subLink.label}</span>}
              {!svgRelativePath && subLink.emoji && <span>{subLink.emoji}</span>}
              {!svgRelativePath && !subLink.emoji && subLink.iconLeft && (
                <i className={subLink.iconLeft}></i>
              )}
              {subLink.label}
              {!svgRelativePath && !subLink.emoji && subLink.iconRight && (
                <i className={subLink.iconRight}></i>
              )}
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
        const svgRelativePath = getSvg(link);

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
            style={{ position: 'relative' }}
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
              {svgRelativePath && (
                  <img src={require(`${svgRelativePath}`)} alt={link.title} />
                ) && <span>{link.label}</span>}
              {!svgRelativePath && link.emoji && <span>{link.emoji}</span>}
              {!svgRelativePath && !link.emoji && link.iconLeft && (
                <i className={link.iconLeft}></i>
              )}
              {link.label}
              {!svgRelativePath && !link.emoji && link.iconRight && (
                <i className={link.iconRight}></i>
              )}
            </a>
            {openDropdown[key] && renderSubNav(link.subNav, key)}
          </li>
        );

        
      })}
    </ul>
  );
};

export default NavLinks;
