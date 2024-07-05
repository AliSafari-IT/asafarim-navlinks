// src/NavLinks.tsx
import { useState } from "react";

// src/NavbarLinks.module.css
var NavbarLinks_default = {};

// src/NavLinks.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var NavLinks = ({
  links,
  className,
  baseLinkStyle,
  subLinkStyle,
  isRightAligned = false,
  isBottomAligned = false
}) => {
  const [openDropdown, setOpenDropdown] = useState(
    {}
  );
  const handleToggle = (key) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  const renderSubNav = (subNav, parentIndex) => {
    if (!subNav) return null;
    return /* @__PURE__ */ jsx(
      "ul",
      {
        className,
        style: { ...subLinkStyle, position: "absolute" },
        children: subNav.map((subLink, subIndex) => {
          const key = `${parentIndex}-${subIndex}`;
          return /* @__PURE__ */ jsxs(
            "li",
            {
              style: { position: "relative" },
              className: isRightAligned ? NavbarLinks_default.rightAligned : isBottomAligned ? NavbarLinks_default.bottomAligned : void 0,
              children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: subLink.href,
                    onClick: (e) => {
                      if (subLink.subNav) {
                        e.preventDefault();
                        handleToggle(key);
                      }
                    },
                    title: subLink.label,
                    children: getLinkContent(subLink)
                  }
                ),
                openDropdown[key] && renderSubNav(subLink.subNav, key)
              ]
            },
            key
          );
        })
      }
    );
  };
  const getLinkContent = (link) => {
    if (!link) return null;
    if (link.svgLogoIcon) {
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: link.svgLogoIcon.src,
            alt: link.svgLogoIcon.alt,
            width: link.svgLogoIcon.width ?? 40,
            height: link.svgLogoIcon.height ?? "auto",
            style: link.svgLogoIcon.style ?? { width: "20px", height: "20px" }
          }
        ),
        link.svgLogoIcon.caption && /* @__PURE__ */ jsx("span", { children: link.svgLogoIcon.caption })
      ] });
    }
    if (link.emoji) {
      return /* @__PURE__ */ jsx("span", { children: link.emoji });
    }
    if (link.iconLeft) {
      return /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("i", { className: link.iconLeft }),
        " ",
        link.label
      ] });
    }
    if (link.iconRight) {
      return /* @__PURE__ */ jsxs("span", { children: [
        link.label,
        " ",
        /* @__PURE__ */ jsx("i", { className: link.iconRight })
      ] });
    }
    return link.label;
  };
  return /* @__PURE__ */ jsx(
    "ul",
    {
      className: `${NavbarLinks_default.baseLinks} ${className}`,
      style: baseLinkStyle,
      children: links.map((link, index) => {
        const key = index.toString();
        return /* @__PURE__ */ jsxs(
          "li",
          {
            className: isRightAligned ? NavbarLinks_default.rightAligned : isBottomAligned ? NavbarLinks_default.bottomAligned : void 0,
            style: { position: "relative" },
            children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: link.href,
                  onClick: (e) => {
                    if (link.subNav) {
                      e.preventDefault();
                      handleToggle(key);
                    }
                  },
                  title: link.label,
                  children: getLinkContent(link)
                }
              ),
              openDropdown[key] && renderSubNav(link.subNav, key)
            ]
          },
          key
        );
      })
    }
  );
};
var NavLinks_default = NavLinks;
export {
  NavLinks_default as default
};
